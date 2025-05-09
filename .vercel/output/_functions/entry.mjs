import { r as renderers } from "./chunks/internal_CWyUhqTg.mjs";
import { c as createExports } from "./chunks/entrypoint_Ct9FBjGs.mjs";
import { manifest } from "./manifest_DMP-MVvy.mjs";
const serverIslandMap = /* @__PURE__ */ new Map();
;
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/.pnpm/astro@5.7.12_@types+node@20_be68435a902bbbcf054efb1919c39357/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/index.astro", _page1]
]);
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: () => import("./_noop-actions.mjs"),
  middleware: () => import("./_astro-internal_middleware.mjs")
});
const _args = {
  "middlewareSecret": "626939b1-95bd-4ff6-8256-83500c8f9349",
  "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
