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

        <v-table class="border">
          <tbody>
            <template v-for="o in personSearch.data">
              <tr>
                <td>{{ o.uid }}</td>
                <td>{{ o.email }}</td>
                <td><v-btn icon="mdi-delete" flat @click="personSearch.delete(o)" /></td>
              </tr>
            </template>
          </tbody>
        </v-table>
        <br />
        <div class="d-flex justify-center" style="gap: 15px">
          <v-btn @click="personSearch.generate()">Generate</v-btn>
          <v-btn v-if="personSearch.next" @click="personSearch.submit(personSearch.next)">Load more</v-btn>
        </div>

        <pre>{{ personSearch.query }}</pre>
        <!-- <pre>{{ firebase }}</pre> -->
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

import axios from "axios";
import f from "@/utils/firebase.js";

const personSearch = reactive({
  query: {
    // endAt: "I0aMPRAFwEqRbe6YiqSS",
  },
  prev: false,
  next: false,
  data: [],
  async submit(query = null) {
    if (query) personSearch.query = query;
    const resp = await f.firestoreSearch("person", personSearch.query);
    personSearch.query = resp.query;
    personSearch.prev = resp.prev;
    personSearch.next = resp.next;
    personSearch.data = resp.data;

    // resp.data.map((item) => {
    //   personSearch.data.push(item);
    // });
  },
  async delete(person) {
    if (!confirm(`Deletar ${person.name}?`)) return;
    await f.firestoreDelete("person", person.uid);
    await personSearch.submit();
  },
  async generate() {
    let { data: randomUser } = await axios.get("https://randomuser.me/api/?results=1");
    randomUser = randomUser.results[0] ? randomUser.results[0] : false;
    if (!randomUser) return;
    await f.firestoreSave("person", {
      name: `${randomUser.name.first} ${randomUser.name.last}`,
      email: randomUser.email,
      picture: randomUser.picture.thumbnail,
    });
    await personSearch.submit();
  },
});

onMounted(async () => {
  personSearch.submit();

  // console.log(
  //   "firebase.userCreate",
  //   await firebase.userCreate({
  //     name: "nona",
  //     email: "nona@grr.la",
  //     password: "nona@grr.la",
  //   })
  // );

  // console.log(await firebase.firestoreFind("user", "x6GpZvJBTCZUWhD3KBEL1JTUQe32"));
  // const aaa = await firebase.firestoreSearch("user");
  // const bbb = await firebase.firestoreSearch("user", aaa.params, aaa.next);
  // console.log(aaa.data, bbb.data);
  // console.log(JSON.stringify(aaa, null, 2));

  const callbacks = [
    // async (scope) => {
    //   // let { data: randomUser } = await axios.get("https://randomuser.me/api/?results=1");
    //   // randomUser = randomUser.results[0] ? randomUser.results[0] : false;
    //   // if (!randomUser) return;
    //   // scope.personCreate = await f.firestoreSave("person", {
    //   //   name: `${randomUser.name.first} ${randomUser.name.last}`,
    //   //   email: randomUser.email,
    //   //   picture: randomUser.picture.thumbnail,
    //   // });
    //   // scope.personFind = await f.firestoreFind("person", scope.personCreate.uid);
    //   scope.testSearch = await f.firestoreSearch("person", {
    //     // where: [["email", "==", "kaitlin.powell@example.com"]],
    //     // startAfter: "hukEFA2XffCPAKeGMlYa",
    //     // startAfter: "JVR97qr1RWqKquBlEDw7",
    //   });
    //   return scope;
    // },
  ];

  // console.clear();
  // let scope = {};
  // await Promise.all(
  //   callbacks.map(async (callback) => {
  //     scope = await callback(scope);
  //     return scope;
  //   })
  // );

  // console.log(JSON.stringify(scope, null, 2));

  // callbacks.map(async(callback) => {
  //   scope = callback(scope);
  // });
});
</script>
