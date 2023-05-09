import { useNuxt, useLogger as useNuxtLogger } from "@nuxt/kit";

/**
 * A Composable That Returns A Debug Logger For The Vuxtify Module.
 */
export function useDebugLogger() {
  const nuxt = useNuxt();
  const logger = useNuxtLogger("vuxtify");
  // @ts-ignore
  logger.level = nuxt.options.vuxtify?.debug ? 5 : -999;
  return logger;
}
