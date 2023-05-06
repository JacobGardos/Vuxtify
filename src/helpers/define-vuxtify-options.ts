import type { ModuleOptions } from "../options.interface";

/**
 * A helper function for defining your vuxtify options, that can be used
 * in the `vuxtify` key of the `nuxt.config.ts` file.
 *
 * Helpful when defining your options in a separate file to avoid cluttering the
 * `nuxt.config.ts` file.
 *
 * @param options Vuxtify Module Options
 */
export function defineVuxtifyOptions<T extends Partial<ModuleOptions>>(options: T): T {
  return options;
}
