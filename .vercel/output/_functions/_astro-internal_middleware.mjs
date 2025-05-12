import { webcrypto } from "node:crypto";
import { ad as getAugmentedNamespace, av as getDefaultExportFromCjs } from "./chunks/astro/server_dK_ejg3u.mjs";
import { a as distExports } from "./chunks/astro-designed-error-pages_BEppmd_u.mjs";
import { s as sequence } from "./chunks/index_8j84VY9G.mjs";
var DEV_OR_STAGING_SUFFIXES = [
  ".lcl.dev",
  ".stg.dev",
  ".lclstage.dev",
  ".stgstage.dev",
  ".dev.lclclerk.com",
  ".stg.lclclerk.com",
  ".accounts.lclclerk.com",
  "accountsstage.dev",
  "accounts.dev"
];
function addClerkPrefix(str) {
  if (!str) {
    return "";
  }
  let regex;
  if (str.match(/^(clerk\.)+\w*$/)) {
    regex = /(clerk\.)*(?=clerk\.)/;
  } else if (str.match(/\.clerk.accounts/)) {
    return str;
  } else {
    regex = /^(clerk\.)*/gi;
  }
  const stripped = str.replace(regex, "");
  return `clerk.${stripped}`;
}
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var defaultOptions$1 = {
  initialDelay: 125,
  maxDelayBetweenRetries: 0,
  factor: 2,
  shouldRetry: (_2, iteration) => iteration < 5,
  retryImmediately: false,
  jitter: true
};
var RETRY_IMMEDIATELY_DELAY = 100;
var sleep = async (ms) => new Promise((s2) => setTimeout(s2, ms));
var applyJitter = (delay, jitter) => {
  return jitter ? delay * (1 + Math.random()) : delay;
};
var createExponentialDelayAsyncFn = (opts) => {
  let timesCalled = 0;
  const calculateDelayInMs = () => {
    const constant = opts.initialDelay;
    const base = opts.factor;
    let delay = constant * Math.pow(base, timesCalled);
    delay = applyJitter(delay, opts.jitter);
    return Math.min(opts.maxDelayBetweenRetries || delay, delay);
  };
  return async () => {
    await sleep(calculateDelayInMs());
    timesCalled++;
  };
};
var retry = async (callback, options = {}) => {
  let iterations = 0;
  const { shouldRetry, initialDelay, maxDelayBetweenRetries, factor, retryImmediately, jitter } = {
    ...defaultOptions$1,
    ...options
  };
  const delay = createExponentialDelayAsyncFn({
    initialDelay,
    maxDelayBetweenRetries,
    factor,
    jitter
  });
  while (true) {
    try {
      return await callback();
    } catch (e) {
      iterations++;
      if (!shouldRetry(e, iterations)) {
        throw e;
      }
      if (retryImmediately && iterations === 1) {
        await sleep(applyJitter(RETRY_IMMEDIATELY_DELAY, jitter));
      } else {
        await delay();
      }
    }
  }
};
var isomorphicAtob = (data) => {
  if (typeof atob !== "undefined" && typeof atob === "function") {
    return atob(data);
  } else if (typeof global !== "undefined" && global.Buffer) {
    return new global.Buffer(data, "base64").toString();
  }
  return data;
};
var isomorphicBtoa = (data) => {
  if (typeof btoa !== "undefined" && typeof btoa === "function") {
    return btoa(data);
  } else if (typeof global !== "undefined" && global.Buffer) {
    return new global.Buffer(data).toString("base64");
  }
  return data;
};
var PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
var PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
function parsePublishableKey(key, options = {}) {
  key = key || "";
  if (!key || !isPublishableKey(key)) {
    if (options.fatal && !key) {
      throw new Error(
        "Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys"
      );
    }
    if (options.fatal && !isPublishableKey(key)) {
      throw new Error("Publishable key not valid.");
    }
    return null;
  }
  const instanceType = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) ? "production" : "development";
  let frontendApi = isomorphicAtob(key.split("_")[2]);
  frontendApi = frontendApi.slice(0, -1);
  if (options.proxyUrl) {
    frontendApi = options.proxyUrl;
  } else if (instanceType !== "development" && options.domain) {
    frontendApi = `clerk.${options.domain}`;
  }
  return {
    instanceType,
    frontendApi
  };
}
function isPublishableKey(key = "") {
  try {
    const hasValidPrefix = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) || key.startsWith(PUBLISHABLE_KEY_TEST_PREFIX);
    const hasValidFrontendApiPostfix = isomorphicAtob(key.split("_")[2] || "").endsWith("$");
    return hasValidPrefix && hasValidFrontendApiPostfix;
  } catch {
    return false;
  }
}
function createDevOrStagingUrlCache() {
  const devOrStagingUrlCache = /* @__PURE__ */ new Map();
  return {
    isDevOrStagingUrl: (url) => {
      if (!url) {
        return false;
      }
      const hostname = typeof url === "string" ? url : url.hostname;
      let res = devOrStagingUrlCache.get(hostname);
      if (res === void 0) {
        res = DEV_OR_STAGING_SUFFIXES.some((s2) => hostname.endsWith(s2));
        devOrStagingUrlCache.set(hostname, res);
      }
      return res;
    }
  };
}
function isDevelopmentFromPublishableKey(apiKey) {
  return apiKey.startsWith("test_") || apiKey.startsWith("pk_test_");
}
function isDevelopmentFromSecretKey(apiKey) {
  return apiKey.startsWith("test_") || apiKey.startsWith("sk_test_");
}
async function getCookieSuffix(publishableKey, subtle = globalThis.crypto.subtle) {
  const data = new TextEncoder().encode(publishableKey);
  const digest = await subtle.digest("sha-1", data);
  const stringDigest = String.fromCharCode(...new Uint8Array(digest));
  return isomorphicBtoa(stringDigest).replace(/\+/gi, "-").replace(/\//gi, "_").substring(0, 8);
}
var getSuffixedCookieName = (cookieName, cookieSuffix) => {
  return `${cookieName}_${cookieSuffix}`;
};
var isTestEnvironment = () => {
  try {
    return process.env.NODE_ENV === "test";
  } catch {
  }
  return false;
};
var isProductionEnvironment = () => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
  }
  return false;
};
var displayedWarnings = /* @__PURE__ */ new Set();
var deprecated = (fnName, warning, key) => {
  const hideWarning = isTestEnvironment() || isProductionEnvironment();
  const messageId = fnName;
  if (displayedWarnings.has(messageId) || hideWarning) {
    return;
  }
  displayedWarnings.add(messageId);
  console.warn(
    `Clerk - DEPRECATION WARNING: "${fnName}" is deprecated and will be removed in the next major release.
${warning}`
  );
};
function parseErrors$1(data = []) {
  return data.length > 0 ? data.map(parseError) : [];
}
function parseError(error) {
  return {
    code: error.code,
    message: error.message,
    longMessage: error.long_message,
    meta: {
      paramName: error?.meta?.param_name,
      sessionId: error?.meta?.session_id,
      emailAddresses: error?.meta?.email_addresses,
      identifiers: error?.meta?.identifiers,
      zxcvbn: error?.meta?.zxcvbn
    }
  };
}
var ClerkAPIResponseError = class _ClerkAPIResponseError extends Error {
  constructor(message, { data, status, clerkTraceId, retryAfter }) {
    super(message);
    this.toString = () => {
      let message2 = `[${this.name}]
Message:${this.message}
Status:${this.status}
Serialized errors: ${this.errors.map(
        (e) => JSON.stringify(e)
      )}`;
      if (this.clerkTraceId) {
        message2 += `
Clerk Trace ID: ${this.clerkTraceId}`;
      }
      return message2;
    };
    Object.setPrototypeOf(this, _ClerkAPIResponseError.prototype);
    this.status = status;
    this.message = message;
    this.clerkTraceId = clerkTraceId;
    this.retryAfter = retryAfter;
    this.clerkError = true;
    this.errors = parseErrors$1(data);
  }
};
var DefaultMessages = Object.freeze({
  InvalidProxyUrlErrorMessage: `The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})`,
  InvalidPublishableKeyErrorMessage: `The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})`,
  MissingPublishableKeyErrorMessage: `Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
  MissingSecretKeyErrorMessage: `Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
  MissingClerkProvider: `{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider`
});
function buildErrorThrower({ packageName, customMessages }) {
  let pkg = packageName;
  const messages = {
    ...DefaultMessages,
    ...customMessages
  };
  function buildMessage(rawMessage, replacements) {
    if (!replacements) {
      return `${pkg}: ${rawMessage}`;
    }
    let msg = rawMessage;
    const matches = rawMessage.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
    for (const match2 of matches) {
      const replacement = (replacements[match2[1]] || "").toString();
      msg = msg.replace(`{{${match2[1]}}}`, replacement);
    }
    return `${pkg}: ${msg}`;
  }
  return {
    setPackageName({ packageName: packageName2 }) {
      if (typeof packageName2 === "string") {
        pkg = packageName2;
      }
      return this;
    },
    setMessages({ customMessages: customMessages2 }) {
      Object.assign(messages, customMessages2 || {});
      return this;
    },
    throwInvalidPublishableKeyError(params) {
      throw new Error(buildMessage(messages.InvalidPublishableKeyErrorMessage, params));
    },
    throwInvalidProxyUrl(params) {
      throw new Error(buildMessage(messages.InvalidProxyUrlErrorMessage, params));
    },
    throwMissingPublishableKeyError() {
      throw new Error(buildMessage(messages.MissingPublishableKeyErrorMessage));
    },
    throwMissingSecretKeyError() {
      throw new Error(buildMessage(messages.MissingSecretKeyErrorMessage));
    },
    throwMissingClerkProviderError(params) {
      throw new Error(buildMessage(messages.MissingClerkProvider, params));
    },
    throw(message) {
      throw new Error(buildMessage(message));
    }
  };
}
var errorThrower$1 = buildErrorThrower({ packageName: "@clerk/backend" });
var TokenVerificationErrorCode = {
  InvalidSecretKey: "clerk_key_invalid"
};
var TokenVerificationErrorReason = {
  TokenExpired: "token-expired",
  TokenInvalid: "token-invalid",
  TokenInvalidAlgorithm: "token-invalid-algorithm",
  TokenInvalidAuthorizedParties: "token-invalid-authorized-parties",
  TokenInvalidSignature: "token-invalid-signature",
  TokenNotActiveYet: "token-not-active-yet",
  TokenIatInTheFuture: "token-iat-in-the-future",
  TokenVerificationFailed: "token-verification-failed",
  InvalidSecretKey: "secret-key-invalid",
  LocalJWKMissing: "jwk-local-missing",
  RemoteJWKFailedToLoad: "jwk-remote-failed-to-load",
  RemoteJWKInvalid: "jwk-remote-invalid",
  RemoteJWKMissing: "jwk-remote-missing",
  JWKFailedToResolve: "jwk-failed-to-resolve",
  JWKKidMismatch: "jwk-kid-mismatch"
};
var TokenVerificationErrorAction = {
  ContactSupport: "Contact support@clerk.com",
  EnsureClerkJWT: "Make sure that this is a valid Clerk generate JWT.",
  SetClerkJWTKey: "Set the CLERK_JWT_KEY environment variable.",
  SetClerkSecretKey: "Set the CLERK_SECRET_KEY environment variable.",
  EnsureClockSync: "Make sure your system clock is in sync (e.g. turn off and on automatic time synchronization)."
};
var TokenVerificationError = class _TokenVerificationError extends Error {
  constructor({
    action,
    message,
    reason
  }) {
    super(message);
    Object.setPrototypeOf(this, _TokenVerificationError.prototype);
    this.reason = reason;
    this.message = message;
    this.action = action;
  }
  getFullMessage() {
    return `${[this.message, this.action].filter((m) => m).join(" ")} (reason=${this.reason}, token-carrier=${this.tokenCarrier})`;
  }
};
var globalFetch = fetch.bind(globalThis);
var runtime = {
  crypto: webcrypto,
  get fetch() {
    return process.env.NODE_ENV === "test" ? fetch : globalFetch;
  },
  AbortController: globalThis.AbortController,
  Blob: globalThis.Blob,
  FormData: globalThis.FormData,
  Headers: globalThis.Headers,
  Request: globalThis.Request,
  Response: globalThis.Response
};
var base64url = {
  parse(string, opts) {
    return parse(string, base64UrlEncoding, opts);
  },
  stringify(data, opts) {
    return stringify(data, base64UrlEncoding, opts);
  }
};
var base64UrlEncoding = {
  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bits: 6
};
function parse(string, encoding, opts = {}) {
  if (!encoding.codes) {
    encoding.codes = {};
    for (let i = 0; i < encoding.chars.length; ++i) {
      encoding.codes[encoding.chars[i]] = i;
    }
  }
  if (!opts.loose && string.length * encoding.bits & 7) {
    throw new SyntaxError("Invalid padding");
  }
  let end = string.length;
  while (string[end - 1] === "=") {
    --end;
    if (!opts.loose && !((string.length - end) * encoding.bits & 7)) {
      throw new SyntaxError("Invalid padding");
    }
  }
  const out = new (opts.out ?? Uint8Array)(end * encoding.bits / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = encoding.codes[string[i]];
    if (value === void 0) {
      throw new SyntaxError("Invalid character " + string[i]);
    }
    buffer = buffer << encoding.bits | value;
    bits += encoding.bits;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= encoding.bits || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
}
function stringify(data, encoding, opts = {}) {
  const { pad = true } = opts;
  const mask = (1 << encoding.bits) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | 255 & data[i];
    bits += 8;
    while (bits > encoding.bits) {
      bits -= encoding.bits;
      out += encoding.chars[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += encoding.chars[mask & buffer << encoding.bits - bits];
  }
  if (pad) {
    while (out.length * encoding.bits & 7) {
      out += "=";
    }
  }
  return out;
}
var algToHash = {
  RS256: "SHA-256",
  RS384: "SHA-384",
  RS512: "SHA-512"
};
var RSA_ALGORITHM_NAME = "RSASSA-PKCS1-v1_5";
var jwksAlgToCryptoAlg = {
  RS256: RSA_ALGORITHM_NAME,
  RS384: RSA_ALGORITHM_NAME,
  RS512: RSA_ALGORITHM_NAME
};
var algs = Object.keys(algToHash);
function getCryptoAlgorithm(algorithmName) {
  const hash = algToHash[algorithmName];
  const name = jwksAlgToCryptoAlg[algorithmName];
  if (!hash || !name) {
    throw new Error(`Unsupported algorithm ${algorithmName}, expected one of ${algs.join(",")}.`);
  }
  return {
    hash: { name: algToHash[algorithmName] },
    name: jwksAlgToCryptoAlg[algorithmName]
  };
}
var isArrayString = (s2) => {
  return Array.isArray(s2) && s2.length > 0 && s2.every((a) => typeof a === "string");
};
var assertAudienceClaim = (aud, audience) => {
  const audienceList = [audience].flat().filter((a) => !!a);
  const audList = [aud].flat().filter((a) => !!a);
  const shouldVerifyAudience = audienceList.length > 0 && audList.length > 0;
  if (!shouldVerifyAudience) {
    return;
  }
  if (typeof aud === "string") {
    if (!audienceList.includes(aud)) {
      throw new TokenVerificationError({
        action: TokenVerificationErrorAction.EnsureClerkJWT,
        reason: TokenVerificationErrorReason.TokenVerificationFailed,
        message: `Invalid JWT audience claim (aud) ${JSON.stringify(aud)}. Is not included in "${JSON.stringify(
          audienceList
        )}".`
      });
    }
  } else if (isArrayString(aud)) {
    if (!aud.some((a) => audienceList.includes(a))) {
      throw new TokenVerificationError({
        action: TokenVerificationErrorAction.EnsureClerkJWT,
        reason: TokenVerificationErrorReason.TokenVerificationFailed,
        message: `Invalid JWT audience claim array (aud) ${JSON.stringify(aud)}. Is not included in "${JSON.stringify(
          audienceList
        )}".`
      });
    }
  }
};
var assertHeaderType = (typ) => {
  if (typeof typ === "undefined") {
    return;
  }
  if (typ !== "JWT") {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.EnsureClerkJWT,
      reason: TokenVerificationErrorReason.TokenInvalid,
      message: `Invalid JWT type ${JSON.stringify(typ)}. Expected "JWT".`
    });
  }
};
var assertHeaderAlgorithm = (alg) => {
  if (!algs.includes(alg)) {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.EnsureClerkJWT,
      reason: TokenVerificationErrorReason.TokenInvalidAlgorithm,
      message: `Invalid JWT algorithm ${JSON.stringify(alg)}. Supported: ${algs}.`
    });
  }
};
var assertSubClaim = (sub) => {
  if (typeof sub !== "string") {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.EnsureClerkJWT,
      reason: TokenVerificationErrorReason.TokenVerificationFailed,
      message: `Subject claim (sub) is required and must be a string. Received ${JSON.stringify(sub)}.`
    });
  }
};
var assertAuthorizedPartiesClaim = (azp, authorizedParties) => {
  if (!azp || !authorizedParties || authorizedParties.length === 0) {
    return;
  }
  if (!authorizedParties.includes(azp)) {
    throw new TokenVerificationError({
      reason: TokenVerificationErrorReason.TokenInvalidAuthorizedParties,
      message: `Invalid JWT Authorized party claim (azp) ${JSON.stringify(azp)}. Expected "${authorizedParties}".`
    });
  }
};
var assertExpirationClaim = (exp, clockSkewInMs) => {
  if (typeof exp !== "number") {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.EnsureClerkJWT,
      reason: TokenVerificationErrorReason.TokenVerificationFailed,
      message: `Invalid JWT expiry date claim (exp) ${JSON.stringify(exp)}. Expected number.`
    });
  }
  const currentDate = new Date(Date.now());
  const expiryDate = /* @__PURE__ */ new Date(0);
  expiryDate.setUTCSeconds(exp);
  const expired = expiryDate.getTime() <= currentDate.getTime() - clockSkewInMs;
  if (expired) {
    throw new TokenVerificationError({
      reason: TokenVerificationErrorReason.TokenExpired,
      message: `JWT is expired. Expiry date: ${expiryDate.toUTCString()}, Current date: ${currentDate.toUTCString()}.`
    });
  }
};
var assertActivationClaim = (nbf, clockSkewInMs) => {
  if (typeof nbf === "undefined") {
    return;
  }
  if (typeof nbf !== "number") {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.EnsureClerkJWT,
      reason: TokenVerificationErrorReason.TokenVerificationFailed,
      message: `Invalid JWT not before date claim (nbf) ${JSON.stringify(nbf)}. Expected number.`
    });
  }
  const currentDate = new Date(Date.now());
  const notBeforeDate = /* @__PURE__ */ new Date(0);
  notBeforeDate.setUTCSeconds(nbf);
  const early = notBeforeDate.getTime() > currentDate.getTime() + clockSkewInMs;
  if (early) {
    throw new TokenVerificationError({
      reason: TokenVerificationErrorReason.TokenNotActiveYet,
      message: `JWT cannot be used prior to not before date claim (nbf). Not before date: ${notBeforeDate.toUTCString()}; Current date: ${currentDate.toUTCString()};`
    });
  }
};
var assertIssuedAtClaim = (iat, clockSkewInMs) => {
  if (typeof iat === "undefined") {
    return;
  }
  if (typeof iat !== "number") {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.EnsureClerkJWT,
      reason: TokenVerificationErrorReason.TokenVerificationFailed,
      message: `Invalid JWT issued at date claim (iat) ${JSON.stringify(iat)}. Expected number.`
    });
  }
  const currentDate = new Date(Date.now());
  const issuedAtDate = /* @__PURE__ */ new Date(0);
  issuedAtDate.setUTCSeconds(iat);
  const postIssued = issuedAtDate.getTime() > currentDate.getTime() + clockSkewInMs;
  if (postIssued) {
    throw new TokenVerificationError({
      reason: TokenVerificationErrorReason.TokenIatInTheFuture,
      message: `JWT issued at date claim (iat) is in the future. Issued at date: ${issuedAtDate.toUTCString()}; Current date: ${currentDate.toUTCString()};`
    });
  }
};
function pemToBuffer(secret) {
  const trimmed = secret.replace(/-----BEGIN.*?-----/g, "").replace(/-----END.*?-----/g, "").replace(/\s/g, "");
  const decoded = isomorphicAtob(trimmed);
  const buffer = new ArrayBuffer(decoded.length);
  const bufView = new Uint8Array(buffer);
  for (let i = 0, strLen = decoded.length; i < strLen; i++) {
    bufView[i] = decoded.charCodeAt(i);
  }
  return bufView;
}
function importKey(key, algorithm, keyUsage) {
  if (typeof key === "object") {
    return runtime.crypto.subtle.importKey("jwk", key, algorithm, false, [keyUsage]);
  }
  const keyData = pemToBuffer(key);
  const format = "spki";
  return runtime.crypto.subtle.importKey(format, keyData, algorithm, false, [keyUsage]);
}
var DEFAULT_CLOCK_SKEW_IN_MS = 5 * 1e3;
async function hasValidSignature(jwt, key) {
  const { header, signature, raw } = jwt;
  const encoder = new TextEncoder();
  const data = encoder.encode([raw.header, raw.payload].join("."));
  const algorithm = getCryptoAlgorithm(header.alg);
  try {
    const cryptoKey = await importKey(key, algorithm, "verify");
    const verified = await runtime.crypto.subtle.verify(algorithm.name, cryptoKey, signature, data);
    return { data: verified };
  } catch (error) {
    return {
      errors: [
        new TokenVerificationError({
          reason: TokenVerificationErrorReason.TokenInvalidSignature,
          message: error?.message
        })
      ]
    };
  }
}
function decodeJwt(token) {
  const tokenParts = (token || "").toString().split(".");
  if (tokenParts.length !== 3) {
    return {
      errors: [
        new TokenVerificationError({
          reason: TokenVerificationErrorReason.TokenInvalid,
          message: `Invalid JWT form. A JWT consists of three parts separated by dots.`
        })
      ]
    };
  }
  const [rawHeader, rawPayload, rawSignature] = tokenParts;
  const decoder = new TextDecoder();
  const header = JSON.parse(decoder.decode(base64url.parse(rawHeader, { loose: true })));
  const payload = JSON.parse(decoder.decode(base64url.parse(rawPayload, { loose: true })));
  const signature = base64url.parse(rawSignature, { loose: true });
  const data = {
    header,
    payload,
    signature,
    raw: {
      header: rawHeader,
      payload: rawPayload,
      signature: rawSignature,
      text: token
    }
  };
  return { data };
}
async function verifyJwt(token, options) {
  const { audience, authorizedParties, clockSkewInMs, key } = options;
  const clockSkew = clockSkewInMs || DEFAULT_CLOCK_SKEW_IN_MS;
  const { data: decoded, errors } = decodeJwt(token);
  if (errors) {
    return { errors };
  }
  const { header, payload } = decoded;
  try {
    const { typ, alg } = header;
    assertHeaderType(typ);
    assertHeaderAlgorithm(alg);
    const { azp, sub, aud, iat, exp, nbf } = payload;
    assertSubClaim(sub);
    assertAudienceClaim([aud], [audience]);
    assertAuthorizedPartiesClaim(azp, authorizedParties);
    assertExpirationClaim(exp, clockSkew);
    assertActivationClaim(nbf, clockSkew);
    assertIssuedAtClaim(iat, clockSkew);
  } catch (err) {
    return { errors: [err] };
  }
  const { data: signatureValid, errors: signatureErrors } = await hasValidSignature(decoded, key);
  if (signatureErrors) {
    return {
      errors: [
        new TokenVerificationError({
          action: TokenVerificationErrorAction.EnsureClerkJWT,
          reason: TokenVerificationErrorReason.TokenVerificationFailed,
          message: `Error verifying JWT signature. ${signatureErrors[0]}`
        })
      ]
    };
  }
  if (!signatureValid) {
    return {
      errors: [
        new TokenVerificationError({
          reason: TokenVerificationErrorReason.TokenInvalidSignature,
          message: "JWT signature is invalid."
        })
      ]
    };
  }
  return { data: payload };
}
var mapObj = { exports: {} };
var hasRequiredMapObj;
function requireMapObj() {
  if (hasRequiredMapObj) return mapObj.exports;
  hasRequiredMapObj = 1;
  const isObject = (value) => typeof value === "object" && value !== null;
  const mapObjectSkip = Symbol("skip");
  const isObjectCustom = (value) => isObject(value) && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);
  const mapObject = (object, mapper, options, isSeen = /* @__PURE__ */ new WeakMap()) => {
    options = {
      deep: false,
      target: {},
      ...options
    };
    if (isSeen.has(object)) {
      return isSeen.get(object);
    }
    isSeen.set(object, options.target);
    const { target } = options;
    delete options.target;
    const mapArray = (array) => array.map((element) => isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);
    if (Array.isArray(object)) {
      return mapArray(object);
    }
    for (const [key, value] of Object.entries(object)) {
      const mapResult = mapper(key, value, object);
      if (mapResult === mapObjectSkip) {
        continue;
      }
      let [newKey, newValue, { shouldRecurse = true } = {}] = mapResult;
      if (newKey === "__proto__") {
        continue;
      }
      if (options.deep && shouldRecurse && isObjectCustom(newValue)) {
        newValue = Array.isArray(newValue) ? mapArray(newValue) : mapObject(newValue, mapper, options, isSeen);
      }
      target[newKey] = newValue;
    }
    return target;
  };
  mapObj.exports = (object, mapper, options) => {
    if (!isObject(object)) {
      throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
    }
    return mapObject(object, mapper, options);
  };
  mapObj.exports.mapObjectSkip = mapObjectSkip;
  return mapObj.exports;
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s2, i = 1, n = arguments.length; i < n; i++) {
      s2 = arguments[i];
      for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p)) t[p] = s2[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function lowerCase(str) {
  return str.toLowerCase();
}
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
function noCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
  var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
  var start = 0;
  var end = result.length;
  while (result.charAt(start) === "\0")
    start++;
  while (result.charAt(end - 1) === "\0")
    end--;
  return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
function replace(input, re, value) {
  if (re instanceof RegExp)
    return input.replace(re, value);
  return re.reduce(function(input2, re2) {
    return input2.replace(re2, value);
  }, input);
}
function dotCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return noCase(input, __assign({ delimiter: "." }, options));
}
function snakeCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return dotCase(input, __assign({ delimiter: "_" }, options));
}
const dist_es2015 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  snakeCase
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(dist_es2015);
var snakecaseKeys$1;
var hasRequiredSnakecaseKeys;
function requireSnakecaseKeys() {
  if (hasRequiredSnakecaseKeys) return snakecaseKeys$1;
  hasRequiredSnakecaseKeys = 1;
  const map = requireMapObj();
  const { snakeCase: snakeCase2 } = require$$1;
  const PlainObjectConstructor = {}.constructor;
  snakecaseKeys$1 = function(obj, options) {
    if (Array.isArray(obj)) {
      if (obj.some((item) => item.constructor !== PlainObjectConstructor)) {
        throw new Error("obj must be array of plain objects");
      }
    } else {
      if (obj.constructor !== PlainObjectConstructor) {
        throw new Error("obj must be an plain object");
      }
    }
    options = Object.assign({ deep: true, exclude: [], parsingOptions: {} }, options);
    return map(obj, function(key, val) {
      return [
        matches(options.exclude, key) ? key : snakeCase2(key, options.parsingOptions),
        val,
        mapperOptions(key, val, options)
      ];
    }, options);
  };
  function matches(patterns, value) {
    return patterns.some(function(pattern) {
      return typeof pattern === "string" ? pattern === value : pattern.test(value);
    });
  }
  function mapperOptions(key, val, options) {
    return options.shouldRecurse ? { shouldRecurse: options.shouldRecurse(key, val) } : void 0;
  }
  return snakecaseKeys$1;
}
var snakecaseKeysExports = requireSnakecaseKeys();
const snakecaseKeys = /* @__PURE__ */ getDefaultExportFromCjs(snakecaseKeysExports);
var TYPES_TO_OBJECTS = {
  strict_mfa: {
    afterMinutes: 10,
    level: "multi_factor"
  },
  strict: {
    afterMinutes: 10,
    level: "second_factor"
  },
  moderate: {
    afterMinutes: 60,
    level: "second_factor"
  },
  lax: {
    afterMinutes: 1440,
    level: "second_factor"
  }
};
var ALLOWED_LEVELS = /* @__PURE__ */ new Set(["first_factor", "second_factor", "multi_factor"]);
var ALLOWED_TYPES = /* @__PURE__ */ new Set(["strict_mfa", "strict", "moderate", "lax"]);
var isValidMaxAge = (maxAge) => typeof maxAge === "number" && maxAge > 0;
var isValidLevel = (level) => ALLOWED_LEVELS.has(level);
var isValidVerificationType = (type) => ALLOWED_TYPES.has(type);
var prefixWithOrg = (value) => value.startsWith("org:") ? value : `org:${value}`;
var checkOrgAuthorization = (params, options) => {
  const { orgId, orgRole, orgPermissions } = options;
  if (!params.role && !params.permission) {
    return null;
  }
  if (!orgId || !orgRole || !orgPermissions) {
    return null;
  }
  if (params.permission) {
    return orgPermissions.includes(prefixWithOrg(params.permission));
  }
  if (params.role) {
    return orgRole === prefixWithOrg(params.role);
  }
  return null;
};
var checkForFeatureOrPlan = (claim, featureOrPlan) => {
  const { org: orgFeatures, user: userFeatures } = splitByScope(claim);
  const [scope, _id] = featureOrPlan.split(":");
  const id = _id || scope;
  if (scope === "org") {
    return orgFeatures.includes(id);
  } else if (scope === "user") {
    return userFeatures.includes(id);
  } else {
    return [...orgFeatures, ...userFeatures].includes(id);
  }
};
var checkBillingAuthorization = (params, options) => {
  const { features, plans } = options;
  if (params.feature && features) {
    return checkForFeatureOrPlan(features, params.feature);
  }
  if (params.plan && plans) {
    return checkForFeatureOrPlan(plans, params.plan);
  }
  return null;
};
var splitByScope = (fea) => {
  const features = fea ? fea.split(",").map((f) => f.trim()) : [];
  return {
    org: features.filter((f) => f.split(":")[0].includes("o")).map((f) => f.split(":")[1]),
    user: features.filter((f) => f.split(":")[0].includes("u")).map((f) => f.split(":")[1])
  };
};
var validateReverificationConfig = (config) => {
  if (!config) {
    return false;
  }
  const convertConfigToObject = (config2) => {
    if (typeof config2 === "string") {
      return TYPES_TO_OBJECTS[config2];
    }
    return config2;
  };
  const isValidStringValue = typeof config === "string" && isValidVerificationType(config);
  const isValidObjectValue = typeof config === "object" && isValidLevel(config.level) && isValidMaxAge(config.afterMinutes);
  if (isValidStringValue || isValidObjectValue) {
    return convertConfigToObject.bind(null, config);
  }
  return false;
};
var checkReverificationAuthorization = (params, { factorVerificationAge }) => {
  if (!params.reverification || !factorVerificationAge) {
    return null;
  }
  const isValidReverification = validateReverificationConfig(params.reverification);
  if (!isValidReverification) {
    return null;
  }
  const { level, afterMinutes } = isValidReverification();
  const [factor1Age, factor2Age] = factorVerificationAge;
  const isValidFactor1 = factor1Age !== -1 ? afterMinutes > factor1Age : null;
  const isValidFactor2 = factor2Age !== -1 ? afterMinutes > factor2Age : null;
  switch (level) {
    case "first_factor":
      return isValidFactor1;
    case "second_factor":
      return factor2Age !== -1 ? isValidFactor2 : isValidFactor1;
    case "multi_factor":
      return factor2Age === -1 ? isValidFactor1 : isValidFactor1 && isValidFactor2;
  }
};
var createCheckAuthorization = (options) => {
  return (params) => {
    if (!options.userId) {
      return false;
    }
    const billingAuthorization = checkBillingAuthorization(params, options);
    const orgAuthorization = checkOrgAuthorization(params, options);
    const reverificationAuthorization = checkReverificationAuthorization(params, options);
    if ([billingAuthorization || orgAuthorization, reverificationAuthorization].some((a) => a === null)) {
      return [billingAuthorization || orgAuthorization, reverificationAuthorization].some((a) => a === true);
    }
    return [billingAuthorization || orgAuthorization, reverificationAuthorization].every((a) => a === true);
  };
};
var parsePermissions = ({ per, fpm }) => {
  if (!per || !fpm) {
    return { permissions: [], featurePermissionMap: [] };
  }
  const permissions = per.split(",").map((p) => p.trim());
  const featurePermissionMap = fpm.split(",").map((permission) => Number.parseInt(permission.trim(), 10)).map(
    (permission) => permission.toString(2).padStart(permissions.length, "0").split("").map((bit) => Number.parseInt(bit, 10)).reverse()
  ).filter(Boolean);
  return { permissions, featurePermissionMap };
};
function buildOrgPermissions({
  features,
  permissions,
  featurePermissionMap
}) {
  if (!features || !permissions || !featurePermissionMap) {
    return [];
  }
  const orgPermissions = [];
  for (let featureIndex = 0; featureIndex < features.length; featureIndex++) {
    const feature = features[featureIndex];
    if (featureIndex >= featurePermissionMap.length) {
      continue;
    }
    const permissionBits = featurePermissionMap[featureIndex];
    if (!permissionBits) continue;
    for (let permIndex = 0; permIndex < permissionBits.length; permIndex++) {
      if (permissionBits[permIndex] === 1) {
        orgPermissions.push(`org:${feature}:${permissions[permIndex]}`);
      }
    }
  }
  return orgPermissions;
}
var __experimental_JWTPayloadToAuthObjectProperties = (claims) => {
  let orgId;
  let orgRole;
  let orgSlug;
  let orgPermissions;
  const factorVerificationAge = claims.fva ?? null;
  const sessionStatus = claims.sts ?? null;
  switch (claims.v) {
    case 2: {
      if (claims.o) {
        orgId = claims.o?.id;
        orgSlug = claims.o?.slg;
        if (claims.o?.rol) {
          orgRole = `org:${claims.o?.rol}`;
        }
        const { org } = splitByScope(claims.fea);
        const { permissions, featurePermissionMap } = parsePermissions({
          per: claims.o?.per,
          fpm: claims.o?.fpm
        });
        orgPermissions = buildOrgPermissions({
          features: org,
          featurePermissionMap,
          permissions
        });
      }
      break;
    }
    default:
      orgId = claims.org_id;
      orgRole = claims.org_role;
      orgSlug = claims.org_slug;
      orgPermissions = claims.org_permissions;
      break;
  }
  return {
    sessionClaims: claims,
    sessionId: claims.sid,
    sessionStatus,
    actor: claims.act,
    userId: claims.sub,
    orgId,
    orgRole,
    orgSlug,
    orgPermissions,
    factorVerificationAge
  };
};
function _(r) {
  for (var n = [], e = 0; e < r.length; ) {
    var a = r[e];
    if (a === "*" || a === "+" || a === "?") {
      n.push({
        type: "MODIFIER",
        index: e,
        value: r[e++]
      });
      continue;
    }
    if (a === "\\") {
      n.push({
        type: "ESCAPED_CHAR",
        index: e++,
        value: r[e++]
      });
      continue;
    }
    if (a === "{") {
      n.push({
        type: "OPEN",
        index: e,
        value: r[e++]
      });
      continue;
    }
    if (a === "}") {
      n.push({
        type: "CLOSE",
        index: e,
        value: r[e++]
      });
      continue;
    }
    if (a === ":") {
      for (var u = "", t = e + 1; t < r.length; ) {
        var c = r.charCodeAt(t);
        if (c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || c === 95) {
          u += r[t++];
          continue;
        }
        break;
      }
      if (!u) throw new TypeError("Missing parameter name at ".concat(e));
      n.push({
        type: "NAME",
        index: e,
        value: u
      }), e = t;
      continue;
    }
    if (a === "(") {
      var o = 1, m = "", t = e + 1;
      if (r[t] === "?") throw new TypeError('Pattern cannot start with "?" at '.concat(t));
      for (; t < r.length; ) {
        if (r[t] === "\\") {
          m += r[t++] + r[t++];
          continue;
        }
        if (r[t] === ")") {
          if (o--, o === 0) {
            t++;
            break;
          }
        } else if (r[t] === "(" && (o++, r[t + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(t));
        m += r[t++];
      }
      if (o) throw new TypeError("Unbalanced pattern at ".concat(e));
      if (!m) throw new TypeError("Missing pattern at ".concat(e));
      n.push({
        type: "PATTERN",
        index: e,
        value: m
      }), e = t;
      continue;
    }
    n.push({
      type: "CHAR",
      index: e,
      value: r[e++]
    });
  }
  return n.push({
    type: "END",
    index: e,
    value: ""
  }), n;
}
function F(r, n) {
  n === void 0 && (n = {});
  for (var e = _(r), a = n.prefixes, u = a === void 0 ? "./" : a, t = n.delimiter, c = t === void 0 ? "/#?" : t, o = [], m = 0, h = 0, p = "", f = function(l) {
    if (h < e.length && e[h].type === l) return e[h++].value;
  }, w = function(l) {
    var v = f(l);
    if (v !== void 0) return v;
    var E = e[h], N = E.type, S = E.index;
    throw new TypeError("Unexpected ".concat(N, " at ").concat(S, ", expected ").concat(l));
  }, d = function() {
    for (var l = "", v; v = f("CHAR") || f("ESCAPED_CHAR"); ) l += v;
    return l;
  }, M = function(l) {
    for (var v = 0, E = c; v < E.length; v++) {
      var N = E[v];
      if (l.indexOf(N) > -1) return true;
    }
    return false;
  }, A = function(l) {
    var v = o[o.length - 1], E = l || (v && typeof v == "string" ? v : "");
    if (v && !E)
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(v.name, '"'));
    return !E || M(E) ? "[^".concat(s(c), "]+?") : "(?:(?!".concat(s(E), ")[^").concat(s(c), "])+?");
  }; h < e.length; ) {
    var T = f("CHAR"), x = f("NAME"), C = f("PATTERN");
    if (x || C) {
      var g = T || "";
      u.indexOf(g) === -1 && (p += g, g = ""), p && (o.push(p), p = ""), o.push({
        name: x || m++,
        prefix: g,
        suffix: "",
        pattern: C || A(g),
        modifier: f("MODIFIER") || ""
      });
      continue;
    }
    var i = T || f("ESCAPED_CHAR");
    if (i) {
      p += i;
      continue;
    }
    p && (o.push(p), p = "");
    var R = f("OPEN");
    if (R) {
      var g = d(), y = f("NAME") || "", O = f("PATTERN") || "", b = d();
      w("CLOSE"), o.push({
        name: y || (O ? m++ : ""),
        pattern: y && !O ? A(g) : O,
        prefix: g,
        suffix: b,
        modifier: f("MODIFIER") || ""
      });
      continue;
    }
    w("END");
  }
  return o;
}
function H(r, n) {
  var e = [], a = P(r, e, n);
  return I(a, e, n);
}
function I(r, n, e) {
  e === void 0 && (e = {});
  var a = e.decode, u = a === void 0 ? function(t) {
    return t;
  } : a;
  return function(t) {
    var c = r.exec(t);
    if (!c) return false;
    for (var o = c[0], m = c.index, h = /* @__PURE__ */ Object.create(null), p = function(w) {
      if (c[w] === void 0) return "continue";
      var d = n[w - 1];
      d.modifier === "*" || d.modifier === "+" ? h[d.name] = c[w].split(d.prefix + d.suffix).map(function(M) {
        return u(M, d);
      }) : h[d.name] = u(c[w], d);
    }, f = 1; f < c.length; f++)
      p(f);
    return {
      path: o,
      index: m,
      params: h
    };
  };
}
function s(r) {
  return r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function D(r) {
  return r && r.sensitive ? "" : "i";
}
function $(r, n) {
  if (!n) return r;
  for (var e = /\((?:\?<(.*?)>)?(?!\?)/g, a = 0, u = e.exec(r.source); u; )
    n.push({
      name: u[1] || a++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    }), u = e.exec(r.source);
  return r;
}
function W(r, n, e) {
  var a = r.map(function(u) {
    return P(u, n, e).source;
  });
  return new RegExp("(?:".concat(a.join("|"), ")"), D(e));
}
function L(r, n, e) {
  return U(F(r, e), n, e);
}
function U(r, n, e) {
  e === void 0 && (e = {});
  for (var a = e.strict, u = a === void 0 ? false : a, t = e.start, c = t === void 0 ? true : t, o = e.end, m = o === void 0 ? true : o, h = e.encode, p = h === void 0 ? function(v) {
    return v;
  } : h, f = e.delimiter, w = f === void 0 ? "/#?" : f, d = e.endsWith, M = d === void 0 ? "" : d, A = "[".concat(s(M), "]|$"), T = "[".concat(s(w), "]"), x = c ? "^" : "", C = 0, g = r; C < g.length; C++) {
    var i = g[C];
    if (typeof i == "string") x += s(p(i));
    else {
      var R = s(p(i.prefix)), y = s(p(i.suffix));
      if (i.pattern)
        if (n && n.push(i), R || y)
          if (i.modifier === "+" || i.modifier === "*") {
            var O = i.modifier === "*" ? "?" : "";
            x += "(?:".concat(R, "((?:").concat(i.pattern, ")(?:").concat(y).concat(R, "(?:").concat(i.pattern, "))*)").concat(y, ")").concat(O);
          } else x += "(?:".concat(R, "(").concat(i.pattern, ")").concat(y, ")").concat(i.modifier);
        else {
          if (i.modifier === "+" || i.modifier === "*")
            throw new TypeError('Can not repeat "'.concat(i.name, '" without a prefix and suffix'));
          x += "(".concat(i.pattern, ")").concat(i.modifier);
        }
      else x += "(?:".concat(R).concat(y, ")").concat(i.modifier);
    }
  }
  if (m) u || (x += "".concat(T, "?")), x += e.endsWith ? "(?=".concat(A, ")") : "$";
  else {
    var b = r[r.length - 1], l = typeof b == "string" ? T.indexOf(b[b.length - 1]) > -1 : b === void 0;
    u || (x += "(?:".concat(T, "(?=").concat(A, "))?")), l || (x += "(?=".concat(T, "|").concat(A, ")"));
  }
  return new RegExp(x, D(e));
}
function P(r, n, e) {
  return r instanceof RegExp ? $(r, n) : Array.isArray(r) ? W(r, n, e) : L(r, n, e);
}
function match(str, options) {
  try {
    return H(str, options);
  } catch (e) {
    throw new Error(
      `Invalid path and options: Consult the documentation of path-to-regexp here: https://github.com/pillarjs/path-to-regexp/tree/6.x
${e.message}`
    );
  }
}
var API_URL = "https://api.clerk.com";
var API_VERSION = "v1";
var USER_AGENT = `${"@clerk/backend"}@${"1.31.4"}`;
var MAX_CACHE_LAST_UPDATED_AT_SECONDS = 5 * 60;
var SUPPORTED_BAPI_VERSION = "2025-04-10";
var Attributes = {
  AuthToken: "__clerkAuthToken",
  AuthSignature: "__clerkAuthSignature",
  AuthStatus: "__clerkAuthStatus",
  AuthReason: "__clerkAuthReason",
  AuthMessage: "__clerkAuthMessage",
  ClerkUrl: "__clerkUrl"
};
var Cookies = {
  Session: "__session",
  Refresh: "__refresh",
  ClientUat: "__client_uat",
  Handshake: "__clerk_handshake",
  DevBrowser: "__clerk_db_jwt",
  RedirectCount: "__clerk_redirect_count",
  HandshakeNonce: "__clerk_handshake_nonce"
};
var QueryParameters = {
  ClerkSynced: "__clerk_synced",
  SuffixedCookies: "suffixed_cookies",
  ClerkRedirectUrl: "__clerk_redirect_url",
  // use the reference to Cookies to indicate that it's the same value
  DevBrowser: Cookies.DevBrowser,
  Handshake: Cookies.Handshake,
  HandshakeHelp: "__clerk_help",
  LegacyDevBrowser: "__dev_session",
  HandshakeReason: "__clerk_hs_reason",
  HandshakeNonce: Cookies.HandshakeNonce
};
var Headers2 = {
  Accept: "accept",
  AuthMessage: "x-clerk-auth-message",
  Authorization: "authorization",
  AuthReason: "x-clerk-auth-reason",
  AuthSignature: "x-clerk-auth-signature",
  AuthStatus: "x-clerk-auth-status",
  AuthToken: "x-clerk-auth-token",
  CacheControl: "cache-control",
  ClerkRedirectTo: "x-clerk-redirect-to",
  ClerkRequestData: "x-clerk-request-data",
  ClerkUrl: "x-clerk-clerk-url",
  CloudFrontForwardedProto: "cloudfront-forwarded-proto",
  ContentType: "content-type",
  ContentSecurityPolicy: "content-security-policy",
  ContentSecurityPolicyReportOnly: "content-security-policy-report-only",
  EnableDebug: "x-clerk-debug",
  ForwardedHost: "x-forwarded-host",
  ForwardedPort: "x-forwarded-port",
  ForwardedProto: "x-forwarded-proto",
  Host: "host",
  Location: "location",
  Nonce: "x-nonce",
  Origin: "origin",
  Referrer: "referer",
  SecFetchDest: "sec-fetch-dest",
  UserAgent: "user-agent",
  ReportingEndpoints: "reporting-endpoints"
};
var ContentTypes = {
  Json: "application/json"
};
var constants = {
  Attributes,
  Cookies,
  Headers: Headers2,
  ContentTypes,
  QueryParameters
};
var SEPARATOR = "/";
var MULTIPLE_SEPARATOR_REGEX = new RegExp("(?<!:)" + SEPARATOR + "{1,}", "g");
function joinPaths(...args) {
  return args.filter((p) => p).join(SEPARATOR).replace(MULTIPLE_SEPARATOR_REGEX, SEPARATOR);
}
var AbstractAPI = class {
  constructor(request) {
    this.request = request;
  }
  requireId(id) {
    if (!id) {
      throw new Error("A valid resource ID is required.");
    }
  }
};
var basePath = "/actor_tokens";
var ActorTokenAPI = class extends AbstractAPI {
  async create(params) {
    return this.request({
      method: "POST",
      path: basePath,
      bodyParams: params
    });
  }
  async revoke(actorTokenId) {
    this.requireId(actorTokenId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath, actorTokenId, "revoke")
    });
  }
};
var basePath2 = "/accountless_applications";
var AccountlessApplicationAPI = class extends AbstractAPI {
  async createAccountlessApplication() {
    return this.request({
      method: "POST",
      path: basePath2
    });
  }
  async completeAccountlessApplicationOnboarding() {
    return this.request({
      method: "POST",
      path: joinPaths(basePath2, "complete")
    });
  }
};
var basePath3 = "/allowlist_identifiers";
var AllowlistIdentifierAPI = class extends AbstractAPI {
  async getAllowlistIdentifierList(params = {}) {
    return this.request({
      method: "GET",
      path: basePath3,
      queryParams: { ...params, paginated: true }
    });
  }
  async createAllowlistIdentifier(params) {
    return this.request({
      method: "POST",
      path: basePath3,
      bodyParams: params
    });
  }
  async deleteAllowlistIdentifier(allowlistIdentifierId) {
    this.requireId(allowlistIdentifierId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath3, allowlistIdentifierId)
    });
  }
};
var basePath4 = "/beta_features";
var BetaFeaturesAPI = class extends AbstractAPI {
  /**
   * Change the domain of a production instance.
   *
   * Changing the domain requires updating the DNS records accordingly, deploying new SSL certificates,
   * updating your Social Connection's redirect URLs and setting the new keys in your code.
   *
   * @remarks
   * WARNING: Changing your domain will invalidate all current user sessions (i.e. users will be logged out).
   *          Also, while your application is being deployed, a small downtime is expected to occur.
   */
  async changeDomain(params) {
    return this.request({
      method: "POST",
      path: joinPaths(basePath4, "change_domain"),
      bodyParams: params
    });
  }
};
var basePath5 = "/blocklist_identifiers";
var BlocklistIdentifierAPI = class extends AbstractAPI {
  async getBlocklistIdentifierList(params = {}) {
    return this.request({
      method: "GET",
      path: basePath5,
      queryParams: params
    });
  }
  async createBlocklistIdentifier(params) {
    return this.request({
      method: "POST",
      path: basePath5,
      bodyParams: params
    });
  }
  async deleteBlocklistIdentifier(blocklistIdentifierId) {
    this.requireId(blocklistIdentifierId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath5, blocklistIdentifierId)
    });
  }
};
var basePath6 = "/clients";
var ClientAPI = class extends AbstractAPI {
  async getClientList(params = {}) {
    return this.request({
      method: "GET",
      path: basePath6,
      queryParams: { ...params, paginated: true }
    });
  }
  async getClient(clientId) {
    this.requireId(clientId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath6, clientId)
    });
  }
  verifyClient(token) {
    return this.request({
      method: "POST",
      path: joinPaths(basePath6, "verify"),
      bodyParams: { token }
    });
  }
};
var basePath7 = "/domains";
var DomainAPI = class extends AbstractAPI {
  async list() {
    return this.request({
      method: "GET",
      path: basePath7
    });
  }
  async add(params) {
    return this.request({
      method: "POST",
      path: basePath7,
      bodyParams: params
    });
  }
  async update(params) {
    const { domainId, ...bodyParams } = params;
    this.requireId(domainId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath7, domainId),
      bodyParams
    });
  }
  /**
   * Deletes a satellite domain for the instance.
   * It is currently not possible to delete the instance's primary domain.
   */
  async delete(satelliteDomainId) {
    return this.deleteDomain(satelliteDomainId);
  }
  /**
   * @deprecated Use `delete` instead
   */
  async deleteDomain(satelliteDomainId) {
    this.requireId(satelliteDomainId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath7, satelliteDomainId)
    });
  }
};
var basePath8 = "/email_addresses";
var EmailAddressAPI = class extends AbstractAPI {
  async getEmailAddress(emailAddressId) {
    this.requireId(emailAddressId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath8, emailAddressId)
    });
  }
  async createEmailAddress(params) {
    return this.request({
      method: "POST",
      path: basePath8,
      bodyParams: params
    });
  }
  async updateEmailAddress(emailAddressId, params = {}) {
    this.requireId(emailAddressId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath8, emailAddressId),
      bodyParams: params
    });
  }
  async deleteEmailAddress(emailAddressId) {
    this.requireId(emailAddressId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath8, emailAddressId)
    });
  }
};
var basePath9 = "/instance";
var InstanceAPI = class extends AbstractAPI {
  async get() {
    return this.request({
      method: "GET",
      path: basePath9
    });
  }
  async update(params) {
    return this.request({
      method: "PATCH",
      path: basePath9,
      bodyParams: params
    });
  }
  async updateRestrictions(params) {
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath9, "restrictions"),
      bodyParams: params
    });
  }
  async updateOrganizationSettings(params) {
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath9, "organization_settings"),
      bodyParams: params
    });
  }
};
var basePath10 = "/invitations";
var InvitationAPI = class extends AbstractAPI {
  async getInvitationList(params = {}) {
    return this.request({
      method: "GET",
      path: basePath10,
      queryParams: { ...params, paginated: true }
    });
  }
  async createInvitation(params) {
    return this.request({
      method: "POST",
      path: basePath10,
      bodyParams: params
    });
  }
  async revokeInvitation(invitationId) {
    this.requireId(invitationId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath10, invitationId, "revoke")
    });
  }
};
var basePath11 = "/jwks";
var JwksAPI = class extends AbstractAPI {
  async getJwks() {
    return this.request({
      method: "GET",
      path: basePath11
    });
  }
};
var basePath12 = "/jwt_templates";
var JwtTemplatesApi = class extends AbstractAPI {
  async list(params = {}) {
    return this.request({
      method: "GET",
      path: basePath12,
      queryParams: { ...params, paginated: true }
    });
  }
  async get(templateId) {
    this.requireId(templateId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath12, templateId)
    });
  }
  async create(params) {
    return this.request({
      method: "POST",
      path: basePath12,
      bodyParams: params
    });
  }
  async update(params) {
    const { templateId, ...bodyParams } = params;
    this.requireId(templateId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath12, templateId),
      bodyParams
    });
  }
  async delete(templateId) {
    this.requireId(templateId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath12, templateId)
    });
  }
};
var basePath13 = "/organizations";
var OrganizationAPI = class extends AbstractAPI {
  async getOrganizationList(params) {
    return this.request({
      method: "GET",
      path: basePath13,
      queryParams: params
    });
  }
  async createOrganization(params) {
    return this.request({
      method: "POST",
      path: basePath13,
      bodyParams: params
    });
  }
  async getOrganization(params) {
    const { includeMembersCount } = params;
    const organizationIdOrSlug = "organizationId" in params ? params.organizationId : params.slug;
    this.requireId(organizationIdOrSlug);
    return this.request({
      method: "GET",
      path: joinPaths(basePath13, organizationIdOrSlug),
      queryParams: {
        includeMembersCount
      }
    });
  }
  async updateOrganization(organizationId, params) {
    this.requireId(organizationId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath13, organizationId),
      bodyParams: params
    });
  }
  async updateOrganizationLogo(organizationId, params) {
    this.requireId(organizationId);
    const formData = new runtime.FormData();
    formData.append("file", params?.file);
    if (params?.uploaderUserId) {
      formData.append("uploader_user_id", params?.uploaderUserId);
    }
    return this.request({
      method: "PUT",
      path: joinPaths(basePath13, organizationId, "logo"),
      formData
    });
  }
  async deleteOrganizationLogo(organizationId) {
    this.requireId(organizationId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath13, organizationId, "logo")
    });
  }
  async updateOrganizationMetadata(organizationId, params) {
    this.requireId(organizationId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath13, organizationId, "metadata"),
      bodyParams: params
    });
  }
  async deleteOrganization(organizationId) {
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath13, organizationId)
    });
  }
  async getOrganizationMembershipList(params) {
    const { organizationId, ...queryParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath13, organizationId, "memberships"),
      queryParams
    });
  }
  async createOrganizationMembership(params) {
    const { organizationId, ...bodyParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath13, organizationId, "memberships"),
      bodyParams
    });
  }
  async updateOrganizationMembership(params) {
    const { organizationId, userId, ...bodyParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath13, organizationId, "memberships", userId),
      bodyParams
    });
  }
  async updateOrganizationMembershipMetadata(params) {
    const { organizationId, userId, ...bodyParams } = params;
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath13, organizationId, "memberships", userId, "metadata"),
      bodyParams
    });
  }
  async deleteOrganizationMembership(params) {
    const { organizationId, userId } = params;
    this.requireId(organizationId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath13, organizationId, "memberships", userId)
    });
  }
  async getOrganizationInvitationList(params) {
    const { organizationId, ...queryParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath13, organizationId, "invitations"),
      queryParams
    });
  }
  async createOrganizationInvitation(params) {
    const { organizationId, ...bodyParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath13, organizationId, "invitations"),
      bodyParams
    });
  }
  async getOrganizationInvitation(params) {
    const { organizationId, invitationId } = params;
    this.requireId(organizationId);
    this.requireId(invitationId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath13, organizationId, "invitations", invitationId)
    });
  }
  async revokeOrganizationInvitation(params) {
    const { organizationId, invitationId, ...bodyParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath13, organizationId, "invitations", invitationId, "revoke"),
      bodyParams
    });
  }
  async getOrganizationDomainList(params) {
    const { organizationId, ...queryParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath13, organizationId, "domains"),
      queryParams
    });
  }
  async createOrganizationDomain(params) {
    const { organizationId, ...bodyParams } = params;
    this.requireId(organizationId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath13, organizationId, "domains"),
      bodyParams: {
        ...bodyParams,
        verified: bodyParams.verified ?? true
      }
    });
  }
  async updateOrganizationDomain(params) {
    const { organizationId, domainId, ...bodyParams } = params;
    this.requireId(organizationId);
    this.requireId(domainId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath13, organizationId, "domains", domainId),
      bodyParams
    });
  }
  async deleteOrganizationDomain(params) {
    const { organizationId, domainId } = params;
    this.requireId(organizationId);
    this.requireId(domainId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath13, organizationId, "domains", domainId)
    });
  }
};
var basePath14 = "/oauth_applications";
var OAuthApplicationsApi = class extends AbstractAPI {
  async list(params = {}) {
    return this.request({
      method: "GET",
      path: basePath14,
      queryParams: params
    });
  }
  async get(oauthApplicationId) {
    this.requireId(oauthApplicationId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath14, oauthApplicationId)
    });
  }
  async create(params) {
    return this.request({
      method: "POST",
      path: basePath14,
      bodyParams: params
    });
  }
  async update(params) {
    const { oauthApplicationId, ...bodyParams } = params;
    this.requireId(oauthApplicationId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath14, oauthApplicationId),
      bodyParams
    });
  }
  async delete(oauthApplicationId) {
    this.requireId(oauthApplicationId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath14, oauthApplicationId)
    });
  }
  async rotateSecret(oauthApplicationId) {
    this.requireId(oauthApplicationId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath14, oauthApplicationId, "rotate_secret")
    });
  }
};
var basePath15 = "/phone_numbers";
var PhoneNumberAPI = class extends AbstractAPI {
  async getPhoneNumber(phoneNumberId) {
    this.requireId(phoneNumberId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath15, phoneNumberId)
    });
  }
  async createPhoneNumber(params) {
    return this.request({
      method: "POST",
      path: basePath15,
      bodyParams: params
    });
  }
  async updatePhoneNumber(phoneNumberId, params = {}) {
    this.requireId(phoneNumberId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath15, phoneNumberId),
      bodyParams: params
    });
  }
  async deletePhoneNumber(phoneNumberId) {
    this.requireId(phoneNumberId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath15, phoneNumberId)
    });
  }
};
var basePath16 = "/proxy_checks";
var ProxyCheckAPI = class extends AbstractAPI {
  async verify(params) {
    return this.request({
      method: "POST",
      path: basePath16,
      bodyParams: params
    });
  }
};
var basePath17 = "/redirect_urls";
var RedirectUrlAPI = class extends AbstractAPI {
  async getRedirectUrlList() {
    return this.request({
      method: "GET",
      path: basePath17,
      queryParams: { paginated: true }
    });
  }
  async getRedirectUrl(redirectUrlId) {
    this.requireId(redirectUrlId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath17, redirectUrlId)
    });
  }
  async createRedirectUrl(params) {
    return this.request({
      method: "POST",
      path: basePath17,
      bodyParams: params
    });
  }
  async deleteRedirectUrl(redirectUrlId) {
    this.requireId(redirectUrlId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath17, redirectUrlId)
    });
  }
};
var basePath18 = "/saml_connections";
var SamlConnectionAPI = class extends AbstractAPI {
  async getSamlConnectionList(params = {}) {
    return this.request({
      method: "GET",
      path: basePath18,
      queryParams: params
    });
  }
  async createSamlConnection(params) {
    return this.request({
      method: "POST",
      path: basePath18,
      bodyParams: params
    });
  }
  async getSamlConnection(samlConnectionId) {
    this.requireId(samlConnectionId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath18, samlConnectionId)
    });
  }
  async updateSamlConnection(samlConnectionId, params = {}) {
    this.requireId(samlConnectionId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath18, samlConnectionId),
      bodyParams: params
    });
  }
  async deleteSamlConnection(samlConnectionId) {
    this.requireId(samlConnectionId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath18, samlConnectionId)
    });
  }
};
var basePath19 = "/sessions";
var SessionAPI = class extends AbstractAPI {
  async getSessionList(params = {}) {
    return this.request({
      method: "GET",
      path: basePath19,
      queryParams: { ...params, paginated: true }
    });
  }
  async getSession(sessionId) {
    this.requireId(sessionId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath19, sessionId)
    });
  }
  async createSession(params) {
    return this.request({
      method: "POST",
      path: basePath19,
      bodyParams: params
    });
  }
  async revokeSession(sessionId) {
    this.requireId(sessionId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath19, sessionId, "revoke")
    });
  }
  async verifySession(sessionId, token) {
    this.requireId(sessionId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath19, sessionId, "verify"),
      bodyParams: { token }
    });
  }
  async getToken(sessionId, template) {
    this.requireId(sessionId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath19, sessionId, "tokens", template || "")
    });
  }
  async refreshSession(sessionId, params) {
    this.requireId(sessionId);
    const { suffixed_cookies, ...restParams } = params;
    return this.request({
      method: "POST",
      path: joinPaths(basePath19, sessionId, "refresh"),
      bodyParams: restParams,
      queryParams: { suffixed_cookies }
    });
  }
};
var basePath20 = "/sign_in_tokens";
var SignInTokenAPI = class extends AbstractAPI {
  async createSignInToken(params) {
    return this.request({
      method: "POST",
      path: basePath20,
      bodyParams: params
    });
  }
  async revokeSignInToken(signInTokenId) {
    this.requireId(signInTokenId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath20, signInTokenId, "revoke")
    });
  }
};
var basePath21 = "/sign_ups";
var SignUpAPI = class extends AbstractAPI {
  async get(signUpAttemptId) {
    this.requireId(signUpAttemptId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath21, signUpAttemptId)
    });
  }
  async update(params) {
    const { signUpAttemptId, ...bodyParams } = params;
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath21, signUpAttemptId),
      bodyParams
    });
  }
};
var basePath22 = "/testing_tokens";
var TestingTokenAPI = class extends AbstractAPI {
  async createTestingToken() {
    return this.request({
      method: "POST",
      path: basePath22
    });
  }
};
var basePath23 = "/users";
var UserAPI = class extends AbstractAPI {
  async getUserList(params = {}) {
    const { limit, offset, orderBy, ...userCountParams } = params;
    const [data, totalCount] = await Promise.all([
      this.request({
        method: "GET",
        path: basePath23,
        queryParams: params
      }),
      this.getCount(userCountParams)
    ]);
    return { data, totalCount };
  }
  async getUser(userId) {
    this.requireId(userId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath23, userId)
    });
  }
  async createUser(params) {
    return this.request({
      method: "POST",
      path: basePath23,
      bodyParams: params
    });
  }
  async updateUser(userId, params = {}) {
    this.requireId(userId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath23, userId),
      bodyParams: params
    });
  }
  async updateUserProfileImage(userId, params) {
    this.requireId(userId);
    const formData = new runtime.FormData();
    formData.append("file", params?.file);
    return this.request({
      method: "POST",
      path: joinPaths(basePath23, userId, "profile_image"),
      formData
    });
  }
  async updateUserMetadata(userId, params) {
    this.requireId(userId);
    return this.request({
      method: "PATCH",
      path: joinPaths(basePath23, userId, "metadata"),
      bodyParams: params
    });
  }
  async deleteUser(userId) {
    this.requireId(userId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath23, userId)
    });
  }
  async getCount(params = {}) {
    return this.request({
      method: "GET",
      path: joinPaths(basePath23, "count"),
      queryParams: params
    });
  }
  async getUserOauthAccessToken(userId, provider) {
    this.requireId(userId);
    const hasPrefix = provider.startsWith("oauth_");
    const _provider = hasPrefix ? provider : `oauth_${provider}`;
    if (hasPrefix) {
      deprecated(
        "getUserOauthAccessToken(userId, provider)",
        "Remove the `oauth_` prefix from the `provider` argument."
      );
    }
    return this.request({
      method: "GET",
      path: joinPaths(basePath23, userId, "oauth_access_tokens", _provider),
      queryParams: { paginated: true }
    });
  }
  async disableUserMFA(userId) {
    this.requireId(userId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath23, userId, "mfa")
    });
  }
  async getOrganizationMembershipList(params) {
    const { userId, limit, offset } = params;
    this.requireId(userId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath23, userId, "organization_memberships"),
      queryParams: { limit, offset }
    });
  }
  async getOrganizationInvitationList(params) {
    const { userId, ...queryParams } = params;
    this.requireId(userId);
    return this.request({
      method: "GET",
      path: joinPaths(basePath23, userId, "organization_invitations"),
      queryParams
    });
  }
  async verifyPassword(params) {
    const { userId, password } = params;
    this.requireId(userId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath23, userId, "verify_password"),
      bodyParams: { password }
    });
  }
  async verifyTOTP(params) {
    const { userId, code } = params;
    this.requireId(userId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath23, userId, "verify_totp"),
      bodyParams: { code }
    });
  }
  async banUser(userId) {
    this.requireId(userId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath23, userId, "ban")
    });
  }
  async unbanUser(userId) {
    this.requireId(userId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath23, userId, "unban")
    });
  }
  async lockUser(userId) {
    this.requireId(userId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath23, userId, "lock")
    });
  }
  async unlockUser(userId) {
    this.requireId(userId);
    return this.request({
      method: "POST",
      path: joinPaths(basePath23, userId, "unlock")
    });
  }
  async deleteUserProfileImage(userId) {
    this.requireId(userId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath23, userId, "profile_image")
    });
  }
  async deleteUserPasskey(params) {
    this.requireId(params.userId);
    this.requireId(params.passkeyIdentificationId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath23, params.userId, "passkeys", params.passkeyIdentificationId)
    });
  }
  async deleteUserWeb3Wallet(params) {
    this.requireId(params.userId);
    this.requireId(params.web3WalletIdentificationId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath23, params.userId, "web3_wallets", params.web3WalletIdentificationId)
    });
  }
  async deleteUserExternalAccount(params) {
    this.requireId(params.userId);
    this.requireId(params.externalAccountId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath23, params.userId, "external_accounts", params.externalAccountId)
    });
  }
  async deleteUserBackupCodes(userId) {
    this.requireId(userId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath23, userId, "backup_code")
    });
  }
  async deleteUserTOTP(userId) {
    this.requireId(userId);
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath23, userId, "totp")
    });
  }
};
var basePath24 = "/waitlist_entries";
var WaitlistEntryAPI = class extends AbstractAPI {
  async list(params = {}) {
    return this.request({
      method: "GET",
      path: basePath24,
      queryParams: params
    });
  }
  async create(params) {
    return this.request({
      method: "POST",
      path: basePath24,
      bodyParams: params
    });
  }
};
var basePath25 = "/webhooks";
var WebhookAPI = class extends AbstractAPI {
  async createSvixApp() {
    return this.request({
      method: "POST",
      path: joinPaths(basePath25, "svix")
    });
  }
  async generateSvixAuthURL() {
    return this.request({
      method: "POST",
      path: joinPaths(basePath25, "svix_url")
    });
  }
  async deleteSvixApp() {
    return this.request({
      method: "DELETE",
      path: joinPaths(basePath25, "svix")
    });
  }
};
function assertValidSecretKey(val) {
  if (!val || typeof val !== "string") {
    throw Error("Missing Clerk Secret Key. Go to https://dashboard.clerk.com and get your key for your instance.");
  }
}
function assertValidPublishableKey(val) {
  parsePublishableKey(val, { fatal: true });
}
var ActorToken = class _ActorToken {
  constructor(id, status, userId, actor, token, url, createdAt, updatedAt) {
    this.id = id;
    this.status = status;
    this.userId = userId;
    this.actor = actor;
    this.token = token;
    this.url = url;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _ActorToken(
      data.id,
      data.status,
      data.user_id,
      data.actor,
      data.token,
      data.url,
      data.created_at,
      data.updated_at
    );
  }
};
var AccountlessApplication = class _AccountlessApplication {
  constructor(publishableKey, secretKey, claimUrl, apiKeysUrl) {
    this.publishableKey = publishableKey;
    this.secretKey = secretKey;
    this.claimUrl = claimUrl;
    this.apiKeysUrl = apiKeysUrl;
  }
  static fromJSON(data) {
    return new _AccountlessApplication(data.publishable_key, data.secret_key, data.claim_url, data.api_keys_url);
  }
};
var AllowlistIdentifier = class _AllowlistIdentifier {
  constructor(id, identifier, identifierType, createdAt, updatedAt, instanceId, invitationId) {
    this.id = id;
    this.identifier = identifier;
    this.identifierType = identifierType;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.instanceId = instanceId;
    this.invitationId = invitationId;
  }
  static fromJSON(data) {
    return new _AllowlistIdentifier(
      data.id,
      data.identifier,
      data.identifier_type,
      data.created_at,
      data.updated_at,
      data.instance_id,
      data.invitation_id
    );
  }
};
var BlocklistIdentifier = class _BlocklistIdentifier {
  constructor(id, identifier, identifierType, createdAt, updatedAt, instanceId) {
    this.id = id;
    this.identifier = identifier;
    this.identifierType = identifierType;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.instanceId = instanceId;
  }
  static fromJSON(data) {
    return new _BlocklistIdentifier(
      data.id,
      data.identifier,
      data.identifier_type,
      data.created_at,
      data.updated_at,
      data.instance_id
    );
  }
};
var SessionActivity = class _SessionActivity {
  constructor(id, isMobile, ipAddress, city, country, browserVersion, browserName, deviceType) {
    this.id = id;
    this.isMobile = isMobile;
    this.ipAddress = ipAddress;
    this.city = city;
    this.country = country;
    this.browserVersion = browserVersion;
    this.browserName = browserName;
    this.deviceType = deviceType;
  }
  static fromJSON(data) {
    return new _SessionActivity(
      data.id,
      data.is_mobile,
      data.ip_address,
      data.city,
      data.country,
      data.browser_version,
      data.browser_name,
      data.device_type
    );
  }
};
var Session = class _Session {
  constructor(id, clientId, userId, status, lastActiveAt, expireAt, abandonAt, createdAt, updatedAt, lastActiveOrganizationId, latestActivity, actor = null) {
    this.id = id;
    this.clientId = clientId;
    this.userId = userId;
    this.status = status;
    this.lastActiveAt = lastActiveAt;
    this.expireAt = expireAt;
    this.abandonAt = abandonAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.lastActiveOrganizationId = lastActiveOrganizationId;
    this.latestActivity = latestActivity;
    this.actor = actor;
  }
  static fromJSON(data) {
    return new _Session(
      data.id,
      data.client_id,
      data.user_id,
      data.status,
      data.last_active_at,
      data.expire_at,
      data.abandon_at,
      data.created_at,
      data.updated_at,
      data.last_active_organization_id,
      data.latest_activity && SessionActivity.fromJSON(data.latest_activity),
      data.actor
    );
  }
};
var Client = class _Client {
  constructor(id, sessionIds, sessions, signInId, signUpId, lastActiveSessionId, createdAt, updatedAt) {
    this.id = id;
    this.sessionIds = sessionIds;
    this.sessions = sessions;
    this.signInId = signInId;
    this.signUpId = signUpId;
    this.lastActiveSessionId = lastActiveSessionId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _Client(
      data.id,
      data.session_ids,
      data.sessions.map((x) => Session.fromJSON(x)),
      data.sign_in_id,
      data.sign_up_id,
      data.last_active_session_id,
      data.created_at,
      data.updated_at
    );
  }
};
var CnameTarget = class _CnameTarget {
  constructor(host, value, required) {
    this.host = host;
    this.value = value;
    this.required = required;
  }
  static fromJSON(data) {
    return new _CnameTarget(data.host, data.value, data.required);
  }
};
var Cookies2 = class _Cookies {
  constructor(cookies) {
    this.cookies = cookies;
  }
  static fromJSON(data) {
    return new _Cookies(data.cookies);
  }
};
var DeletedObject = class _DeletedObject {
  constructor(object, id, slug, deleted) {
    this.object = object;
    this.id = id;
    this.slug = slug;
    this.deleted = deleted;
  }
  static fromJSON(data) {
    return new _DeletedObject(data.object, data.id || null, data.slug || null, data.deleted);
  }
};
var Domain = class _Domain {
  constructor(id, name, isSatellite, frontendApiUrl, developmentOrigin, cnameTargets, accountsPortalUrl, proxyUrl) {
    this.id = id;
    this.name = name;
    this.isSatellite = isSatellite;
    this.frontendApiUrl = frontendApiUrl;
    this.developmentOrigin = developmentOrigin;
    this.cnameTargets = cnameTargets;
    this.accountsPortalUrl = accountsPortalUrl;
    this.proxyUrl = proxyUrl;
  }
  static fromJSON(data) {
    return new _Domain(
      data.id,
      data.name,
      data.is_satellite,
      data.frontend_api_url,
      data.development_origin,
      data.cname_targets && data.cname_targets.map((x) => CnameTarget.fromJSON(x)),
      data.accounts_portal_url,
      data.proxy_url
    );
  }
};
var Email = class _Email {
  constructor(id, fromEmailName, emailAddressId, toEmailAddress, subject, body, bodyPlain, status, slug, data, deliveredByClerk) {
    this.id = id;
    this.fromEmailName = fromEmailName;
    this.emailAddressId = emailAddressId;
    this.toEmailAddress = toEmailAddress;
    this.subject = subject;
    this.body = body;
    this.bodyPlain = bodyPlain;
    this.status = status;
    this.slug = slug;
    this.data = data;
    this.deliveredByClerk = deliveredByClerk;
  }
  static fromJSON(data) {
    return new _Email(
      data.id,
      data.from_email_name,
      data.email_address_id,
      data.to_email_address,
      data.subject,
      data.body,
      data.body_plain,
      data.status,
      data.slug,
      data.data,
      data.delivered_by_clerk
    );
  }
};
var IdentificationLink = class _IdentificationLink {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }
  static fromJSON(data) {
    return new _IdentificationLink(data.id, data.type);
  }
};
var Verification = class _Verification {
  constructor(status, strategy, externalVerificationRedirectURL = null, attempts = null, expireAt = null, nonce = null, message = null) {
    this.status = status;
    this.strategy = strategy;
    this.externalVerificationRedirectURL = externalVerificationRedirectURL;
    this.attempts = attempts;
    this.expireAt = expireAt;
    this.nonce = nonce;
    this.message = message;
  }
  static fromJSON(data) {
    return new _Verification(
      data.status,
      data.strategy,
      data.external_verification_redirect_url ? new URL(data.external_verification_redirect_url) : null,
      data.attempts,
      data.expire_at,
      data.nonce
    );
  }
};
var EmailAddress = class _EmailAddress {
  constructor(id, emailAddress, verification, linkedTo) {
    this.id = id;
    this.emailAddress = emailAddress;
    this.verification = verification;
    this.linkedTo = linkedTo;
  }
  static fromJSON(data) {
    return new _EmailAddress(
      data.id,
      data.email_address,
      data.verification && Verification.fromJSON(data.verification),
      data.linked_to.map((link) => IdentificationLink.fromJSON(link))
    );
  }
};
var ExternalAccount = class _ExternalAccount {
  constructor(id, provider, identificationId, externalId, approvedScopes, emailAddress, firstName, lastName, imageUrl, username, phoneNumber, publicMetadata = {}, label, verification) {
    this.id = id;
    this.provider = provider;
    this.identificationId = identificationId;
    this.externalId = externalId;
    this.approvedScopes = approvedScopes;
    this.emailAddress = emailAddress;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageUrl = imageUrl;
    this.username = username;
    this.phoneNumber = phoneNumber;
    this.publicMetadata = publicMetadata;
    this.label = label;
    this.verification = verification;
  }
  static fromJSON(data) {
    return new _ExternalAccount(
      data.id,
      data.provider,
      data.identification_id,
      data.provider_user_id,
      data.approved_scopes,
      data.email_address,
      data.first_name,
      data.last_name,
      data.image_url || "",
      data.username,
      data.phone_number,
      data.public_metadata,
      data.label,
      data.verification && Verification.fromJSON(data.verification)
    );
  }
};
var Instance = class _Instance {
  constructor(id, environmentType, allowedOrigins) {
    this.id = id;
    this.environmentType = environmentType;
    this.allowedOrigins = allowedOrigins;
  }
  static fromJSON(data) {
    return new _Instance(data.id, data.environment_type, data.allowed_origins);
  }
};
var InstanceRestrictions = class _InstanceRestrictions {
  constructor(allowlist, blocklist, blockEmailSubaddresses, blockDisposableEmailDomains, ignoreDotsForGmailAddresses) {
    this.allowlist = allowlist;
    this.blocklist = blocklist;
    this.blockEmailSubaddresses = blockEmailSubaddresses;
    this.blockDisposableEmailDomains = blockDisposableEmailDomains;
    this.ignoreDotsForGmailAddresses = ignoreDotsForGmailAddresses;
  }
  static fromJSON(data) {
    return new _InstanceRestrictions(
      data.allowlist,
      data.blocklist,
      data.block_email_subaddresses,
      data.block_disposable_email_domains,
      data.ignore_dots_for_gmail_addresses
    );
  }
};
var InstanceSettings = class _InstanceSettings {
  constructor(id, restrictedToAllowlist, fromEmailAddress, progressiveSignUp, enhancedEmailDeliverability) {
    this.id = id;
    this.restrictedToAllowlist = restrictedToAllowlist;
    this.fromEmailAddress = fromEmailAddress;
    this.progressiveSignUp = progressiveSignUp;
    this.enhancedEmailDeliverability = enhancedEmailDeliverability;
  }
  static fromJSON(data) {
    return new _InstanceSettings(
      data.id,
      data.restricted_to_allowlist,
      data.from_email_address,
      data.progressive_sign_up,
      data.enhanced_email_deliverability
    );
  }
};
var Invitation = class _Invitation {
  constructor(id, emailAddress, publicMetadata, createdAt, updatedAt, status, url, revoked) {
    this.id = id;
    this.emailAddress = emailAddress;
    this.publicMetadata = publicMetadata;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.status = status;
    this.url = url;
    this.revoked = revoked;
    this._raw = null;
  }
  get raw() {
    return this._raw;
  }
  static fromJSON(data) {
    const res = new _Invitation(
      data.id,
      data.email_address,
      data.public_metadata,
      data.created_at,
      data.updated_at,
      data.status,
      data.url,
      data.revoked
    );
    res._raw = data;
    return res;
  }
};
var ObjectType = {
  AccountlessApplication: "accountless_application",
  ActorToken: "actor_token",
  AllowlistIdentifier: "allowlist_identifier",
  BlocklistIdentifier: "blocklist_identifier",
  Client: "client",
  Cookies: "cookies",
  Domain: "domain",
  Email: "email",
  EmailAddress: "email_address",
  Instance: "instance",
  InstanceRestrictions: "instance_restrictions",
  InstanceSettings: "instance_settings",
  Invitation: "invitation",
  JwtTemplate: "jwt_template",
  OauthAccessToken: "oauth_access_token",
  OAuthApplication: "oauth_application",
  Organization: "organization",
  OrganizationInvitation: "organization_invitation",
  OrganizationMembership: "organization_membership",
  OrganizationSettings: "organization_settings",
  PhoneNumber: "phone_number",
  ProxyCheck: "proxy_check",
  RedirectUrl: "redirect_url",
  Session: "session",
  SignInToken: "sign_in_token",
  SignUpAttempt: "sign_up_attempt",
  SmsMessage: "sms_message",
  User: "user",
  WaitlistEntry: "waitlist_entry",
  Token: "token",
  TotalCount: "total_count"
};
var JwtTemplate = class _JwtTemplate {
  constructor(id, name, claims, lifetime, allowedClockSkew, customSigningKey, signingAlgorithm, createdAt, updatedAt) {
    this.id = id;
    this.name = name;
    this.claims = claims;
    this.lifetime = lifetime;
    this.allowedClockSkew = allowedClockSkew;
    this.customSigningKey = customSigningKey;
    this.signingAlgorithm = signingAlgorithm;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _JwtTemplate(
      data.id,
      data.name,
      data.claims,
      data.lifetime,
      data.allowed_clock_skew,
      data.custom_signing_key,
      data.signing_algorithm,
      data.created_at,
      data.updated_at
    );
  }
};
var OauthAccessToken = class _OauthAccessToken {
  constructor(externalAccountId, provider, token, publicMetadata = {}, label, scopes, tokenSecret, expiresAt) {
    this.externalAccountId = externalAccountId;
    this.provider = provider;
    this.token = token;
    this.publicMetadata = publicMetadata;
    this.label = label;
    this.scopes = scopes;
    this.tokenSecret = tokenSecret;
    this.expiresAt = expiresAt;
  }
  static fromJSON(data) {
    return new _OauthAccessToken(
      data.external_account_id,
      data.provider,
      data.token,
      data.public_metadata,
      data.label || "",
      data.scopes,
      data.token_secret,
      data.expires_at
    );
  }
};
var OAuthApplication = class _OAuthApplication {
  constructor(id, instanceId, name, clientId, isPublic, scopes, redirectUris, authorizeUrl, tokenFetchUrl, userInfoUrl, discoveryUrl, tokenIntrospectionUrl, createdAt, updatedAt, clientSecret) {
    this.id = id;
    this.instanceId = instanceId;
    this.name = name;
    this.clientId = clientId;
    this.isPublic = isPublic;
    this.scopes = scopes;
    this.redirectUris = redirectUris;
    this.authorizeUrl = authorizeUrl;
    this.tokenFetchUrl = tokenFetchUrl;
    this.userInfoUrl = userInfoUrl;
    this.discoveryUrl = discoveryUrl;
    this.tokenIntrospectionUrl = tokenIntrospectionUrl;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.clientSecret = clientSecret;
  }
  static fromJSON(data) {
    return new _OAuthApplication(
      data.id,
      data.instance_id,
      data.name,
      data.client_id,
      data.public,
      data.scopes,
      data.redirect_uris,
      data.authorize_url,
      data.token_fetch_url,
      data.user_info_url,
      data.discovery_url,
      data.token_introspection_url,
      data.created_at,
      data.updated_at,
      data.client_secret
    );
  }
};
var Organization = class _Organization {
  constructor(id, name, slug, imageUrl, hasImage, createdAt, updatedAt, publicMetadata = {}, privateMetadata = {}, maxAllowedMemberships, adminDeleteEnabled, membersCount, createdBy) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.imageUrl = imageUrl;
    this.hasImage = hasImage;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.publicMetadata = publicMetadata;
    this.privateMetadata = privateMetadata;
    this.maxAllowedMemberships = maxAllowedMemberships;
    this.adminDeleteEnabled = adminDeleteEnabled;
    this.membersCount = membersCount;
    this.createdBy = createdBy;
    this._raw = null;
  }
  get raw() {
    return this._raw;
  }
  static fromJSON(data) {
    const res = new _Organization(
      data.id,
      data.name,
      data.slug,
      data.image_url || "",
      data.has_image,
      data.created_at,
      data.updated_at,
      data.public_metadata,
      data.private_metadata,
      data.max_allowed_memberships,
      data.admin_delete_enabled,
      data.members_count,
      data.created_by
    );
    res._raw = data;
    return res;
  }
};
var OrganizationInvitation = class _OrganizationInvitation {
  constructor(id, emailAddress, role, roleName, organizationId, createdAt, updatedAt, expiresAt, url, status, publicMetadata = {}, privateMetadata = {}, publicOrganizationData) {
    this.id = id;
    this.emailAddress = emailAddress;
    this.role = role;
    this.roleName = roleName;
    this.organizationId = organizationId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.expiresAt = expiresAt;
    this.url = url;
    this.status = status;
    this.publicMetadata = publicMetadata;
    this.privateMetadata = privateMetadata;
    this.publicOrganizationData = publicOrganizationData;
    this._raw = null;
  }
  get raw() {
    return this._raw;
  }
  static fromJSON(data) {
    const res = new _OrganizationInvitation(
      data.id,
      data.email_address,
      data.role,
      data.role_name,
      data.organization_id,
      data.created_at,
      data.updated_at,
      data.expires_at,
      data.url,
      data.status,
      data.public_metadata,
      data.private_metadata,
      data.public_organization_data
    );
    res._raw = data;
    return res;
  }
};
var OrganizationMembership = class _OrganizationMembership {
  constructor(id, role, permissions, publicMetadata = {}, privateMetadata = {}, createdAt, updatedAt, organization, publicUserData) {
    this.id = id;
    this.role = role;
    this.permissions = permissions;
    this.publicMetadata = publicMetadata;
    this.privateMetadata = privateMetadata;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.organization = organization;
    this.publicUserData = publicUserData;
    this._raw = null;
  }
  get raw() {
    return this._raw;
  }
  static fromJSON(data) {
    const res = new _OrganizationMembership(
      data.id,
      data.role,
      data.permissions,
      data.public_metadata,
      data.private_metadata,
      data.created_at,
      data.updated_at,
      Organization.fromJSON(data.organization),
      OrganizationMembershipPublicUserData.fromJSON(data.public_user_data)
    );
    res._raw = data;
    return res;
  }
};
var OrganizationMembershipPublicUserData = class _OrganizationMembershipPublicUserData {
  constructor(identifier, firstName, lastName, imageUrl, hasImage, userId) {
    this.identifier = identifier;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageUrl = imageUrl;
    this.hasImage = hasImage;
    this.userId = userId;
  }
  static fromJSON(data) {
    return new _OrganizationMembershipPublicUserData(
      data.identifier,
      data.first_name,
      data.last_name,
      data.image_url,
      data.has_image,
      data.user_id
    );
  }
};
var OrganizationSettings = class _OrganizationSettings {
  constructor(enabled, maxAllowedMemberships, maxAllowedRoles, maxAllowedPermissions, creatorRole, adminDeleteEnabled, domainsEnabled, domainsEnrollmentModes, domainsDefaultRole) {
    this.enabled = enabled;
    this.maxAllowedMemberships = maxAllowedMemberships;
    this.maxAllowedRoles = maxAllowedRoles;
    this.maxAllowedPermissions = maxAllowedPermissions;
    this.creatorRole = creatorRole;
    this.adminDeleteEnabled = adminDeleteEnabled;
    this.domainsEnabled = domainsEnabled;
    this.domainsEnrollmentModes = domainsEnrollmentModes;
    this.domainsDefaultRole = domainsDefaultRole;
  }
  static fromJSON(data) {
    return new _OrganizationSettings(
      data.enabled,
      data.max_allowed_memberships,
      data.max_allowed_roles,
      data.max_allowed_permissions,
      data.creator_role,
      data.admin_delete_enabled,
      data.domains_enabled,
      data.domains_enrollment_modes,
      data.domains_default_role
    );
  }
};
var PhoneNumber = class _PhoneNumber {
  constructor(id, phoneNumber, reservedForSecondFactor, defaultSecondFactor, verification, linkedTo) {
    this.id = id;
    this.phoneNumber = phoneNumber;
    this.reservedForSecondFactor = reservedForSecondFactor;
    this.defaultSecondFactor = defaultSecondFactor;
    this.verification = verification;
    this.linkedTo = linkedTo;
  }
  static fromJSON(data) {
    return new _PhoneNumber(
      data.id,
      data.phone_number,
      data.reserved_for_second_factor,
      data.default_second_factor,
      data.verification && Verification.fromJSON(data.verification),
      data.linked_to.map((link) => IdentificationLink.fromJSON(link))
    );
  }
};
var ProxyCheck = class _ProxyCheck {
  constructor(id, domainId, lastRunAt, proxyUrl, successful, createdAt, updatedAt) {
    this.id = id;
    this.domainId = domainId;
    this.lastRunAt = lastRunAt;
    this.proxyUrl = proxyUrl;
    this.successful = successful;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _ProxyCheck(
      data.id,
      data.domain_id,
      data.last_run_at,
      data.proxy_url,
      data.successful,
      data.created_at,
      data.updated_at
    );
  }
};
var RedirectUrl = class _RedirectUrl {
  constructor(id, url, createdAt, updatedAt) {
    this.id = id;
    this.url = url;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _RedirectUrl(data.id, data.url, data.created_at, data.updated_at);
  }
};
var SignInToken = class _SignInToken {
  constructor(id, userId, token, status, url, createdAt, updatedAt) {
    this.id = id;
    this.userId = userId;
    this.token = token;
    this.status = status;
    this.url = url;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _SignInToken(data.id, data.user_id, data.token, data.status, data.url, data.created_at, data.updated_at);
  }
};
var SignUpAttemptVerification = class _SignUpAttemptVerification {
  constructor(nextAction, supportedStrategies) {
    this.nextAction = nextAction;
    this.supportedStrategies = supportedStrategies;
  }
  static fromJSON(data) {
    return new _SignUpAttemptVerification(data.next_action, data.supported_strategies);
  }
};
var SignUpAttemptVerifications = class _SignUpAttemptVerifications {
  constructor(emailAddress, phoneNumber, web3Wallet, externalAccount) {
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
    this.web3Wallet = web3Wallet;
    this.externalAccount = externalAccount;
  }
  static fromJSON(data) {
    return new _SignUpAttemptVerifications(
      data.email_address && SignUpAttemptVerification.fromJSON(data.email_address),
      data.phone_number && SignUpAttemptVerification.fromJSON(data.phone_number),
      data.web3_wallet && SignUpAttemptVerification.fromJSON(data.web3_wallet),
      data.external_account
    );
  }
};
var SignUpAttempt = class _SignUpAttempt {
  constructor(id, status, requiredFields, optionalFields, missingFields, unverifiedFields, verifications, username, emailAddress, phoneNumber, web3Wallet, passwordEnabled, firstName, lastName, customAction, externalId, createdSessionId, createdUserId, abandonAt, legalAcceptedAt, publicMetadata, unsafeMetadata) {
    this.id = id;
    this.status = status;
    this.requiredFields = requiredFields;
    this.optionalFields = optionalFields;
    this.missingFields = missingFields;
    this.unverifiedFields = unverifiedFields;
    this.verifications = verifications;
    this.username = username;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
    this.web3Wallet = web3Wallet;
    this.passwordEnabled = passwordEnabled;
    this.firstName = firstName;
    this.lastName = lastName;
    this.customAction = customAction;
    this.externalId = externalId;
    this.createdSessionId = createdSessionId;
    this.createdUserId = createdUserId;
    this.abandonAt = abandonAt;
    this.legalAcceptedAt = legalAcceptedAt;
    this.publicMetadata = publicMetadata;
    this.unsafeMetadata = unsafeMetadata;
  }
  static fromJSON(data) {
    return new _SignUpAttempt(
      data.id,
      data.status,
      data.required_fields,
      data.optional_fields,
      data.missing_fields,
      data.unverified_fields,
      data.verifications ? SignUpAttemptVerifications.fromJSON(data.verifications) : null,
      data.username,
      data.email_address,
      data.phone_number,
      data.web3_wallet,
      data.password_enabled,
      data.first_name,
      data.last_name,
      data.custom_action,
      data.external_id,
      data.created_session_id,
      data.created_user_id,
      data.abandon_at,
      data.legal_accepted_at,
      data.public_metadata,
      data.unsafe_metadata
    );
  }
};
var SMSMessage = class _SMSMessage {
  constructor(id, fromPhoneNumber, toPhoneNumber, message, status, phoneNumberId, data) {
    this.id = id;
    this.fromPhoneNumber = fromPhoneNumber;
    this.toPhoneNumber = toPhoneNumber;
    this.message = message;
    this.status = status;
    this.phoneNumberId = phoneNumberId;
    this.data = data;
  }
  static fromJSON(data) {
    return new _SMSMessage(
      data.id,
      data.from_phone_number,
      data.to_phone_number,
      data.message,
      data.status,
      data.phone_number_id,
      data.data
    );
  }
};
var Token = class _Token {
  constructor(jwt) {
    this.jwt = jwt;
  }
  static fromJSON(data) {
    return new _Token(data.jwt);
  }
};
var SamlAccountConnection = class _SamlAccountConnection {
  constructor(id, name, domain, active, provider, syncUserAttributes, allowSubdomains, allowIdpInitiated, createdAt, updatedAt) {
    this.id = id;
    this.name = name;
    this.domain = domain;
    this.active = active;
    this.provider = provider;
    this.syncUserAttributes = syncUserAttributes;
    this.allowSubdomains = allowSubdomains;
    this.allowIdpInitiated = allowIdpInitiated;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static fromJSON(data) {
    return new _SamlAccountConnection(
      data.id,
      data.name,
      data.domain,
      data.active,
      data.provider,
      data.sync_user_attributes,
      data.allow_subdomains,
      data.allow_idp_initiated,
      data.created_at,
      data.updated_at
    );
  }
};
var SamlAccount = class _SamlAccount {
  constructor(id, provider, providerUserId, active, emailAddress, firstName, lastName, verification, samlConnection) {
    this.id = id;
    this.provider = provider;
    this.providerUserId = providerUserId;
    this.active = active;
    this.emailAddress = emailAddress;
    this.firstName = firstName;
    this.lastName = lastName;
    this.verification = verification;
    this.samlConnection = samlConnection;
  }
  static fromJSON(data) {
    return new _SamlAccount(
      data.id,
      data.provider,
      data.provider_user_id,
      data.active,
      data.email_address,
      data.first_name,
      data.last_name,
      data.verification && Verification.fromJSON(data.verification),
      data.saml_connection && SamlAccountConnection.fromJSON(data.saml_connection)
    );
  }
};
var Web3Wallet = class _Web3Wallet {
  constructor(id, web3Wallet, verification) {
    this.id = id;
    this.web3Wallet = web3Wallet;
    this.verification = verification;
  }
  static fromJSON(data) {
    return new _Web3Wallet(data.id, data.web3_wallet, data.verification && Verification.fromJSON(data.verification));
  }
};
var User = class _User {
  constructor(id, passwordEnabled, totpEnabled, backupCodeEnabled, twoFactorEnabled, banned, locked, createdAt, updatedAt, imageUrl, hasImage, primaryEmailAddressId, primaryPhoneNumberId, primaryWeb3WalletId, lastSignInAt, externalId, username, firstName, lastName, publicMetadata = {}, privateMetadata = {}, unsafeMetadata = {}, emailAddresses = [], phoneNumbers = [], web3Wallets = [], externalAccounts = [], samlAccounts = [], lastActiveAt, createOrganizationEnabled, createOrganizationsLimit = null, deleteSelfEnabled, legalAcceptedAt) {
    this.id = id;
    this.passwordEnabled = passwordEnabled;
    this.totpEnabled = totpEnabled;
    this.backupCodeEnabled = backupCodeEnabled;
    this.twoFactorEnabled = twoFactorEnabled;
    this.banned = banned;
    this.locked = locked;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.imageUrl = imageUrl;
    this.hasImage = hasImage;
    this.primaryEmailAddressId = primaryEmailAddressId;
    this.primaryPhoneNumberId = primaryPhoneNumberId;
    this.primaryWeb3WalletId = primaryWeb3WalletId;
    this.lastSignInAt = lastSignInAt;
    this.externalId = externalId;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.publicMetadata = publicMetadata;
    this.privateMetadata = privateMetadata;
    this.unsafeMetadata = unsafeMetadata;
    this.emailAddresses = emailAddresses;
    this.phoneNumbers = phoneNumbers;
    this.web3Wallets = web3Wallets;
    this.externalAccounts = externalAccounts;
    this.samlAccounts = samlAccounts;
    this.lastActiveAt = lastActiveAt;
    this.createOrganizationEnabled = createOrganizationEnabled;
    this.createOrganizationsLimit = createOrganizationsLimit;
    this.deleteSelfEnabled = deleteSelfEnabled;
    this.legalAcceptedAt = legalAcceptedAt;
    this._raw = null;
  }
  get raw() {
    return this._raw;
  }
  static fromJSON(data) {
    const res = new _User(
      data.id,
      data.password_enabled,
      data.totp_enabled,
      data.backup_code_enabled,
      data.two_factor_enabled,
      data.banned,
      data.locked,
      data.created_at,
      data.updated_at,
      data.image_url,
      data.has_image,
      data.primary_email_address_id,
      data.primary_phone_number_id,
      data.primary_web3_wallet_id,
      data.last_sign_in_at,
      data.external_id,
      data.username,
      data.first_name,
      data.last_name,
      data.public_metadata,
      data.private_metadata,
      data.unsafe_metadata,
      (data.email_addresses || []).map((x) => EmailAddress.fromJSON(x)),
      (data.phone_numbers || []).map((x) => PhoneNumber.fromJSON(x)),
      (data.web3_wallets || []).map((x) => Web3Wallet.fromJSON(x)),
      (data.external_accounts || []).map((x) => ExternalAccount.fromJSON(x)),
      (data.saml_accounts || []).map((x) => SamlAccount.fromJSON(x)),
      data.last_active_at,
      data.create_organization_enabled,
      data.create_organizations_limit,
      data.delete_self_enabled,
      data.legal_accepted_at
    );
    res._raw = data;
    return res;
  }
  get primaryEmailAddress() {
    return this.emailAddresses.find(({ id }) => id === this.primaryEmailAddressId) ?? null;
  }
  get primaryPhoneNumber() {
    return this.phoneNumbers.find(({ id }) => id === this.primaryPhoneNumberId) ?? null;
  }
  get primaryWeb3Wallet() {
    return this.web3Wallets.find(({ id }) => id === this.primaryWeb3WalletId) ?? null;
  }
  get fullName() {
    return [this.firstName, this.lastName].join(" ").trim() || null;
  }
};
var WaitlistEntry = class _WaitlistEntry {
  constructor(id, emailAddress, status, invitation, createdAt, updatedAt, isLocked) {
    this.id = id;
    this.emailAddress = emailAddress;
    this.status = status;
    this.invitation = invitation;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isLocked = isLocked;
  }
  static fromJSON(data) {
    return new _WaitlistEntry(
      data.id,
      data.email_address,
      data.status,
      data.invitation && Invitation.fromJSON(data.invitation),
      data.created_at,
      data.updated_at,
      data.is_locked
    );
  }
};
function deserialize(payload) {
  let data, totalCount;
  if (Array.isArray(payload)) {
    const data2 = payload.map((item) => jsonToObject(item));
    return { data: data2 };
  } else if (isPaginated(payload)) {
    data = payload.data.map((item) => jsonToObject(item));
    totalCount = payload.total_count;
    return { data, totalCount };
  } else {
    return { data: jsonToObject(payload) };
  }
}
function isPaginated(payload) {
  if (!payload || typeof payload !== "object" || !("data" in payload)) {
    return false;
  }
  return Array.isArray(payload.data) && payload.data !== void 0;
}
function getCount(item) {
  return item.total_count;
}
function jsonToObject(item) {
  if (typeof item !== "string" && "object" in item && "deleted" in item) {
    return DeletedObject.fromJSON(item);
  }
  switch (item.object) {
    case ObjectType.AccountlessApplication:
      return AccountlessApplication.fromJSON(item);
    case ObjectType.ActorToken:
      return ActorToken.fromJSON(item);
    case ObjectType.AllowlistIdentifier:
      return AllowlistIdentifier.fromJSON(item);
    case ObjectType.BlocklistIdentifier:
      return BlocklistIdentifier.fromJSON(item);
    case ObjectType.Client:
      return Client.fromJSON(item);
    case ObjectType.Cookies:
      return Cookies2.fromJSON(item);
    case ObjectType.Domain:
      return Domain.fromJSON(item);
    case ObjectType.EmailAddress:
      return EmailAddress.fromJSON(item);
    case ObjectType.Email:
      return Email.fromJSON(item);
    case ObjectType.Instance:
      return Instance.fromJSON(item);
    case ObjectType.InstanceRestrictions:
      return InstanceRestrictions.fromJSON(item);
    case ObjectType.InstanceSettings:
      return InstanceSettings.fromJSON(item);
    case ObjectType.Invitation:
      return Invitation.fromJSON(item);
    case ObjectType.JwtTemplate:
      return JwtTemplate.fromJSON(item);
    case ObjectType.OauthAccessToken:
      return OauthAccessToken.fromJSON(item);
    case ObjectType.OAuthApplication:
      return OAuthApplication.fromJSON(item);
    case ObjectType.Organization:
      return Organization.fromJSON(item);
    case ObjectType.OrganizationInvitation:
      return OrganizationInvitation.fromJSON(item);
    case ObjectType.OrganizationMembership:
      return OrganizationMembership.fromJSON(item);
    case ObjectType.OrganizationSettings:
      return OrganizationSettings.fromJSON(item);
    case ObjectType.PhoneNumber:
      return PhoneNumber.fromJSON(item);
    case ObjectType.ProxyCheck:
      return ProxyCheck.fromJSON(item);
    case ObjectType.RedirectUrl:
      return RedirectUrl.fromJSON(item);
    case ObjectType.SignInToken:
      return SignInToken.fromJSON(item);
    case ObjectType.SignUpAttempt:
      return SignUpAttempt.fromJSON(item);
    case ObjectType.Session:
      return Session.fromJSON(item);
    case ObjectType.SmsMessage:
      return SMSMessage.fromJSON(item);
    case ObjectType.Token:
      return Token.fromJSON(item);
    case ObjectType.TotalCount:
      return getCount(item);
    case ObjectType.User:
      return User.fromJSON(item);
    case ObjectType.WaitlistEntry:
      return WaitlistEntry.fromJSON(item);
    default:
      return item;
  }
}
function buildRequest(options) {
  const requestFn = async (requestOptions) => {
    const {
      secretKey,
      requireSecretKey = true,
      apiUrl = API_URL,
      apiVersion = API_VERSION,
      userAgent = USER_AGENT
    } = options;
    const { path, method, queryParams, headerParams, bodyParams, formData } = requestOptions;
    if (requireSecretKey) {
      assertValidSecretKey(secretKey);
    }
    const url = joinPaths(apiUrl, apiVersion, path);
    const finalUrl = new URL(url);
    if (queryParams) {
      const snakecasedQueryParams = snakecaseKeys({ ...queryParams });
      for (const [key, val] of Object.entries(snakecasedQueryParams)) {
        if (val) {
          [val].flat().forEach((v) => finalUrl.searchParams.append(key, v));
        }
      }
    }
    const headers = {
      "Clerk-API-Version": SUPPORTED_BAPI_VERSION,
      "User-Agent": userAgent,
      ...headerParams
    };
    if (secretKey) {
      headers.Authorization = `Bearer ${secretKey}`;
    }
    let res;
    try {
      if (formData) {
        res = await runtime.fetch(finalUrl.href, {
          method,
          headers,
          body: formData
        });
      } else {
        headers["Content-Type"] = "application/json";
        const hasBody = method !== "GET" && bodyParams && Object.keys(bodyParams).length > 0;
        const body = hasBody ? { body: JSON.stringify(snakecaseKeys(bodyParams, { deep: false })) } : null;
        res = await runtime.fetch(finalUrl.href, {
          method,
          headers,
          ...body
        });
      }
      const isJSONResponse = res?.headers && res.headers?.get(constants.Headers.ContentType) === constants.ContentTypes.Json;
      const responseBody = await (isJSONResponse ? res.json() : res.text());
      if (!res.ok) {
        return {
          data: null,
          errors: parseErrors(responseBody),
          status: res?.status,
          statusText: res?.statusText,
          clerkTraceId: getTraceId(responseBody, res?.headers),
          retryAfter: getRetryAfter(res?.headers)
        };
      }
      return {
        ...deserialize(responseBody),
        errors: null
      };
    } catch (err) {
      if (err instanceof Error) {
        return {
          data: null,
          errors: [
            {
              code: "unexpected_error",
              message: err.message || "Unexpected error"
            }
          ],
          clerkTraceId: getTraceId(err, res?.headers)
        };
      }
      return {
        data: null,
        errors: parseErrors(err),
        status: res?.status,
        statusText: res?.statusText,
        clerkTraceId: getTraceId(err, res?.headers),
        retryAfter: getRetryAfter(res?.headers)
      };
    }
  };
  return withLegacyRequestReturn(requestFn);
}
function getTraceId(data, headers) {
  if (data && typeof data === "object" && "clerk_trace_id" in data && typeof data.clerk_trace_id === "string") {
    return data.clerk_trace_id;
  }
  const cfRay = headers?.get("cf-ray");
  return cfRay || "";
}
function getRetryAfter(headers) {
  const retryAfter = headers?.get("Retry-After");
  if (!retryAfter) return;
  const value = parseInt(retryAfter, 10);
  if (isNaN(value)) return;
  return value;
}
function parseErrors(data) {
  if (!!data && typeof data === "object" && "errors" in data) {
    const errors = data.errors;
    return errors.length > 0 ? errors.map(parseError) : [];
  }
  return [];
}
function withLegacyRequestReturn(cb) {
  return async (...args) => {
    const { data, errors, totalCount, status, statusText, clerkTraceId, retryAfter } = await cb(...args);
    if (errors) {
      const error = new ClerkAPIResponseError(statusText || "", {
        data: [],
        status,
        clerkTraceId,
        retryAfter
      });
      error.errors = errors;
      throw error;
    }
    if (typeof totalCount !== "undefined") {
      return { data, totalCount };
    }
    return data;
  };
}
function createBackendApiClient(options) {
  const request = buildRequest(options);
  return {
    __experimental_accountlessApplications: new AccountlessApplicationAPI(
      buildRequest({ ...options, requireSecretKey: false })
    ),
    actorTokens: new ActorTokenAPI(request),
    allowlistIdentifiers: new AllowlistIdentifierAPI(request),
    betaFeatures: new BetaFeaturesAPI(request),
    blocklistIdentifiers: new BlocklistIdentifierAPI(request),
    clients: new ClientAPI(request),
    domains: new DomainAPI(request),
    emailAddresses: new EmailAddressAPI(request),
    instance: new InstanceAPI(request),
    invitations: new InvitationAPI(request),
    jwks: new JwksAPI(request),
    jwtTemplates: new JwtTemplatesApi(request),
    oauthApplications: new OAuthApplicationsApi(request),
    organizations: new OrganizationAPI(request),
    phoneNumbers: new PhoneNumberAPI(request),
    proxyChecks: new ProxyCheckAPI(request),
    redirectUrls: new RedirectUrlAPI(request),
    samlConnections: new SamlConnectionAPI(request),
    sessions: new SessionAPI(request),
    signInTokens: new SignInTokenAPI(request),
    signUps: new SignUpAPI(request),
    testingTokens: new TestingTokenAPI(request),
    users: new UserAPI(request),
    waitlistEntries: new WaitlistEntryAPI(request),
    webhooks: new WebhookAPI(request)
  };
}
var createDebug = (data) => {
  return () => {
    const res = { ...data };
    res.secretKey = (res.secretKey || "").substring(0, 7);
    res.jwtKey = (res.jwtKey || "").substring(0, 7);
    return { ...res };
  };
};
function signedInAuthObject(authenticateContext, sessionToken, sessionClaims) {
  const { actor, sessionId, sessionStatus, userId, orgId, orgRole, orgSlug, orgPermissions, factorVerificationAge } = __experimental_JWTPayloadToAuthObjectProperties(sessionClaims);
  const apiClient = createBackendApiClient(authenticateContext);
  const getToken = createGetToken({
    sessionId,
    sessionToken,
    fetcher: async (...args) => (await apiClient.sessions.getToken(...args)).jwt
  });
  return {
    actor,
    sessionClaims,
    sessionId,
    sessionStatus,
    userId,
    orgId,
    orgRole,
    orgSlug,
    orgPermissions,
    factorVerificationAge,
    getToken,
    has: createCheckAuthorization({
      orgId,
      orgRole,
      orgPermissions,
      userId,
      factorVerificationAge,
      features: sessionClaims.fea || "",
      plans: sessionClaims.pla || ""
    }),
    debug: createDebug({ ...authenticateContext, sessionToken })
  };
}
function signedOutAuthObject(debugData) {
  return {
    sessionClaims: null,
    sessionId: null,
    sessionStatus: null,
    userId: null,
    actor: null,
    orgId: null,
    orgRole: null,
    orgSlug: null,
    orgPermissions: null,
    factorVerificationAge: null,
    getToken: () => Promise.resolve(null),
    has: () => false,
    debug: createDebug(debugData)
  };
}
var createGetToken = (params) => {
  const { fetcher, sessionToken, sessionId } = params || {};
  return async (options = {}) => {
    if (!sessionId) {
      return null;
    }
    if (options.template) {
      return fetcher(sessionId, options.template);
    }
    return sessionToken;
  };
};
var AuthStatus = {
  SignedIn: "signed-in",
  SignedOut: "signed-out",
  Handshake: "handshake"
};
var AuthErrorReason = {
  ClientUATWithoutSessionToken: "client-uat-but-no-session-token",
  DevBrowserMissing: "dev-browser-missing",
  DevBrowserSync: "dev-browser-sync",
  PrimaryRespondsToSyncing: "primary-responds-to-syncing",
  SatelliteCookieNeedsSyncing: "satellite-needs-syncing",
  SessionTokenAndUATMissing: "session-token-and-uat-missing",
  SessionTokenMissing: "session-token-missing",
  SessionTokenExpired: "session-token-expired",
  SessionTokenIATBeforeClientUAT: "session-token-iat-before-client-uat",
  SessionTokenNBF: "session-token-nbf",
  SessionTokenIatInTheFuture: "session-token-iat-in-the-future",
  SessionTokenWithoutClientUAT: "session-token-but-no-client-uat",
  ActiveOrganizationMismatch: "active-organization-mismatch",
  UnexpectedError: "unexpected-error"
};
function signedIn(authenticateContext, sessionClaims, headers = new Headers(), token) {
  const authObject = signedInAuthObject(authenticateContext, token, sessionClaims);
  return {
    status: AuthStatus.SignedIn,
    reason: null,
    message: null,
    proxyUrl: authenticateContext.proxyUrl || "",
    publishableKey: authenticateContext.publishableKey || "",
    isSatellite: authenticateContext.isSatellite || false,
    domain: authenticateContext.domain || "",
    signInUrl: authenticateContext.signInUrl || "",
    signUpUrl: authenticateContext.signUpUrl || "",
    afterSignInUrl: authenticateContext.afterSignInUrl || "",
    afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
    isSignedIn: true,
    toAuth: () => authObject,
    headers,
    token
  };
}
function signedOut(authenticateContext, reason, message = "", headers = new Headers()) {
  return withDebugHeaders({
    status: AuthStatus.SignedOut,
    reason,
    message,
    proxyUrl: authenticateContext.proxyUrl || "",
    publishableKey: authenticateContext.publishableKey || "",
    isSatellite: authenticateContext.isSatellite || false,
    domain: authenticateContext.domain || "",
    signInUrl: authenticateContext.signInUrl || "",
    signUpUrl: authenticateContext.signUpUrl || "",
    afterSignInUrl: authenticateContext.afterSignInUrl || "",
    afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
    isSignedIn: false,
    headers,
    toAuth: () => signedOutAuthObject({ ...authenticateContext, status: AuthStatus.SignedOut, reason, message }),
    token: null
  });
}
function handshake(authenticateContext, reason, message = "", headers) {
  return withDebugHeaders({
    status: AuthStatus.Handshake,
    reason,
    message,
    publishableKey: authenticateContext.publishableKey || "",
    isSatellite: authenticateContext.isSatellite || false,
    domain: authenticateContext.domain || "",
    proxyUrl: authenticateContext.proxyUrl || "",
    signInUrl: authenticateContext.signInUrl || "",
    signUpUrl: authenticateContext.signUpUrl || "",
    afterSignInUrl: authenticateContext.afterSignInUrl || "",
    afterSignUpUrl: authenticateContext.afterSignUpUrl || "",
    isSignedIn: false,
    headers,
    toAuth: () => null,
    token: null
  });
}
var withDebugHeaders = (requestState) => {
  const headers = new Headers(requestState.headers || {});
  if (requestState.message) {
    try {
      headers.set(constants.Headers.AuthMessage, requestState.message);
    } catch {
    }
  }
  if (requestState.reason) {
    try {
      headers.set(constants.Headers.AuthReason, requestState.reason);
    } catch {
    }
  }
  if (requestState.status) {
    try {
      headers.set(constants.Headers.AuthStatus, requestState.status);
    } catch {
    }
  }
  requestState.headers = headers;
  return requestState;
};
var ClerkUrl = class extends URL {
  isCrossOrigin(other) {
    return this.origin !== new URL(other.toString()).origin;
  }
};
var createClerkUrl = (...args) => {
  return new ClerkUrl(...args);
};
var ClerkRequest = class extends Request {
  constructor(input, init) {
    const url = typeof input !== "string" && "url" in input ? input.url : String(input);
    super(url, init || typeof input === "string" ? void 0 : input);
    this.clerkUrl = this.deriveUrlFromHeaders(this);
    this.cookies = this.parseCookies(this);
  }
  toJSON() {
    return {
      url: this.clerkUrl.href,
      method: this.method,
      headers: JSON.stringify(Object.fromEntries(this.headers)),
      clerkUrl: this.clerkUrl.toString(),
      cookies: JSON.stringify(Object.fromEntries(this.cookies))
    };
  }
  /**
   * Used to fix request.url using the x-forwarded-* headers
   * TODO add detailed description of the issues this solves
   */
  deriveUrlFromHeaders(req) {
    const initialUrl = new URL(req.url);
    const forwardedProto = req.headers.get(constants.Headers.ForwardedProto);
    const forwardedHost = req.headers.get(constants.Headers.ForwardedHost);
    const host = req.headers.get(constants.Headers.Host);
    const protocol = initialUrl.protocol;
    const resolvedHost = this.getFirstValueFromHeader(forwardedHost) ?? host;
    const resolvedProtocol = this.getFirstValueFromHeader(forwardedProto) ?? protocol?.replace(/[:/]/, "");
    const origin = resolvedHost && resolvedProtocol ? `${resolvedProtocol}://${resolvedHost}` : initialUrl.origin;
    if (origin === initialUrl.origin) {
      return createClerkUrl(initialUrl);
    }
    return createClerkUrl(initialUrl.pathname + initialUrl.search, origin);
  }
  getFirstValueFromHeader(value) {
    return value?.split(",")[0];
  }
  parseCookies(req) {
    const cookiesRecord = distExports.parse(this.decodeCookieValue(req.headers.get("cookie") || ""));
    return new Map(Object.entries(cookiesRecord));
  }
  decodeCookieValue(str) {
    return str ? str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : str;
  }
};
var createClerkRequest = (...args) => {
  return args[0] instanceof ClerkRequest ? args[0] : new ClerkRequest(...args);
};
var cache = {};
var lastUpdatedAt = 0;
function getFromCache(kid) {
  return cache[kid];
}
function getCacheValues() {
  return Object.values(cache);
}
function setInCache(jwk, shouldExpire = true) {
  cache[jwk.kid] = jwk;
  lastUpdatedAt = shouldExpire ? Date.now() : -1;
}
var LocalJwkKid = "local";
var PEM_HEADER = "-----BEGIN PUBLIC KEY-----";
var PEM_TRAILER = "-----END PUBLIC KEY-----";
var RSA_PREFIX = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA";
var RSA_SUFFIX = "IDAQAB";
function loadClerkJWKFromLocal(localKey) {
  if (!getFromCache(LocalJwkKid)) {
    if (!localKey) {
      throw new TokenVerificationError({
        action: TokenVerificationErrorAction.SetClerkJWTKey,
        message: "Missing local JWK.",
        reason: TokenVerificationErrorReason.LocalJWKMissing
      });
    }
    const modulus = localKey.replace(/\r\n|\n|\r/g, "").replace(PEM_HEADER, "").replace(PEM_TRAILER, "").replace(RSA_PREFIX, "").replace(RSA_SUFFIX, "").replace(/\+/g, "-").replace(/\//g, "_");
    setInCache(
      {
        kid: "local",
        kty: "RSA",
        alg: "RS256",
        n: modulus,
        e: "AQAB"
      },
      false
      // local key never expires in cache
    );
  }
  return getFromCache(LocalJwkKid);
}
async function loadClerkJWKFromRemote({
  secretKey,
  apiUrl = API_URL,
  apiVersion = API_VERSION,
  kid,
  skipJwksCache
}) {
  if (skipJwksCache || cacheHasExpired() || !getFromCache(kid)) {
    if (!secretKey) {
      throw new TokenVerificationError({
        action: TokenVerificationErrorAction.ContactSupport,
        message: "Failed to load JWKS from Clerk Backend or Frontend API.",
        reason: TokenVerificationErrorReason.RemoteJWKFailedToLoad
      });
    }
    const fetcher = () => fetchJWKSFromBAPI(apiUrl, secretKey, apiVersion);
    const { keys } = await retry(fetcher);
    if (!keys || !keys.length) {
      throw new TokenVerificationError({
        action: TokenVerificationErrorAction.ContactSupport,
        message: "The JWKS endpoint did not contain any signing keys. Contact support@clerk.com.",
        reason: TokenVerificationErrorReason.RemoteJWKFailedToLoad
      });
    }
    keys.forEach((key) => setInCache(key));
  }
  const jwk = getFromCache(kid);
  if (!jwk) {
    const cacheValues = getCacheValues();
    const jwkKeys = cacheValues.map((jwk2) => jwk2.kid).sort().join(", ");
    throw new TokenVerificationError({
      action: `Go to your Dashboard and validate your secret and public keys are correct. ${TokenVerificationErrorAction.ContactSupport} if the issue persists.`,
      message: `Unable to find a signing key in JWKS that matches the kid='${kid}' of the provided session token. Please make sure that the __session cookie or the HTTP authorization header contain a Clerk-generated session JWT. The following kid is available: ${jwkKeys}`,
      reason: TokenVerificationErrorReason.JWKKidMismatch
    });
  }
  return jwk;
}
async function fetchJWKSFromBAPI(apiUrl, key, apiVersion) {
  if (!key) {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.SetClerkSecretKey,
      message: "Missing Clerk Secret Key or API Key. Go to https://dashboard.clerk.com and get your key for your instance.",
      reason: TokenVerificationErrorReason.RemoteJWKFailedToLoad
    });
  }
  const url = new URL(apiUrl);
  url.pathname = joinPaths(url.pathname, apiVersion, "/jwks");
  const response = await runtime.fetch(url.href, {
    headers: {
      Authorization: `Bearer ${key}`,
      "Clerk-API-Version": SUPPORTED_BAPI_VERSION,
      "Content-Type": "application/json",
      "User-Agent": USER_AGENT
    }
  });
  if (!response.ok) {
    const json = await response.json();
    const invalidSecretKeyError = getErrorObjectByCode(json?.errors, TokenVerificationErrorCode.InvalidSecretKey);
    if (invalidSecretKeyError) {
      const reason = TokenVerificationErrorReason.InvalidSecretKey;
      throw new TokenVerificationError({
        action: TokenVerificationErrorAction.ContactSupport,
        message: invalidSecretKeyError.message,
        reason
      });
    }
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.ContactSupport,
      message: `Error loading Clerk JWKS from ${url.href} with code=${response.status}`,
      reason: TokenVerificationErrorReason.RemoteJWKFailedToLoad
    });
  }
  return response.json();
}
function cacheHasExpired() {
  if (lastUpdatedAt === -1) {
    return false;
  }
  const isExpired = Date.now() - lastUpdatedAt >= MAX_CACHE_LAST_UPDATED_AT_SECONDS * 1e3;
  if (isExpired) {
    cache = {};
  }
  return isExpired;
}
var getErrorObjectByCode = (errors, code) => {
  if (!errors) {
    return null;
  }
  return errors.find((err) => err.code === code);
};
async function verifyToken(token, options) {
  const { data: decodedResult, errors } = decodeJwt(token);
  if (errors) {
    return { errors };
  }
  const { header } = decodedResult;
  const { kid } = header;
  try {
    let key;
    if (options.jwtKey) {
      key = loadClerkJWKFromLocal(options.jwtKey);
    } else if (options.secretKey) {
      key = await loadClerkJWKFromRemote({ ...options, kid });
    } else {
      return {
        errors: [
          new TokenVerificationError({
            action: TokenVerificationErrorAction.SetClerkJWTKey,
            message: "Failed to resolve JWK during verification.",
            reason: TokenVerificationErrorReason.JWKFailedToResolve
          })
        ]
      };
    }
    return await verifyJwt(token, { ...options, key });
  } catch (error) {
    return { errors: [error] };
  }
}
var AuthenticateContext = class {
  constructor(cookieSuffix, clerkRequest, options) {
    this.cookieSuffix = cookieSuffix;
    this.clerkRequest = clerkRequest;
    this.initPublishableKeyValues(options);
    this.initHeaderValues();
    this.initCookieValues();
    this.initHandshakeValues();
    Object.assign(this, options);
    this.clerkUrl = this.clerkRequest.clerkUrl;
  }
  /**
   * Retrieves the session token from either the cookie or the header.
   *
   * @returns {string | undefined} The session token if available, otherwise undefined.
   */
  get sessionToken() {
    return this.sessionTokenInCookie || this.sessionTokenInHeader;
  }
  usesSuffixedCookies() {
    const suffixedClientUat = this.getSuffixedCookie(constants.Cookies.ClientUat);
    const clientUat = this.getCookie(constants.Cookies.ClientUat);
    const suffixedSession = this.getSuffixedCookie(constants.Cookies.Session) || "";
    const session = this.getCookie(constants.Cookies.Session) || "";
    if (session && !this.tokenHasIssuer(session)) {
      return false;
    }
    if (session && !this.tokenBelongsToInstance(session)) {
      return true;
    }
    if (!suffixedClientUat && !suffixedSession) {
      return false;
    }
    const { data: sessionData } = decodeJwt(session);
    const sessionIat = sessionData?.payload.iat || 0;
    const { data: suffixedSessionData } = decodeJwt(suffixedSession);
    const suffixedSessionIat = suffixedSessionData?.payload.iat || 0;
    if (suffixedClientUat !== "0" && clientUat !== "0" && sessionIat > suffixedSessionIat) {
      return false;
    }
    if (suffixedClientUat === "0" && clientUat !== "0") {
      return false;
    }
    if (this.instanceType !== "production") {
      const isSuffixedSessionExpired = this.sessionExpired(suffixedSessionData);
      if (suffixedClientUat !== "0" && clientUat === "0" && isSuffixedSessionExpired) {
        return false;
      }
    }
    if (!suffixedClientUat && suffixedSession) {
      return false;
    }
    return true;
  }
  initPublishableKeyValues(options) {
    assertValidPublishableKey(options.publishableKey);
    this.publishableKey = options.publishableKey;
    const pk = parsePublishableKey(this.publishableKey, {
      fatal: true,
      proxyUrl: options.proxyUrl,
      domain: options.domain
    });
    this.instanceType = pk.instanceType;
    this.frontendApi = pk.frontendApi;
  }
  initHeaderValues() {
    this.sessionTokenInHeader = this.parseAuthorizationHeader(this.getHeader(constants.Headers.Authorization));
    this.origin = this.getHeader(constants.Headers.Origin);
    this.host = this.getHeader(constants.Headers.Host);
    this.forwardedHost = this.getHeader(constants.Headers.ForwardedHost);
    this.forwardedProto = this.getHeader(constants.Headers.CloudFrontForwardedProto) || this.getHeader(constants.Headers.ForwardedProto);
    this.referrer = this.getHeader(constants.Headers.Referrer);
    this.userAgent = this.getHeader(constants.Headers.UserAgent);
    this.secFetchDest = this.getHeader(constants.Headers.SecFetchDest);
    this.accept = this.getHeader(constants.Headers.Accept);
  }
  initCookieValues() {
    this.sessionTokenInCookie = this.getSuffixedOrUnSuffixedCookie(constants.Cookies.Session);
    this.refreshTokenInCookie = this.getSuffixedCookie(constants.Cookies.Refresh);
    this.clientUat = Number.parseInt(this.getSuffixedOrUnSuffixedCookie(constants.Cookies.ClientUat) || "") || 0;
  }
  initHandshakeValues() {
    this.devBrowserToken = this.getQueryParam(constants.QueryParameters.DevBrowser) || this.getSuffixedOrUnSuffixedCookie(constants.Cookies.DevBrowser);
    this.handshakeToken = this.getQueryParam(constants.QueryParameters.Handshake) || this.getCookie(constants.Cookies.Handshake);
    this.handshakeRedirectLoopCounter = Number(this.getCookie(constants.Cookies.RedirectCount)) || 0;
    this.handshakeNonce = this.getQueryParam(constants.QueryParameters.HandshakeNonce) || this.getCookie(constants.Cookies.HandshakeNonce);
  }
  getQueryParam(name) {
    return this.clerkRequest.clerkUrl.searchParams.get(name);
  }
  getHeader(name) {
    return this.clerkRequest.headers.get(name) || void 0;
  }
  getCookie(name) {
    return this.clerkRequest.cookies.get(name) || void 0;
  }
  getSuffixedCookie(name) {
    return this.getCookie(getSuffixedCookieName(name, this.cookieSuffix)) || void 0;
  }
  getSuffixedOrUnSuffixedCookie(cookieName) {
    if (this.usesSuffixedCookies()) {
      return this.getSuffixedCookie(cookieName);
    }
    return this.getCookie(cookieName);
  }
  parseAuthorizationHeader(authorizationHeader) {
    if (!authorizationHeader) {
      return void 0;
    }
    const [scheme, token] = authorizationHeader.split(" ", 2);
    if (!token) {
      return scheme;
    }
    if (scheme === "Bearer") {
      return token;
    }
    return void 0;
  }
  tokenHasIssuer(token) {
    const { data, errors } = decodeJwt(token);
    if (errors) {
      return false;
    }
    return !!data.payload.iss;
  }
  tokenBelongsToInstance(token) {
    if (!token) {
      return false;
    }
    const { data, errors } = decodeJwt(token);
    if (errors) {
      return false;
    }
    const tokenIssuer = data.payload.iss.replace(/https?:\/\//gi, "");
    return this.frontendApi === tokenIssuer;
  }
  sessionExpired(jwt) {
    return !!jwt && jwt?.payload.exp <= Date.now() / 1e3 >> 0;
  }
};
var createAuthenticateContext = async (clerkRequest, options) => {
  const cookieSuffix = options.publishableKey ? await getCookieSuffix(options.publishableKey, runtime.crypto.subtle) : "";
  return new AuthenticateContext(cookieSuffix, clerkRequest, options);
};
var getCookieName = (cookieDirective) => {
  return cookieDirective.split(";")[0]?.split("=")[0];
};
var getCookieValue = (cookieDirective) => {
  return cookieDirective.split(";")[0]?.split("=")[1];
};
async function verifyHandshakeJwt(token, { key }) {
  const { data: decoded, errors } = decodeJwt(token);
  if (errors) {
    throw errors[0];
  }
  const { header, payload } = decoded;
  const { typ, alg } = header;
  assertHeaderType(typ);
  assertHeaderAlgorithm(alg);
  const { data: signatureValid, errors: signatureErrors } = await hasValidSignature(decoded, key);
  if (signatureErrors) {
    throw new TokenVerificationError({
      reason: TokenVerificationErrorReason.TokenVerificationFailed,
      message: `Error verifying handshake token. ${signatureErrors[0]}`
    });
  }
  if (!signatureValid) {
    throw new TokenVerificationError({
      reason: TokenVerificationErrorReason.TokenInvalidSignature,
      message: "Handshake signature is invalid."
    });
  }
  return payload;
}
async function verifyHandshakeToken(token, options) {
  const { secretKey, apiUrl, apiVersion, jwksCacheTtlInMs, jwtKey, skipJwksCache } = options;
  const { data, errors } = decodeJwt(token);
  if (errors) {
    throw errors[0];
  }
  const { kid } = data.header;
  let key;
  if (jwtKey) {
    key = loadClerkJWKFromLocal(jwtKey);
  } else if (secretKey) {
    key = await loadClerkJWKFromRemote({ secretKey, apiUrl, apiVersion, kid, skipJwksCache });
  } else {
    throw new TokenVerificationError({
      action: TokenVerificationErrorAction.SetClerkJWTKey,
      message: "Failed to resolve JWK during handshake verification.",
      reason: TokenVerificationErrorReason.JWKFailedToResolve
    });
  }
  return await verifyHandshakeJwt(token, {
    key
  });
}
var HandshakeService = class {
  constructor(authenticateContext, options, organizationMatcher) {
    this.authenticateContext = authenticateContext;
    this.options = options;
    this.organizationMatcher = organizationMatcher;
    this.redirectLoopCounter = 0;
  }
  /**
   * Determines if a request is eligible for handshake based on its headers
   *
   * Currently, a request is only eligible for a handshake if we can say it's *probably* a request for a document, not a fetch or some other exotic request.
   * This heuristic should give us a reliable enough signal for browsers that support `Sec-Fetch-Dest` and for those that don't.
   *
   * @returns boolean indicating if the request is eligible for handshake
   */
  isRequestEligibleForHandshake() {
    const { accept, secFetchDest } = this.authenticateContext;
    if (secFetchDest === "document" || secFetchDest === "iframe") {
      return true;
    }
    if (!secFetchDest && accept?.startsWith("text/html")) {
      return true;
    }
    return false;
  }
  /**
   * Builds the redirect headers for a handshake request
   * @param reason - The reason for the handshake (e.g. 'session-token-expired')
   * @returns Headers object containing the Location header for redirect
   * @throws Error if clerkUrl is missing in authenticateContext
   */
  buildRedirectToHandshake(reason) {
    if (!this.authenticateContext?.clerkUrl) {
      throw new Error("Missing clerkUrl in authenticateContext");
    }
    const redirectUrl = this.removeDevBrowserFromURL(this.authenticateContext.clerkUrl);
    const frontendApiNoProtocol = this.authenticateContext.frontendApi.replace(/http(s)?:\/\//, "");
    const url = new URL(`https://${frontendApiNoProtocol}/v1/client/handshake`);
    url.searchParams.append("redirect_url", redirectUrl?.href || "");
    url.searchParams.append("__clerk_api_version", SUPPORTED_BAPI_VERSION);
    url.searchParams.append(
      constants.QueryParameters.SuffixedCookies,
      this.authenticateContext.usesSuffixedCookies().toString()
    );
    url.searchParams.append(constants.QueryParameters.HandshakeReason, reason);
    if (this.authenticateContext.instanceType === "development" && this.authenticateContext.devBrowserToken) {
      url.searchParams.append(constants.QueryParameters.DevBrowser, this.authenticateContext.devBrowserToken);
    }
    const toActivate = this.getOrganizationSyncTarget(this.authenticateContext.clerkUrl, this.organizationMatcher);
    if (toActivate) {
      const params = this.getOrganizationSyncQueryParams(toActivate);
      params.forEach((value, key) => {
        url.searchParams.append(key, value);
      });
    }
    return new Headers({ [constants.Headers.Location]: url.href });
  }
  /**
   * Resolves a handshake request by verifying the handshake token and setting appropriate cookies
   * @returns Promise resolving to either a SignedInState or SignedOutState
   * @throws Error if handshake verification fails or if there are issues with the session token
   */
  async resolveHandshake() {
    const headers = new Headers({
      "Access-Control-Allow-Origin": "null",
      "Access-Control-Allow-Credentials": "true"
    });
    const cookiesToSet = [];
    if (this.authenticateContext.handshakeNonce) {
      console.warn("Clerk: Handshake nonce is not implemented yet.");
    }
    if (this.authenticateContext.handshakeToken) {
      const handshakePayload = await verifyHandshakeToken(
        this.authenticateContext.handshakeToken,
        this.authenticateContext
      );
      cookiesToSet.push(...handshakePayload.handshake);
    }
    let sessionToken = "";
    cookiesToSet.forEach((x) => {
      headers.append("Set-Cookie", x);
      if (getCookieName(x).startsWith(constants.Cookies.Session)) {
        sessionToken = getCookieValue(x);
      }
    });
    if (this.authenticateContext.instanceType === "development") {
      const newUrl = new URL(this.authenticateContext.clerkUrl);
      newUrl.searchParams.delete(constants.QueryParameters.Handshake);
      newUrl.searchParams.delete(constants.QueryParameters.HandshakeHelp);
      headers.append(constants.Headers.Location, newUrl.toString());
      headers.set(constants.Headers.CacheControl, "no-store");
    }
    if (sessionToken === "") {
      return signedOut(this.authenticateContext, AuthErrorReason.SessionTokenMissing, "", headers);
    }
    const { data, errors: [error] = [] } = await verifyToken(sessionToken, this.authenticateContext);
    if (data) {
      return signedIn(this.authenticateContext, data, headers, sessionToken);
    }
    if (this.authenticateContext.instanceType === "development" && (error?.reason === TokenVerificationErrorReason.TokenExpired || error?.reason === TokenVerificationErrorReason.TokenNotActiveYet || error?.reason === TokenVerificationErrorReason.TokenIatInTheFuture)) {
      const developmentError = new TokenVerificationError({
        action: error.action,
        message: error.message,
        reason: error.reason
      });
      developmentError.tokenCarrier = "cookie";
      console.error(
        `Clerk: Clock skew detected. This usually means that your system clock is inaccurate. Clerk will attempt to account for the clock skew in development.

To resolve this issue, make sure your system's clock is set to the correct time (e.g. turn off and on automatic time synchronization).

---

${developmentError.getFullMessage()}`
      );
      const { data: retryResult, errors: [retryError] = [] } = await verifyToken(sessionToken, {
        ...this.authenticateContext,
        clockSkewInMs: 864e5
      });
      if (retryResult) {
        return signedIn(this.authenticateContext, retryResult, headers, sessionToken);
      }
      throw new Error(retryError?.message || "Clerk: Handshake retry failed.");
    }
    throw new Error(error?.message || "Clerk: Handshake failed.");
  }
  /**
   * Handles handshake token verification errors in development mode
   * @param error - The TokenVerificationError that occurred
   * @throws Error with a descriptive message about the verification failure
   */
  handleTokenVerificationErrorInDevelopment(error) {
    if (error.reason === TokenVerificationErrorReason.TokenInvalidSignature) {
      const msg = `Clerk: Handshake token verification failed due to an invalid signature. If you have switched Clerk keys locally, clear your cookies and try again.`;
      throw new Error(msg);
    }
    throw new Error(`Clerk: Handshake token verification failed: ${error.getFullMessage()}.`);
  }
  /**
   * Checks if a redirect loop is detected and sets headers to track redirect count
   * @param headers - The Headers object to modify
   * @returns boolean indicating if a redirect loop was detected (true) or if the request can proceed (false)
   */
  checkAndTrackRedirectLoop(headers) {
    if (this.redirectLoopCounter === 3) {
      return true;
    }
    const newCounterValue = this.redirectLoopCounter + 1;
    const cookieName = constants.Cookies.RedirectCount;
    headers.append("Set-Cookie", `${cookieName}=${newCounterValue}; SameSite=Lax; HttpOnly; Max-Age=3`);
    return false;
  }
  removeDevBrowserFromURL(url) {
    const updatedURL = new URL(url);
    updatedURL.searchParams.delete(constants.QueryParameters.DevBrowser);
    updatedURL.searchParams.delete(constants.QueryParameters.LegacyDevBrowser);
    return updatedURL;
  }
  getOrganizationSyncTarget(url, matchers) {
    return matchers.findTarget(url);
  }
  getOrganizationSyncQueryParams(toActivate) {
    const ret = /* @__PURE__ */ new Map();
    if (toActivate.type === "personalAccount") {
      ret.set("organization_id", "");
    }
    if (toActivate.type === "organization") {
      if (toActivate.organizationId) {
        ret.set("organization_id", toActivate.organizationId);
      }
      if (toActivate.organizationSlug) {
        ret.set("organization_id", toActivate.organizationSlug);
      }
    }
    return ret;
  }
};
var OrganizationMatcher = class {
  constructor(options) {
    this.organizationPattern = this.createMatcher(options?.organizationPatterns);
    this.personalAccountPattern = this.createMatcher(options?.personalAccountPatterns);
  }
  createMatcher(pattern) {
    if (!pattern) return null;
    try {
      return match(pattern);
    } catch (e) {
      throw new Error(`Invalid pattern "${pattern}": ${e}`);
    }
  }
  findTarget(url) {
    const orgTarget = this.findOrganizationTarget(url);
    if (orgTarget) return orgTarget;
    return this.findPersonalAccountTarget(url);
  }
  findOrganizationTarget(url) {
    if (!this.organizationPattern) return null;
    try {
      const result = this.organizationPattern(url.pathname);
      if (!result || !("params" in result)) return null;
      const params = result.params;
      if (params.id) return { type: "organization", organizationId: params.id };
      if (params.slug) return { type: "organization", organizationSlug: params.slug };
      return null;
    } catch (e) {
      console.error("Failed to match organization pattern:", e);
      return null;
    }
  }
  findPersonalAccountTarget(url) {
    if (!this.personalAccountPattern) return null;
    try {
      const result = this.personalAccountPattern(url.pathname);
      return result ? { type: "personalAccount" } : null;
    } catch (e) {
      console.error("Failed to match personal account pattern:", e);
      return null;
    }
  }
};
var RefreshTokenErrorReason = {
  NonEligibleNoCookie: "non-eligible-no-refresh-cookie",
  NonEligibleNonGet: "non-eligible-non-get",
  InvalidSessionToken: "invalid-session-token",
  MissingApiClient: "missing-api-client",
  MissingSessionToken: "missing-session-token",
  MissingRefreshToken: "missing-refresh-token",
  ExpiredSessionTokenDecodeFailed: "expired-session-token-decode-failed",
  ExpiredSessionTokenMissingSidClaim: "expired-session-token-missing-sid-claim",
  FetchError: "fetch-error",
  UnexpectedSDKError: "unexpected-sdk-error",
  UnexpectedBAPIError: "unexpected-bapi-error"
};
function assertSignInUrlExists(signInUrl, key) {
  if (!signInUrl && isDevelopmentFromSecretKey(key)) {
    throw new Error(`Missing signInUrl. Pass a signInUrl for dev instances if an app is satellite`);
  }
}
function assertProxyUrlOrDomain(proxyUrlOrDomain) {
  if (!proxyUrlOrDomain) {
    throw new Error(`Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl`);
  }
}
function assertSignInUrlFormatAndOrigin(_signInUrl, origin) {
  let signInUrl;
  try {
    signInUrl = new URL(_signInUrl);
  } catch {
    throw new Error(`The signInUrl needs to have a absolute url format.`);
  }
  if (signInUrl.origin === origin) {
    throw new Error(`The signInUrl needs to be on a different origin than your satellite application.`);
  }
}
function isRequestEligibleForRefresh(err, authenticateContext, request) {
  return err.reason === TokenVerificationErrorReason.TokenExpired && !!authenticateContext.refreshTokenInCookie && request.method === "GET";
}
async function authenticateRequest(request, options) {
  const authenticateContext = await createAuthenticateContext(createClerkRequest(request), options);
  assertValidSecretKey(authenticateContext.secretKey);
  if (authenticateContext.isSatellite) {
    assertSignInUrlExists(authenticateContext.signInUrl, authenticateContext.secretKey);
    if (authenticateContext.signInUrl && authenticateContext.origin) {
      assertSignInUrlFormatAndOrigin(authenticateContext.signInUrl, authenticateContext.origin);
    }
    assertProxyUrlOrDomain(authenticateContext.proxyUrl || authenticateContext.domain);
  }
  const organizationMatcher = new OrganizationMatcher(options.organizationSyncOptions);
  const handshakeService = new HandshakeService(
    authenticateContext,
    { organizationSyncOptions: options.organizationSyncOptions },
    organizationMatcher
  );
  async function refreshToken(authenticateContext2) {
    if (!options.apiClient) {
      return {
        data: null,
        error: {
          message: "An apiClient is needed to perform token refresh.",
          cause: { reason: RefreshTokenErrorReason.MissingApiClient }
        }
      };
    }
    const { sessionToken: expiredSessionToken, refreshTokenInCookie: refreshToken2 } = authenticateContext2;
    if (!expiredSessionToken) {
      return {
        data: null,
        error: {
          message: "Session token must be provided.",
          cause: { reason: RefreshTokenErrorReason.MissingSessionToken }
        }
      };
    }
    if (!refreshToken2) {
      return {
        data: null,
        error: {
          message: "Refresh token must be provided.",
          cause: { reason: RefreshTokenErrorReason.MissingRefreshToken }
        }
      };
    }
    const { data: decodeResult, errors: decodedErrors } = decodeJwt(expiredSessionToken);
    if (!decodeResult || decodedErrors) {
      return {
        data: null,
        error: {
          message: "Unable to decode the expired session token.",
          cause: { reason: RefreshTokenErrorReason.ExpiredSessionTokenDecodeFailed, errors: decodedErrors }
        }
      };
    }
    if (!decodeResult?.payload?.sid) {
      return {
        data: null,
        error: {
          message: "Expired session token is missing the `sid` claim.",
          cause: { reason: RefreshTokenErrorReason.ExpiredSessionTokenMissingSidClaim }
        }
      };
    }
    try {
      const response = await options.apiClient.sessions.refreshSession(decodeResult.payload.sid, {
        format: "cookie",
        suffixed_cookies: authenticateContext2.usesSuffixedCookies(),
        expired_token: expiredSessionToken || "",
        refresh_token: refreshToken2 || "",
        request_origin: authenticateContext2.clerkUrl.origin,
        // The refresh endpoint expects headers as Record<string, string[]>, so we need to transform it.
        request_headers: Object.fromEntries(Array.from(request.headers.entries()).map(([k, v]) => [k, [v]]))
      });
      return { data: response.cookies, error: null };
    } catch (err) {
      if (err?.errors?.length) {
        if (err.errors[0].code === "unexpected_error") {
          return {
            data: null,
            error: {
              message: `Fetch unexpected error`,
              cause: { reason: RefreshTokenErrorReason.FetchError, errors: err.errors }
            }
          };
        }
        return {
          data: null,
          error: {
            message: err.errors[0].code,
            cause: { reason: err.errors[0].code, errors: err.errors }
          }
        };
      } else {
        return {
          data: null,
          error: {
            message: `Unexpected Server/BAPI error`,
            cause: { reason: RefreshTokenErrorReason.UnexpectedBAPIError, errors: [err] }
          }
        };
      }
    }
  }
  async function attemptRefresh(authenticateContext2) {
    const { data: cookiesToSet, error } = await refreshToken(authenticateContext2);
    if (!cookiesToSet || cookiesToSet.length === 0) {
      return { data: null, error };
    }
    const headers = new Headers();
    let sessionToken = "";
    cookiesToSet.forEach((x) => {
      headers.append("Set-Cookie", x);
      if (getCookieName(x).startsWith(constants.Cookies.Session)) {
        sessionToken = getCookieValue(x);
      }
    });
    const { data: jwtPayload, errors } = await verifyToken(sessionToken, authenticateContext2);
    if (errors) {
      return {
        data: null,
        error: {
          message: `Clerk: unable to verify refreshed session token.`,
          cause: { reason: RefreshTokenErrorReason.InvalidSessionToken, errors }
        }
      };
    }
    return { data: { jwtPayload, sessionToken, headers }, error: null };
  }
  function handleMaybeHandshakeStatus(authenticateContext2, reason, message, headers) {
    if (!handshakeService.isRequestEligibleForHandshake()) {
      return signedOut(authenticateContext2, reason, message);
    }
    const handshakeHeaders = headers ?? handshakeService.buildRedirectToHandshake(reason);
    if (handshakeHeaders.get(constants.Headers.Location)) {
      handshakeHeaders.set(constants.Headers.CacheControl, "no-store");
    }
    const isRedirectLoop = handshakeService.checkAndTrackRedirectLoop(handshakeHeaders);
    if (isRedirectLoop) {
      const msg = `Clerk: Refreshing the session token resulted in an infinite redirect loop. This usually means that your Clerk instance keys do not match - make sure to copy the correct publishable and secret keys from the Clerk dashboard.`;
      console.log(msg);
      return signedOut(authenticateContext2, reason, message);
    }
    return handshake(authenticateContext2, reason, message, handshakeHeaders);
  }
  function handleMaybeOrganizationSyncHandshake(authenticateContext2, auth) {
    const organizationSyncTarget = organizationMatcher.findTarget(authenticateContext2.clerkUrl);
    if (!organizationSyncTarget) {
      return null;
    }
    let mustActivate = false;
    if (organizationSyncTarget.type === "organization") {
      if (organizationSyncTarget.organizationSlug && organizationSyncTarget.organizationSlug !== auth.orgSlug) {
        mustActivate = true;
      }
      if (organizationSyncTarget.organizationId && organizationSyncTarget.organizationId !== auth.orgId) {
        mustActivate = true;
      }
    }
    if (organizationSyncTarget.type === "personalAccount" && auth.orgId) {
      mustActivate = true;
    }
    if (!mustActivate) {
      return null;
    }
    if (authenticateContext2.handshakeRedirectLoopCounter > 0) {
      console.warn(
        "Clerk: Organization activation handshake loop detected. This is likely due to an invalid organization ID or slug. Skipping organization activation."
      );
      return null;
    }
    const handshakeState = handleMaybeHandshakeStatus(
      authenticateContext2,
      AuthErrorReason.ActiveOrganizationMismatch,
      ""
    );
    if (handshakeState.status !== "handshake") {
      return null;
    }
    return handshakeState;
  }
  async function authenticateRequestWithTokenInHeader() {
    const { sessionTokenInHeader } = authenticateContext;
    try {
      const { data, errors } = await verifyToken(sessionTokenInHeader, authenticateContext);
      if (errors) {
        throw errors[0];
      }
      return signedIn(authenticateContext, data, void 0, sessionTokenInHeader);
    } catch (err) {
      return handleError(err, "header");
    }
  }
  async function authenticateRequestWithTokenInCookie() {
    const hasActiveClient = authenticateContext.clientUat;
    const hasSessionToken = !!authenticateContext.sessionTokenInCookie;
    const hasDevBrowserToken = !!authenticateContext.devBrowserToken;
    if (authenticateContext.handshakeToken) {
      try {
        return await handshakeService.resolveHandshake();
      } catch (error) {
        if (error instanceof TokenVerificationError && authenticateContext.instanceType === "development") {
          handshakeService.handleTokenVerificationErrorInDevelopment(error);
        } else {
          console.error("Clerk: unable to resolve handshake:", error);
        }
      }
    }
    if (authenticateContext.instanceType === "development" && authenticateContext.clerkUrl.searchParams.has(constants.QueryParameters.DevBrowser)) {
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.DevBrowserSync, "");
    }
    const isRequestEligibleForMultiDomainSync = authenticateContext.isSatellite && authenticateContext.secFetchDest === "document";
    if (authenticateContext.instanceType === "production" && isRequestEligibleForMultiDomainSync) {
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SatelliteCookieNeedsSyncing, "");
    }
    if (authenticateContext.instanceType === "development" && isRequestEligibleForMultiDomainSync && !authenticateContext.clerkUrl.searchParams.has(constants.QueryParameters.ClerkSynced)) {
      const redirectURL = new URL(authenticateContext.signInUrl);
      redirectURL.searchParams.append(
        constants.QueryParameters.ClerkRedirectUrl,
        authenticateContext.clerkUrl.toString()
      );
      const headers = new Headers({ [constants.Headers.Location]: redirectURL.toString() });
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SatelliteCookieNeedsSyncing, "", headers);
    }
    const redirectUrl = new URL(authenticateContext.clerkUrl).searchParams.get(
      constants.QueryParameters.ClerkRedirectUrl
    );
    if (authenticateContext.instanceType === "development" && !authenticateContext.isSatellite && redirectUrl) {
      const redirectBackToSatelliteUrl = new URL(redirectUrl);
      if (authenticateContext.devBrowserToken) {
        redirectBackToSatelliteUrl.searchParams.append(
          constants.QueryParameters.DevBrowser,
          authenticateContext.devBrowserToken
        );
      }
      redirectBackToSatelliteUrl.searchParams.append(constants.QueryParameters.ClerkSynced, "true");
      const headers = new Headers({ [constants.Headers.Location]: redirectBackToSatelliteUrl.toString() });
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.PrimaryRespondsToSyncing, "", headers);
    }
    if (authenticateContext.instanceType === "development" && !hasDevBrowserToken) {
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.DevBrowserMissing, "");
    }
    if (!hasActiveClient && !hasSessionToken) {
      return signedOut(authenticateContext, AuthErrorReason.SessionTokenAndUATMissing, "");
    }
    if (!hasActiveClient && hasSessionToken) {
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SessionTokenWithoutClientUAT, "");
    }
    if (hasActiveClient && !hasSessionToken) {
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.ClientUATWithoutSessionToken, "");
    }
    const { data: decodeResult, errors: decodedErrors } = decodeJwt(authenticateContext.sessionTokenInCookie);
    if (decodedErrors) {
      return handleError(decodedErrors[0], "cookie");
    }
    if (decodeResult.payload.iat < authenticateContext.clientUat) {
      return handleMaybeHandshakeStatus(authenticateContext, AuthErrorReason.SessionTokenIATBeforeClientUAT, "");
    }
    try {
      const { data, errors } = await verifyToken(authenticateContext.sessionTokenInCookie, authenticateContext);
      if (errors) {
        throw errors[0];
      }
      const signedInRequestState = signedIn(
        authenticateContext,
        data,
        void 0,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        authenticateContext.sessionTokenInCookie
      );
      const handshakeRequestState = handleMaybeOrganizationSyncHandshake(
        authenticateContext,
        signedInRequestState.toAuth()
      );
      if (handshakeRequestState) {
        return handshakeRequestState;
      }
      return signedInRequestState;
    } catch (err) {
      return handleError(err, "cookie");
    }
    return signedOut(authenticateContext, AuthErrorReason.UnexpectedError);
  }
  async function handleError(err, tokenCarrier) {
    if (!(err instanceof TokenVerificationError)) {
      return signedOut(authenticateContext, AuthErrorReason.UnexpectedError);
    }
    let refreshError;
    if (isRequestEligibleForRefresh(err, authenticateContext, request)) {
      const { data, error } = await attemptRefresh(authenticateContext);
      if (data) {
        return signedIn(authenticateContext, data.jwtPayload, data.headers, data.sessionToken);
      }
      if (error?.cause?.reason) {
        refreshError = error.cause.reason;
      } else {
        refreshError = RefreshTokenErrorReason.UnexpectedSDKError;
      }
    } else {
      if (request.method !== "GET") {
        refreshError = RefreshTokenErrorReason.NonEligibleNonGet;
      } else if (!authenticateContext.refreshTokenInCookie) {
        refreshError = RefreshTokenErrorReason.NonEligibleNoCookie;
      } else {
        refreshError = null;
      }
    }
    err.tokenCarrier = tokenCarrier;
    const reasonToHandshake = [
      TokenVerificationErrorReason.TokenExpired,
      TokenVerificationErrorReason.TokenNotActiveYet,
      TokenVerificationErrorReason.TokenIatInTheFuture
    ].includes(err.reason);
    if (reasonToHandshake) {
      return handleMaybeHandshakeStatus(
        authenticateContext,
        convertTokenVerificationErrorReasonToAuthErrorReason({ tokenError: err.reason, refreshError }),
        err.getFullMessage()
      );
    }
    return signedOut(authenticateContext, err.reason, err.getFullMessage());
  }
  if (authenticateContext.sessionTokenInHeader) {
    return authenticateRequestWithTokenInHeader();
  }
  return authenticateRequestWithTokenInCookie();
}
var debugRequestState = (params) => {
  const { isSignedIn, proxyUrl, reason, message, publishableKey, isSatellite, domain } = params;
  return { isSignedIn, proxyUrl, reason, message, publishableKey, isSatellite, domain };
};
var convertTokenVerificationErrorReasonToAuthErrorReason = ({
  tokenError,
  refreshError
}) => {
  switch (tokenError) {
    case TokenVerificationErrorReason.TokenExpired:
      return `${AuthErrorReason.SessionTokenExpired}-refresh-${refreshError}`;
    case TokenVerificationErrorReason.TokenNotActiveYet:
      return AuthErrorReason.SessionTokenNBF;
    case TokenVerificationErrorReason.TokenIatInTheFuture:
      return AuthErrorReason.SessionTokenIatInTheFuture;
    default:
      return AuthErrorReason.UnexpectedError;
  }
};
function mergePreDefinedOptions(preDefinedOptions, options) {
  return Object.keys(preDefinedOptions).reduce(
    (obj, key) => {
      return { ...obj, [key]: options[key] || obj[key] };
    },
    { ...preDefinedOptions }
  );
}
var defaultOptions = {
  secretKey: "",
  jwtKey: "",
  apiUrl: void 0,
  apiVersion: void 0,
  proxyUrl: "",
  publishableKey: "",
  isSatellite: false,
  domain: "",
  audience: ""
};
function createAuthenticateRequest(params) {
  const buildTimeOptions = mergePreDefinedOptions(defaultOptions, params.options);
  const apiClient = params.apiClient;
  const authenticateRequest2 = (request, options = {}) => {
    const { apiUrl, apiVersion } = buildTimeOptions;
    const runTimeOptions = mergePreDefinedOptions(buildTimeOptions, options);
    return authenticateRequest(request, {
      ...options,
      ...runTimeOptions,
      // We should add all the omitted props from options here (eg apiUrl / apiVersion)
      // to avoid runtime options override them.
      apiUrl,
      apiVersion,
      apiClient
    });
  };
  return {
    authenticateRequest: authenticateRequest2,
    debugRequestState
  };
}
function withLegacySyncReturn(cb) {
  return (...args) => {
    const { data, errors } = cb(...args);
    if (errors) {
      throw errors[0];
    }
    return data;
  };
}
function isTruthy(value) {
  if (typeof value === `boolean`) {
    return value;
  }
  if (value === void 0 || value === null) {
    return false;
  }
  if (typeof value === `string`) {
    if (value.toLowerCase() === `true`) {
      return true;
    }
    if (value.toLowerCase() === `false`) {
      return false;
    }
  }
  const number = parseInt(value, 10);
  if (isNaN(number)) {
    return false;
  }
  if (number > 0) {
    return true;
  }
  return false;
}
var DEFAULT_CACHE_TTL_MS = 864e5;
var _storageKey, _cacheTtl, _TelemetryEventThrottler_instances, generateKey_fn, cache_get, isValidBrowser_get;
var TelemetryEventThrottler = class {
  constructor() {
    __privateAdd(this, _TelemetryEventThrottler_instances);
    __privateAdd(this, _storageKey, "clerk_telemetry_throttler");
    __privateAdd(this, _cacheTtl, DEFAULT_CACHE_TTL_MS);
  }
  isEventThrottled(payload) {
    if (!__privateGet(this, _TelemetryEventThrottler_instances, isValidBrowser_get)) {
      return false;
    }
    const now = Date.now();
    const key = __privateMethod(this, _TelemetryEventThrottler_instances, generateKey_fn).call(this, payload);
    const entry = __privateGet(this, _TelemetryEventThrottler_instances, cache_get)?.[key];
    if (!entry) {
      const updatedCache = {
        ...__privateGet(this, _TelemetryEventThrottler_instances, cache_get),
        [key]: now
      };
      localStorage.setItem(__privateGet(this, _storageKey), JSON.stringify(updatedCache));
    }
    const shouldInvalidate = entry && now - entry > __privateGet(this, _cacheTtl);
    if (shouldInvalidate) {
      const updatedCache = __privateGet(this, _TelemetryEventThrottler_instances, cache_get);
      delete updatedCache[key];
      localStorage.setItem(__privateGet(this, _storageKey), JSON.stringify(updatedCache));
    }
    return !!entry;
  }
};
_storageKey = /* @__PURE__ */ new WeakMap();
_cacheTtl = /* @__PURE__ */ new WeakMap();
_TelemetryEventThrottler_instances = /* @__PURE__ */ new WeakSet();
generateKey_fn = function(event) {
  const { sk: _sk, pk: _pk, payload, ...rest } = event;
  const sanitizedEvent = {
    ...payload,
    ...rest
  };
  return JSON.stringify(
    Object.keys({
      ...payload,
      ...rest
    }).sort().map((key) => sanitizedEvent[key])
  );
};
cache_get = function() {
  const cacheString = localStorage.getItem(__privateGet(this, _storageKey));
  if (!cacheString) {
    return {};
  }
  return JSON.parse(cacheString);
};
isValidBrowser_get = function() {
  if (typeof window === "undefined") {
    return false;
  }
  const storage = window.localStorage;
  if (!storage) {
    return false;
  }
  try {
    const testKey = "test";
    storage.setItem(testKey, testKey);
    storage.removeItem(testKey);
    return true;
  } catch (err) {
    const isQuotaExceededError = err instanceof DOMException && // Check error names for different browsers
    (err.name === "QuotaExceededError" || err.name === "NS_ERROR_DOM_QUOTA_REACHED");
    if (isQuotaExceededError && storage.length > 0) {
      storage.removeItem(__privateGet(this, _storageKey));
    }
    return false;
  }
};
var DEFAULT_CONFIG = {
  samplingRate: 1,
  maxBufferSize: 5,
  // Production endpoint: https://clerk-telemetry.com
  // Staging endpoint: https://staging.clerk-telemetry.com
  // Local: http://localhost:8787
  endpoint: "https://clerk-telemetry.com"
};
var _config, _eventThrottler, _metadata, _buffer, _pendingFlush, _TelemetryCollector_instances, shouldRecord_fn, shouldBeSampled_fn, scheduleFlush_fn, flush_fn, logEvent_fn, getSDKMetadata_fn, preparePayload_fn;
var TelemetryCollector = class {
  constructor(options) {
    __privateAdd(this, _TelemetryCollector_instances);
    __privateAdd(this, _config);
    __privateAdd(this, _eventThrottler);
    __privateAdd(this, _metadata, {});
    __privateAdd(this, _buffer, []);
    __privateAdd(this, _pendingFlush);
    __privateSet(this, _config, {
      maxBufferSize: options.maxBufferSize ?? DEFAULT_CONFIG.maxBufferSize,
      samplingRate: options.samplingRate ?? DEFAULT_CONFIG.samplingRate,
      disabled: options.disabled ?? false,
      debug: options.debug ?? false,
      endpoint: DEFAULT_CONFIG.endpoint
    });
    if (!options.clerkVersion && typeof window === "undefined") {
      __privateGet(this, _metadata).clerkVersion = "";
    } else {
      __privateGet(this, _metadata).clerkVersion = options.clerkVersion ?? "";
    }
    __privateGet(this, _metadata).sdk = options.sdk;
    __privateGet(this, _metadata).sdkVersion = options.sdkVersion;
    __privateGet(this, _metadata).publishableKey = options.publishableKey ?? "";
    const parsedKey = parsePublishableKey(options.publishableKey);
    if (parsedKey) {
      __privateGet(this, _metadata).instanceType = parsedKey.instanceType;
    }
    if (options.secretKey) {
      __privateGet(this, _metadata).secretKey = options.secretKey.substring(0, 16);
    }
    __privateSet(this, _eventThrottler, new TelemetryEventThrottler());
  }
  get isEnabled() {
    if (__privateGet(this, _metadata).instanceType !== "development") {
      return false;
    }
    if (__privateGet(this, _config).disabled || typeof process !== "undefined" && isTruthy(process.env.CLERK_TELEMETRY_DISABLED)) {
      return false;
    }
    if (typeof window !== "undefined" && !!window?.navigator?.webdriver) {
      return false;
    }
    return true;
  }
  get isDebug() {
    return __privateGet(this, _config).debug || typeof process !== "undefined" && isTruthy(process.env.CLERK_TELEMETRY_DEBUG);
  }
  record(event) {
    const preparedPayload = __privateMethod(this, _TelemetryCollector_instances, preparePayload_fn).call(this, event.event, event.payload);
    __privateMethod(this, _TelemetryCollector_instances, logEvent_fn).call(this, preparedPayload.event, preparedPayload);
    if (!__privateMethod(this, _TelemetryCollector_instances, shouldRecord_fn).call(this, preparedPayload, event.eventSamplingRate)) {
      return;
    }
    __privateGet(this, _buffer).push(preparedPayload);
    __privateMethod(this, _TelemetryCollector_instances, scheduleFlush_fn).call(this);
  }
};
_config = /* @__PURE__ */ new WeakMap();
_eventThrottler = /* @__PURE__ */ new WeakMap();
_metadata = /* @__PURE__ */ new WeakMap();
_buffer = /* @__PURE__ */ new WeakMap();
_pendingFlush = /* @__PURE__ */ new WeakMap();
_TelemetryCollector_instances = /* @__PURE__ */ new WeakSet();
shouldRecord_fn = function(preparedPayload, eventSamplingRate) {
  return this.isEnabled && !this.isDebug && __privateMethod(this, _TelemetryCollector_instances, shouldBeSampled_fn).call(this, preparedPayload, eventSamplingRate);
};
shouldBeSampled_fn = function(preparedPayload, eventSamplingRate) {
  const randomSeed = Math.random();
  const toBeSampled = randomSeed <= __privateGet(this, _config).samplingRate && (typeof eventSamplingRate === "undefined" || randomSeed <= eventSamplingRate);
  if (!toBeSampled) {
    return false;
  }
  return !__privateGet(this, _eventThrottler).isEventThrottled(preparedPayload);
};
scheduleFlush_fn = function() {
  if (typeof window === "undefined") {
    __privateMethod(this, _TelemetryCollector_instances, flush_fn).call(this);
    return;
  }
  const isBufferFull = __privateGet(this, _buffer).length >= __privateGet(this, _config).maxBufferSize;
  if (isBufferFull) {
    if (__privateGet(this, _pendingFlush)) {
      const cancel = typeof cancelIdleCallback !== "undefined" ? cancelIdleCallback : clearTimeout;
      cancel(__privateGet(this, _pendingFlush));
    }
    __privateMethod(this, _TelemetryCollector_instances, flush_fn).call(this);
    return;
  }
  if (__privateGet(this, _pendingFlush)) {
    return;
  }
  if ("requestIdleCallback" in window) {
    __privateSet(this, _pendingFlush, requestIdleCallback(() => {
      __privateMethod(this, _TelemetryCollector_instances, flush_fn).call(this);
    }));
  } else {
    __privateSet(this, _pendingFlush, setTimeout(() => {
      __privateMethod(this, _TelemetryCollector_instances, flush_fn).call(this);
    }, 0));
  }
};
flush_fn = function() {
  fetch(new URL("/v1/event", __privateGet(this, _config).endpoint), {
    method: "POST",
    // TODO: We send an array here with that idea that we can eventually send multiple events.
    body: JSON.stringify({
      events: __privateGet(this, _buffer)
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(() => void 0).then(() => {
    __privateSet(this, _buffer, []);
  }).catch(() => void 0);
};
logEvent_fn = function(event, payload) {
  if (!this.isDebug) {
    return;
  }
  if (typeof console.groupCollapsed !== "undefined") {
    console.groupCollapsed("[clerk/telemetry]", event);
    console.log(payload);
    console.groupEnd();
  } else {
    console.log("[clerk/telemetry]", event, payload);
  }
};
getSDKMetadata_fn = function() {
  let sdkMetadata = {
    name: __privateGet(this, _metadata).sdk,
    version: __privateGet(this, _metadata).sdkVersion
  };
  if (typeof window !== "undefined" && window.Clerk) {
    sdkMetadata = { ...sdkMetadata, ...window.Clerk.constructor.sdkMetadata };
  }
  return sdkMetadata;
};
preparePayload_fn = function(event, payload) {
  const sdkMetadata = __privateMethod(this, _TelemetryCollector_instances, getSDKMetadata_fn).call(this);
  return {
    event,
    cv: __privateGet(this, _metadata).clerkVersion ?? "",
    it: __privateGet(this, _metadata).instanceType ?? "",
    sdk: sdkMetadata.name,
    sdkv: sdkMetadata.version,
    ...__privateGet(this, _metadata).publishableKey ? { pk: __privateGet(this, _metadata).publishableKey } : {},
    ...__privateGet(this, _metadata).secretKey ? { sk: __privateGet(this, _metadata).secretKey } : {},
    payload
  };
};
function createClerkClient(options) {
  const opts = { ...options };
  const apiClient = createBackendApiClient(opts);
  const requestState = createAuthenticateRequest({ options: opts, apiClient });
  const telemetry = new TelemetryCollector({
    ...options.telemetry,
    publishableKey: opts.publishableKey,
    secretKey: opts.secretKey,
    samplingRate: 0.1,
    ...opts.sdkMetadata ? { sdk: opts.sdkMetadata.name, sdkVersion: opts.sdkMetadata.version } : {}
  });
  return {
    ...apiClient,
    ...requestState,
    telemetry
  };
}
function buildAccountsBaseUrl(frontendApi) {
  if (!frontendApi) {
    return "";
  }
  const accountsBaseUrl = frontendApi.replace(/clerk\.accountsstage\./, "accountsstage.").replace(/clerk\.accounts\.|clerk\./, "accounts.");
  return `https://${accountsBaseUrl}`;
}
var buildUrl = (_baseUrl, _targetUrl, _returnBackUrl, _devBrowserToken) => {
  if (_baseUrl === "") {
    return legacyBuildUrl(_targetUrl.toString(), _returnBackUrl?.toString());
  }
  const baseUrl = new URL(_baseUrl);
  const returnBackUrl = _returnBackUrl ? new URL(_returnBackUrl, baseUrl) : void 0;
  const res = new URL(_targetUrl, baseUrl);
  if (returnBackUrl) {
    res.searchParams.set("redirect_url", returnBackUrl.toString());
  }
  if (_devBrowserToken && baseUrl.hostname !== res.hostname) {
    res.searchParams.set(constants.QueryParameters.DevBrowser, _devBrowserToken);
  }
  return res.toString();
};
var legacyBuildUrl = (targetUrl, redirectUrl) => {
  let url;
  if (!targetUrl.startsWith("http")) {
    if (!redirectUrl || !redirectUrl.startsWith("http")) {
      throw new Error("destination url or return back url should be an absolute path url!");
    }
    const baseURL = new URL(redirectUrl);
    url = new URL(targetUrl, baseURL.origin);
  } else {
    url = new URL(targetUrl);
  }
  if (redirectUrl) {
    url.searchParams.set("redirect_url", redirectUrl);
  }
  return url.toString();
};
var createRedirect = (params) => {
  const { publishableKey, redirectAdapter: redirectAdapter2, signInUrl, signUpUrl, baseUrl, sessionStatus } = params;
  const parsedPublishableKey = parsePublishableKey(publishableKey);
  const frontendApi = parsedPublishableKey?.frontendApi;
  const isDevelopment = parsedPublishableKey?.instanceType === "development";
  const accountsBaseUrl = buildAccountsBaseUrl(frontendApi);
  const hasPendingStatus = sessionStatus === "pending";
  const redirectToTasks = (url, { returnBackUrl }) => {
    return redirectAdapter2(
      buildUrl(baseUrl, `${url}/tasks`, returnBackUrl, isDevelopment ? params.devBrowserToken : null)
    );
  };
  const redirectToSignUp = ({ returnBackUrl } = {}) => {
    if (!signUpUrl && !accountsBaseUrl) {
      errorThrower$1.throwMissingPublishableKeyError();
    }
    const accountsSignUpUrl = `${accountsBaseUrl}/sign-up`;
    function buildSignUpUrl(signIn) {
      if (!signIn) {
        return;
      }
      const url = new URL(signIn, baseUrl);
      url.pathname = `${url.pathname}/create`;
      return url.toString();
    }
    const targetUrl = signUpUrl || buildSignUpUrl(signInUrl) || accountsSignUpUrl;
    if (hasPendingStatus) {
      return redirectToTasks(targetUrl, { returnBackUrl });
    }
    return redirectAdapter2(buildUrl(baseUrl, targetUrl, returnBackUrl, isDevelopment ? params.devBrowserToken : null));
  };
  const redirectToSignIn = ({ returnBackUrl } = {}) => {
    if (!signInUrl && !accountsBaseUrl) {
      errorThrower$1.throwMissingPublishableKeyError();
    }
    const accountsSignInUrl = `${accountsBaseUrl}/sign-in`;
    const targetUrl = signInUrl || accountsSignInUrl;
    if (hasPendingStatus) {
      return redirectToTasks(targetUrl, { returnBackUrl });
    }
    return redirectAdapter2(buildUrl(baseUrl, targetUrl, returnBackUrl, isDevelopment ? params.devBrowserToken : null));
  };
  return { redirectToSignUp, redirectToSignIn };
};
var CLERK_NETLIFY_CACHE_BUST_PARAM = "__clerk_netlify_cache_bust";
function handleNetlifyCacheInDevInstance({
  locationHeader,
  requestStateHeaders,
  publishableKey
}) {
  const isOnNetlify = process.env.NETLIFY || process.env.URL?.endsWith("netlify.app") || Boolean(process.env.NETLIFY_FUNCTIONS_TOKEN);
  const isDevelopmentInstance = isDevelopmentFromPublishableKey(publishableKey);
  if (isOnNetlify && isDevelopmentInstance) {
    const hasHandshakeQueryParam = locationHeader.includes("__clerk_handshake");
    if (!hasHandshakeQueryParam) {
      const url = new URL(locationHeader);
      url.searchParams.append(CLERK_NETLIFY_CACHE_BUST_PARAM, Date.now().toString());
      requestStateHeaders.set("Location", url.toString());
    }
  }
}
function isValidProxyUrl(key) {
  if (!key) {
    return true;
  }
  return isHttpOrHttps(key) || isProxyUrlRelative(key);
}
function isHttpOrHttps(key) {
  return /^http(s)?:\/\//.test(key || "");
}
function isProxyUrlRelative(key) {
  return key.startsWith("/");
}
function proxyUrlToAbsoluteURL(url) {
  if (!url) {
    return "";
  }
  return isProxyUrlRelative(url) ? new URL(url, window.location.origin).toString() : url;
}
function handleValueOrFn(value, url, defaultValue) {
  if (typeof value === "function") {
    return value(url);
  }
  if (typeof value !== "undefined") {
    return value;
  }
  if (typeof defaultValue !== "undefined") {
    return defaultValue;
  }
  return void 0;
}
async function createAsyncLocalStorage() {
  const { AsyncLocalStorage } = await import("node:async_hooks");
  return new AsyncLocalStorage();
}
var authAsyncStorage = await createAsyncLocalStorage();
var versionSelector = (clerkJSVersion, packageVersion = "5.64.1") => {
  if (clerkJSVersion) {
    return clerkJSVersion;
  }
  const prereleaseTag = getPrereleaseTag(packageVersion);
  if (prereleaseTag) {
    if (prereleaseTag === "snapshot") {
      return "5.64.1";
    }
    return prereleaseTag;
  }
  return getMajorVersion(packageVersion);
};
var getPrereleaseTag = (packageVersion) => packageVersion.trim().replace(/^v/, "").match(/-(.+?)(\.|$)/)?.[1];
var getMajorVersion = (packageVersion) => packageVersion.trim().replace(/^v/, "").split(".")[0];
var { isDevOrStagingUrl } = createDevOrStagingUrlCache();
var errorThrower = buildErrorThrower({ packageName: "@clerk/shared" });
function setClerkJsLoadingErrorPackageName(packageName) {
  errorThrower.setPackageName({ packageName });
}
var clerkJsScriptUrl = (opts) => {
  const { clerkJSUrl, clerkJSVariant, clerkJSVersion, proxyUrl, domain, publishableKey } = opts;
  if (clerkJSUrl) {
    return clerkJSUrl;
  }
  let scriptHost = "";
  if (!!proxyUrl && isValidProxyUrl(proxyUrl)) {
    scriptHost = proxyUrlToAbsoluteURL(proxyUrl).replace(/http(s)?:\/\//, "");
  } else if (domain && !isDevOrStagingUrl(parsePublishableKey(publishableKey)?.frontendApi || "")) {
    scriptHost = addClerkPrefix(domain);
  } else {
    scriptHost = parsePublishableKey(publishableKey)?.frontendApi || "";
  }
  const variant = clerkJSVariant ? `${clerkJSVariant.replace(/\.+$/, "")}.` : "";
  const version = versionSelector(clerkJSVersion);
  return `https://${scriptHost}/npm/@clerk/clerk-js@${version}/dist/clerk.${variant}browser.js`;
};
var decodeJwt2 = withLegacySyncReturn(decodeJwt);
var DEV_BROWSER_JWT_KEY = "__clerk_db_jwt";
function setDevBrowserJWTInURL(url, jwt) {
  const resultURL = new URL(url);
  const jwtFromSearch = resultURL.searchParams.get(DEV_BROWSER_JWT_KEY);
  resultURL.searchParams.delete(DEV_BROWSER_JWT_KEY);
  const jwtToSet = jwtFromSearch || jwt;
  if (jwtToSet) {
    resultURL.searchParams.set(DEV_BROWSER_JWT_KEY, jwtToSet);
  }
  return resultURL;
}
const __vite_import_meta_env__ = { "ASSETS_PREFIX": void 0, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CLERK_PUBLISHABLE_KEY": "pk_test_cHJlbWl1bS1yZXB0aWxlLTU5LmNsZXJrLmFjY291bnRzLmRldiQ", "SITE": void 0, "SSR": true };
function getContextEnvVar(envVarName, contextOrLocals) {
  const locals = "locals" in contextOrLocals ? contextOrLocals.locals : contextOrLocals;
  if (locals?.runtime?.env) {
    return locals.runtime.env[envVarName];
  }
  return Object.assign(__vite_import_meta_env__, { CLERK_SECRET_KEY: "sk_test_MQQShCfMpH5SzWaBWcWRnHQ8EOPv62eqQ8dZgAlqSR", PUBLIC: process.env.PUBLIC })[envVarName];
}
function getSafeEnv(context) {
  return {
    domain: getContextEnvVar("PUBLIC_CLERK_DOMAIN", context),
    isSatellite: getContextEnvVar("PUBLIC_CLERK_IS_SATELLITE", context) === "true",
    proxyUrl: getContextEnvVar("PUBLIC_CLERK_PROXY_URL", context),
    pk: getContextEnvVar("PUBLIC_CLERK_PUBLISHABLE_KEY", context),
    sk: getContextEnvVar("CLERK_SECRET_KEY", context),
    signInUrl: getContextEnvVar("PUBLIC_CLERK_SIGN_IN_URL", context),
    signUpUrl: getContextEnvVar("PUBLIC_CLERK_SIGN_UP_URL", context),
    clerkJsUrl: getContextEnvVar("PUBLIC_CLERK_JS_URL", context),
    clerkJsVariant: getContextEnvVar("PUBLIC_CLERK_JS_VARIANT", context),
    clerkJsVersion: getContextEnvVar("PUBLIC_CLERK_JS_VERSION", context),
    apiVersion: getContextEnvVar("CLERK_API_VERSION", context),
    apiUrl: getContextEnvVar("CLERK_API_URL", context),
    telemetryDisabled: isTruthy(getContextEnvVar("PUBLIC_CLERK_TELEMETRY_DISABLED", context)),
    telemetryDebug: isTruthy(getContextEnvVar("PUBLIC_CLERK_TELEMETRY_DEBUG", context))
  };
}
function getClientSafeEnv(context) {
  return {
    domain: getContextEnvVar("PUBLIC_CLERK_DOMAIN", context),
    isSatellite: getContextEnvVar("PUBLIC_CLERK_IS_SATELLITE", context) === "true",
    proxyUrl: getContextEnvVar("PUBLIC_CLERK_PROXY_URL", context),
    signInUrl: getContextEnvVar("PUBLIC_CLERK_SIGN_IN_URL", context),
    signUpUrl: getContextEnvVar("PUBLIC_CLERK_SIGN_UP_URL", context)
  };
}
function buildClerkHotloadScript(locals) {
  const publishableKey = getSafeEnv(locals).pk;
  const proxyUrl = getSafeEnv(locals).proxyUrl;
  const domain = getSafeEnv(locals).domain;
  const scriptSrc = clerkJsScriptUrl({
    clerkJSUrl: getSafeEnv(locals).clerkJsUrl,
    clerkJSVariant: getSafeEnv(locals).clerkJsVariant,
    clerkJSVersion: getSafeEnv(locals).clerkJsVersion,
    domain,
    proxyUrl,
    publishableKey
  });
  return `
  <script src="${scriptSrc}"
  data-clerk-js-script
  async
  crossOrigin='anonymous'
  ${publishableKey ? `data-clerk-publishable-key="${publishableKey}"` : ``}
  ${proxyUrl ? `data-clerk-proxy-url="${proxyUrl}"` : ``}
  ${domain ? `data-clerk-domain="${domain}"` : ``}
  ><\/script>
`;
}
var createClerkClientWithOptions = (context, options) => createClerkClient({
  secretKey: getSafeEnv(context).sk,
  publishableKey: getSafeEnv(context).pk,
  apiUrl: getSafeEnv(context).apiUrl,
  apiVersion: getSafeEnv(context).apiVersion,
  proxyUrl: getSafeEnv(context).proxyUrl,
  domain: getSafeEnv(context).domain,
  isSatellite: getSafeEnv(context).isSatellite,
  userAgent: `${"@clerk/astro"}@${"2.7.1"}`,
  sdkMetadata: {
    name: "@clerk/astro",
    version: "2.7.1",
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    environment: Object.assign(__vite_import_meta_env__, { CLERK_SECRET_KEY: "sk_test_MQQShCfMpH5SzWaBWcWRnHQ8EOPv62eqQ8dZgAlqSR", PUBLIC: process.env.PUBLIC }).MODE
  },
  telemetry: {
    disabled: getSafeEnv(context).telemetryDisabled,
    debug: getSafeEnv(context).telemetryDebug
  },
  ...options
});
var clerkClient = (context) => createClerkClientWithOptions(context);
function getAuthKeyFromRequest(req, key) {
  return getHeader(req, constants.Headers[key]);
}
function getHeader(req, name) {
  return req.headers.get(name);
}
var isRedirect = (res) => {
  return [300, 301, 302, 303, 304, 307, 308].includes(res.status) || res.headers.get(constants.Headers.ClerkRedirectTo) === "true";
};
var setHeader = (res, name, val) => {
  res.headers.set(name, val);
  return res;
};
var createGetAuth = ({ noAuthStatusMessage }) => {
  return (req, locals, opts) => {
    const authToken = locals.authToken || getAuthKeyFromRequest(req, "AuthToken");
    const authStatus = locals.authStatus || getAuthKeyFromRequest(req, "AuthStatus");
    const authMessage = locals.authMessage || getAuthKeyFromRequest(req, "AuthMessage");
    const authReason = locals.authReason || getAuthKeyFromRequest(req, "AuthReason");
    if (!authStatus) {
      throw new Error(noAuthStatusMessage);
    }
    const options = {
      authStatus,
      apiUrl: getSafeEnv(locals).apiUrl,
      apiVersion: getSafeEnv(locals).apiVersion,
      authMessage,
      secretKey: opts?.secretKey || getSafeEnv(locals).sk,
      authReason
    };
    if (authStatus !== AuthStatus.SignedIn) {
      return signedOutAuthObject(options);
    }
    const jwt = decodeJwt2(authToken);
    return signedInAuthObject(options, jwt.raw.text, jwt.payload);
  };
};
var authAuthHeaderMissing = (helperName = "auth") => `Clerk: ${helperName}() was called but Clerk can't detect usage of clerkMiddleware(). Please ensure that the clerkMiddleware() is used in your Astro Middleware.
    `;
var getAuth = createGetAuth({
  noAuthStatusMessage: authAuthHeaderMissing()
});
var createCurrentUser = (req, context) => {
  return async () => {
    const { userId } = getAuth(req, context.locals);
    if (!userId) {
      return null;
    }
    return clerkClient(context).users.getUser(userId);
  };
};
var serverRedirectWithAuth = (context, clerkRequest, res, opts) => {
  const location = res.headers.get("location");
  const shouldAppendDevBrowser = res.headers.get(constants.Headers.ClerkRedirectTo) === "true";
  if (shouldAppendDevBrowser && !!location && // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  isDevelopmentFromSecretKey(opts.secretKey || getSafeEnv(context).sk) && clerkRequest.clerkUrl.isCrossOrigin(location)) {
    const dbJwt = clerkRequest.cookies.get(DEV_BROWSER_JWT_KEY) || "";
    const url = new URL(location);
    const urlWithDevBrowser = setDevBrowserJWTInURL(url, dbJwt);
    return context.redirect(urlWithDevBrowser.href, 307);
  }
  return res;
};
var CONTROL_FLOW_ERROR = {
  REDIRECT_TO_SIGN_IN: "CLERK_PROTECT_REDIRECT_TO_SIGN_IN"
};
var clerkMiddleware = (...args) => {
  const [handler, options] = parseHandlerAndOptions(args);
  const astroMiddleware = async (context, next) => {
    if (isPrerenderedPage(context)) {
      return next();
    }
    const clerkRequest = createClerkRequest(context.request);
    const requestState = await clerkClient(context).authenticateRequest(
      clerkRequest,
      createAuthenticateRequestOptions(clerkRequest, options, context)
    );
    const locationHeader = requestState.headers.get(constants.Headers.Location);
    if (locationHeader) {
      handleNetlifyCacheInDevInstance({
        locationHeader,
        requestStateHeaders: requestState.headers,
        publishableKey: requestState.publishableKey
      });
      const res = new Response(null, { status: 307, headers: requestState.headers });
      return decorateResponseWithObservabilityHeaders(res, requestState);
    } else if (requestState.status === AuthStatus.Handshake) {
      throw new Error("Clerk: handshake status without redirect");
    }
    const authObject = requestState.toAuth();
    const redirectToSignIn = createMiddlewareRedirectToSignIn(clerkRequest);
    const authObjWithMethods = Object.assign(authObject, { redirectToSignIn });
    decorateAstroLocal(clerkRequest, context, requestState);
    return authAsyncStorage.run(context.locals.auth(), async () => {
      let handlerResult;
      try {
        handlerResult = await handler?.(() => authObjWithMethods, context, next) || await next();
      } catch (e) {
        handlerResult = handleControlFlowErrors(e, clerkRequest, requestState, context);
      }
      if (isRedirect(handlerResult)) {
        return serverRedirectWithAuth(context, clerkRequest, handlerResult, options);
      }
      const response = decorateRequest(context.locals, handlerResult);
      if (requestState.headers) {
        requestState.headers.forEach((value, key) => {
          response.headers.append(key, value);
        });
      }
      return response;
    });
  };
  return astroMiddleware;
};
var isPrerenderedPage = (context) => {
  return (
    // for Astro v5
    "isPrerendered" in context && context.isPrerendered || // for Astro v4
    "_isPrerendered" in context && context._isPrerendered
  );
};
var parseHandlerAndOptions = (args) => {
  return [
    typeof args[0] === "function" ? args[0] : void 0,
    (args.length === 2 ? args[1] : typeof args[0] === "function" ? {} : args[0]) || {}
  ];
};
var createAuthenticateRequestOptions = (clerkRequest, options, context) => {
  return {
    ...options,
    secretKey: options.secretKey || getSafeEnv(context).sk,
    publishableKey: options.publishableKey || getSafeEnv(context).pk,
    signInUrl: options.signInUrl || getSafeEnv(context).signInUrl,
    signUpUrl: options.signUpUrl || getSafeEnv(context).signUpUrl,
    ...handleMultiDomainAndProxy(clerkRequest, options, context)
  };
};
var decorateResponseWithObservabilityHeaders = (res, requestState) => {
  if (requestState.message) {
    res.headers.set(constants.Headers.AuthMessage, encodeURIComponent(requestState.message));
  }
  if (requestState.reason) {
    res.headers.set(constants.Headers.AuthReason, encodeURIComponent(requestState.reason));
  }
  if (requestState.status) {
    res.headers.set(constants.Headers.AuthStatus, encodeURIComponent(requestState.status));
  }
  return res;
};
var handleMultiDomainAndProxy = (clerkRequest, opts, context) => {
  const relativeOrAbsoluteProxyUrl = handleValueOrFn(
    opts?.proxyUrl,
    clerkRequest.clerkUrl,
    getSafeEnv(context).proxyUrl
  );
  let proxyUrl;
  if (!!relativeOrAbsoluteProxyUrl && !isHttpOrHttps(relativeOrAbsoluteProxyUrl)) {
    proxyUrl = new URL(relativeOrAbsoluteProxyUrl, clerkRequest.clerkUrl).toString();
  } else {
    proxyUrl = relativeOrAbsoluteProxyUrl;
  }
  const isSatellite = handleValueOrFn(opts.isSatellite, new URL(clerkRequest.url), getSafeEnv(context).isSatellite);
  const domain = handleValueOrFn(opts.domain, new URL(clerkRequest.url), getSafeEnv(context).domain);
  const signInUrl = opts?.signInUrl || getSafeEnv(context).signInUrl;
  if (isSatellite && !proxyUrl && !domain) {
    throw new Error(missingDomainAndProxy);
  }
  if (isSatellite && !isHttpOrHttps(signInUrl) && // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  isDevelopmentFromSecretKey(opts.secretKey || getSafeEnv(context).sk)) {
    throw new Error(missingSignInUrlInDev);
  }
  return {
    proxyUrl,
    isSatellite,
    domain
  };
};
var missingDomainAndProxy = `
Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl.

1) With middleware
   e.g. export default clerkMiddleware({domain:'YOUR_DOMAIN',isSatellite:true});
2) With environment variables e.g.
   PUBLIC_CLERK_DOMAIN='YOUR_DOMAIN'
   PUBLIC_CLERK_IS_SATELLITE='true'
   `;
var missingSignInUrlInDev = `
Invalid signInUrl. A satellite application requires a signInUrl for development instances.
Check if signInUrl is missing from your configuration or if it is not an absolute URL

1) With middleware
   e.g. export default clerkMiddleware({signInUrl:'SOME_URL', isSatellite:true});
2) With environment variables e.g.
   PUBLIC_CLERK_SIGN_IN_URL='SOME_URL'
   PUBLIC_CLERK_IS_SATELLITE='true'`;
function decorateAstroLocal(clerkRequest, context, requestState) {
  const { reason, message, status, token } = requestState;
  context.locals.authToken = token;
  context.locals.authStatus = status;
  context.locals.authMessage = message;
  context.locals.authReason = reason;
  context.locals.auth = () => {
    const authObject = getAuth(clerkRequest, context.locals);
    const clerkUrl = clerkRequest.clerkUrl;
    const redirectToSignIn = (opts = {}) => {
      const devBrowserToken = clerkRequest.clerkUrl.searchParams.get(constants.QueryParameters.DevBrowser) || clerkRequest.cookies.get(constants.Cookies.DevBrowser);
      return createRedirect({
        redirectAdapter,
        devBrowserToken,
        baseUrl: clerkUrl.toString(),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        publishableKey: getSafeEnv(context).pk,
        signInUrl: requestState.signInUrl,
        signUpUrl: requestState.signUpUrl,
        sessionStatus: requestState.toAuth()?.sessionStatus
      }).redirectToSignIn({
        returnBackUrl: opts.returnBackUrl === null ? "" : opts.returnBackUrl || clerkUrl.toString()
      });
    };
    return Object.assign(authObject, { redirectToSignIn });
  };
  context.locals.currentUser = createCurrentUser(clerkRequest, context);
}
function findClosingHeadTagIndex(chunk, endHeadTag) {
  return chunk.findIndex((_2, i) => endHeadTag.every((value, j) => value === chunk[i + j]));
}
function decorateRequest(locals, res) {
  if (res.headers.get("content-type") === "text/html") {
    const encoder = new TextEncoder();
    const closingHeadTag = encoder.encode("</head>");
    const clerkAstroData = encoder.encode(
      `<script id="__CLERK_ASTRO_DATA__" type="application/json">${JSON.stringify(locals.auth())}<\/script>
`
    );
    const clerkSafeEnvVariables = encoder.encode(
      `<script id="__CLERK_ASTRO_SAFE_VARS__" type="application/json">${JSON.stringify(getClientSafeEnv(locals))}<\/script>
`
    );
    const hotloadScript = encoder.encode(buildClerkHotloadScript(locals));
    const stream = res.body.pipeThrough(
      new TransformStream({
        transform(chunk, controller) {
          const index = findClosingHeadTagIndex(chunk, closingHeadTag);
          const isClosingHeadTagFound = index !== -1;
          if (isClosingHeadTagFound) {
            controller.enqueue(chunk.slice(0, index));
            controller.enqueue(clerkAstroData);
            controller.enqueue(clerkSafeEnvVariables);
            controller.enqueue(hotloadScript);
            controller.enqueue(closingHeadTag);
            controller.enqueue(chunk.slice(index + closingHeadTag.length));
          } else {
            controller.enqueue(chunk);
          }
        }
      })
    );
    const modifiedResponse = new Response(stream, {
      status: res.status,
      statusText: res.statusText,
      headers: res.headers
    });
    return modifiedResponse;
  }
  return res;
}
var redirectAdapter = (url) => {
  const res = new Response(null, {
    status: 307
  });
  setHeader(res, constants.Headers.ClerkRedirectTo, "true");
  return setHeader(res, "Location", url instanceof URL ? url.href : url);
};
var createMiddlewareRedirectToSignIn = (clerkRequest) => {
  return (opts = {}) => {
    const err = new Error(CONTROL_FLOW_ERROR.REDIRECT_TO_SIGN_IN);
    err.returnBackUrl = opts.returnBackUrl === null ? "" : opts.returnBackUrl || clerkRequest.clerkUrl.toString();
    throw err;
  };
};
var handleControlFlowErrors = (e, clerkRequest, requestState, context) => {
  switch (e.message) {
    case CONTROL_FLOW_ERROR.REDIRECT_TO_SIGN_IN:
      return createRedirect({
        redirectAdapter,
        baseUrl: clerkRequest.clerkUrl,
        signInUrl: requestState.signInUrl,
        signUpUrl: requestState.signUpUrl,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        publishableKey: getSafeEnv(context).pk,
        sessionStatus: requestState.toAuth()?.sessionStatus
      }).redirectToSignIn({ returnBackUrl: e.returnBackUrl });
    default:
      throw e;
  }
};
const onRequest$1 = clerkMiddleware();
const onRequest = sequence(
  onRequest$1
);
export {
  onRequest
};
