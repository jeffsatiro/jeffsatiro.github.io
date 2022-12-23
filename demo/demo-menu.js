const createDemoMenu = () => ({
  install(app, options) {
    app.component('demo-menu', {
      data: () => ({
        source: location.href.replace(/.+\/demo\/(.+?)\/index\.html.*/g, 'https://github.com/jeff-silva/jeff-silva.github.io/blob/master/demo/$1/index.html'),
        items: [
          {name:'BrainJS', href:'../brainjs/index.html'},
          {name:'Championship', href:'../championship/index.html'},
          {name:'Clockify', href:'../clockify/index.html'},
          {name:'Diff Tool', href:'../diff-tool/index.html'},
          {name:'Filesize Generator', href:'../filesize-generator/index.html'},
          {name:'Leaflet', href:'../leaflet/index.html'},
          {name:'Lotto Simulation', href:'../lotto/index.html'},
          {name:'OpenAPI', href:'../openapi/index.html'},
          {name:'Text tools', href:'../text/index.html'},
        ],
      }),
      template: `<div style="display:flex; gap:10px; position:fixed; bottom:25px; right:50px; z-index:999;">
        <v-btn icon="mdi-xml" :href="source" target="_blank"></v-btn>
        
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
  },
});