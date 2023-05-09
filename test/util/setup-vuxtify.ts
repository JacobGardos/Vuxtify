import { NuxtConfig } from "@nuxt/schema";
import { setup } from "@nuxt/test-utils";
import { fileURLToPath } from "node:url";
import { VuxtifyAppConfig } from "../../src/options.interface";

export const setupVuxtify = async (nuxtConfig: NuxtConfig = {}, appConfig: VuxtifyAppConfig = {}) => {
  await setup({
    rootDir: fileURLToPath(new URL("../fixtures/basic", import.meta.url)),
    runner: "vitest",
    nuxtConfig,
  });
};
