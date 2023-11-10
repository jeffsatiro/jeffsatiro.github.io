window.addEventListener('DOMContentLoaded', (event) => {
  const demoMenu = Object.assign(document.createElement('div'), {
    innerHTML: `<div style="display:flex; gap:10px; position:fixed; bottom:15px; right:15px; z-index:999!important;">
      <v-btn icon="mdi-xml" :href="sourceUrl" target="_blank"></v-btn>

      <v-menu :close-on-content-click="false">
        <template #activator="{ props }">
          <v-btn v-bind="props" color="primary" icon="mdi-menu"></v-btn>
        </template>

        
        <v-card width="320" class="mb-3">
          <div class="d-flex flex-column">
            <div>
              <v-text-field
                v-model="filter"
                label="Filtro"
                :hide-details="true"
              ></v-text-field>
            </div>
            <div style="max-height:80vh; overflow:auto;">
              <v-list lines="two">
                <template v-for="(_item, i) in itemsFiltered()">
                  <v-list-item
                    :key="i"
                    :href="\`../\${_item.id}/index.html\`"
                    :prepend-icon="_item.icon"
                    :title="_item.name"
                    :subtitle="_item.description"
                    :active="_item.id==currentRoute"
                  ></v-list-item>
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
        {
          id: 'bookapp',
          name: 'Gerador app bookmark',
          description: 'Gere aplicações que rodam diretamente da barra de favoritos',
          icon: 'mdi-bookmark-plus-outline',
        },
        // {
        //   id: 'brainjs',
        //   name: 'BrainJS',
        //   description: 'Simulação de AI',
        //   icon: 'mdi-check',
        // },
        // {
        //   id: 'championship',
        //   name: 'Championship',
        //   description: 'Gerador de campeonato',
        //   icon: 'mdi-check',
        // },
        {
          id: 'clockify',
          name: 'Clockify',
          description: 'Gerenciamento e cálculo de horas trabalhadas utilizando o app Clockify',
          icon: 'mdi-alarm-check',
        },
        {
          id: 'diff-tool',
          name: 'Ferramenta diff',
          description: 'Comparação de códigos, textos e afins',
          icon: 'mdi-set-left',
        },
        {
          id: 'filesize-generator',
          name: 'Gerador de arquivo',
          description: 'Aplicação para gerar arquivos com tamanhos exatos',
          icon: 'mdi-file-download-outline',
        },
        {
          id: 'laramake',
          name: 'Gerador Laravel',
          description: 'Criar arquivos para o frameworl Laravel baseado em estrutura de banco de dados',
          icon: 'mdi-laravel',
        },
        {
          id: 'leaflet',
          name: 'Mapa',
          description: 'Visualizador de mapa',
          icon: 'mdi-map-search',
        },
        {
          id: 'lotto',
          name: 'Loteria',
          description: 'Aplicação de simulação lotérica',
          icon: 'mdi-slot-machine',
        },
        // {
        //   id: 'meme',
        //   name: 'Gerador de memes',
        //   description: 'Aplicação para gerar memes de maneira rápida',
        //   icon: 'mdi-emoticon-poop',
        // },
        // {
        //   id: 'openapi',
        //   name: 'OpenAPI',
        //   description: 'Alternativa para visualização e consumo de endpoints de API',
        //   icon: 'mdi-check',
        // },
        // {
        //   id: 'paste',
        //   name: 'Paste',
        //   description: 'Cole, edite e baixe arquivos de maneira rápida',
        //   icon: 'mdi-content-paste',
        // },
        // {
        //   id: 'print3d',
        //   name: 'Print 3D Simulator',
        //   description: 'Aplicação para simular artes em ambientes tridimensionais',
        //   icon: 'mdi-cube',
        // },
        {
          id: 'qrcode',
          name: 'QR Code',
          description: 'Gerador dos principais tipos de QRcode',
          icon: 'mdi-qrcode',
        },
        // {
        //   id: 'search',
        //   name: 'Busca global',
        //   description: 'Ferramenta para auxiliar na busca de qualquer coisa: de pessoas à produtos',
        //   icon: 'mdi-magnify',
        // },
        {
          id: 'text',
          name: 'Ferramentas de texto',
          description: 'Conversores, analisadores e ferramentas úteis para gerencimento de texto',
          icon: 'mdi-text-box-edit-outline',
        },
        {
          id: 'whatsapp',
          name: 'Gerador link whatsapp',
          description: 'Gerar link para whatsapp de maneira rápida e fácil',
          icon: 'mdi-whatsapp',
        },
      ],
    }),
    computed: {
      sourceUrl() {
        return location.href.replace(/.+\/demo\/(.+?)\/index\.html.*/g, 'https://github.com/jeff-silva/jeff-silva.github.io/blob/master/demo/$1/');
      },

      currentRoute() {
        return location.href.replace(/.+\/demo\/(.*?)\/.+/gi, '$1');
      },
    },
  })
  .use(Vuetify.createVuetify({}))
  .mount(demoMenu);
});
