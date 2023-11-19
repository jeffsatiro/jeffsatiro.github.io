<template>
  <v-app class="app-layout">
    <v-defaults-provider :defaults="defaultsProvider">
      <!-- loading -->
      <v-layout v-if="!props.ready">
        <slot name="loading" v-bind="slotBind()">
          <div class="w-100 d-flex align-center justify-center">
            <v-icon icon="svg-spinners:3-dots-fade" size="30" />
          </div>
        </slot>
      </v-layout>

      <v-layout v-if="props.ready && view.name != 'admin'">
        <v-row>
          <v-col cols="12" md="6" class="app-layout__bg-pattern"> </v-col>
          <v-col cols="12" md="6" class="d-flex align-center justify-center">
            <div class="text-left" style="min-width: 300px">
              <!-- view=login -->
              <slot v-if="view.name == 'login'" name="login" v-bind="slotBind()"> Login </slot>

              <!-- view=register -->
              <slot v-if="view.name == 'register'" name="register" v-bind="slotBind()"> Register </slot>

              <!-- view=password -->
              <slot v-if="view.name == 'password'" name="password" v-bind="slotBind()"> Password </slot>

              <div class="mt-4 d-flex flex-column" style="gap: 10px">
                <v-btn
                  v-if="view.name != 'login'"
                  block
                  prepend-icon="material-symbols:key-outline"
                  @click="view.set('login')"
                >
                  Login
                </v-btn>
                <v-btn
                  v-if="view.name != 'register'"
                  block
                  prepend-icon="material-symbols:person-add-outline"
                  @click="view.set('register')"
                >
                  Register
                </v-btn>
                <v-btn
                  v-if="view.name != 'password'"
                  block
                  prepend-icon="fluent:key-reset-24-regular"
                  @click="view.set('password')"
                >
                  Password
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-layout>

      <!-- view=admin -->
      <v-layout class="rounded rounded-md" v-if="props.ready && view.name == 'admin'">
        <v-navigation-drawer v-model="nav.drawer" width="300">
          <slot name="navigation" v-bind="slotBind()"></slot>
        </v-navigation-drawer>

        <v-main>
          <div class="d-flex flex-column px-5 py-3" style="gap: 20px; height: 100vh">
            <v-defaults-provider
              :defaults="{
                VBtn: { flat: true, size: 30 },
              }"
            >
              <div class="app-layout__box d-flex align-center" style="gap: 10px">
                <v-btn icon="ci:hamburger" size="30" flat @click="nav.drawer = !nav.drawer" class="d-lg-none" />
                <slot name="header" v-bind="slotBind()"></slot>
              </div>
            </v-defaults-provider>

            <div class="app-layout__box" style="overflow-y: auto; overflow-x: hidden; flex-grow: 1">
              <slot name="main" v-bind="slotBind()"></slot>
            </div>
          </div>
        </v-main>
      </v-layout>
    </v-defaults-provider>
  </v-app>
</template>

<script setup>
import { reactive, defineProps, defineEmits, defineExpose } from "vue";

const props = defineProps({
  ready: { type: Boolean, default: true },
  view: { type: String, default: "admin" },
  defaultsProvider: { type: Object, default: () => ({}) },
});

const view = reactive({
  name: props.view,
  set(name) {
    emit("update:view", name);
    view.name = name;
  },
});

const emit = defineEmits(["update:view"]);

import { useTitle } from "@vueuse/core";
const title = useTitle();

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

const defaultsProvider = {
  // VNavigationDrawer: { border: 0 },
  ...props.defaultsProvider,
};

const slotBind = (merge = {}) => {
  return {
    defaultsProvider,
    view,
    ...merge,
  };
};

defineExpose({ view });
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.app-layout {
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

  &__bg-pattern {
    --s: 100px; /* control the size */
    --c1: #e1f5c4;
    --c2: #3b8183;

    --_g: #0000, #0004 5%, var(--c2) 6% 14%, var(--c1) 16% 24%, var(--c2) 26% 34%, var(--c1) 36% 44%, var(--c2) 46% 54%,
      var(--c1) 56% 64%, var(--c2) 66% 74%, var(--c1) 76% 84%, var(--c2) 86% 94%, #0004 95%, #0000;
    background: radial-gradient(100% 50% at 100% 0, var(--_g)), radial-gradient(100% 50% at 0 50%, var(--_g)),
      radial-gradient(100% 50% at 100% 100%, var(--_g));
    background-size: var(--s) calc(2 * var(--s));
  }
}
</style>
