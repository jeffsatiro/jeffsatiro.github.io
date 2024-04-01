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
                style="text-transform: none; font-size: 12px; color: #bbb;"
              >{{ o.filename }}</v-tab>
            </template>
          </v-tabs>
        </div>

        <div style="flex-grow: 1; overflow: auto; position: relative;">
          <app-monaco
            v-if="resume.section == 'bio'"
            style="width: 100%; height: 100% !important;"
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
              readOnly: true,
              wordWrap: 'on',
            }"
          />

          <div v-if="resume.section == 'contacts'">
            <v-container class="pa-3 mt-lg-4" style="max-width:1000px;">
              <h2>Contatos</h2>
              <div class="mt-3"></div>
              <v-table>
                <tbody>
                  <template v-for="o in [ ...resume.data.contacts, ...resume.data.links ]">
                    <tr>
                      <td>{{ o.name }}</td>
                      <td><a href="o.url" target="_blank" style="color: #fff; text-decoration: none;;">{{ o.url }}</a></td>
                      <td>
                        <v-btn
                          :color="clipboard.copied.value && o.url==resume.clipboardText ? 'success' : null"
                          density="compact"
                          @click="clipboard.copy(o.url); resume.clipboardText = o.url;"
                        >
                          <v-icon :icon="clipboard.copied.value && o.url==resume.clipboardText ? 'material-symbols:fitbit-check-small' : 'material-symbols:content-copy-outline'" />
                        </v-btn>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </v-table>
            </v-container>
          </div>

          <div v-if="resume.section == 'skills'">
            <v-container class="pa-3 mt-lg-4" style="max-width:1000px;">
              <h2>Skills</h2>
              <div class="mt-3"></div>
              <v-table>
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
              </v-table>
            </v-container>
          </div>

          <div v-if="resume.section == 'work'">
            <v-container class="pa-3 mt-lg-4 border" style="max-width:1000px;">
              <div class="d-flex flex-column" style="gap: 25px;">
                <h2>Experiência</h2>
                <template v-for="(o, i) in resume.data.work.filter(i => i.show)">
                  <div>
                    <div class="border-t pt-4" v-if="i"></div>
                    <h3>{{ o.position }} | {{ o.name }}</h3>
                    <div>{{ helper.formatLocation(o.location) }}</div>
                    <div>{{ helper.formatDateBetween(o.date) }}</div>
                    <small v-if="o.summary" v-html="o.summary" class="d-block mt-2"></small>
                  </div>
                </template>
              </div>
            </v-container>
          </div>

          <div v-if="resume.section == 'portfolio'">
            <v-container class="pa-3 mt-lg-4 border" style="max-width:1000px;">
              <div class="d-flex flex-column" style="gap: 25px;">
                <h2>Portfólio</h2>
                <template v-for="(o, i) in resume.data.projects.filter(i => i.show)">
                  <div>
                    <div class="border-t pt-4" v-if="i"></div>
                    <h3><a :href="o.url || null" target="_blank" style="color: #fff;">{{ o.name }}</a></h3>
                    <div>{{ helper.formatDateBetween(o.date) }}</div>
                    <div v-if="o.summary" v-html="o.summary" class="my-2"></div>

                    <v-dialog max-width="600" v-if="o.images.length > 0">
                      <template #activator="bind">
                        <div class="d-flex" style="gap: 10px; cursor: pointer;" v-bind="bind.props">
                          <template v-for="oo in o.images">
                            <div :style="`background:url(${oo.url}) center center no-repeat; background-size: cover; width:100px; height:100px; border-radius:8px;`"></div>
                          </template>
                        </div>
                      </template>

                      <template #default="bind">
                        <v-card>
                          <v-card-title>{{ o.name }}</v-card-title>
                          <v-carousel
                            :hide-delimiters="o.images.length <= 1"
                            :show-arrows="o.images.length > 1"
                            :height="null"
                          >
                            <template v-for="oo in o.images">
                              <v-carousel-item style="position: relative; z-index:-1;">
                                <app-img-zoom :src="oo.url" style="width:100%; height:100%;" />
                              </v-carousel-item>
                            </template>
                          </v-carousel>
                          <v-card-actions class="justify-end">
                            <v-btn class="bg-primary" @click="bind.isActive.value = false">Ok</v-btn>
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                    <!-- <pre>{{ o }}</pre> -->
                  </div>
                </template>
              </div>
            </v-container>
          </div>

          <div v-if="resume.section == 'settings'">
            <v-container class="pa-3 mt-lg-4 border" style="max-width:1000px;">
              settings
            </v-container>
          </div>
        </div>

        <div class="d-flex align-center pe-2" style="gap:10px; font-size:10px; color:#aaa;">
          <div class="bg-teal pa-1">WSL: Ubuntu</div>
          <div class="d-flex">
            <v-icon icon="mingcute:git-branch-line" />
            main
          </div>
          <div class="d-flex">
            <v-icon icon="ic:outline-history" />
            &nbsp; 3 hrs 32 mins
          </div>
          <v-spacer />
          <div>Spaces: 2</div>
          <div>UTF-8</div>
          <div>LF</div>
          <div class="d-flex">
            <v-icon icon="tdesign:check-double" /> &nbsp; Prettier
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import axios from "axios";

import { useClipboard } from '@vueuse/core';
const clipboard = useClipboard();

import useVuetifyThemeSwitcher from "@/composables/useVuetifyThemeSwitcher";
const vuetifyThemeSwitcher = useVuetifyThemeSwitcher();

const helper = reactive({
  formatDate() {
    return 'zzz';
  },
  formatDateBetween(date) {
    if (!date.start.formatted) return '';
    if (!date.final.formatted) return '';
    let start = date.start.formatted;
    let final = date.final.formatted;
    return `${start} and ${final}`;
  },
  formatLocation(location) {
    return [
      location.city,
      location.state,
      location.country,
    ].filter(v => !!v).join(', ');
  },
});

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
  clipboardText: null,
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
      filename: 'work.md',
      icon: 'fa6-solid:timeline',
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      filename: 'portfolio.md',
      icon: 'bytesize:portfolio',
    },
    'spacer',
    {
      id: 'bio',
      title: 'Bio',
      filename: 'bio.js',
      icon: 'material-symbols:person-2-outline',
    },
    // {
    //   id: 'settings',
    //   title: 'Settings',
    //   filename: 'settings.js',
    //   icon: 'tabler:settings',
    // },
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
