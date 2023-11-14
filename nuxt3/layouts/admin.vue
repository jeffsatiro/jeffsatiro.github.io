<template>
  <v-app class="layout-admin">
    <v-defaults-provider :defaults="themeDefaults">
      <v-layout class="rounded rounded-md">
        <v-navigation-drawer v-model="nav.drawer" width="300">
          <v-list>
            <v-list-item title="Navigation drawer"></v-list-item>
          </v-list>
          <app-nav :items="nav.items" />
        </v-navigation-drawer>

        <v-main>
          <div class="d-flex flex-column px-5 py-3" style="gap: 20px; height: 100vh">
            <v-defaults-provider
              :defaults="{
                VBtn: { flat: true, size: 30 },
              }"
            >
              <div class="layout-admin__box d-flex align-center" style="gap: 10px">
                <v-btn icon="ci:hamburger" size="30" flat @click="nav.drawer = !nav.drawer" class="d-lg-none" />
                <v-spacer />
                <v-btn icon="ic:outline-message" />
                <v-btn icon="material-symbols:settings-outline-rounded" />
                <v-btn @click="vuetifyThemeSwitcher.switch()" icon="material-symbols:dark-mode" />
              </div>
            </v-defaults-provider>

            <div class="layout-admin__box" style="overflow: auto; flex-grow: 1">
              <slot name="main" v-bind="slotBind()"></slot>
            </div>
          </div>
        </v-main>
      </v-layout>
    </v-defaults-provider>
  </v-app>
</template>

<script setup>
import { reactive } from "vue";

import { useTitle } from "@vueuse/core";
const title = useTitle();

import useVuetifyThemeSwitcher from "@/composables/useVuetifyThemeSwitcher";
const vuetifyThemeSwitcher = useVuetifyThemeSwitcher();

const nav = reactive({
  drawer: null,
  items: [
    { title: "Home", to: "/admin" },
    { title: "Pages", to: "/admin/page" },
    { title: "Test", to: "/admin/test" },
  ],
});

const themeDefaults = {
  // VNavigationDrawer: { border: 0 },
};

const slotBind = (merge = {}) => {
  return {
    themeDefaults,
    ...merge,
  };
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.layout-admin {
  * {
    font-family: "Public Sans", sans-serif;
    color: #7f7f7f;
  }

  .v-card {
    box-shadow: 0 0 10px 5px #00000015;
    border: none !important;
    border-radius: 5px !important;

    /* .v-card-title {
      margin: 0 0 25px 0;
      border-bottom: solid 1px #7f7f7f44;
    } */
  }

  .v-navigation-drawer {
    border: none;
    box-shadow: 0 0 10px 5px #00000015;
  }

  &__box {
    padding: 10px;
    border-radius: 5px !important;
    box-shadow: 0 0 10px 5px #00000015;
  }
}
</style>
