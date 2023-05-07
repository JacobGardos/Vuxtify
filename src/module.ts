import { addImportsSources, addPlugin, addServerPlugin, createResolver, defineNuxtModule } from "@nuxt/kit";
import { defu } from "defu";
import { installVitePlugin, installWebpackPlugin } from "./build-plugins";
import { ModuleOptions, PublicRuntimeOptions } from "./options.interface";
import { hasMatchingDevDependency } from "./util/import-pkg";
import vuetifyComposables from "./vuetify.composables";

export const MODULE_NAME = "vuxtify";

// 1. fix the loader options in the moduleOptions so it's one to one with the @vuetify/loader-shared options
// 2. Move the logic from installVitePlugin to module.ts setup function
// 3. Fix the runtime plugin who's relying on autoImport.
// 4. Start doing the Webpack plugin, check they have sass-loader installed && check if they have webpack-vuetify-plugin installed
// 5. Remove the helper function for defining the options

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
    autoImport: true,
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    const builder = nuxt.options.builder;

    if (options.treeShaking) {
      hasMatchingDevDependency("sass");

      if (builder === "@nuxt/vite-builder") {
        const pluginOptions = installVitePlugin(options);

        if (typeof pluginOptions.styles == "object" && pluginOptions.styles.configFile) {
          // Fix For - https://github.com/vuetifyjs/vuetify-loader/issues/290
          addServerPlugin(resolver.resolve("./runtime/server-plugin"));
          nuxt.options.sourcemap.server = false;
          nuxt.options.sourcemap.client = false;
        }
      } else if (builder === "@nuxt/webpack-builder") {
        installWebpackPlugin(options);
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
        autoImport: options.autoImport,
      }
    );
    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});

export * from "./helpers/define-vuxtify-options";
