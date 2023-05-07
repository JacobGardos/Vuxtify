export default defineNuxtConfig({
  modules: ["../src/module"],
  builder: "vite",
  vuxtify: {
    debug: true,
    treeShaking: {
      styles: {
        configFile: "./assets/settings.scss",
      },
    },
  },
});
