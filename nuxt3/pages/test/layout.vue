<template>
  <nuxt-layout name="admin">
    <template #main>
      <div>
        <template v-for="n in 200">
          <div>line #{{ n }}</div>
        </template>
      </div>
    </template>
  </nuxt-layout>
</template>
