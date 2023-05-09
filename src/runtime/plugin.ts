import { defineNuxtPlugin } from "#app";
import { useAppConfig, useRuntimeConfig } from "#imports";
import { VuetifyOptions, createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const { treeShaking, ssr } = useRuntimeConfig().public.vuxtify;
  const vuetifyOptions: VuetifyOptions = useAppConfig()?.vuetify || {};

  vuetifyOptions["ssr"] = ssr;
  if (!treeShaking) {
    vuetifyOptions["components"] = components;
    vuetifyOptions["directives"] = directives;
  }

  const vuetify = createVuetify(vuetifyOptions);
  nuxtApp.vueApp.use(vuetify);
  nuxtApp.provide("vuetify", vuetify);
});

declare module "#app" {
  interface NuxtApp {
    $vuetify: ReturnType<typeof createVuetify>;
  }
}
