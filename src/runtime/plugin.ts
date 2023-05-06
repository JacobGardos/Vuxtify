import { defineNuxtPlugin } from "#app";
import { useRuntimeConfig } from "#imports";
import { defu } from "defu";
import { createVuetify, VuetifyOptions } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import type { PublicRuntimeOptions as VuxtifyRuntimeOptions } from "../options.interface";

export default defineNuxtPlugin((nuxtApp) => {
  const { vOptions, treeShaking, ssr }: VuxtifyRuntimeOptions = useRuntimeConfig().public.vuxtify;
  const vuetifyOptions = defu<VuetifyOptions, Array<VuetifyOptions>>(vOptions, {
    ssr,
  });

  if (!treeShaking) {
    vuetifyOptions["components"] = components;
    vuetifyOptions["directives"] = directives;
  }

  const vuetify = createVuetify(vuetifyOptions);
  nuxtApp.vueApp.use(vuetify);

  return {
    provide: {
      vuxtify: vuetify,
    },
  };
});
