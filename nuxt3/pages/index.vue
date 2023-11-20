<template>
  <v-app>
    <v-layout>
      <!-- Loading -->
      <v-container v-if="!resume.ready" class="d-flex align-center justify-center">
        <v-icon icon="svg-spinners:180-ring-with-bg" size="100" color="primary" />
      </v-container>

      <v-defaults-provider :defaults="menu.defaults">
        <div style="position: fixed; top: 15px; right: 15px" aria-label="Navegação">
          <v-menu location="start">
            <template #activator="bind">
              <v-btn :icon="menu.icon" v-bind="bind.props" v-if="!display.mobile.value" />
            </template>

            <v-defaults-provider :defaults="menu.defaults">
              <div class="d-flex align-center pe-4" style="gap: 15px">
                <template v-for="o in menu.items">
                  <v-btn v-bind="o" />
                </template>
              </div>
            </v-defaults-provider>
          </v-menu>

          <v-btn :icon="menu.icon" v-if="display.mobile.value" @click="menu.show = true" aria-label="Navegação" />
        </div>
      </v-defaults-provider>

      <v-navigation-drawer
        v-model="menu.show"
        v-if="display.mobile.value"
        location="end"
        width="300"
        style="position: fixed; top: 0"
      >
        <v-card-title>Seções</v-card-title>
        <v-list aria-label="Seções">
          <template v-for="o in menu.items">
            <v-list-item v-bind="o">
              <v-icon v-if="o.icon" :icon="o.icon" />
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>

      <div class="d-flex flex-column py-5" style="width: 100vw !important; gap: 20px" v-if="resume.ready">
        <v-container id="info">
          <h1>{{ resume.data.profile.firstName }} {{ resume.data.profile.lastName }}</h1>
          <h2>{{ resume.data.profile.headline }}</h2>
          <br />

          <div class="d-flex flex-wrap align-center" style="gap: 10px">
            <template v-for="o in resume.data.links">
              <a :href="o.url" target="_blank" :aria-label="o.name">
                <img :src="o.icon" alt="" height="28" loading="lazy" />
              </a>
            </template>
          </div>

          <div class="d-flex flex-wrap align-center" style="gap: 10px">
            <template v-for="o in resume.data.contacts">
              <a :href="o.url" target="_blank" :aria-label="o.name">
                <img :src="o.icon" alt="" height="28" loading="lazy" />
              </a>
            </template>
          </div>
          <br />

          <div v-html="resume.data.profile.summary" style="white-space: pre-line"></div>
        </v-container>

        <v-container id="skills">
          <h1>Skills</h1>
          <br />

          <div class="d-flex flex-column" style="gap: 20px">
            <template v-for="o in resume.data.skills">
              <div class="d-flex align-center" v-if="o.meta">
                <div style="min-width: 150px; max-width: 150px">{{ o.name }}</div>
                <div class="flex-grow-1">
                  <v-progress-linear :model-value="(100 * o.meta.rating) / 5" height="5" :aria-label="o.name" />
                </div>
                <small class="d-block text-right" style="min-width: 50px; max-width: 50px"
                  >{{ o.meta.rating }} / 5</small
                >
              </div>
            </template>
          </div>
        </v-container>

        <v-container id="experiencias">
          <h1>Experiências</h1>
          <br />

          <div class="d-flex flex-column" style="gap: 35px">
            <template v-for="o in resume.data.positions">
              <div class="ps-5" style="border-left: solid 5px #444">
                <h2 class="mb-2">{{ o.title }}</h2>

                <h3 class="d-flex align-center" v-if="o.companyName">
                  <v-icon icon="material-symbols:alternate-email" size="16" class="me-1" />
                  <span>{{ o.companyName }}</span>
                </h3>

                <div class="d-flex align-center">
                  <v-icon icon="material-symbols:calendar-month" size="16" class="me-1" />
                  <div>{{ o.dateInterval.start.formatted || "Atualmente" }}</div>
                  <div class="px-2">~</div>
                  <div>{{ o.dateInterval.final.formatted || "Atualmente" }}</div>
                </div>

                <div class="d-flex align-center" v-if="o.location.fullName">
                  <v-icon icon="ic:round-place" size="16" class="me-1" />
                  <span>{{ o.location.fullName }}</span>
                </div>

                <div v-html="o.description" v-if="o.description" class="mt-3"></div>
              </div>
            </template>
          </div>
        </v-container>

        <v-container id="projetos">
          <h1>Projetos</h1>
          <br />

          <!-- <v-dialog v-model="projectImages.dialog" width="800">
            <div class="d-flex align-center">
              <div class="flex-grow-1 px-3">
                <v-carousel v-model="projectImages.dialog" height="80vh" :hide-delimiters="true" #default="bind">
                  <template v-for="(_project, _projectIndex) in resume.data.projects">
                    <template v-for="(_image, _imageIndex) in _project.meta.images">
                      <v-carousel-item :value="_image.url">
                        <div class="px-md-10" style="height: 100%">
                          <div class="px-md-10" style="height: 100%">
                            <div class="bg-white mx-auto" style="height: 100%; overflow: auto; border-radius: 6px">
                              <h2 class="text-center py-3">
                                {{ _project.title }} ~ {{ _project.dateInterval.final.formatted }}
                              </h2>
                              <img :src="_image.url" alt="" style="width: 100%" loading="lazy" />
                            </div>
                          </div>
                        </div>
                      </v-carousel-item>
                    </template>
                  </template>
                </v-carousel>
              </div>
            </div>
          </v-dialog> -->

          <v-dialog v-model="projectImages.dialog" width="1000">
            <v-carousel v-model="projectImages.dialog" height="auto" :hide-delimiters="true" #default="bind">
              <template v-for="item in resume.projectsImages">
                <v-carousel-item :value="item.image.url">
                  <div class="h-100 px-md-10">
                    <div class="h-100 px-md-10 d-flex align-center">
                      <v-row no-gutters class="bg-white" style="position: relative; max-height: 100%">
                        <v-col cols="12" md="7" style="max-height: 80vh; overflow: auto; position: relative">
                          <v-btn
                            flat
                            icon="mdi-close"
                            size="30"
                            @click="projectImages.close()"
                            class="d-md-none"
                            style="position: fixed; top: 10px; right: 20px"
                          />

                          <img :src="item.image.url" alt="" style="width: 100%" />

                          <div
                            class="d-md-none text-white"
                            style="position: fixed; left: 0; bottom: 0; width: 100%; background: #000000bb"
                          >
                            <v-card-title>{{ item.project.title }}</v-card-title>
                            <v-card-text class="d-flex flex-column" style="gap: 15px">
                              <div class="d-flex align-center">
                                <v-icon icon="material-symbols:calendar-month" size="16" class="me-1" />
                                <div>{{ item.project.dateInterval.start.formatted || "Atualmente" }}</div>
                                <div class="px-2">~</div>
                                <div>{{ item.project.dateInterval.final.formatted || "Atualmente" }}</div>
                              </div>

                              <div v-if="item.project.description" v-html="item.project.description"></div>

                              <v-btn color="primary" v-if="item.project.url" :href="item.project.url" target="_blank"
                                >Visualizar</v-btn
                              >
                            </v-card-text>
                          </div>
                        </v-col>
                        <v-col cols="12" md="5" class="d-none d-md-block" style="max-height: 80vh; overflow: auto">
                          <v-card-title class="d-flex align-center">
                            <div class="flex-grow-1">{{ item.project.title }}</div>
                            <v-btn flat icon="mdi-close" size="30" @click="projectImages.close()" />
                          </v-card-title>
                          <v-card-text class="d-flex flex-column" style="gap: 15px">
                            <div class="d-flex align-center">
                              <v-icon icon="material-symbols:calendar-month" size="16" class="me-1" />
                              <div>{{ item.project.dateInterval.start.formatted || "Atualmente" }}</div>
                              <div class="px-2">~</div>
                              <div>{{ item.project.dateInterval.final.formatted || "Atualmente" }}</div>
                            </div>

                            <div v-if="item.project.description" v-html="item.project.description"></div>
                            <div v-if="item.image.description" v-html="item.image.description"></div>

                            <v-btn color="primary" v-if="item.project.url" :href="item.project.url" target="_blank">
                              Visualizar
                            </v-btn>
                          </v-card-text>
                          <!-- <pre>{{ item.project }}</pre> -->
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                </v-carousel-item>
              </template>
            </v-carousel>
          </v-dialog>

          <app-mansory :cols="3" :items="resume.projectsImages">
            <template #item="bind">
              <v-card @click="projectImages.open(bind.item.image)">
                <v-card-title>{{ bind.item.project.title }}</v-card-title>
                <img :src="bind.item.image.url" alt="" style="width: 100%" />
              </v-card>
            </template>
          </app-mansory>
        </v-container>
        <pre>{{ btnRefs }}</pre>
      </div>
    </v-layout>
  </v-app>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from "vue";
import axios from "axios";

const currentInstance = getCurrentInstance();

import { useDisplay } from "vuetify";
const display = useDisplay();

import useVuetifyThemeSwitcher from "@/composables/useVuetifyThemeSwitcher";
const vuetifyThemeSwitcher = useVuetifyThemeSwitcher();

const resume = reactive({
  ready: false,
  data: false,
  async load() {
    try {
      let { data } = await axios.get(
        "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/linkedin-resume.json"
      );
      data.projects = data.projects.sort((a, b) => {
        return a.dateInterval.start < a.dateInterval.final ? -1 : a.dateInterval.start > a.dateInterval.final ? 1 : 0;
      });
      resume.data = data;
      useSeoMeta({
        title: data.profile.headline,
        ogTitle: data.profile.headline,
        description: data.profile.headline,
        ogDescription: data.profile.headline,
        ogImage: "",
        twitterCard: "summary_large_image",
      });
      projectImages.open(resume.data.projects[0].meta.images[0]);
    } catch (err) {}
    resume.ready = true;
  },
  projectsImages: computed(() => {
    let projectsImages = [];

    resume.data.projects.map((project) => {
      project.meta.images.map((image) => {
        projectsImages.push({ image, project });
      });
    });

    return projectsImages;
  }),
});

const projectsModal = ref(null);

const menu = reactive({
  show: false,
  icon: "solar:hamburger-menu-outline",
  items: [
    { text: "Info", href: "#info" },
    { text: "Skills", href: "#skills" },
    { text: "Experiências", href: "#experiencias" },
    { text: "Projetos", href: "#projetos" },
    {
      icon: computed(() => {
        return vuetifyThemeSwitcher.current == "light" ? "material-symbols:dark-mode" : "material-symbols:light-mode";
      }),
      onClick: (ev) => {
        vuetifyThemeSwitcher.switch();
      },
    },
  ],
  defaults: {
    VBtn: { flat: true },
  },
});

const projectImages = reactive({
  dialog: false,
  open(image) {
    projectImages.dialog = image.url;
  },
  close() {
    projectImages.dialog = false;
  },
});

useSeoMeta({
  title: "Loading",
  ogTitle: "Loading",
  description: "Loading",
  ogDescription: "Loading",
  ogImage: "",
  twitterCard: "summary_large_image",
});

resume.load();
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

html,
body {
  font-family: "Lato", sans-serif;
  scroll-behavior: smooth !important;
  -webkit-scroll-behavior: smooth !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Playfair Display", serif;
  font-weight: 700;
}

a,
a:link,
a:visited,
a:hover {
  color: initial !important;
  font-family: "Playfair Display", serif !important;
}

.v-container {
  width: 800px;
  max-width: 90vw;
}

.ff-playfair {
  font-family: "Playfair Display", serif;
}

.ff-lato {
  font-family: "Lato", sans-serif;
}

[test],
[test] * {
  outline: solid 1px red !important;
}
</style>
