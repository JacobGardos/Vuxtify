import {
  addImportsSources,
  addPlugin,
  addServerPlugin,
  addVitePlugin,
  addWebpackPlugin,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";
import { defu } from "defu";
import { useDebugLogger } from "./debugging/logger.debug";
import { ModuleOptions, PublicRuntimeOptions } from "./options.interface";
import { VitePluginVuetify, WebpackPluginVuetify } from "./util/builder.types";
import { ensurePackageInstalled } from "./util/ensure-package-installed";
import vuetifyComposables from "./vuetify.composables";

export const MODULE_NAME = "vuxtify";

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
    compressAssets: false,
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    const logger = useDebugLogger();

    if (nuxt.options._prepare) {
      return logger.debug("Skipping module setup during nuxt prepare");
    }

    if (options.treeShaking) {
      logger.debug("TreeShaking Enabled");

      if (typeof options.treeShaking === "boolean") options.treeShaking = {};

      // Resolve relative paths to absolute paths
      if (typeof options.treeShaking.styles == "object" && options.treeShaking.styles.configFile) {
        options.treeShaking.styles.configFile = await resolver.resolvePath(options.treeShaking.styles.configFile);
      }

      switch (nuxt.options.builder) {
        case "@nuxt/vite-builder": {
          const VPV = "vite-plugin-vuetify";
          await ensurePackageInstalled([{ name: "sass", dev: true }, VPV]);

          const vitePluginVuetify = VitePluginVuetify(options.treeShaking);
          addVitePlugin(vitePluginVuetify);

          // Fix For - https://github.com/vuetifyjs/vuetify-loader/issues/290
          addServerPlugin(resolver.resolve("./runtime/server-plugin"));
          nuxt.options.sourcemap.server = false;
          nuxt.options.sourcemap.client = false;

          logger.debug(`Added ${VPV}`);
          break;
        }
        case "@nuxt/webpack-builder": {
          const WPV = "webpack-plugin-vuetify";
          await ensurePackageInstalled([{ name: "sass", dev: true }, { name: "sass-loader", dev: true }, WPV]);

          const webpackPluginVuetify = WebpackPluginVuetify(options.treeShaking);
          addWebpackPlugin(webpackPluginVuetify);

          logger.debug(`Added ${WPV}`);
          break;
        }
        default: {
          throw new Error(`Tree shaking is not supported for ${nuxt.options.builder}`);
        }
      }
    }

    // --- Config Setup
    nuxt.options.css.push("vuetify/styles");
    nuxt.options.build.transpile.push("vuetify");
    nuxt.options.nitro.compressPublicAssets = options.compressAssets;

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
