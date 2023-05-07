import { NuxtConfig } from "@nuxt/schema";
import { setup } from "@nuxt/test-utils";
import { fileURLToPath } from "node:url";

export const setupVuxtify = async (nuxtConfig: NuxtConfig = {}) => {
  await setup({
    rootDir: fileURLToPath(new URL("../fixtures/basic", import.meta.url)),
    runner: "vitest",
    nuxtConfig,
  });
};
