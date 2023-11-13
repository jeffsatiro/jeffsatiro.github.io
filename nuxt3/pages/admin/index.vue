<template>
  <div>
    <v-app>
      <v-container>
        <app-model-crud
          model="page"
          :tableRowActions="{
            test: {
              title: 'Edit',
              icon: 'mdi-home',
            },
          }"
        >
          <template #table-header="bind">
            <th>Nome</th>
          </template>

          <template #table-row="bind">
            <td>{{ bind.item.name }}</td>
          </template>

          <template #form="bind">
            <v-text-field label="Title" v-model="bind.model.data.name" />
            <v-text-field label="Slug" v-model="bind.model.data.slug" />
          </template>
        </app-model-crud>

        <app-model-crud
          model="test"
          :tableRowActions="{
            test: {
              title: 'Edit',
              icon: 'mdi-home',
              onClick(a, b, c) {
                console.log({ a, b, c });
              },
            },
          }"
        >
          <template #table-header="bind">
            <th>Nome</th>
            <th>Nível</th>
            <th>Permissões</th>
          </template>

          <template #table-row="bind">
            <td>{{ bind.item.name }}</td>
            <td>{{ bind.item.level }}</td>
            <td>{{ bind.item.permissions.join(", ") }}</td>
          </template>
        </app-model-crud>
      </v-container>

      <!-- <pre>{{ test }}</pre> -->
    </v-app>
  </div>
</template>

<script setup>
import useFireModel from "@/composables/useFireModel";

const test = useFireModel({
  collection: "test",
  model: {
    id: false,
    name: "",
    level: "user",
    permissions: [],
  },
  events: [
    [
      "saved",
      () => {
        test.resetData();
        test.search.submit();
      },
    ],
    ["deleted", () => test.search.submit()],
  ],
  options: {
    levels: [
      { value: "user", title: "User" },
      { value: "admin", title: "Admin" },
    ],
    permissions: [
      { value: "posts:create", title: "Create Posts" },
      { value: "posts:update", title: "Update Posts" },
      { value: "posts:delete", title: "Delete Posts" },
    ],
  },
});
test.search.submit();
</script>
