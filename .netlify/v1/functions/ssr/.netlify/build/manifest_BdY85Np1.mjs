import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_DifAk8E4.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/salimchemes/Desktop/code/spent-tracker/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/expenses","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/expenses\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"expenses","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/expenses.ts","pathname":"/api/expenses","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DRUZ6zdz.css"},{"type":"inline","content":".toaster[data-astro-cid-sgggipyh]{position:fixed;bottom:1rem;right:1rem;padding:1rem;border-radius:4px;color:#fff;opacity:0;transition:opacity .5s ease-in-out}.toaster[data-astro-cid-sgggipyh].success{background-color:#4caf50}.toaster[data-astro-cid-sgggipyh].error{background-color:#f44336}.toaster[data-astro-cid-sgggipyh].show{opacity:1}\n.toaster{position:fixed;bottom:1rem;left:50%;transform:translate(-50%);padding:1rem;border-radius:4px;color:#fff;opacity:0;transition:opacity .5s ease-in-out;width:300px;text-align:center}.toaster.show{opacity:1}\n"}],"routeData":{"route":"/spent-add","isIndex":false,"type":"page","pattern":"^\\/spent-add\\/?$","segments":[[{"content":"spent-add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/spent-add.astro","pathname":"/spent-add","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DRUZ6zdz.css"},{"type":"inline","content":".toaster{position:fixed;bottom:1rem;left:50%;transform:translate(-50%);padding:1rem;border-radius:4px;color:#fff;opacity:0;transition:opacity .5s ease-in-out;width:300px;text-align:center}.toaster.show{opacity:1}\ntd[data-astro-cid-chm636uw]{text-transform:capitalize}.toaster[data-astro-cid-chm636uw]{position:fixed;bottom:1rem;left:50%;transform:translate(-50%);padding:1rem;border-radius:4px;background-color:#4caf50;color:#fff;opacity:0;transition:opacity .5s ease-in-out}.toaster[data-astro-cid-chm636uw].show{opacity:1}\n"}],"routeData":{"route":"/spent-list","isIndex":false,"type":"page","pattern":"^\\/spent-list\\/?$","segments":[[{"content":"spent-list","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/spent-list.astro","pathname":"/spent-list","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DRUZ6zdz.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/salimchemes/Desktop/code/spent-tracker/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/salimchemes/Desktop/code/spent-tracker/src/pages/spent-add.astro",{"propagation":"none","containsHead":true}],["/Users/salimchemes/Desktop/code/spent-tracker/src/pages/spent-list.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/expenses@_@ts":"pages/api/expenses.astro.mjs","\u0000@astro-page:src/pages/spent-add@_@astro":"pages/spent-add.astro.mjs","\u0000@astro-page:src/pages/spent-list@_@astro":"pages/spent-list.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BdY85Np1.mjs","/Users/salimchemes/Desktop/code/spent-tracker/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B8KiziSp.mjs","/Users/salimchemes/Desktop/code/spent-tracker/src/components/AddSpent.astro?astro&type=script&index=0&lang.ts":"_astro/AddSpent.astro_astro_type_script_index_0_lang.KqG-QlSP.js","/Users/salimchemes/Desktop/code/spent-tracker/src/components/ListSpent.astro?astro&type=script&index=0&lang.ts":"_astro/ListSpent.astro_astro_type_script_index_0_lang.CF6v3_OI.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DRUZ6zdz.css","/favicon.svg","/_astro/AddSpent.astro_astro_type_script_index_0_lang.KqG-QlSP.js","/_astro/ListSpent.astro_astro_type_script_index_0_lang.CF6v3_OI.js","/_astro/toaster.kMcIHk9_.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"ZVCWUzRbYnpG72ES1EfwWAzOZW2Io9RE6F/HE12rJyU=","envGetSecretEnabled":true});

export { manifest };
