<template>
  <div>
    <div class="d-flex align-center justify-center" style="height: 100vh" v-if="cv.busy && !cv.ready">
      <v-icon icon="svg-spinners:270-ring-with-bg" color="grey" size="50" />
    </div>

    <v-app style="background: #e5e5e5" v-if="cv.ready">
      <v-layout>
        <v-navigation-drawer border="0" color="transparent" class="pa-1" style="height: 100vh">
          <v-card style="height: 100%">
            <v-card-text>
              <div class="text-center">
                <v-avatar size="50">
                  <v-img :src="cv.response.basics.photo" alt="" />
                </v-avatar>
              </div>
              <h1>{{ cv.response.basics.name }}</h1>
              <div class="mt-2 text-disabled">{{ cv.response.basics.label }}</div>
            </v-card-text>
          </v-card>
        </v-navigation-drawer>

        <v-main>
          <div class="d-flex flex-column pa-1 ps-md-0 ga-1" style="height: 100vh">
            <div class="">
              <v-card>
                <v-card-text>aaa</v-card-text>
              </v-card>
            </div>

            <div class="flex-grow-1" style="overflow: auto">
              <v-container>
                <v-btn @click="cv.submit()" :loading="cv.busy">Load</v-btn>
                <pre>cv: {{ cv }}</pre>
              </v-container>
            </div>

            <!-- <div class="">
              <v-card>
                <v-card-text>aaa</v-card-text>
              </v-card>
            </div> -->
          </div>
        </v-main>
      </v-layout>
    </v-app>
  </div>
</template>

<script setup>
const cv = useAxios({
  method: "get",
  url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/jeferson-silva.json",
  antiCors: true,
  autoSubmit: true,
  response: {},
});
</script>
