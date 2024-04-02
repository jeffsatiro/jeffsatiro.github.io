<template>
    <v-container class="pa-3 mt-lg-4 border" style="max-width:1000px;">
        <div class="d-flex flex-column" style="gap: 25px;">
        <h2>Experiência</h2>
        <template v-for="(o, i) in resume.data.work.filter(i => i.show)">
            <div>
            <div class="border-t pt-4" v-if="i"></div>
            <h3>{{ o.position }} | {{ o.name }}</h3>
            <div>{{ helper.formatLocation(o.location) }}</div>
            <div>{{ helper.formatDateBetween(o.date) }}</div>
            <small v-if="o.summary" v-html="o.summary" class="d-block mt-2"></small>
            </div>
        </template>
        </div>
    </v-container>
</template>

<script setup>
import useHelper from '@/composables/useHelper';
const helper = useHelper();

const props = defineProps({
    resume: { type: Object, default: () => ({}) },
});
</script>