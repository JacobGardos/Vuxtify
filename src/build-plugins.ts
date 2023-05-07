import { addVitePlugin } from "@nuxt/kit";
import { Options as PluginOptions } from "@vuetify/loader-shared";
import { useDebugLogger } from "./debugging/logger.debug";
import { ModuleOptions } from "./options.interface";
import { hasMatchingDependency } from "./util/import-pkg";

export function installVitePlugin({ autoImport, treeShaking }: ModuleOptions): PluginOptions {
  hasMatchingDependency("vite-plugin-vuetify");

  const logger = useDebugLogger();
  logger.debug("Installing vite-plugin-vuetify");

  const pluginOptions: PluginOptions = {
    autoImport,
  };
  if (treeShaking) pluginOptions.styles = typeof treeShaking == "object" ? treeShaking.styles : treeShaking;

  const vitePluginVuetify: typeof import("vite-plugin-vuetify").default = require("vite-plugin-vuetify");
  addVitePlugin(vitePluginVuetify(pluginOptions));

  return pluginOptions;
}

export function installWebpackPlugin(vuxtifyOptions: ModuleOptions) {
  const logger = useDebugLogger();
  logger.debug("Installing webpack-vuetify-plugin");
}
