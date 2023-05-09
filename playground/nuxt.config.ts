export default defineNuxtConfig({
  modules: ["../src/module"],
  builder: "vite",
  vuxtify: {
    debug: true,
    compressAssets: true,
    treeShaking: {
      styles: {
        configFile: "./assets/settings.scss",
      },
    },
  },
});
