import { defineVuxtifyOptions } from "../../dist/module";

export default defineVuxtifyOptions({
  debug: true,
  vuetify: {
    defaults: {
      global: {
        ripple: false,
      },
    },
  },
});
