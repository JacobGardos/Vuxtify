import { satisfies } from "compare-versions";
import modulePkgJSON from "../../package.json";
import { usePackageJSON } from "./package-json.composable";

export const hasDevDependency = (pkgName: string, semver?: string): boolean => {
  const pkgJSON = usePackageJSON();
  const hasPkgKey = Object.keys(pkgJSON.devDependencies || {}).includes(pkgName);

  if (!hasPkgKey) return false;
  if (!semver) return true;

  const pkgVersion = pkgJSON.devDependencies[pkgName];
  return satisfies(pkgVersion, `${semver}`);
};

export const hasDependency = (pkgName: string, semver?: string): boolean => {
  const pkgJSON = usePackageJSON();
  const hasPkgKey = Object.keys(pkgJSON.dependencies || {}).includes(pkgName);

  if (!hasPkgKey) return false;
  if (!semver) return true;

  const pkgVersion = pkgJSON.dependencies[pkgName];
  return satisfies(pkgVersion, `${semver}`);
};

export const hasMatchingDependency = (pkgName: keyof (typeof modulePkgJSON)["dependencies"]): boolean => {
  const moduleVersion = modulePkgJSON["dependencies"][pkgName];
  if (!hasDependency(pkgName, moduleVersion)) {
    throw new Error(
      `${pkgName}@${moduleVersion} is required. Please install it via 'npm i ${pkgName}@${moduleVersion}' and try again.`
    );
  }
  return true;
};

export const hasMatchingDevDependency = (pkgName: keyof (typeof modulePkgJSON)["devDependencies"]): boolean => {
  const moduleVersion = modulePkgJSON["devDependencies"][pkgName];

  if (!hasDevDependency(pkgName, moduleVersion)) {
    throw new Error(
      `${pkgName}@${moduleVersion} is required. Please install it via 'npm i -D ${pkgName}@${moduleVersion}' and try again.`
    );
  }
  return true;
};
