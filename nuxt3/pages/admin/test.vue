<template>
  <div>
    <nuxt-layout name="admin">
      <template #main>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="test.name" label="Name" v-bind="validate.bind('name')" />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="test.password"
              label="Password"
              v-bind="validate.bind('password', ['min:3', 'max:10'])"
            />
          </v-col>
          <v-col cols="12" class="d-flex align-center">
            <v-spacer />
            <v-btn :disabled="!validate.isValid()">Save</v-btn>
          </v-col>
        </v-row>
        <pre>{{ validate }}</pre>
        <!-- <pre>{{ { test, validate } }}</pre> -->
      </template>
    </nuxt-layout>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const test = reactive({
  name: "",
  password: "",
});

import useValidate from "@/composables/useValidate";
const validate = await useValidate({
  values: test,
  rules: {
    name: ["required"],
    // password: ["min:6", "max:10"],
  },
});
</script>
