import { addImportsSources, addPlugin, createResolver, defineNuxtModule } from "@nuxt/kit";
import { defu } from "defu";
import { ModuleOptions, PublicRuntimeOptions } from "./options.interface";
import vuetifyComposables from "./vuetify.composables";
export const MODULE_NAME = "vuxtify";
export * from "./helpers/define-vuxtify-options";

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: MODULE_NAME,
    configKey: MODULE_NAME,
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  defaults: {
    treeShaking: false,
    vuetify: {},
    debug: false,
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // --- Config Setup
    nuxt.options.css.push("vuetify/styles");
    nuxt.options.build.transpile.push("vuetify");

    // --- Runtime Setup
    addImportsSources(vuetifyComposables);
    nuxt.options.runtimeConfig.public[MODULE_NAME] = defu<any, Array<PublicRuntimeOptions>>(
      nuxt.options.runtimeConfig.public[MODULE_NAME],
      {
        vOptions: options.vuetify,
        treeShaking: options.treeShaking,
        ssr: nuxt.options.ssr,
      }
    );
    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
