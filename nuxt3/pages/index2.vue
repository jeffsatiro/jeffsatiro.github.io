<template>
  <v-app theme="dark">
    <v-navigation-drawer
      rail permanent
    >
      <v-defaults-provider
        :defaults="{
          VBtn: { stacked: true, flat: true, size: 50 },
          VIcon: { size: 25 },
        }"
      >
        <div class="h-100 d-flex align-center flex-column py-2" style="gap: 5px;">
          <template v-for="o in resume.sections">
            <template v-if="typeof o != 'object'">
              <v-spacer />
            </template>
            <template v-else>
              <v-tooltip :text="o.title">
                <template #activator="bind">
                  <v-btn v-bind="bind.props" @click="resume.section = o.id">
                    <v-icon :icon="o.icon" />
                  </v-btn>
                </template>
              </v-tooltip>
            </template>
          </template>
        </div>
      </v-defaults-provider>
    </v-navigation-drawer>

    <!-- <v-navigation-drawer width="244">
      aaa
    </v-navigation-drawer> -->

    <v-main>
      <div v-if="resume.ready" style="display: flex; flex-direction: column; height: 100vh; overflow: auto;">
        <div>
          <v-tabs v-model="resume.section" density="compact" variant="tonal">
            <template v-for="o in resume.sections">
              <v-tab
                v-if="typeof o=='object'"
                :value="o.id"
                variant="tonal"
              >{{ o.filename }}</v-tab>
            </template>
          </v-tabs>
        </div>

        <div style="flex-grow: 1; overflow: auto;">
          <v-window v-model="resume.section" style="height:100%;">
            <v-window-item value="bio">
              <app-monaco
                style="width: 100%; height: 100vh !important;"
                :model-value="[
                  ``,
                  `const dev = new class FullStackDeveloper`,
                  `{`,
                  `   name = '${resume.data.basics.name}';`,
                  `   description = '${resume.data.basics.label}';`,
                  `   place = '`+ [resume.data.basics.location.city, resume.data.basics.location.state].filter(v => !!v).join(', ') +`';`,
                  `   stack = [`+ resume.data.skills.map(s => `\n\t\t'${s.name}'`) +`\n\t];`,
                  `}`,
                  ``,
                  `/**\n${resume.data.basics.summary}*/`,
                  ``,
                ].join(`\n`)"
                :options="{
                  language: 'javascript',
                  wordWrap: 'on',
                }"
              />
            </v-window-item>
  
            <v-window-item value="contacts">
              <v-container class="pa-3 border">
                <h2>Contatos</h2>
                <ul class="ms-5">
                  <template v-for="o in resume.data.contacts">
                    <li><a :href="o.url" target="_blank">{{ o.name }}</a></li>
                  </template>
                </ul>
  
                <br>
                <h2>Links</h2>
                <ul class="ms-5">
                  <template v-for="o in resume.data.links">
                    <li><a :href="o.url" target="_blank">{{ o.name }}</a></li>
                  </template>
                </ul>
              </v-container>
            </v-window-item>
  
            <v-window-item value="skills">
              <v-container class="pa-3 border">
                <h2>Skills</h2>
                <table>
                  <tbody>
                    <template v-for="o in resume.data.skills">
                      <tr>
                        <td class="py-1 pe-4">{{ o.name }}</td>
                        <td class="py-1">
                          <div class="d-flex" style="gap:10px;">
                            <template v-for="s in resume.rating(o.rating, 5)">
                              <v-icon :icon="s.checked ? 'material-symbols-light:kid-star' : 'material-symbols-light:kid-star-outline'" />
                            </template>
                          </div>
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </v-container>
            </v-window-item>
  
            <v-window-item value="work">
              <v-container class="pa-3 border">
                work
              </v-container>
            </v-window-item>
  
            <v-window-item value="portfolio">
              <v-container class="pa-3 border">
                portfolio
              </v-container>
            </v-window-item>
  
            <v-window-item value="settings">settings</v-window-item>
          </v-window>
        </div>

        <div>aa</div>
      </div>
    </v-main>
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
      resume.data = data;
      resume.data.skills = resume.data.skills.filter((o) => o.show);
      resume.data.work = resume.data.work.filter((o) => o.show);
      useSeoMeta({
        title: data.profile.headline,
        ogTitle: data.profile.headline,
        description: data.profile.headline,
        ogDescription: data.profile.headline,
        ogImage: "",
        twitterCard: "summary_large_image",
      });
      // projectImages.open(resume.data.projects[0].meta.images[0]);
    } catch (err) {}
    resume.ready = true;
  },
  projectsImages: computed(() => {
    let projectsImages = [];

    resume.data.projects.map((project) => {
      project.images.map((image) => {
        projectsImages.push({ image, project });
      });
    });

    return projectsImages;
  }),
  rating(stars, size=10) {
    // const full = 'material-symbols-light:kid-star';
    // const empty = 'material-symbols-light:kid-star-outline';
    stars = (stars || 0) / 100 * size;
    return [ ...Array(size).keys() ].map((value) => {
      value++;
      const checked = value <= stars;
      return { value, checked };
    });
  },
  section: 'bio',
  sections: [
    {
      id: 'contacts',
      title: 'Contatos',
      filename: 'contacts.md',
      icon: 'material-symbols:contact-mail-outline',
    },
    {
      id: 'skills',
      title: 'Skills',
      filename: 'skills.md',
      icon: 'streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars',
    },
    {
      id: 'work',
      title: 'Experiência',
      filename: 'work.js',
      icon: 'fa6-solid:timeline',
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      filename: 'portfolio.js',
      icon: 'bytesize:portfolio',
    },
    'spacer',
    {
      id: 'bio',
      title: 'Bio',
      filename: 'home.js',
      icon: 'material-symbols:person-2-outline',
    },
    {
      id: 'settings',
      title: 'Settings',
      filename: 'settings.js',
      icon: 'tabler:settings',
    },
  ],
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
