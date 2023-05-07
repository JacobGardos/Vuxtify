import { createResolver, useNuxt } from "@nuxt/kit";

export function usePackageJSON(): Record<string, any> {
  const nuxt = useNuxt();
  const resolver = createResolver(nuxt.options.rootDir);
  const pkgJSON = require(resolver.resolve("package.json"));
  return pkgJSON;
}
