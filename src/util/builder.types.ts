export type VuetifyBuildPluginOptions = {
  /**
   * Whether to automatically import Vuetify components.
   * @default true
   */
  autoImport?: boolean;
  /**
   * Style options.
   *
   * none - remove all styles
   *
   * expose - exposes variables that are not used by vuetify components and are safe to modify without any additional configuration
   *
   * sass - Vuetify 3 uses precompiled css by default, these imports can optionally be modified to point to sass files instead
   *
   * { configFile: string } - path to a sass config file for overriding variables
   *
   * @see https://vuetifyjs.com/en/features/sass-variables/
   * @see https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
   *
   * @default undefined
   */
  styles?:
    | true
    | "none"
    | "expose"
    | "sass"
    | {
        configFile: string;
      };
  /** @internal Only for testing */
  stylesTimeout?: number;
};

export const VitePluginVuetify = (options: VuetifyBuildPluginOptions) => {
  const vitePluginVuetify = require("vite-plugin-vuetify");
  return vitePluginVuetify(options);
};

export const WebpackPluginVuetify = (options: VuetifyBuildPluginOptions) => {
  const { VuetifyPlugin } = require("webpack-plugin-vuetify");
  return new VuetifyPlugin(options);
};
