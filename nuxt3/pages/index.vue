<template>
  <v-app>
    <div class="d-flex flex-column py-5" style="gap: 20px;" v-if="resume.ready">
      <v-container>
        <h1>{{ resume.data.profile.firstName }} {{ resume.data.profile.lastName }}</h1>
        <h2>{{ resume.data.profile.headline }}</h2>
        <br>

        <div v-html="resume.data.profile.summary" style="white-space:pre-line;"></div>
      </v-container>

      <!-- <v-container>
        <h1>Contate-me</h1>
      </v-container> -->

      <v-container>
        <h1>Skills</h1>
        <br>

        <div class="d-flex flex-column" style="gap:20px;">
          <template v-for="o in resume.data.skills">
            <div class="d-flex align-center" v-if="o.meta">
              <div style="min-width: 150px; max-width:150px;">{{ o.name }}</div>
              <div class="flex-grow-1">
                <v-progress-linear :model-value="100 * o.meta.rating / 5" height="5" />
              </div>
              <small class="d-block text-right" style="min-width:50px; max-width:50px;">{{ o.meta.rating }} / 5</small>
            </div>
          </template>
        </div>
      </v-container>

      <v-container>
        <h1>Experiências</h1>
        <br>

        <div class="d-flex flex-column" style="gap:35px;">
          <template v-for="o in resume.data.positions">
            <div class="ps-5" style="border-left: solid 5px #444;">
              <h2>{{ o.title }}</h2>

              <div class="d-flex align-center">
                <div>{{ o.startedOn || 'Atualmente' }}</div>
                <div class="px-2">~</div>
                <div>{{ o.finishedOn || 'Atualmente' }}</div>
              </div>

              <div class="d-flex align-center" v-if="o.location.fullName">
                <span>{{ o.location.fullName }}</span>
              </div>

              <div v-html="o.description" v-if="o.description" class="mt-3"></div>
            </div>
          </template>
        </div>
      </v-container>

      <v-container>
        <h1>Projetos</h1>
        <br>

        <v-row>
          <template v-for="o in resume.data.projects">
            <v-col cols="12" md="6" v-if="o.active">
              <div class="ps-5" style="border-left: solid 5px #444;">
                <h2>{{ o.title }}</h2>
  
                <div class="d-flex align-center">
                  <div>{{ o.startedOn || 'Atualmente' }}</div>
                  <div class="px-2">~</div>
                  <div>{{ o.finishedOn || 'Atualmente' }}</div>
                </div>
  
                <div v-html="o.description" v-if="o.description" class="mt-3"></div>
  
                <div v-if="o.url" class="mt-3">
                  <v-btn :href="o.url" target="_blank" block>View</v-btn>
                </div>
              </div>
            </v-col>
          </template>
        </v-row>

        <div class="d-flex flex-column" style="gap:35px;">
          <template v-for="o in resume.data.projects">
            
          </template>
        </div>
      </v-container>
    </div>
  </v-app>
</template>

<script setup>
  import { reactive, onMounted } from 'vue';
  import axios from 'axios';

  const resume = reactive({
    ready: false,
    data: false,
    async load() {
      try {
        const { data } = await axios.get('https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/linkedin-resume.json');
        resume.data = data;
      } catch(err) {}
      resume.ready = true;
    },
  });

  onMounted(() => {
    resume.load();
  });
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
  html, body {
    font-family: 'Lato', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
  }
  

  a, a:link, a:visited, a:hover {
    color: initial !important;
    font-family: 'Playfair Display', serif !important;
  }

  .v-container {
    max-width: 800px;
  }

  .ff-playfair {
    font-family: 'Playfair Display', serif;
  }
  
  .ff-lato {
    font-family: 'Lato', sans-serif;
  }

  [test], [test] * {
    outline: solid 1px red !important;
  }
</style>