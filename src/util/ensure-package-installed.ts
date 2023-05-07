import { installPackage } from "@antfu/install-pkg";
import { createResolver, useLogger, useNuxt } from "@nuxt/kit";
import { isPackageExists } from "local-pkg";
import c from "picocolors";
import prompts from "prompts";

type ModuleDependency = { name: string; dev?: boolean } | string;

export async function ensurePackageInstalled(pkgs: ModuleDependency | ModuleDependency[]) {
  const nuxt = useNuxt();
  const root = createResolver(nuxt.options.rootDir).resolve();
  const logger = useLogger();

  const _pkgs = Array.isArray(pkgs) ? pkgs : [pkgs];

  const missingPkgs = _pkgs.filter((pkg) => {
    const name = typeof pkg === "string" ? pkg : pkg.name;
    return !isPackageExists(name, { paths: [root] });
  });

  if (missingPkgs.length === 0) return;

  const { install } = await prompts.prompt({
    type: "confirm",
    name: "install",
    message: c.reset(
      `Can not find the following dependencies ${c.green(
        missingPkgs.map((pkg) => (typeof pkg === "string" ? pkg : pkg.name)).join(",")
      )}. Do you want to install ?`
    ),
  });

  if (install) {
    const installedPkgs: string[] = [];

    const devDependencies = _pkgs.filter((pkg) => {
      return typeof pkg !== "string" && pkg.dev;
    });

    const dependencies = _pkgs.filter((pkg) => {
      return typeof pkg == "string" || !pkg.dev;
    });

    if (dependencies.length > 0) {
      await installPackage(
        dependencies.map((pkg) => {
          const pkgStr = typeof pkg === "string" ? pkg : pkg.name;
          installedPkgs.push(pkgStr);
          return pkgStr;
        }),
        { additionalArgs: ["--ignore-scripts"] }
      );
    }

    if (devDependencies.length > 0) {
      await installPackage(
        devDependencies.map((pkg) => {
          const pkgStr = typeof pkg === "string" ? pkg : pkg.name;
          installedPkgs.push(pkgStr);
          return pkgStr;
        }),
        { dev: true, additionalArgs: ["--ignore-scripts"] }
      );
    }

    logger.success(`Installed ${c.green(installedPkgs.join(","))}. You can re-run the command to start.\n\n`);
  }

  process.exit(43);
}
