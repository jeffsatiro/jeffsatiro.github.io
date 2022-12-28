window.addEventListener('DOMContentLoaded', (event) => {
  const demoMenu = Object.assign(document.createElement('div'), {
    innerHTML: `<div style="display:flex; gap:10px; position:fixed; bottom:15px; right:15px; z-index:999!important;">
      <v-btn icon="mdi-xml" :href="sourceUrl" target="_blank"></v-btn>

      <v-menu>
        <template #activator="{ props }">
          <v-btn v-bind="props" color="primary" icon="mdi-menu"></v-btn>
        </template>

        <v-list width="200" class="mb-3">
          <template v-for="(item, itemIndex) in items">
            <v-list-item :key="itemIndex" :href="item.href">
              {{ item.name }}
            </v-list-item>
          </template>
        </v-list>
      </v-menu>
    </div>`,
  });

  document.body.appendChild(demoMenu);

  Vue.createApp({
    data: () => ({
      items: [
        // {name:'BrainJS', href:'../brainjs/index.html'},
        // {name:'Championship', href:'../championship/index.html'},
        {name:'Clockify', href:'../clockify/index.html'},
        {name:'Diff Tool', href:'../diff-tool/index.html'},
        {name:'Filesize Generator', href:'../filesize-generator/index.html'},
        {name:'Laramake', href:'../laramake/index.html'},
        {name:'Leaflet', href:'../leaflet/index.html'},
        {name:'Lotto Simulation', href:'../lotto/index.html'},
        // {name:'OpenAPI', href:'../openapi/index.html'},
        {name:'Text tools', href:'../text/index.html'},
        {name:'Gerador link whatsapp', href:'../whatsapp/index.html'},
      ],
    }),
    computed: {
      sourceUrl() {
        return location.href.replace(/.+\/demo\/(.+?)\/index\.html.*/g, 'https://github.com/jeff-silva/jeff-silva.github.io/blob/master/demo/$1/index.html');
      },
    },
  })
  .use(Vuetify.createVuetify({}))
  .use(VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [],
  }))
  .mount(demoMenu);
});
