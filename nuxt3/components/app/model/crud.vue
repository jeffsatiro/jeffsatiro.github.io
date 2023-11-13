<template>
  <div>
    <v-data-table :items="model.search.data" v-bind="model.options.datatable">
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title>
            {{ model.options.plural }}
          </v-toolbar-title>
        </v-toolbar>
      </template>

      <template #headers="bind">
        <tr>
          <th></th>
          <slot name="table-header" v-bind="slotBind(bind)">
            <th>Name</th>
          </slot>
          <th></th>
        </tr>
      </template>

      <template #item="bind">
        <tr>
          <td>--</td>
          <slot name="table-row" v-bind="slotBind(bind)">
            <td>{{ bind.item.name }}</td>
          </slot>
          <td>--</td>
        </tr>
      </template>
    </v-data-table>
    <pre>{{ model }}</pre>
  </div>
</template>

<script setup>
import schema from "@/utils/schema";
import { defineProps } from "vue";
import useFireModel from "@/composables/useFireModel";

const props = defineProps({
  model: { type: String, default: "" },
});

const slotBind = (merge = {}) => {
  return { ...merge };
};

const model = useFireModel(schema[props.model] || {});
model.search.submit();
</script>
