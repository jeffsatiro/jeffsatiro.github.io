<template>
  <v-app class="layout-admin">
    <app-layout :defaults-provider="defaultsProvider">
      <template #main="bind">
        <slot name="main" v-bind="bind"></slot>
      </template>

      <template #navigation="bind">
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
        <app-nav :items="nav.items" />
      </template>

      <template #header="bind">
        <v-spacer />
        <v-btn icon="ic:outline-message" />
        <v-btn icon="material-symbols:settings-outline-rounded" />
        <v-btn @click="vuetifyThemeSwitcher.switch()" icon="material-symbols:dark-mode" />
      </template>
    </app-layout>
  </v-app>
</template>

<script setup>
import { reactive } from "vue";

import useVuetifyThemeSwitcher from "@/composables/useVuetifyThemeSwitcher";
const vuetifyThemeSwitcher = useVuetifyThemeSwitcher();

const nav = reactive({
  drawer: null,
  items: [
    { title: "Home", to: "/admin" },
    { title: "Pages", to: "/admin/page" },
    { title: "User", to: "/admin/user" },
    { title: "Test", to: "/admin/test" },
  ],
});
</script>
