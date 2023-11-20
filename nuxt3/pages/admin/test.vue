<template>
  <div>
    <nuxt-layout name="admin">
      <template #main>
        <!-- <v-row>
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
        </v-row> -->

        <pre>{{ firebase }}</pre>
      </template>
    </nuxt-layout>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";

// const test = reactive({ name: "", email: "", password: "" });
// import useValidate from "@/composables/useValidate";
// const validate = await useValidate({ values: test });

import useFirebase from "@/composables/useFirebase";
const firebase = useFirebase();

onMounted(async () => {
  // console.log(
  //   "firebase.userCreate",
  //   await firebase.userCreate({
  //     name: "nona",
  //     email: "nona@grr.la",
  //     password: "nona@grr.la",
  //   })
  // );

  // console.log(await firebase.firestoreFind("user", "x6GpZvJBTCZUWhD3KBEL1JTUQe32"));
  const aaa = await firebase.firestoreSearch("user");
  const bbb = await firebase.firestoreSearch("user", aaa.params, aaa.next);
  console.log(aaa.data, bbb.data);
  // console.log(JSON.stringify(aaa, null, 2));
});
</script>
