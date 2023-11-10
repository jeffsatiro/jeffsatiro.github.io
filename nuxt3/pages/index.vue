<template>
  <v-app>
    <div class="d-flex flex-column py-5" style="gap: 20px;" v-if="resume.ready">
      <v-container>
        <h1>{{ resume.data.name }}</h1>
        <h2>{{ resume.data.description }}</h2>
        <br>

        <div v-html="resume.data.bio"></div>
      </v-container>

      <v-container>
        <h1>Contate-me</h1>
        <br>

        <table>
          <tbody>
            <template v-for="o in [ ...resume.data.links, ...resume.data.contacts ]">
              <tr>
                <td class="pe-4">{{ o.name }}</td>
                <td><a :href="o.url" target="_blank">{{ o.url }}</a></td>
              </tr>
            </template>
          </tbody>
        </table>

      </v-container>

      <v-container>
        <h1>Skills</h1>
        <br>

        <div class="d-flex flex-column" style="gap:20px;">
          <template v-for="o in resume.data.skills">
            <div class="d-flex align-center">
              <div style="min-width: 100px;">{{ o.name }}</div>
              <v-progress-linear :model-value="100 * o.rating / 5" height="5" />
            </div>
          </template>
        </div>
      </v-container>

      <v-container>
        <h1>Experiências</h1>
        <br>

        <div class="d-flex flex-column" style="gap:35px;">
          <template v-for="o in resume.data.experiences">
            <div v-if="o.active" class="ps-5" style="border-left: solid 5px #444;">
              <h2>{{ o.name }}</h2>

              <div class="d-flex align-center">
                <div>{{ o.date_start || 'Atualmente' }}</div>
                <div class="px-2">~</div>
                <div>{{ o.date_final || 'Atualmente' }}</div>
              </div>

              <div v-if="o.place" class="d-flex align-center">
                <!-- <v-icon icon="material-symbols:location-on" size="20" /> -->
                <span>{{ o.place }}</span>
              </div>

              <div v-html="o.description"></div>
              <div v-if="o.stack.length">Stack: {{ o.stack.join(', ') }}</div>

              <template v-if="o.projects.length">
                <br>
                <h3>Projetos executados:</h3>

                <template v-for="oo in o.projects">
                  <div>- {{ oo.name }}</div>
                  <!-- <pre>{{ oo }}</pre> -->
                </template>
              </template>
            </div>
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
        const { data } = await axios.get('https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/resume.json');
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
    /* font-family: 'Playfair Display', serif;
    font-weight: 700; */
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