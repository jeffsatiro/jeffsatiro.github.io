<template>
  <v-app>
    <div class="d-flex flex-column py-5" style="gap: 20px;" v-if="resume.ready">
      <v-container>
        <h1>{{ resume.data.profile.firstName }} {{ resume.data.profile.lastName }}</h1>
        <h2>{{ resume.data.profile.headline }}</h2>
        <br>

        <div class="d-flex align-center" style="gap:10px;">
          <template v-for="o in resume.data.contacts">
            <a :href="o.url" target="_blank"><img :src="o.icon" alt="" /></a>
          </template>
        </div>
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

        <v-timeline side="end" align="start">
          <template v-for="(o, i) in resume.data.projects">
            <v-timeline-item dot-color="pink" size="small">
              <h2>{{ o.title }}</h2>

              <div class="d-flex align-center">
                <div>{{ o.startedOn || 'Atualmente' }}</div>
                <div class="px-2">~</div>
                <div>{{ o.finishedOn || 'Atualmente' }}</div>
              </div>

              <div v-html="o.description" v-if="o.description" class="mt-3"></div>

              <br>
              <div class="d-flex align-center" style="gap:10px;">
                <v-btn :href="o.url" target="_blank">Visualizar</v-btn>
                
                <template v-if="o.meta">
                  <template v-if="o.meta.images">
                    <template v-for="(oo, ii) in o.meta.images">
                      <v-btn @click="projectsModal=`${i}-${ii}`">Image {{ ii+1 }}</v-btn>

                      <v-dialog width="800" scrollable :model-value="projectsModal==`${i}-${ii}`" @update:modelValue="projectsModal=null">
                        <v-card>
                          <v-card-title class="d-flex align-center">
                            <div class="flex-grow-1">Print</div>
                            <v-btn icon="mdi-close" flat size="35" @click="projectsModal=null" />
                          </v-card-title>
                          <v-card-text class="pa-0">
                            <img :src="oo.url" alt="" style="width:100%;" />
                          </v-card-text>
                        </v-card>
                      </v-dialog>
                    </template>
                  </template>
                </template>
              </div>
              
            </v-timeline-item>
          </template>
        </v-timeline>
      </v-container>
      <pre>{{ btnRefs }}</pre>
    </div>
  </v-app>
</template>

<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import axios from 'axios';

  const resume = reactive({
    ready: false,
    data: false,
    async load() {
      try {
        let { data } = await axios.get('https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/linkedin-resume.json');
        data.projects = data.projects.sort((a, b) => {
          return a.dateInterval.start < a.dateInterval.final ? -1 : (a.dateInterval.start > a.dateInterval.final ? 1 : 0);
        });
        resume.data = data;
      } catch(err) {}
      resume.ready = true;
    },
  });

  const projectsModal = ref(null);

  const closeButton = (ev) => {
    console.log(ev.target);
  };

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