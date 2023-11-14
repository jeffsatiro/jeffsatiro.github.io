<template>
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
</template>
