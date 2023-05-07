import { Options as VuetifyLoaderOptions } from "@vuetify/loader-shared";
import { VuetifyOptions } from "vuetify";

export interface ModuleOptions {
  /**
   * Options for tree shaking via the @vuetify/loader-shared package.(vite/webpack).
   * Enabled by passing an object, disabled by passing false.
   * @see https://vuetifyjs.com/en/features/treeshaking/#treeshaking
   * @default false
   */
  treeShaking: VuetifyLoaderOptions | false;
  /**
   * Options passed to createVuetify()
   * @see https://vuetifyjs.com/en/getting-started/installation/#manual-steps
   * @default {}
   */
  vuetify: VuetifyOptions;
  /**
   * Enables the output of debug messages in the console.
   * @default false
   */
  debug: boolean;
}

export interface PublicRuntimeOptions {
  /**
   * The users options for the vuetify module.
   */
  vOptions: ModuleOptions["vuetify"];
  /**
   * The users options for the tree shaking module.
   */
  treeShaking: ModuleOptions["treeShaking"];
  /**
   * Whether or not the users app is running in SSR mode.
   */
  ssr: boolean;
}
