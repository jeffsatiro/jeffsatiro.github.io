<template>
    <app-monaco
        style="width: 100%; height: 100% !important;"
        :model-value="[
            ``,
            `const dev = new class FullStackDeveloper`,
            `{`,
            `   name = '${resume.data.basics.name}';`,
            `   description = '${resume.data.basics.label}';`,
            `   place = '`+ [resume.data.basics.location.city, resume.data.basics.location.state].filter(v => !!v).join(', ') +`';`,
            `   stack = [`+ resume.data.skills.map(s => `\n\t\t'${s.name}'`) +`\n\t];`,
            `}`,
            ``,
            `/**\n${resume.data.basics.summary}*/`,
            ``,
        ].join(`\n`)"
        :options="{
            language: 'javascript',
            readOnly: true,
            wordWrap: 'on',
        }"
    />
</template>

<script setup>
const props = defineProps({
    resume: { type: Object, default: () => ({}) },
});
</script>