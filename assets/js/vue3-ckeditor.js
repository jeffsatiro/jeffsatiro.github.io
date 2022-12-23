// https://cdn.ckeditor.com/ckeditor5/35.4.0/classic/ckeditor.js

const createCkeditor = (options = {}) => ({
  install(app, options = {}) {
    app.component('v-ckeditor', {
      props: {
        modelValue: {
          type: [Array, String],
          default: '',
        },
      },
      data: () => ({
        editor: false,
      }),
      methods: {
        ckeditorInit() {
          this.editor = ClassicEditor.create(this.$refs.editor)
            .then(editor => {
              editor.data.set(this.modelValue);
              editor.model.document.on('change:data', ev => {
                this.$emit('update:modelValue', editor.data.get());
              });
            })
            .catch(error => {
              console.error( error );
            });
        },
      },
      mounted() {
        this.ckeditorInit();
      },
      template: `<div ref="editor"></div>`,
    });
  },
});
