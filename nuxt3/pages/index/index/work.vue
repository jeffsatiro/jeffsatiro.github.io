<template>
    <v-container class="page-index-markdown">
        <div>
            <h2>Experiência</h2>
            <template v-for="(o, i) in resume.data.work.filter(i => i.show)">
                <div>
                    <div class="border-t my-6"></div>
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