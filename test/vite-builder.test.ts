import { createPage } from "@nuxt/test-utils";
import { describe, expect, it } from "vitest";
import { hexToRgb } from "./util/hex-rgb";
import { setupVuxtify } from "./util/setup-vuxtify";
import { customLightTheme } from "./util/theme";

describe("Vite", async () => {
  await setupVuxtify({
    builder: "vite",
    dev: true,
    vuxtify: {
      treeShaking: {
        styles: {
          configFile: "./assets/settings.scss",
        },
      },
      vuetify: {
        theme: {
          defaultTheme: "customLightTheme",
          themes: {
            customLightTheme,
          },
        },
      },
    },
  });

  it("Imports Components", async () => {
    const page = await createPage("/");

    const button = await page.$("#primary-btn");
    expect(button).toBeTruthy();

    const bgColor = await button!.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(bgColor).toBe(hexToRgb(customLightTheme["colors"]["primary"]));
  });

  it("Style Overrides", async () => {
    const page = await createPage("/");

    const button = await page.$("#default-btn");
    expect(button).toBeTruthy();

    const bgColor = await button!.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(bgColor).toBe(hexToRgb("#ff0000"));
  });
});
