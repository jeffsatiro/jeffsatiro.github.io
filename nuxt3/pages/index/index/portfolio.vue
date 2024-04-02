<template>
    <v-container class="pa-3 mt-lg-4 border" style="max-width:1000px;">
        <div class="d-flex flex-column" style="gap: 25px;">
        <h2>Portfólio</h2>
        <template v-for="(o, i) in resume.data.projects.filter(i => i.show)">
            <div>
            <div class="border-t pt-4" v-if="i"></div>
            <h3><a :href="o.url || null" target="_blank" style="color: #fff;">{{ o.name }}</a></h3>
            <div>{{ helper.formatDateBetween(o.date) }}</div>
            <div v-if="o.summary" v-html="o.summary" class="my-2"></div>

            <v-dialog max-width="600" v-if="o.images.length > 0">
                <template #activator="bind">
                <div class="d-flex" style="gap: 10px; cursor: pointer;" v-bind="bind.props">
                    <template v-for="oo in o.images">
                    <div :style="`background:url(${oo.url}) center center no-repeat; background-size: cover; width:100px; height:100px; border-radius:8px;`"></div>
                    </template>
                </div>
                </template>

                <template #default="bind">
                <v-card>
                    <v-card-title>{{ o.name }}</v-card-title>
                    <v-carousel
                    :hide-delimiters="o.images.length <= 1"
                    :show-arrows="o.images.length > 1"
                    :height="null"
                    >
                    <template v-for="oo in o.images">
                        <v-carousel-item style="position: relative; z-index:-1;">
                        <app-img-zoom :src="oo.url" style="width:100%; height:100%;" />
                        </v-carousel-item>
                    </template>
                    </v-carousel>
                    <v-card-actions class="justify-end">
                    <v-btn class="bg-primary" @click="bind.isActive.value = false">Ok</v-btn>
                    </v-card-actions>
                </v-card>
                </template>
            </v-dialog>
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