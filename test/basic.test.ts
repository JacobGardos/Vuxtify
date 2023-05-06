import { setup } from "@nuxt/test-utils";
import { fileURLToPath } from "node:url";
import { describe } from "vitest";
import { commonTests } from "./common.test";

describe("Basic Installation", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
    runner: "vitest",
    browser: true,
    browserOptions: {
      type: "chromium",
      launch: {
        headless: false,
        slowMo: 3000,
      },
    },
  });

  commonTests("Basic Installation");
});
