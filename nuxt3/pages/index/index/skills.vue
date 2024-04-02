<template>
    <v-container class="pa-3 mt-lg-4" style="max-width:1000px;">
        <h2>Skills</h2>
        <div class="mt-3"></div>
        <v-table>
        <tbody>
            <template v-for="o in resume.data.skills">
            <tr>
                <td class="py-1 pe-4">{{ o.name }}</td>
                <td class="py-1">
                <div class="d-flex" style="gap:10px;">
                    <template v-for="s in resume.rating(o.rating, 5)">
                    <v-icon :icon="s.checked ? 'material-symbols-light:kid-star' : 'material-symbols-light:kid-star-outline'" />
                    </template>
                </div>
                </td>
            </tr>
            </template>
        </tbody>
        </v-table>
    </v-container>
</template>

<script setup>
const props = defineProps({
    resume: { type: Object, default: () => ({}) },
});
</script>