import { $fetch } from "@nuxt/test-utils";
import { describe, expect, it } from "vitest";
import { setupVuxtify } from "./util/setup-vuxtify";
import { customLightTheme } from "./util/theme";

describe("Basic", async () => {
  await setupVuxtify({
    appConfig: {
      vuetify: {
        theme: {
          defaultTheme: "customLightTheme",
          themes: {
            // @ts-expect-error
            customLightTheme,
          },
        },
      },
    },
  });

  it("Inject Vuetify Composables Globally", async () => {
    const html = await $fetch("/");
    expect(html).toContain("customLightTheme");
  });
});
