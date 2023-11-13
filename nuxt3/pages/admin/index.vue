<template>
  <div>
    <v-container>
      <app-model-crud model="page">
        <template #table-header="bind">
          <th>Nome</th>
        </template>

        <template #table-row="bind">
          <td>{{ bind.item.name }}</td>
        </template>
      </app-model-crud>

      <app-model-crud model="test">
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

      <v-form @submit.prevent="test.save()">
        <v-card>
          <v-card-title>
            {{ test.data.id ? "Edit" : "Create" }}
            <small class="text-disabled" v-if="test.data.id">- #{{ test.data.id }}</small>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <v-text-field v-model="test.data.name" />
              </v-col>
              <v-col cols="4">
                <v-select
                  label="Level"
                  v-model="test.data.level"
                  :items="[
                    { value: 'user', title: 'User' },
                    { value: 'admin', title: 'Admin' },
                  ]"
                />
              </v-col>
              <v-col cols="4">
                <v-select
                  label="Permissions"
                  v-model="test.data.permissions"
                  multiple
                  :items="test.options.permissions"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="test.resetData()">Clear</v-btn>
            <v-btn type="submit" color="primary">{{ test.data.id ? "Update" : "Create" }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>

      <br />

      <v-card>
        <v-card-title>Search</v-card-title>
        <v-card-body>
          <v-table>
            <colgroup>
              <col width="*" />
              <col width="*" />
              <col width="100px" />
            </colgroup>
            <thead>
              <tr>
                <th>Name</th>
                <th>Level</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="o in test.search.data">
                <tr>
                  <td>{{ o.name }}</td>
                  <td>
                    <v-select
                      label="Level"
                      v-model="o.level"
                      variant="plain"
                      :disabled="true"
                      :options="[
                        { value: 'user', title: 'User' },
                        { value: 'admin', title: 'Admin' },
                      ]"
                    />
                  </td>
                  <td>
                    <div class="d-flex">
                      <v-btn icon="mdi-pencil" flat @click="test.setData(o)" />
                      <v-btn icon="mdi-delete" flat @click="test.delete(o)" />
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </v-table>
        </v-card-body>
      </v-card>
    </v-container>

    <pre>{{ test }}</pre>
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
