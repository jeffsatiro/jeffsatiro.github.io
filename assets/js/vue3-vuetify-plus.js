/* Dependencies:
  <!-- Dayjs -->
  <script src="https://unpkg.com/dayjs@1.11.7/dayjs.min.js"></script>
  <script src="https://unpkg.com/dayjs@1.11.7/locale/en.js"></script>
  <script src="https://unpkg.com/dayjs@1.11.7/plugin/localeData.js"></script>
  <script>dayjs.locale('en'); dayjs.extend(dayjs_plugin_localeData);</script>
*/

const createVuetifyPlus = (options = {}) => ({
  install(app, options = {}) {

    // vv-dd
    app.component('vv-dd', {
      props: {
        modelValue: {
          type: [ Boolean, Number, String, Array, Object, Function ],
          default: false,
        },
        activeKey: {
          type: [ Boolean, String ],
          default: false,
        },
      },
      methods: {
        dataType(data) {
          return Array.isArray(data) ? 'array' : typeof data;
        },
        dataTypeIs(data, type) {
          return type == this.dataType(data);
        },
        dataObjectKeys(data) {
          if (!this.dataTypeIs(data, 'object')) return [];
          let items = [];
          Object.keys(data).forEach((key, index) => {
            const type = this.dataType(data[ key ]);
            items.push({ key, type });
          });
          return items;
        },
      },
      data() {
        return {
          modelValueKey: this.activeKey || (this.dataTypeIs(this.modelValue, 'object') ? Object.keys(this.modelValue)[0] : false),
        };
      },
      template: `<v-card>
        <div v-if="dataTypeIs(modelValue, 'object')">
          <v-row>
            <v-col cols="3">
            <v-list>
              <v-list-subheader>KEYS</v-list-subheader>
                <v-list-item
                  v-for="o in dataObjectKeys(modelValue)"
                  :key="o.key"
                  @click="modelValueKey = o.key"
                  :active="o.key == modelValueKey"
                  active-color="success"
                >
                  ({{ o.type }}) {{ o.key }}
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="9">
              <pre class="pa-2" style="height:100%; background:#222; color:lime;">{{ modelValueKey }}: {{ modelValue[ modelValueKey ] }}</pre>
            </v-col>
          </v-row>
        </div>
        <div v-else>
          <pre>{{ dataType(modelValue) }}: {{ modelValue }}</pre>
        </div>
      </v-card>`,
    });


    // vv-calendar
    app.component('vv-calendar', {
      props: {
        modelValue: {
          type: [Boolean, String],
          default: dayjs().format('YYYY-MM-DD'),
        },
        dates: {
          type: Array,
          default: () => ([]),
        },
      },
      computed: {
        month: {
          set(value) {},
          get() {
            const d = dayjs(this.modelValue);
            const r = {};
            r.date = d.format('YYYY-MM-DD');
            r.year = d.format('YYYY');
            r.month = d.format('MM');
            r.day = d.format('DD');
            r.monthName = d.format('MMMM');
            r.daysInMonth = d.daysInMonth();
            r.firstDay = d.startOf("month").day();
            r.weekdays = dayjs.weekdays().map(weekday => weekday.substring(0, 3));
            r.days = (() => {
              const dayDefault = {id:null, day:null, dayName:null, dayAbbr:null, dates:[]};
              let days=[];

              for(let i=0; i<r.firstDay; i++) {
                days.push({ ...dayDefault });
              }
              for(let i=1; i<=r.daysInMonth; i++) {
                const dd = d.set('date', i);
                let day = { ...dayDefault };
                day.id = dd.format();
                day.date = dd.format('YYYY-MM-DD');
                day.day = dd.format('DD');
                day.dayName = dayjs.weekdays()[ dd.day() ];
                day.dayAbbr = day.dayName.substring(0, 3);
                days.push(day);
              }

              days = days.map(day => {
                if (!day.id) return day;
                day.dates = this.dates.filter(d => {
                  return d.date.startsWith(day.date);
                });
                return day;
              });
              
              const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
              return chunk(days, 7);
            })();
            return r;
          },
        },
      },
      methods: {
        monthAdd(n) {
          const month = dayjs(this.modelValue).add(n, 'month').format('YYYY-MM-DD');
          this.$emit('update:modelValue', month);
        },
        slotBind(merge = {}) {
          return {
            modelValue: this.modelValue,
            ...merge
          };
        },
      },
      template: `<div>
        <v-table>
          <template #default>
            <thead>
              <tr>
                <th colspan="2" class="p-0 text-left">
                  <v-btn flat :size="30" icon="mdi-chevron-left" @click="monthAdd(-1)"></v-btn>  
                </th>
                <th colspan="3" class="p-0 text-center">
                  {{ month.year }} {{ month.monthName }}
                </th>
                <th colspan="2" class="p-0 text-right">
                  <v-btn flat :size="30" icon="mdi-chevron-right" @click="monthAdd(1)"></v-btn>  
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-for="wdays in month.days">
                <tr>
                  <template v-for="d in wdays">
                    <td class="text-center pa-0">
                      <slot name="day" v-bind="slotBind(d)">
                        <v-btn block flat :size="35">{{ d.day }}</v-btn>
                      </slot>
                    </td>
                  </template>
                </tr>
              </template>
            </tbody>
          </template>  
        </v-table>
      </div>`,
    });


    // vv-app-layout
    app.component('vv-app-layout', {
      props: {
        title: {
          type: [ Boolean, String ],
          default: false,
        },
        drawerShow: {
          type: Boolean,
          default: true,
        },
        drawerWidth: {
          type: [Number],
          default: 300,
        },
        headerFluid: {
          type: Boolean,
          default: true,
        },
      },

      methods: {
        slotBind() {
          return {};
        },
        onResize() {
          this.headerHeight = this.$refs.header.$el.offsetHeight;
        },
      },

      data: () => ({
        useDisplay: Vuetify.useDisplay(),
        showDrawer: true,
        headerHeight: 50,
      }),

      template: `<v-layout v-resize="onResize">
        <v-navigation-drawer
            v-model="showDrawer"
            :width="drawerWidth"
            elevation="1"
            v-if="drawerShow"
          >
          <slot name="drawer" v-bind="slotBind()"></slot>
        </v-navigation-drawer>

        <v-app-bar elevation="1" ref="header">
          <v-container :fluid="headerFluid">
            <div class="d-flex align-center flex-grow-1 px-2" style="gap:10px;">
              <v-btn
                icon="mdi-menu"
                @click="showDrawer=true"
                v-if="!useDisplay.lgAndUp && drawerShow"
              ></v-btn>
              <v-app-bar-title v-if="title">{{ title }}</v-app-bar-title>
              <slot name="header" v-bind="slotBind()"></slot>
            </div>
          </v-container>
        </v-app-bar>

        <v-main>
          <div class="pa-3" :style="\`height:calc(100vh - \${headerHeight}px); overflow:auto;\`">
            <slot v-bind="slotBind()"></slot>
          </div>
        </v-main>
      </v-layout>`,
    });


    // vv-alert
    app.component('vv-alert', {
      props: {
        modelValue: {
          type: [ Boolean, Number, String, Array, Object ],
          default: true,
        },

        type: {
          type: String,
          default: 'v-dialog', // v-dialog | v-snackbar
        },
        
        color: {
          type: String,
          default: 'default',
        },
      },

      methods: {
        close() {
          this.$emit('update:modelValue', false);
        },
      },

      computed: {
        dataType() {
          let color = this.color, icon = 'mdi-check';
          if (this.type=='error') {
            icon = 'mdi-alert-circle';
          }
          return { color, icon };
        },
      },

      template: `<div>
        <v-dialog
          v-if="['v-dialog', 'dialog', 'alert', 'modal'].includes(this.type)"
          v-model="modelValue"
          :timeout="-1"
        >
          <div style="display:inline-block; margin:0 auto;">
            <v-card width="500" :color="dataType.color">
              <v-card-text>
                <div class="d-flex">
                  <v-icon>{{ dataType.icon }}</v-icon>
                  <div class="flex-grow-1 ms-3">
                    <slot></slot>
                  </div>
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="close()">Ok</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-dialog>

        <v-snackbar
          v-if="['v-snackbar', 'snackbar'].includes(this.type)"
          v-model="modelValue"
          multi-line
          :color="dataType.color"
          :timeout="-1"
        >
          <div class="d-flex">
            <v-icon>{{ dataType.icon }}</v-icon>
            <div class="flex-grow-1 ms-3">
              <slot></slot>
            </div>
          </div>

          <template #actions>
            <v-btn @click="close()">Ok</v-btn>
          </template>
        </v-snackbar>
      </div>`,
    });


    // vv-qrcode
    app.component('vv-qrcode', {
      props: {
          modelValue: {default:""},
          size: {default:"300x300"},
      },
      data() {
        return {
          qrcodeUrl: this.getQrcodeUrl(this.modelValue),
          timeout: false,
        };
      },
      watch: {
        modelValue(value) {
          if (this.timeout) clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            this.qrcodeUrl = this.getQrcodeUrl(value);
          }, 1000);
        },
      },
      methods: {
        getQrcodeUrl(text) {
          return `https://chart.googleapis.com/chart?cht=qr&chs=${this.size}&chl=${text}`;
        },
      },
      template: `<v-img :src="qrcodeUrl" alt=""></v-img>`,
    });
  },
});
