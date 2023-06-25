import { lazy } from "react";

export const lazyLoad = (namedExport) => {
  return lazy(() => import("../pages").then(module => ({
    default: module[namedExport]
  })));
};