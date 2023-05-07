import VuxtifyOptions from "./vuetify/config.options";

export default defineNuxtConfig({
  modules: ["../src/module"],
  vuxtify: {
    treeShaking: {
      styles: {
        configFile: "./assets/settings.scss",
      },
    },
    debug: true, // For playground purposes only
    vuetify: {
      defaults: {
        global: {
          ripple: false,
        },
      },
    },
  },
});
