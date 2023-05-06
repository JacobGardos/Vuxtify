import { VuetifyOptions } from "vuetify";

export interface ModuleOptions {
  /**
   * Whether or not to enable tree shaking.
   * @see https://vuetifyjs.com/en/features/treeshaking/#treeshaking
   * @default false
   */
  treeShaking: boolean;
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
