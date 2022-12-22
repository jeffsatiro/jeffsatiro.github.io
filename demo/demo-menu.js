const createDemoMenu = () => ({
  install(app, options) {
    app.component('demo-menu', {
      data: () => ({
        items: [
          {name:'Championship', href:'../championship/index.html'},
          {name:'Clockify', href:'../clockify/index.html'},
          {name:'Filesize Generator', href:'../filesize-generator/index.html'},
          {name:'Leaflet', href:'../leaflet/index.html'},
          {name:'OpenAPI', href:'../openapi/index.html'},
        ],
      }),
      template: `<div style="position:fixed; bottom:25px; right:50px; z-index:999;">
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