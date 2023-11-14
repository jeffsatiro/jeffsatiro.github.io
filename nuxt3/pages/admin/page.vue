<template>
  <div>
    <nuxt-layout name="admin">
      <template #main>
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
            <td>
              <div>{{ bind.item.name }}</div>
              <small class="text-disabled">{{ bind.item.slug }}</small>
            </td>
          </template>

          <template #form="bind">
            <v-text-field label="Title" v-model="bind.model.data.name" />
            <v-text-field label="Slug" v-model="bind.model.data.slug" />
          </template>
        </app-model-crud>
      </template>
    </nuxt-layout>
  </div>
</template>
