import { d as decodeKey } from "./chunks/astro/server_zk9zilKh.mjs";
import "./chunks/astro-designed-error-pages_B405Ps-p.mjs";
import { N as NOOP_MIDDLEWARE_FN } from "./chunks/noop-middleware_C9cfLJnN.mjs";
function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}
function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}
const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/amoil/Desktop/PlaylistHub/","cacheDir":"file:///C:/Users/amoil/Desktop/PlaylistHub/node_modules/.astro/","outDir":"file:///C:/Users/amoil/Desktop/PlaylistHub/dist/","srcDir":"file:///C:/Users/amoil/Desktop/PlaylistHub/src/","publicDir":"file:///C:/Users/amoil/Desktop/PlaylistHub/public/","buildClientDir":"file:///C:/Users/amoil/Desktop/PlaylistHub/dist/client/","buildServerDir":"file:///C:/Users/amoil/Desktop/PlaylistHub/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CN-Nv5RP.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.7.12_@types+node@20_be68435a902bbbcf054efb1919c39357/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CN-Nv5RP.js"}],"styles":[{"type":"external","src":"/_astro/index.DeRlCFmU.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/amoil/Desktop/PlaylistHub/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.7.12_@types+node@20_be68435a902bbbcf054efb1919c39357/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/astro@5.7.12_@types+node@20_be68435a902bbbcf054efb1919c39357/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DXfDQzZj.mjs","\u0000@astrojs-manifest":"manifest_DMP-MVvy.mjs","astro:scripts/before-hydration.js":"_astro/astro_scripts/before-hydration.js.BZeLZYGs.js","astro:scripts/page.js":"_astro/page.CN-Nv5RP.js","\u0000astro:transitions/client":"_astro/client.Djg46rLP.js"},"inlinedScripts":[],"assets":["/_astro/index.DeRlCFmU.css","/fix-css-link.js","/assets/album-cover.avif","/assets/cover-texture.avif","/assets/favicon.webp","/assets/next.svg","/assets/pinned.svg","/assets/prev.svg","/assets/transparent.png","/data/alternative.json","/data/alternativerock.json","/data/altpop.json","/data/ambient.json","/data/avantgarde.json","/data/background.json","/data/bluepop.json","/data/bluerock.json","/data/darkfolk.json","/data/darknight.json","/data/discopop.json","/data/electroacid.json","/data/electronic.json","/data/electropop.json","/data/englishpop.json","/data/eurodance.json","/data/filmsost.json","/data/funk.json","/data/garage.json","/data/guitar.json","/data/hauntology.json","/data/hyperpop.json","/data/indiepop.json","/data/indierock.json","/data/instrumental.json","/data/melodicrock.json","/data/ncs.json","/data/newage.json","/data/playlist.json","/data/popcore.json","/data/progressivepop.json","/data/retrowave.json","/data/rockandroll.json","/data/rockpop.json","/data/romantic.json","/data/skweee.json","/data/softrock.json","/data/soul.json","/data/soulpop.json","/data/spanishpop.json","/data/surfrock.json","/data/synthpop.json","/data/synthwave.json","/data/techno.json","/data/vaporwave.json","/fonts/open-sans.woff2","/_astro/client.Djg46rLP.js","/_astro/index.Bv2yMpJu.js","/_astro/page.CN-Nv5RP.js","/modules/atropos.js","/modules/emitter.js","/modules/formatTime.js","/modules/MusicList.js","/modules/MusicPlayer.js","/modules/setAnimation.js","/modules/shuffle.js","/_astro/astro_scripts/before-hydration.js.BZeLZYGs.js","/modules/ui/play.js","/_astro/page.CN-Nv5RP.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"rtBfRYk3onfx2FRLLs+ag0GJdya1X/2XGMuGQUYZf4Q="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;
export {
  manifest
};
