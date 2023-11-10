const createLeaflet = (options = {}) => ({
  install(app, options = {}) {

    const base = {
      methods: {
        getMap() {
          let found = false;
          let currentComp = this;
          while (currentComp && !found) {
            if (currentComp.map) {
              return currentComp.map;
            }
            currentComp = currentComp.$parent;
          }
        },

        debounce(id, time, callback) {
          window._debounce = window._debounce || {};
          if (window._debounce[id]) clearTimeout(window._debounce[id]);
          window._debounce[id] = setTimeout(callback, time);
        },

        getFragment(node) {
          const fragment = new DocumentFragment();
          fragment.append(node);
          const html = document.createElement('div');
          html.append(fragment);
          return html;
        },
      },
    };

    // l-map
    app.component('l-map', {
      extends: base,
      props: {
        center: {
          type: Array,
          default: () => ([0, 0]),
        },
        zoom: {
          type: Number,
          default: 10,
        },
        osm: {
          type: [ Boolean, Object ],
          default: false,
        },
      },
      watch: {
        $props: {deep:true, handler(props) {
          if (props.zoom != this.map.getZoom()) {
            this.map.setZoom(props.zoom);
          }
        }},
      },
      data: () => ({
        map: false,
        ready: false,
      }),
      methods: {
        async getOsmData() {
          if (!this.osm) return;
          if (this.map.getZoom()<16) return;
          this.debounce('vue3_leaflet_get_osm_data', 1000, async () => {
            const bounds = this.map.getBounds();
          
            const params = {
              data: '[out:json];out;',
              bbox: [
                bounds.getWest(),
                bounds.getSouth(),
                bounds.getEast(),
                bounds.getNorth(),
              ].join(','),
            };

            const { data } = await axios.get('https://api.openstreetmap.org/api/0.6/map', { params });
            this.$emit('update:osm', data);
          });
        },
      },
      async mounted() {
        this.map = L.map(this.$el, { center: this.center, zoom: this.zoom });
        await this.getOsmData();

        this.map.on('moveend', async ev => {
          this.$emit('update:center', Object.values(this.map.getCenter()));
          await this.getOsmData();
        });

        this.map.on('zoomend', async ev => {
          this.$emit('update:zoom', this.map.getZoom());
          await this.getOsmData();
        });

        [
          'zoomlevelschange', 'resize', 'unload', 'viewreset', 'load', 'zoomstart', 'movestart', 'zoom', 'move', 'zoomend', 'moveend',
          'popupopen', 'popupclose', 'autopanstart', 'tooltipopen', 'tooltipclose', 'locationerror', 'locationfound', 'click', 'dblclick',
          'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'contextmenu', 'keypress', 'keydown', 'keyup', 'preclick', 'zoomanim',
        ].forEach(evt => {
          this.map.on(evt, ev => this.$emit(evt, ev));
        });

        this.ready = true;
      },
      template: `<div style="width:100%; height:300px; position:relative;"><slot v-if="ready"></slot></div>`,
    });

    // l-tile-layer
    app.component('l-tile-layer', {
      extends: base,
      props: {
        url: { type: String, default: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'},
        attribution: { type: String, default: ''},
      },
      watch: {
        $props: {deep:true, handler(props) {
          this.tileLayer.setUrl(props.url);
        }},
      },
      data: () => ({ tileLayer: false }),
      mounted() {
        this.tileLayer = L.tileLayer(this.url, {}).addTo(this.$parent.map);
      },
    });

    // l-marker
    app.component('l-marker', {
      extends: base,
      props: {
        center: {type: Array, default: () => ([0, 0])},
        icon: { type: [Boolean, String, Object], default: false },
        keyboard: { type: Boolean, default: true },
        title: { type: String, default: '' },
        alt: { type: String, default: '' },
        zIndexOffset: { type: Number, default: 0 },
        opacity: { type: Number, default: 1 },
        riseOnHover: { type: Boolean, default: false },
        riseOffset: { type: Number, default: 250 },
        pane: { type: String, default: 'markerPane' },
        shadowPane: { type: String, default: 'shadowPane' },
        bubblingMouseEvents: { type: Boolean, default: false },
        autoPanOnFocus: { type: Boolean, default: true },
        draggable: { type: Boolean, default: false },
        autoPan: { type: Boolean, default: false },
        autoPanPadding: { type: Object, default: L.point(50, 50) },
        autoPanSpeed: { type: Number, default: 10 },
      },
      watch: {
        $props: {deep:true, handler(props) {
          this.marker.setIcon(this.parseIcon(props.icon));
        }},
      },
      data: () => ({
        marker: false,
      }),
      methods: {
        parsedProps() {
          let props = { ...this.$props };
          props.icon = this.parseIcon(props.icon);
          return props;
        },
        parseIcon(icon) {
          if (this.$slots.content) {
            return L.divIcon({
              className: null,
              iconSize: null,
              html: this.getFragment(this.$refs.slotContent),
            });
          }

          if (icon==false) {
            return L.icon({
              iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
              // iconSize: [25, 41],
              // iconAnchor: [22, 94],
              // popupAnchor: [-3, -76],
              shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
              // shadowSize: [68, 95],
              // shadowAnchor: [22, 94]
            });
          }
          
          if (typeof icon=='string') {
            return L.icon({
              iconUrl: this.$props.icon,
              iconSize: [40, 40],
              iconAnchor: [20, 20],
            });
          }
          
          if (typeof icon=='object') {
            return L.icon(this.$props.icon);
          }
        },
      },
      beforeUnmount() {
        this.marker.removeFrom(this.$parent.map);
      },
      mounted() {
        this.marker = L.marker(this.center, this.parsedProps());
        this.marker.addTo(this.getMap());

        this.marker.on('moveend', ev => this.$emit('update:center', Object.values(ev.sourceTarget._latlng)));
        ['move', 'dragstart', 'movestart', 'drag', 'dragend', 'moveend', 'click'].forEach(evt => {
          this.marker.on(evt, ev => this.$emit(evt, ev));
        });
      },
      template: `<div>
        <slot></slot>
        <div ref="slotContent"><slot name="content"></slot></div>
      </div>`,
    });

    const overlay = {
      extends: base,
      template: `<div><slot></slot></div>`,
      props: {
        modelValue: {type:Boolean, default:false},
        center: {type:Array, default: () => ([0, 0])},
      },
      data: () => ({ overlay: false }),
      methods: {
        overlayCreate() {},
      },
      computed: {
        propsCenter: {
          get() {
            let center = [ ...this.center ];
            if (center[0]==0 && center[1]==0) {
              center =  [...this.$parent.center ];
            }
            return center;
          },
          set(value) { this.emit('update:center', value); },
        },
      },
      mounted() {
        this.overlay = this.overlayCreate();
        // if (this.modelValue) {
        //   this.overlay.openPopup();
        // }
      },
    };

    // l-popup
    app.component('l-popup', {
      extends: overlay,
      methods: {
        overlayCreate() {
          return L.popup(this.propsCenter, {
            content: this.getFragment(this.$el),
          });
          // }).addTo(this.getMap());
        },
      },
    });

    // l-tooltip
    app.component('l-tooltip', {
      extends: overlay,
      methods: {
        overlayCreate() {
          return L.tooltip(this.propsCenter, {
            content: this.getFragment(this.$el),
          });
          // }).addTo(this.getMap());
        },
      },
    });
  },
});
