<template>
    <v-container class="pa-3 mt-lg-4" style="max-width:1000px;">
        <h2>Contatos</h2>
        <div class="mt-3"></div>
        <v-table>
        <tbody>
            <template v-for="o in [ ...resume.data.contacts, ...resume.data.links ]">
            <tr>
                <td>{{ o.name }}</td>
                <td><a href="o.url" target="_blank" style="color: #fff; text-decoration: none;;">{{ o.url }}</a></td>
                <td>
                <v-btn
                    :color="clipboard.copied.value && o.url==resume.clipboardText ? 'success' : null"
                    density="compact"
                    @click="clipboard.copy(o.url); resume.clipboardText = o.url;"
                >
                    <v-icon :icon="clipboard.copied.value && o.url==resume.clipboardText ? 'material-symbols:fitbit-check-small' : 'material-symbols:content-copy-outline'" />
                </v-btn>
                </td>
            </tr>
            </template>
        </tbody>
        </v-table>
    </v-container>
</template>

<script setup>
import { useClipboard } from '@vueuse/core';
const clipboard = useClipboard();

const props = defineProps({
    resume: { type: Object, default: () => ({}) },
});
</script>