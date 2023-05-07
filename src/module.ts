import {
  addImportsSources,
  addPlugin,
  addServerPlugin,
  addVitePlugin,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";
import { defu } from "defu";
import { useDebugLogger } from "./debugging/logger.debug";
import { ModuleOptions, PublicRuntimeOptions } from "./options.interface";
import { hasMatchingDependency, hasMatchingDevDependency } from "./util/import-pkg";
import vuetifyComposables from "./vuetify.composables";

export const MODULE_NAME = "vuxtify";

// 1. Start doing the Webpack plugin, check they have sass-loader installed && check if they have webpack-vuetify-plugin installed
// 2. Remove the helper function for defining the options

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
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    const logger = useDebugLogger();

    if (options.treeShaking) {
      hasMatchingDevDependency("sass");

      switch (nuxt.options.builder) {
        case "@nuxt/vite-builder":
          logger.debug("Installing vite-plugin-vuetify");
          hasMatchingDependency("vite-plugin-vuetify");

          const vitePluginVuetify: typeof import("vite-plugin-vuetify").default = require("vite-plugin-vuetify");
          addVitePlugin(vitePluginVuetify(options.treeShaking));

          // Fix For - https://github.com/vuetifyjs/vuetify-loader/issues/290
          addServerPlugin(resolver.resolve("./runtime/server-plugin"));
          nuxt.options.sourcemap.server = false;
          nuxt.options.sourcemap.client = false;
          break;

        case "@nuxt/webpack-builder":
          logger.debug("Installing webpack-vuetify-plugin");
          break;
        default:
          throw new Error(`Tree shaking is not supported for ${nuxt.options.builder}`);
      }
    }

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

export * from "./helpers/define-vuxtify-options";
