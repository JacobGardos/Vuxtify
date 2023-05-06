import { $fetch, createPage } from "@nuxt/test-utils";
import { describe, expect, it } from "vitest";
import { customLightTheme } from "./fixtures/basic/nuxt.config";
import { hexToRgb } from "./util/hex-rgb";

export const commonTests = (name: string) => {
  describe(`Common Tests for ${name}`, async () => {
    it("Renders components", async () => {
      const page = await createPage("/");

      const button = await page.$("#primary-btn");
      expect(button).toBeTruthy();

      const bgColor = await button!.evaluate((el) => getComputedStyle(el).backgroundColor);
      expect(bgColor).toBe(hexToRgb(customLightTheme["colors"]["primary"]));
    });

    it("Provides composables", async () => {
      const html = await $fetch("/");
      expect(html).toContain("customLightTheme");
    });
  });
};
