import { B as ROUTE_TYPE_HEADER, g as REROUTE_DIRECTIVE_HEADER, D as DEFAULT_404_COMPONENT, A as AstroError, Y as ActionNotFoundError, Z as bold, _ as red, $ as yellow, a0 as dim, a1 as blue, J as clientAddressSymbol, a2 as LocalsNotAnObject, a3 as REROUTABLE_STATUS_CODES, T as responseSentSymbol, a4 as getAugmentedNamespace } from "./astro/server_zk9zilKh.mjs";
import { D as DEFAULT_404_ROUTE, f as default404Instance, h as ensure404Route } from "./astro-designed-error-pages_B405Ps-p.mjs";
import buffer from "node:buffer";
import crypto$1 from "node:crypto";
import { Http2ServerResponse } from "node:http2";
import { f as fileExtension, j as joinPaths, s as slash, p as prependForwardSlash, r as removeTrailingForwardSlash, a as appendForwardSlash, c as collapseDuplicateTrailingSlashes, h as hasFileExtension } from "./path_C7bX2tUR.mjs";
import { r as requestIs404Or500, i as isRequestServerIsland, n as notFound, a as redirectToFallback, b as redirectToDefaultLocale, c as requestHasLocale, d as normalizeTheLocale, e as defineMiddleware, S as SERVER_ISLAND_COMPONENT, f as SERVER_ISLAND_ROUTE, g as createEndpoint, R as RouteCache, s as sequence, h as findRouteToRewrite, m as matchRoute, j as RenderContext, P as PERSIST_SYMBOL, k as getSetCookiesFromResponse } from "./index_6I1ULqhW.mjs";
import { N as NOOP_MIDDLEWARE_FN } from "./noop-middleware_C9cfLJnN.mjs";
import require$$0 from "url";
import nodePath from "node:path";
function createI18nMiddleware(i18n, base, trailingSlash, format) {
  if (!i18n) return (_, next) => next();
  const payload = {
    ...i18n,
    trailingSlash,
    base,
    format
  };
  const _redirectToDefaultLocale = redirectToDefaultLocale(payload);
  const _noFoundForNonLocaleRoute = notFound(payload);
  const _requestHasLocale = requestHasLocale(payload.locales);
  const _redirectToFallback = redirectToFallback(payload);
  const prefixAlways = (context, response) => {
    const url = context.url;
    if (url.pathname === base + "/" || url.pathname === base) {
      return _redirectToDefaultLocale(context);
    } else if (!_requestHasLocale(context)) {
      return _noFoundForNonLocaleRoute(context, response);
    }
    return void 0;
  };
  const prefixOtherLocales = (context, response) => {
    let pathnameContainsDefaultLocale = false;
    const url = context.url;
    for (const segment of url.pathname.split("/")) {
      if (normalizeTheLocale(segment) === normalizeTheLocale(i18n.defaultLocale)) {
        pathnameContainsDefaultLocale = true;
        break;
      }
    }
    if (pathnameContainsDefaultLocale) {
      const newLocation = url.pathname.replace(`/${i18n.defaultLocale}`, "");
      response.headers.set("Location", newLocation);
      return _noFoundForNonLocaleRoute(context);
    }
    return void 0;
  };
  return async (context, next) => {
    const response = await next();
    const type = response.headers.get(ROUTE_TYPE_HEADER);
    const isReroute = response.headers.get(REROUTE_DIRECTIVE_HEADER);
    if (isReroute === "no" && typeof i18n.fallback === "undefined") {
      return response;
    }
    if (type !== "page" && type !== "fallback") {
      return response;
    }
    if (requestIs404Or500(context.request, base)) {
      return response;
    }
    if (isRequestServerIsland(context.request, base)) {
      return response;
    }
    const { currentLocale } = context;
    switch (i18n.strategy) {
      // NOTE: theoretically, we should never hit this code path
      case "manual": {
        return response;
      }
      case "domains-prefix-other-locales": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = prefixOtherLocales(context, response);
          if (result) {
            return result;
          }
        }
        break;
      }
      case "pathname-prefix-other-locales": {
        const result = prefixOtherLocales(context, response);
        if (result) {
          return result;
        }
        break;
      }
      case "domains-prefix-always-no-redirect": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = _noFoundForNonLocaleRoute(context, response);
          if (result) {
            return result;
          }
        }
        break;
      }
      case "pathname-prefix-always-no-redirect": {
        const result = _noFoundForNonLocaleRoute(context, response);
        if (result) {
          return result;
        }
        break;
      }
      case "pathname-prefix-always": {
        const result = prefixAlways(context, response);
        if (result) {
          return result;
        }
        break;
      }
      case "domains-prefix-always": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = prefixAlways(context, response);
          if (result) {
            return result;
          }
        }
        break;
      }
    }
    return _redirectToFallback(context, response);
  };
}
function localeHasntDomain(i18n, currentLocale) {
  for (const domainLocale of Object.values(i18n.domainLookupTable)) {
    if (domainLocale === currentLocale) {
      return false;
    }
  }
  return true;
}
const NOOP_ACTIONS_MOD = {
  server: {}
};
const FORM_CONTENT_TYPES = [
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
];
const SAFE_METHODS = ["GET", "HEAD", "OPTIONS"];
function createOriginCheckMiddleware() {
  return defineMiddleware((context, next) => {
    const { request, url, isPrerendered } = context;
    if (isPrerendered) {
      return next();
    }
    if (SAFE_METHODS.includes(request.method)) {
      return next();
    }
    const isSameOrigin = request.headers.get("origin") === url.origin;
    const hasContentType = request.headers.has("content-type");
    if (hasContentType) {
      const formLikeHeader = hasFormLikeHeader(request.headers.get("content-type"));
      if (formLikeHeader && !isSameOrigin) {
        return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
          status: 403
        });
      }
    } else {
      if (!isSameOrigin) {
        return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
          status: 403
        });
      }
    }
    return next();
  });
}
function hasFormLikeHeader(contentType) {
  if (contentType) {
    for (const FORM_CONTENT_TYPE of FORM_CONTENT_TYPES) {
      if (contentType.toLowerCase().includes(FORM_CONTENT_TYPE)) {
        return true;
      }
    }
  }
  return false;
}
function createDefaultRoutes(manifest) {
  const root = new URL(manifest.hrefRoot);
  return [
    {
      instance: default404Instance,
      matchesComponent: (filePath) => filePath.href === new URL(DEFAULT_404_COMPONENT, root).href,
      route: DEFAULT_404_ROUTE.route,
      component: DEFAULT_404_COMPONENT
    },
    {
      instance: createEndpoint(manifest),
      matchesComponent: (filePath) => filePath.href === new URL(SERVER_ISLAND_COMPONENT, root).href,
      route: SERVER_ISLAND_ROUTE,
      component: SERVER_ISLAND_COMPONENT
    }
  ];
}
class Pipeline {
  constructor(logger, manifest, runtimeMode, renderers, resolve, serverLike, streaming, adapterName = manifest.adapterName, clientDirectives = manifest.clientDirectives, inlinedScripts = manifest.inlinedScripts, compressHTML = manifest.compressHTML, i18n = manifest.i18n, middleware = manifest.middleware, routeCache = new RouteCache(logger, runtimeMode), site = manifest.site ? new URL(manifest.site) : void 0, defaultRoutes = createDefaultRoutes(manifest), actions = manifest.actions) {
    this.logger = logger;
    this.manifest = manifest;
    this.runtimeMode = runtimeMode;
    this.renderers = renderers;
    this.resolve = resolve;
    this.serverLike = serverLike;
    this.streaming = streaming;
    this.adapterName = adapterName;
    this.clientDirectives = clientDirectives;
    this.inlinedScripts = inlinedScripts;
    this.compressHTML = compressHTML;
    this.i18n = i18n;
    this.middleware = middleware;
    this.routeCache = routeCache;
    this.site = site;
    this.defaultRoutes = defaultRoutes;
    this.actions = actions;
    this.internalMiddleware = [];
    if (i18n?.strategy !== "manual") {
      this.internalMiddleware.push(
        createI18nMiddleware(i18n, manifest.base, manifest.trailingSlash, manifest.buildFormat)
      );
    }
  }
  internalMiddleware;
  resolvedMiddleware = void 0;
  resolvedActions = void 0;
  /**
   * Resolves the middleware from the manifest, and returns the `onRequest` function. If `onRequest` isn't there,
   * it returns a no-op function
   */
  async getMiddleware() {
    if (this.resolvedMiddleware) {
      return this.resolvedMiddleware;
    } else if (this.middleware) {
      const middlewareInstance = await this.middleware();
      const onRequest = middlewareInstance.onRequest ?? NOOP_MIDDLEWARE_FN;
      if (this.manifest.checkOrigin) {
        this.resolvedMiddleware = sequence(createOriginCheckMiddleware(), onRequest);
      } else {
        this.resolvedMiddleware = onRequest;
      }
      return this.resolvedMiddleware;
    } else {
      this.resolvedMiddleware = NOOP_MIDDLEWARE_FN;
      return this.resolvedMiddleware;
    }
  }
  setActions(actions) {
    this.resolvedActions = actions;
  }
  async getActions() {
    if (this.resolvedActions) {
      return this.resolvedActions;
    } else if (this.actions) {
      return await this.actions();
    }
    return NOOP_ACTIONS_MOD;
  }
  async getAction(path) {
    const pathKeys = path.split(".").map((key) => decodeURIComponent(key));
    let { server } = await this.getActions();
    if (!server || !(typeof server === "object")) {
      throw new TypeError(
        `Expected \`server\` export in actions file to be an object. Received ${typeof server}.`
      );
    }
    for (const key of pathKeys) {
      if (!(key in server)) {
        throw new AstroError({
          ...ActionNotFoundError,
          message: ActionNotFoundError.message(pathKeys.join("."))
        });
      }
      server = server[key];
    }
    if (typeof server !== "function") {
      throw new TypeError(
        `Expected handler for action ${pathKeys.join(".")} to be a function. Received ${typeof server}.`
      );
    }
    return server;
  }
}
const RedirectComponentInstance = {
  default() {
    return new Response(null, {
      status: 301
    });
  }
};
const RedirectSinglePageBuiltModule = {
  page: () => Promise.resolve(RedirectComponentInstance),
  onRequest: (_, next) => next(),
  renderers: []
};
const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}
const consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    if (event.label === "SKIP_FORMAT") {
      dest(event.message);
    } else {
      dest(getEventPrefix(event) + " " + event.message);
    }
    return true;
  }
};
function getAssetsPrefix(fileExtension2, assetsPrefix) {
  if (!assetsPrefix) return "";
  if (typeof assetsPrefix === "string") return assetsPrefix;
  const dotLessFileExtension = fileExtension2.slice(1);
  if (assetsPrefix[dotLessFileExtension]) {
    return assetsPrefix[dotLessFileExtension];
  }
  return assetsPrefix.fallback;
}
function createAssetLink(href, base, assetsPrefix) {
  if (assetsPrefix) {
    const pf = getAssetsPrefix(fileExtension(href), assetsPrefix);
    return joinPaths(pf, slash(href));
  } else if (base) {
    return prependForwardSlash(joinPaths(base, slash(href)));
  } else {
    return href;
  }
}
function createStylesheetElement(stylesheet, base, assetsPrefix) {
  if (stylesheet.type === "inline") {
    return {
      props: {},
      children: stylesheet.content
    };
  } else {
    return {
      props: {
        rel: "stylesheet",
        href: createAssetLink(stylesheet.src, base, assetsPrefix)
      },
      children: ""
    };
  }
}
function createStylesheetElementSet(stylesheets, base, assetsPrefix) {
  return new Set(stylesheets.map((s) => createStylesheetElement(s, base, assetsPrefix)));
}
function createModuleScriptElement(script, base, assetsPrefix) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, base, assetsPrefix);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, base, assetsPrefix) {
  return {
    props: {
      type: "module",
      src: createAssetLink(src, base, assetsPrefix)
    },
    children: ""
  };
}
function redirectTemplate({
  status,
  absoluteLocation,
  relativeLocation,
  from
}) {
  const delay = status === 302 ? 2 : 0;
  return `<!doctype html>
<title>Redirecting to: ${relativeLocation}</title>
<meta http-equiv="refresh" content="${delay};url=${relativeLocation}">
<meta name="robots" content="noindex">
<link rel="canonical" href="${absoluteLocation}">
<body>
	<a href="${relativeLocation}">Redirecting ${from ? `from <code>${from}</code> ` : ""}to <code>${relativeLocation}</code></a>
</body>`;
}
class AppPipeline extends Pipeline {
  static create({
    logger,
    manifest,
    runtimeMode,
    renderers,
    resolve,
    serverLike,
    streaming,
    defaultRoutes
  }) {
    const pipeline = new AppPipeline(
      logger,
      manifest,
      runtimeMode,
      renderers,
      resolve,
      serverLike,
      streaming,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      defaultRoutes
    );
    return pipeline;
  }
  headElements(routeData) {
    const routeInfo = this.manifest.routes.find((route) => route.routeData === routeData);
    const links = /* @__PURE__ */ new Set();
    const scripts = /* @__PURE__ */ new Set();
    const styles = createStylesheetElementSet(routeInfo?.styles ?? []);
    for (const script of routeInfo?.scripts ?? []) {
      if ("stage" in script) {
        if (script.stage === "head-inline") {
          scripts.add({
            props: {},
            children: script.children
          });
        }
      } else {
        scripts.add(createModuleScriptElement(script));
      }
    }
    return { links, styles, scripts };
  }
  componentMetadata() {
  }
  async getComponentByRoute(routeData) {
    const module = await this.getModuleForRoute(routeData);
    return module.page();
  }
  async tryRewrite(payload, request) {
    const { newUrl, pathname, routeData } = findRouteToRewrite({
      payload,
      request,
      routes: this.manifest?.routes.map((r) => r.routeData),
      trailingSlash: this.manifest.trailingSlash,
      buildFormat: this.manifest.buildFormat,
      base: this.manifest.base
    });
    const componentInstance = await this.getComponentByRoute(routeData);
    return { newUrl, pathname, componentInstance, routeData };
  }
  async getModuleForRoute(route) {
    for (const defaultRoute of this.defaultRoutes) {
      if (route.component === defaultRoute.component) {
        return {
          page: () => Promise.resolve(defaultRoute.instance),
          renderers: []
        };
      }
    }
    if (route.type === "redirect") {
      return RedirectSinglePageBuiltModule;
    } else {
      if (this.manifest.pageMap) {
        const importComponentInstance = this.manifest.pageMap.get(route.component);
        if (!importComponentInstance) {
          throw new Error(
            `Unexpectedly unable to find a component instance for route ${route.route}`
          );
        }
        return await importComponentInstance();
      } else if (this.manifest.pageModule) {
        return this.manifest.pageModule;
      }
      throw new Error(
        "Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue."
      );
    }
  }
}
class App {
  #manifest;
  #manifestData;
  #logger = new Logger({
    dest: consoleLogDestination,
    level: "info"
  });
  #baseWithoutTrailingSlash;
  #pipeline;
  #adapterLogger;
  constructor(manifest, streaming = true) {
    this.#manifest = manifest;
    this.#manifestData = {
      routes: manifest.routes.map((route) => route.routeData)
    };
    ensure404Route(this.#manifestData);
    this.#baseWithoutTrailingSlash = removeTrailingForwardSlash(this.#manifest.base);
    this.#pipeline = this.#createPipeline(streaming);
    this.#adapterLogger = new AstroIntegrationLogger(
      this.#logger.options,
      this.#manifest.adapterName
    );
  }
  getAdapterLogger() {
    return this.#adapterLogger;
  }
  /**
   * Creates a pipeline by reading the stored manifest
   *
   * @param streaming
   * @private
   */
  #createPipeline(streaming = false) {
    return AppPipeline.create({
      logger: this.#logger,
      manifest: this.#manifest,
      runtimeMode: "production",
      renderers: this.#manifest.renderers,
      defaultRoutes: createDefaultRoutes(this.#manifest),
      resolve: async (specifier) => {
        if (!(specifier in this.#manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = this.#manifest.entryModules[specifier];
        if (bundlePath.startsWith("data:") || bundlePath.length === 0) {
          return bundlePath;
        } else {
          return createAssetLink(bundlePath, this.#manifest.base, this.#manifest.assetsPrefix);
        }
      },
      serverLike: true,
      streaming
    });
  }
  set setManifestData(newManifestData) {
    this.#manifestData = newManifestData;
  }
  removeBase(pathname) {
    if (pathname.startsWith(this.#manifest.base)) {
      return pathname.slice(this.#baseWithoutTrailingSlash.length + 1);
    }
    return pathname;
  }
  /**
   * It removes the base from the request URL, prepends it with a forward slash and attempts to decoded it.
   *
   * If the decoding fails, it logs the error and return the pathname as is.
   * @param request
   * @private
   */
  #getPathnameFromRequest(request) {
    const url = new URL(request.url);
    const pathname = prependForwardSlash(this.removeBase(url.pathname));
    try {
      return decodeURI(pathname);
    } catch (e) {
      this.getAdapterLogger().error(e.toString());
      return pathname;
    }
  }
  match(request) {
    const url = new URL(request.url);
    if (this.#manifest.assets.has(url.pathname)) return void 0;
    let pathname = this.#computePathnameFromDomain(request);
    if (!pathname) {
      pathname = prependForwardSlash(this.removeBase(url.pathname));
    }
    let routeData = matchRoute(decodeURI(pathname), this.#manifestData);
    if (!routeData || routeData.prerender) return void 0;
    return routeData;
  }
  #computePathnameFromDomain(request) {
    let pathname = void 0;
    const url = new URL(request.url);
    if (this.#manifest.i18n && (this.#manifest.i18n.strategy === "domains-prefix-always" || this.#manifest.i18n.strategy === "domains-prefix-other-locales" || this.#manifest.i18n.strategy === "domains-prefix-always-no-redirect")) {
      let host = request.headers.get("X-Forwarded-Host");
      let protocol = request.headers.get("X-Forwarded-Proto");
      if (protocol) {
        protocol = protocol + ":";
      } else {
        protocol = url.protocol;
      }
      if (!host) {
        host = request.headers.get("Host");
      }
      if (host && protocol) {
        host = host.split(":")[0];
        try {
          let locale;
          const hostAsUrl = new URL(`${protocol}//${host}`);
          for (const [domainKey, localeValue] of Object.entries(
            this.#manifest.i18n.domainLookupTable
          )) {
            const domainKeyAsUrl = new URL(domainKey);
            if (hostAsUrl.host === domainKeyAsUrl.host && hostAsUrl.protocol === domainKeyAsUrl.protocol) {
              locale = localeValue;
              break;
            }
          }
          if (locale) {
            pathname = prependForwardSlash(
              joinPaths(normalizeTheLocale(locale), this.removeBase(url.pathname))
            );
            if (url.pathname.endsWith("/")) {
              pathname = appendForwardSlash(pathname);
            }
          }
        } catch (e) {
          this.#logger.error(
            "router",
            `Astro tried to parse ${protocol}//${host} as an URL, but it threw a parsing error. Check the X-Forwarded-Host and X-Forwarded-Proto headers.`
          );
          this.#logger.error("router", `Error: ${e}`);
        }
      }
    }
    return pathname;
  }
  #redirectTrailingSlash(pathname) {
    const { trailingSlash } = this.#manifest;
    if (pathname === "/" || pathname.startsWith("/_")) {
      return pathname;
    }
    const path = collapseDuplicateTrailingSlashes(pathname, trailingSlash !== "never");
    if (path !== pathname) {
      return path;
    }
    if (trailingSlash === "ignore") {
      return pathname;
    }
    if (trailingSlash === "always" && !hasFileExtension(pathname)) {
      return appendForwardSlash(pathname);
    }
    if (trailingSlash === "never") {
      return removeTrailingForwardSlash(pathname);
    }
    return pathname;
  }
  async render(request, renderOptions) {
    let routeData;
    let locals;
    let clientAddress;
    let addCookieHeader;
    const url = new URL(request.url);
    const redirect = this.#redirectTrailingSlash(url.pathname);
    const prerenderedErrorPageFetch = renderOptions?.prerenderedErrorPageFetch ?? fetch;
    if (redirect !== url.pathname) {
      const status = request.method === "GET" ? 301 : 308;
      return new Response(
        redirectTemplate({
          status,
          relativeLocation: url.pathname,
          absoluteLocation: redirect,
          from: request.url
        }),
        {
          status,
          headers: {
            location: redirect + url.search
          }
        }
      );
    }
    addCookieHeader = renderOptions?.addCookieHeader;
    clientAddress = renderOptions?.clientAddress ?? Reflect.get(request, clientAddressSymbol);
    routeData = renderOptions?.routeData;
    locals = renderOptions?.locals;
    if (routeData) {
      this.#logger.debug(
        "router",
        "The adapter " + this.#manifest.adapterName + " provided a custom RouteData for ",
        request.url
      );
      this.#logger.debug("router", "RouteData:\n" + routeData);
    }
    if (locals) {
      if (typeof locals !== "object") {
        const error2 = new AstroError(LocalsNotAnObject);
        this.#logger.error(null, error2.stack);
        return this.#renderError(request, {
          status: 500,
          error: error2,
          clientAddress,
          prerenderedErrorPageFetch
        });
      }
    }
    if (!routeData) {
      routeData = this.match(request);
      this.#logger.debug("router", "Astro matched the following route for " + request.url);
      this.#logger.debug("router", "RouteData:\n" + routeData);
    }
    if (!routeData) {
      routeData = this.#manifestData.routes.find(
        (route) => route.component === "404.astro" || route.component === DEFAULT_404_COMPONENT
      );
    }
    if (!routeData) {
      this.#logger.debug("router", "Astro hasn't found routes that match " + request.url);
      this.#logger.debug("router", "Here's the available routes:\n", this.#manifestData);
      return this.#renderError(request, {
        locals,
        status: 404,
        clientAddress,
        prerenderedErrorPageFetch
      });
    }
    const pathname = this.#getPathnameFromRequest(request);
    const defaultStatus = this.#getDefaultStatusCode(routeData, pathname);
    let response;
    let session;
    try {
      const mod = await this.#pipeline.getModuleForRoute(routeData);
      const renderContext = await RenderContext.create({
        pipeline: this.#pipeline,
        locals,
        pathname,
        request,
        routeData,
        status: defaultStatus,
        clientAddress
      });
      session = renderContext.session;
      response = await renderContext.render(await mod.page());
    } catch (err) {
      this.#logger.error(null, err.stack || err.message || String(err));
      return this.#renderError(request, {
        locals,
        status: 500,
        error: err,
        clientAddress,
        prerenderedErrorPageFetch
      });
    } finally {
      await session?.[PERSIST_SYMBOL]();
    }
    if (REROUTABLE_STATUS_CODES.includes(response.status) && response.headers.get(REROUTE_DIRECTIVE_HEADER) !== "no") {
      return this.#renderError(request, {
        locals,
        response,
        status: response.status,
        // We don't have an error to report here. Passing null means we pass nothing intentionally
        // while undefined means there's no error
        error: response.status === 500 ? null : void 0,
        clientAddress,
        prerenderedErrorPageFetch
      });
    }
    if (response.headers.has(REROUTE_DIRECTIVE_HEADER)) {
      response.headers.delete(REROUTE_DIRECTIVE_HEADER);
    }
    if (addCookieHeader) {
      for (const setCookieHeaderValue of App.getSetCookieFromResponse(response)) {
        response.headers.append("set-cookie", setCookieHeaderValue);
      }
    }
    Reflect.set(response, responseSentSymbol, true);
    return response;
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
  /**
   * Reads all the cookies written by `Astro.cookie.set()` onto the passed response.
   * For example,
   * ```ts
   * for (const cookie_ of App.getSetCookieFromResponse(response)) {
   *     const cookie: string = cookie_
   * }
   * ```
   * @param response The response to read cookies from.
   * @returns An iterator that yields key-value pairs as equal-sign-separated strings.
   */
  static getSetCookieFromResponse = getSetCookiesFromResponse;
  /**
   * If it is a known error code, try sending the according page (e.g. 404.astro / 500.astro).
   * This also handles pre-rendered /404 or /500 routes
   */
  async #renderError(request, {
    locals,
    status,
    response: originalResponse,
    skipMiddleware = false,
    error: error2,
    clientAddress,
    prerenderedErrorPageFetch
  }) {
    const errorRoutePath = `/${status}${this.#manifest.trailingSlash === "always" ? "/" : ""}`;
    const errorRouteData = matchRoute(errorRoutePath, this.#manifestData);
    const url = new URL(request.url);
    if (errorRouteData) {
      if (errorRouteData.prerender) {
        const maybeDotHtml = errorRouteData.route.endsWith(`/${status}`) ? ".html" : "";
        const statusURL = new URL(
          `${this.#baseWithoutTrailingSlash}/${status}${maybeDotHtml}`,
          url
        );
        if (statusURL.toString() !== request.url) {
          const response2 = await prerenderedErrorPageFetch(statusURL.toString());
          const override = { status };
          return this.#mergeResponses(response2, originalResponse, override);
        }
      }
      const mod = await this.#pipeline.getModuleForRoute(errorRouteData);
      let session;
      try {
        const renderContext = await RenderContext.create({
          locals,
          pipeline: this.#pipeline,
          middleware: skipMiddleware ? NOOP_MIDDLEWARE_FN : void 0,
          pathname: this.#getPathnameFromRequest(request),
          request,
          routeData: errorRouteData,
          status,
          props: { error: error2 },
          clientAddress
        });
        session = renderContext.session;
        const response2 = await renderContext.render(await mod.page());
        return this.#mergeResponses(response2, originalResponse);
      } catch {
        if (skipMiddleware === false) {
          return this.#renderError(request, {
            locals,
            status,
            response: originalResponse,
            skipMiddleware: true,
            clientAddress,
            prerenderedErrorPageFetch
          });
        }
      } finally {
        await session?.[PERSIST_SYMBOL]();
      }
    }
    const response = this.#mergeResponses(new Response(null, { status }), originalResponse);
    Reflect.set(response, responseSentSymbol, true);
    return response;
  }
  #mergeResponses(newResponse, originalResponse, override) {
    if (!originalResponse) {
      if (override !== void 0) {
        return new Response(newResponse.body, {
          status: override.status,
          statusText: newResponse.statusText,
          headers: newResponse.headers
        });
      }
      return newResponse;
    }
    const status = override?.status ? override.status : originalResponse.status === 200 ? newResponse.status : originalResponse.status;
    try {
      originalResponse.headers.delete("Content-type");
    } catch {
    }
    const mergedHeaders = new Map([
      ...Array.from(newResponse.headers),
      ...Array.from(originalResponse.headers)
    ]);
    const newHeaders = new Headers();
    for (const [name, value] of mergedHeaders) {
      newHeaders.set(name, value);
    }
    return new Response(newResponse.body, {
      status,
      statusText: status === 200 ? newResponse.statusText : originalResponse.statusText,
      // If you're looking at here for possible bugs, it means that it's not a bug.
      // With the middleware, users can meddle with headers, and we should pass to the 404/500.
      // If users see something weird, it's because they are setting some headers they should not.
      //
      // Although, we don't want it to replace the content-type, because the error page must return `text/html`
      headers: newHeaders
    });
  }
  #getDefaultStatusCode(routeData, pathname) {
    if (!routeData.pattern.test(pathname)) {
      for (const fallbackRoute of routeData.fallbackRoutes) {
        if (fallbackRoute.pattern.test(pathname)) {
          return 302;
        }
      }
    }
    const route = removeTrailingForwardSlash(routeData.route);
    if (route.endsWith("/404")) return 404;
    if (route.endsWith("/500")) return 500;
    return 200;
  }
}
const createOutgoingHttpHeaders = (headers) => {
  if (!headers) {
    return void 0;
  }
  const nodeHeaders = Object.fromEntries(headers.entries());
  if (Object.keys(nodeHeaders).length === 0) {
    return void 0;
  }
  if (headers.has("set-cookie")) {
    const cookieHeaders = headers.getSetCookie();
    if (cookieHeaders.length > 1) {
      nodeHeaders["set-cookie"] = cookieHeaders;
    }
  }
  return nodeHeaders;
};
function apply() {
  if (!globalThis.crypto) {
    Object.defineProperty(globalThis, "crypto", {
      value: crypto$1.webcrypto
    });
  }
  if (!globalThis.File) {
    Object.defineProperty(globalThis, "File", {
      value: buffer.File
    });
  }
}
class NodeApp extends App {
  match(req) {
    if (!(req instanceof Request)) {
      req = NodeApp.createRequest(req, {
        skipBody: true
      });
    }
    return super.match(req);
  }
  render(req, routeDataOrOptions, maybeLocals) {
    if (!(req instanceof Request)) {
      req = NodeApp.createRequest(req);
    }
    return super.render(req, routeDataOrOptions, maybeLocals);
  }
  /**
   * Converts a NodeJS IncomingMessage into a web standard Request.
   * ```js
   * import { NodeApp } from 'astro/app/node';
   * import { createServer } from 'node:http';
   *
   * const server = createServer(async (req, res) => {
   *     const request = NodeApp.createRequest(req);
   *     const response = await app.render(request);
   *     await NodeApp.writeResponse(response, res);
   * })
   * ```
   */
  static createRequest(req, { skipBody = false } = {}) {
    const isEncrypted = "encrypted" in req.socket && req.socket.encrypted;
    const getFirstForwardedValue = (multiValueHeader) => {
      return multiValueHeader?.toString()?.split(",").map((e) => e.trim())?.[0];
    };
    const forwardedProtocol = getFirstForwardedValue(req.headers["x-forwarded-proto"]);
    const providedProtocol = isEncrypted ? "https" : "http";
    const protocol = forwardedProtocol ?? providedProtocol;
    const forwardedHostname = getFirstForwardedValue(req.headers["x-forwarded-host"]);
    const providedHostname = req.headers.host ?? req.headers[":authority"];
    const hostname = forwardedHostname ?? providedHostname;
    const port = getFirstForwardedValue(req.headers["x-forwarded-port"]);
    let url;
    try {
      const hostnamePort = getHostnamePort(hostname, port);
      url = new URL(`${protocol}://${hostnamePort}${req.url}`);
    } catch {
      const hostnamePort = getHostnamePort(providedHostname, port);
      url = new URL(`${providedProtocol}://${hostnamePort}`);
    }
    const options = {
      method: req.method || "GET",
      headers: makeRequestHeaders(req)
    };
    const bodyAllowed = options.method !== "HEAD" && options.method !== "GET" && skipBody === false;
    if (bodyAllowed) {
      Object.assign(options, makeRequestBody(req));
    }
    const request = new Request(url, options);
    const forwardedClientIp = getFirstForwardedValue(req.headers["x-forwarded-for"]);
    const clientIp = forwardedClientIp || req.socket?.remoteAddress;
    if (clientIp) {
      Reflect.set(request, clientAddressSymbol, clientIp);
    }
    return request;
  }
  /**
   * Streams a web-standard Response into a NodeJS Server Response.
   * ```js
   * import { NodeApp } from 'astro/app/node';
   * import { createServer } from 'node:http';
   *
   * const server = createServer(async (req, res) => {
   *     const request = NodeApp.createRequest(req);
   *     const response = await app.render(request);
   *     await NodeApp.writeResponse(response, res);
   * })
   * ```
   * @param source WhatWG Response
   * @param destination NodeJS ServerResponse
   */
  static async writeResponse(source, destination) {
    const { status, headers, body, statusText } = source;
    if (!(destination instanceof Http2ServerResponse)) {
      destination.statusMessage = statusText;
    }
    destination.writeHead(status, createOutgoingHttpHeaders(headers));
    if (!body) return destination.end();
    try {
      const reader = body.getReader();
      destination.on("close", () => {
        reader.cancel().catch((err) => {
          console.error(
            `There was an uncaught error in the middle of the stream while rendering ${destination.req.url}.`,
            err
          );
        });
      });
      let result = await reader.read();
      while (!result.done) {
        destination.write(result.value);
        result = await reader.read();
      }
      destination.end();
    } catch (err) {
      destination.write("Internal server error", () => {
        err instanceof Error ? destination.destroy(err) : destination.destroy();
      });
    }
  }
}
function getHostnamePort(hostname, port) {
  const portInHostname = typeof hostname === "string" && /:\d+$/.test(hostname);
  const hostnamePort = portInHostname ? hostname : `${hostname}${port ? `:${port}` : ""}`;
  return hostnamePort;
}
function makeRequestHeaders(req) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(req.headers)) {
    if (value === void 0) {
      continue;
    }
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else {
      headers.append(name, value);
    }
  }
  return headers;
}
function makeRequestBody(req) {
  if (req.body !== void 0) {
    if (typeof req.body === "string" && req.body.length > 0) {
      return { body: Buffer.from(req.body) };
    }
    if (typeof req.body === "object" && req.body !== null && Object.keys(req.body).length > 0) {
      return { body: Buffer.from(JSON.stringify(req.body)) };
    }
    if (typeof req.body === "object" && req.body !== null && typeof req.body[Symbol.asyncIterator] !== "undefined") {
      return asyncIterableToBodyProps(req.body);
    }
  }
  return asyncIterableToBodyProps(req);
}
function asyncIterableToBodyProps(iterable) {
  return {
    // Node uses undici for the Request implementation. Undici accepts
    // a non-standard async iterable for the body.
    // @ts-expect-error
    body: iterable,
    // The duplex property is required when using a ReadableStream or async
    // iterable for the body. The type definitions do not include the duplex
    // property because they are not up-to-date.
    duplex: "half"
  };
}
apply();
var dist = { exports: {} };
function lexer$1(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at " + i);
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at ' + j);
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at " + j);
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at " + i);
      if (!pattern)
        throw new TypeError("Missing pattern at " + i);
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse$1(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer$1(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
  var defaultPattern = "[^" + escapeString$1(options.delimiter || "/#?") + "]+?";
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile$1(str, options) {
  return tokensToFunction$1(parse$1(str, options), options);
}
function tokensToFunction$1(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags$1(options);
  var _a = options.encode, encode = _a === void 0 ? function(x) {
    return x;
  } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:" + token.pattern + ")$", reFlags);
    }
  });
  return function(data) {
    var path = "";
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got an array');
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "' + token.name + '" to not be empty');
        }
        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);
          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
          }
          path += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);
        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
        }
        path += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "' + token.name + '" to be ' + typeOfMessage);
    }
    return path;
  };
}
function match$1(str, options) {
  var keys = [];
  var re = pathToRegexp$1(str, keys, options);
  return regexpToFunction$1(re, keys, options);
}
function regexpToFunction$1(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    };
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
function escapeString$1(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags$1(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp$1(path, keys) {
  if (!keys)
    return path;
  var groups = path.source.match(/\((?!\?)/g);
  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: "",
        suffix: "",
        modifier: "",
        pattern: ""
      });
    }
  }
  return path;
}
function arrayToRegexp$1(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp$1(path, keys, options).source;
  });
  return new RegExp("(?:" + parts.join("|") + ")", flags$1(options));
}
function stringToRegexp$1(path, keys, options) {
  return tokensToRegexp$1(parse$1(path, options), keys, options);
}
function tokensToRegexp$1(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start2 = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d;
  var endsWith = "[" + escapeString$1(options.endsWith || "") + "]|$";
  var delimiter = "[" + escapeString$1(options.delimiter || "/#?") + "]";
  var route = start2 ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString$1(encode(token));
    } else {
      var prefix = escapeString$1(encode(token.prefix));
      var suffix = escapeString$1(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
          } else {
            route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
          }
        } else {
          route += "(" + token.pattern + ")" + token.modifier;
        }
      } else {
        route += "(?:" + prefix + suffix + ")" + token.modifier;
      }
    }
  }
  if (end) {
    if (!strict)
      route += delimiter + "?";
    route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : (
      // tslint:disable-next-line
      endToken === void 0
    );
    if (!strict) {
      route += "(?:" + delimiter + "(?=" + endsWith + "))?";
    }
    if (!isEndDelimited) {
      route += "(?=" + delimiter + "|" + endsWith + ")";
    }
  }
  return new RegExp(route, flags$1(options));
}
function pathToRegexp$1(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp$1(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp$1(path, keys, options);
  return stringToRegexp$1(path, keys, options);
}
const dist_es2015$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compile: compile$1,
  match: match$1,
  parse: parse$1,
  pathToRegexp: pathToRegexp$1,
  regexpToFunction: regexpToFunction$1,
  tokensToFunction: tokensToFunction$1,
  tokensToRegexp: tokensToRegexp$1
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(dist_es2015$1);
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  var isSafe = function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  };
  var safePattern = function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a = options.encode, encode = _a === void 0 ? function(x) {
    return x;
  } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path = "";
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);
          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);
        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path;
  };
}
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    };
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start2 = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start2 ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
const dist_es2015 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compile,
  match,
  parse,
  pathToRegexp,
  regexpToFunction,
  tokensToFunction,
  tokensToRegexp
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(dist_es2015);
var superstatic;
var hasRequiredSuperstatic;
function requireSuperstatic() {
  if (hasRequiredSuperstatic) return superstatic;
  hasRequiredSuperstatic = 1;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var superstatic_exports = {};
  __export(superstatic_exports, {
    collectHasSegments: () => collectHasSegments,
    convertCleanUrls: () => convertCleanUrls,
    convertHeaders: () => convertHeaders,
    convertRedirects: () => convertRedirects,
    convertRewrites: () => convertRewrites,
    convertTrailingSlash: () => convertTrailingSlash,
    getCleanUrls: () => getCleanUrls,
    pathToRegexp: () => pathToRegexp2,
    sourceToRegex: () => sourceToRegex
  });
  superstatic = __toCommonJS(superstatic_exports);
  var import_url2 = require$$0;
  var import_path_to_regexp = require$$1;
  var import_path_to_regexp_updated = require$$2;
  function cloneKeys(keys) {
    if (typeof keys === "undefined") {
      return void 0;
    }
    return keys.slice(0);
  }
  function compareKeys(left, right) {
    const leftSerialized = typeof left === "undefined" ? "undefined" : left.toString();
    const rightSerialized = typeof right === "undefined" ? "undefined" : right.toString();
    return leftSerialized === rightSerialized;
  }
  function pathToRegexp2(callerId, path, keys, options) {
    const newKeys = cloneKeys(keys);
    const currentRegExp = (0, import_path_to_regexp.pathToRegexp)(path, keys, options);
    try {
      const currentKeys = keys;
      const newRegExp = (0, import_path_to_regexp_updated.pathToRegexp)(path, newKeys, options);
      const isDiffRegExp = currentRegExp.toString() !== newRegExp.toString();
      if (process.env.FORCE_PATH_TO_REGEXP_LOG || isDiffRegExp) {
        const message = JSON.stringify({
          path,
          currentRegExp: currentRegExp.toString(),
          newRegExp: newRegExp.toString()
        });
        console.error(`[vc] PATH TO REGEXP PATH DIFF @ #${callerId}: ${message}`);
      }
      const isDiffKeys = !compareKeys(keys, newKeys);
      if (process.env.FORCE_PATH_TO_REGEXP_LOG || isDiffKeys) {
        const message = JSON.stringify({
          isDiffKeys,
          currentKeys,
          newKeys
        });
        console.error(`[vc] PATH TO REGEXP KEYS DIFF @ #${callerId}: ${message}`);
      }
    } catch (err) {
      const error2 = err;
      const message = JSON.stringify({
        path,
        error: error2.message
      });
      console.error(`[vc] PATH TO REGEXP ERROR @ #${callerId}: ${message}`);
    }
    return currentRegExp;
  }
  const UN_NAMED_SEGMENT = "__UN_NAMED_SEGMENT__";
  function getCleanUrls(filePaths) {
    const htmlFiles = filePaths.map(toRoute).filter((f) => f.endsWith(".html")).map((f) => ({
      html: f,
      clean: f.slice(0, -5)
    }));
    return htmlFiles;
  }
  function convertCleanUrls(cleanUrls, trailingSlash, status = 308) {
    const routes = [];
    if (cleanUrls) {
      const loc = trailingSlash ? "/$1/" : "/$1";
      routes.push({
        src: "^/(?:(.+)/)?index(?:\\.html)?/?$",
        headers: { Location: loc },
        status
      });
      routes.push({
        src: "^/(.*)\\.html/?$",
        headers: { Location: loc },
        status
      });
    }
    return routes;
  }
  function convertRedirects(redirects, defaultStatus = 308) {
    return redirects.map((r) => {
      const { src, segments } = sourceToRegex(r.source);
      const hasSegments = collectHasSegments(r.has);
      normalizeHasKeys(r.has);
      normalizeHasKeys(r.missing);
      try {
        const loc = replaceSegments(segments, hasSegments, r.destination, true);
        let status;
        if (typeof r.permanent === "boolean") {
          status = r.permanent ? 308 : 307;
        } else if (r.statusCode) {
          status = r.statusCode;
        } else {
          status = defaultStatus;
        }
        const route = {
          src,
          headers: { Location: loc },
          status
        };
        if (r.has) {
          route.has = r.has;
        }
        if (r.missing) {
          route.missing = r.missing;
        }
        return route;
      } catch (e) {
        throw new Error(`Failed to parse redirect: ${JSON.stringify(r)}`);
      }
    });
  }
  function convertRewrites(rewrites, internalParamNames) {
    return rewrites.map((r) => {
      const { src, segments } = sourceToRegex(r.source);
      const hasSegments = collectHasSegments(r.has);
      normalizeHasKeys(r.has);
      normalizeHasKeys(r.missing);
      try {
        const dest = replaceSegments(
          segments,
          hasSegments,
          r.destination,
          false,
          internalParamNames
        );
        const route = { src, dest, check: true };
        if (r.has) {
          route.has = r.has;
        }
        if (r.missing) {
          route.missing = r.missing;
        }
        if (r.statusCode) {
          route.status = r.statusCode;
        }
        return route;
      } catch (e) {
        throw new Error(`Failed to parse rewrite: ${JSON.stringify(r)}`);
      }
    });
  }
  function convertHeaders(headers) {
    return headers.map((h) => {
      const obj = {};
      const { src, segments } = sourceToRegex(h.source);
      const hasSegments = collectHasSegments(h.has);
      normalizeHasKeys(h.has);
      normalizeHasKeys(h.missing);
      const namedSegments = segments.filter((name) => name !== UN_NAMED_SEGMENT);
      const indexes = {};
      segments.forEach((name, index) => {
        indexes[name] = toSegmentDest(index);
      });
      hasSegments.forEach((name) => {
        indexes[name] = "$" + name;
      });
      h.headers.forEach(({ key, value }) => {
        if (namedSegments.length > 0 || hasSegments.length > 0) {
          if (key.includes(":")) {
            key = safelyCompile(key, indexes);
          }
          if (value.includes(":")) {
            value = safelyCompile(value, indexes);
          }
        }
        obj[key] = value;
      });
      const route = {
        src,
        headers: obj,
        continue: true
      };
      if (h.has) {
        route.has = h.has;
      }
      if (h.missing) {
        route.missing = h.missing;
      }
      return route;
    });
  }
  function convertTrailingSlash(enable, status = 308) {
    const routes = [];
    if (enable) {
      routes.push({
        src: "^/\\.well-known(?:/.*)?$"
      });
      routes.push({
        src: "^/((?:[^/]+/)*[^/\\.]+)$",
        headers: { Location: "/$1/" },
        status
      });
      routes.push({
        src: "^/((?:[^/]+/)*[^/]+\\.\\w+)/$",
        headers: { Location: "/$1" },
        status
      });
    } else {
      routes.push({
        src: "^/(.*)\\/$",
        headers: { Location: "/$1" },
        status
      });
    }
    return routes;
  }
  function sourceToRegex(source) {
    const keys = [];
    const r = pathToRegexp2("632", source, keys, {
      strict: true,
      sensitive: true,
      delimiter: "/"
    });
    const segments = keys.map((k) => k.name).map((name) => {
      if (typeof name !== "string") {
        return UN_NAMED_SEGMENT;
      }
      return name;
    });
    return { src: r.source, segments };
  }
  const namedGroupsRegex = /\(\?<([a-zA-Z][a-zA-Z0-9]*)>/g;
  const normalizeHasKeys = (hasItems = []) => {
    for (const hasItem of hasItems) {
      if ("key" in hasItem && hasItem.type === "header") {
        hasItem.key = hasItem.key.toLowerCase();
      }
    }
    return hasItems;
  };
  function collectHasSegments(has) {
    const hasSegments = /* @__PURE__ */ new Set();
    for (const hasItem of has || []) {
      if (!hasItem.value && "key" in hasItem) {
        hasSegments.add(hasItem.key);
      }
      if (hasItem.value) {
        for (const match2 of hasItem.value.matchAll(namedGroupsRegex)) {
          if (match2[1]) {
            hasSegments.add(match2[1]);
          }
        }
        if (hasItem.type === "host") {
          hasSegments.add("host");
        }
      }
    }
    return [...hasSegments];
  }
  const escapeSegment = (str, segmentName) => str.replace(new RegExp(`:${segmentName}`, "g"), `__ESC_COLON_${segmentName}`);
  const unescapeSegments = (str) => str.replace(/__ESC_COLON_/gi, ":");
  function replaceSegments(segments, hasItemSegments, destination, isRedirect, internalParamNames) {
    const namedSegments = segments.filter((name) => name !== UN_NAMED_SEGMENT);
    const canNeedReplacing = destination.includes(":") && namedSegments.length > 0 || hasItemSegments.length > 0 || !isRedirect;
    if (!canNeedReplacing) {
      return destination;
    }
    let escapedDestination = destination;
    const indexes = {};
    segments.forEach((name, index) => {
      indexes[name] = toSegmentDest(index);
      escapedDestination = escapeSegment(escapedDestination, name);
    });
    hasItemSegments.forEach((name) => {
      indexes[name] = "$" + name;
      escapedDestination = escapeSegment(escapedDestination, name);
    });
    const parsedDestination = (0, import_url2.parse)(escapedDestination, true);
    delete parsedDestination.href;
    delete parsedDestination.path;
    delete parsedDestination.search;
    delete parsedDestination.host;
    let { pathname, hash, query, hostname, ...rest } = parsedDestination;
    pathname = unescapeSegments(pathname || "");
    hash = unescapeSegments(hash || "");
    hostname = unescapeSegments(hostname || "");
    let destParams = /* @__PURE__ */ new Set();
    const pathnameKeys = [];
    const hashKeys = [];
    const hostnameKeys = [];
    try {
      pathToRegexp2("528", pathname, pathnameKeys);
      pathToRegexp2("834", hash || "", hashKeys);
      pathToRegexp2("712", hostname || "", hostnameKeys);
    } catch (_) {
    }
    destParams = new Set(
      [...pathnameKeys, ...hashKeys, ...hostnameKeys].map((key) => key.name).filter((val) => typeof val === "string")
    );
    pathname = safelyCompile(pathname, indexes, true);
    hash = hash ? safelyCompile(hash, indexes, true) : null;
    hostname = hostname ? safelyCompile(hostname, indexes, true) : null;
    for (const [key, strOrArray] of Object.entries(query)) {
      if (Array.isArray(strOrArray)) {
        query[key] = strOrArray.map(
          (str) => safelyCompile(unescapeSegments(str), indexes, true)
        );
      } else {
        query[key] = safelyCompile(
          unescapeSegments(strOrArray),
          indexes,
          true
        );
      }
    }
    const paramKeys = Object.keys(indexes);
    const needsQueryUpdating = (
      // we do not consider an internal param since it is added automatically
      !isRedirect && !paramKeys.some(
        (param) => !(internalParamNames && internalParamNames.includes(param)) && destParams.has(param)
      )
    );
    if (needsQueryUpdating) {
      for (const param of paramKeys) {
        if (!(param in query) && param !== UN_NAMED_SEGMENT) {
          query[param] = indexes[param];
        }
      }
    }
    destination = (0, import_url2.format)({
      ...rest,
      hostname,
      pathname,
      query,
      hash
    });
    return destination.replace(/%24/g, "$");
  }
  function safelyCompile(value, indexes, attemptDirectCompile) {
    if (!value) {
      return value;
    }
    if (attemptDirectCompile) {
      try {
        return (0, import_path_to_regexp.compile)(value, { validate: false })(indexes);
      } catch (e) {
      }
    }
    for (const key of Object.keys(indexes)) {
      if (value.includes(`:${key}`)) {
        value = value.replace(
          new RegExp(`:${key}\\*`, "g"),
          `:${key}--ESCAPED_PARAM_ASTERISK`
        ).replace(
          new RegExp(`:${key}\\?`, "g"),
          `:${key}--ESCAPED_PARAM_QUESTION`
        ).replace(new RegExp(`:${key}\\+`, "g"), `:${key}--ESCAPED_PARAM_PLUS`).replace(
          new RegExp(`:${key}(?!\\w)`, "g"),
          `--ESCAPED_PARAM_COLON${key}`
        );
      }
    }
    value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISK/g, "*");
    return (0, import_path_to_regexp.compile)(`/${value}`, { validate: false })(indexes).slice(1);
  }
  function toSegmentDest(index) {
    const i = index + 1;
    return "$" + i.toString();
  }
  function toRoute(filePath) {
    return filePath.startsWith("/") ? filePath : "/" + filePath;
  }
  return superstatic;
}
var append;
var hasRequiredAppend;
function requireAppend() {
  if (hasRequiredAppend) return append;
  hasRequiredAppend = 1;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var append_exports = {};
  __export(append_exports, {
    appendRoutesToPhase: () => appendRoutesToPhase
  });
  append = __toCommonJS(append_exports);
  var import_index = requireDist();
  function appendRoutesToPhase({
    routes: prevRoutes,
    newRoutes,
    phase
  }) {
    const routes = prevRoutes ? [...prevRoutes] : [];
    if (newRoutes === null || newRoutes.length === 0) {
      return routes;
    }
    let isInPhase = false;
    let insertIndex = -1;
    routes.forEach((r, i) => {
      if ((0, import_index.isHandler)(r)) {
        if (r.handle === phase) {
          isInPhase = true;
        } else if (isInPhase) {
          insertIndex = i;
          isInPhase = false;
        }
      }
    });
    if (isInPhase) {
      routes.push(...newRoutes);
    } else if (phase === null) {
      const lastPhase = routes.findIndex((r) => (0, import_index.isHandler)(r) && r.handle);
      if (lastPhase === -1) {
        routes.push(...newRoutes);
      } else {
        routes.splice(lastPhase, 0, ...newRoutes);
      }
    } else if (insertIndex > -1) {
      routes.splice(insertIndex, 0, ...newRoutes);
    } else {
      routes.push({ handle: phase });
      routes.push(...newRoutes);
    }
    return routes;
  }
  return append;
}
var merge;
var hasRequiredMerge;
function requireMerge() {
  if (hasRequiredMerge) return merge;
  hasRequiredMerge = 1;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var merge_exports = {};
  __export(merge_exports, {
    mergeRoutes: () => mergeRoutes
  });
  merge = __toCommonJS(merge_exports);
  var import_index = requireDist();
  function getBuilderRoutesMapping(builds) {
    const builderRoutes = {};
    for (const { entrypoint, routes, use } of builds) {
      if (routes) {
        if (!builderRoutes[entrypoint]) {
          builderRoutes[entrypoint] = {};
        }
        builderRoutes[entrypoint][use] = routes;
      }
    }
    return builderRoutes;
  }
  function getCheckAndContinue(routes) {
    const checks = [];
    const continues = [];
    const others = [];
    for (const route of routes) {
      if ((0, import_index.isHandler)(route)) {
        throw new Error(
          `Unexpected route found in getCheckAndContinue(): ${JSON.stringify(
            route
          )}`
        );
      } else if (route.check && !route.override) {
        checks.push(route);
      } else if (route.continue && !route.override) {
        continues.push(route);
      } else {
        others.push(route);
      }
    }
    return { checks, continues, others };
  }
  function mergeRoutes({ userRoutes, builds }) {
    const userHandleMap = /* @__PURE__ */ new Map();
    let userPrevHandle = null;
    (userRoutes || []).forEach((route) => {
      if ((0, import_index.isHandler)(route)) {
        userPrevHandle = route.handle;
      } else {
        const routes = userHandleMap.get(userPrevHandle);
        if (!routes) {
          userHandleMap.set(userPrevHandle, [route]);
        } else {
          routes.push(route);
        }
      }
    });
    const builderHandleMap = /* @__PURE__ */ new Map();
    const builderRoutes = getBuilderRoutesMapping(builds);
    const sortedPaths = Object.keys(builderRoutes).sort();
    sortedPaths.forEach((path) => {
      const br = builderRoutes[path];
      const sortedBuilders = Object.keys(br).sort();
      sortedBuilders.forEach((use) => {
        let builderPrevHandle = null;
        br[use].forEach((route) => {
          if ((0, import_index.isHandler)(route)) {
            builderPrevHandle = route.handle;
          } else {
            const routes = builderHandleMap.get(builderPrevHandle);
            if (!routes) {
              builderHandleMap.set(builderPrevHandle, [route]);
            } else {
              routes.push(route);
            }
          }
        });
      });
    });
    const outputRoutes = [];
    const uniqueHandleValues = /* @__PURE__ */ new Set([
      null,
      ...userHandleMap.keys(),
      ...builderHandleMap.keys()
    ]);
    for (const handle of uniqueHandleValues) {
      const userRoutes2 = userHandleMap.get(handle) || [];
      const builderRoutes2 = builderHandleMap.get(handle) || [];
      const builderSorted = getCheckAndContinue(builderRoutes2);
      if (handle !== null && (userRoutes2.length > 0 || builderRoutes2.length > 0)) {
        outputRoutes.push({ handle });
      }
      outputRoutes.push(...builderSorted.continues);
      outputRoutes.push(...userRoutes2);
      outputRoutes.push(...builderSorted.checks);
      outputRoutes.push(...builderSorted.others);
    }
    return outputRoutes;
  }
  return merge;
}
var schemas;
var hasRequiredSchemas;
function requireSchemas() {
  if (hasRequiredSchemas) return schemas;
  hasRequiredSchemas = 1;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var schemas_exports = {};
  __export(schemas_exports, {
    cleanUrlsSchema: () => cleanUrlsSchema,
    hasSchema: () => hasSchema,
    headersSchema: () => headersSchema,
    redirectsSchema: () => redirectsSchema,
    rewritesSchema: () => rewritesSchema,
    routesSchema: () => routesSchema,
    trailingSlashSchema: () => trailingSlashSchema
  });
  schemas = __toCommonJS(schemas_exports);
  const hasSchema = {
    description: "An array of requirements that are needed to match",
    type: "array",
    maxItems: 16,
    items: {
      anyOf: [
        {
          type: "object",
          additionalProperties: false,
          required: ["type", "value"],
          properties: {
            type: {
              description: "The type of request element to check",
              type: "string",
              enum: ["host"]
            },
            value: {
              description: "A regular expression used to match the value. Named groups can be used in the destination",
              type: "string",
              maxLength: 4096
            }
          }
        },
        {
          type: "object",
          additionalProperties: false,
          required: ["type", "key"],
          properties: {
            type: {
              description: "The type of request element to check",
              type: "string",
              enum: ["header", "cookie", "query"]
            },
            key: {
              description: "The name of the element contained in the particular type",
              type: "string",
              maxLength: 4096
            },
            value: {
              description: "A regular expression used to match the value. Named groups can be used in the destination",
              type: "string",
              maxLength: 4096
            }
          }
        }
      ]
    }
  };
  const routesSchema = {
    type: "array",
    maxItems: 2048,
    deprecated: true,
    description: "A list of routes objects used to rewrite paths to point towards other internal or external paths",
    example: [{ dest: "https://docs.example.com", src: "/docs" }],
    items: {
      anyOf: [
        {
          type: "object",
          required: ["src"],
          additionalProperties: false,
          properties: {
            src: {
              type: "string",
              maxLength: 4096
            },
            dest: {
              type: "string",
              maxLength: 4096
            },
            headers: {
              type: "object",
              additionalProperties: false,
              minProperties: 1,
              maxProperties: 100,
              patternProperties: {
                "^.{1,256}$": {
                  type: "string",
                  maxLength: 4096
                }
              }
            },
            methods: {
              type: "array",
              maxItems: 10,
              items: {
                type: "string",
                maxLength: 32
              }
            },
            caseSensitive: {
              type: "boolean"
            },
            important: {
              type: "boolean"
            },
            user: {
              type: "boolean"
            },
            continue: {
              type: "boolean"
            },
            override: {
              type: "boolean"
            },
            check: {
              type: "boolean"
            },
            isInternal: {
              type: "boolean"
            },
            status: {
              type: "integer",
              minimum: 100,
              maximum: 999
            },
            locale: {
              type: "object",
              additionalProperties: false,
              minProperties: 1,
              properties: {
                redirect: {
                  type: "object",
                  additionalProperties: false,
                  minProperties: 1,
                  maxProperties: 100,
                  patternProperties: {
                    "^.{1,256}$": {
                      type: "string",
                      maxLength: 4096
                    }
                  }
                },
                value: {
                  type: "string",
                  maxLength: 4096
                },
                path: {
                  type: "string",
                  maxLength: 4096
                },
                cookie: {
                  type: "string",
                  maxLength: 4096
                },
                default: {
                  type: "string",
                  maxLength: 4096
                }
              }
            },
            middleware: { type: "number" },
            middlewarePath: { type: "string" },
            middlewareRawSrc: {
              type: "array",
              items: {
                type: "string"
              }
            },
            has: hasSchema,
            missing: hasSchema
          }
        },
        {
          type: "object",
          required: ["handle"],
          additionalProperties: false,
          properties: {
            handle: {
              type: "string",
              maxLength: 32,
              enum: ["error", "filesystem", "hit", "miss", "resource", "rewrite"]
            }
          }
        }
      ]
    }
  };
  const rewritesSchema = {
    type: "array",
    maxItems: 2048,
    description: "A list of rewrite definitions.",
    items: {
      type: "object",
      additionalProperties: false,
      required: ["source", "destination"],
      properties: {
        source: {
          description: "A pattern that matches each incoming pathname (excluding querystring).",
          type: "string",
          maxLength: 4096
        },
        destination: {
          description: "An absolute pathname to an existing resource or an external URL.",
          type: "string",
          maxLength: 4096
        },
        has: hasSchema,
        missing: hasSchema,
        statusCode: {
          description: "An optional integer to override the status code of the response.",
          type: "integer",
          minimum: 100,
          maximum: 999
        }
      }
    }
  };
  const redirectsSchema = {
    title: "Redirects",
    type: "array",
    maxItems: 2048,
    description: "A list of redirect definitions.",
    items: {
      type: "object",
      additionalProperties: false,
      required: ["source", "destination"],
      properties: {
        source: {
          description: "A pattern that matches each incoming pathname (excluding querystring).",
          type: "string",
          maxLength: 4096
        },
        destination: {
          description: "A location destination defined as an absolute pathname or external URL.",
          type: "string",
          maxLength: 4096
        },
        permanent: {
          description: "A boolean to toggle between permanent and temporary redirect. When `true`, the status code is `308`. When `false` the status code is `307`.",
          type: "boolean"
        },
        statusCode: {
          description: "An optional integer to define the status code of the redirect.",
          private: true,
          type: "integer",
          minimum: 100,
          maximum: 999
        },
        has: hasSchema,
        missing: hasSchema
      }
    }
  };
  const headersSchema = {
    type: "array",
    maxItems: 2048,
    description: "A list of header definitions.",
    items: {
      type: "object",
      additionalProperties: false,
      required: ["source", "headers"],
      properties: {
        source: {
          description: "A pattern that matches each incoming pathname (excluding querystring)",
          type: "string",
          maxLength: 4096
        },
        headers: {
          description: "An array of key/value pairs representing each response header.",
          type: "array",
          maxItems: 1024,
          items: {
            type: "object",
            additionalProperties: false,
            required: ["key", "value"],
            properties: {
              key: {
                type: "string",
                maxLength: 4096
              },
              value: {
                type: "string",
                maxLength: 4096
              }
            }
          }
        },
        has: hasSchema,
        missing: hasSchema
      }
    }
  };
  const cleanUrlsSchema = {
    description: "When set to `true`, all HTML files and Serverless Functions will have their extension removed. When visiting a path that ends with the extension, a 308 response will redirect the client to the extensionless path.",
    type: "boolean"
  };
  const trailingSlashSchema = {
    description: "When `false`, visiting a path that ends with a forward slash will respond with a `308` status code and redirect to the path without the trailing slash.",
    type: "boolean"
  };
  return schemas;
}
var types;
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes) return types;
  hasRequiredTypes = 1;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var types_exports = {};
  types = __toCommonJS(types_exports);
  return types;
}
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist.exports;
  hasRequiredDist = 1;
  (function(module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      appendRoutesToPhase: () => import_append.appendRoutesToPhase,
      getCleanUrls: () => import_superstatic2.getCleanUrls,
      getTransformedRoutes: () => getTransformedRoutes,
      isHandler: () => isHandler,
      isValidHandleValue: () => isValidHandleValue,
      mergeRoutes: () => import_merge.mergeRoutes,
      normalizeRoutes: () => normalizeRoutes
    });
    module.exports = __toCommonJS(src_exports);
    var import_url2 = require$$0;
    var import_superstatic = requireSuperstatic();
    var import_append = requireAppend();
    var import_merge = requireMerge();
    __reExport(src_exports, requireSchemas(), module.exports);
    var import_superstatic2 = requireSuperstatic();
    __reExport(src_exports, requireTypes(), module.exports);
    const VALID_HANDLE_VALUES = [
      "filesystem",
      "hit",
      "miss",
      "rewrite",
      "error",
      "resource"
    ];
    const validHandleValues = new Set(VALID_HANDLE_VALUES);
    function isHandler(route) {
      return typeof route.handle !== "undefined";
    }
    function isValidHandleValue(handle) {
      return validHandleValues.has(handle);
    }
    function normalizeRoutes(inputRoutes) {
      if (!inputRoutes || inputRoutes.length === 0) {
        return { routes: inputRoutes, error: null };
      }
      const routes = [];
      const handling = [];
      const errors = [];
      inputRoutes.forEach((r, i) => {
        const route = { ...r };
        routes.push(route);
        const keys = Object.keys(route);
        if (isHandler(route)) {
          const { handle } = route;
          if (keys.length !== 1) {
            const unknownProp = keys.find((prop) => prop !== "handle");
            errors.push(
              `Route at index ${i} has unknown property \`${unknownProp}\`.`
            );
          } else if (!isValidHandleValue(handle)) {
            errors.push(
              `Route at index ${i} has unknown handle value \`handle: ${handle}\`.`
            );
          } else if (handling.includes(handle)) {
            errors.push(
              `Route at index ${i} is a duplicate. Please use one \`handle: ${handle}\` at most.`
            );
          } else {
            handling.push(handle);
          }
        } else if (route.src) {
          if (!route.src.startsWith("^")) {
            route.src = `^${route.src}`;
          }
          if (!route.src.endsWith("$")) {
            route.src = `${route.src}$`;
          }
          route.src = route.src.replace(/\\\//g, "/");
          const regError = checkRegexSyntax("Route", i, route.src);
          if (regError) {
            errors.push(regError);
          }
          const handleValue = handling[handling.length - 1];
          if (handleValue === "hit") {
            if (route.dest) {
              errors.push(
                `Route at index ${i} cannot define \`dest\` after \`handle: hit\`.`
              );
            }
            if (route.status) {
              errors.push(
                `Route at index ${i} cannot define \`status\` after \`handle: hit\`.`
              );
            }
            if (!route.continue) {
              errors.push(
                `Route at index ${i} must define \`continue: true\` after \`handle: hit\`.`
              );
            }
          } else if (handleValue === "miss") {
            if (route.dest && !route.check) {
              errors.push(
                `Route at index ${i} must define \`check: true\` after \`handle: miss\`.`
              );
            } else if (!route.dest && !route.continue) {
              errors.push(
                `Route at index ${i} must define \`continue: true\` after \`handle: miss\`.`
              );
            }
          }
        } else {
          errors.push(
            `Route at index ${i} must define either \`handle\` or \`src\` property.`
          );
        }
      });
      const error2 = errors.length > 0 ? createError(
        "invalid_route",
        errors,
        "https://vercel.link/routes-json",
        "Learn More"
      ) : null;
      return { routes, error: error2 };
    }
    function checkRegexSyntax(type, index, src) {
      try {
        new RegExp(src);
      } catch (err) {
        const prop = type === "Route" ? "src" : "source";
        return `${type} at index ${index} has invalid \`${prop}\` regular expression "${src}".`;
      }
      return null;
    }
    function checkPatternSyntax(type, index, {
      source,
      destination,
      has
    }) {
      let sourceSegments = /* @__PURE__ */ new Set();
      const destinationSegments = /* @__PURE__ */ new Set();
      try {
        sourceSegments = new Set((0, import_superstatic.sourceToRegex)(source).segments);
      } catch (err) {
        return {
          message: `${type} at index ${index} has invalid \`source\` pattern "${source}".`,
          link: "https://vercel.link/invalid-route-source-pattern"
        };
      }
      if (destination) {
        try {
          const { hostname, pathname, query } = (0, import_url2.parse)(destination, true);
          (0, import_superstatic.sourceToRegex)(hostname || "").segments.forEach(
            (name) => destinationSegments.add(name)
          );
          (0, import_superstatic.sourceToRegex)(pathname || "").segments.forEach(
            (name) => destinationSegments.add(name)
          );
          for (const strOrArray of Object.values(query)) {
            const value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
            (0, import_superstatic.sourceToRegex)(value || "").segments.forEach(
              (name) => destinationSegments.add(name)
            );
          }
        } catch (err) {
        }
        const hasSegments = (0, import_superstatic.collectHasSegments)(has);
        for (const segment of destinationSegments) {
          if (!sourceSegments.has(segment) && !hasSegments.includes(segment)) {
            return {
              message: `${type} at index ${index} has segment ":${segment}" in \`destination\` property but not in \`source\` or \`has\` property.`,
              link: "https://vercel.link/invalid-route-destination-segment"
            };
          }
        }
      }
      return null;
    }
    function checkRedirect(r, index) {
      if (typeof r.permanent !== "undefined" && typeof r.statusCode !== "undefined") {
        return `Redirect at index ${index} cannot define both \`permanent\` and \`statusCode\` properties.`;
      }
      return null;
    }
    function createError(code, allErrors, link, action) {
      const errors = Array.isArray(allErrors) ? allErrors : [allErrors];
      const message = errors[0];
      const error2 = {
        name: "RouteApiError",
        code,
        message,
        link,
        action,
        errors
      };
      return error2;
    }
    function notEmpty(value) {
      return value !== null && value !== void 0;
    }
    function getTransformedRoutes(vercelConfig) {
      const { cleanUrls, rewrites, redirects, headers, trailingSlash } = vercelConfig;
      let { routes = null } = vercelConfig;
      if (routes) {
        const hasNewProperties = typeof cleanUrls !== "undefined" || typeof trailingSlash !== "undefined" || typeof redirects !== "undefined" || typeof headers !== "undefined" || typeof rewrites !== "undefined";
        if (hasNewProperties) {
          const error2 = createError(
            "invalid_mixed_routes",
            "If `rewrites`, `redirects`, `headers`, `cleanUrls` or `trailingSlash` are used, then `routes` cannot be present.",
            "https://vercel.link/mix-routing-props",
            "Learn More"
          );
          return { routes, error: error2 };
        }
        return normalizeRoutes(routes);
      }
      if (typeof cleanUrls !== "undefined") {
        const normalized = normalizeRoutes(
          (0, import_superstatic.convertCleanUrls)(cleanUrls, trailingSlash)
        );
        if (normalized.error) {
          normalized.error.code = "invalid_clean_urls";
          return { routes, error: normalized.error };
        }
        routes = routes || [];
        routes.push(...normalized.routes || []);
      }
      if (typeof trailingSlash !== "undefined") {
        const normalized = normalizeRoutes((0, import_superstatic.convertTrailingSlash)(trailingSlash));
        if (normalized.error) {
          normalized.error.code = "invalid_trailing_slash";
          return { routes, error: normalized.error };
        }
        routes = routes || [];
        routes.push(...normalized.routes || []);
      }
      if (typeof redirects !== "undefined") {
        const code = "invalid_redirect";
        const regexErrorMessage = redirects.map((r, i) => checkRegexSyntax("Redirect", i, r.source)).find(notEmpty);
        if (regexErrorMessage) {
          return {
            routes,
            error: createError(
              "invalid_redirect",
              regexErrorMessage,
              "https://vercel.link/invalid-route-source-pattern",
              "Learn More"
            )
          };
        }
        const patternError = redirects.map((r, i) => checkPatternSyntax("Redirect", i, r)).find(notEmpty);
        if (patternError) {
          return {
            routes,
            error: createError(
              code,
              patternError.message,
              patternError.link,
              "Learn More"
            )
          };
        }
        const redirectErrorMessage = redirects.map(checkRedirect).find(notEmpty);
        if (redirectErrorMessage) {
          return {
            routes,
            error: createError(
              code,
              redirectErrorMessage,
              "https://vercel.link/redirects-json",
              "Learn More"
            )
          };
        }
        const normalized = normalizeRoutes((0, import_superstatic.convertRedirects)(redirects));
        if (normalized.error) {
          normalized.error.code = code;
          return { routes, error: normalized.error };
        }
        routes = routes || [];
        routes.push(...normalized.routes || []);
      }
      if (typeof headers !== "undefined") {
        const code = "invalid_header";
        const regexErrorMessage = headers.map((r, i) => checkRegexSyntax("Header", i, r.source)).find(notEmpty);
        if (regexErrorMessage) {
          return {
            routes,
            error: createError(
              code,
              regexErrorMessage,
              "https://vercel.link/invalid-route-source-pattern",
              "Learn More"
            )
          };
        }
        const patternError = headers.map((r, i) => checkPatternSyntax("Header", i, r)).find(notEmpty);
        if (patternError) {
          return {
            routes,
            error: createError(
              code,
              patternError.message,
              patternError.link,
              "Learn More"
            )
          };
        }
        const normalized = normalizeRoutes((0, import_superstatic.convertHeaders)(headers));
        if (normalized.error) {
          normalized.error.code = code;
          return { routes, error: normalized.error };
        }
        routes = routes || [];
        routes.push(...normalized.routes || []);
      }
      if (typeof rewrites !== "undefined") {
        const code = "invalid_rewrite";
        const regexErrorMessage = rewrites.map((r, i) => checkRegexSyntax("Rewrite", i, r.source)).find(notEmpty);
        if (regexErrorMessage) {
          return {
            routes,
            error: createError(
              code,
              regexErrorMessage,
              "https://vercel.link/invalid-route-source-pattern",
              "Learn More"
            )
          };
        }
        const patternError = rewrites.map((r, i) => checkPatternSyntax("Rewrite", i, r)).find(notEmpty);
        if (patternError) {
          return {
            routes,
            error: createError(
              code,
              patternError.message,
              patternError.link,
              "Learn More"
            )
          };
        }
        const normalized = normalizeRoutes((0, import_superstatic.convertRewrites)(rewrites));
        if (normalized.error) {
          normalized.error.code = code;
          return { routes, error: normalized.error };
        }
        routes = routes || [];
        routes.push({ handle: "filesystem" });
        routes.push(...normalized.routes || []);
      }
      return { routes, error: null };
    }
  })(dist);
  return dist.exports;
}
requireDist();
nodePath.posix.join;
const ASTRO_PATH_HEADER = "x-astro-path";
const ASTRO_PATH_PARAM = "x_astro_path";
const ASTRO_LOCALS_HEADER = "x-astro-locals";
const ASTRO_MIDDLEWARE_SECRET_HEADER = "x-astro-middleware-secret";
const createExports = (manifest, { middlewareSecret, skewProtection }) => {
  const app = new NodeApp(manifest);
  const handler = async (req, res) => {
    const url = new URL(`https://example.com${req.url}`);
    const clientAddress = req.headers["x-forwarded-for"];
    const localsHeader = req.headers[ASTRO_LOCALS_HEADER];
    const middlewareSecretHeader = req.headers[ASTRO_MIDDLEWARE_SECRET_HEADER];
    const realPath = req.headers[ASTRO_PATH_HEADER] ?? url.searchParams.get(ASTRO_PATH_PARAM);
    if (typeof realPath === "string") {
      req.url = realPath;
    }
    let locals = {};
    if (localsHeader) {
      if (middlewareSecretHeader !== middlewareSecret) {
        res.statusCode = 403;
        res.end("Forbidden");
        return;
      }
      locals = typeof localsHeader === "string" ? JSON.parse(localsHeader) : JSON.parse(localsHeader[0]);
    }
    delete req.headers[ASTRO_MIDDLEWARE_SECRET_HEADER];
    if (skewProtection && process.env.VERCEL_SKEW_PROTECTION_ENABLED === "1") {
      req.headers["x-deployment-id"] = process.env.VERCEL_DEPLOYMENT_ID;
    }
    const webResponse = await app.render(req, { addCookieHeader: true, clientAddress, locals });
    await NodeApp.writeResponse(webResponse, res);
  };
  return { default: handler };
};
function start() {
}
export {
  createExports as c,
  start as s
};
