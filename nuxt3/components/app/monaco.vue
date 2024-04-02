<!--
  yarn add -D monaco-editor emmet

  Monaco options:
  https://microsoft.github.io/monaco-editor/typedoc/variables/editor.EditorOptions.html
-->

<template>
    <div ref="editorRef" class="v-code" style="width: 100%;"></div>
  </template>
  
  <script setup>
  import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
  import "monaco-editor/esm/vs/basic-languages/html/html.contribution";
  import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
  import "monaco-editor/esm/vs/basic-languages/xml/xml.contribution";
  import "monaco-editor/esm/vs/basic-languages/css/css.contribution";
  import "monaco-editor/esm/vs/basic-languages/sql/sql.contribution";
  import "monaco-editor/esm/vs/basic-languages/scss/scss.contribution";
  import "monaco-editor/esm/vs/basic-languages/php/php.contribution";
  
  import emmet from "emmet";
  
  import { ref, reactive, watch, defineProps, defineEmits, onMounted, nextTick } from "vue";
  
  const props = defineProps({
    modelValue: {
      type: String,
      default: "",
    },
    options: {
        type: Object,
        default: () => ({}),
    },
  });
  
  const emit = defineEmits(["update:modelValue"]);
  
  let editorInstance = null;
  const editorRef = ref(null);
  const editor = reactive({
    instance: () => false,
    options: {},
    resize() {
      if (!editor.options.automaticLayout) return;
      if (editorRef.value.style.height == "100%") return;
      const width = editorRef.value.offsetWidth;
      const height = editor.getContentHeight();
      editor.layout({ width, height });
      editorRef.value.style.height = `${height}px`;
    },
  });
  
  watch([props], ([propsNew]) => {
    if (editorRef.value && document.activeElement && editorRef.value.contains(document.activeElement)) return;
    if (editorInstance) {
        editorInstance.setValue(propsNew.modelValue);
        setTimeout(editor.resize, 1);
    }
  });
  
  onMounted(() => {
    editor.options = {
      value: props.modelValue,
      wordWrap: "off",
      minimap: { enabled: false },
      automaticLayout: true,
      fontFamily: "monospace",
      // scrollBeyondLastLine: false,
      // wrappingStrategy: "advanced",
      // overviewRulerLanes: 0,
      theme: 'vs-dark',
      language: 'html',
      scrollbar: {},
      ...props.options,
    };

    editor.options.scrollbar = {
        alwaysConsumeMouseWheel: false,
        ...editor.options.scrollbar
    };

    editorInstance = monaco.editor.create(editorRef.value, editor.options);
    // editor.scrollbar.alwaysConsumeMouseWheel = false;
  
    editorInstance.onDidChangeModelContent(() => {
      emit("update:modelValue", editorInstance.getValue());
      editor.resize();
    });
  
    editorInstance.addCommand(monaco.KeyCode.Tab, () => {
      const word = editorInstance._modelData.model.getValueInRange({ ...editorInstance.getSelection(), startColumn: 1 }).split(/[^a-zA-Z0-9]/).at(-1);
      const pos = editorInstance.getPosition();
      const text = emmet(word) || `\t`;
      const range = new monaco.Range(pos.lineNumber, pos.column - word.length, pos.lineNumber, pos.column);
      editorInstance.executeEdits("", [{ identifier: { major: 1, minor: 1 }, range, text, forceMoveMarkers: true }]);
    });
  
    nextTick(async () => {
      setTimeout(() => editor.resize(), 10);
    });
  });
  </script>