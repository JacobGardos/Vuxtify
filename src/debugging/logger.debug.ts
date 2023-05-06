import { useNuxt, useLogger as useNuxtLogger } from "@nuxt/kit";
import { MODULE_NAME } from "../module";

/**
 * A Composable That Returns A Debug Logger For The Vuxtify Module.
 */
export function useDebugLogger() {
  const nuxt = useNuxt();
  const logger = useNuxtLogger(MODULE_NAME);
  logger.level = nuxt.options.vuxtify?.debug ? 5 : -999;
  return logger;
}
