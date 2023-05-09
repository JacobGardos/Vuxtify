import { VuetifyOptions } from "vuetify";
import { VuetifyBuildPluginOptions } from "./util/builder.types";

export interface ModuleOptions {
  /**
   * Options for tree shaking via the @vuetify/loader-shared package.(vite/webpack).
   * Enabled by passing an object, disabled by passing false.
   * @see https://vuetifyjs.com/en/features/treeshaking/#treeshaking
   * @default false
   */
  treeShaking: VuetifyBuildPluginOptions | boolean;
  /**
   * Enables the output of debug messages in the console.
   * @default false
   */
  debug: boolean;
  /**
   * Enables compression of public assets by enabling nitro compressPublicAssets.
   * Helps to improve light house scores.
   * @default false
   */
  compressAssets: boolean;
}

export interface VuxtifyRuntimeConfig {
  /**
   * Whether or not to import components and directives from vuetify directly.
   * @internal
   */
  treeShaking: boolean;
  /**
   * Whether or not the app is running in SSR mode. (Based on nuxtConfig.ssr)
   * @internal
   */
  ssr: boolean;
}

export interface VuxtifyAppConfig {
  /**
   * Options passed to createVuetify()
   * @see https://vuetifyjs.com/en/getting-started/installation/#manual-steps
   * @default {}
   */
  vuetify?: Omit<VuetifyOptions, "components" | "directives" | "ssr">;
}

declare module "nuxt/schema" {
  interface AppConfigInput extends VuxtifyAppConfig {}

  interface PublicRuntimeConfig {
    /**
     * Vuxtify Module Options
     */
    vuxtify: VuxtifyRuntimeConfig;
  }
}

export {};
