<template>
  <div>
    <nuxt-layout name="admin">
      <template #main>
        <v-row>
          <v-col cols="6">
            <form @submit.prevent="auth.save()">
              <v-text-field v-model="auth.data.email" label="E-mail" />
              <v-text-field v-model="auth.data.password" label="Password" type="password" />
              <div class="d-flex align-center">
                <v-spacer />
                <v-btn type="submit">Salvar</v-btn>
              </div>
            </form>
          </v-col>

          <v-col>
            <form @submit.prevent="auth.login()">
              <v-text-field v-model="auth.data.email" label="E-mail" />
              <v-text-field v-model="auth.data.password" label="Password" type="password" />
              <div class="d-flex align-center">
                <v-btn type="button" v-if="auth.user" @click="auth.logout()">Logout</v-btn>
                <v-spacer />
                <v-btn type="submit">Login</v-btn>
              </div>
            </form>
          </v-col>
        </v-row>
      </template>
    </nuxt-layout>
  </div>
</template>

<script setup>
import useFireAuth from "@/composables/useFireAuth";
const auth = await useFireAuth();
</script>
