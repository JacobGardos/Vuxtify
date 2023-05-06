import { ImportPresetWithDeprecation } from "@nuxt/schema";

export default {
  from: "vuetify",
  imports: [
    {
      name: "useLayout",
      as: "useVLayout",
    },
    {
      name: "useDefaults",
      as: "useVDefaults",
    },
    {
      name: "useDisplay",
      as: "useVDisplay",
    },
    {
      name: "useLocale",
      as: "useVLocale",
    },
    {
      name: "useRtl",
      as: "useVRtl",
    },
    {
      name: "useTheme",
      as: "useVTheme",
    },
  ],
} satisfies ImportPresetWithDeprecation;
