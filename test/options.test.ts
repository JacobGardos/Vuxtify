import { $fetch, setup } from "@nuxt/test-utils";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

describe("options", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
  });

  it("renders the index page", async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch("/");
    expect(html).toContain("<div>basic</div>");
  });

  // Add a test to make sure that the tree shaking functionality works.
  it.todo("tree shakes vuetify");

  // Test that the nuxtConfig.vuxtify.vuetify object is passed to createVuetify and that the options are applied correctly.
  it.todo("applies the vuetify config options correctly");

  // Optional
  it.todo("Sets the ssr option correctly depending on the nuxtConfig.ssr option");

  it.todo("Displays / Hides debug messages correctly depending on the nuxtConfig.vuxtify.debug option");

  it.todo("add the vuetify composables to the global imports");
});
