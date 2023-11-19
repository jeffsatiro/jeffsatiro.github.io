<template>
  <div>
    <nuxt-layout name="admin">
      <template #main>
        <v-row>
          <v-col cols="6">
            <v-text-field label="Name" v-model="test.name" v-bind="validate.bind('name', ['required'])" />
          </v-col>
          <v-col cols="6">
            <v-text-field label="E-mail" v-model="test.email" v-bind="validate.bind('email', ['email'])" />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Password"
              type="password"
              v-model="test.password"
              v-bind="validate.bind('password', ['min:3', 'max:10'])"
            />
          </v-col>
          <v-col cols="12" class="d-flex align-center">
            <v-spacer />
            <v-btn :disabled="!validate.isValid()">Save</v-btn>
          </v-col>
        </v-row>
      </template>
    </nuxt-layout>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const test = reactive({
  name: "",
  email: "",
  password: "",
});

import useValidate from "@/composables/useValidate";
const validate = await useValidate({ values: test });
</script>
