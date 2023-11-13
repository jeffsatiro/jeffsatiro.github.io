<template>
  <div>
    <v-form @submit.prevent="test.save()">
      <v-row>
        <v-col cols="6">
          <v-text-field v-model="test.data.name" />
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="test.data.dob" />
        </v-col>
        <v-col cols="6">
          <v-select
            label="Level"
            v-model="test.data.level"
            :items="[
              { value: 'user', title: 'User' },
              { value: 'admin', title: 'Admin' },
            ]"
          />
        </v-col>
      </v-row>
      <v-btn type="submit">Save</v-btn>
      <v-btn @click="test.resetData()">Reset</v-btn>
    </v-form>

    <v-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>DOB</th>
          <th>Level</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="o in test.search.data">
          <tr>
            <td>{{ o.name }}</td>
            <td>{{ o.dob }}</td>
            <td>
              <v-select
                label="Level"
                v-model="o.level"
                :options="[
                  { value: 'user', title: 'User' },
                  { value: 'admin', title: 'Admin' },
                ]"
              />
            </td>
            <td class="d-flex">
              <v-btn icon="mdi-pencil" flat @click="test.setData(o)" />
            </td>
          </tr>
        </template>
      </tbody>
    </v-table>

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
    dob: "",
    level: "user",
  },
});
test.search.submit();
</script>
