// https://cdn.ckeditor.com/ckeditor5/35.4.0/classic/ckeditor.js

const createCkeditor = (options = {}) => ({
  install(app, options = {}) {
    app.component('v-ckeditor', {
      props: {
        modelValue: {
          type: [Boolean, String],
          default: '',
        },
      },
      watch: {
        modelValue(value) {
          if (this.$el.contains(document.activeElement)) return;
          this.setValue(value);
        },
      },
      methods: {
        ckeditorInit() {
          ClassicEditor.create(this.$refs.editor)
            .then(editor => {
              editor.data.set(this.modelValue);
              editor.model.document.on('change:data', ev => {
                this.$emit('update:modelValue', editor.data.get());
              });
              this.setValue = (value) => {
                editor.data.set(value || '&nbsp;');
              };
            })
            .catch(error => {
              console.error( error );
            });
        },
        setValue(value) {},
      },
      mounted() {
        this.ckeditorInit();
      },
      template: `<div><div ref="editor"></div></div>`,
    });
  },
});
