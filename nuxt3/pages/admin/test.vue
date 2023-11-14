<template>
  <div>
    <nuxt-layout name="admin">
      <template #main>
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
            <th class="d-none d-lg-block">Permissões</th>
          </template>

          <template #table-row="bind">
            <td>{{ bind.item.name }}</td>
            <td>{{ bind.item.level }}</td>
            <td class="d-none d-lg-block">{{ bind.item.permissions.join(", ") }}</td>
          </template>
        </app-model-crud>
      </template>
    </nuxt-layout>
  </div>
</template>
