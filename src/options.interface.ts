import { Options as VuetifyLoaderOptions } from "@vuetify/loader-shared";
import { VuetifyOptions } from "vuetify";

interface _VuetifyLoaderOptions extends Omit<VuetifyLoaderOptions, "stylesTimeout" | "autoImport"> {
  /**
   * Sets the method of customizing Vuetify's style variables.
   * 
   * @see https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#style-loading
   * 
   * **expose** - Expose scss variables not used by Vuetify components and are safe to modify without additional configuration.
   * 
   * **configFile** - Use a scss file to customize variables used in Vuetify components.
   * 
   * **none** - Removes all style imports
   * 
   * **sass** - Vuetify 3 uses precompiled css by default, these imports can optionally be modified to point to sass files instead
   */
  styles?: VuetifyLoaderOptions["styles"];
}

export interface ModuleOptions {
  /**
   * Options for tree shaking.
   * Tree shaking is enabled by passing an object to this option or by setting it to true.
   * Options are passed to vite-plugin-vuetify or webpack-plugin-vuetify under the hood.
   * @see https://vuetifyjs.com/en/features/treeshaking/#treeshaking
   * @default false
   */
  treeShaking: boolean | _VuetifyLoaderOptions;
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
  /**
   * Whether or not to auto import Vuetify components across your nuxt app.
   * @default true
   */
  autoImport: boolean;
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
  /**
   * Whether or not to auto import Vuetify components in the users app.
   */
  autoImport: ModuleOptions["autoImport"];
}
