import { defineNuxtConfig } from "nuxt/config";
import { ThemeDefinition } from "vuetify";

export const customLightTheme = {
  dark: false,
  colors: {
    primary: "#1976D2",
  },
} satisfies ThemeDefinition;

export default defineNuxtConfig({
  dev: true,
  modules: ["../../../src/module"],
  vuxtify: {
    vuetify: {
      theme: {
        defaultTheme: "customLightTheme",
        themes: {
          customLightTheme,
        },
      },
    },
  },
});
