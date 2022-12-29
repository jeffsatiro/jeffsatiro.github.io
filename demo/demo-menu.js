window.addEventListener('DOMContentLoaded', (event) => {
  const demoMenu = Object.assign(document.createElement('div'), {
    innerHTML: `<div style="display:flex; gap:10px; position:fixed; bottom:15px; right:15px; z-index:999!important;">
      <v-btn icon="mdi-xml" :href="sourceUrl" target="_blank"></v-btn>

      <v-menu :close-on-content-click="false">
        <template #activator="{ props }">
          <v-btn v-bind="props" color="primary" icon="mdi-menu"></v-btn>
        </template>

        
        <v-card width="300" class="mb-3">
          <div class="d-flex flex-column">
            <div>
              <v-text-field
                v-model="filter"
                label="Filtro"
                :hide-details="true"
              ></v-text-field>
            </div>
            <div style="max-height:80vh; overflow:auto;">
              <v-list>
                <template v-for="(_item, i) in itemsFiltered()">
                  <v-list-item
                    :key="i"
                    :href="\`../\${_item.id}/index.html\`"
                    :prepend-icon="_item.icon"
                  >
                    {{ _item.name }}
                  </v-list-item>
                </template>
              </v-list>
            </div>
          </div>
        </v-card>
      </v-menu>
    </div>`,
  });

  document.body.appendChild(demoMenu);

  Vue.createApp({
    methods: {
      itemsFiltered() {
        let filter = this.filter.toLowerCase();
        if (!filter) return this.items;
        return this.items.filter(item => {
          return JSON.stringify(item).toLowerCase().includes(filter);
        });
      },
    },
    data: () => ({
      filter: '',
      items: [
        // {
        //   id: 'brainjs',
        //   name: 'BrainJS',
        //   icon: 'mdi-check',
        // },
        // {
        //   id: 'championship',
        //   name: 'Championship',
        //   icon: 'mdi-check',
        // },
        {
          id: 'clockify',
          name: 'Clockify',
          icon: 'mdi-alarm-check',
        },
        {
          id: 'diff-tool',
          name: 'Ferramenta diff',
          icon: 'mdi-set-left',
        },
        {
          id: 'filesize-generator',
          name: 'Gerador de arquivo',
          icon: 'mdi-file-download-outline',
        },
        {
          id: 'laramake',
          name: 'Gerador Laravel',
          icon: 'mdi-laravel',
        },
        {
          id: 'leaflet',
          name: 'Mapa',
          icon: 'mdi-map-search',
        },
        {
          id: 'lotto',
          name: 'Loteria',
          icon: 'mdi-slot-machine',
        },
        // {
        //   id: 'openapi',
        //   name: 'OpenAPI',
        //   icon: 'mdi-check',
        // },
        {
          id: 'qrcode',
          name: 'QR Code',
          icon: 'mdi-qrcode',
        },
        {
          id: 'text',
          name: 'Ferramentas de texto',
          icon: 'mdi-text-box-edit-outline',
        },
        {
          id: 'whatsapp',
          name: 'Gerador link whatsapp',
          icon: 'mdi-whatsapp',
        },
      ],
    }),
    computed: {
      sourceUrl() {
        return location.href.replace(/.+\/demo\/(.+?)\/index\.html.*/g, 'https://github.com/jeff-silva/jeff-silva.github.io/blob/master/demo/$1/');
      },
    },
  })
  .use(Vuetify.createVuetify({}))
  .mount(demoMenu);
});
