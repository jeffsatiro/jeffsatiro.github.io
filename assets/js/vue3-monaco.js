/* Dependencies:
<link rel="stylesheet" data-name="vs/editor/editor.main" href="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs/editor/editor.main.min.css">
  <script>window.require = { paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs' } };</script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs/loader.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs/editor/editor.main.nls.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs/editor/editor.main.js"></script>
  <script src="https://unpkg.com/emmet-monaco-es/dist/emmet-monaco.min.js"></script>
  <script>emmetMonaco.emmetHTML(monaco);</script>
*/

const createMonaco = (options = {}) => ({
  install(app, options = {}) {
    app.component('v-monaco', {
      props: {
        modelValue: {
          type: String,
          default: '',
        },
        language: {
          type: String,
          default: 'html',
        },
        readOnly: {
          type: Boolean,
          default: false,
        },
      },
      watch: {
        modelValue(value) {
          if (this.$el.contains(document.activeElement)) return;
          this.setValue(value);
        },
      },
      methods: {
        monacoInit() {
          const editor = monaco.editor.create(this.$refs.monaco, {
            value: this.modelValue,
            language: this.language,
            theme: 'vs-dark',
            readOnly: this.readOnly,
          });

          editor.getModel().onDidChangeContent(evt => {
            this.$emit('update:modelValue', editor.getModel().getValue());
          });

          this.setValue = (value) => {
            editor.getModel().setValue(value);
          };
        },
        setValue(value) {},
      },
      mounted() {
        this.monacoInit();
      },
      template: `<div ref="monaco" style="width:100%; height:200px;"></div>`,
    });
    
    app.component('v-monaco-diff', {
      props: {
        original: {
          type: String,
          default: '',
        },
        modified: {
          type: String,
          default: '',
        },
        language: {
          type: String,
          default: 'html',
        },
        readOnly: {
          type: Boolean,
          default: false,
        },
      },
      watch: {
        $props: {deep:true, handler(props) {
          if (this.$el.contains(document.activeElement)) return;
          this.setModel(props.original, props.modified);
        }},
        // modelValue(value) {
        //   if (this.$el.contains(document.activeElement)) return;
        //   this.setValue(value);
        // },
      },
      methods: {
        monacoInit() {
          let original = monaco.editor.createModel(this.original, this.language);
          let modified = monaco.editor.createModel(this.modified, this.language);

          const editor = monaco.editor.createDiffEditor(this.$refs.monaco);
          editor.setModel({ original, modified });

          this.setModel = (original, modified) => {
            original = monaco.editor.createModel(original, this.language);
            modified = monaco.editor.createModel(modified, this.language);
            editor.setModel({ original, modified });
          };
        },
      },
      mounted() {
        this.monacoInit();
      },
      template: `<div ref="monaco" style="width:100%; height:200px;"></div>`,
    });
  },
});
