import { c as createComponent, e as createAstro, r as renderComponent, a as renderScript, b as renderTemplate, g as renderSlot, f as defineScriptVars, ar as addAttribute, m as maybeRenderHead, as as spreadAttributes, aw as defineStyleVars } from "../chunks/astro/server_dK_ejg3u.mjs";
import { g as generateSafeId, $ as $$Base } from "../chunks/base_zbUf8r-R.mjs";
/* empty css                                 */
import { r } from "../chunks/internal_CWyUhqTg.mjs";
const $$Astro$s = createAstro();
const $$SignedInCSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$SignedInCSR;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "clerk-signed-in", "clerk-signed-in", { "class": className, "hidden": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/control/SignedInCSR.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/control/SignedInCSR.astro", void 0);
const $$Astro$r = createAstro();
const $$SignedInSSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$SignedInSSR;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/control/SignedInSSR.astro", void 0);
const configOutput = "server";
function isStaticOutput(forceStatic) {
  if (forceStatic !== void 0) {
    return forceStatic;
  }
  return configOutput === "static";
}
const $$Astro$q = createAstro();
const $$SignedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$SignedIn;
  const { isStatic, class: className } = Astro2.props;
  const SignedInComponent = isStaticOutput(isStatic) ? $$SignedInCSR : $$SignedInSSR;
  return renderTemplate`${renderComponent($$result, "SignedInComponent", SignedInComponent, { "class": className }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/control/SignedIn.astro", void 0);
const $$Astro$p = createAstro();
const $$SignedOutCSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$SignedOutCSR;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "clerk-signed-out", "clerk-signed-out", { "class": className, "hidden": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/control/SignedOutCSR.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/control/SignedOutCSR.astro", void 0);
const $$Astro$o = createAstro();
const $$SignedOutSSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$SignedOutSSR;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${!userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/control/SignedOutSSR.astro", void 0);
const $$Astro$n = createAstro();
const $$SignedOut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$SignedOut;
  const { isStatic, class: className } = Astro2.props;
  const SignedOutComponent = isStaticOutput(isStatic) ? $$SignedOutCSR : $$SignedOutSSR;
  return renderTemplate`${renderComponent($$result, "SignedOutComponent", SignedOutComponent, { "class": className }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/control/SignedOut.astro", void 0);
var __freeze$a = Object.freeze;
var __defProp$a = Object.defineProperty;
var __template$a = (cooked, raw) => __freeze$a(__defProp$a(cooked, "raw", { value: __freeze$a(raw || cooked.slice()) }));
var _a$a;
const $$Astro$m = createAstro();
const $$InternalUIComponentRenderer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$InternalUIComponentRenderer;
  const { component, id, ...props } = Astro2.props;
  const safeId = id || generateSafeId();
  return renderTemplate(_a$a || (_a$a = __template$a(["", "<div", "></div> <script>(function(){", "\n  /**\n   * Store the id and the props for the Astro component in order to mount the correct UI component once clerk is loaded.\n   * The above is handled by `mountAllClerkAstroJSComponents`.\n   */\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const _ = new Map();\n      _.set(id, props);\n      window.__astro_clerk_component_props.set(category, _);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: component,\n    id: `clerk-${component}-${safeId}`,\n    props,\n  });\n})();<\/script>"], ["", "<div", "></div> <script>(function(){", "\n  /**\n   * Store the id and the props for the Astro component in order to mount the correct UI component once clerk is loaded.\n   * The above is handled by \\`mountAllClerkAstroJSComponents\\`.\n   */\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const _ = new Map();\n      _.set(id, props);\n      window.__astro_clerk_component_props.set(category, _);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: component,\n    id: \\`clerk-\\${component}-\\${safeId}\\`,\n    props,\n  });\n})();<\/script>"])), maybeRenderHead(), addAttribute(`clerk-${component}-${safeId}`, "data-clerk-id"), defineScriptVars({ props, component, safeId }));
}, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/interactive/InternalUIComponentRenderer.astro", void 0);
const $$Astro$l = createAstro();
const $$UserButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$UserButton;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "user-button" })} ${renderSlot($$result, $$slots["default"])}`;
}, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/interactive/UserButton/UserButton.astro", void 0);
var __freeze$9 = Object.freeze;
var __defProp$9 = Object.defineProperty;
var __template$9 = (cooked, raw) => __freeze$9(__defProp$9(cooked, "raw", { value: __freeze$9(raw || cooked.slice()) }));
var _a$9;
const $$Astro$k = createAstro();
const $$MenuItemRenderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$MenuItemRenderer;
  const { label, href, open, clickIdentifier, parent } = Astro2.props;
  let labelIcon = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  const isDevMode = false;
  return renderTemplate(_a$9 || (_a$9 = __template$9(["<script>(function(){", "\nconst parentElement = document.currentScript.parentElement;\n\n// We used a web component in the `<UserButton.MenuItems>` component.\nconst hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';\nif (!hasParentMenuItem) {\n  if (isDevMode) {\n    throw new Error(\n      `Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.`\n    );\n  }\n  return\n}\n\n// Get the user button map from window that we set in the `<InternalUIComponentRenderer />`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(`[data-clerk-id=\"clerk-user-button-${parent}\"]`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst reorderItemsLabels = ['manageAccount', 'signOut'];\nconst isReorderItem = reorderItemsLabels.includes(label);\n\nlet newMenuItem = {\n  label,\n}\n\nif (!isReorderItem) {\n  newMenuItem = {\n    ...newMenuItem,\n    mountIcon: (el) => {\n      el.innerHTML = labelIcon\n    },\n    unmountIcon: () => { /* What to clean up? */}\n  }\n\n  if (href) {\n    newMenuItem.href = href;\n  } else if (open) {\n    newMenuItem.open = open.startsWith('/') ? open : `/${open}`;\n  } else if (clickIdentifier) {\n    const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });\n    newMenuItem.onClick = () => {\n      document.dispatchEvent(clickEvent);\n    }\n  }\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  customMenuItems: [\n    ...(currentOptions?.customMenuItems ?? []),\n    newMenuItem,\n  ]\n})\n})();<\/script>"], ["<script>(function(){", "\nconst parentElement = document.currentScript.parentElement;\n\n// We used a web component in the \\`<UserButton.MenuItems>\\` component.\nconst hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';\nif (!hasParentMenuItem) {\n  if (isDevMode) {\n    throw new Error(\n      \\`Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.\\`\n    );\n  }\n  return\n}\n\n// Get the user button map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(\\`[data-clerk-id=\"clerk-user-button-\\${parent}\"]\\`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst reorderItemsLabels = ['manageAccount', 'signOut'];\nconst isReorderItem = reorderItemsLabels.includes(label);\n\nlet newMenuItem = {\n  label,\n}\n\nif (!isReorderItem) {\n  newMenuItem = {\n    ...newMenuItem,\n    mountIcon: (el) => {\n      el.innerHTML = labelIcon\n    },\n    unmountIcon: () => { /* What to clean up? */}\n  }\n\n  if (href) {\n    newMenuItem.href = href;\n  } else if (open) {\n    newMenuItem.open = open.startsWith('/') ? open : \\`/\\${open}\\`;\n  } else if (clickIdentifier) {\n    const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });\n    newMenuItem.onClick = () => {\n      document.dispatchEvent(clickEvent);\n    }\n  }\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  customMenuItems: [\n    ...(currentOptions?.customMenuItems ?? []),\n    newMenuItem,\n  ]\n})\n})();<\/script>"])), defineScriptVars({ label, href, open, clickIdentifier, labelIcon, isDevMode, parent }));
}, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/interactive/UserButton/MenuItemRenderer.astro", void 0);
const $$Astro$j = createAstro();
const $$UserButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$UserButtonLink;
  const { label, href, parent } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, { "label": label, "href": href, "parent": parent }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonLink.astro", void 0);
const $$Astro$i = createAstro();
const $$UserButtonAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$UserButtonAction;
  const { label, open, clickIdentifier, parent } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, { "label": label, "open": open, "clickIdentifier": clickIdentifier, "parent": parent }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonAction.astro", void 0);
const $$UserButtonMenuItems = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "clerk-user-button-menu-items", "clerk-user-button-menu-items", {}, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro", void 0);
var __freeze$8 = Object.freeze;
var __defProp$8 = Object.defineProperty;
var __template$8 = (cooked, raw) => __freeze$8(__defProp$8(cooked, "raw", { value: __freeze$8(raw || cooked.slice()) }));
var _a$8;
const $$Astro$h = createAstro();
const $$UserButtonUserProfilePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$UserButtonUserProfilePage;
  const { url, label, parent } = Astro2.props;
  let labelIcon = "";
  let content = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  if (Astro2.slots.has("default")) {
    content = await Astro2.slots.render("default");
  }
  return renderTemplate(_a$8 || (_a$8 = __template$8(["<script>(function(){", "\n// Get the user button map from window that we set in the `<InternalUIComponentRenderer />`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(`[data-clerk-id=\"clerk-user-button-${parent}\"]`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst newCustomPage = {\n  label,\n  url,\n  mountIcon: (el) => {\n    el.innerHTML = labelIcon\n  },\n  unmountIcon: () => { /* What to clean up? */},\n  mount: (el) => {\n    el.innerHTML = content\n  },\n  unmount: () => { /* What to clean up? */},\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  userProfileProps: {\n    customPages: [\n      ...(currentOptions?.userProfileProps?.customPages ?? []),\n      newCustomPage,\n    ]\n  }\n})\n})();<\/script>"], ["<script>(function(){", "\n// Get the user button map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(\\`[data-clerk-id=\"clerk-user-button-\\${parent}\"]\\`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst newCustomPage = {\n  label,\n  url,\n  mountIcon: (el) => {\n    el.innerHTML = labelIcon\n  },\n  unmountIcon: () => { /* What to clean up? */},\n  mount: (el) => {\n    el.innerHTML = content\n  },\n  unmount: () => { /* What to clean up? */},\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  userProfileProps: {\n    customPages: [\n      ...(currentOptions?.userProfileProps?.customPages ?? []),\n      newCustomPage,\n    ]\n  }\n})\n})();<\/script>"])), defineScriptVars({ url, label, content, labelIcon, parent }));
}, "C:/Users/amoil/Desktop/PlaylistHub/node_modules/.pnpm/@clerk+astro@2.7.1_astro@5._a6916d7ff689849485acb776c6d9a1d5/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonUserProfilePage.astro", void 0);
const UserButton = Object.assign($$UserButton, {
  MenuItems: $$UserButtonMenuItems,
  Link: $$UserButtonLink,
  Action: $$UserButtonAction,
  UserProfilePage: $$UserButtonUserProfilePage
});
const playlist = [
  {
    slug: "electronic",
    title: "Electronic",
    pinned: true,
    color: "#08d437",
    whatColorIs: "Clear Green"
  },
  {
    slug: "bluerock",
    title: "Blue Rock",
    pinned: true,
    color: "#f007c3",
    whatColorIs: "Pink"
  },
  {
    slug: "englishpop",
    title: "English Pop",
    pinned: true,
    color: "#dccf08",
    whatColorIs: "Yellow"
  },
  {
    slug: "melodicrock",
    title: "Melodic Rock",
    pinned: true,
    color: "#2ab240",
    whatColorIs: "Green"
  },
  {
    slug: "progressivepop",
    title: "Progressive Pop",
    pinned: true,
    color: "#9708ef",
    whatColorIs: "Purple Clear"
  },
  {
    slug: "alternativerock",
    title: "Alternative Rock",
    pinned: true,
    color: "#ff0200",
    whatColorIs: "Red"
  },
  {
    slug: "instrumental",
    title: "Instrumental",
    pinned: true,
    color: "#0dbce7",
    whatColorIs: "Celeste"
  },
  {
    slug: "spanishpop",
    title: "Spanish Pop",
    pinned: true,
    color: "#52e2d5",
    whatColorIs: "aqua verde"
  },
  {
    slug: "eurodance",
    title: "Eurodance",
    pinned: true,
    color: "#FFA500",
    whatColorIs: "orange"
  },
  {
    slug: "bluepop",
    title: "Blue Pop",
    pinned: true,
    color: "#3f3fee",
    whatColorIs: "MediumBlue"
  },
  {
    slug: "romantic",
    title: "Romantic",
    pinned: true,
    color: "#f5576c",
    whatColorIs: "rosado rojizo"
  },
  {
    slug: "avantgarde",
    title: "Avant Garde",
    pinned: true,
    color: "#e0c3fc",
    whatColorIs: "morado claro"
  },
  {
    slug: "synthwave",
    title: "Synthwave",
    pinned: true,
    color: "#94f15b",
    whatColorIs: "verde lima claro"
  },
  {
    slug: "electropop",
    title: "Electro Pop",
    pinned: true,
    color: "#7d1fe9",
    whatColorIs: "morado oscuro"
  },
  {
    slug: "funk",
    title: "Funk",
    pinned: true,
    color: "#cdb798",
    whatColorIs: "AntiqueWhite"
  },
  {
    slug: "ncs",
    title: "NCS",
    pinned: true,
    color: "#00FFFF",
    whatColorIs: "Aqua"
  },
  {
    slug: "indiepop",
    title: "Indie Pop",
    pinned: true,
    color: "#7FFFD4",
    whatColorIs: "Aquamarine"
  },
  {
    slug: "background",
    title: "Background",
    pinned: true,
    color: "#A52A2A",
    whatColorIs: "brown"
  },
  {
    slug: "surfrock",
    title: "Surf Rock",
    pinned: true,
    color: "#DEB887",
    whatColorIs: "BurlyWood"
  },
  {
    slug: "alternative",
    title: "Alternative",
    pinned: true,
    color: "#5F9EA0",
    whatColorIs: "Cadetblue"
  },
  {
    slug: "indierock",
    title: "Indie Rock",
    pinned: true,
    color: "#7FFF00",
    whatColorIs: "Chartreuse"
  },
  {
    slug: "rockpop",
    title: "Rock Pop",
    pinned: true,
    color: "#D2691E",
    whatColorIs: "Chocolate"
  },
  {
    slug: "garage",
    title: "Garage",
    pinned: true,
    color: "#FF7F50",
    whatColorIs: "Coral"
  },
  {
    slug: "electroacid",
    title: "Electro Acid",
    pinned: true,
    color: "#6495ED",
    whatColorIs: "CornflowerBlue"
  },
  {
    slug: "altpop",
    title: "Alt Pop",
    pinned: true,
    color: "#b7ae8a",
    whatColorIs: "CornSilk"
  },
  {
    slug: "rockandroll",
    title: "Rock and Roll",
    pinned: true,
    color: "#DC143C",
    whatColorIs: "Crimson"
  },
  {
    slug: "synthpop",
    title: "Synthpop",
    pinned: true,
    color: "#00FFFF",
    whatColorIs: "Cyan"
  },
  {
    slug: "darknight",
    title: "Dark Night",
    pinned: true,
    color: "#bd1d1d",
    whatColorIs: "Dark Red"
  },
  {
    slug: "discopop",
    title: "Disco Pop",
    pinned: true,
    color: "#008B8B",
    whatColorIs: "DarkCyan"
  },
  {
    slug: "hyperpop",
    title: "Hyperpop",
    pinned: true,
    color: "#B8860B",
    whatColorIs: "DarkGoldenRod"
  },
  {
    slug: "retrowave",
    title: "Retrowave",
    pinned: true,
    color: "#A9A9A9",
    whatColorIs: "DarkGray"
  },
  {
    slug: "newage",
    title: "New Age",
    pinned: true,
    color: "#01b401",
    whatColorIs: "MediumGreen"
  },
  {
    slug: "popcore",
    title: "Popcore",
    pinned: true,
    color: "#BDB76B",
    whatColorIs: "DarkKhaki"
  },
  {
    slug: "softrock",
    title: "Soft Rock",
    pinned: true,
    color: "#8B008B",
    whatColorIs: "DarkMagenta"
  },
  {
    slug: "soulpop",
    title: "Soul Pop",
    pinned: true,
    color: "#90ab5f",
    whatColorIs: "MediumOliveGreen"
  },
  {
    slug: "guitar",
    title: "Guitar",
    pinned: true,
    color: "#FF8C00",
    whatColorIs: "DarkOrange"
  },
  {
    slug: "ambient",
    title: "Ambient",
    pinned: true,
    color: "#9932CC",
    whatColorIs: "DarkOrchid"
  },
  {
    slug: "soul",
    title: "Soul",
    pinned: true,
    color: "#E9967A",
    whatColorIs: "DarkSalmon"
  },
  {
    slug: "vaporwave",
    title: "Vaporwave",
    pinned: true,
    color: "#8FBC8F",
    whatColorIs: "DarkSeaGreen"
  },
  {
    slug: "skweee",
    title: "Skweee",
    pinned: true,
    color: "#685cb3",
    whatColorIs: "MediumSlateBlue"
  },
  {
    slug: "techno",
    title: "Techno",
    pinned: true,
    color: "#6c9e9e",
    whatColorIs: "MediumSlateGray"
  },
  {
    slug: "darkfolk",
    title: "Dark Folk",
    pinned: true,
    color: "#00CED1",
    whatColorIs: "DarkTurquoise"
  },
  {
    slug: "hauntology",
    title: "Hauntology",
    pinned: true,
    color: "#9400D3",
    whatColorIs: "DarkViolet"
  },
  {
    slug: "filmsost",
    title: "Films OST",
    pinned: true,
    color: "#FF1493",
    whatColorIs: "DeepPink"
  },
  {
    slug: "chiptune",
    title: "Chiptune",
    pinned: true,
    color: "#00BFFF",
    whatColorIs: "DeepSkyBlue"
  },
  {
    slug: "witchhouse",
    title: "Witch House",
    pinned: true,
    color: "#696969",
    whatColorIs: "DimGrey"
  },
  {
    slug: "phonk",
    title: "Phonk",
    pinned: true,
    color: "#1E90FF",
    whatColorIs: "DodgerBlue"
  }
];
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: playlist
}, Symbol.toStringTag, { value: "Module" }));
const alternative = [
  {
    title: "Walk on Life",
    artist: "Dire Straits",
    album: "Alternative",
    date: "2026-01-01T00:00:00",
    duration: "04:12",
    urlSong: "https://20essentials.github.io/dire-straits-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/dire-straits-ost/assets/n1.avif"
  },
  {
    title: "Whatever",
    artist: "Cartoon",
    album: "Alternative",
    date: "2026-01-02T00:00:00",
    duration: "03:25",
    urlSong: "https://20essentials.github.io/cartoon-soundtrack/songs/n12.mp3",
    urlPoster: "https://20essentials.github.io/cartoon-soundtrack/assets/n1.avif"
  },
  {
    title: "Let me be Free",
    artist: "2 Brothers on the Fourth Flooor",
    album: "Alternative",
    date: "2026-01-03T00:00:00",
    duration: "03:28",
    urlSong: "https://20essentials.github.io/2-brothers-on-the-fourth-floor/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/2-brothers-on-the-fourth-floor/assets/n1.avif"
  },
  {
    title: "Enjoy The Silence",
    artist: "Depeche Mode",
    album: "Alternative",
    date: "2026-01-04T00:00:00",
    duration: "04:40",
    urlSong: "https://20essentials.github.io/depeche-mode-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/depeche-mode-band/assets/n1.avif"
  },
  {
    title: "Right Here, Right Now",
    artist: "Fatboy Slim",
    album: "Alternative",
    date: "2026-01-05T00:00:00",
    duration: "03:49",
    urlSong: "https://20essentials.github.io/fatboy-slim/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/fatboy-slim/assets/n1.avif"
  },
  {
    title: "Take me Out",
    artist: "Franz Ferdinand",
    album: "Alternative",
    date: "2026-01-06T00:00:00",
    duration: "04:00",
    urlSong: "https://20essentials.github.io/franz-ferdinand-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/franz-ferdinand-ost/assets/n1.avif"
  },
  {
    title: "Bones",
    artist: "Imagine Dragons",
    album: "Alternative",
    date: "2026-01-07T00:00:00",
    duration: "02:42",
    urlSong: "https://20essentials.github.io/imagine--dragons/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/imagine--dragons/assets/n1.avif"
  },
  {
    title: "Are you gonna Be my Girl",
    artist: "Jet",
    album: "Alternative",
    date: "2026-01-08T00:00:00",
    duration: "03:34",
    urlSong: "https://20essentials.github.io/jet-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/jet-ost/assets/n1.avif"
  },
  {
    title: "Teenage Dream",
    artist: "Katy Perry",
    album: "Alternative",
    date: "2026-01-09T00:00:00",
    duration: "03:55",
    urlSong: "https://20essentials.github.io/katy-perry-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/katy-perry-ost/assets/n1.avif"
  },
  {
    title: "Paparazzi",
    artist: "Lady Gaga",
    album: "Alternative",
    date: "2026-01-10T00:00:00",
    duration: "03:28",
    urlSong: "https://20essentials.github.io/lady-gaga-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/lady-gaga-ost/assets/n1.avif"
  },
  {
    title: "Led Spirals",
    artist: "Le Castlevania",
    album: "Alternative",
    date: "2026-01-11T00:00:00",
    duration: "03:16",
    urlSong: "https://20essentials.github.io/le-castle-vania-ost-/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/le-castle-vania-ost-/assets/n1.avif"
  },
  {
    title: "Dreams",
    artist: "Lost Sky",
    album: "Alternative",
    date: "2026-01-12T00:00:00",
    duration: "03:35",
    urlSong: "https://20essentials.github.io/lost-sky-album/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/lost-sky-album/assets/n1.avif"
  },
  {
    title: "Por el Resto",
    artist: "Los Enanitos Verdes",
    album: "Alternative",
    date: "2026-01-13T00:00:00",
    duration: "04:26",
    urlSong: "https://20essentials.github.io/los-enanitos-verdes-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/los-enanitos-verdes-band/assets/n1.avif"
  },
  {
    title: "Byte",
    artist: "Martin Garrix",
    album: "Alternative",
    date: "2026-01-14T00:00:00",
    duration: "03:50",
    urlSong: "https://20essentials.github.io/martin-garrix-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/martin-garrix-soundtrack/assets/n4.avif"
  },
  {
    title: "You are not Alone",
    artist: "Modern Talking",
    album: "Alternative",
    date: "2026-01-15T00:00:00",
    duration: "03:40",
    urlSong: "https://20essentials.github.io/modern-talking-band/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/modern-talking-band/assets/n1.avif"
  },
  {
    title: "Ice Ice Iceland",
    artist: "Mutiny on The Bounty",
    album: "Alternative",
    date: "2026-01-16T00:00:00",
    duration: "05:25",
    urlSong: "https://20essentials.github.io/mutiny-on-the-bounty-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/mutiny-on-the-bounty-band/assets/n1.avif"
  },
  {
    title: "Into the Groove",
    artist: "Madonna",
    album: "Alternative",
    date: "2026-01-17T00:00:00",
    duration: "04:47",
    urlSong: "https://20essentials.github.io/madonna-album/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/madonna-album/assets/n1.avif"
  },
  {
    title: "Don’t Look Back In Banger",
    artist: "Oasis",
    album: "Alternative",
    date: "2026-01-18T00:00:00",
    duration: "04:50",
    urlSong: "https://20essentials.github.io/oasis-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/oasis-ost/assets/n1.avif"
  },
  {
    title: "Me Elevé",
    artist: "Pedro Suárez-Vértiz",
    album: "Alternative",
    date: "2026-01-19T00:00:00",
    duration: "03:37",
    urlSong: "https://20essentials.github.io/pedro-suarez-vertiz-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/pedro-suarez-vertiz-ost/assets/n1.avif"
  },
  {
    title: "Silly Love Songs",
    artist: "Paul Mccartney",
    album: "Alternative",
    date: "2026-01-20T00:00:00",
    duration: "05:54",
    urlSong: "https://20essentials.github.io/paul-mccartney-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/paul-mccartney-ost/assets/n1.avif"
  }
];
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: alternative
}, Symbol.toStringTag, { value: "Module" }));
const alternativerock = [
  {
    title: "City of The Blinding Lights",
    artist: "U2",
    album: "Alternative Rock",
    date: "2024-11-01T00:00:00",
    duration: "05:21",
    urlSong: "https://20essentials.github.io/u2-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/u2-band/assets/n1.avif"
  },
  {
    title: "Rock With You",
    artist: "Inner Circle",
    album: "Alternative Rock",
    date: "2024-11-02T00:00:00",
    duration: "04:23",
    urlSong: "https://20essentials.github.io/inner-circle-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/inner-circle-band/assets/n1.avif"
  },
  {
    title: "Por qué no se van",
    artist: "Los Prisioneros",
    album: "Alternative Rock",
    date: "2024-11-03T00:00:00",
    duration: "03:01",
    urlSong: "https://20essentials.github.io/los-prisioneros-band/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/los-prisioneros-band/assets/n1.avif"
  },
  {
    title: "Ms. Jackson",
    artist: "Outkast",
    album: "Alternative Rock",
    date: "2024-11-04T00:00:00",
    duration: "04:30",
    urlSong: "https://20essentials.github.io/outkast/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/outkast/assets/n1.avif"
  },
  {
    title: "Girls Just Want to Have Fun",
    artist: "Cyndi Lauper",
    album: "Alternative Rock",
    date: "2024-11-05T00:00:00",
    duration: "03:58",
    urlSong: "https://20essentials.github.io/cindy-lauper/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/cindy-lauper/assets/n1.avif"
  },
  {
    title: "Long Long Way from Home",
    artist: "Foreigner",
    album: "Alternative Rock",
    date: "2024-11-06T00:00:00",
    duration: "02:58",
    urlSong: "https://20essentials.github.io/foreigner/songs/n15.mp3",
    urlPoster: "https://20essentials.github.io/foreigner/assets/n1.avif"
  },
  {
    title: "Plastic Heart",
    artist: "Nostalghia",
    album: "Alternative Rock",
    date: "2024-11-07T00:00:00",
    duration: "03:00",
    urlSong: "https://20essentials.github.io/nostalghia-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/nostalghia-ost/assets/n1.avif"
  },
  {
    title: "Ruby",
    artist: "Kaiser Chiefs",
    album: "Alternative Rock",
    date: "2024-11-08T00:00:00",
    duration: "03:30",
    urlSong: "https://20essentials.github.io/kaiser-chiefs-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/kaiser-chiefs-ost/assets/n1.avif"
  },
  {
    title: "Cry Baby",
    artist: "The Neighbourhood",
    album: "Alternative Rock",
    date: "2024-11-09T00:00:00",
    duration: "03:55",
    urlSong: "https://20essentials.github.io/the-neighbourhood-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/the-neighbourhood-ost/assets/n1.avif"
  },
  {
    title: "Spectrum",
    artist: "Florence + The Machine",
    album: "Alternative Rock",
    date: "2024-11-10T00:00:00",
    duration: "05:14",
    urlSong: "https://20essentials.github.io/florence-more-machine/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/florence-more-machine/assets/n1.avif"
  },
  {
    title: "M.I.N.E",
    artist: "Five Finger Death Punch",
    album: "Alternative Rock",
    date: "2024-11-11T00:00:00",
    duration: "04:06",
    urlSong: "https://20essentials.github.io/five-finger-death/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/five-finger-death/assets/n1.avif"
  },
  {
    title: "Mountain Sound",
    artist: "Of Monsters and Men",
    album: "Alternative Rock",
    date: "2024-11-12T00:00:00",
    duration: "03:31",
    urlSong: "https://20essentials.github.io/of-monsters-and-men-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/of-monsters-and-men-ost/assets/n1.avif"
  },
  {
    title: "Girl",
    artist: "Florence + The Machine",
    album: "Alternative Rock",
    date: "2024-11-13T00:00:00",
    duration: "03:47",
    urlSong: "https://20essentials.github.io/florence-more-machine/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/florence-more-machine/assets/n2.avif"
  },
  {
    title: "Breakdown",
    artist: "Noisestorm",
    album: "Alternative Rock",
    date: "2024-11-14T00:00:00",
    duration: "03:54",
    urlSong: "https://20essentials.github.io/noisestorm-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/noisestorm-ost/assets/n1.avif"
  },
  {
    title: "Plasma",
    artist: "Kavinsky",
    album: "Alternative Rock",
    date: "2024-11-15T00:00:00",
    duration: "03:54",
    urlSong: "https://20essentials.github.io/kavinsky-ost/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/kavinsky-ost/assets/n1.avif"
  },
  {
    title: "With One Eye",
    artist: "Florence + The Machine",
    album: "Alternative Rock",
    date: "2024-11-16T00:00:00",
    duration: "03:38",
    urlSong: "https://20essentials.github.io/florence-more-machine/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/florence-more-machine/assets/n3.avif"
  },
  {
    title: "My Way",
    artist: "Elvis Presley",
    album: "Alternative Rock",
    date: "2024-11-17T00:00:00",
    duration: "03:00",
    urlSong: "https://20essentials.github.io/elvis-presley/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/elvis-presley/assets/n1.avif"
  },
  {
    title: "Maybe Maybe",
    artist: "A-ha",
    album: "Alternative Rock",
    date: "2024-11-18T00:00:00",
    duration: "02:36",
    urlSong: "https://20essentials.github.io/a-ha/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/a-ha/assets/n1.avif"
  },
  {
    title: "Nightcall",
    artist: "Kavinsky",
    album: "Alternative Rock",
    date: "2024-11-19T00:00:00",
    duration: "04:20",
    urlSong: "https://20essentials.github.io/kavinsky-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/kavinsky-ost/assets/n2.avif"
  },
  {
    title: "Rabbit Heart",
    artist: "Florence + The Machine",
    album: "Alternative Rock",
    date: "2024-11-20T00:00:00",
    duration: "03:53",
    urlSong: "https://20essentials.github.io/florence-more-machine/songs/n11.mp3",
    urlPoster: "https://20essentials.github.io/florence-more-machine/assets/n4.avif"
  }
];
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: alternativerock
}, Symbol.toStringTag, { value: "Module" }));
const altpop = [
  {
    title: "The Edge of The Glory",
    artist: "Lady Gaga",
    album: "Alt Pop",
    date: "2026-06-01T00:00:00",
    duration: "05:30",
    urlSong: "https://20essentials.github.io/lady-gaga-ost/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/lady-gaga-ost/assets/n1.avif"
  },
  {
    title: "Gravity",
    artist: "Loreen",
    album: "Alt Pop",
    date: "2026-06-02T00:00:00",
    duration: "02:50",
    urlSong: "https://20essentials.github.io/loreen/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/loreen/assets/n1.avif"
  },
  {
    title: "Red Swam",
    artist: "Leenandlie",
    album: "Alt Pop",
    date: "2026-06-03T00:00:00",
    duration: "01:42",
    urlSong: "https://20essentials.github.io/leeandlie-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/leeandlie-album/assets/n4.avif"
  },
  {
    title: "Arrival",
    artist: "Memorex Memories",
    album: "Alt Pop",
    date: "2026-06-04T00:00:00",
    duration: "04:40",
    urlSong: "https://20essentials.github.io/memorex-memories/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/memorex-memories/assets/n1.avif"
  },
  {
    title: "Somos la Secta de Astro",
    artist: "Manz",
    album: "Alt Pop",
    date: "2026-06-05T00:00:00",
    duration: "02:51",
    urlSong: "https://20essentials.github.io/manz/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/manz/assets/n1.avif"
  },
  {
    title: "Async Kawaii",
    artist: "Manz",
    album: "Alt Pop",
    date: "2026-06-06T00:00:00",
    duration: "02:16",
    urlSong: "https://20essentials.github.io/manz/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/manz/assets/n2.avif"
  },
  {
    title: "Fade Into You",
    artist: "Mazzy Star",
    album: "Alt Pop",
    date: "2026-06-07T00:00:00",
    duration: "04:21",
    urlSong: "https://20essentials.github.io/mazzy-star/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/mazzy-star/assets/n1.avif"
  },
  {
    title: "G.U.Y",
    artist: "Lady Gaga",
    album: "Alt Pop",
    date: "2026-06-08T00:00:00",
    duration: "04:07",
    urlSong: "https://20essentials.github.io/lady-gaga-ost/songs/n16.mp3",
    urlPoster: "https://20essentials.github.io/lady-gaga-ost/assets/n2.avif"
  },
  {
    title: "Summer Days",
    artist: "Martin Garrix",
    album: "Alt Pop",
    date: "2026-06-09T00:00:00",
    duration: "02:29",
    urlSong: "https://20essentials.github.io/martin-garrix-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/martin-garrix-soundtrack/assets/n1.avif"
  },
  {
    title: "Who Can It Be Now?",
    artist: "Men at Work",
    album: "Alt Pop",
    date: "2026-06-10T00:00:00",
    duration: "03:31",
    urlSong: "https://20essentials.github.io/men-at-work-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/men-at-work-band/assets/n1.avif"
  },
  {
    title: "Brother Louie",
    artist: "Modern Talking",
    album: "Alt Pop",
    date: "2026-06-11T00:00:00",
    duration: "03:41",
    urlSong: "https://20essentials.github.io/modern-talking-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/modern-talking-band/assets/n4.avif"
  },
  {
    title: "Nobody",
    artist: "Macdemarco",
    album: "Alt Pop",
    date: "2026-06-12T00:00:00",
    duration: "03:49",
    urlSong: "https://20essentials.github.io/macdemarco/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/macdemarco/assets/n1.avif"
  },
  {
    title: "Oye Mi Amor",
    artist: "Maná",
    album: "Alt Pop",
    date: "2026-06-13T00:00:00",
    duration: "04:23",
    urlSong: "https://20essentials.github.io/mana-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/mana-band/assets/n1.avif"
  },
  {
    title: "Like a Prayer",
    artist: "Madonna",
    album: "Alt Pop",
    date: "2026-06-14T00:00:00",
    duration: "04:03",
    urlSong: "https://20essentials.github.io/madonna-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/madonna-album/assets/n1.avif"
  },
  {
    title: "Empire",
    artist: "Mazemirror",
    album: "Alt Pop",
    date: "2026-06-15T00:00:00",
    duration: "03:54",
    urlSong: "https://20essentials.github.io/mazemirror-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/mazemirror-band/assets/n1.avif"
  },
  {
    title: "Can't Hold Us - (Formula 1 Version)",
    artist: "Macklemore",
    album: "Alt Pop",
    date: "2026-06-16T00:00:00",
    duration: "04:22",
    urlSong: "https://20essentials.github.io/macklemore-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/macklemore-soundtrack/assets/n1.avif"
  },
  {
    title: "Libre",
    artist: "Nino Bravo",
    album: "Alt Pop",
    date: "2026-06-17T00:00:00",
    duration: "04:09",
    urlSong: "https://20essentials.github.io/nino-bravo/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/nino-bravo/assets/n1.avif"
  },
  {
    title: "Globos del Cielo",
    artist: "Pedro Suárez-Vértiz",
    album: "Alt Pop",
    date: "2026-06-18T00:00:00",
    duration: "03:53",
    urlSong: "https://20essentials.github.io/pedro-suarez-vertiz-ost/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/pedro-suarez-vertiz-ost/assets/n3.avif"
  },
  {
    title: "Jeremy",
    artist: "Pearl Jam",
    album: "Alt Pop",
    date: "2026-06-19T00:00:00",
    duration: "05:32",
    urlSong: "https://20essentials.github.io/pearl-jam-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/pearl-jam-ost/assets/n1.avif"
  },
  {
    title: "L'Apartment",
    artist: "Pantaleo",
    album: "Alt Pop",
    date: "2026-06-20T00:00:00",
    duration: "03:23",
    urlSong: "https://20essentials.github.io/pantaleo/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/pantaleo/assets/n1.avif"
  }
];
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: altpop
}, Symbol.toStringTag, { value: "Module" }));
const ambient = [
  {
    title: "The Theme Of Zen Aku",
    artist: "Power Rangers Wild Force",
    album: "Ambient",
    date: "2027-06-01T00:00:00",
    duration: "02:31",
    urlSong: "https://20essentials.github.io/power-rangers-wild-force-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/power-rangers-wild-force-ost/assets/n4.avif"
  },
  {
    title: "Dreams",
    artist: "Nuages",
    album: "Ambient",
    date: "2027-06-02T00:00:00",
    duration: "04:38",
    urlSong: "https://20essentials.github.io/nuages-album/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/nuages-album/assets/n1.avif"
  },
  {
    title: "Eternal Youth",
    artist: "Rude",
    album: "Ambient",
    date: "2027-06-03T00:00:00",
    duration: "03:25",
    urlSong: "https://20essentials.github.io/rude-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/rude-ost/assets/n1.avif"
  },
  {
    title: "I'm Spider-Man",
    artist: "The Amazing Spiderman",
    album: "Ambient",
    date: "2027-06-04T00:00:00",
    duration: "01:04",
    urlSong: "https://20essentials.github.io/the-amazing-spiderman/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/the-amazing-spiderman/assets/n3.avif"
  },
  {
    title: "Apathy",
    artist: "Oneheart",
    album: "Ambient",
    date: "2027-06-05T00:00:00",
    duration: "01:57",
    urlSong: "https://20essentials.github.io/oneheart-album/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/oneheart-album/assets/n2.avif"
  },
  {
    title: "Flawless",
    artist: "Studio Killers",
    album: "Ambient",
    date: "2027-06-06T00:00:00",
    duration: "03:28",
    urlSong: "https://20essentials.github.io/studio-killers-ost/songs/n12.mp3",
    urlPoster: "https://20essentials.github.io/studio-killers-ost/assets/n2.avif"
  },
  {
    title: "Vidrar",
    artist: "Sigur Ros",
    album: "Ambient",
    date: "2027-06-07T00:00:00",
    duration: "07:05",
    urlSong: "https://20essentials.github.io/sigur-ros-os/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/sigur-ros-os/assets/n2.avif"
  },
  {
    title: "Perception",
    artist: "Ofdream",
    album: "Ambient",
    date: "2027-06-08T00:00:00",
    duration: "04:34",
    urlSong: "https://20essentials.github.io/ofdream/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/ofdream/assets/n3.avif"
  },
  {
    title: "Briar Patch",
    artist: "Xiu Xiu",
    album: "Ambient",
    date: "2027-06-09T00:00:00",
    duration: "07:03",
    urlSong: "https://20essentials.github.io/xiu-xiu-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/xiu-xiu-band/assets/n3.avif"
  },
  {
    title: "Situation",
    artist: "Yazoo",
    album: "Ambient",
    date: "2027-06-10T00:00:00",
    duration: "05:46",
    urlSong: "https://20essentials.github.io/yazoo-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/yazoo-band/assets/n1.avif"
  },
  {
    title: "Shapes Of Things",
    artist: "Yardbirds",
    album: "Ambient",
    date: "2027-06-11T00:00:00",
    duration: "02:25",
    urlSong: "https://20essentials.github.io/yardbirds-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/yardbirds-band/assets/n1.avif"
  },
  {
    title: "Rosso And Fiona",
    artist: "Zoids Chaotic Century",
    album: "Ambient",
    date: "2027-06-12T00:00:00",
    duration: "02:57",
    urlSong: "https://20essentials.github.io/zoids-chaotic-century-ost/songs/n15.mp3",
    urlPoster: "https://20essentials.github.io/zoids-chaotic-century-ost/assets/n2.avif"
  },
  {
    title: "Evolving",
    artist: "Ahrix",
    album: "Ambient",
    date: "2027-06-13T00:00:00",
    duration: "03:24",
    urlSong: "https://20essentials.github.io/ahrix-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/ahrix-soundtrack/assets/n2.avif"
  },
  {
    title: "The Curse",
    artist: "Agnes Obel",
    album: "Ambient",
    date: "2027-06-14T00:00:00",
    duration: "05:53",
    urlSong: "https://20essentials.github.io/agnes-obel-album/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/agnes-obel-album/assets/n2.avif"
  },
  {
    title: "A Matter Of Time",
    artist: "Adam Goldman",
    album: "Ambient",
    date: "2027-06-15T00:00:00",
    duration: "04:37",
    urlSong: "https://20essentials.github.io/adam-goldman-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/adam-goldman-album/assets/n1.avif"
  },
  {
    title: "Genosaurer Theme",
    artist: "Zoids Guardian Force",
    album: "Ambient",
    date: "2027-06-16T00:00:00",
    duration: "01:36",
    urlSong: "https://20essentials.github.io/zoids-guardian-force-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/zoids-guardian-force-ost/assets/n2.avif"
  },
  {
    title: "Garbagemx36",
    artist: "Autechre",
    album: "Ambient",
    date: "2027-06-17T00:00:00",
    duration: "14:11",
    urlSong: "https://20essentials.github.io/autechre-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/autechre-band/assets/n1.avif"
  },
  {
    title: "Jammin",
    artist: "Bob Marley",
    album: "Ambient",
    date: "2027-06-18T00:00:00",
    duration: "03:20",
    urlSong: "https://20essentials.github.io/bob-marley-album/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/bob-marley-album/assets/n1.avif"
  },
  {
    title: "Cradle Of Love",
    artist: "Billy Idol",
    album: "Ambient",
    date: "2027-06-19T00:00:00",
    duration: "04:41",
    urlSong: "https://20essentials.github.io/billy-idol-soundtrack/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/billy-idol-soundtrack/assets/n1.avif"
  },
  {
    title: "Pineaple Sunrise",
    artist: "Beach Weather",
    album: "Ambient",
    date: "2027-06-20T00:00:00",
    duration: "02:56",
    urlSong: "https://20essentials.github.io/beach-weather-soundtrack/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/beach-weather-soundtrack/assets/n2.avif"
  }
];
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ambient
}, Symbol.toStringTag, { value: "Module" }));
const avantgarde = [
  {
    title: "Woke Up This Morning",
    artist: "Alabama",
    album: "Avant Garde",
    date: "2025-05-01T00:00:00",
    duration: "04:05",
    urlSong: "https://20essentials.github.io/alabama-3-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/alabama-3-soundtrack/assets/n1.avif"
  },
  {
    title: "Dance With Me",
    artist: "Alphaville",
    album: "Avant Garde",
    date: "2025-05-02T00:00:00",
    duration: "04:00",
    urlSong: "https://20essentials.github.io/alphaville-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/alphaville-ost/assets/n1.avif"
  },
  {
    title: "Tomorrow",
    artist: "Barren Gates",
    album: "Avant Garde",
    date: "2025-05-03T00:00:00",
    duration: "02:36",
    urlSong: "https://20essentials.github.io/barren-gates-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/barren-gates-ost/assets/n1.avif"
  },
  {
    title: "Baby Blue",
    artist: "Breaking Bad",
    album: "Avant Garde",
    date: "2025-05-04T00:00:00",
    duration: "03:50",
    urlSong: "https://20essentials.github.io/breaking-bad/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/breaking-bad/assets/n1.avif"
  },
  {
    title: "Speed of the Sound of Loneliness",
    artist: "Alabama",
    album: "Avant Garde",
    date: "2025-05-05T00:00:00",
    duration: "04:42",
    urlSong: "https://20essentials.github.io/alabama-3-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/alabama-3-soundtrack/assets/n2.avif"
  },
  {
    title: "Tropical Love",
    artist: "Diviners",
    album: "Avant Garde",
    date: "2025-05-06T00:00:00",
    duration: "04:41",
    urlSong: "https://20essentials.github.io/diviners-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/diviners-band/assets/n1.avif"
  },
  {
    title: "Again",
    artist: "Cartoon",
    album: "Avant Garde",
    date: "2025-05-07T00:00:00",
    duration: "03:23",
    urlSong: "https://20essentials.github.io/cartoon-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/cartoon-soundtrack/assets/n1.avif"
  },
  {
    title: "Adventure of a Lifetime",
    artist: "Coldplay",
    album: "Avant Garde",
    date: "2025-05-08T00:00:00",
    duration: "04:28",
    urlSong: "https://20essentials.github.io/coldplay/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/coldplay/assets/n1.avif"
  },
  {
    title: "Eighteen",
    artist: "DLS 2020",
    album: "Avant Garde",
    date: "2025-05-09T00:00:00",
    duration: "03:22",
    urlSong: "https://20essentials.github.io/dls-2020/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/dls-2020/assets/n1.avif"
  },
  {
    title: "It This the Love",
    artist: "Masterboy",
    album: "Avant Garde",
    date: "2025-05-10T00:00:00",
    duration: "03:42",
    urlSong: "https://20essentials.github.io/masterboy-soundtrack/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/masterboy-soundtrack/assets/n1.avif"
  },
  {
    title: "Middle",
    artist: "Dj Snake",
    album: "Avant Garde",
    date: "2025-05-11T00:00:00",
    duration: "03:40",
    urlSong: "https://20essentials.github.io/dj-snake-album/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/dj-snake-album/assets/n1.avif"
  },
  {
    title: "Don't Start Now",
    artist: "Dua Lipa",
    album: "Avant Garde",
    date: "2025-05-12T00:00:00",
    duration: "03:23",
    urlSong: "https://20essentials.github.io/dua-lipa-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/dua-lipa-ost/assets/n1.avif"
  },
  {
    title: "My Number",
    artist: "Foals",
    album: "Avant Garde",
    date: "2025-05-13T00:00:00",
    duration: "04:02",
    urlSong: "https://20essentials.github.io/foals/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/foals/assets/n1.avif"
  },
  {
    title: "Morning Soung",
    artist: "Grizzly Bear",
    album: "Avant Garde",
    date: "2025-05-14T00:00:00",
    duration: "04:28",
    urlSong: "https://20essentials.github.io/grizzly-bear-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/grizzly-bear-ost/assets/n1.avif"
  },
  {
    title: "Eternity",
    artist: "Guru Josh",
    album: "Avant Garde",
    date: "2025-05-15T00:00:00",
    duration: "03:07",
    urlSong: "https://20essentials.github.io/guru-josh/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/guru-josh/assets/n1.avif"
  },
  {
    title: "Gorgeous Girl",
    artist: "Hello Fiasco",
    album: "Avant Garde",
    date: "2025-05-16T00:00:00",
    duration: "03:28",
    urlSong: "https://20essentials.github.io/hello-fiasco/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/hello-fiasco/assets/n1.avif"
  },
  {
    title: "The Woods",
    artist: "Hollow Coves",
    album: "Avant Garde",
    date: "2025-05-17T00:00:00",
    duration: "04:02",
    urlSong: "https://20essentials.github.io/hollow-coves/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/hollow-coves/assets/n1.avif"
  },
  {
    title: "Whistle Female Version",
    artist: "Hoodie Forester",
    album: "Avant Garde",
    date: "2025-05-18T00:00:00",
    duration: "02:02",
    urlSong: "https://20essentials.github.io/hoodie-forester-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/hoodie-forester-ost/assets/n1.avif"
  },
  {
    title: "Join Me Death",
    artist: "Him",
    album: "Avant Garde",
    date: "2025-05-19T00:00:00",
    duration: "03:34",
    urlSong: "https://20essentials.github.io/him/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/him/assets/n1.avif"
  },
  {
    title: "Trois Nuits Pas Semain",
    artist: "Indochine",
    album: "Avant Garde",
    date: "2025-05-20T00:00:00",
    duration: "05:13",
    urlSong: "https://20essentials.github.io/indochine-band/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/indochine-band/assets/n1.avif"
  }
];
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: avantgarde
}, Symbol.toStringTag, { value: "Module" }));
const background = [
  {
    title: "Turbo Killer",
    artist: "Carpenter Brut",
    album: "Background",
    date: "2025-11-01T00:00:00",
    duration: "03:29",
    urlSong: "https://20essentials.github.io/carpenter-brut/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/carpenter-brut/assets/n1.avif"
  },
  {
    title: "SleepLess",
    artist: "Flume",
    album: "Background",
    date: "2025-11-02T00:00:00",
    duration: "03:28",
    urlSong: "https://20essentials.github.io/flume/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/flume/assets/n1.avif"
  },
  {
    title: "The Dark Night Theme",
    artist: "Hans Zimmer",
    album: "Background",
    date: "2025-11-03T00:00:00",
    duration: "07:42",
    urlSong: "https://20essentials.github.io/hans-zimmer-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/hans-zimmer-ost/assets/n1.avif"
  },
  {
    title: "Test Drive",
    artist: "How To Train Your Dragon",
    album: "Background",
    date: "2025-11-04T00:00:00",
    duration: "02:35",
    urlSong: "https://20essentials.github.io/how-to-train-your-dragon-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/how-to-train-your-dragon-soundtrack/assets/n1.avif"
  },
  {
    title: "Hang'em All",
    artist: "Carpenter Brut",
    album: "Background",
    date: "2025-11-05T00:00:00",
    duration: "05:39",
    urlSong: "https://20essentials.github.io/carpenter-brut/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/carpenter-brut/assets/n2.avif"
  },
  {
    title: "Future",
    artist: "JJD",
    album: "Background",
    date: "2025-11-06T00:00:00",
    duration: "04:34",
    urlSong: "https://20essentials.github.io/jjd/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/jjd/assets/n1.avif"
  },
  {
    title: "Poison Lips",
    artist: "Vitalic",
    album: "Background",
    date: "2025-11-07T00:00:00",
    duration: "03:54",
    urlSong: "https://20essentials.github.io/vitalic-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/vitalic-band/assets/n1.avif"
  },
  {
    title: "Blood Code",
    artist: "Le Castlevania",
    album: "Background",
    date: "2025-11-08T00:00:00",
    duration: "02:56",
    urlSong: "https://20essentials.github.io/le-castle-vania-ost-/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/le-castle-vania-ost-/assets/n1.avif"
  },
  {
    title: "Mombasa",
    artist: "Hans Zimmer",
    album: "Background",
    date: "2025-11-09T00:00:00",
    duration: "04:54",
    urlSong: "https://20essentials.github.io/hans-zimmer-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/hans-zimmer-ost/assets/n2.avif"
  },
  {
    title: "Inferno Galore",
    artist: "Carpenter Brut",
    album: "Background",
    date: "2025-11-10T00:00:00",
    duration: "03:45",
    urlSong: "https://20essentials.github.io/carpenter-brut/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/carpenter-brut/assets/n3.avif"
  },
  {
    title: "Dragon Training",
    artist: "How To Train Your Dragon",
    album: "Background",
    date: "2025-11-11T00:00:00",
    duration: "03:11",
    urlSong: "https://20essentials.github.io/how-to-train-your-dragon-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/how-to-train-your-dragon-soundtrack/assets/n2.avif"
  },
  {
    title: "Picture of Purple Skies",
    artist: "Memorex Memories",
    album: "Background",
    date: "2025-11-12T00:00:00",
    duration: "06:25",
    urlSong: "https://20essentials.github.io/memorex-memories/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/memorex-memories/assets/n1.avif"
  },
  {
    title: "El Dorado",
    artist: "Modern Talking",
    album: "Background",
    date: "2025-11-13T00:00:00",
    duration: "03:52",
    urlSong: "https://20essentials.github.io/modern-talking-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/modern-talking-band/assets/n1.avif"
  },
  {
    title: "Here Comes The Cowboy",
    artist: "MacDemarco",
    album: "Background",
    date: "2025-11-14T00:00:00",
    duration: "03:00",
    urlSong: "https://20essentials.github.io/macdemarco/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/macdemarco/assets/n1.avif"
  },
  {
    title: "Ballet Mecanique",
    artist: "Mutiny on The Bounty",
    album: "Background",
    date: "2025-11-15T00:00:00",
    duration: "04:56",
    urlSong: "https://20essentials.github.io/mutiny-on-the-bounty-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/mutiny-on-the-bounty-band/assets/n1.avif"
  },
  {
    title: "He's Pirate",
    artist: "Hans Zimmer",
    album: "Background",
    date: "2025-11-16T00:00:00",
    duration: "01:30",
    urlSong: "https://20essentials.github.io/hans-zimmer-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/hans-zimmer-ost/assets/n3.avif"
  },
  {
    title: "Furious Angels",
    artist: "Matrix",
    album: "Background",
    date: "2025-11-17T00:00:00",
    duration: "07:35",
    urlSong: "https://20essentials.github.io/matrix-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/matrix-soundtrack/assets/n1.avif"
  },
  {
    title: "Devour",
    artist: "Mr Kitty",
    album: "Background",
    date: "2025-11-18T00:00:00",
    duration: "04:19",
    urlSong: "https://20essentials.github.io/mr-kitty-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/mr-kitty-ost/assets/n1.avif"
  },
  {
    title: "In Motion",
    artist: "Memorex Memories",
    album: "Background",
    date: "2025-11-19T00:00:00",
    duration: "03:45",
    urlSong: "https://20essentials.github.io/memorex-memories/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/memorex-memories/assets/n2.avif"
  },
  {
    title: "Time",
    artist: "Hans Zimmer",
    album: "Background",
    date: "2025-11-20T00:00:00",
    duration: "02:00",
    urlSong: "https://20essentials.github.io/hans-zimmer-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/hans-zimmer-ost/assets/n4.avif"
  }
];
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: background
}, Symbol.toStringTag, { value: "Module" }));
const bluepop = [
  {
    title: "Take On Me",
    artist: "A-ha",
    album: "Blue Pop",
    date: "2025-03-01T00:00:00",
    duration: "04:04",
    urlSong: "https://20essentials.github.io/a-ha/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/a-ha/assets/n1.avif"
  },
  {
    title: "Somewhere Only We Know",
    artist: "Keane",
    album: "Blue Pop",
    date: "2025-03-02T00:00:00",
    duration: "03:56",
    urlSong: "https://20essentials.github.io/keane/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/keane/assets/n1.avif"
  },
  {
    title: "La Vendetta",
    artist: "Tyler Bates",
    album: "Blue Pop",
    date: "2025-03-03T00:00:00",
    duration: "03:40",
    urlSong: "https://20essentials.github.io/tyler-bates/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/tyler-bates/assets/n1.avif"
  },
  {
    title: "We Are Time",
    artist: "DLS 2020",
    album: "Blue Pop",
    date: "2025-03-04T00:00:00",
    duration: "03:09",
    urlSong: "https://20essentials.github.io/dls-2020/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/dls-2020/assets/n1.avif"
  },
  {
    title: "World Princess",
    artist: "Grimes",
    album: "Blue Pop",
    date: "2025-03-05T00:00:00",
    duration: "05:36",
    urlSong: "https://20essentials.github.io/grimes-ost/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/grimes-ost/assets/n1.avif"
  },
  {
    title: "Man Of Focus",
    artist: "Tyler Bates",
    album: "Blue Pop",
    date: "2025-03-06T00:00:00",
    duration: "03:24",
    urlSong: "https://20essentials.github.io/tyler-bates/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/tyler-bates/assets/n2.avif"
  },
  {
    title: "Busy Earnin'",
    artist: "Jungle",
    album: "Blue Pop",
    date: "2025-03-07T00:00:00",
    duration: "02:59",
    urlSong: "https://20essentials.github.io/jungle-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/jungle-ost/assets/n1.avif"
  },
  {
    title: "Genesis",
    artist: "Grimes",
    album: "Blue Pop",
    date: "2025-03-08T00:00:00",
    duration: "04:17",
    urlSong: "https://20essentials.github.io/grimes-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/grimes-ost/assets/n2.avif"
  },
  {
    title: "Keep Moving",
    artist: "Jungle",
    album: "Blue Pop",
    date: "2025-03-09T00:00:00",
    duration: "04:00",
    urlSong: "https://20essentials.github.io/jungle-ost/songs/n13.mp3",
    urlPoster: "https://20essentials.github.io/jungle-ost/assets/n2.avif"
  },
  {
    title: "Arabella",
    artist: "Arctic Monkeys",
    album: "Blue Pop",
    date: "2025-03-10T00:00:00",
    duration: "03:27",
    urlSong: "https://20essentials.github.io/artic-monkeys-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/artic-monkeys-ost/assets/n1.avif"
  },
  {
    title: "Get Lucky",
    artist: "The Doobie Brothers",
    album: "Blue Pop",
    date: "2025-03-11T00:00:00",
    duration: "03:53",
    urlSong: "https://20essentials.github.io/daft-punk-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/daft-punk-band/assets/n1.avif"
  },
  {
    title: "No Tengo Dinero",
    artist: "Juan Gabriel",
    album: "Blue Pop",
    date: "2025-03-12T00:00:00",
    duration: "03:07",
    urlSong: "https://20essentials.github.io/juan-gabriel-ost/songs/n13.mp3",
    urlPoster: "https://20essentials.github.io/juan-gabriel-ost/assets/n1.avif"
  },
  {
    title: "Everybody's Changing",
    artist: "Keane",
    album: "Blue Pop",
    date: "2025-03-13T00:00:00",
    duration: "03:37",
    urlSong: "https://20essentials.github.io/keane/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/keane/assets/n2.avif"
  },
  {
    title: "Butterfly",
    artist: "Grimes",
    album: "Blue Pop",
    date: "2025-03-14T00:00:00",
    duration: "04:36",
    urlSong: "https://20essentials.github.io/grimes-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/grimes-ost/assets/n3.avif"
  },
  {
    title: "Do I Wanna Know",
    artist: "Artic Monkeys",
    album: "Blue Pop",
    date: "2025-03-15T00:00:00",
    duration: "04:25",
    urlSong: "https://20essentials.github.io/artic-monkeys-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/artic-monkeys-ost/assets/n2.avif"
  },
  {
    title: "El Ataque de las Chicas Cocodrilo",
    artist: "Hombres G",
    album: "Blue Pop",
    date: "2025-03-16T00:00:00",
    duration: "03:02",
    urlSong: "https://20essentials.github.io/hombres-g/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/hombres-g/assets/n1.avif"
  },
  {
    title: "Flesh Without Blood",
    artist: "Grimes",
    album: "Blue Pop",
    date: "2025-03-17T00:00:00",
    duration: "06:51",
    urlSong: "https://20essentials.github.io/grimes-ost/songs/n11.mp3",
    urlPoster: "https://20essentials.github.io/grimes-ost/assets/n4.avif"
  },
  {
    title: "Electric Life",
    artist: "Duncan Laurence",
    album: "Blue Pop",
    date: "2025-03-18T00:00:00",
    duration: "03:17",
    urlSong: "https://20essentials.github.io/duncan-laurence-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/duncan-laurence-ost/assets/n1.avif"
  },
  {
    title: "Never Gonna Give It Up",
    artist: "DLS 2020",
    album: "Blue Pop",
    date: "2025-03-19T00:00:00",
    duration: "03:17",
    urlSong: "https://20essentials.github.io/dls-2020/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/dls-2020/assets/n2.avif"
  },
  {
    title: "Simplemente Amigos",
    artist: "Ana Gabriel",
    album: "Blue Pop",
    date: "2025-03-20T00:00:00",
    duration: "03:47",
    urlSong: "https://20essentials.github.io/ana-gabriel-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/ana-gabriel-ost/assets/n1.avif"
  }
];
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bluepop
}, Symbol.toStringTag, { value: "Module" }));
const bluerock = [
  {
    title: "Under Pressure",
    artist: "Queen",
    album: "Blue Rock",
    date: "2024-06-01T00:00:00",
    duration: "04:08",
    urlSong: "https://20essentials.github.io/queen-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/queen-ost/assets/n1.avif"
  },
  {
    title: "Beautiful Day",
    artist: "U2",
    slug: "u2",
    album: "Blue Rock",
    date: "2024-06-02T00:00:00",
    duration: "04:05",
    urlSong: "https://20essentials.github.io/u2-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/u2-band/assets/n1.avif"
  },
  {
    title: "Dancing With Myself",
    artist: "Billy Idol",
    slug: "billy-idol",
    album: "Blue Rock",
    date: "2024-06-03T00:00:00",
    duration: "04:48",
    urlSong: "https://20essentials.github.io/billy-idol-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/billy-idol-soundtrack/assets/n1.avif"
  },
  {
    title: "With or Without You",
    artist: "U2",
    slug: "u2",
    album: "Blue Rock",
    date: "2024-06-04T00:00:00",
    duration: "04:52",
    urlSong: "https://20essentials.github.io/u2-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/u2-band/assets/n2.avif"
  },
  {
    title: "Justify",
    artist: "Rasmus",
    slug: "rasmus",
    album: "Blue Rock",
    date: "2024-06-05T00:00:00",
    duration: "04:13",
    urlSong: "https://20essentials.github.io/the-rasmus-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/the-rasmus-band/assets/n1.avif"
  },
  {
    title: "City of The Blinding Lights",
    artist: "U2",
    slug: "u2",
    album: "Blue Rock",
    date: "2024-06-06T00:00:00",
    duration: "05:21",
    urlSong: "https://20essentials.github.io/u2-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/u2-band/assets/n3.avif"
  },
  {
    title: "Lamp Halo",
    artist: "Zeromancer",
    slug: "zeromancer",
    album: "Blue Rock",
    date: "2024-06-07T00:00:00",
    duration: "04:07",
    urlSong: "https://20essentials.github.io/zeromancer-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/zeromancer-ost/assets/n1.avif"
  },
  {
    title: "Unforgettable Fire",
    artist: "U2",
    slug: "u2",
    album: "Blue Rock",
    date: "2024-06-08T00:00:00",
    duration: "04:49",
    urlSong: "https://20essentials.github.io/u2-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/u2-band/assets/n4.avif"
  },
  {
    title: "Eyes Without Face",
    artist: "Billy Idol",
    slug: "billy-idol",
    album: "Blue Rock",
    date: "2024-06-09T00:00:00",
    duration: "04:55",
    urlSong: "https://20essentials.github.io/billy-idol-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/billy-idol-soundtrack/assets/n2.avif"
  },
  {
    title: "New Year's day",
    artist: "U2",
    slug: "u2",
    album: "Blue Rock",
    date: "2024-06-10T00:00:00",
    duration: "04:14",
    urlSong: "https://20essentials.github.io/u2-band/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/u2-band/assets/n1.avif"
  },
  {
    title: "Love's a Battlefield",
    artist: "Pat Benatar",
    slug: "pat-benatar",
    album: "Blue Rock",
    date: "2024-06-11T00:00:00",
    duration: "05:25",
    urlSong: "https://20essentials.github.io/pat-benatar-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/pat-benatar-ost/assets/n1.avif"
  },
  {
    title: "Shadowplay",
    artist: "The Killers",
    slug: "the-killers",
    album: "Blue Rock",
    date: "2024-06-12T00:00:00",
    duration: "04:09",
    urlSong: "https://20essentials.github.io/the-killers-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/the-killers-ost/assets/n1.avif"
  },
  {
    title: "HeartBreaker",
    artist: "Pat Benatar",
    slug: "pat-benatar",
    album: "Blue Rock",
    date: "2024-06-13T00:00:00",
    duration: "03:29",
    urlSong: "https://20essentials.github.io/pat-benatar-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/pat-benatar-ost/assets/n2.avif"
  },
  {
    title: "Everything will be Alright",
    artist: "The Killers",
    slug: "the-killers",
    album: "Blue Rock",
    date: "2024-06-14T00:00:00",
    duration: "05:43",
    urlSong: "https://20essentials.github.io/the-killers-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/the-killers-ost/assets/n3.avif"
  },
  {
    title: "5'Oclock in the Morning",
    artist: "Village People",
    slug: "village-people",
    album: "Blue Rock",
    date: "2024-06-15T00:00:00",
    duration: "05:43",
    urlSong: "https://20essentials.github.io/village-people-ost/songs/n18.mp3",
    urlPoster: "https://20essentials.github.io/village-people-ost/assets/n1.avif"
  },
  {
    title: "Human",
    artist: "The Killers",
    slug: "the-killers",
    album: "Blue Rock",
    date: "2024-06-16T00:00:00",
    duration: "04:05",
    urlSong: "https://20essentials.github.io/the-killers-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/the-killers-ost/assets/n4.avif"
  },
  {
    title: "Hold my Hand",
    artist: "New Found Glory",
    slug: "new-found-glory",
    album: "Blue Rock",
    date: "2024-06-17T00:00:00",
    duration: "03:57",
    urlSong: "https://20essentials.github.io/new-found-glory/songs/n20.mp3",
    urlPoster: "https://20essentials.github.io/new-found-glory/assets/n1.avif"
  },
  {
    title: "Breed",
    artist: "Nirvana",
    slug: "nirvana",
    album: "Blue Rock",
    date: "2024-06-18T00:00:00",
    duration: "03:03",
    urlSong: "https://20essentials.github.io/nirvana-ost/songs/n11.mp3",
    urlPoster: "https://20essentials.github.io/nirvana-ost/assets/n1.avif"
  },
  {
    title: "A Day In The Life",
    artist: "Beatles",
    slug: "the-beatles",
    album: "Blue Rock",
    date: "2024-06-19T00:00:00",
    duration: "05:12",
    urlSong: "https://20essentials.github.io/the-beatles-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/the-beatles-ost/assets/n1.avif"
  },
  {
    title: "Come as your Are",
    artist: "Nirvana",
    slug: "nirvana",
    album: "Blue Rock",
    date: "2024-06-20T00:00:00",
    duration: "03:39",
    urlSong: "https://20essentials.github.io/nirvana-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/nirvana-ost/assets/n2.avif"
  }
];
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bluerock
}, Symbol.toStringTag, { value: "Module" }));
const chiptune = [
  {
    title: "Imperial Army Theme",
    artist: "Zoids Chaotic Century",
    album: "Chiptune",
    date: "2028-02-01T00:00:00",
    duration: "01:38",
    urlSong: "https://20essentials.github.io/zoids-chaotic-century-ost/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/zoids-chaotic-century-ost/assets/n1.avif"
  },
  {
    title: "Ruin My Life",
    artist: "Zara Larsson",
    album: "Chiptune",
    date: "2028-02-02T00:00:00",
    duration: "03:14",
    urlSong: "https://20essentials.github.io/zara-larsson-soundtrack/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/zara-larsson-soundtrack/assets/n2.avif"
  },
  {
    title: "Hold Me",
    artist: "Your Favorite Enemies",
    album: "Chiptune",
    date: "2028-02-03T00:00:00",
    duration: "03:56",
    urlSong: "https://20essentials.github.io/your-favorite-enemies-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/your-favorite-enemies-band/assets/n2.avif"
  },
  {
    title: "Dear Mr. President",
    artist: "4 Non Blondes",
    album: "Chiptune",
    date: "2028-02-04T00:00:00",
    duration: "04:40",
    urlSong: "https://20essentials.github.io/4-non-blondes/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/4-non-blondes/assets/n1.avif"
  },
  {
    title: "Bad Blood",
    artist: "Bastille",
    album: "Chiptune",
    date: "2028-02-05T00:00:00",
    duration: "03:32",
    urlSong: "https://20essentials.github.io/bastille-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/bastille-ost/assets/n3.avif"
  },
  {
    title: "Children Of The Grave",
    artist: "Black Sabbath",
    album: "Chiptune",
    date: "2028-02-06T00:00:00",
    duration: "05:15",
    urlSong: "https://20essentials.github.io/black-sabbath-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/black-sabbath-band/assets/n2.avif"
  },
  {
    title: "Atomic",
    artist: "Blondie",
    album: "Chiptune",
    date: "2028-02-07T00:00:00",
    duration: "04:35",
    urlSong: "https://20essentials.github.io/blondie-soundtrack/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/blondie-soundtrack/assets/n1.avif"
  },
  {
    title: "Clouds",
    artist: "Borns",
    album: "Chiptune",
    date: "2028-02-08T00:00:00",
    duration: "03:08",
    urlSong: "https://20essentials.github.io/borns-band/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/borns-band/assets/n4.avif"
  },
  {
    title: "Irreplaceable",
    artist: "Beyonce",
    album: "Chiptune",
    date: "2028-02-09T00:00:00",
    duration: "03:53",
    urlSong: "https://20essentials.github.io/beyonce-album/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/beyonce-album/assets/n2.avif"
  },
  {
    title: "The Universal",
    artist: "Blur",
    album: "Chiptune",
    date: "2028-02-10T00:00:00",
    duration: "04:00",
    urlSong: "https://20essentials.github.io/blur-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/blur-band/assets/n2.avif"
  },
  {
    title: "Stay The Same",
    artist: "Bonobo",
    album: "Chiptune",
    date: "2028-02-11T00:00:00",
    duration: "04:44",
    urlSong: "https://20essentials.github.io/bonobo/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/bonobo/assets/n3.avif"
  },
  {
    title: "A Horse With No Name",
    artist: "Bojack Horseman",
    album: "Chiptune",
    date: "2028-02-12T00:00:00",
    duration: "04:35",
    urlSong: "https://20essentials.github.io/bojack-horseman-soundtrack/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/bojack-horseman-soundtrack/assets/n1.avif"
  },
  {
    title: "Beautiful Things",
    artist: "Benson Boone",
    album: "Chiptune",
    date: "2028-02-13T00:00:00",
    duration: "03:00",
    urlSong: "https://20essentials.github.io/benson-boone-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/benson-boone-band/assets/n1.avif"
  },
  {
    title: "Smoking",
    artist: "Boston",
    album: "Chiptune",
    date: "2028-02-14T00:00:00",
    duration: "04:23",
    urlSong: "https://20essentials.github.io/boston-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/boston-band/assets/n4.avif"
  },
  {
    title: "Knocking On Heaven's Door",
    artist: "Bob Dylan",
    album: "Chiptune",
    date: "2028-02-15T00:00:00",
    duration: "03:05",
    urlSong: "https://20essentials.github.io/bob-dylan-album/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/bob-dylan-album/assets/n2.avif"
  },
  {
    title: "Tallking To The Moon",
    artist: "Bruno Mars",
    album: "Chiptune",
    date: "2028-02-16T00:00:00",
    duration: "03:34",
    urlSong: "https://20essentials.github.io/bruno-mars-album/songs/n16.mp3",
    urlPoster: "https://20essentials.github.io/bruno-mars-album/assets/n4.avif"
  },
  {
    title: "So Demanding",
    artist: "Bag Raiders",
    album: "Chiptune",
    date: "2028-02-17T00:00:00",
    duration: "01:42",
    urlSong: "https://20essentials.github.io/bag-raiders-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/bag-raiders-band/assets/n4.avif"
  },
  {
    title: "The Lonely One",
    artist: "Alice Deejay",
    album: "Chiptune",
    date: "2028-02-18T00:00:00",
    duration: "03:30",
    urlSong: "https://20essentials.github.io/alice-deejay/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/alice-deejay/assets/n1.avif"
  },
  {
    title: "I Drove All Night",
    artist: "Unknown Brain",
    album: "Chiptune",
    date: "2028-02-19T00:00:00",
    duration: "02:43",
    urlSong: "https://20essentials.github.io/unknown-brain-soundtrack/songs/n14.mp3",
    urlPoster: "https://20essentials.github.io/unknown-brain-soundtrack/assets/n4.avif"
  },
  {
    title: "Cigarrete Daydreams",
    artist: "Cage The Elephant",
    album: "Chiptune",
    date: "2028-02-20T00:00:00",
    duration: "03:31",
    urlSong: "https://20essentials.github.io/cage-the-elephant-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/cage-the-elephant-band/assets/n2.avif"
  }
];
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: chiptune
}, Symbol.toStringTag, { value: "Module" }));
const darkfolk = [
  {
    title: "Would You Believe",
    artist: "Your Favorite Enemies",
    album: "Dark Folk",
    date: "2027-11-01T00:00:00",
    duration: "04:14",
    urlSong: "https://20essentials.github.io/your-favorite-enemies-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/your-favorite-enemies-band/assets/n3.avif"
  },
  {
    title: "A Track 5",
    artist: "Zoids Chaotic Century",
    album: "Dark Folk",
    date: "2027-11-02T00:00:00",
    duration: "02:09",
    urlSong: "https://20essentials.github.io/zoids-chaotic-century-ost/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/zoids-chaotic-century-ost/assets/n4.avif"
  },
  {
    title: "Hielo",
    artist: "Zoé",
    album: "Dark Folk",
    date: "2027-11-03T00:00:00",
    duration: "05:01",
    urlSong: "https://20essentials.github.io/zoe-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/zoe-ost/assets/n2.avif"
  },
  {
    title: "Lush Life",
    artist: "Zara Larsson",
    album: "Dark Folk",
    date: "2027-11-04T00:00:00",
    duration: "03:21",
    urlSong: "https://20essentials.github.io/zara-larsson-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/zara-larsson-soundtrack/assets/n2.avif"
  },
  {
    title: "Spaceman",
    artist: "4 Non Blondes",
    album: "Dark Folk",
    date: "2027-11-05T00:00:00",
    duration: "03:39",
    urlSong: "https://20essentials.github.io/4-non-blondes/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/4-non-blondes/assets/n1.avif"
  },
  {
    title: "Together",
    artist: "Axol",
    album: "Dark Folk",
    date: "2027-11-06T00:00:00",
    duration: "02:49",
    urlSong: "https://20essentials.github.io/axol-soundtrack/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/axol-soundtrack/assets/n2.avif"
  },
  {
    title: "Fairytale",
    artist: "Alexander Rybak",
    album: "Dark Folk",
    date: "2027-11-07T00:00:00",
    duration: "03:02",
    urlSong: "https://20essentials.github.io/alexander-rybak-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/alexander-rybak-album/assets/n1.avif"
  },
  {
    title: "Water And Said",
    artist: "Adam Goldman",
    album: "Dark Folk",
    date: "2027-11-08T00:00:00",
    duration: "06:34",
    urlSong: "https://20essentials.github.io/adam-goldman-album/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/adam-goldman-album/assets/n2.avif"
  },
  {
    title: "Blacktop",
    artist: "Yeah Yeah Yeahs",
    album: "Dark Folk",
    date: "2027-11-09T00:00:00",
    duration: "04:23",
    urlSong: "https://20essentials.github.io/yeah-yeah-yeahs-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/yeah-yeah-yeahs-band/assets/n2.avif"
  },
  {
    title: "Icarus",
    artist: "Bastille",
    album: "Dark Folk",
    date: "2027-11-10T00:00:00",
    duration: "03:52",
    urlSong: "https://20essentials.github.io/bastille-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/bastille-ost/assets/n2.avif"
  },
  {
    title: "Heaven And Hell",
    artist: "Black Sabbath",
    album: "Dark Folk",
    date: "2027-11-11T00:00:00",
    duration: "06:57",
    urlSong: "https://20essentials.github.io/black-sabbath-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/black-sabbath-band/assets/n2.avif"
  },
  {
    title: "Rebel Sun",
    artist: "Beach Weather",
    album: "Dark Folk",
    date: "2027-11-12T00:00:00",
    duration: "04:05",
    urlSong: "https://20essentials.github.io/beach-weather-soundtrack/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/beach-weather-soundtrack/assets/n1.avif"
  },
  {
    title: "One Way Or Another",
    artist: "Blondie",
    album: "Dark Folk",
    date: "2027-11-13T00:00:00",
    duration: "03:15",
    urlSong: "https://20essentials.github.io/blondie-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/blondie-soundtrack/assets/n2.avif"
  },
  {
    title: "Formation",
    artist: "Beyonce",
    album: "Dark Folk",
    date: "2027-11-14T00:00:00",
    duration: "03:35",
    urlSong: "https://20essentials.github.io/beyonce-album/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/beyonce-album/assets/n2.avif"
  },
  {
    title: "Coffee And Tv",
    artist: "Blur",
    album: "Dark Folk",
    date: "2027-11-15T00:00:00",
    duration: "05:19",
    urlSong: "https://20essentials.github.io/blur-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/blur-band/assets/n3.avif"
  },
  {
    title: "Bono",
    artist: "Bonobo",
    album: "Dark Folk",
    date: "2027-11-16T00:00:00",
    duration: "03:51",
    urlSong: "https://20essentials.github.io/bonobo/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/bonobo/assets/n1.avif"
  },
  {
    title: "Mr. Blue",
    artist: "Bojack Horseman",
    album: "Dark Folk",
    date: "2027-11-17T00:00:00",
    duration: "02:55",
    urlSong: "https://20essentials.github.io/bojack-horseman-soundtrack/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/bojack-horseman-soundtrack/assets/n4.avif"
  },
  {
    title: "Feelin' Satisfied",
    artist: "Boston",
    album: "Dark Folk",
    date: "2027-11-18T00:00:00",
    duration: "04:15",
    urlSong: "https://20essentials.github.io/boston/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/boston/assets/n2.avif"
  },
  {
    title: "Like A Rolling Stone",
    artist: "Bob Dylan",
    album: "Dark Folk",
    date: "2027-11-19T00:00:00",
    duration: "06:00",
    urlSong: "https://20essentials.github.io/bob-dylan-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/bob-dylan-album/assets/n1.avif"
  },
  {
    title: "Fun Punch",
    artist: "Bag Raiders",
    album: "Dark Folk",
    date: "2027-11-20T00:00:00",
    duration: "03:30",
    urlSong: "https://20essentials.github.io/bag-raiders-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/bag-raiders-band/assets/n1.avif"
  }
];
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: darkfolk
}, Symbol.toStringTag, { value: "Module" }));
const darknight = [
  {
    title: "Distant Echoes",
    artist: "Vxllain",
    album: "Dark Night",
    date: "2026-09-01T00:00:00",
    duration: "03:03",
    urlSong: "https://20essentials.github.io/vxllain-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/vxllain-band/assets/n1.avif"
  },
  {
    title: "Feel The Pain",
    artist: "Dinosaur Jr",
    album: "Dark Night",
    date: "2026-09-02T00:00:00",
    duration: "04:38",
    urlSong: "https://20essentials.github.io/dinosaur-jr/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/dinosaur-jr/assets/n1.avif"
  },
  {
    title: "High Hope",
    artist: "Pink Floyd",
    album: "Dark Night",
    date: "2026-09-03T00:00:00",
    duration: "07:03",
    urlSong: "https://20essentials.github.io/pink-floyd-band/songs/n12.mp3",
    urlPoster: "https://20essentials.github.io/pink-floyd-band/assets/n1.avif"
  },
  {
    title: "Judas 80s Version",
    artist: "Lady Gaga",
    album: "Dark Night",
    date: "2026-09-04T00:00:00",
    duration: "04:54",
    urlSong: "https://20essentials.github.io/lady-gaga-ost/songs/n13.mp3",
    urlPoster: "https://20essentials.github.io/lady-gaga-ost/assets/n3.avif"
  },
  {
    title: "Self Control",
    artist: "Laura Branigan",
    album: "Dark Night",
    date: "2026-09-05T00:00:00",
    duration: "05:07",
    urlSong: "https://20essentials.github.io/laura-branigan-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/laura-branigan-ost/assets/n1.avif"
  },
  {
    title: "Whe The Night Is Over",
    artist: "Lord Huron",
    album: "Dark Night",
    date: "2026-09-06T00:00:00",
    duration: "05:22",
    urlSong: "https://20essentials.github.io/lord-huron/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/lord-huron/assets/n1.avif"
  },
  {
    title: "Red Swam Depressing",
    artist: "Leenandlie",
    album: "Dark Night",
    date: "2026-09-07T00:00:00",
    duration: "00:51",
    urlSong: "https://20essentials.github.io/leeandlie-album/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/leeandlie-album/assets/n1.avif"
  },
  {
    title: "After Dark",
    artist: "Mr Kitty",
    album: "Dark Night",
    date: "2026-09-08T00:00:00",
    duration: "04:19",
    urlSong: "https://20essentials.github.io/mr-kitty-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/mr-kitty-ost/assets/n1.avif"
  },
  {
    title: "Closer",
    artist: "Nuages",
    album: "Dark Night",
    date: "2026-09-09T00:00:00",
    duration: "05:08",
    urlSong: "https://20essentials.github.io/nuages-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/nuages-album/assets/n1.avif"
  },
  {
    title: "Thelema",
    artist: "Ofdream",
    album: "Dark Night",
    date: "2026-09-10T00:00:00",
    duration: "03:29",
    urlSong: "https://20essentials.github.io/ofdream/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/ofdream/assets/n1.avif"
  },
  {
    title: "Snowfall",
    artist: "Oneheart",
    album: "Dark Night",
    date: "2026-09-11T00:00:00",
    duration: "02:03",
    urlSong: "https://20essentials.github.io/oneheart-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/oneheart-album/assets/n1.avif"
  },
  {
    title: "Fly By Night",
    artist: "Rush",
    album: "Dark Night",
    date: "2026-09-12T00:00:00",
    duration: "03:22",
    urlSong: "https://20essentials.github.io/rush-ost/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/rush-ost/assets/n1.avif"
  },
  {
    title: "Nervous",
    artist: "The Neighbourhood",
    album: "Dark Night",
    date: "2026-09-13T00:00:00",
    duration: "04:11",
    urlSong: "https://20essentials.github.io/the-neighbourhood-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/the-neighbourhood-ost/assets/n1.avif"
  },
  {
    title: "I Met The Stones",
    artist: "Dinosaur Jr",
    album: "Dark Night",
    date: "2026-09-14T00:00:00",
    duration: "03:45",
    urlSong: "https://20essentials.github.io/dinosaur-jr/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/dinosaur-jr/assets/n2.avif"
  },
  {
    title: "In Your Arms Tonight",
    artist: "Mr Kitty",
    album: "Dark Night",
    date: "2026-09-15T00:00:00",
    duration: "03:41",
    urlSong: "https://20essentials.github.io/mr-kitty-ost/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/mr-kitty-ost/assets/n2.avif"
  },
  {
    title: "Dark Red",
    artist: "Steve Lacy",
    album: "Dark Night",
    date: "2026-09-16T00:00:00",
    duration: "02:53",
    urlSong: "https://20essentials.github.io/steve-lacy-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/steve-lacy-ost/assets/n1.avif"
  },
  {
    title: "As The World",
    artist: "Sarah Cothran",
    album: "Dark Night",
    date: "2026-09-17T00:00:00",
    duration: "02:41",
    urlSong: "https://20essentials.github.io/sarah-cothran/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/sarah-cothran/assets/n1.avif"
  },
  {
    title: "Perfect",
    artist: "Unknown Brain",
    album: "Dark Night",
    date: "2026-09-18T00:00:00",
    duration: "03:24",
    urlSong: "https://20essentials.github.io/unknown-brain-soundtrack/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/unknown-brain-soundtrack/assets/n1.avif"
  },
  {
    title: "Champion",
    artist: "Warpaint",
    album: "Dark Night",
    date: "2026-09-19T00:00:00",
    duration: "04:37",
    urlSong: "https://20essentials.github.io/warpaint-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/warpaint-band/assets/n1.avif"
  },
  {
    title: "Certain Degree",
    artist: "Ofdream",
    album: "Dark Night",
    date: "2026-09-20T00:00:00",
    duration: "04:26",
    urlSong: "https://20essentials.github.io/ofdream/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/ofdream/assets/n2.avif"
  }
];
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: darknight
}, Symbol.toStringTag, { value: "Module" }));
const discopop = [
  {
    title: "Frozen",
    artist: "Madonna",
    album: "Disco Pop",
    date: "2026-10-01T00:00:00",
    duration: "06:19",
    urlSong: "https://20essentials.github.io/madonna-album/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/madonna-album/assets/n1.avif"
  },
  {
    title: "Degeneracion Actual",
    artist: "Pedro Suárez-Vértiz",
    album: "Disco Pop",
    date: "2026-10-02T00:00:00",
    duration: "05:16",
    urlSong: "https://20essentials.github.io/pedro-suarez-vertiz-ost/songs/n11.mp3",
    urlPoster: "https://20essentials.github.io/pedro-suarez-vertiz-ost/assets/n1.avif"
  },
  {
    title: "Shine On Your Crazy Diamond",
    artist: "Pink Floyd",
    album: "Disco Pop",
    date: "2026-10-03T00:00:00",
    duration: "13:32",
    urlSong: "https://20essentials.github.io/pink-floyd/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/pink-floyd/assets/n1.avif"
  },
  {
    title: "Heart",
    artist: "Pet Shop Boys",
    album: "Disco Pop",
    date: "2026-10-04T00:00:00",
    duration: "04:17",
    urlSong: "https://20essentials.github.io/pet-shop-boys-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/pet-shop-boys-band/assets/n1.avif"
  },
  {
    title: "Luchando Con Robots",
    artist: "Phineas And Ferb",
    album: "Disco Pop",
    date: "2026-10-05T00:00:00",
    duration: "02:20",
    urlSong: "https://20essentials.github.io/phineas-and-ferb/songs/n17.mp3",
    urlPoster: "https://20essentials.github.io/phineas-and-ferb/assets/n1.avif"
  },
  {
    title: "Crazy Little Thing Called Love",
    artist: "Queen",
    album: "Disco Pop",
    date: "2026-10-06T00:00:00",
    duration: "02:43",
    urlSong: "https://20essentials.github.io/queen-band/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/queen-band/assets/n4.avif"
  },
  {
    title: "Maxwell Murder",
    artist: "Rancid",
    album: "Disco Pop",
    date: "2026-10-07T00:00:00",
    duration: "01:26",
    urlSong: "https://20essentials.github.io/rancid-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/rancid-ost/assets/n1.avif"
  },
  {
    title: "Diamonds",
    artist: "Rihanna",
    album: "Disco Pop",
    date: "2026-10-08T00:00:00",
    duration: "03:42",
    urlSong: "https://20essentials.github.io/rihanna-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/rihanna-ost/assets/n1.avif"
  },
  {
    title: "Hung Up",
    artist: "Madonna",
    album: "Disco Pop",
    date: "2026-10-09T00:00:00",
    duration: "05:45",
    urlSong: "https://20essentials.github.io/madonna-album/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/madonna-album/assets/n4.avif"
  },
  {
    title: "Pentagramma",
    artist: "Tony Igy",
    album: "Disco Pop",
    date: "2026-10-10T00:00:00",
    duration: "03:41",
    urlSong: "https://20essentials.github.io/tony-igy-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/tony-igy-soundtrack/assets/n1.avif"
  },
  {
    title: "Living In A World Without You",
    artist: "The Rasmus",
    album: "Disco Pop",
    date: "2026-10-11T00:00:00",
    duration: "03:58",
    urlSong: "https://20essentials.github.io/the-rasmus-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/the-rasmus-band/assets/n4.avif"
  },
  {
    title: "The Way I Are",
    artist: "Timbaland",
    album: "Disco Pop",
    date: "2026-10-12T00:00:00",
    duration: "03:31",
    urlSong: "https://20essentials.github.io/timbaland-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/timbaland-album/assets/n1.avif"
  },
  {
    title: "Walk On Water",
    artist: "Thirty Seconds To Mars",
    album: "Disco Pop",
    date: "2026-10-13T00:00:00",
    duration: "03:20",
    urlSong: "https://20essentials.github.io/thirty-seconds-to-mars-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/thirty-seconds-to-mars-band/assets/n1.avif"
  },
  {
    title: "Stop Loving You",
    artist: "Toto",
    album: "Disco Pop",
    date: "2026-10-14T00:00:00",
    duration: "04:37",
    urlSong: "https://20essentials.github.io/toto-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/toto-band/assets/n1.avif"
  },
  {
    title: "Ode To The Bouncer",
    artist: "Studio Killers",
    album: "Disco Pop",
    date: "2026-10-15T00:00:00",
    duration: "03:30",
    urlSong: "https://20essentials.github.io/studio-killers-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/studio-killers-ost/assets/n1.avif"
  },
  {
    title: "Bad Habit",
    artist: "Steve Lacy",
    album: "Disco Pop",
    date: "2026-10-16T00:00:00",
    duration: "03:52",
    urlSong: "https://20essentials.github.io/steve-lacy-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/steve-lacy-ost/assets/n1.avif"
  },
  {
    title: "How Cold You Want Him",
    artist: "Spin Doctors",
    album: "Disco Pop",
    date: "2026-10-17T00:00:00",
    duration: "04:37",
    urlSong: "https://20essentials.github.io/spin-doctors-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/spin-doctors-ost/assets/n1.avif"
  },
  {
    title: "Say Goodbye",
    artist: "Unknown Brain",
    album: "Disco Pop",
    date: "2026-10-18T00:00:00",
    duration: "03:50",
    urlSong: "https://20essentials.github.io/unknown-brain-soundtrack/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/unknown-brain-soundtrack/assets/n1.avif"
  },
  {
    title: "Love Me Better",
    artist: "Wiguez And Vizzen",
    album: "Disco Pop",
    date: "2026-10-19T00:00:00",
    duration: "02:53",
    urlSong: "https://20essentials.github.io/wiguez-and-vizzen/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/wiguez-and-vizzen/assets/n1.avif"
  },
  {
    title: "Mortals",
    artist: "Warriyo",
    album: "Disco Pop",
    date: "2026-10-20T00:00:00",
    duration: "04:02",
    urlSong: "https://20essentials.github.io/warriyo-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/warriyo-ost/assets/n1.avif"
  }
];
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: discopop
}, Symbol.toStringTag, { value: "Module" }));
const electroacid = [
  {
    title: "I See You",
    artist: "Jutty Ranx",
    album: "Electro Acid",
    date: "2026-05-01T00:00:00",
    duration: "03:39",
    urlSong: "https://20essentials.github.io/jutty-ranx/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/jutty-ranx/assets/n1.avif"
  },
  {
    title: "Vessel",
    artist: "Ship Wrek",
    album: "Electro Acid",
    date: "2026-05-02T00:00:00",
    duration: "03:24",
    urlSong: "https://20essentials.github.io/ship-wrek-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/ship-wrek-soundtrack/assets/n1.avif"
  },
  {
    title: "Adventure V2",
    artist: "JJD",
    album: "Electro Acid",
    date: "2026-05-03T00:00:00",
    duration: "04:39",
    urlSong: "https://20essentials.github.io/jjd/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/jjd/assets/n1.avif"
  },
  {
    title: "FLashing Lights",
    artist: "Kanye West",
    album: "Electro Acid",
    date: "2026-05-04T00:00:00",
    duration: "05:22",
    urlSong: "https://20essentials.github.io/kanye-west/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/kanye-west/assets/n1.avif"
  },
  {
    title: "Bad Romance",
    artist: "Lady Gaga",
    album: "Electro Acid",
    date: "2026-05-05T00:00:00",
    duration: "05:08",
    urlSong: "https://20essentials.github.io/lady-gaga-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/lady-gaga-ost/assets/n1.avif"
  },
  {
    title: "Vision",
    artist: "Lost Sky",
    album: "Electro Acid",
    date: "2026-05-06T00:00:00",
    duration: "03:54",
    urlSong: "https://20essentials.github.io/lost-sky-album/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/lost-sky-album/assets/n1.avif"
  },
  {
    title: "Atlantis is Calling",
    artist: "Modern Talking",
    album: "Electro Acid",
    date: "2026-05-07T00:00:00",
    duration: "03:49",
    urlSong: "https://20essentials.github.io/modern-talking-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/modern-talking-band/assets/n1.avif"
  },
  {
    title: "Like a Virgin",
    artist: "Madonna",
    album: "Electro Acid",
    date: "2026-05-08T00:00:00",
    duration: "03:38",
    urlSong: "https://20essentials.github.io/madonna-album/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/madonna-album/assets/n1.avif"
  },
  {
    title: "Destroy Me",
    artist: "Mr Kitty",
    album: "Electro Acid",
    date: "2026-05-09T00:00:00",
    duration: "06:15",
    urlSong: "https://20essentials.github.io/mr-kitty/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/mr-kitty/assets/n1.avif"
  },
  {
    title: "Destiny",
    artist: "Neffex",
    album: "Electro Acid",
    date: "2026-05-10T00:00:00",
    duration: "03:27",
    urlSong: "https://20essentials.github.io/neffex-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/neffex-soundtrack/assets/n1.avif"
  },
  {
    title: "Un Vino Y Una Cerveza",
    artist: "Pedro Suárez-Vértiz",
    album: "Electro Acid",
    date: "2026-05-11T00:00:00",
    duration: "04:30",
    urlSong: "https://20essentials.github.io/pedro-suarez-vertiz-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/pedro-suarez-vertiz-ost/assets/n1.avif"
  },
  {
    title: "Time",
    artist: "Pink Floyd",
    album: "Electro Acid",
    date: "2026-05-12T00:00:00",
    duration: "04:59",
    urlSong: "https://20essentials.github.io/pink-floyd-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/pink-floyd-band/assets/n1.avif"
  },
  {
    title: "Umbrella",
    artist: "Rihanna",
    album: "Electro Acid",
    date: "2026-05-13T00:00:00",
    duration: "04:39",
    urlSong: "https://20essentials.github.io/rihanna-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/rihanna-ost/assets/n1.avif"
  },
  {
    title: "Softcore",
    artist: "The Neighbourhood",
    album: "Electro Acid",
    date: "2026-05-14T00:00:00",
    duration: "03:26",
    urlSong: "https://20essentials.github.io/the-neighbourhood-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/the-neighbourhood-ost/assets/n1.avif"
  },
  {
    title: "The Game Has Changed",
    artist: "Tron",
    album: "Electro Acid",
    date: "2026-05-15T00:00:00",
    duration: "03:25",
    urlSong: "https://20essentials.github.io/tron-soundtrack/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/tron-soundtrack/assets/n1.avif"
  },
  {
    title: "Astronomia",
    artist: "Tony Igy",
    album: "Electro Acid",
    date: "2026-05-16T00:00:00",
    duration: "03:18",
    urlSong: "https://20essentials.github.io/tony-igy-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/tony-igy-soundtrack/assets/n1.avif"
  },
  {
    title: "Jenny",
    artist: "Studio Killers",
    album: "Electro Acid",
    date: "2026-05-17T00:00:00",
    duration: "03:34",
    urlSong: "https://20essentials.github.io/studio-killers-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/studio-killers-ost/assets/n1.avif"
  },
  {
    title: "Nice To Meet You",
    artist: "Imagine Dragons",
    album: "Electro Acid",
    date: "2026-05-18T00:00:00",
    duration: "03:10",
    urlSong: "https://20essentials.github.io/imagine--dragons/songs/n11.mp3",
    urlPoster: "https://20essentials.github.io/imagine--dragons/assets/n1.avif"
  },
  {
    title: "Ark",
    artist: "Ship Wrek",
    album: "Electro Acid",
    date: "2026-05-19T00:00:00",
    duration: "02:59",
    urlSong: "https://20essentials.github.io/ship-wrek-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/ship-wrek-soundtrack/assets/n2.avif"
  },
  {
    title: "Come & Get It",
    artist: "Selena Gomez",
    album: "Electro Acid",
    date: "2026-05-20T00:00:00",
    duration: "03:54",
    urlSong: "https://20essentials.github.io/selena-gomez-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/selena-gomez-ost/assets/n1.avif"
  }
];
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: electroacid
}, Symbol.toStringTag, { value: "Module" }));
const electronic = [
  {
    title: "Forbidden Voices",
    artist: "Martin Garrix",
    album: "Electronic",
    date: "2024-10-01T00:00:00",
    duration: "03:47",
    urlSong: "https://20essentials.github.io/martin-garrix-soundtrack/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/martin-garrix-soundtrack/assets/n1.avif"
  },
  {
    title: "Home",
    artist: "Sunstroke Project",
    album: "Electronic",
    date: "2024-10-02T00:00:00",
    duration: "03:12",
    urlSong: "https://20essentials.github.io/sunstroke-project-ost/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/sunstroke-project-ost/assets/n1.avif"
  },
  {
    title: "Arrow",
    artist: "Jim Yosef",
    album: "Electronic",
    date: "2024-10-03T00:00:00",
    duration: "03:40",
    urlSong: "https://20essentials.github.io/jim-yosef/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/jim-yosef/assets/n1.avif"
  },
  {
    title: "Tattoo",
    artist: "Loreen",
    album: "Electronic",
    date: "2024-10-04T00:00:00",
    duration: "03:03",
    urlSong: "https://20essentials.github.io/loreen/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/loreen/assets/n1.avif"
  },
  {
    title: "Under Control",
    artist: "Calvin Harris",
    album: "Electronic",
    date: "2024-10-05T00:00:00",
    duration: "03:04",
    urlSong: "https://20essentials.github.io/calvin-harris-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/calvin-harris-ost/assets/n1.avif"
  },
  {
    title: "Lights Down",
    artist: "John Newman",
    album: "Electronic",
    date: "2024-10-06T00:00:00",
    duration: "04:12",
    urlSong: "https://20essentials.github.io/john-newman/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/john-newman/assets/n1.avif"
  },
  {
    title: "Electric Feel",
    artist: "Mgmt",
    album: "Electronic",
    date: "2024-10-07T00:00:00",
    duration: "03:49",
    urlSong: "https://20essentials.github.io/mgmt-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/mgmt-band/assets/n1.avif"
  },
  {
    title: "Save The World, One",
    artist: "Swedish House Mafia",
    album: "Electronic",
    date: "2024-10-08T00:00:00",
    duration: "06:50",
    urlSong: "https://20essentials.github.io/swedish-house-mafia-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/swedish-house-mafia-ost/assets/n1.avif"
  },
  {
    title: "Bleed",
    artist: "Axol",
    album: "Electronic",
    date: "2024-10-09T00:00:00",
    duration: "04:11",
    urlSong: "https://20essentials.github.io/axol-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/axol-soundtrack/assets/n1.avif"
  },
  {
    title: "After Image",
    artist: "Le Castlevania",
    album: "Electronic",
    date: "2024-10-10T00:00:00",
    duration: "04:22",
    urlSong: "https://20essentials.github.io/le-castle-vania-ost-/songs/n14.mp3",
    urlPoster: "https://20essentials.github.io/le-castle-vania-ost-/assets/n1.avif"
  },
  {
    title: "Spiderman 90s Theme",
    artist: "Spiderman",
    album: "Electronic",
    date: "2024-10-11T00:00:00",
    duration: "03:21",
    urlSong: "https://20essentials.github.io/spider-man-soundtrack/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/spider-man-soundtrack/assets/n1.avif"
  },
  {
    title: "If You Remember",
    artist: "DLS 2016",
    album: "Electronic",
    date: "2024-10-12T00:00:00",
    duration: "03:43",
    urlSong: "https://20essentials.github.io/dls-2016/songs/n19.mp3",
    urlPoster: "https://20essentials.github.io/dls-2016/assets/n3.avif"
  },
  {
    title: "The Edge",
    artist: "Spiderman",
    album: "Electronic",
    date: "2024-10-13T00:00:00",
    duration: "03:50",
    urlSong: "https://20essentials.github.io/spider-man-soundtrack/songs/n12.mp3",
    urlPoster: "https://20essentials.github.io/spider-man-soundtrack/assets/n2.avif"
  },
  {
    title: "Overthink",
    artist: "Blueberry",
    album: "Electronic",
    date: "2024-10-14T00:00:00",
    duration: "02:09",
    urlSong: "https://20essentials.github.io/blueberry-ost/songs/n14.mp3",
    urlPoster: "https://20essentials.github.io/blueberry-ost/assets/n1.avif"
  },
  {
    title: "Darkside",
    artist: "Alan Walker",
    album: "Electronic",
    date: "2024-10-15T00:00:00",
    duration: "03:31",
    urlSong: "https://20essentials.github.io/alan-walker-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/alan-walker-ost/assets/n3.avif"
  },
  {
    title: "Wrath",
    artist: "KMFDM",
    album: "Electronic",
    date: "2024-10-16T00:00:00",
    duration: "05:42",
    urlSong: "https://20essentials.github.io/kmfdm/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/kmfdm/assets/n1.avif"
  },
  {
    title: "Kill V. Maim",
    artist: "Grimes",
    album: "Electronic",
    date: "2024-10-17T00:00:00",
    duration: "04:37",
    urlSong: "https://20essentials.github.io/grimes-ost/songs/n12.mp3",
    urlPoster: "https://20essentials.github.io/grimes-ost/assets/n4.avif"
  },
  {
    title: "Alone, Pt 2",
    artist: "Alan Walker",
    album: "Electronic",
    date: "2024-10-18T00:00:00",
    duration: "02:57",
    urlSong: "https://20essentials.github.io/alan-walker-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/alan-walker-ost/assets/n2.avif"
  },
  {
    title: "Royalty",
    artist: "Zorken",
    album: "Electronic",
    date: "2024-10-19T00:00:00",
    duration: "03:29",
    urlSong: "https://20essentials.github.io/zorken/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/zorken/assets/n1.avif"
  },
  {
    title: "Scribble",
    artist: "Underwold",
    album: "Electronic",
    date: "2024-10-20T00:00:00",
    duration: "07:01",
    urlSong: "https://20essentials.github.io/underworld-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/underworld-ost/assets/n1.avif"
  }
];
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: electronic
}, Symbol.toStringTag, { value: "Module" }));
const electropop = [
  {
    title: "Medicine",
    artist: "DLS 2016",
    album: "Electro Pop",
    date: "2025-07-01T00:00:00",
    duration: "03:36",
    urlSong: "https://20essentials.github.io/dls-2016/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/dls-2016/assets/n1.avif"
  },
  {
    title: "You",
    artist: "Axol",
    album: "Electro Pop",
    date: "2025-07-02T00:00:00",
    duration: "03:15",
    urlSong: "https://20essentials.github.io/axol-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/axol-soundtrack/assets/n1.avif"
  },
  {
    title: "Sad",
    artist: "Blueberry",
    album: "Electro Pop",
    date: "2025-07-03T00:00:00",
    duration: "01:28",
    urlSong: "https://20essentials.github.io/blueberry-ost/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/blueberry-ost/assets/n1.avif"
  },
  {
    title: "Vindicated",
    artist: "Spiderman",
    album: "Electro Pop",
    date: "2025-07-04T00:00:00",
    duration: "03:20",
    urlSong: "https://20essentials.github.io/spider-man-soundtrack/songs/n15.mp3",
    urlPoster: "https://20essentials.github.io/spider-man-soundtrack/assets/n1.avif"
  },
  {
    title: "On my Way",
    artist: "Alan Walker",
    album: "Electro Pop",
    date: "2025-07-05T00:00:00",
    duration: "03:13",
    urlSong: "https://20essentials.github.io/alan-walker-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/alan-walker-ost/assets/n1.avif"
  },
  {
    title: "Here",
    artist: "Alessia Cara",
    album: "Electro Pop",
    date: "2025-07-06T00:00:00",
    duration: "03:27",
    urlSong: "https://20essentials.github.io/alessia-cara-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/alessia-cara-ost/assets/n1.avif"
  },
  {
    title: "Tomorrow",
    artist: "Beauz",
    album: "Electro Pop",
    date: "2025-07-07T00:00:00",
    duration: "02:36",
    urlSong: "https://20essentials.github.io/beauz-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/beauz-ost/assets/n1.avif"
  },
  {
    title: "There is a Party",
    artist: "Dj Bobo",
    album: "Electro Pop",
    date: "2025-07-08T00:00:00",
    duration: "04:22",
    urlSong: "https://20essentials.github.io/dj-bobo/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/dj-bobo/assets/n1.avif"
  },
  {
    title: "Get Ready For This",
    artist: "2 Unlimited",
    album: "Electro Pop",
    date: "2025-07-09T00:00:00",
    duration: "03:44",
    urlSong: "https://20essentials.github.io/2-unlimited-ost/songs/n16.mp3",
    urlPoster: "https://20essentials.github.io/2-unlimited-ost/assets/n1.avif"
  },
  {
    title: "Neon Genesis",
    artist: "Blueberry",
    album: "Electro Pop",
    date: "2025-07-10T00:00:00",
    duration: "02:15",
    urlSong: "https://20essentials.github.io/blueberry-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/blueberry-ost/assets/n2.avif"
  },
  {
    title: "Show me Colours",
    artist: "Masterboy",
    album: "Electro Pop",
    date: "2025-07-11T00:00:00",
    duration: "03:32",
    urlSong: "https://20essentials.github.io/masterboy-soundtrack/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/masterboy-soundtrack/assets/n1.avif"
  },
  {
    title: "Let me Love You",
    artist: "Dj Snake",
    album: "Electro Pop",
    date: "2025-07-12T00:00:00",
    duration: "03:25",
    urlSong: "https://20essentials.github.io/dj-snake-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/dj-snake-album/assets/n1.avif"
  },
  {
    title: "Blow your Mind",
    artist: "Dua Lipa",
    album: "Electro Pop",
    date: "2025-07-13T00:00:00",
    duration: "02:58",
    urlSong: "https://20essentials.github.io/dua-lipa-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/dua-lipa-ost/assets/n1.avif"
  },
  {
    title: "Never Be Like You",
    artist: "Flume",
    album: "Electro Pop",
    date: "2025-07-14T00:00:00",
    duration: "03:53",
    urlSong: "https://20essentials.github.io/flume/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/flume/assets/n1.avif"
  },
  {
    title: "Two Weeks",
    artist: "Grizzly Bear",
    album: "Electro Pop",
    date: "2025-07-15T00:00:00",
    duration: "04:10",
    urlSong: "https://20essentials.github.io/grizzly-bear-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/grizzly-bear-ost/assets/n1.avif"
  },
  {
    title: "Traveler",
    artist: "Glude",
    album: "Electro Pop",
    date: "2025-07-16T00:00:00",
    duration: "03:36",
    urlSong: "https://20essentials.github.io/glude-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/glude-ost/assets/n1.avif"
  },
  {
    title: "No lie",
    artist: "Dua Lipa",
    album: "Electro Pop",
    date: "2025-07-17T00:00:00",
    duration: "03:40",
    urlSong: "https://20essentials.github.io/dua-lipa-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/dua-lipa-ost/assets/n2.avif"
  },
  {
    title: "Infinity 2008",
    artist: "Guru Josh",
    album: "Electro Pop",
    date: "2025-07-18T00:00:00",
    duration: "03:10",
    urlSong: "https://20essentials.github.io/guru-josh/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/guru-josh/assets/n1.avif"
  },
  {
    title: "Outline",
    artist: "Vanze",
    album: "Electro Pop",
    date: "2025-07-19T00:00:00",
    duration: "05:37",
    urlSong: "https://20essentials.github.io/vanze-ost/songs/n15.mp3",
    urlPoster: "https://20essentials.github.io/vanze-ost/assets/n3.avif"
  },
  {
    title: "Bad Liar",
    artist: "Imagine Dragons",
    album: "Electro Pop",
    date: "2025-07-20T00:00:00",
    duration: "04:19",
    urlSong: "https://20essentials.github.io/imagine--dragons/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/imagine--dragons/assets/n1.avif"
  }
];
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: electropop
}, Symbol.toStringTag, { value: "Module" }));
const englishpop = [
  {
    title: "Motive",
    artist: "Ariana Grande",
    slug: "ariana-grande",
    album: "English Pop",
    date: "2024-07-01T00:00:00",
    duration: "02:46",
    urlSong: "https://20essentials.github.io/ariana-grande-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/ariana-grande-ost/assets/n1.avif"
  },
  {
    title: "I've got Magic",
    artist: "Barbie",
    slug: "barbie",
    album: "English Pop",
    date: "2024-07-02T00:00:00",
    duration: "03:11",
    urlSong: "https://20essentials.github.io/barbie-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/barbie-soundtrack/assets/n1.avif"
  },
  {
    title: "Golden",
    artist: "Harry Styles",
    slug: "harry-styles",
    album: "English Pop",
    date: "2024-07-03T00:00:00",
    duration: "03:28",
    urlSong: "https://20essentials.github.io/harry-styles-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/harry-styles-ost/assets/n1.avif"
  },
  {
    title: "When Love Takes Over",
    artist: "David Guetta",
    slug: "david-guetta",
    album: "English Pop",
    date: "2024-07-04T00:00:00",
    duration: "03:08",
    urlSong: "https://20essentials.github.io/david-guetta-ost/songs/n14.mp3",
    urlPoster: "https://20essentials.github.io/david-guetta-ost/assets/n1.avif"
  },
  {
    title: "Here I Am",
    artist: "Barbie",
    slug: "barbie",
    album: "English Pop",
    date: "2024-07-05T00:00:00",
    duration: "03:11",
    urlSong: "https://20essentials.github.io/barbie-soundtrack/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/barbie-soundtrack/assets/n2.avif"
  },
  {
    title: "Grand Finale",
    artist: "Studio Killers",
    slug: "studio-killers",
    album: "English Pop",
    date: "2024-07-06T00:00:00",
    duration: "03:52",
    urlSong: "https://20essentials.github.io/studio-killers-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/studio-killers-ost/assets/n2.avif"
  },
  {
    title: "The Heart Wants What It Wants",
    artist: "Selena Gomez",
    slug: "selena-gomez",
    album: "English Pop",
    date: "2024-07-07T00:00:00",
    duration: "03:57",
    urlSong: "https://20essentials.github.io/selena-gomez-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/selena-gomez-ost/assets/n2.avif"
  },
  {
    title: "Try Everything",
    artist: "Shakira",
    slug: "shakira",
    album: "English Pop",
    date: "2024-07-08T00:00:00",
    duration: "03:26",
    urlSong: "https://20essentials.github.io/shakira-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/shakira-ost/assets/n1.avif"
  },
  {
    title: "Kids",
    artist: "Mgmt",
    slug: "mgmt",
    album: "English Pop",
    date: "2024-07-09T00:00:00",
    duration: "05:01",
    urlSong: "https://20essentials.github.io/mgmt-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/mgmt-band/assets/n1.avif"
  },
  {
    title: "Money Changes Everything",
    artist: "Cindy Lauper",
    slug: "cindy-lauper",
    album: "English Pop",
    date: "2024-07-10T00:00:00",
    duration: "04:55",
    urlSong: "https://20essentials.github.io/cindy-lauper/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/cindy-lauper/assets/n1.avif"
  },
  {
    title: "Nothing Like The Rain",
    artist: "2 Unlimited",
    slug: "2-unlimited",
    album: "English Pop",
    date: "2024-07-11T00:00:00",
    duration: "04:00",
    urlSong: "https://20essentials.github.io/2-unlimited-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/2-unlimited-ost/assets/n1.avif"
  },
  {
    title: "Daylight",
    artist: "Maroon 5",
    slug: "maroon-5",
    album: "English Pop",
    date: "2024-07-12T00:00:00",
    duration: "03:44",
    urlSong: "https://20essentials.github.io/maroon5/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/maroon5/assets/n1.avif"
  },
  {
    title: "Believe",
    artist: "Cher",
    slug: "cher",
    album: "English Pop",
    date: "2024-07-13T00:00:00",
    duration: "03:26",
    urlSong: "https://20essentials.github.io/cher-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/cher-ost/assets/n1.avif"
  },
  {
    title: "Sunflower",
    artist: "Spider-man",
    slug: "spider-man",
    album: "English Pop",
    date: "2024-07-14T00:00:00",
    duration: "02:37",
    urlSong: "https://20essentials.github.io/spider-man-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/spider-man-soundtrack/assets/n4.avif"
  },
  {
    title: "Chelsea Dagger",
    artist: "Kaiser Chiefs",
    slug: "kaise-chiefs",
    album: "English Pop",
    date: "2024-07-15T00:00:00",
    duration: "03:23",
    urlSong: "https://20essentials.github.io/kaiser-chiefs-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/kaiser-chiefs-ost/assets/n1.avif"
  },
  {
    title: "This Is Love",
    artist: "Will I Am",
    slug: "william-james",
    album: "English Pop",
    date: "2024-07-16T00:00:00",
    duration: "04:56",
    urlSong: "https://20essentials.github.io/william-james/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/william-james/assets/n1.avif"
  },
  {
    title: "Red Swam",
    artist: "Leeandlie",
    slug: "leeandlie",
    album: "English Pop",
    date: "2024-07-17T00:00:00",
    duration: "01:42",
    urlSong: "https://20essentials.github.io/leeandlie-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/leeandlie-album/assets/n1.avif"
  },
  {
    title: "Afraid",
    artist: "The Neighbourhood",
    slug: "neighbourhood",
    album: "English Pop",
    date: "2024-07-18T00:00:00",
    duration: "04:11",
    urlSong: "https://20essentials.github.io/the-neighbourhood-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/the-neighbourhood-ost/assets/n1.avif"
  },
  {
    title: "Someone To You",
    artist: "DLS 2016",
    slug: "dls-2016",
    album: "English Pop",
    date: "2024-07-19T00:00:00",
    duration: "03:39",
    urlSong: "https://20essentials.github.io/dls-2016/songs/n11.mp3",
    urlPoster: "https://20essentials.github.io/dls-2016/assets/n1.avif"
  },
  {
    title: "I Need to Know",
    artist: "Barbie",
    slug: "barbie",
    album: "English Pop",
    date: "2024-07-20T00:00:00",
    duration: "04:07",
    urlSong: "https://20essentials.github.io/barbie-soundtrack/songs/n11.mp3",
    urlPoster: "https://20essentials.github.io/barbie-soundtrack/assets/n3.avif"
  }
];
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: englishpop
}, Symbol.toStringTag, { value: "Module" }));
const eurodance = [
  {
    title: "Feel the Heat of The Night",
    artist: "Masterboy",
    album: "Eurodance",
    date: "2025-02-01T00:00:00",
    duration: "3:57",
    urlSong: "https://20essentials.github.io/masterboy-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/masterboy-soundtrack/assets/n1.avif"
  },
  {
    title: "EveryBody",
    artist: "Dj Bobo",
    album: "Eurodance",
    date: "2025-02-02T00:00:00",
    duration: "03:49",
    urlSong: "https://20essentials.github.io/dj-bobo/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/dj-bobo/assets/n1.avif"
  },
  {
    title: "Take Control",
    artist: "Emel Aykanat",
    album: "Eurodance",
    date: "2025-02-03T00:00:00",
    duration: "03:45",
    urlSong: "https://20essentials.github.io/dj-bobo/songs/n16.mp3",
    urlPoster: "https://20essentials.github.io/queen-latifah-band/assets/n1.avif"
  },
  {
    title: "Nothing Like The Rain",
    artist: "2 Unlimited",
    album: "Eurodance",
    date: "2025-02-04T00:00:00",
    duration: "04:00",
    urlSong: "https://20essentials.github.io/2-unlimited-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/2-unlimited-ost/assets/n1.avif"
  },
  {
    title: "Dreams",
    artist: "2 Brothers on the Fourth Floor",
    album: "Eurodance",
    date: "2025-02-05T00:00:00",
    duration: "04:28",
    urlSong: "https://20essentials.github.io/2-brothers-on-the-fourth-floor/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/2-brothers-on-the-fourth-floor/assets/n1.avif"
  },
  {
    title: "Pray",
    artist: "Dj Bobo",
    album: "Eurodance",
    date: "2025-02-06T00:00:00",
    duration: "04:22",
    urlSong: "https://20essentials.github.io/dj-bobo/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/dj-bobo/assets/n2.avif"
  },
  {
    title: "Where is your Love",
    artist: "Emel Aykanat",
    album: "Eurodance",
    date: "2025-02-07T00:00:00",
    duration: "03:46",
    urlSong: "https://20essentials.github.io/dj-bobo/songs/n18.mp3",
    urlPoster: "https://20essentials.github.io/queen-latifah-band/assets/n2.avif"
  },
  {
    title: "No limit",
    artist: "2 Unlimited",
    album: "Eurodance",
    date: "2025-02-08T00:00:00",
    duration: "03:45",
    urlSong: "https://20essentials.github.io/2-unlimited-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/2-unlimited-ost/assets/n2.avif"
  },
  {
    title: "Don't Stop The Music",
    artist: "2 Raff",
    album: "Eurodance",
    date: "2025-02-09T00:00:00",
    duration: "3:20",
    urlSong: "https://20essentials.github.io/2-raff-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/2-raff-ost/assets/n1.avif"
  },
  {
    title: "Everybody needs Somebody",
    artist: "Masterboy",
    album: "Eurodance",
    date: "2025-02-10T00:00:00",
    duration: "04:06",
    urlSong: "https://20essentials.github.io/masterboy-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/masterboy-soundtrack/assets/n2.avif"
  },
  {
    title: "Love is All Around",
    artist: "Dj Bobo",
    album: "Eurodance",
    date: "2025-02-11T00:00:00",
    duration: "4:29",
    urlSong: "https://20essentials.github.io/dj-bobo/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/dj-bobo/assets/n4.avif"
  },
  {
    title: "Celebrate",
    artist: "Emel Aykanat",
    album: "Eurodance",
    date: "2025-02-12T00:00:00",
    duration: "05:25",
    urlSong: "https://20essentials.github.io/dj-bobo/songs/n13.mp3",
    urlPoster: "https://20essentials.github.io/queen-latifah-band/assets/n3.avif"
  },
  {
    title: "Twilight Zone",
    artist: "2 Unlimited",
    album: "Eurodance",
    date: "2025-02-13T00:00:00",
    duration: "04:06",
    urlSong: "https://20essentials.github.io/2-unlimited-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/2-unlimited-ost/assets/n3.avif"
  },
  {
    title: "Stay",
    artist: "2 Raff",
    album: "Eurodance",
    date: "2025-02-14T00:00:00",
    duration: "03:51",
    urlSong: "https://20essentials.github.io/2-raff-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/2-raff-ost/assets/n3.avif"
  },
  {
    title: "Never Alone",
    artist: "2 Brothers on the Fourth Floor",
    album: "Eurodance",
    date: "2025-02-15T00:00:00",
    duration: "04:10",
    urlSong: "https://20essentials.github.io/2-brothers-on-the-fourth-floor/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/2-brothers-on-the-fourth-floor/assets/n2.avif"
  },
  {
    title: "Freedom",
    artist: "Dj Bobo",
    album: "Eurodance",
    date: "2025-02-16T00:00:00",
    duration: "04:15",
    urlSong: "https://20essentials.github.io/dj-bobo/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/dj-bobo/assets/n2.avif"
  },
  {
    title: "Together",
    artist: "Emel Aykanat",
    album: "Eurodance",
    date: "2025-02-17T00:00:00",
    duration: "04:35",
    urlSong: "https://20essentials.github.io/dj-bobo/songs/n17.mp3",
    urlPoster: "https://20essentials.github.io/queen-latifah-band/assets/n4.avif"
  },
  {
    title: "Let the Dream Come True",
    artist: "Dj Bobo",
    album: "Eurodance",
    date: "2025-02-18T00:00:00",
    duration: "04:22",
    urlSong: "https://20essentials.github.io/dj-bobo/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/dj-bobo/assets/n1.avif"
  },
  {
    title: "I Got to Give It Up",
    artist: "Masterboy",
    album: "Eurodance",
    date: "2025-02-19T00:00:00",
    duration: "03:59",
    urlSong: "https://20essentials.github.io/masterboy-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/masterboy-soundtrack/assets/n3.avif"
  },
  {
    title: "Music is My Life",
    artist: "Emel Aykanat",
    album: "Eurodance",
    date: "2025-02-20T00:00:00",
    duration: "04:14",
    urlSong: "https://20essentials.github.io/dj-bobo/songs/n19.mp3",
    urlPoster: "https://20essentials.github.io/clint-mansell/assets/n1.avif"
  }
];
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eurodance
}, Symbol.toStringTag, { value: "Module" }));
const filmsost = [
  {
    title: "No Time For Caution",
    artist: "Hans Zimmer",
    album: "Films OST",
    date: "2028-01-01T00:00:00",
    duration: "04:00",
    urlSong: "https://20essentials.github.io/hans-zimmer-ost/songs/n17.mp3",
    urlPoster: "https://20essentials.github.io/hans-zimmer-ost/assets/n1.avif"
  },
  {
    title: "Superman Main Theme",
    artist: "John Williams",
    album: "Films OST",
    date: "2028-01-02T00:00:00",
    duration: "04:25",
    urlSong: "https://20essentials.github.io/john-williams-ost/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/john-williams-ost/assets/n1.avif"
  },
  {
    title: "He's A Pirate",
    artist: "Hans Zimmer",
    album: "Films OST",
    date: "2028-01-03T00:00:00",
    duration: "01:30",
    urlSong: "https://20essentials.github.io/hans-zimmer-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/hans-zimmer-ost/assets/n2.avif"
  },
  {
    title: "E.T The Extraterrestrial Theme",
    artist: "John Williams",
    album: "Films OST",
    date: "2028-01-04T00:00:00",
    duration: "03:24",
    urlSong: "https://20essentials.github.io/john-williams-ost/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/john-williams-ost/assets/n2.avif"
  },
  {
    title: "Dark Fantasy",
    artist: "The Hangover",
    album: "Films OST",
    date: "2028-01-05T00:00:00",
    duration: "04:40",
    urlSong: "https://20essentials.github.io/kanye-west/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/kanye-west/assets/n1.avif"
  },
  {
    title: "The Dark Knight Theme",
    artist: "Hans Zimmer",
    album: "Films OST",
    date: "2028-01-06T00:00:00",
    duration: "07:42",
    urlSong: "https://20essentials.github.io/hans-zimmer-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/hans-zimmer-ost/assets/n3.avif"
  },
  {
    title: "Jurassic Park Theme",
    artist: "John Williams",
    album: "Films OST",
    date: "2028-01-07T00:00:00",
    duration: "05:20",
    urlSong: "https://20essentials.github.io/john-williams-ost/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/john-williams-ost/assets/n3.avif"
  },
  {
    title: "Clubbed To Death",
    artist: "Matrix",
    album: "Films OST",
    date: "2028-01-08T00:00:00",
    duration: "07:35",
    urlSong: "https://20essentials.github.io/matrix-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/matrix-soundtrack/assets/n1.avif"
  },
  {
    title: "Home Alone",
    artist: "John Williams",
    album: "Films OST",
    date: "2028-01-09T00:00:00",
    duration: "04:52",
    urlSong: "https://20essentials.github.io/john-williams-ost/songs/n20.mp3",
    urlPoster: "https://20essentials.github.io/john-williams-ost/assets/n4.avif"
  },
  {
    title: "Theme",
    artist: "The Amazing Spiderman",
    album: "Films OST",
    date: "2028-01-10T00:00:00",
    duration: "07:42",
    urlSong: "https://20essentials.github.io/the-amazing-spiderman/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/the-amazing-spiderman/assets/n1.avif"
  },
  {
    title: "The Battle",
    artist: "Hans Zimmer",
    album: "Films OST",
    date: "2028-01-11T00:00:00",
    duration: "09:59",
    urlSong: "https://20essentials.github.io/hans-zimmer-ost/songs/n19.mp3",
    urlPoster: "https://20essentials.github.io/hans-zimmer-ost/assets/n4.avif"
  },
  {
    title: "Cantina",
    artist: "John Williams",
    album: "Films OST",
    date: "2028-01-12T00:00:00",
    duration: "02:47",
    urlSong: "https://20essentials.github.io/john-williams-ost/songs/n12.mp3",
    urlPoster: "https://20essentials.github.io/xtc-band/assets/n1.avif"
  },
  {
    title: "Over Under Sideways Down",
    artist: "Yardbirds",
    album: "Films OST",
    date: "2028-01-13T00:00:00",
    duration: "02:31",
    urlSong: "https://20essentials.github.io/yardbirds-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/yardbirds-band/assets/n2.avif"
  },
  {
    title: "This Is Berk",
    artist: "How To Train Your Dragon",
    album: "Films OST",
    date: "2028-01-14T00:00:00",
    duration: "04:10",
    urlSong: "https://20essentials.github.io/how-to-train-your-dragon-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/how-to-train-your-dragon-soundtrack/assets/n3.avif"
  },
  {
    title: "The Raiders March",
    artist: "John Williams",
    album: "Films OST",
    date: "2028-01-15T00:00:00",
    duration: "02:25",
    urlSong: "https://20essentials.github.io/john-williams-ost/songs/n15.mp3",
    urlPoster: "https://20essentials.github.io/xtc-band/assets/n2.avif"
  },
  {
    title: "Against Time",
    artist: "Ben 10",
    album: "Films OST",
    date: "2028-01-16T00:00:00",
    duration: "01:06",
    urlSong: "https://20essentials.github.io/ben-10-album/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/ben-10-album/assets/n2.avif"
  },
  {
    title: "There He Is",
    artist: "The Amazing Spiderman",
    album: "Films OST",
    date: "2028-01-17T00:00:00",
    duration: "02:54",
    urlSong: "https://20essentials.github.io/the-amazing-spiderman/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/the-amazing-spiderman/assets/n2.avif"
  },
  {
    title: "Elysium",
    artist: "Hans Zimmer",
    album: "Films OST",
    date: "2028-01-18T00:00:00",
    duration: "02:41",
    urlSong: "https://20essentials.github.io/hans-zimmer-ost/songs/n20.mp3",
    urlPoster: "https://20essentials.github.io/flora-cash/assets/n4.avif"
  },
  {
    title: "I'm So Sorry",
    artist: "John Williams",
    album: "Films OST",
    date: "2028-01-19T00:00:00",
    duration: "05:07",
    urlSong: "https://20essentials.github.io/john-williams-ost/songs/n16.mp3",
    urlPoster: "https://20essentials.github.io/xtc-band/assets/n4.avif"
  },
  {
    title: "Battle Of The Green Death",
    artist: "How To Train Your Dragon",
    album: "Films OST",
    date: "2028-01-20T00:00:00",
    duration: "06:18",
    urlSong: "https://20essentials.github.io/how-to-train-your-dragon-soundtrack/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/how-to-train-your-dragon-soundtrack/assets/n4.avif"
  }
];
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: filmsost
}, Symbol.toStringTag, { value: "Module" }));
const funk = [
  {
    title: "Get Lucky",
    artist: "Daft Punk",
    album: "Funk",
    date: "2025-08-01T00:00:00",
    duration: "04:08",
    urlSong: "https://20essentials.github.io/daft-punk-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/daft-punk-band/assets/n1.avif"
  },
  {
    title: "Far Away",
    artist: "Different Heaven",
    album: "Funk",
    date: "2025-08-02T00:00:00",
    duration: "03:09",
    urlSong: "https://20essentials.github.io/different-heaven-album/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/different-heaven-album/assets/n1.avif"
  },
  {
    title: "Life in Technicolor",
    artist: "Coldplay",
    album: "Funk",
    date: "2025-08-03T00:00:00",
    duration: "04:14",
    urlSong: "https://20essentials.github.io/coldplay/songs/n16.mp3",
    urlPoster: "https://20essentials.github.io/coldplay/assets/n1.avif"
  },
  {
    title: "Around The World",
    artist: "Daft Punk",
    album: "Funk",
    date: "2025-08-04T00:00:00",
    duration: "07:09",
    urlSong: "https://20essentials.github.io/daft-punk-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/daft-punk-band/assets/n2.avif"
  },
  {
    title: "When is The Future?",
    artist: "Vnv Nation",
    album: "Funk",
    date: "2025-08-05T00:00:00",
    duration: "05:14",
    urlSong: "https://20essentials.github.io/vnv-nation-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/vnv-nation-ost/assets/n1.avif"
  },
  {
    title: "Keep on Dancing",
    artist: "Dj Bobo",
    album: "Funk",
    date: "2025-08-06T00:00:00",
    duration: "03:34",
    urlSong: "https://20essentials.github.io/dj-bobo/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/dj-bobo/assets/n1.avif"
  },
  {
    title: "3 Nights",
    artist: "Dominic Fike",
    album: "Funk",
    date: "2025-08-07T00:00:00",
    duration: "04:19",
    urlSong: "https://20essentials.github.io/dominic-fike-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/dominic-fike-ost/assets/n1.avif"
  },
  {
    title: "Lose Yourself To Dance",
    artist: "Daft Punk",
    album: "Funk",
    date: "2025-08-08T00:00:00",
    duration: "05:53",
    urlSong: "https://20essentials.github.io/daft-punk-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/daft-punk-band/assets/n3.avif"
  },
  {
    title: "You Spin Me Round",
    artist: "Dead or Alive",
    album: "Funk",
    date: "2025-08-09T00:00:00",
    duration: "03:16",
    urlSong: "https://20essentials.github.io/dead-or-alive-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/dead-or-alive-band/assets/n1.avif"
  },
  {
    title: "Ya Mama",
    artist: "Fatboy Slim",
    album: "Funk",
    date: "2025-08-10T00:00:00",
    duration: "05:40",
    urlSong: "https://20essentials.github.io/fatboy-slim/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/fatboy-slim/assets/n1.avif"
  },
  {
    title: "Over and Over",
    artist: "Hot Chip",
    album: "Funk",
    date: "2025-08-11T00:00:00",
    duration: "03:54",
    urlSong: "https://20essentials.github.io/hot-chip-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/hot-chip-ost/assets/n1.avif"
  },
  {
    title: "Instant Crush",
    artist: "Daft Punk",
    album: "Funk",
    date: "2025-08-12T00:00:00",
    duration: "05:37",
    urlSong: "https://20essentials.github.io/daft-punk-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/daft-punk-band/assets/n4.avif"
  },
  {
    title: "Island",
    artist: "Hilary Cousins",
    album: "Funk",
    date: "2025-08-13T00:00:00",
    duration: "04:25",
    urlSong: "https://20essentials.github.io/hilary-cousins/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/hilary-cousins/assets/n1.avif"
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    album: "Funk",
    date: "2025-08-14T00:00:00",
    duration: "03:24",
    urlSong: "https://20essentials.github.io/imagine--dragons/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/imagine--dragons/assets/n1.avif"
  },
  {
    title: "A-Punk",
    artist: "Vampire Weekend",
    album: "Funk",
    date: "2025-08-15T00:00:00",
    duration: "02:20",
    urlSong: "https://20essentials.github.io/vampire-weekend-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/vampire-weekend-ost/assets/n1.avif"
  },
  {
    title: "Lover Come To Back",
    artist: "Dead or Alive",
    album: "Funk",
    date: "2025-08-16T00:00:00",
    duration: "03:12",
    urlSong: "https://20essentials.github.io/dead-or-alive-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/dead-or-alive-band/assets/n2.avif"
  },
  {
    title: "Runaway",
    artist: "Kanye West",
    album: "Funk",
    date: "2025-08-17T00:00:00",
    duration: "09:07",
    urlSong: "https://20essentials.github.io/kanye-west/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/kanye-west/assets/n1.avif"
  },
  {
    title: "California Gurls",
    artist: "Katy Perry",
    album: "Funk",
    date: "2025-08-18T00:00:00",
    duration: "03:53",
    urlSong: "https://20essentials.github.io/katy-perry-ost/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/katy-perry-ost/assets/n1.avif"
  },
  {
    title: "Holiday",
    artist: "Vampire Weekend",
    album: "Funk",
    date: "2025-08-19T00:00:00",
    duration: "02:19",
    urlSong: "https://20essentials.github.io/vampire-weekend-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/vampire-weekend-ost/assets/n2.avif"
  },
  {
    title: "Need You Now",
    artist: "Hot Chip",
    album: "Funk",
    date: "2025-08-20T00:00:00",
    duration: "04:53",
    urlSong: "https://20essentials.github.io/hot-chip/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/hot-chip/assets/n2.avif"
  }
];
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: funk
}, Symbol.toStringTag, { value: "Module" }));
const garage = [
  {
    title: "Time To Prend",
    artist: "MGMT",
    album: "Garage",
    date: "2026-04-01T00:00:00",
    duration: "04:23",
    urlSong: "https://20essentials.github.io/mgmt-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/mgmt-band/assets/n1.avif"
  },
  {
    title: "On Top Of The World",
    artist: "Imagine Dragons",
    album: "Garage",
    date: "2026-04-02T00:00:00",
    duration: "03:24",
    urlSong: "https://20essentials.github.io/imagine--dragons/songs/n17.mp3",
    urlPoster: "https://20essentials.github.io/imagine--dragons/assets/n1.avif"
  },
  {
    title: "Hello",
    artist: "Jutty Ranx",
    album: "Garage",
    date: "2026-04-03T00:00:00",
    duration: "03:25",
    urlSong: "https://20essentials.github.io/jutty-ranx/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/jutty-ranx/assets/n1.avif"
  },
  {
    title: "I Kissed a Girl",
    artist: "Katy Perry",
    album: "Garage",
    date: "2026-04-04T00:00:00",
    duration: "03:01",
    urlSong: "https://20essentials.github.io/katy-perry-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/katy-perry-ost/assets/n1.avif"
  },
  {
    title: "Where We Started",
    artist: "Lost Sky",
    album: "Garage",
    date: "2026-04-05T00:00:00",
    duration: "03:42",
    urlSong: "https://20essentials.github.io/lost-sky-album/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/lost-sky-album/assets/n1.avif"
  },
  {
    title: "Igual Que Ayer",
    artist: "Los Enanitos Verdes",
    album: "Garage",
    date: "2026-04-06T00:00:00",
    duration: "04:50",
    urlSong: "https://20essentials.github.io/los-enanitos-verdes-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/los-enanitos-verdes-band/assets/n1.avif"
  },
  {
    title: "Material Girl",
    artist: "Madonna",
    album: "Garage",
    date: "2026-04-07T00:00:00",
    duration: "04:04",
    urlSong: "https://20essentials.github.io/madonna-album/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/madonna-album/assets/n1.avif"
  },
  {
    title: "Horizonte de las Estrellas",
    artist: "Miguel Bose",
    album: "Garage",
    date: "2026-04-08T00:00:00",
    duration: "04:10",
    urlSong: "https://20essentials.github.io/miguel-bose-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/miguel-bose-ost/assets/n1.avif"
  },
  {
    title: "Wonderwall",
    artist: "Oasis",
    album: "Garage",
    date: "2026-04-09T00:00:00",
    duration: "04:18",
    urlSong: "https://20essentials.github.io/oasis-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/oasis-ost/assets/n1.avif"
  },
  {
    title: "It's Time",
    artist: "Imagine Dragons",
    album: "Garage",
    date: "2026-04-10T00:00:00",
    duration: "03:53",
    urlSong: "https://20essentials.github.io/imagine--dragons/songs/n18.mp3",
    urlPoster: "https://20essentials.github.io/imagine--dragons/assets/n2.avif"
  },
  {
    title: "Avenida",
    artist: "Avenida Larco",
    album: "Garage",
    date: "2026-04-11T00:00:00",
    duration: "03:47",
    urlSong: "https://20essentials.github.io/avenida-larco/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/avenida-larco/assets/n1.avif"
  },
  {
    title: "Te siento de Solo Pensar",
    artist: "Pedro Suárez-Vértiz",
    album: "Garage",
    date: "2026-04-12T00:00:00",
    duration: "03:22",
    urlSong: "https://20essentials.github.io/pedro-suarez-vertiz-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/pedro-suarez-vertiz-ost/assets/n1.avif"
  },
  {
    title: "Another Brick in The Wall",
    artist: "Pink Floyd",
    album: "Garage",
    date: "2026-04-13T00:00:00",
    duration: "05:20",
    urlSong: "https://20essentials.github.io/pink-floyd-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/pink-floyd-band/assets/n1.avif"
  },
  {
    title: "Lost",
    artist: "Lost Sky",
    album: "Garage",
    date: "2026-04-14T00:00:00",
    duration: "02:37",
    urlSong: "https://20essentials.github.io/lost-sky-album/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/lost-sky-album/assets/n2.avif"
  },
  {
    title: "Love Of My Life",
    artist: "Queen",
    album: "Garage",
    date: "2026-04-15T00:00:00",
    duration: "03:37",
    urlSong: "https://20essentials.github.io/queen-band/songs/n12.mp3",
    urlPoster: "https://20essentials.github.io/queen-band/assets/n1.avif"
  },
  {
    title: "Into The Afternoon",
    artist: "Revel 9",
    album: "Garage",
    date: "2026-04-16T00:00:00",
    duration: "03:22",
    urlSong: "https://20essentials.github.io/revel-9/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/revel-9/assets/n1.avif"
  },
  {
    title: "We Found Love",
    artist: "Rihanna",
    album: "Garage",
    date: "2026-04-17T00:00:00",
    duration: "03:34",
    urlSong: "https://20essentials.github.io/rihanna-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/rihanna-ost/assets/n1.avif"
  },
  {
    title: "Daddy Issues",
    artist: "The Neighbourhood",
    album: "Garage",
    date: "2026-04-18T00:00:00",
    duration: "04:13",
    urlSong: "https://20essentials.github.io/the-neighbourhood-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/the-neighbourhood-ost/assets/n1.avif"
  },
  {
    title: "The Working Hour",
    artist: "Tears For Fears",
    album: "Garage",
    date: "2026-04-19T00:00:00",
    duration: "06:30",
    urlSong: "https://20essentials.github.io/tears-for-fears-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/tears-for-fears-band/assets/n1.avif"
  },
  {
    title: "Warriors",
    artist: "Imagine Dragons",
    album: "Garage",
    date: "2026-04-20T00:00:00",
    duration: "02:50",
    urlSong: "https://20essentials.github.io/imagine--dragons/songs/n19.mp3",
    urlPoster: "https://20essentials.github.io/imagine--dragons/assets/n3.avif"
  }
];
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: garage
}, Symbol.toStringTag, { value: "Module" }));
const guitar = [
  {
    title: "Alive",
    artist: "Pearl Jam",
    album: "Guitar",
    date: "2027-05-01T00:00:00",
    duration: "05:41",
    urlSong: "https://20essentials.github.io/pearl-jam-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/pearl-jam-ost/assets/n4.avif"
  },
  {
    title: "Judas",
    artist: "Lady Gaga",
    album: "Guitar",
    date: "2027-05-02T00:00:00",
    duration: "04:09",
    urlSong: "https://20essentials.github.io/lady-gaga-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/lady-gaga-ost/assets/n1.avif"
  },
  {
    title: "Confortably Numb",
    artist: "Pink Floyd",
    album: "Guitar",
    date: "2027-05-03T00:00:00",
    duration: "09:02",
    urlSong: "https://20essentials.github.io/pink-floyd-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/pink-floyd-band/assets/n4.avif"
  },
  {
    title: "Fall Back Down",
    artist: "Rancid",
    album: "Guitar",
    date: "2027-05-04T00:00:00",
    duration: "03:43",
    urlSong: "https://20essentials.github.io/rancid-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/rancid-ost/assets/n1.avif"
  },
  {
    title: "Woking Man",
    artist: "Rush",
    album: "Guitar",
    date: "2027-05-05T00:00:00",
    duration: "07:10",
    urlSong: "https://20essentials.github.io/rush-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/rush-ost/assets/n1.avif"
  },
  {
    title: "Stand By Me",
    artist: "Oasis",
    album: "Guitar",
    date: "2027-05-06T00:00:00",
    duration: "05:58",
    urlSong: "https://20essentials.github.io/oasis-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/oasis-ost/assets/n1.avif"
  },
  {
    title: "Undercover Martyn",
    artist: "Two Door Cinema Club",
    album: "Guitar",
    date: "2027-05-07T00:00:00",
    duration: "02:48",
    urlSong: "https://20essentials.github.io/two-door-cinema-club-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/two-door-cinema-club-band/assets/n1.avif"
  },
  {
    title: "Jimmy Olsen's Blues",
    artist: "Spin Doctors",
    album: "Guitar",
    date: "2027-05-08T00:00:00",
    duration: "04:24",
    urlSong: "https://20essentials.github.io/spin-doctors-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/spin-doctors-ost/assets/n1.avif"
  },
  {
    title: "Y Es Que Sucede Así",
    artist: "Pedro Suárez-Vértiz",
    album: "Guitar",
    date: "2027-05-09T00:00:00",
    duration: "03:38",
    urlSong: "https://20essentials.github.io/pedro-suarez-vertiz-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/pedro-suarez-vertiz-ost/assets/n3.avif"
  },
  {
    title: "Mayor Of Simpleton",
    artist: "XTC",
    album: "Guitar",
    date: "2027-05-10T00:00:00",
    duration: "03:58",
    urlSong: "https://20essentials.github.io/xtc-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/xtc-band/assets/n4.avif"
  },
  {
    title: "Heart Full Of Soul",
    artist: "The Yardbirds",
    album: "Guitar",
    date: "2027-05-11T00:00:00",
    duration: "02:29",
    urlSong: "https://20essentials.github.io/yardbirds-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/yardbirds-band/assets/n1.avif"
  },
  {
    title: "N.I.B.",
    artist: "Black Sabbath",
    album: "Guitar",
    date: "2027-05-12T00:00:00",
    duration: "06:06",
    urlSong: "https://20essentials.github.io/black-sabbath-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/black-sabbath-band/assets/n1.avif"
  },
  {
    title: "Blackwater",
    artist: "Opeth",
    album: "Guitar",
    date: "2027-05-13T00:00:00",
    duration: "12:09",
    urlSong: "https://20essentials.github.io/opeth-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/opeth-album/assets/n1.avif"
  },
  {
    title: "I Luv The Valley Oh",
    artist: "Xiu Xiu",
    album: "Guitar",
    date: "2027-05-14T00:00:00",
    duration: "03:00",
    urlSong: "https://20essentials.github.io/xiu-xiu-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/xiu-xiu-band/assets/n1.avif"
  },
  {
    title: "The 11th",
    artist: "Rancid",
    album: "Guitar",
    date: "2027-05-15T00:00:00",
    duration: "02:28",
    urlSong: "https://20essentials.github.io/rancid-ost/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/rancid-ost/assets/n2.avif"
  },
  {
    title: "Another Rainy Night",
    artist: "Queensrÿche",
    album: "Guitar",
    date: "2027-05-16T00:00:00",
    duration: "04:27",
    urlSong: "https://20essentials.github.io/queensryche-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/queensryche-band/assets/n1.avif"
  },
  {
    title: "Common Blue",
    artist: "Warpaint",
    album: "Guitar",
    date: "2027-05-17T00:00:00",
    duration: "03:55",
    urlSong: "https://20essentials.github.io/warpaint-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/warpaint-band/assets/n3.avif"
  },
  {
    title: "Anthem",
    artist: "Rush",
    album: "Guitar",
    date: "2027-05-18T00:00:00",
    duration: "04:21",
    urlSong: "https://20essentials.github.io/rush-ost/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/rush-ost/assets/n2.avif"
  },
  {
    title: "Journey To End Of East Bay",
    artist: "Rancid",
    album: "Guitar",
    date: "2027-05-19T00:00:00",
    duration: "03:11",
    urlSong: "https://20essentials.github.io/rancid-ost/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/rancid-ost/assets/n3.avif"
  },
  {
    title: "Bleak",
    artist: "Opeth",
    album: "Guitar",
    date: "2027-05-20T00:00:00",
    duration: "09:16",
    urlSong: "https://20essentials.github.io/opeth-album/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/opeth-album/assets/n2.avif"
  }
];
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: guitar
}, Symbol.toStringTag, { value: "Module" }));
const hauntology = [
  {
    title: "Maps",
    artist: "Yeah Yeah Yeahs",
    album: "Hauntology",
    date: "2027-12-01T00:00:00",
    duration: "03:24",
    urlSong: "https://20essentials.github.io/yeah-yeah-yeahs-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/yeah-yeah-yeahs-band/assets/n1.avif"
  },
  {
    title: "Fine Theme",
    artist: "Zoids Chaotic Century",
    album: "Hauntology",
    date: "2027-12-02T00:00:00",
    duration: "01:44",
    urlSong: "https://20essentials.github.io/zoids-chaotic-century-ost/songs/n14.mp3",
    urlPoster: "https://20essentials.github.io/zoids-chaotic-century-ost/assets/n2.avif"
  },
  {
    title: "What They Say",
    artist: "Zara Larsson",
    album: "Hauntology",
    date: "2027-12-03T00:00:00",
    duration: "03:39",
    urlSong: "https://20essentials.github.io/zara-larsson-soundtrack/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/zara-larsson-soundtrack/assets/n2.avif"
  },
  {
    title: "Rising",
    artist: "Ahrix",
    album: "Hauntology",
    date: "2027-12-04T00:00:00",
    duration: "03:09",
    urlSong: "https://20essentials.github.io/ahrix-soundtrack/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/ahrix-soundtrack/assets/n1.avif"
  },
  {
    title: "Walk This Way",
    artist: "Aerosmith",
    album: "Hauntology",
    date: "2027-12-05T00:00:00",
    duration: "03:41",
    urlSong: "https://20essentials.github.io/aerosmith-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/aerosmith-band/assets/n2.avif"
  },
  {
    title: "Sunset Blow",
    artist: "Your Favorite Enemies",
    album: "Hauntology",
    date: "2027-12-06T00:00:00",
    duration: "03:47",
    urlSong: "https://20essentials.github.io/your-favorite-enemies-band/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/your-favorite-enemies-band/assets/n2.avif"
  },
  {
    title: "Kiss And Tell",
    artist: "Alexander Rybak",
    album: "Hauntology",
    date: "2027-12-07T00:00:00",
    duration: "03:21",
    urlSong: "https://20essentials.github.io/alexander-rybak/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/alexander-rybak/assets/n3.avif"
  },
  {
    title: "Save Me Now",
    artist: "Billy Idol",
    album: "Hauntology",
    date: "2027-12-08T00:00:00",
    duration: "04:31",
    urlSong: "https://20essentials.github.io/billy-idol-soundtrack/songs/n12.mp3",
    urlPoster: "https://20essentials.github.io/billy-idol-soundtrack/assets/n3.avif"
  },
  {
    title: "Sweet Left",
    artist: "Black Sabbath",
    album: "Hauntology",
    date: "2027-12-09T00:00:00",
    duration: "05:05",
    urlSong: "https://20essentials.github.io/black-sabbath-band/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/black-sabbath-band/assets/n2.avif"
  },
  {
    title: "Swoon",
    artist: "Beach Weather",
    album: "Hauntology",
    date: "2027-12-10T00:00:00",
    duration: "03:42",
    urlSong: "https://20essentials.github.io/beach-weather-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/beach-weather-soundtrack/assets/n1.avif"
  },
  {
    title: "Sunday Girl",
    artist: "Blondie",
    album: "Hauntology",
    date: "2027-12-11T00:00:00",
    duration: "03:11",
    urlSong: "https://20essentials.github.io/blondie-soundtrack/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/blondie-soundtrack/assets/n3.avif"
  },
  {
    title: "Past Lives",
    artist: "Borns",
    album: "Hauntology",
    date: "2027-12-12T00:00:00",
    duration: "04:32",
    urlSong: "https://20essentials.github.io/borns-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/borns-band/assets/n2.avif"
  },
  {
    title: "One More Time",
    artist: "Blink-182",
    album: "Hauntology",
    date: "2027-12-13T00:00:00",
    duration: "03:25",
    urlSong: "https://20essentials.github.io/blink-182-band/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/blink-182-band/assets/n2.avif"
  },
  {
    title: "Run The World",
    artist: "Beyonce",
    album: "Hauntology",
    date: "2027-12-14T00:00:00",
    duration: "04:53",
    urlSong: "https://20essentials.github.io/beyonce-album/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/beyonce-album/assets/n2.avif"
  },
  {
    title: "Better Alone",
    artist: "Benson Boone",
    album: "Hauntology",
    date: "2027-12-15T00:00:00",
    duration: "03:29",
    urlSong: "https://20essentials.github.io/benson-boone-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/benson-boone-band/assets/n2.avif"
  },
  {
    title: "Peace Of Mind",
    artist: "Boston",
    album: "Hauntology",
    date: "2027-12-16T00:00:00",
    duration: "05:01",
    urlSong: "https://20essentials.github.io/boston-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/boston-band/assets/n2.avif"
  },
  {
    title: "Masters Of War",
    artist: "Bob Dylan",
    album: "Hauntology",
    date: "2027-12-17T00:00:00",
    duration: "04:33",
    urlSong: "https://20essentials.github.io/bob-dylan-album/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/bob-dylan-album/assets/n2.avif"
  },
  {
    title: "Just The Way You Are",
    artist: "Bruno Mars",
    album: "Hauntology",
    date: "2027-12-18T00:00:00",
    duration: "03:56",
    urlSong: "https://20essentials.github.io/bruno-mars-album/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/bruno-mars-album/assets/n2.avif"
  },
  {
    title: "Way Back Home",
    artist: "Bag Raiders",
    album: "Hauntology",
    date: "2027-12-19T00:00:00",
    duration: "03:36",
    urlSong: "https://20essentials.github.io/bag-raiders-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/bag-raiders-band/assets/n3.avif"
  },
  {
    title: "Will I Ever",
    artist: "Alice Deejay",
    album: "Hauntology",
    date: "2027-12-20T00:00:00",
    duration: "03:27",
    urlSong: "https://20essentials.github.io/alice-deejay/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/alice-deejay/assets/n2.avif"
  }
];
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hauntology
}, Symbol.toStringTag, { value: "Module" }));
const hyperpop = [
  {
    title: "Tom Sawyer",
    artist: "Rush",
    album: "HyperPop",
    date: "2026-11-01T00:00:00",
    duration: "04:36",
    urlSong: "https://20essentials.github.io/rush-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/rush-ost/assets/n1.avif"
  },
  {
    title: "Feels Like We Only Go Backwards",
    artist: "Tame Impala",
    album: "HyperPop",
    date: "2026-11-02T00:00:00",
    duration: "03:20",
    urlSong: "https://20essentials.github.io/tame-impala-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/tame-impala-ost/assets/n1.avif"
  },
  {
    title: "Love The Way You Lie",
    artist: "Rihanna",
    album: "HyperPop",
    date: "2026-11-03T00:00:00",
    duration: "04:26",
    urlSong: "https://20essentials.github.io/rihanna-ost/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/rihanna-ost/assets/n1.avif"
  },
  {
    title: "All Around The World",
    artist: "Oasis",
    album: "HyperPop",
    date: "2026-11-04T00:00:00",
    duration: "07:02",
    urlSong: "https://20essentials.github.io/oasis-ost/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/oasis-ost/assets/n1.avif"
  },
  {
    title: "Derezzed",
    artist: "Tron",
    album: "HyperPop",
    date: "2026-11-05T00:00:00",
    duration: "04:09",
    urlSong: "https://20essentials.github.io/tron-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/tron-soundtrack/assets/n1.avif"
  },
  {
    title: "Playing",
    artist: "Tony Igy",
    album: "HyperPop",
    date: "2026-11-06T00:00:00",
    duration: "06:13",
    urlSong: "https://20essentials.github.io/tony-igy-soundtrack/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/tony-igy-soundtrack/assets/n1.avif"
  },
  {
    title: "Sail Away",
    artist: "The Rasmus",
    album: "HyperPop",
    date: "2026-11-07T00:00:00",
    duration: "03:48",
    urlSong: "https://20essentials.github.io/the-rasmus-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/the-rasmus-band/assets/n1.avif"
  },
  {
    title: "Apologize",
    artist: "Timbaland",
    album: "HyperPop",
    date: "2026-11-08T00:00:00",
    duration: "03:06",
    urlSong: "https://20essentials.github.io/timbaland-album/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/timbaland-album/assets/n1.avif"
  },
  {
    title: "Left To My Own Devices",
    artist: "Pet Shop Boys",
    album: "HyperPop",
    date: "2026-11-09T00:00:00",
    duration: "04:48",
    urlSong: "https://20essentials.github.io/pet-shop-boys-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/pet-shop-boys-band/assets/n1.avif"
  },
  {
    title: "Hall Of Fame",
    artist: "The Script",
    album: "HyperPop",
    date: "2026-11-10T00:00:00",
    duration: "03:22",
    urlSong: "https://20essentials.github.io/the-script-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/the-script-band/assets/n1.avif"
  },
  {
    title: "Lonely Boy",
    artist: "The Black Keys",
    album: "HyperPop",
    date: "2026-11-11T00:00:00",
    duration: "03:15",
    urlSong: "https://20essentials.github.io/the-black-keys-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/the-black-keys-band/assets/n1.avif"
  },
  {
    title: "Who Is In Your Heart Now?",
    artist: "Studio Killers",
    album: "HyperPop",
    date: "2026-11-12T00:00:00",
    duration: "04:17",
    urlSong: "https://20essentials.github.io/studio-killers-ost/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/studio-killers-ost/assets/n1.avif"
  },
  {
    title: "Little Miss Can't Be Wrong",
    artist: "Spin Doctors",
    album: "HyperPop",
    date: "2026-11-13T00:00:00",
    duration: "03:51",
    urlSong: "https://20essentials.github.io/spin-doctors-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/spin-doctors-ost/assets/n1.avif"
  },
  {
    title: "Feel Me",
    artist: "Selena Gomez",
    album: "HyperPop",
    date: "2026-11-14T00:00:00",
    duration: "03:46",
    urlSong: "https://20essentials.github.io/selena-gomez-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/selena-gomez-ost/assets/n1.avif"
  },
  {
    title: "Inspiration",
    artist: "Unknown Brain",
    album: "HyperPop",
    date: "2026-11-15T00:00:00",
    duration: "03:02",
    urlSong: "https://20essentials.github.io/unknown-brain-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/unknown-brain-soundtrack/assets/n1.avif"
  },
  {
    title: "Heaven Knows",
    artist: "Wiguez And Vizzen",
    album: "HyperPop",
    date: "2026-11-16T00:00:00",
    duration: "02:58",
    urlSong: "https://20essentials.github.io/wiguez-and-vizzen/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/wiguez-and-vizzen/assets/n1.avif"
  },
  {
    title: "Mortals (Elport Remix)",
    artist: "Warriyo",
    album: "HyperPop",
    date: "2026-11-17T00:00:00",
    duration: "03:30",
    urlSong: "https://20essentials.github.io/warriyo-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/warriyo-ost/assets/n1.avif"
  },
  {
    title: "I'm Good",
    artist: "Wafia",
    album: "HyperPop",
    date: "2026-11-18T00:00:00",
    duration: "03:37",
    urlSong: "https://20essentials.github.io/wafia/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/wafia/assets/n1.avif"
  },
  {
    title: "New Songs",
    artist: "Warpaint",
    album: "HyperPop",
    date: "2026-11-19T00:00:00",
    duration: "04:15",
    urlSong: "https://20essentials.github.io/warpaint-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/warpaint-band/assets/n1.avif"
  },
  {
    title: "Flutter",
    artist: "Rude",
    album: "HyperPop",
    date: "2026-11-20T00:00:00",
    duration: "04:15",
    urlSong: "https://20essentials.github.io/rude-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/rude-ost/assets/n1.avif"
  }
];
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hyperpop
}, Symbol.toStringTag, { value: "Module" }));
const indiepop = [
  {
    title: "I Ain't Worried",
    artist: "One Republic",
    album: "Indie Pop",
    date: "2025-10-01T00:00:00",
    duration: "02:29",
    urlSong: "https://20essentials.github.io/one-republic-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/one-republic-band/assets/n1.avif"
  },
  {
    title: "Blame",
    artist: "Calvin Harris",
    album: "Indie Pop",
    date: "2025-10-02T00:00:00",
    duration: "03:25",
    urlSong: "https://20essentials.github.io/calvin-harris-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/calvin-harris-ost/assets/n1.avif"
  },
  {
    title: "Love Runs Out",
    artist: "One Republic",
    album: "Indie Pop",
    date: "2025-10-03T00:00:00",
    duration: "03:44",
    urlSong: "https://20essentials.github.io/one-republic-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/one-republic-band/assets/n2.avif"
  },
  {
    title: "Jealous",
    artist: "Chromeo",
    album: "Indie Pop",
    date: "2025-10-04T00:00:00",
    duration: "03:49",
    urlSong: "https://20essentials.github.io/chromeo-soundrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/chromeo-soundrack/assets/n1.avif"
  },
  {
    title: "Sultans of Swing",
    artist: "Dire Straits",
    album: "Indie Pop",
    date: "2025-10-05T00:00:00",
    duration: "05:46",
    urlSong: "https://20essentials.github.io/dire-straits-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/dire-straits-ost/assets/n1.avif"
  },
  {
    title: "Titanium",
    artist: "Sia",
    album: "Indie Pop",
    date: "2025-10-06T00:00:00",
    duration: "04:05",
    urlSong: "https://20essentials.github.io/sia/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/sia/assets/n1.avif"
  },
  {
    title: "Voy a pasarmelo muy bien",
    artist: "Hombres G",
    album: "Indie Pop",
    date: "2025-10-07T00:00:00",
    duration: "03:55",
    urlSong: "https://20essentials.github.io/hombres-g/songs/n13.mp3",
    urlPoster: "https://20essentials.github.io/hombres-g/assets/n1.avif"
  },
  {
    title: "This Fire",
    artist: "Franz Ferdinand",
    album: "Indie Pop",
    date: "2025-10-08T00:00:00",
    duration: "03:44",
    urlSong: "https://20essentials.github.io/franz-ferdinand-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/franz-ferdinand-ost/assets/n1.avif"
  },
  {
    title: "Mi Buen Amor",
    artist: "Mon Laferte",
    album: "Indie Pop",
    date: "2025-10-09T00:00:00",
    duration: "03:49",
    urlSong: "https://20essentials.github.io/mon-laferte/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/mon-laferte/assets/n1.avif"
  },
  {
    title: "Home",
    artist: "Vicetone",
    album: "Indie Pop",
    date: "2025-10-10T00:00:00",
    duration: "03:56",
    urlSong: "https://20essentials.github.io/vicetone-band/songs/n16.mp3",
    urlPoster: "https://20essentials.github.io/vicetone-band/assets/n1.avif"
  },
  {
    title: "Forever",
    artist: "Vanze",
    album: "Indie Pop",
    date: "2025-10-11T00:00:00",
    duration: "04:12",
    urlSong: "https://20essentials.github.io/vanze-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/vanze-album/assets/n1.avif"
  },
  {
    title: "Extraordinary Machine",
    artist: "Fiona Apple",
    album: "Indie Pop",
    date: "2025-10-12T00:00:00",
    duration: "03:43",
    urlSong: "https://20essentials.github.io/fiona-apple/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/fiona-apple/assets/n1.avif"
  },
  {
    title: "Demons",
    artist: "Imagine Dragons",
    album: "Indie Pop",
    date: "2025-10-13T00:00:00",
    duration: "02:54",
    urlSong: "https://20essentials.github.io/imagine--dragons/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/imagine--dragons/assets/n1.avif"
  },
  {
    title: "Shine On",
    artist: "Jet",
    album: "Indie Pop",
    date: "2025-10-14T00:00:00",
    duration: "04:42",
    urlSong: "https://20essentials.github.io/jet-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/jet-ost/assets/n1.avif"
  },
  {
    title: "Last Friday Night",
    artist: "Katy Perry",
    album: "Indie Pop",
    date: "2025-10-15T00:00:00",
    duration: "03:50",
    urlSong: "https://20essentials.github.io/katy-perry-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/katy-perry-ost/assets/n1.avif"
  },
  {
    title: "Poker Face",
    artist: "Lady Gaga",
    album: "Indie Pop",
    date: "2025-10-16T00:00:00",
    duration: "03:57",
    urlSong: "https://20essentials.github.io/lady-gaga-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/lady-gaga-ost/assets/n1.avif"
  },
  {
    title: "Marta Tiene un Marcapasos",
    artist: "Hombres G",
    album: "Indie Pop",
    date: "2025-10-17T00:00:00",
    duration: "02:12",
    urlSong: "https://20essentials.github.io/hombres-g/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/hombres-g/assets/n2.avif"
  },
  {
    title: "Mi Mayor Venganza",
    artist: "La India",
    album: "Indie Pop",
    date: "2025-10-18T00:00:00",
    duration: "05:16",
    urlSong: "https://20essentials.github.io/la-india/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/la-india/assets/n1.avif"
  },
  {
    title: "Tu Carcel",
    artist: "Los Enanitos Verdes",
    album: "Indie Pop",
    date: "2025-10-19T00:00:00",
    duration: "03:35",
    urlSong: "https://20essentials.github.io/los-enanitos-verdes-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/los-enanitos-verdes-band/assets/n1.avif"
  },
  {
    title: "Birds",
    artist: "Imagine Dragons",
    album: "Indie Pop",
    date: "2025-10-20T00:00:00",
    duration: "03:42",
    urlSong: "https://20essentials.github.io/imagine--dragons/songs/n16.mp3",
    urlPoster: "https://20essentials.github.io/imagine--dragons/assets/n2.avif"
  }
];
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: indiepop
}, Symbol.toStringTag, { value: "Module" }));
const indierock = [
  {
    title: "Green Grass and High Tides",
    artist: "Outlaws",
    album: "Indie Rock",
    date: "2026-02-01T00:00:00",
    duration: "09:51",
    urlSong: "https://20essentials.github.io/outlaws-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/outlaws-band/assets/n1.avif"
  },
  {
    title: "Personal Jesus",
    artist: "Depeche Mode",
    album: "Indie Rock",
    date: "2026-02-02T00:00:00",
    duration: "03:46",
    urlSong: "https://20essentials.github.io/depeche-mode-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/depeche-mode-band/assets/n1.avif"
  },
  {
    title: "No sé si es Amor",
    artist: "Roxette",
    album: "Indie Rock",
    date: "2026-02-03T00:00:00",
    duration: "04:41",
    urlSong: "https://20essentials.github.io/roxette-in-spanish/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/roxette-in-spanish/assets/n1.avif"
  },
  {
    title: "L'aventurier",
    artist: "Indochine",
    album: "Indie Rock",
    date: "2026-02-04T00:00:00",
    duration: "03:51",
    urlSong: "https://20essentials.github.io/indochine-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/indochine-band/assets/n1.avif"
  },
  {
    title: "Sucker Train Blues",
    artist: "Velvet Revolver",
    album: "Indie Rock",
    date: "2026-02-05T00:00:00",
    duration: "04:27",
    urlSong: "https://20essentials.github.io/velvet-revolver-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/velvet-revolver-band/assets/n1.avif"
  },
  {
    title: "Mojada",
    artist: "Vilma Palma",
    album: "Indie Rock",
    date: "2026-02-06T00:00:00",
    duration: "06:05",
    urlSong: "https://20essentials.github.io/vilma-palma-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/vilma-palma-band/assets/n1.avif"
  },
  {
    title: "Bring It On Back",
    artist: "Jet",
    album: "Indie Rock",
    date: "2026-02-07T00:00:00",
    duration: "04:10",
    urlSong: "https://20essentials.github.io/jet-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/jet-ost/assets/n1.avif"
  },
  {
    title: "Grita",
    artist: "Jarabe de Palo",
    album: "Indie Rock",
    date: "2026-02-08T00:00:00",
    duration: "03:30",
    urlSong: "https://20essentials.github.io/jarabe-de-palo/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/jarabe-de-palo/assets/n1.avif"
  },
  {
    title: "Salombo",
    artist: "Indochine",
    album: "Indie Rock",
    date: "2026-02-09T00:00:00",
    duration: "05:10",
    urlSong: "https://20essentials.github.io/indochine-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/indochine-band/assets/n2.avif"
  },
  {
    title: "Way Down We Go",
    artist: "Kaleo",
    album: "Indie Rock",
    date: "2026-02-10T00:00:00",
    duration: "03:34",
    urlSong: "https://20essentials.github.io/kaleo-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/kaleo-ost/assets/n1.avif"
  },
  {
    title: "Mentira",
    artist: "La Ley",
    album: "Indie Rock",
    date: "2026-02-11T00:00:00",
    duration: "04:39",
    urlSong: "https://20essentials.github.io/la-ley-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/la-ley-band/assets/n1.avif"
  },
  {
    title: "La Muralla Verde",
    artist: "Los Enanitos Verdes",
    album: "Indie Rock",
    date: "2026-02-12T00:00:00",
    duration: "04:26",
    urlSong: "https://20essentials.github.io/los-enanitos-verdes-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/los-enanitos-verdes-band/assets/n1.avif"
  },
  {
    title: "Holiday",
    artist: "Madonna",
    album: "Indie Rock",
    date: "2026-02-13T00:00:00",
    duration: "04:05",
    urlSong: "https://20essentials.github.io/madonna-album/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/madonna-album/assets/n1.avif"
  },
  {
    title: "Policy of Truth",
    artist: "Depeche Mode",
    album: "Indie Rock",
    date: "2026-02-14T00:00:00",
    duration: "04:08",
    urlSong: "https://20essentials.github.io/depeche-mode-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/depeche-mode-band/assets/n2.avif"
  },
  {
    title: "3e Sexe",
    artist: "Indochine",
    album: "Indie Rock",
    date: "2026-02-15T00:00:00",
    duration: "04:02",
    urlSong: "https://20essentials.github.io/indochine-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/indochine-band/assets/n3.avif"
  },
  {
    title: "She Builds Quick Machines",
    artist: "Velvet Revolver",
    album: "Indie Rock",
    date: "2026-02-16T00:00:00",
    duration: "04:05",
    urlSong: "https://20essentials.github.io/velvet-revolver-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/velvet-revolver-band/assets/n2.avif"
  },
  {
    title: "Champagne Supernova",
    artist: "Oasis",
    album: "Indie Rock",
    date: "2026-02-17T00:00:00",
    duration: "07:29",
    urlSong: "https://20essentials.github.io/oasis-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/oasis-ost/assets/n1.avif"
  },
  {
    title: "Cuando Pienses en Volver",
    artist: "Pedro Suárez-Vértiz",
    album: "Indie Rock",
    date: "2026-02-18T00:00:00",
    duration: "04:11",
    urlSong: "https://20essentials.github.io/pedro-suarez-vertiz-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/pedro-suarez-vertiz-ost/assets/n1.avif"
  },
  {
    title: "Live and Let Die",
    artist: "Paul McCartney",
    album: "Indie Rock",
    date: "2026-02-19T00:00:00",
    duration: "03:12",
    urlSong: "https://20essentials.github.io/paul-mccartney-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/paul-mccartney-ost/assets/n1.avif"
  },
  {
    title: "Tes Yeux Noirs",
    artist: "Indochine",
    album: "Indie Rock",
    date: "2026-02-20T00:00:00",
    duration: "04:22",
    urlSong: "https://20essentials.github.io/indochine-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/indochine-band/assets/n4.avif"
  }
];
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: indierock
}, Symbol.toStringTag, { value: "Module" }));
const instrumental = [
  {
    title: "Flying Through The Air",
    artist: "Resident Evil",
    album: "Instrumental",
    date: "2024-12-01T00:00:00",
    duration: "03:48",
    urlSong: "https://20essentials.github.io/resident-evil/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/resident-evil/assets/n1.avif"
  },
  {
    title: "Far Away",
    artist: "Neon Rox",
    album: "Instrumental",
    date: "2024-12-02T00:00:00",
    duration: "04:58",
    urlSong: "https://20essentials.github.io/neon-rox/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/neon-rox/assets/n1.avif"
  },
  {
    title: "Succession Theme",
    artist: "Succession",
    album: "Instrumental",
    date: "2024-12-03T00:00:00",
    duration: "02:25",
    urlSong: "https://20essentials.github.io/succession-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/succession-soundtrack/assets/n1.avif"
  },
  {
    title: "Red Swam",
    artist: "Yoshiki",
    album: "Instrumental",
    date: "2024-12-04T00:00:00",
    duration: "04:20",
    urlSong: "https://20essentials.github.io/red-swam/songs/n13.mp3",
    urlPoster: "https://20essentials.github.io/red-swam/assets/n1.avif"
  },
  {
    title: "Head Fist",
    artist: "Home",
    album: "Instrumental",
    date: "2024-12-05T00:00:00",
    duration: "03:33",
    urlSong: "https://20essentials.github.io/home/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/home/assets/n1.avif"
  },
  {
    title: "Love Me Again",
    artist: "John Newman",
    album: "Instrumental",
    date: "2024-12-06T00:00:00",
    duration: "03:59",
    urlSong: "https://20essentials.github.io/john-newman/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/john-newman/assets/n1.avif"
  },
  {
    title: "Po Find The Truth",
    artist: "Kung Fu Panda",
    album: "Instrumental",
    date: "2024-12-07T00:00:00",
    duration: "05:03",
    urlSong: "https://20essentials.github.io/kung-fu-panda/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/kung-fu-panda/assets/n1.avif"
  },
  {
    title: "Ensamble",
    artist: "Vicetone",
    album: "Instrumental",
    date: "2024-12-08T00:00:00",
    duration: "03:28",
    urlSong: "https://20essentials.github.io/vicetone-ost/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/vicetone-ost/assets/n1.avif"
  },
  {
    title: "The Lion King Theme",
    artist: "Hanz Zimmer",
    album: "Instrumental",
    date: "2024-12-09T00:00:00",
    duration: "03:13",
    urlSong: "https://20essentials.github.io/hans-zimmer-ost/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/hans-zimmer-ost/assets/n1.avif"
  },
  {
    title: "Main Titles",
    artist: "Spiderman",
    album: "Instrumental",
    date: "2024-12-10T00:00:00",
    duration: "03:41",
    urlSong: "https://20essentials.github.io/spider-man-soundtrack/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/spider-man-soundtrack/assets/n3.avif"
  },
  {
    title: "Duel of the Fates",
    artist: "John Williams",
    album: "Instrumental",
    date: "2024-12-11T00:00:00",
    duration: "04:13",
    urlSong: "https://20essentials.github.io/john-williams-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/john-williams-ost/assets/n1.avif"
  },
  {
    title: "Barbarian Horde",
    artist: "Hans Zimmer",
    album: "Instrumental",
    date: "2024-12-12T00:00:00",
    duration: "10:33",
    urlSong: "https://20essentials.github.io/hans-zimmer-ost/songs/n14.mp3",
    urlPoster: "https://20essentials.github.io/hans-zimmer-ost/assets/n2.avif"
  },
  {
    title: "Predazor Awaken",
    artist: "Power Rangers Wild Force",
    album: "Instrumental",
    date: "2024-12-13T00:00:00",
    duration: "04:27",
    urlSong: "https://20essentials.github.io/power-rangers-wild-force-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/power-rangers-wild-force-ost/assets/n1.avif"
  },
  {
    title: "The Grid",
    artist: "Tron",
    album: "Instrumental",
    date: "2024-12-14T00:00:00",
    duration: "06:32",
    urlSong: "https://20essentials.github.io/tron-soundtrack/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/tron-soundtrack/assets/n1.avif"
  },
  {
    title: "Varúd",
    artist: "Sigur Rós",
    album: "Instrumental",
    date: "2024-12-15T00:00:00",
    duration: "06:37",
    urlSong: "https://20essentials.github.io/sigur-ros-os/songs/n12.mp3",
    urlPoster: "https://20essentials.github.io/sigur-ros-os/assets/n1.avif"
  },
  {
    title: "Battle of the Heroes",
    artist: "John Williams",
    album: "Instrumental",
    date: "2024-12-16T00:00:00",
    duration: "03:44",
    urlSong: "https://20essentials.github.io/john-williams-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/john-williams-ost/assets/n2.avif"
  },
  {
    title: "Fall",
    artist: "Tron",
    album: "Instrumental",
    date: "2024-12-17T00:00:00",
    duration: "04:09",
    urlSong: "https://20essentials.github.io/tron-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/tron-soundtrack/assets/n1.avif"
  },
  {
    title: "Xtal",
    artist: "Alphex Twin",
    album: "Instrumental",
    date: "2024-12-18T00:00:00",
    duration: "04:53",
    urlSong: "https://20essentials.github.io/alphex-twin-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/alphex-twin-ost/assets/n1.avif"
  },
  {
    title: "Innocence",
    artist: "Adieu Aru",
    album: "Instrumental",
    date: "2024-12-19T00:00:00",
    duration: "03:39",
    urlSong: "https://20essentials.github.io/adieu-aru/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/adieu-aru/assets/n1.avif"
  },
  {
    title: "Anakin's Betrayal",
    artist: "John Williams",
    album: "Instrumental",
    date: "2024-12-20T00:00:00",
    duration: "08:38",
    urlSong: "https://20essentials.github.io/john-williams-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/john-williams-ost/assets/n3.avif"
  }
];
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: instrumental
}, Symbol.toStringTag, { value: "Module" }));
const melodicrock = [
  {
    title: "With or Without You",
    artist: "U2",
    slug: "u2",
    album: "Melodic Rock",
    date: "2024-08-01T00:00:00",
    duration: "04:52",
    urlSong: "https://20essentials.github.io/u2-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/u2-band/assets/n2.avif"
  },
  {
    title: "Cold Hard Bitch",
    artist: "Jet",
    slug: "jet",
    album: "Melodic Rock",
    date: "2024-08-02T00:00:00",
    duration: "04:02",
    urlSong: "https://20essentials.github.io/jet-ost/songs/n14.mp3",
    urlPoster: "https://20essentials.github.io/jet-ost/assets/n2.avif"
  },
  {
    title: "Red Swam - Depressing",
    artist: "LeeandLie",
    slug: "leeandlie",
    album: "Melodic Rock",
    date: "2024-08-03T00:00:00",
    duration: "00:51",
    urlSong: "https://20essentials.github.io/leeandlie-album/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/leeandlie-album/assets/n2.avif"
  },
  {
    title: "Hoy Te Esperaré",
    artist: "Duncan Dhu",
    slug: "duncan-dhu",
    album: "Melodic Rock",
    date: "2024-08-04T00:00:00",
    duration: "03:23",
    urlSong: "https://20essentials.github.io/duncan-dhu-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/duncan-dhu-ost/assets/n1.avif"
  },
  {
    title: "Part Time Lover",
    artist: "Stevie Wonder",
    slug: "stevie-wonder",
    album: "Melodic Rock",
    date: "2024-08-05T00:00:00",
    duration: "04:12",
    urlSong: "https://20essentials.github.io/stevie-wonder/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/stevie-wonder/assets/n1.avif"
  },
  {
    title: "Tren al Sur",
    artist: "Los Prisioneros",
    slug: "los-prisioneros",
    album: "Melodic Rock",
    date: "2024-08-06T00:00:00",
    duration: "05:38",
    urlSong: "https://20essentials.github.io/los-prisioneros-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/los-prisioneros-band/assets/n1.avif"
  },
  {
    title: "Burning Love",
    artist: "Elvis Presley",
    slug: "elvis-presley",
    album: "Melodic Rock",
    date: "2024-08-07T00:00:00",
    duration: "02:57",
    urlSong: "https://20essentials.github.io/elvis-presley/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/elvis-presley/assets/n1.avif"
  },
  {
    title: "My Life",
    artist: "Kaiser Chiefs",
    slug: "kaiser-chiefs",
    album: "Melodic Rock",
    date: "2024-08-08T00:00:00",
    duration: "04:07",
    urlSong: "https://20essentials.github.io/kaiser-chiefs-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/kaiser-chiefs-ost/assets/n1.avif"
  },
  {
    title: "The Beach",
    artist: "The Neighbourhood",
    slug: "neighbourhood",
    album: "English Pop",
    date: "2024-08-09T00:00:00",
    duration: "04:16",
    urlSong: "https://20essentials.github.io/the-neighbourhood-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/the-neighbourhood-ost/assets/n2.avif"
  },
  {
    title: "Aliya",
    artist: "Revel 9",
    slug: "revel-9",
    album: "Melodic Rock",
    date: "2024-08-10T00:00:00",
    duration: "03:20",
    urlSong: "https://20essentials.github.io/revel-9/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/revel-9/assets/n1.avif"
  },
  {
    title: "Vindicated",
    artist: "Spider-Man",
    slug: "spider-man",
    album: "Melodic Rock",
    date: "2024-08-11T00:00:00",
    duration: "03:19",
    urlSong: "https://20essentials.github.io/spider-man-soundtrack/songs/n15.mp3",
    urlPoster: "https://20essentials.github.io/spider-man-soundtrack/assets/n1.avif"
  },
  {
    title: "Love Exists",
    artist: "Evanescence",
    slug: "evanescence",
    album: "Melodic Rock",
    date: "2024-08-12T00:00:00",
    duration: "03:31",
    urlSong: "https://20essentials.github.io/evanescence/songs/n16.mp3",
    urlPoster: "https://20essentials.github.io/evanescence/assets/n1.avif"
  },
  {
    title: "Pure Feeling",
    artist: "Florence + The Machine",
    slug: "florence",
    album: "Melodic Rock",
    date: "2024-08-13T00:00:00",
    duration: "04:06",
    urlSong: "https://20essentials.github.io/florence-more-machine/songs/n14.mp3",
    urlPoster: "https://20essentials.github.io/florence-more-machine/assets/n1.avif"
  },
  {
    title: "Remember",
    artist: "DLS 2016",
    slug: "dls-2016",
    album: "Melodic Rock",
    date: "2024-08-14T00:00:00",
    duration: "03:24",
    urlSong: "https://20essentials.github.io/dls-2016/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/dls-2016/assets/n1.avif"
  },
  {
    title: "Hysteria",
    artist: "Muse",
    slug: "muse",
    album: "Melodic Rock",
    date: "2024-08-15T00:00:00",
    duration: "03:46",
    urlSong: "https://20essentials.github.io/muse-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/muse-ost/assets/n1.avif"
  },
  {
    title: "True Faith",
    artist: "New Order",
    slug: "new-order",
    album: "Melodic Rock",
    date: "2024-08-16T00:00:00",
    duration: "05:55",
    urlSong: "https://20essentials.github.io/new-order-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/new-order-ost/assets/n1.avif"
  },
  {
    title: "Ride",
    artist: "Twenty One Pilots",
    slug: "twenty-one-pilots",
    album: "Melodic Rock",
    date: "2024-08-17T00:00:00",
    duration: "03:45",
    urlSong: "https://20essentials.github.io/twenty-one-pilots-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/twenty-one-pilots-ost/assets/n1.avif"
  },
  {
    title: "Uprising",
    artist: "Muse",
    slug: "muse",
    album: "Melodic Rock",
    date: "2024-08-18T00:00:00",
    duration: "05:04",
    urlSong: "https://20essentials.github.io/muse-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/muse-ost/assets/n2.avif"
  },
  {
    title: "Stressed Out",
    artist: "Twenty One Pilots",
    slug: "twenty-one-pilots",
    album: "Melodic Rock",
    date: "2024-08-19T00:00:00",
    duration: "03:30",
    urlSong: "https://20essentials.github.io/twenty-one-pilots-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/twenty-one-pilots-ost/assets/n2.avif"
  },
  {
    title: "Resistance",
    artist: "Muse",
    slug: "muse",
    album: "Melodic Rock",
    date: "2024-08-20T00:00:00",
    duration: "05:46",
    urlSong: "https://20essentials.github.io/muse-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/muse-ost/assets/n3.avif"
  }
];
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: melodicrock
}, Symbol.toStringTag, { value: "Module" }));
const ncs = [
  {
    title: "Get Up Again",
    artist: "Axol",
    album: "NCS",
    date: "2025-09-01T00:00:00",
    duration: "03:47",
    urlSong: "https://20essentials.github.io/axol-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/axol-soundtrack/assets/n1.avif"
  },
  {
    title: "Survive",
    artist: "Vanze",
    album: "NCS",
    date: "2025-09-02T00:00:00",
    duration: "04:32",
    urlSong: "https://20essentials.github.io/vanze-album/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/vanze-album/assets/n1.avif"
  },
  {
    title: "On & On",
    artist: "Cartoon",
    album: "NCS",
    date: "2025-09-03T00:00:00",
    duration: "03:27",
    urlSong: "https://20essentials.github.io/cartoon-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/cartoon-soundtrack/assets/n1.avif"
  },
  {
    title: "Can't Wait",
    artist: "Jim Yosef",
    album: "NCS",
    date: "2025-09-04T00:00:00",
    duration: "03:27",
    urlSong: "https://20essentials.github.io/jim-yosef-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/jim-yosef-ost/assets/n1.avif"
  },
  {
    title: "Awake",
    artist: "Defqwop",
    album: "NCS",
    date: "2025-09-05T00:00:00",
    duration: "03:38",
    urlSong: "https://20essentials.github.io/defqwop-album/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/defqwop-album/assets/n1.avif"
  },
  {
    title: "I Need an Angel",
    artist: "Vanze",
    album: "NCS",
    date: "2025-09-06T00:00:00",
    duration: "04:26",
    urlSong: "https://20essentials.github.io/vanze-album/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/vanze-album/assets/n2.avif"
  },
  {
    title: "Solo",
    artist: "Prismo",
    album: "NCS",
    date: "2025-09-07T00:00:00",
    duration: "03:03",
    urlSong: "https://20essentials.github.io/prismo/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/prismo/assets/n1.avif"
  },
  {
    title: "Crazy",
    artist: "Beauz",
    album: "NCS",
    date: "2025-09-08T00:00:00",
    duration: "03:08",
    urlSong: "https://20essentials.github.io/beauz-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/beauz-ost/assets/n1.avif"
  },
  {
    title: "Blank Vip",
    artist: "Disfigure",
    album: "NCS",
    date: "2025-09-09T00:00:00",
    duration: "04:46",
    urlSong: "https://20essentials.github.io/disfigure-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/disfigure-band/assets/n1.avif"
  },
  {
    title: "It's Different",
    artist: "Different Heaven",
    album: "NCS",
    date: "2025-09-10T00:00:00",
    duration: "04:14",
    urlSong: "https://20essentials.github.io/different-heaven-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/different-heaven-album/assets/n1.avif"
  },
  {
    title: "Savannah",
    artist: "Diviners",
    album: "NCS",
    date: "2025-09-11T00:00:00",
    duration: "03:24",
    urlSong: "https://20essentials.github.io/diviners-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/diviners-band/assets/n1.avif"
  },
  {
    title: "Here Come To Tonight",
    artist: "Dj Snake",
    album: "NCS",
    date: "2025-09-12T00:00:00",
    duration: "04:46",
    urlSong: "https://20essentials.github.io/dj-snake-album/songs/n12.mp3",
    urlPoster: "https://20essentials.github.io/dj-snake-album/assets/n1.avif"
  },
  {
    title: "Heart Fire",
    artist: "Defqwop",
    album: "NCS",
    date: "2025-09-13T00:00:00",
    duration: "03:59",
    urlSong: "https://20essentials.github.io/defqwop-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/defqwop-album/assets/n1.avif"
  },
  {
    title: "Breathe",
    artist: "Glude",
    album: "NCS",
    date: "2025-09-14T00:00:00",
    duration: "03:24",
    urlSong: "https://20essentials.github.io/glude-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/glude-ost/assets/n1.avif"
  },
  {
    title: "Nevada",
    artist: "Vicetone",
    album: "NCS",
    date: "2025-09-15T00:00:00",
    duration: "03:28",
    urlSong: "https://20essentials.github.io/vicetone-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/vicetone-band/assets/n1.avif"
  },
  {
    title: "Adventure",
    artist: "JJD",
    album: "NCS",
    date: "2025-09-16T00:00:00",
    duration: "04:58",
    urlSong: "https://20essentials.github.io/jjd/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/jjd/assets/n1.avif"
  },
  {
    title: "Identity",
    artist: "Glude",
    album: "NCS",
    date: "2025-09-17T00:00:00",
    duration: "03:21",
    urlSong: "https://20essentials.github.io/glude-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/glude-ost/assets/n2.avif"
  },
  {
    title: "Fearles",
    artist: "Lost Sky",
    album: "NCS",
    date: "2025-09-18T00:00:00",
    duration: "03:14",
    urlSong: "https://20essentials.github.io/lost-sky-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/lost-sky-album/assets/n1.avif"
  },
  {
    title: "Love Me Better",
    artist: "James Blunt",
    album: "NCS",
    date: "2025-09-19T00:00:00",
    duration: "02:53",
    urlSong: "https://20essentials.github.io/manz/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/lost-sky-album/assets/n3.avif"
  },
  {
    title: "Halcyon",
    artist: "JJD",
    album: "NCS",
    date: "2025-09-20T00:00:00",
    duration: "04:50",
    urlSong: "https://20essentials.github.io/jjd/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/jjd/assets/n2.avif"
  }
];
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ncs
}, Symbol.toStringTag, { value: "Module" }));
const newage = [
  {
    title: "Hey You",
    artist: "Pink Floyd",
    album: "New Age",
    date: "2027-01-01T00:00:00",
    duration: "04:39",
    urlSong: "https://20essentials.github.io/pink-floyd-band/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/pink-floyd-band/assets/n1.avif"
  },
  {
    title: "Suburbia",
    artist: "Pet Shop Boys",
    album: "New Age",
    date: "2027-01-02T00:00:00",
    duration: "04:04",
    urlSong: "https://20essentials.github.io/pet-shop-boys-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/pet-shop-boys-band/assets/n1.avif"
  },
  {
    title: "Someone Else",
    artist: "Queensryche",
    album: "New Age",
    date: "2027-01-03T00:00:00",
    duration: "04:39",
    urlSong: "https://20essentials.github.io/queensryche-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/queensryche-band/assets/n1.avif"
  },
  {
    title: "Don't Stop Me Now",
    artist: "Queen",
    album: "New Age",
    date: "2027-01-04T00:00:00",
    duration: "03:42",
    urlSong: "https://20essentials.github.io/queen-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/queen-band/assets/n1.avif"
  },
  {
    title: "Old Friend",
    artist: "Rancid",
    album: "New Age",
    date: "2027-01-05T00:00:00",
    duration: "02:54",
    urlSong: "https://20essentials.github.io/rancid-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/rancid-ost/assets/n1.avif"
  },
  {
    title: "Subdivisions",
    artist: "Rush",
    album: "New Age",
    date: "2027-01-06T00:00:00",
    duration: "05:32",
    urlSong: "https://20essentials.github.io/rush-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/rush-ost/assets/n4.avif"
  },
  {
    title: "Work",
    artist: "Rihanna",
    album: "New Age",
    date: "2027-01-07T00:00:00",
    duration: "03:36",
    urlSong: "https://20essentials.github.io/rihanna-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/rihanna-ost/assets/n1.avif"
  },
  {
    title: "Yhumi",
    artist: "Pantaleó",
    album: "New Age",
    date: "2027-01-08T00:00:00",
    duration: "04:19",
    urlSong: "https://20essentials.github.io/pantaleo/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/pantaleo/assets/n1.avif"
  },
  {
    title: "Breather Deeper",
    artist: "Tame Impala",
    album: "New Age",
    date: "2027-01-09T00:00:00",
    duration: "06:12",
    urlSong: "https://20essentials.github.io/tame-impala-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/tame-impala-ost/assets/n1.avif"
  },
  {
    title: "Arena",
    artist: "Tron",
    album: "New Age",
    date: "2027-01-10T00:00:00",
    duration: "01:33",
    urlSong: "https://20essentials.github.io/tron-soundtrack/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/tron-soundtrack/assets/n1.avif"
  },
  {
    title: "This Is War",
    artist: "Thirty Seconds To Mars",
    album: "New Age",
    date: "2027-01-11T00:00:00",
    duration: "05:29",
    urlSong: "https://20essentials.github.io/thirty-seconds-to-mars-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/thirty-seconds-to-mars-band/assets/n1.avif"
  },
  {
    title: "Pamela",
    artist: "Toto",
    album: "New Age",
    date: "2027-01-12T00:00:00",
    duration: "05:10",
    urlSong: "https://20essentials.github.io/toto-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/toto-band/assets/n1.avif"
  },
  {
    title: "All Men Are Pigs",
    artist: "Studio Killers",
    album: "New Age",
    date: "2027-01-13T00:00:00",
    duration: "03:50",
    urlSong: "https://20essentials.github.io/studio-killers-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/studio-killers-ost/assets/n4.avif"
  },
  {
    title: "Fools Gold",
    artist: "Ship Wrek",
    album: "New Age",
    date: "2027-01-14T00:00:00",
    duration: "03:24",
    urlSong: "https://20essentials.github.io/ship-wrek-soundtrack/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/ship-wrek-soundtrack/assets/n4.avif"
  },
  {
    title: "Burning Pile",
    artist: "Sarah Cothran",
    album: "New Age",
    date: "2027-01-15T00:00:00",
    duration: "02:31",
    urlSong: "https://20essentials.github.io/sarah-cothran/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/sarah-cothran/assets/n1.avif"
  },
  {
    title: "Why Do I?",
    artist: "Unknown Brain",
    album: "New Age",
    date: "2027-01-16T00:00:00",
    duration: "03:43",
    urlSong: "https://20essentials.github.io/unknown-brain-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/unknown-brain-soundtrack/assets/n1.avif"
  },
  {
    title: "Running Wild",
    artist: "Wiguez and Vizzen",
    album: "New Age",
    date: "2027-01-17T00:00:00",
    duration: "03:05",
    urlSong: "https://20essentials.github.io/wiguez-and-vizzen/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/wiguez-and-vizzen/assets/n2.avif"
  },
  {
    title: "Mortals X Mortals",
    artist: "Warriyo",
    album: "New Age",
    date: "2027-01-18T00:00:00",
    duration: "01:17",
    urlSong: "https://20essentials.github.io/warriyo-ost/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/warriyo-ost/assets/n4.avif"
  },
  {
    title: "Only Love",
    artist: "Wafia",
    album: "New Age",
    date: "2027-01-19T00:00:00",
    duration: "02:51",
    urlSong: "https://20essentials.github.io/wafia/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/wafia/assets/n4.avif"
  },
  {
    title: "Senses Working Overtime",
    artist: "Xtc",
    album: "New Age",
    date: "2027-01-20T00:00:00",
    duration: "04:50",
    urlSong: "https://20essentials.github.io/xtc-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/xtc-band/assets/n1.avif"
  }
];
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: newage
}, Symbol.toStringTag, { value: "Module" }));
const phonk = [
  {
    title: "Sleepwalker",
    artist: "Akiaura",
    album: "Phonk",
    date: "2028-04-01T00:00:00",
    duration: "04:18",
    urlSong: "https://20essentials.github.io/akiaura-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/akiaura-ost/assets/n1.avif"
  },
  {
    title: "Suffer With Me",
    artist: "Liue",
    album: "Phonk",
    date: "2028-04-02T00:00:00",
    duration: "04:43",
    urlSong: "https://20essentials.github.io/liue/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/liue/assets/n1.avif"
  },
  {
    title: "Little Dark",
    artist: "MGMT",
    album: "Phonk",
    date: "2028-04-03T00:00:00",
    duration: "05:00",
    urlSong: "https://20essentials.github.io/mgmt-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/mgmt-band/assets/n3.avif"
  },
  {
    title: "Highwayman",
    artist: "Akassuna",
    album: "Phonk",
    date: "2028-04-04T00:00:00",
    duration: "02:15",
    urlSong: "https://20essentials.github.io/akassuna-album/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/akassuna-album/assets/n1.avif"
  },
  {
    title: "War Zone",
    artist: "Unknown Brain",
    album: "Phonk",
    date: "2028-04-05T00:00:00",
    duration: "03:03",
    urlSong: "https://20essentials.github.io/unknown-brain-soundtrack/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/unknown-brain-soundtrack/assets/n1.avif"
  },
  {
    title: "Wondering",
    artist: "Xiu Xiu",
    album: "Phonk",
    date: "2028-04-06T00:00:00",
    duration: "04:12",
    urlSong: "https://20essentials.github.io/xiu-xiu-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/xiu-xiu-band/assets/n1.avif"
  },
  {
    title: "How We Do It",
    artist: "Axol",
    album: "Phonk",
    date: "2028-04-07T00:00:00",
    duration: "02:42",
    urlSong: "https://20essentials.github.io/axol/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/axol/assets/n4.avif"
  },
  {
    title: "Painxkiller",
    artist: "Akassuna",
    album: "Phonk",
    date: "2028-04-08T00:00:00",
    duration: "02:18",
    urlSong: "https://20essentials.github.io/akassuna-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/akassuna-album/assets/n2.avif"
  },
  {
    title: "Best Of Me",
    artist: "Neffex",
    album: "Phonk",
    date: "2028-04-09T00:00:00",
    duration: "03:47",
    urlSong: "https://20essentials.github.io/neffex-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/neffex-soundtrack/assets/n1.avif"
  },
  {
    title: "Montreal",
    artist: "Autechre",
    album: "Phonk",
    date: "2028-04-10T00:00:00",
    duration: "07:15",
    urlSong: "https://20essentials.github.io/autechre-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/autechre-band/assets/n2.avif"
  },
  {
    title: "Better Of",
    artist: "Alice Deejay",
    album: "Phonk",
    date: "2028-04-11T00:00:00",
    duration: "02:55",
    urlSong: "https://20essentials.github.io/alice-deejay/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/alice-deejay/assets/n3.avif"
  },
  {
    title: "Rumors",
    artist: "Neffex",
    album: "Phonk",
    date: "2028-04-12T00:00:00",
    duration: "04:07",
    urlSong: "https://20essentials.github.io/neffex/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/neffex/assets/n2.avif"
  },
  {
    title: "Phenomenon",
    artist: "Unknown Brain",
    album: "Phonk",
    date: "2028-04-13T00:00:00",
    duration: "02:56",
    urlSong: "https://20essentials.github.io/unknown-brain-soundtrack/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/unknown-brain-soundtrack/assets/n2.avif"
  },
  {
    title: "Drive",
    artist: "Wiguez And Vizzen",
    album: "Phonk",
    date: "2028-04-14T00:00:00",
    duration: "02:50",
    urlSong: "https://20essentials.github.io/wiguez-and-vizzen/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/wiguez-and-vizzen/assets/n1.avif"
  },
  {
    title: "Hella Phonk",
    artist: "Akassuna",
    album: "Phonk",
    date: "2028-04-15T00:00:00",
    duration: "02:18",
    urlSong: "https://20essentials.github.io/akassuna-album/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/akassuna-album/assets/n3.avif"
  },
  {
    title: "Flashback",
    artist: "Craspore",
    album: "Phonk",
    date: "2028-04-16T00:00:00",
    duration: "06:43",
    urlSong: "https://20essentials.github.io/craspore-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/craspore-album/assets/n1.avif"
  },
  {
    title: "Lost",
    artist: "Crimes",
    album: "Phonk",
    date: "2028-04-17T00:00:00",
    duration: "02:28",
    urlSong: "https://20essentials.github.io/crimes-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/crimes-band/assets/n1.avif"
  },
  {
    title: "Fluxxwave",
    artist: "Clovis Ryes",
    album: "Phonk",
    date: "2028-04-18T00:00:00",
    duration: "02:30",
    urlSong: "https://20essentials.github.io/clovis-reyes-album/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/clovis-reyes-album/assets/n1.avif"
  },
  {
    title: "Desolator",
    artist: "Akassuna",
    album: "Phonk",
    date: "2028-04-19T00:00:00",
    duration: "02:14",
    urlSong: "https://20essentials.github.io/akassuna-album/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/akassuna-album/assets/n4.avif"
  },
  {
    title: "Desolate",
    artist: "Wiguez And Vizzen",
    album: "Phonk",
    date: "2028-04-20T00:00:00",
    duration: "02:50",
    urlSong: "https://20essentials.github.io/wiguez-and-vizzen/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/wiguez-and-vizzen/assets/n2.avif"
  }
];
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: phonk
}, Symbol.toStringTag, { value: "Module" }));
const popcore = [
  {
    title: "Born This Way",
    artist: "Lady Gaga",
    album: "Popcore",
    date: "2027-02-01T00:00:00",
    duration: "04:35",
    urlSong: "https://20essentials.github.io/lady-gaga-ost/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/lady-gaga-ost/assets/n4.avif"
  },
  {
    title: "Euphoria",
    artist: "Loreen",
    album: "Popcore",
    date: "2027-02-02T00:00:00",
    duration: "03:52",
    urlSong: "https://20essentials.github.io/loreen/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/loreen/assets/n1.avif"
  },
  {
    title: "I Forgot About The Stars",
    artist: "Memorex Memories",
    album: "Popcore",
    date: "2027-02-03T00:00:00",
    duration: "04:34",
    urlSong: "https://20essentials.github.io/memorex-memories/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/memorex-memories/assets/n1.avif"
  },
  {
    title: "Amor Imposible",
    artist: "Manz",
    album: "Popcore",
    date: "2027-02-04T00:00:00",
    duration: "02:40",
    urlSong: "https://20essentials.github.io/manz/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/manz/assets/n1.avif"
  },
  {
    title: "Quiet, The Winter Harbor",
    artist: "Mazzy Star",
    album: "Popcore",
    date: "2027-02-05T00:00:00",
    duration: "04:44",
    urlSong: "https://20essentials.github.io/mazzy-star/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/mazzy-star/assets/n1.avif"
  },
  {
    title: "Mistaken",
    artist: "Martin Garrix",
    album: "Popcore",
    date: "2027-02-06T00:00:00",
    duration: "04:42",
    urlSong: "https://20essentials.github.io/martin-garrix-soundtrack/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/martin-garrix-soundtrack/assets/n4.avif"
  },
  {
    title: "Overkill",
    artist: "Men At Work",
    album: "Popcore",
    date: "2027-02-07T00:00:00",
    duration: "03:56",
    urlSong: "https://20essentials.github.io/men-at-work-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/men-at-work-band/assets/n1.avif"
  },
  {
    title: "Cheri Cheri Lady",
    artist: "Modern Talking",
    album: "Popcore",
    date: "2027-02-08T00:00:00",
    duration: "03:45",
    urlSong: "https://20essentials.github.io/modern-talking-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/modern-talking-band/assets/n4.avif"
  },
  {
    title: "Vogue",
    artist: "Madonna",
    album: "Popcore",
    date: "2027-02-09T00:00:00",
    duration: "05:19",
    urlSong: "https://20essentials.github.io/madonna-album/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/madonna-album/assets/n3.avif"
  },
  {
    title: "Dream Diver",
    artist: "Mr Kitty",
    album: "Popcore",
    date: "2027-02-10T00:00:00",
    duration: "04:25",
    urlSong: "https://20essentials.github.io/mr-kitty-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/mr-kitty-ost/assets/n1.avif"
  },
  {
    title: "Can't Hold Us",
    artist: "Macklemore",
    album: "Popcore",
    date: "2027-02-11T00:00:00",
    duration: "04:17",
    urlSong: "https://20essentials.github.io/macklemore-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/macklemore-soundtrack/assets/n1.avif"
  },
  {
    title: "Noelia",
    artist: "Nino Bravo",
    album: "Popcore",
    date: "2027-02-12T00:00:00",
    duration: "03:06",
    urlSong: "https://20essentials.github.io/nino-bravo/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/nino-bravo/assets/n1.avif"
  },
  {
    title: "Distant",
    artist: "Nuages",
    album: "Popcore",
    date: "2027-02-13T00:00:00",
    duration: "05:40",
    urlSong: "https://20essentials.github.io/nuages-album/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/nuages-album/assets/n1.avif"
  },
  {
    title: "Como Te Va Mi Amor",
    artist: "Pedro Suárez-Vértiz",
    album: "Popcore",
    date: "2027-02-14T00:00:00",
    duration: "05:40",
    urlSong: "https://20essentials.github.io/pedro-suarez-vertiz-ost/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/pedro-suarez-vertiz-ost/assets/n3.avif"
  },
  {
    title: "Maybe I'm Amazed",
    artist: "Paul Mccartney",
    album: "Popcore",
    date: "2027-02-15T00:00:00",
    duration: "03:49",
    urlSong: "https://20essentials.github.io/paul-mccartney-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/paul-mccartney-ost/assets/n1.avif"
  },
  {
    title: "Money",
    artist: "Pink Floyd",
    album: "Popcore",
    date: "2027-02-16T00:00:00",
    duration: "06:22",
    urlSong: "https://20essentials.github.io/pink-floyd-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/pink-floyd-band/assets/n4.avif"
  },
  {
    title: "Ahora Decidete",
    artist: "Pimpinela",
    album: "Popcore",
    date: "2027-02-17T00:00:00",
    duration: "03:35",
    urlSong: "https://20essentials.github.io/pimpinela-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/pimpinela-band/assets/n1.avif"
  },
  {
    title: "It's A Sin",
    artist: "Pet Shop Boys",
    album: "Popcore",
    date: "2027-02-18T00:00:00",
    duration: "04:59",
    urlSong: "https://20essentials.github.io/pet-shop-boys-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/pet-shop-boys-band/assets/n1.avif"
  },
  {
    title: "Silent Lucidity",
    artist: "Queensryche",
    album: "Popcore",
    date: "2027-02-19T00:00:00",
    duration: "05:45",
    urlSong: "https://20essentials.github.io/queensryche-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/queensryche-band/assets/n1.avif"
  },
  {
    title: "I Want To Be Free",
    artist: "Queen",
    album: "Popcore",
    date: "2027-02-20T00:00:00",
    duration: "04:16",
    urlSong: "https://20essentials.github.io/queen-band/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/queen-band/assets/n1.avif"
  }
];
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: popcore
}, Symbol.toStringTag, { value: "Module" }));
const progressivepop = [
  {
    title: "Love me Harder",
    artist: "Ariana Grande",
    album: "Progressive Pop",
    date: "2024-09-01T00:00:00",
    duration: "03:53",
    urlSong: "https://20essentials.github.io/ariana-grande-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/ariana-grande-ost/assets/n2.avif"
  },
  {
    title: "Without You",
    artist: "David Guetta",
    album: "Progressive Pop",
    date: "2024-09-02T00:00:00",
    duration: "04:00",
    urlSong: "https://20essentials.github.io/david-guetta-ost/songs/n11.mp3",
    urlPoster: "https://20essentials.github.io/david-guetta-ost/assets/n2.avif"
  },
  {
    title: "En el Muelle de San Blas",
    artist: "Maná",
    album: "Progressive Pop",
    date: "2024-09-03T00:00:00",
    duration: "05:53",
    urlSong: "https://20essentials.github.io/mana-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/mana-band/assets/n2.avif"
  },
  {
    title: "Walking in the Rain",
    artist: "Sunstroke Project",
    album: "Progressive Pop",
    date: "2024-09-04T00:00:00",
    duration: "03:26",
    urlSong: "https://20essentials.github.io/sunstroke-project-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/sunstroke-project-ost/assets/n4.avif"
  },
  {
    title: "Taxi Taxi",
    artist: "Cher",
    album: "Progressive Pop",
    date: "2024-09-05T00:00:00",
    duration: "05:04",
    urlSong: "https://20essentials.github.io/cher-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/cher-ost/assets/n1.avif"
  },
  {
    title: "Reflections",
    artist: "The Neighbourhood",
    album: "Progressive Pop",
    date: "2024-09-06T00:00:00",
    duration: "03:55",
    urlSong: "https://20essentials.github.io/the-neighbourhood-ost/songs/n11.mp3",
    urlPoster: "https://20essentials.github.io/the-neighbourhood-ost/assets/n2.avif"
  },
  {
    title: "Vrol",
    artist: "DLS 2016",
    album: "Progressive Pop",
    date: "2024-09-07T00:00:00",
    duration: "03:36",
    urlSong: "https://20essentials.github.io/dls-2016/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/dls-2016/assets/n3.avif"
  },
  {
    title: "Usurper",
    artist: "Nxcre",
    album: "Progressive Pop",
    date: "2024-09-08T00:00:00",
    duration: "03:36",
    urlSong: "https://20essentials.github.io/nxcre/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/nxcre/assets/n1.avif"
  },
  {
    title: "Calm Before the Storm",
    artist: "Phillip Phillips",
    album: "Progressive Pop",
    date: "2024-09-09T00:00:00",
    duration: "03:30",
    urlSong: "https://20essentials.github.io/phillip-phillips/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/phillip-phillips/assets/n2.avif"
  },
  {
    title: "Catch me the moment",
    artist: "Lisa",
    album: "Progressive Pop",
    date: "2024-09-10T00:00:00",
    duration: "02:27",
    urlSong: "https://20essentials.github.io/lisa/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/lisa/assets/n1.avif"
  },
  {
    title: "Just Can't Get Enough",
    artist: "The Black Eyed Peas",
    album: "Progressive Pop",
    date: "2024-09-11T00:00:00",
    duration: "03:39",
    urlSong: "https://20essentials.github.io/the-black-eyed-peas/songs/n12.mp3",
    urlPoster: "https://20essentials.github.io/the-black-eyed-peas/assets/n1.avif"
  },
  {
    title: "24K Magic",
    artist: "Bruno Mars",
    album: "Progressive Pop",
    date: "2024-09-12T00:00:00",
    duration: "03:46",
    urlSong: "https://20essentials.github.io/bruno-mars/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/bruno-mars/assets/n3.avif"
  },
  {
    title: "Move Your Body",
    artist: "Sia",
    album: "Progressive Pop",
    date: "2024-09-13T00:00:00",
    duration: "04:34",
    urlSong: "https://20essentials.github.io/sia/songs/n11.mp3",
    urlPoster: "https://20essentials.github.io/sia/assets/n1.avif"
  },
  {
    title: "Crossing Field",
    artist: "Lisa",
    album: "Progressive Pop",
    date: "2024-09-14T00:00:00",
    duration: "04:07",
    urlSong: "https://20essentials.github.io/lisa/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/lisa/assets/n2.avif"
  },
  {
    title: "Be Free with Your Love",
    artist: "Spandau Ballet",
    album: "Progressive Pop",
    date: "2024-09-15T00:00:00",
    duration: "04:40",
    urlSong: "https://20essentials.github.io/spandau-ballet/songs/n13.mp3",
    urlPoster: "https://20essentials.github.io/spandau-ballet/assets/n1.avif"
  },
  {
    title: "When the Beat Drops Out",
    artist: "Marlon Roudette",
    album: "Progressive Pop",
    date: "2024-09-16T00:00:00",
    duration: "03:28",
    urlSong: "https://20essentials.github.io/marlon-roudette/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/marlon-roudette/assets/n2.avif"
  },
  {
    title: "Dogma",
    artist: "KMFDM",
    album: "Progressive Pop",
    date: "2024-09-17T00:00:00",
    duration: "05:12",
    urlSong: "https://20essentials.github.io/kmfdm/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/kmfdm/assets/n2.avif"
  },
  {
    title: "Everybody Feeling Something",
    artist: "Marlon Roudette",
    album: "Progressive Pop",
    date: "2024-09-18T00:00:00",
    duration: "04:05",
    urlSong: "https://20essentials.github.io/marlon-roudette/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/marlon-roudette/assets/n3.avif"
  },
  {
    title: "In the Waiting Line",
    artist: "Zero 7",
    album: "Progressive Pop",
    date: "2024-09-19T00:00:00",
    duration: "04:31",
    urlSong: "https://20essentials.github.io/zero-7/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/zero-7/assets/n1.avif"
  },
  {
    title: "Come Along",
    artist: "Marlon Roudette",
    album: "Progressive Pop",
    date: "2024-09-20T00:00:00",
    duration: "03:44",
    urlSong: "https://20essentials.github.io/marlon-roudette/songs/n18.mp3",
    urlPoster: "https://20essentials.github.io/marlon-roudette/assets/n1.avif"
  }
];
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: progressivepop
}, Symbol.toStringTag, { value: "Module" }));
const retrowave = [
  {
    title: "Us And Them",
    artist: "Pink Floyd",
    album: "Retrowave",
    date: "2026-12-01T00:00:00",
    duration: "07:50",
    urlSong: "https://20essentials.github.io/pink-floyd-band/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/pink-floyd-band/assets/n1.avif"
  },
  {
    title: "Take Hold Of The Flame",
    artist: "Queensryche",
    album: "Retrowave",
    date: "2026-12-02T00:00:00",
    duration: "05:02",
    urlSong: "https://20essentials.github.io/queensryche-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/queensryche-band/assets/n1.avif"
  },
  {
    title: "Supersonic",
    artist: "Oasis",
    album: "Retrowave",
    date: "2026-12-03T00:00:00",
    duration: "04:43",
    urlSong: "https://20essentials.github.io/oasis-ost/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/oasis-ost/assets/n4.avif"
  },
  {
    title: "Olympia",
    artist: "Rancid",
    album: "Retrowave",
    date: "2026-12-04T00:00:00",
    duration: "03:31",
    urlSong: "https://20essentials.github.io/rancid-ost/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/rancid-ost/assets/n1.avif"
  },
  {
    title: "Don't Stop The Music",
    artist: "Rihanna",
    album: "Retrowave",
    date: "2026-12-05T00:00:00",
    duration: "04:26",
    urlSong: "https://20essentials.github.io/rihanna-ost/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/rihanna-ost/assets/n1.avif"
  },
  {
    title: "Rent",
    artist: "Pet Shop Boys",
    album: "Retrowave",
    date: "2026-12-06T00:00:00",
    duration: "03:33",
    urlSong: "https://20essentials.github.io/pet-shop-boys-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/pet-shop-boys-band/assets/n1.avif"
  },
  {
    title: "Let It Happen",
    artist: "Tame Impala",
    album: "Retrowave",
    date: "2026-12-07T00:00:00",
    duration: "07:50",
    urlSong: "https://20essentials.github.io/tame-impala-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/tame-impala-ost/assets/n1.avif"
  },
  {
    title: "One More Hour",
    artist: "Tame Impala",
    album: "Retrowave",
    date: "2026-12-08T00:00:00",
    duration: "07:13",
    urlSong: "https://20essentials.github.io/tame-impala-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/tame-impala-ost/assets/n2.avif"
  },
  {
    title: "The Son Of Flynn",
    artist: "Tron",
    album: "Retrowave",
    date: "2026-12-09T00:00:00",
    duration: "01:35",
    urlSong: "https://20essentials.github.io/tron-soundtrack/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/tron-soundtrack/assets/n4.avif"
  },
  {
    title: "Promiscuous",
    artist: "Timbaland",
    album: "Retrowave",
    date: "2026-12-10T00:00:00",
    duration: "04:02",
    urlSong: "https://20essentials.github.io/timbaland-album/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/timbaland-album/assets/n1.avif"
  },
  {
    title: "Hurricane",
    artist: "Thirty Seconds To Mars",
    album: "Retrowave",
    date: "2026-12-11T00:00:00",
    duration: "06:20",
    urlSong: "https://20essentials.github.io/thirty-seconds-to-mars-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/thirty-seconds-to-mars-band/assets/n1.avif"
  },
  {
    title: "Breakeven",
    artist: "The Script",
    album: "Retrowave",
    date: "2026-12-12T00:00:00",
    duration: "04:22",
    urlSong: "https://20essentials.github.io/the-script-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/the-script-band/assets/n1.avif"
  },
  {
    title: "99",
    artist: "Toto",
    album: "Retrowave",
    date: "2026-12-13T00:00:00",
    duration: "04:02",
    urlSong: "https://20essentials.github.io/toto-band/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/toto-band/assets/n4.avif"
  },
  {
    title: "Little Black Submarines",
    artist: "The Black Keys",
    album: "Retrowave",
    date: "2026-12-14T00:00:00",
    duration: "03:31",
    urlSong: "https://20essentials.github.io/the-black-keys-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/the-black-keys-band/assets/n1.avif"
  },
  {
    title: "When We Were Lovers",
    artist: "Studio Killers",
    album: "Retrowave",
    date: "2026-12-15T00:00:00",
    duration: "03:44",
    urlSong: "https://20essentials.github.io/studio-killers-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/studio-killers-ost/assets/n1.avif"
  },
  {
    title: "Love You Like A Love Song",
    artist: "Selena Gomez",
    album: "Retrowave",
    date: "2026-12-16T00:00:00",
    duration: "03:17",
    urlSong: "https://20essentials.github.io/selena-gomez/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/selena-gomez/assets/n1.avif"
  },
  {
    title: "Superhero",
    artist: "Unknown Brain",
    album: "Retrowave",
    date: "2026-12-17T00:00:00",
    duration: "03:02",
    urlSong: "https://20essentials.github.io/unknown-brain-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/unknown-brain-soundtrack/assets/n1.avif"
  },
  {
    title: "We Come Running",
    artist: "Warriyo",
    album: "Retrowave",
    date: "2026-12-18T00:00:00",
    duration: "04:05",
    urlSong: "https://20essentials.github.io/warriyo-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/warriyo-ost/assets/n1.avif"
  },
  {
    title: "Better Not",
    artist: "Wafia",
    album: "Retrowave",
    date: "2026-12-19T00:00:00",
    duration: "03:43",
    urlSong: "https://20essentials.github.io/wafia/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/wafia/assets/n1.avif"
  },
  {
    title: "Biggy",
    artist: "Warpaint",
    album: "Retrowave",
    date: "2026-12-20T00:00:00",
    duration: "05:55",
    urlSong: "https://20essentials.github.io/warpaint-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/warpaint-band/assets/n1.avif"
  }
];
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: retrowave
}, Symbol.toStringTag, { value: "Module" }));
const rockandroll = [
  {
    title: "Shoot to Thrill",
    artist: "Ac/Dc",
    album: "Rock and Roll",
    date: "2026-07-01T00:00:00",
    duration: "05:17",
    urlSong: "https://20essentials.github.io/ac-dc-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/ac-dc-band/assets/n1.avif"
  },
  {
    title: "Like a Stone",
    artist: "Audioslave",
    album: "Rock and Roll",
    date: "2026-07-02T00:00:00",
    duration: "05:01",
    urlSong: "https://20essentials.github.io/audioslave-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/audioslave-band/assets/n1.avif"
  },
  {
    title: "Dancing in The Dark",
    artist: "Bruce Springsteen",
    album: "Rock and Roll",
    date: "2026-07-03T00:00:00",
    duration: "03:58",
    urlSong: "https://20essentials.github.io/bruce-springsteen-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/bruce-springsteen-ost/assets/n1.avif"
  },
  {
    title: "Thunderstruck",
    artist: "Ac/Dc",
    album: "Rock and Roll",
    date: "2026-07-04T00:00:00",
    duration: "4:52",
    urlSong: "https://20essentials.github.io/ac-dc-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/ac-dc-band/assets/n2.avif"
  },
  {
    title: "Pour Some Sugar On Me",
    artist: "Def Leppard",
    album: "Rock and Roll",
    date: "2026-07-05T00:00:00",
    duration: "04:27",
    urlSong: "https://20essentials.github.io/def-leppard-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/def-leppard-band/assets/n1.avif"
  },
  {
    title: "The Beautiful People",
    artist: "Marilyn Manson",
    album: "Rock and Roll",
    date: "2026-07-06T00:00:00",
    duration: "03:46",
    urlSong: "https://20essentials.github.io/marilyn-manson-soundtrack/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/marilyn-manson-soundtrack/assets/n1.avif"
  },
  {
    title: "Highway to Hell",
    artist: "Ac/Dc",
    album: "Rock and Roll",
    date: "2026-07-07T00:00:00",
    duration: "03:27",
    urlSong: "https://20essentials.github.io/ac-dc-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/ac-dc-band/assets/n3.avif"
  },
  {
    title: "I am the Highway",
    artist: "Audioslave",
    album: "Rock and Roll",
    date: "2026-07-08T00:00:00",
    duration: "05:34",
    urlSong: "https://20essentials.github.io/audioslave-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/audioslave-band/assets/n2.avif"
  },
  {
    title: "Fuera de Sektor",
    artist: "Los Violadores",
    album: "Rock and Roll",
    date: "2026-07-09T00:00:00",
    duration: "04:04",
    urlSong: "https://20essentials.github.io/los-violadores-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/los-violadores-band/assets/n1.avif"
  },
  {
    title: "Back in Black",
    artist: "Ac/Dc",
    album: "Rock and Roll",
    date: "2026-07-10T00:00:00",
    duration: "04:13",
    urlSong: "https://20essentials.github.io/ac-dc-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/ac-dc-band/assets/n4.avif"
  },
  {
    title: "Born to Run",
    artist: "Bruce Springsteen",
    album: "Rock and Roll",
    date: "2026-07-11T00:00:00",
    duration: "05:33",
    urlSong: "https://20essentials.github.io/bruce-springsteen-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/bruce-springsteen-ost/assets/n2.avif"
  },
  {
    title: "Tre Great Gig In The Sky",
    artist: "Pink Floyd",
    album: "Rock and Roll",
    date: "2026-07-12T00:00:00",
    duration: "04:44",
    urlSong: "https://20essentials.github.io/pink-floyd-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/pink-floyd-band/assets/n1.avif"
  },
  {
    title: "We Will Rock You",
    artist: "Queen",
    album: "Rock and Roll",
    date: "2026-07-13T00:00:00",
    duration: "02:14",
    urlSong: "https://20essentials.github.io/queen-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/queen-band/assets/n1.avif"
  },
  {
    title: "Ruby Soho",
    artist: "Rancid",
    album: "Rock and Roll",
    date: "2026-07-14T00:00:00",
    duration: "02:39",
    urlSong: "https://20essentials.github.io/rancid-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/rancid-ost/assets/n1.avif"
  },
  {
    title: "YYZ",
    artist: "Rush",
    album: "Rock and Roll",
    date: "2026-07-15T00:00:00",
    duration: "04:54",
    urlSong: "https://20essentials.github.io/rush-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/rush-ost/assets/n1.avif"
  },
  {
    title: "In the Shadows",
    artist: "The Rasmus",
    album: "Rock and Roll",
    date: "2026-07-16T00:00:00",
    duration: "03:39",
    urlSong: "https://20essentials.github.io/the-rasmus-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/the-rasmus-band/assets/n1.avif"
  },
  {
    title: "What You Know",
    artist: "Two Door Cinema Club",
    album: "Rock and Roll",
    date: "2026-07-17T00:00:00",
    duration: "03:11",
    urlSong: "https://20essentials.github.io/two-door-cinema-club-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/two-door-cinema-club-band/assets/n1.avif"
  },
  {
    title: "Espera y Veras",
    artist: "Los Violadores",
    album: "Rock and Roll",
    date: "2026-07-18T00:00:00",
    duration: "04:59",
    urlSong: "https://20essentials.github.io/los-violadores-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/los-violadores-band/assets/n2.avif"
  },
  {
    title: "Superheroes",
    artist: "The Script",
    album: "Rock and Roll",
    date: "2026-07-19T00:00:00",
    duration: "04:03",
    urlSong: "https://20essentials.github.io/the-script-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/the-script-band/assets/n1.avif"
  },
  {
    title: "Africa",
    artist: "Toto",
    album: "Rock and Roll",
    date: "2026-07-20T00:00:00",
    duration: "04:31",
    urlSong: "https://20essentials.github.io/toto-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/toto-band/assets/n1.avif"
  }
];
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rockandroll
}, Symbol.toStringTag, { value: "Module" }));
const rockpop = [
  {
    title: "Changes",
    artist: "Butterfly Boucher",
    album: "Rock Pop",
    date: "2026-03-01T00:00:00",
    duration: "03:21",
    urlSong: "https://20essentials.github.io/butterfly-boucher-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/butterfly-boucher-ost/assets/n1.avif"
  },
  {
    title: "Te Quiero",
    artist: "Vilma Palma",
    album: "Rock Pop",
    date: "2026-03-02T00:00:00",
    duration: "03:26",
    urlSong: "https://20essentials.github.io/vilma-palma-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/vilma-palma-band/assets/n1.avif"
  },
  {
    title: "Paradise",
    artist: "Coldplay",
    album: "Rock Pop",
    date: "2026-03-03T00:00:00",
    duration: "04:34",
    urlSong: "https://20essentials.github.io/coldplay/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/coldplay/assets/n1.avif"
  },
  {
    title: "Fool's Errand",
    artist: "Fleet Foxes",
    album: "Rock Pop",
    date: "2026-03-04T00:00:00",
    duration: "04:52",
    urlSong: "https://20essentials.github.io/fleet-foxes/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/fleet-foxes/assets/n1.avif"
  },
  {
    title: "Viva la Vida",
    artist: "Coldplay",
    album: "Rock Pop",
    date: "2026-03-05T00:00:00",
    duration: "04:02",
    urlSong: "https://20essentials.github.io/coldplay/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/coldplay/assets/n2.avif"
  },
  {
    title: "Set Me Free",
    artist: "Velvet Revolver",
    album: "Rock Pop",
    date: "2026-03-06T00:00:00",
    duration: "04:14",
    urlSong: "https://20essentials.github.io/velvet-revolver-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/velvet-revolver-band/assets/n1.avif"
  },
  {
    title: "No Good",
    artist: "Kaleo",
    album: "Rock Pop",
    date: "2026-03-07T00:00:00",
    duration: "03:54",
    urlSong: "https://20essentials.github.io/kaleo/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/kaleo/assets/n1.avif"
  },
  {
    title: "Perdiendo el Tiempo",
    artist: "Vilma Palma",
    album: "Rock Pop",
    date: "2026-03-08T00:00:00",
    duration: "05:05",
    urlSong: "https://20essentials.github.io/vilma-palma-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/vilma-palma-band/assets/n2.avif"
  },
  {
    title: "Firework",
    artist: "Katy Perry",
    album: "Rock Pop",
    date: "2026-03-09T00:00:00",
    duration: "03:48",
    urlSong: "https://20essentials.github.io/katy-perry-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/katy-perry-ost/assets/n1.avif"
  },
  {
    title: "A Skyfull of Stars",
    artist: "Coldplay",
    album: "Rock Pop",
    date: "2026-03-10T00:00:00",
    duration: "04:26",
    urlSong: "https://20essentials.github.io/coldplay/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/coldplay/assets/n3.avif"
  },
  {
    title: "Joker And the Thief",
    artist: "Wolfmother",
    album: "Rock Pop",
    date: "2026-03-11T00:00:00",
    duration: "04:40",
    urlSong: "https://20essentials.github.io/wolfmother-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/wolfmother-band/assets/n1.avif"
  },
  {
    title: "Say It Ain't So",
    artist: "Weezer",
    album: "Rock Pop",
    date: "2026-03-12T00:00:00",
    duration: "04:18",
    urlSong: "https://20essentials.github.io/weezer-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/weezer-band/assets/n1.avif"
  },
  {
    title: "Judas",
    artist: "Lady Gaga",
    album: "Rock Pop",
    date: "2026-03-13T00:00:00",
    duration: "04:09",
    urlSong: "https://20essentials.github.io/lady-gaga-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/lady-gaga-ost/assets/n1.avif"
  },
  {
    title: "1,2 Ultraviolento",
    artist: "Los Violadores",
    album: "Rock Pop",
    date: "2026-03-14T00:00:00",
    duration: "04:12",
    urlSong: "https://20essentials.github.io/los-violadores-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/los-violadores-band/assets/n4.avif"
  },
  {
    title: "It's a Mistake",
    artist: "Men at Work",
    album: "Rock Pop",
    date: "2026-03-15T00:00:00",
    duration: "04:40",
    urlSong: "https://20essentials.github.io/men-at-work-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/men-at-work-band/assets/n1.avif"
  },
  {
    title: "You're My Heart, You're My Soul",
    artist: "Modern Talking",
    album: "Rock Pop",
    date: "2026-03-16T00:00:00",
    duration: "03:19",
    urlSong: "https://20essentials.github.io/modern-talking-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/modern-talking-band/assets/n1.avif"
  },
  {
    title: "Clavado en un Bar",
    artist: "Maná",
    album: "Rock Pop",
    date: "2026-03-17T00:00:00",
    duration: "05:11",
    urlSong: "https://20essentials.github.io/mana-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/mana-band/assets/n1.avif"
  },
  {
    title: "Papa Don't Preach",
    artist: "Madonna",
    album: "Rock Pop",
    date: "2026-03-18T00:00:00",
    duration: "04:09",
    urlSong: "https://20essentials.github.io/madonna-album/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/madonna-album/assets/n1.avif"
  },
  {
    title: "Careless",
    artist: "Neffex",
    album: "Rock Pop",
    date: "2026-03-19T00:00:00",
    duration: "04:57",
    urlSong: "https://20essentials.github.io/neffex-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/neffex-soundtrack/assets/n1.avif"
  },
  {
    title: "Quiero Ser Yo",
    artist: "Los Violadores",
    album: "Rock Pop",
    date: "2026-03-20T00:00:00",
    duration: "03:49",
    urlSong: "https://20essentials.github.io/los-violadores-band/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/los-violadores-band/assets/n2.avif"
  }
];
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rockpop
}, Symbol.toStringTag, { value: "Module" }));
const romantic = [
  {
    title: "Can't Help Falling In Love",
    artist: "Elvis Presley",
    album: "Romantic",
    date: "2025-04-01T00:00:00",
    duration: "03:00",
    urlSong: "https://20essentials.github.io/elvis-presley/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/elvis-presley/assets/n1.avif"
  },
  {
    title: "Waiting For A Girl Like You",
    artist: "Foreigner",
    album: "Romantic",
    date: "2025-04-02T00:00:00",
    duration: "04:46",
    urlSong: "https://20essentials.github.io/foreigner/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/foreigner/assets/n1.avif"
  },
  {
    title: "Dosed",
    artist: "Red Hot Chilli Peppers",
    album: "Romantic",
    date: "2025-04-03T00:00:00",
    duration: "05:01",
    urlSong: "https://20essentials.github.io/rhcp-lives-ost/songs/n15.mp3",
    urlPoster: "https://20essentials.github.io/rhcp-lives-ost/assets/n1.avif"
  },
  {
    title: "Sugar",
    artist: "Maroon 5",
    album: "Romantic",
    date: "2025-04-04T00:00:00",
    duration: "04:25",
    urlSong: "https://20essentials.github.io/maroon5/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/maroon5/assets/n1.avif"
  },
  {
    title: "I Want To Know What Love Is",
    artist: "Foreigner",
    album: "Romantic",
    date: "2025-04-05T00:00:00",
    duration: "05:03",
    urlSong: "https://20essentials.github.io/foreigner/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/foreigner/assets/n2.avif"
  },
  {
    title: "Sexy Sexy Lover",
    artist: "Modern Talking",
    album: "Romantic",
    date: "2025-04-06T00:00:00",
    duration: "03:32",
    urlSong: "https://20essentials.github.io/modern-talking-band/songs/n14.mp3",
    urlPoster: "https://20essentials.github.io/modern-talking-band/assets/n1.avif"
  },
  {
    title: "Where Is The Love",
    artist: "The Black Eyed Peas",
    album: "Romantic",
    date: "2025-04-07T00:00:00",
    duration: "04:00",
    urlSong: "https://20essentials.github.io/the-black-eyed-peas/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/the-black-eyed-peas/assets/n1.avif"
  },
  {
    title: "I Wanna Be Yours",
    artist: "Artic Monkeys",
    album: "Romantic",
    date: "2025-04-08T00:00:00",
    duration: "03:04",
    urlSong: "https://20essentials.github.io/artic-monkeys-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/artic-monkeys-ost/assets/n1.avif"
  },
  {
    title: "No pensé que era amor",
    artist: "Arena Hash",
    album: "Romantic",
    date: "2025-04-09T00:00:00",
    duration: "03:53",
    urlSong: "https://20essentials.github.io/arena-hash-band/songs/n18.mp3",
    urlPoster: "https://20essentials.github.io/arena-hash-band/assets/n1.avif"
  },
  {
    title: "Yellow",
    artist: "Coldplay",
    album: "Romantic",
    date: "2025-04-10T00:00:00",
    duration: "04:31",
    urlSong: "https://20essentials.github.io/coldplay/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/coldplay/assets/n1.avif"
  },
  {
    title: "Hasta que Te Conoci",
    artist: "Juan Gabriel",
    album: "Romantic",
    date: "2025-04-11T00:00:00",
    duration: "07:12",
    urlSong: "https://20essentials.github.io/juan-gabriel-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/juan-gabriel-ost/assets/n1.avif"
  },
  {
    title: "Cosas del Amor",
    artist: "Ana Gabriel",
    album: "Romantic",
    date: "2025-04-12T00:00:00",
    duration: "03:31",
    urlSong: "https://20essentials.github.io/ana-gabriel-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/ana-gabriel-ost/assets/n1.avif"
  },
  {
    title: "Just Wanna Feel You",
    artist: "Flora Cash",
    album: "Romantic",
    date: "2025-04-13T00:00:00",
    duration: "03:41",
    urlSong: "https://20essentials.github.io/flora-cash/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/flora-cash/assets/n1.avif"
  },
  {
    title: "The Scientist",
    artist: "Coldplay",
    album: "Romantic",
    date: "2025-04-14T00:00:00",
    duration: "05:09",
    urlSong: "https://20essentials.github.io/coldplay/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/coldplay/assets/n2.avif"
  },
  {
    title: "Como yo te Amé",
    artist: "Rocio Jurado",
    album: "Romantic",
    date: "2025-04-15T00:00:00",
    duration: "04:38",
    urlSong: "https://20essentials.github.io/rocio-jurado-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/rocio-jurado-ost/assets/n1.avif"
  },
  {
    title: "You and Me",
    artist: "Flume",
    album: "Romantic",
    date: "2025-04-16T00:00:00",
    duration: "04:40",
    urlSong: "https://20essentials.github.io/flume/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/flume/assets/n1.avif"
  },
  {
    title: "Amor Eterno",
    artist: "Juan Gabriel",
    album: "Romantic",
    date: "2025-04-17T00:00:00",
    duration: "06:57",
    urlSong: "https://20essentials.github.io/juan-gabriel-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/juan-gabriel-ost/assets/n2.avif"
  },
  {
    title: "Tu Falta de Querer",
    artist: "Mon Laferte",
    album: "Romantic",
    date: "2025-04-18T00:00:00",
    duration: "04:36",
    urlSong: "https://20essentials.github.io/mon-laferte/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/mon-laferte/assets/n1.avif"
  },
  {
    title: "Quién Como Tú",
    artist: "Ana Gabriel",
    album: "Romantic",
    date: "2025-04-19T00:00:00",
    duration: "03:31",
    urlSong: "https://20essentials.github.io/ana-gabriel-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/ana-gabriel-ost/assets/n2.avif"
  },
  {
    title: "Fix You",
    artist: "Coldplay",
    album: "Romantic",
    date: "2025-04-20T00:00:00",
    duration: "04:45",
    urlSong: "https://20essentials.github.io/coldplay/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/coldplay/assets/n3.avif"
  }
];
const __vite_glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: romantic
}, Symbol.toStringTag, { value: "Module" }));
const skweee = [
  {
    title: "No Hay Mal Que Dure",
    artist: "Zoé",
    album: "Skweee",
    date: "2027-09-01T00:00:00",
    duration: "04:52",
    urlSong: "https://20essentials.github.io/zoe-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/zoe-ost/assets/n2.avif"
  },
  {
    title: "Superfly",
    artist: "4 Non Blondes",
    album: "Skweee",
    date: "2027-09-02T00:00:00",
    duration: "04:38",
    urlSong: "https://20essentials.github.io/4-non-blondes/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/4-non-blondes/assets/n2.avif"
  },
  {
    title: "Down Boy",
    artist: "Yeah Yeah Yeahs",
    album: "Skweee",
    date: "2027-09-03T00:00:00",
    duration: "03:56",
    urlSong: "https://20essentials.github.io/yeah-yeah-yeahs-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/yeah-yeah-yeahs-band/assets/n1.avif"
  },
  {
    title: "Me And You",
    artist: "Axol",
    album: "Skweee",
    date: "2027-09-04T00:00:00",
    duration: "03:18",
    urlSong: "https://20essentials.github.io/axol-soundtrack/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/axol-soundtrack/assets/n1.avif"
  },
  {
    title: "Pure",
    artist: "Ahrix",
    album: "Skweee",
    date: "2027-09-05T00:00:00",
    duration: "03:20",
    urlSong: "https://20essentials.github.io/ahrix-soundtrack/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/ahrix-soundtrack/assets/n1.avif"
  },
  {
    title: "Crying",
    artist: "Aerosmith",
    album: "Skweee",
    date: "2027-09-06T00:00:00",
    duration: "05:08",
    urlSong: "https://20essentials.github.io/aerosmith-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/aerosmith-band/assets/n1.avif"
  },
  {
    title: "The Voice Inside",
    artist: "Your Favorite Enemies",
    album: "Skweee",
    date: "2027-09-07T00:00:00",
    duration: "04:10",
    urlSong: "https://20essentials.github.io/your-favorite-enemies-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/your-favorite-enemies-band/assets/n1.avif"
  },
  {
    title: "Happier",
    artist: "Bastille",
    album: "Skweee",
    date: "2027-09-08T00:00:00",
    duration: "03:38",
    urlSong: "https://20essentials.github.io/bastille-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/bastille-ost/assets/n2.avif"
  },
  {
    title: "Mony",
    artist: "Billy Idol",
    album: "Skweee",
    date: "2027-09-09T00:00:00",
    duration: "05:13",
    urlSong: "https://20essentials.github.io/billy-idol-soundtrack/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/billy-idol-soundtrack/assets/n2.avif"
  },
  {
    title: "Paranoid",
    artist: "Black Sabbath",
    album: "Skweee",
    date: "2027-09-10T00:00:00",
    duration: "02:48",
    urlSong: "https://20essentials.github.io/black-sabbath-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/black-sabbath-band/assets/n2.avif"
  },
  {
    title: "Wolf",
    artist: "Beach Weather",
    album: "Skweee",
    date: "2027-09-11T00:00:00",
    duration: "03:58",
    urlSong: "https://20essentials.github.io/beach-weather-soundtrack/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/beach-weather-soundtrack/assets/n2.avif"
  },
  {
    title: "Rapture",
    artist: "Blondie",
    album: "Skweee",
    date: "2027-09-12T00:00:00",
    duration: "05:28",
    urlSong: "https://20essentials.github.io/blondie-soundtrack/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/blondie-soundtrack/assets/n2.avif"
  },
  {
    title: "A End Track",
    artist: "Zoids Chaotic Century",
    album: "Skweee",
    date: "2027-09-13T00:00:00",
    duration: "02:15",
    urlSong: "https://20essentials.github.io/zoids-chaotic-century-ost/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/zoids-chaotic-century-ost/assets/n3.avif"
  },
  {
    title: "Sweet Dreams",
    artist: "Borns",
    album: "Skweee",
    date: "2027-09-14T00:00:00",
    duration: "03:18",
    urlSong: "https://20essentials.github.io/borns-band/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/borns-band/assets/n2.avif"
  },
  {
    title: "Drunk In Love",
    artist: "Beyonce",
    album: "Skweee",
    date: "2027-09-15T00:00:00",
    duration: "05:23",
    urlSong: "https://20essentials.github.io/beyonce-album/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/beyonce-album/assets/n4.avif"
  },
  {
    title: "To The End",
    artist: "Blur",
    album: "Skweee",
    date: "2027-09-16T00:00:00",
    duration: "03:51",
    urlSong: "https://20essentials.github.io/blur-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/blur-band/assets/n2.avif"
  },
  {
    title: "Ultimate Alien Ending",
    artist: "Ben 10",
    album: "Skweee",
    date: "2027-09-17T00:00:00",
    duration: "00:32",
    urlSong: "https://20essentials.github.io/ben-10-album/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/ben-10-album/assets/n3.avif"
  },
  {
    title: "Black Sands",
    artist: "Bonobo",
    album: "Skweee",
    date: "2027-09-18T00:00:00",
    duration: "06:48",
    urlSong: "https://20essentials.github.io/bonobo-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/bonobo-band/assets/n2.avif"
  },
  {
    title: "Don't Stop Dancing",
    artist: "Bojack Horseman",
    album: "Skweee",
    date: "2027-09-19T00:00:00",
    duration: "03:07",
    urlSong: "https://20essentials.github.io/bojack-horseman-soundtrack/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/bojack-horseman-soundtrack/assets/n1.avif"
  },
  {
    title: "In The Stars",
    artist: "Benson Boone",
    album: "Skweee",
    date: "2027-09-20T00:00:00",
    duration: "03:36",
    urlSong: "https://20essentials.github.io/benson-boone-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/benson-boone-band/assets/n2.avif"
  }
];
const __vite_glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: skweee
}, Symbol.toStringTag, { value: "Module" }));
const softrock = [
  {
    title: "Roads To Madness",
    artist: "Queensryche",
    album: "Soft Rock",
    date: "2027-03-01T00:00:00",
    duration: "09:40",
    urlSong: "https://20essentials.github.io/queensryche-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/queensryche-band/assets/n1.avif"
  },
  {
    title: "Borderline",
    artist: "Tame Impala",
    album: "Soft Rock",
    date: "2027-03-02T00:00:00",
    duration: "03:57",
    urlSong: "https://20essentials.github.io/tame-impala-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/tame-impala-ost/assets/n1.avif"
  },
  {
    title: "Whatever",
    artist: "Oasis",
    album: "Soft Rock",
    date: "2027-03-03T00:00:00",
    duration: "06:22",
    urlSong: "https://20essentials.github.io/oasis-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/oasis-ost/assets/n1.avif"
  },
  {
    title: "Limelight",
    artist: "Rush",
    album: "Soft Rock",
    date: "2027-03-04T00:00:00",
    duration: "04:19",
    urlSong: "https://20essentials.github.io/rush-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/rush-ost/assets/n1.avif"
  },
  {
    title: "Radio Gaga",
    artist: "Queen",
    album: "Soft Rock",
    date: "2027-03-05T00:00:00",
    duration: "05:50",
    urlSong: "https://20essentials.github.io/queen-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/queen-band/assets/n2.avif"
  },
  {
    title: "Everybody Wants To Rule The World",
    artist: "Tears For Fears",
    album: "Soft Rock",
    date: "2027-03-06T00:00:00",
    duration: "04:12",
    urlSong: "https://20essentials.github.io/tears-for-fears-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/tears-for-fears-band/assets/n1.avif"
  },
  {
    title: "Dashboard",
    artist: "Modest Mouse",
    album: "Soft Rock",
    date: "2027-03-07T00:00:00",
    duration: "03:33",
    urlSong: "https://20essentials.github.io/modest-mouse-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/modest-mouse-soundtrack/assets/n1.avif"
  },
  {
    title: "Hold The Line",
    artist: "Toto",
    album: "Soft Rock",
    date: "2027-03-08T00:00:00",
    duration: "03:58",
    urlSong: "https://20essentials.github.io/toto-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/toto-band/assets/n4.avif"
  },
  {
    title: "Tighten Up",
    artist: "The Black Keys",
    album: "Soft Rock",
    date: "2027-03-09T00:00:00",
    duration: "03:35",
    urlSong: "https://20essentials.github.io/the-black-keys-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/the-black-keys-band/assets/n1.avif"
  },
  {
    title: "Kisses And Kills",
    artist: "The Oral Cigarretes",
    album: "Soft Rock",
    date: "2027-03-10T00:00:00",
    duration: "04:14",
    urlSong: "https://20essentials.github.io/the-oral-cigarretes/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/the-oral-cigarretes/assets/n1.avif"
  },
  {
    title: "Two Princess",
    artist: "Spin Doctors",
    album: "Soft Rock",
    date: "2027-03-11T00:00:00",
    duration: "04:19",
    urlSong: "https://20essentials.github.io/spin-doctors-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/spin-doctors-ost/assets/n1.avif"
  },
  {
    title: "Pride",
    artist: "U2",
    album: "Soft Rock",
    date: "2027-03-12T00:00:00",
    duration: "03:49",
    urlSong: "https://20essentials.github.io/u2-band/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/u2-band/assets/n3.avif"
  },
  {
    title: "Heartbun",
    artist: "Wafia",
    album: "Soft Rock",
    date: "2027-03-13T00:00:00",
    duration: "03:27",
    urlSong: "https://20essentials.github.io/wafia/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/wafia/assets/n1.avif"
  },
  {
    title: "Love Is To Die",
    artist: "Warpaint",
    album: "Soft Rock",
    date: "2027-03-14T00:00:00",
    duration: "04:50",
    urlSong: "https://20essentials.github.io/warpaint-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/warpaint-band/assets/n3.avif"
  },
  {
    title: "Dear God",
    artist: "Xtc",
    album: "Soft Rock",
    date: "2027-03-15T00:00:00",
    duration: "03:57",
    urlSong: "https://20essentials.github.io/xtc-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/xtc-band/assets/n1.avif"
  },
  {
    title: "Boy Soprano",
    artist: "Xiu Xiu",
    album: "Soft Rock",
    date: "2027-03-16T00:00:00",
    duration: "03:23",
    urlSong: "https://20essentials.github.io/xiu-xiu-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/xiu-xiu-band/assets/n4.avif"
  },
  {
    title: "Nobody's Diary",
    artist: "Yazoo",
    album: "Soft Rock",
    date: "2027-03-17T00:00:00",
    duration: "04:30",
    urlSong: "https://20essentials.github.io/yazoo/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/yazoo/assets/n1.avif"
  },
  {
    title: "For Your Love",
    artist: "Yardbirds",
    album: "Soft Rock",
    date: "2027-03-18T00:00:00",
    duration: "02:31",
    urlSong: "https://20essentials.github.io/yardbirds-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/yardbirds-band/assets/n1.avif"
  },
  {
    title: "Wild Flowers Latino",
    artist: "Zoids Chaotic Century",
    album: "Soft Rock",
    date: "2027-03-19T00:00:00",
    duration: "01:52",
    urlSong: "https://20essentials.github.io/zoids-chaotic-century-ost/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/zoids-chaotic-century-ost/assets/n1.avif"
  },
  {
    title: "What's Up",
    artist: "4 Non Blondes",
    album: "Soft Rock",
    date: "2027-03-20T00:00:00",
    duration: "04:52",
    urlSong: "https://20essentials.github.io/4-non-blondes/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/4-non-blondes/assets/n1.avif"
  }
];
const __vite_glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: softrock
}, Symbol.toStringTag, { value: "Module" }));
const soul = [
  {
    title: "Only You",
    artist: "Yazoo",
    album: "Soul",
    date: "2027-07-01T00:00:00",
    duration: "03:15",
    urlSong: "https://20essentials.github.io/yazoo-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/yazoo-band/assets/n1.avif"
  },
  {
    title: "I'm A Man",
    artist: "Yardbirds",
    album: "Soul",
    date: "2027-07-02T00:00:00",
    duration: "02:39",
    urlSong: "https://20essentials.github.io/yardbirds-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/yardbirds-band/assets/n1.avif"
  },
  {
    title: "Wolf",
    artist: "Yeah Yeah Yeahs",
    album: "Soul",
    date: "2027-07-03T00:00:00",
    duration: "04:13",
    urlSong: "https://20essentials.github.io/yeah-yeah-yeahs-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/yeah-yeah-yeahs-band/assets/n3.avif"
  },
  {
    title: "No Time Left",
    artist: "Your Favorite Enemies",
    album: "Soul",
    date: "2027-07-04T00:00:00",
    duration: "03:52",
    urlSong: "https://20essentials.github.io/your-favorite-enemies-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/your-favorite-enemies-band/assets/n1.avif"
  },
  {
    title: "A Track 11",
    artist: "Zoids Chaotic Century",
    album: "Soul",
    date: "2027-07-05T00:00:00",
    duration: "04:10",
    urlSong: "https://20essentials.github.io/zoids-chaotic-century-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/zoids-chaotic-century-ost/assets/n4.avif"
  },
  {
    title: "Funeral",
    artist: "Zara Larsson",
    album: "Soul",
    date: "2027-07-06T00:00:00",
    duration: "03:35",
    urlSong: "https://20essentials.github.io/zara-larsson-soundtrack/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/zara-larsson-soundtrack/assets/n3.avif"
  },
  {
    title: "Ily",
    artist: "Axol",
    album: "Soul",
    date: "2027-07-07T00:00:00",
    duration: "03:19",
    urlSong: "https://20essentials.github.io/axol-soundtrack/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/axol-soundtrack/assets/n4.avif"
  },
  {
    title: "Reborn",
    artist: "Ahrix",
    album: "Soul",
    date: "2027-07-08T00:00:00",
    duration: "03:40",
    urlSong: "https://20essentials.github.io/ahrix-soundtrack/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/ahrix-soundtrack/assets/n1.avif"
  },
  {
    title: "Sweet Emotion",
    artist: "Aerosmith",
    album: "Soul",
    date: "2027-07-09T00:00:00",
    duration: "04:34",
    urlSong: "https://20essentials.github.io/aerosmith-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/aerosmith-band/assets/n1.avif"
  },
  {
    title: "My Whole World",
    artist: "Alexander Rybak",
    album: "Soul",
    date: "2027-07-10T00:00:00",
    duration: "04:17",
    urlSong: "https://20essentials.github.io/alexander-rybak-album/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/alexander-rybak-album/assets/n2.avif"
  },
  {
    title: "Fuel To Fire",
    artist: "Agnes Obel",
    album: "Soul",
    date: "2027-07-11T00:00:00",
    duration: "05:29",
    urlSong: "https://20essentials.github.io/agnes-obel-album/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/agnes-obel-album/assets/n3.avif"
  },
  {
    title: "Tangerine",
    artist: "Adam Goldman",
    album: "Soul",
    date: "2027-07-12T00:00:00",
    duration: "04:26",
    urlSong: "https://20essentials.github.io/adam-goldman-album/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/adam-goldman-album/assets/n2.avif"
  },
  {
    title: "Bad Connection",
    artist: "Yazoo",
    album: "Soul",
    date: "2027-07-13T00:00:00",
    duration: "03:17",
    urlSong: "https://20essentials.github.io/yazoo-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/yazoo-band/assets/n2.avif"
  },
  {
    title: "Bronchusevenm",
    artist: "Autechre",
    album: "Soul",
    date: "2027-07-14T00:00:00",
    duration: "09:44",
    urlSong: "https://20essentials.github.io/autechre-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/autechre-band/assets/n3.avif"
  },
  {
    title: "Natural Mystic",
    artist: "Bob Marley",
    album: "Soul",
    date: "2027-07-15T00:00:00",
    duration: "03:27",
    urlSong: "https://20essentials.github.io/bob-marley-album/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/bob-marley-album/assets/n1.avif"
  },
  {
    title: "Things We Lost In The Fire",
    artist: "Bastille",
    album: "Soul",
    date: "2027-07-16T00:00:00",
    duration: "04:05",
    urlSong: "https://20essentials.github.io/bastille-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/bastille-ost/assets/n1.avif"
  },
  {
    title: "Rebel Yell",
    artist: "Billy Idol",
    album: "Soul",
    date: "2027-07-17T00:00:00",
    duration: "04:45",
    urlSong: "https://20essentials.github.io/billy-idol-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/billy-idol-soundtrack/assets/n2.avif"
  },
  {
    title: "Iron Man",
    artist: "Black Sabbath",
    album: "Soul",
    date: "2027-07-18T00:00:00",
    duration: "05:53",
    urlSong: "https://20essentials.github.io/black-sabbath-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/black-sabbath-band/assets/n1.avif"
  },
  {
    title: "Chit Chat",
    artist: "Beach Weather",
    album: "Soul",
    date: "2027-07-19T00:00:00",
    duration: "03:21",
    urlSong: "https://20essentials.github.io/beach-weather-soundtrack/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/beach-weather-soundtrack/assets/n2.avif"
  },
  {
    title: "Heart Of Glass",
    artist: "Blondie",
    album: "Soul",
    date: "2027-07-20T00:00:00",
    duration: "03:43",
    urlSong: "https://20essentials.github.io/blondie-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/blondie-soundtrack/assets/n1.avif"
  }
];
const __vite_glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: soul
}, Symbol.toStringTag, { value: "Module" }));
const soulpop = [
  {
    title: "Black",
    artist: "Pearl Jam",
    album: "Soul Pop",
    date: "2027-04-01T00:00:00",
    duration: "05:36",
    urlSong: "https://20essentials.github.io/pearl-jam-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/pearl-jam-ost/assets/n1.avif"
  },
  {
    title: "Float On",
    artist: "Modest Mouse",
    album: "Soul Pop",
    date: "2027-04-02T00:00:00",
    duration: "03:33",
    urlSong: "https://20essentials.github.io/modest-mouse-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/modest-mouse-soundtrack/assets/n1.avif"
  },
  {
    title: "Zenaku Flute Music",
    artist: "Power Rangers Wild Force",
    album: "Soul Pop",
    date: "2027-04-03T00:00:00",
    duration: "02:40",
    urlSong: "https://20essentials.github.io/power-rangers-wild-force-ost/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/power-rangers-wild-force-ost/assets/n1.avif"
  },
  {
    title: "Express Yourself",
    artist: "Madonna",
    album: "Soul Pop",
    date: "2027-04-04T00:00:00",
    duration: "04:59",
    urlSong: "https://20essentials.github.io/madonna-album/songs/n13.mp3",
    urlPoster: "https://20essentials.github.io/madonna-album/assets/n1.avif"
  },
  {
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    album: "Soul Pop",
    date: "2027-04-05T00:00:00",
    duration: "05:18",
    urlSong: "https://20essentials.github.io/pink-floyd-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/pink-floyd-band/assets/n1.avif"
  },
  {
    title: "West End Girls",
    artist: "Pet Shop Boys",
    album: "Soul Pop",
    date: "2027-04-06T00:00:00",
    duration: "04:02",
    urlSong: "https://20essentials.github.io/pet-shop-boys-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/pet-shop-boys-band/assets/n3.avif"
  },
  {
    title: "Stop Crying Your Heart",
    artist: "Oasis",
    album: "Soul Pop",
    date: "2027-04-07T00:00:00",
    duration: "04:51",
    urlSong: "https://20essentials.github.io/oasis-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/oasis-ost/assets/n1.avif"
  },
  {
    title: "Anybody Listening",
    artist: "Queensryche",
    album: "Soul Pop",
    date: "2027-04-08T00:00:00",
    duration: "06:22",
    urlSong: "https://20essentials.github.io/queensryche-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/queensryche-band/assets/n1.avif"
  },
  {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "Soul Pop",
    date: "2027-04-09T00:00:00",
    duration: "05:54",
    urlSong: "https://20essentials.github.io/queen-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/queen-band/assets/n1.avif"
  },
  {
    title: "Glorious",
    artist: "Macklemore",
    album: "Soul Pop",
    date: "2027-04-10T00:00:00",
    duration: "03:38",
    urlSong: "https://20essentials.github.io/macklemore-soundtrack/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/macklemore-soundtrack/assets/n1.avif"
  },
  {
    title: "Salvation",
    artist: "Rancid",
    album: "Soul Pop",
    date: "2027-04-11T00:00:00",
    duration: "02:48",
    urlSong: "https://20essentials.github.io/rancid-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/rancid-ost/assets/n1.avif"
  },
  {
    title: "Spirit Of Radio",
    artist: "Rush",
    album: "Soul Pop",
    date: "2027-04-12T00:00:00",
    duration: "05:10",
    urlSong: "https://20essentials.github.io/rush-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/rush-ost/assets/n2.avif"
  },
  {
    title: "Only Girl",
    artist: "Rihanna",
    album: "Soul Pop",
    date: "2027-04-13T00:00:00",
    duration: "03:55",
    urlSong: "https://20essentials.github.io/rihanna-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/rihanna-ost/assets/n1.avif"
  },
  {
    title: "Rinzler",
    artist: "Tron",
    album: "Soul Pop",
    date: "2027-04-14T00:00:00",
    duration: "02:17",
    urlSong: "https://20essentials.github.io/tron-soundtrack/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/tron-soundtrack/assets/n1.avif"
  },
  {
    title: "Dreamwalker",
    artist: "Tony Igy",
    album: "Soul Pop",
    date: "2027-04-15T00:00:00",
    duration: "06:09",
    urlSong: "https://20essentials.github.io/tony-igy-soundtrack/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/tony-igy-soundtrack/assets/n1.avif"
  },
  {
    title: "I Can Talk",
    artist: "Two Door Cinema Club",
    album: "Soul Pop",
    date: "2027-04-16T00:00:00",
    duration: "02:50",
    urlSong: "https://20essentials.github.io/two-door-cinema-club-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/two-door-cinema-club-band/assets/n1.avif"
  },
  {
    title: "Borderline",
    artist: "Madonna",
    album: "Soul Pop",
    date: "2027-04-17T00:00:00",
    duration: "03:58",
    urlSong: "https://20essentials.github.io/madonna-album/songs/n15.mp3",
    urlPoster: "https://20essentials.github.io/madonna-album/assets/n2.avif"
  },
  {
    title: "Shout",
    artist: "Tears For Fears",
    album: "Soul Pop",
    date: "2027-04-18T00:00:00",
    duration: "05:59",
    urlSong: "https://20essentials.github.io/tears-for-fears-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/tears-for-fears-band/assets/n1.avif"
  },
  {
    title: "Rosanna",
    artist: "Toto",
    album: "Soul Pop",
    date: "2027-04-19T00:00:00",
    duration: "05:31",
    urlSong: "https://20essentials.github.io/toto-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/toto-band/assets/n1.avif"
  },
  {
    title: "Baby",
    artist: "The Oral Cigarretes",
    album: "Soul Pop",
    date: "2027-04-20T00:00:00",
    duration: "04:54",
    urlSong: "https://20essentials.github.io/the-oral-cigarretes/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/the-oral-cigarretes/assets/n1.avif"
  }
];
const __vite_glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: soulpop
}, Symbol.toStringTag, { value: "Module" }));
const spanishpop = [
  {
    title: "A Un Minuto De Ti",
    artist: "Duncan Dhu",
    album: "Spanish Pop",
    date: "2025-01-01T00:00:00",
    duration: "03:51",
    urlSong: "https://20essentials.github.io/duncan-dhu-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/duncan-dhu-ost/assets/n1.avif"
  },
  {
    title: "Quisiera",
    artist: "Cnco",
    album: "Spanish Pop",
    date: "2025-01-02T00:00:00",
    duration: "03:05",
    urlSong: "https://20essentials.github.io/cnco-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/cnco-band/assets/n1.avif"
  },
  {
    title: "Amores que Acaban",
    artist: "Avenida Larco",
    album: "Spanish Pop",
    date: "2025-01-03T00:00:00",
    duration: "03:48",
    urlSong: "https://20essentials.github.io/avenida-larco/songs/n17.mp3",
    urlPoster: "https://20essentials.github.io/avenida-larco/assets/n1.avif"
  },
  {
    title: "Linda",
    artist: "Miguel Bosé",
    album: "Spanish Pop",
    date: "2025-01-04T00:00:00",
    duration: "03:49",
    urlSong: "https://20essentials.github.io/miguel-bose/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/miguel-bose/assets/n1.avif"
  },
  {
    title: "Vamos a Tocache",
    artist: "Miki González",
    album: "Spanish Pop",
    date: "2025-01-05T00:00:00",
    duration: "04:09",
    urlSong: "https://20essentials.github.io/miki-gonzales/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/miki-gonzales/assets/n1.avif"
  },
  {
    title: "Celos",
    artist: "Camilo Sesto",
    album: "Spanish Pop",
    date: "2025-01-06T00:00:00",
    duration: "04:15",
    urlSong: "https://20essentials.github.io/camilo-sesto-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/camilo-sesto-ost/assets/n1.avif"
  },
  {
    title: "Como Te Deseo",
    artist: "Maná",
    album: "Spanish Pop",
    date: "2025-01-07T00:00:00",
    duration: "04:29",
    urlSong: "https://20essentials.github.io/mana-band/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/mana-band/assets/n1.avif"
  },
  {
    title: "Sexo",
    artist: "Los Prisioneros",
    album: "Spanish Pop",
    date: "2025-01-08T00:00:00",
    duration: "04:47",
    urlSong: "https://20essentials.github.io/los-prisioneros-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/los-prisioneros-band/assets/n1.avif"
  },
  {
    title: "Una Estrella Soy",
    artist: "Barbie",
    album: "Spanish Pop",
    date: "2025-01-09T00:00:00",
    duration: "02:53",
    urlSong: "https://20essentials.github.io/barbie-soundtrack/songs/n19.mp3",
    urlPoster: "https://20essentials.github.io/barbie-soundtrack/assets/n1.avif"
  },
  {
    title: "Ahora Soy",
    artist: "Barbie",
    album: "Spanish Pop",
    date: "2025-01-10T00:00:00",
    duration: "02:55",
    urlSong: "https://20essentials.github.io/barbie-soundtrack/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/barbie-soundtrack/assets/n2.avif"
  },
  {
    title: "La Noche de Tu Ausencia",
    artist: "El Zambo Cavero",
    album: "Spanish Pop",
    date: "2025-01-11T00:00:00",
    duration: "03:50",
    urlSong: "https://20essentials.github.io/zambo-cavero/songs/n13.mp3",
    urlPoster: "https://20essentials.github.io/zambo-cavero/assets/n1.avif"
  },
  {
    title: "Show Final",
    artist: "Barbie",
    album: "Spanish Pop",
    date: "2025-01-12T00:00:00",
    duration: "03:20",
    urlSong: "https://20essentials.github.io/barbie-soundtrack/songs/n20.mp3",
    urlPoster: "https://20essentials.github.io/barbie-soundtrack/assets/n3.avif"
  },
  {
    title: "Amante Bandido",
    artist: "Avenida Larco",
    album: "Spanish Pop",
    date: "2025-01-13T00:00:00",
    duration: "02:12",
    urlSong: "https://20essentials.github.io/avenida-larco/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/avenida-larco/assets/n3.avif"
  },
  {
    title: "Cuentame",
    artist: "Arena Hash",
    album: "Spanish Pop",
    date: "2025-01-14T00:00:00",
    duration: "03:58",
    urlSong: "https://20essentials.github.io/arena-hash-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/arena-hash-band/assets/n2.avif"
  },
  {
    title: "Querida",
    artist: "Juan Gabriel",
    album: "Spanish Pop",
    date: "2025-01-15T00:00:00",
    duration: "05:10",
    urlSong: "https://20essentials.github.io/juan-gabriel-ost/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/juan-gabriel-ost/assets/n2.avif"
  },
  {
    title: "Cosas del Amor",
    artist: "Ana Gabriel",
    album: "Spanish Pop",
    date: "2025-01-16T00:00:00",
    duration: "04:13",
    urlSong: "https://20essentials.github.io/ana-gabriel-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/ana-gabriel-ost/assets/n1.avif"
  },
  {
    title: "Debo Saber",
    artist: "Barbie",
    album: "Spanish Pop",
    date: "2025-01-17T00:00:00",
    duration: "04:06",
    urlSong: "https://20essentials.github.io/barbie-soundtrack/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/barbie-soundtrack/assets/n4.avif"
  },
  {
    title: "Lo Peor de Todo",
    artist: "Rio",
    album: "Spanish Pop",
    date: "2025-01-18T00:00:00",
    duration: "04:03",
    urlSong: "https://20essentials.github.io/rio-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/rio-ost/assets/n1.avif"
  },
  {
    title: "Un Día Sin Ti",
    artist: "Roxette",
    album: "Spanish Pop",
    date: "2025-01-19T00:00:00",
    duration: "04:25",
    urlSong: "https://20essentials.github.io/roxette-in-spanish/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/roxette-in-spanish/assets/n1.avif"
  },
  {
    title: "El Noa Noa",
    artist: "Juan Gabriel",
    album: "Spanish Pop",
    date: "2025-01-20T00:00:00",
    duration: "04:35",
    urlSong: "https://20essentials.github.io/juan-gabriel-ost/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/juan-gabriel-ost/assets/n3.avif"
  }
];
const __vite_glob_0_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: spanishpop
}, Symbol.toStringTag, { value: "Module" }));
const surfrock = [
  {
    title: "Clocks",
    artist: "Coldplay",
    album: "Surf Rock",
    date: "2025-12-01T00:00:00",
    duration: "05:08",
    urlSong: "https://20essentials.github.io/coldplay/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/coldplay/assets/n1.avif"
  },
  {
    title: "Sounds like a Melody",
    artist: "Alphaville",
    album: "Surf Rock",
    date: "2025-12-02T00:00:00",
    duration: "03:31",
    urlSong: "https://20essentials.github.io/alphaville-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/alphaville-ost/assets/n1.avif"
  },
  {
    title: "Hello I'm Johnny Cash",
    artist: "Alabama",
    album: "Surf Rock",
    date: "2025-12-03T00:00:00",
    duration: "04:29",
    urlSong: "https://20essentials.github.io/alabama-3-soundtrack/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/alabama-3-soundtrack/assets/n1.avif"
  },
  {
    title: "Black",
    artist: "Breaking Bad",
    album: "Surf Rock",
    date: "2025-12-04T00:00:00",
    duration: "03:31",
    urlSong: "https://20essentials.github.io/breaking-bad/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/breaking-bad/assets/n1.avif"
  },
  {
    title: "Big in Japan",
    artist: "Alphaville",
    album: "Surf Rock",
    date: "2025-12-05T00:00:00",
    duration: "04:44",
    urlSong: "https://20essentials.github.io/alphaville-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/alphaville-ost/assets/n2.avif"
  },
  {
    title: "Smoke on The Water",
    artist: "Deep Purple",
    album: "Surf Rock",
    date: "2025-12-06T00:00:00",
    duration: "05:40",
    urlSong: "https://20essentials.github.io/deep-purple-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/deep-purple-band/assets/n1.avif"
  },
  {
    title: "Canary Bay",
    artist: "Indochine",
    album: "Surf Rock",
    date: "2025-12-07T00:00:00",
    duration: "03:51",
    urlSong: "https://20essentials.github.io/indochine-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/indochine-band/assets/n1.avif"
  },
  {
    title: "Fall To Pieces",
    artist: "Velvet Revolver",
    album: "Surf Rock",
    date: "2025-12-08T00:00:00",
    duration: "04:27",
    urlSong: "https://20essentials.github.io/velvet-revolver-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/velvet-revolver-band/assets/n1.avif"
  },
  {
    title: "Whatever It Takes",
    artist: "Imagine Dragons",
    album: "Surf Rock",
    date: "2025-12-09T00:00:00",
    duration: "03:17",
    urlSong: "https://20essentials.github.io/imagine--dragons/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/imagine--dragons/assets/n1.avif"
  },
  {
    title: "Dark Horse",
    artist: "Katy Perry",
    album: "Surf Rock",
    date: "2025-12-10T00:00:00",
    duration: "03:33",
    urlSong: "https://20essentials.github.io/katy-perry-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/katy-perry-ost/assets/n1.avif"
  },
  {
    title: "Woman",
    artist: "Wolfmother",
    album: "Surf Rock",
    date: "2025-12-11T00:00:00",
    duration: "02:56",
    urlSong: "https://20essentials.github.io/wolfmother-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/wolfmother-band/assets/n1.avif"
  },
  {
    title: "Island in The Sun",
    artist: "Weezer",
    album: "Surf Rock",
    date: "2025-12-12T00:00:00",
    duration: "03:30",
    urlSong: "https://20essentials.github.io/weezer-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/weezer-band/assets/n1.avif"
  },
  {
    title: "Bloody Mary",
    artist: "Lady Gaga",
    album: "Surf Rock",
    date: "2025-12-13T00:00:00",
    duration: "05:03",
    urlSong: "https://20essentials.github.io/lady-gaga-ost/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/lady-gaga-ost/assets/n1.avif"
  },
  {
    title: "71 Charger",
    artist: "Loreen",
    album: "Surf Rock",
    date: "2025-12-14T00:00:00",
    duration: "04:09",
    urlSong: "https://20essentials.github.io/loreen/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/loreen/assets/n1.avif"
  },
  {
    title: "Lamento Boliviano",
    artist: "Los Enanitos Verdes",
    album: "Surf Rock",
    date: "2025-12-15T00:00:00",
    duration: "03:43",
    urlSong: "https://20essentials.github.io/los-enanitos-verdes-band/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/los-enanitos-verdes-band/assets/n1.avif"
  },
  {
    title: "Sweet Dreams",
    artist: "Marilyn Manson",
    album: "Surf Rock",
    date: "2025-12-16T00:00:00",
    duration: "04:57",
    urlSong: "https://20essentials.github.io/marilyn-manson-soundtrack/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/marilyn-manson-soundtrack/assets/n1.avif"
  },
  {
    title: "En Mi Local Funcionaba (Orchestral)",
    artist: "Manz",
    album: "Surf Rock",
    date: "2025-12-17T00:00:00",
    duration: "01:44",
    urlSong: "https://20essentials.github.io/manz/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/manz/assets/n1.avif"
  },
  {
    title: "Isn't It True",
    artist: "Mazzy Star",
    album: "Surf Rock",
    date: "2025-12-18T00:00:00",
    duration: "03:11",
    urlSong: "https://20essentials.github.io/mazzy-star/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/mazzy-star/assets/n1.avif"
  },
  {
    title: "Virus",
    artist: "Martin Garrix",
    album: "Surf Rock",
    date: "2025-12-19T00:00:00",
    duration: "03:15",
    urlSong: "https://20essentials.github.io/martin-garrix-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/martin-garrix-soundtrack/assets/n1.avif"
  },
  {
    title: "Down Under",
    artist: "Men at Work",
    album: "Surf Rock",
    date: "2025-12-20T00:00:00",
    duration: "03:39",
    urlSong: "https://20essentials.github.io/men-at-work-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/men-at-work-band/assets/n1.avif"
  }
];
const __vite_glob_0_42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: surfrock
}, Symbol.toStringTag, { value: "Module" }));
const synthpop = [
  {
    title: "Nekozilla",
    artist: "Different Heaven",
    album: "Synthpop",
    date: "2026-08-01T00:00:00",
    duration: "02:46",
    urlSong: "https://20essentials.github.io/different-heaven-album/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/different-heaven-album/assets/n1.avif"
  },
  {
    title: "Waterfall",
    artist: "Bag Raiders",
    album: "Synthpop",
    date: "2026-08-02T00:00:00",
    duration: "03:53",
    urlSong: "https://20essentials.github.io/bag-raiders/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/bag-raiders/assets/n1.avif"
  },
  {
    title: "Why We Lose",
    artist: "Cartoon",
    album: "Synthpop",
    date: "2026-08-03T00:00:00",
    duration: "03:33",
    urlSong: "https://20essentials.github.io/cartoon-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/cartoon-soundtrack/assets/n1.avif"
  },
  {
    title: "Safe And Sound",
    artist: "Different Heaven",
    album: "Synthpop",
    date: "2026-08-04T00:00:00",
    duration: "03:24",
    urlSong: "https://20essentials.github.io/different-heaven-album/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/different-heaven-album/assets/n2.avif"
  },
  {
    title: "Money For Nothing",
    artist: "Dire Straits",
    album: "Synthpop",
    date: "2026-08-05T00:00:00",
    duration: "08:22",
    urlSong: "https://20essentials.github.io/dire-straits-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/dire-straits-ost/assets/n1.avif"
  },
  {
    title: "Freeborn Man",
    artist: "Outlaws",
    album: "Synthpop",
    date: "2026-08-06T00:00:00",
    duration: "04:47",
    urlSong: "https://20essentials.github.io/outlaws-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/outlaws-band/assets/n1.avif"
  },
  {
    title: "This One's For You",
    artist: "David Guetta",
    album: "Synthpop",
    date: "2026-08-07T00:00:00",
    duration: "03:28",
    urlSong: "https://20essentials.github.io/david-guetta-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/david-guetta-ost/assets/n1.avif"
  },
  {
    title: "Armageddon It",
    artist: "Def Leppard",
    album: "Synthpop",
    date: "2026-08-08T00:00:00",
    duration: "05:22",
    urlSong: "https://20essentials.github.io/def-leppard-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/def-leppard-band/assets/n1.avif"
  },
  {
    title: "Forty Below",
    artist: "Defqwop",
    album: "Synthpop",
    date: "2026-08-09T00:00:00",
    duration: "03:38",
    urlSong: "https://20essentials.github.io/defqwop-album/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/defqwop-album/assets/n1.avif"
  },
  {
    title: "Take A Chance",
    artist: "Flume",
    album: "Synthpop",
    date: "2026-08-10T00:00:00",
    duration: "05:28",
    urlSong: "https://20essentials.github.io/flume/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/flume/assets/n1.avif"
  },
  {
    title: "Richest Man In The World",
    artist: "Hilary Cousins",
    album: "Synthpop",
    date: "2026-08-11T00:00:00",
    duration: "04:03",
    urlSong: "https://20essentials.github.io/hilary-cousins/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/hilary-cousins/assets/n1.avif"
  },
  {
    title: "Heartbeat",
    artist: "Vicetone",
    album: "Synthpop",
    date: "2026-08-12T00:00:00",
    duration: "04:41",
    urlSong: "https://20essentials.github.io/vicetone-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/vicetone-band/assets/n1.avif"
  },
  {
    title: "Radioactive",
    artist: "Imagine Dragons",
    album: "Synthpop",
    date: "2026-08-13T00:00:00",
    duration: "03:05",
    urlSong: "https://20essentials.github.io/imagine--dragons/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/imagine--dragons/assets/n2.avif"
  },
  {
    title: "I See You (Oliver Remix)",
    artist: "Jutty Ranx",
    album: "Synthpop",
    date: "2026-08-14T00:00:00",
    duration: "04:49",
    urlSong: "https://20essentials.github.io/jutty-ranx/songs/n16.mp3",
    urlPoster: "https://20essentials.github.io/jutty-ranx/assets/n4.avif"
  },
  {
    title: "A New Adventure",
    artist: "JJD",
    album: "Synthpop",
    date: "2026-08-15T00:00:00",
    duration: "03:27",
    urlSong: "https://20essentials.github.io/jjd/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/jjd/assets/n4.avif"
  },
  {
    title: "Power",
    artist: "Kanye West",
    album: "Synthpop",
    date: "2026-08-16T00:00:00",
    duration: "04:52",
    urlSong: "https://20essentials.github.io/kanye-west/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/kanye-west/assets/n1.avif"
  },
  {
    title: "Hot N Cold",
    artist: "Katy Perry",
    album: "Synthpop",
    date: "2026-08-17T00:00:00",
    duration: "03:47",
    urlSong: "https://20essentials.github.io/katy-perry-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/katy-perry-ost/assets/n4.avif"
  },
  {
    title: "Undone",
    artist: "Weezer",
    album: "Synthpop",
    date: "2026-08-18T00:00:00",
    duration: "05:05",
    urlSong: "https://20essentials.github.io/weezer-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/weezer-band/assets/n4.avif"
  },
  {
    title: "Just Dance",
    artist: "Lady Gaga",
    album: "Synthpop",
    date: "2026-08-19T00:00:00",
    duration: "04:12",
    urlSong: "https://20essentials.github.io/lady-gaga-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/lady-gaga-ost/assets/n4.avif"
  },
  {
    title: "Wake",
    artist: "Le Castlevania",
    album: "Synthpop",
    date: "2026-08-20T00:00:00",
    duration: "03:59",
    urlSong: "https://20essentials.github.io/le-castle-vania-ost-/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/le-castle-vania-ost-/assets/n4.avif"
  }
];
const __vite_glob_0_43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: synthpop
}, Symbol.toStringTag, { value: "Module" }));
const synthwave = [
  {
    title: "Saved",
    artist: "Adieu Aru",
    album: "Synthwave",
    date: "2025-06-01T00:00:00",
    duration: "04:33",
    urlSong: "https://20essentials.github.io/adieu-aru/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/adieu-aru/assets/n1.avif"
  },
  {
    title: "Devil",
    artist: "Barren Gates",
    album: "Synthwave",
    date: "2025-06-02T00:00:00",
    duration: "02:56",
    urlSong: "https://20essentials.github.io/barren-gates-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/barren-gates-ost/assets/n1.avif"
  },
  {
    title: "Eva 2",
    artist: "Blueberry",
    album: "Synthwave",
    date: "2025-06-03T00:00:00",
    duration: "02:10",
    urlSong: "https://20essentials.github.io/blueberry-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/blueberry-ost/assets/n1.avif"
  },
  {
    title: "I Remember You",
    artist: "Cartoon",
    album: "Synthwave",
    date: "2025-06-04T00:00:00",
    duration: "03:36",
    urlSong: "https://20essentials.github.io/cartoon-soundtrack/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/cartoon-soundtrack/assets/n1.avif"
  },
  {
    title: "Glaring You",
    artist: "DLS 2020",
    album: "Synthwave",
    date: "2025-06-05T00:00:00",
    duration: "03:58",
    urlSong: "https://20essentials.github.io/dls-2020/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/dls-2020/assets/n1.avif"
  },
  {
    title: "Shadows of The Night",
    artist: "Dj Bobo",
    album: "Synthwave",
    date: "2025-06-06T00:00:00",
    duration: "06:03",
    urlSong: "https://20essentials.github.io/dj-bobo/songs/n11.mp3",
    urlPoster: "https://20essentials.github.io/dj-bobo/assets/n1.avif"
  },
  {
    title: "Crystals",
    artist: "Blueberry",
    album: "Synthwave",
    date: "2025-06-07T00:00:00",
    duration: "03:38",
    urlSong: "https://20essentials.github.io/blueberry-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/blueberry-ost/assets/n2.avif"
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Synthwave",
    date: "2025-06-08T00:00:00",
    duration: "04:18",
    urlSong: "https://20essentials.github.io/dua-lipa-ost/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/dua-lipa-ost/assets/n1.avif"
  },
  {
    title: "Arcade",
    artist: "Duncan Laurence",
    album: "Synthwave",
    date: "2025-06-09T00:00:00",
    duration: "03:05",
    urlSong: "https://20essentials.github.io/duncan-laurence-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/duncan-laurence-ost/assets/n1.avif"
  },
  {
    title: "Mountain At My Gates",
    artist: "Foals",
    album: "Synthwave",
    date: "2025-06-10T00:00:00",
    duration: "04:11",
    urlSong: "https://20essentials.github.io/foals/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/foals/assets/n1.avif"
  },
  {
    title: "Criminal",
    artist: "Fiona Apple",
    album: "Synthwave",
    date: "2025-06-11T00:00:00",
    duration: "05:43",
    urlSong: "https://20essentials.github.io/fiona-apple/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/fiona-apple/assets/n1.avif"
  },
  {
    title: "Say It",
    artist: "Flume",
    album: "Synthwave",
    date: "2025-06-12T00:00:00",
    duration: "04:22",
    urlSong: "https://20essentials.github.io/flume/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/flume/assets/n1.avif"
  },
  {
    title: "Before Times Leaves You",
    artist: "Hello Fiasco",
    album: "Synthwave",
    date: "2025-06-13T00:00:00",
    duration: "03:14",
    urlSong: "https://20essentials.github.io/hello-fiasco/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/hello-fiasco/assets/n1.avif"
  },
  {
    title: "Interstellar Theme",
    artist: "Hans Zimmer",
    album: "Synthwave",
    date: "2025-06-14T00:00:00",
    duration: "04:04",
    urlSong: "https://20essentials.github.io/hans-zimmer/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/hello-fiasco/assets/n4.avif"
  },
  {
    title: "Third of Way",
    artist: "Fleet Foxes",
    album: "Synthwave",
    date: "2025-06-15T00:00:00",
    duration: "08:52",
    urlSong: "https://20essentials.github.io/fleet-foxes/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/fleet-foxes/assets/n1.avif"
  },
  {
    title: "Whistle",
    artist: "Hoodie Forester",
    album: "Synthwave",
    date: "2025-06-16T00:00:00",
    duration: "02:05",
    urlSong: "https://20essentials.github.io/hoodie-forester-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/hoodie-forester-ost/assets/n1.avif"
  },
  {
    title: "In Joy in Sorrow",
    artist: "Him",
    album: "Synthwave",
    date: "2025-06-17T00:00:00",
    duration: "03:59",
    urlSong: "https://20essentials.github.io/him/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/him/assets/n1.avif"
  },
  {
    title: "These Memories",
    artist: "Hollow Coves",
    album: "Synthwave",
    date: "2025-06-18T00:00:00",
    duration: "05:13",
    urlSong: "https://20essentials.github.io/hollow-coves/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/hollow-coves/assets/n1.avif"
  },
  {
    title: "ElectraStar",
    artist: "Indochine",
    album: "Synthwave",
    date: "2025-06-19T00:00:00",
    duration: "05:31",
    urlSong: "https://20essentials.github.io/indochine/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/indochine/assets/n1.avif"
  },
  {
    title: "Walk Thru Fire",
    artist: "Vicetone",
    album: "Synthwave",
    date: "2025-06-20T00:00:00",
    duration: "03:14",
    urlSong: "https://20essentials.github.io/vicetone-ost/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/vicetone-ost/assets/n1.avif"
  }
];
const __vite_glob_0_44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: synthwave
}, Symbol.toStringTag, { value: "Module" }));
const techno = [
  {
    title: "End Of Line",
    artist: "Tron",
    album: "Techno",
    date: "2027-10-01T00:00:00",
    duration: "02:36",
    urlSong: "https://20essentials.github.io/tron-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/tron-soundtrack/assets/n4.avif"
  },
  {
    title: "Brain Damage",
    artist: "Pink Floyd",
    album: "Techno",
    date: "2027-10-02T00:00:00",
    duration: "03:50",
    urlSong: "https://20essentials.github.io/pink-floyd-band/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/pink-floyd-band/assets/n4.avif"
  },
  {
    title: "Rhythm Is A Dancer",
    artist: "Snap",
    album: "Techno",
    date: "2027-10-03T00:00:00",
    duration: "03:41",
    urlSong: "https://20essentials.github.io/snap-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/snap-ost/assets/n1.avif"
  },
  {
    title: "The Less I Know The Better",
    artist: "Tame Impala",
    album: "Techno",
    date: "2027-10-04T00:00:00",
    duration: "03:37",
    urlSong: "https://20essentials.github.io/tame-impala-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/tame-impala-ost/assets/n2.avif"
  },
  {
    title: "Search And Destroy",
    artist: "Thirty Seconds To Mars",
    album: "Techno",
    date: "2027-10-05T00:00:00",
    duration: "05:38",
    urlSong: "https://20essentials.github.io/thirty-seconds-to-mars-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/thirty-seconds-to-mars-band/assets/n2.avif"
  },
  {
    title: "Eros And Apollo",
    artist: "Studio Killers",
    album: "Techno",
    date: "2027-10-06T00:00:00",
    duration: "03:28",
    urlSong: "https://20essentials.github.io/studio-killers-ost/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/studio-killers-ost/assets/n3.avif"
  },
  {
    title: "Waiting",
    artist: "Unknown Brain",
    album: "Techno",
    date: "2027-10-07T00:00:00",
    duration: "03:19",
    urlSong: "https://20essentials.github.io/unknown-brain-soundtrack/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/unknown-brain-soundtrack/assets/n1.avif"
  },
  {
    title: "Roots Radicals",
    artist: "Rancid",
    album: "Techno",
    date: "2027-10-08T00:00:00",
    duration: "02:47",
    urlSong: "https://20essentials.github.io/rancid-ost/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/rancid-ost/assets/n3.avif"
  },
  {
    title: "Reactive",
    artist: "Wiguez And Vizzen",
    album: "Techno",
    date: "2027-10-09T00:00:00",
    duration: "02:32",
    urlSong: "https://20essentials.github.io/wiguez-and-vizzen/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/wiguez-and-vizzen/assets/n2.avif"
  },
  {
    title: "Witheout",
    artist: "Warpaint",
    album: "Techno",
    date: "2027-10-10T00:00:00",
    duration: "04:42",
    urlSong: "https://20essentials.github.io/warpaint-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/warpaint-band/assets/n2.avif"
  },
  {
    title: "The Heat",
    artist: "Tony Igy",
    album: "Techno",
    date: "2027-10-11T00:00:00",
    duration: "05:24",
    urlSong: "https://20essentials.github.io/tony-igy-soundtrack/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/tony-igy-soundtrack/assets/n2.avif"
  },
  {
    title: "Making Plans For Nigel",
    artist: "Xtc",
    album: "Techno",
    date: "2027-10-12T00:00:00",
    duration: "04:15",
    urlSong: "https://20essentials.github.io/xtc-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/xtc-band/assets/n2.avif"
  },
  {
    title: "Buzz Saw",
    artist: "Xiu Xiu",
    album: "Techno",
    date: "2027-10-13T00:00:00",
    duration: "03:01",
    urlSong: "https://20essentials.github.io/xiu-xiu-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/xiu-xiu-band/assets/n1.avif"
  },
  {
    title: "Overture",
    artist: "Tron",
    album: "Techno",
    date: "2027-10-14T00:00:00",
    duration: "02:28",
    urlSong: "https://20essentials.github.io/tron-soundtrack/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/tron-soundtrack/assets/n2.avif"
  },
  {
    title: "Mary Had A Little Boy",
    artist: "Snap",
    album: "Techno",
    date: "2027-10-15T00:00:00",
    duration: "03:38",
    urlSong: "https://20essentials.github.io/snap-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/snap-ost/assets/n2.avif"
  },
  {
    title: "Don't Go",
    artist: "Yazoo",
    album: "Techno",
    date: "2027-10-16T00:00:00",
    duration: "03:11",
    urlSong: "https://20essentials.github.io/yazoo-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/yazoo-band/assets/n3.avif"
  },
  {
    title: "I Ain't Done Wrong",
    artist: "Yardbirds",
    album: "Techno",
    date: "2027-10-17T00:00:00",
    duration: "03:36",
    urlSong: "https://20essentials.github.io/yardbirds-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/yardbirds-band/assets/n2.avif"
  },
  {
    title: "Vletrmx",
    artist: "Autechre",
    album: "Techno",
    date: "2027-10-18T00:00:00",
    duration: "08:27",
    urlSong: "https://20essentials.github.io/autechre-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/autechre-band/assets/n2.avif"
  },
  {
    title: "Sweet Sixteen",
    artist: "Billy Idol",
    album: "Techno",
    date: "2027-10-19T00:00:00",
    duration: "04:16",
    urlSong: "https://20essentials.github.io/billy-idol-soundtrack/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/billy-idol-soundtrack/assets/n2.avif"
  },
  {
    title: "Song 2",
    artist: "Blur",
    album: "Techno",
    date: "2027-10-20T00:00:00",
    duration: "02:02",
    urlSong: "https://20essentials.github.io/blur-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/blur-band/assets/n3.avif"
  }
];
const __vite_glob_0_45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: techno
}, Symbol.toStringTag, { value: "Module" }));
const vaporwave = [
  {
    title: "Little Sister",
    artist: "Your Favorite Enemies",
    album: "Vaporwave",
    date: "2027-08-01T00:00:00",
    duration: "04:38",
    urlSong: "https://20essentials.github.io/your-favorite-enemies-band/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/your-favorite-enemies-band/assets/n1.avif"
  },
  {
    title: "Nada",
    artist: "Zoe",
    album: "Vaporwave",
    date: "2027-08-02T00:00:00",
    duration: "05:25",
    urlSong: "https://20essentials.github.io/zoe-ost/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/zoe-ost/assets/n1.avif"
  },
  {
    title: "This One's For You",
    artist: "Zara Larsson",
    album: "Vaporwave",
    date: "2027-08-03T00:00:00",
    duration: "03:28",
    urlSong: "https://20essentials.github.io/zara-larsson-soundtrack/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/zara-larsson-soundtrack/assets/n1.avif"
  },
  {
    title: "Mars",
    artist: "Axol",
    album: "Vaporwave",
    date: "2027-08-04T00:00:00",
    duration: "02:56",
    urlSong: "https://20essentials.github.io/axol-soundtrack/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/axol-soundtrack/assets/n2.avif"
  },
  {
    title: "We Don't Know",
    artist: "Ahrix",
    album: "Vaporwave",
    date: "2027-08-05T00:00:00",
    duration: "03:41",
    urlSong: "https://20essentials.github.io/ahrix-soundtrack/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/ahrix-soundtrack/assets/n1.avif"
  },
  {
    title: "Riverside",
    artist: "Agnes Obel",
    album: "Vaporwave",
    date: "2027-08-06T00:00:00",
    duration: "03:48",
    urlSong: "https://20essentials.github.io/agnes-obel-album/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/agnes-obel-album/assets/n3.avif"
  },
  {
    title: "You Got It",
    artist: "Adam Goldman",
    album: "Vaporwave",
    date: "2027-08-07T00:00:00",
    duration: "02:50",
    urlSong: "https://20essentials.github.io/adam-goldman-album/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/adam-goldman-album/assets/n1.avif"
  },
  {
    title: "Burning",
    artist: "Yeah Yeah Yeahs",
    album: "Vaporwave",
    date: "2027-08-08T00:00:00",
    duration: "04:05",
    urlSong: "https://20essentials.github.io/yeah-yeah-yeahs-band/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/yeah-yeah-yeahs-band/assets/n2.avif"
  },
  {
    title: "Bike",
    artist: "Autechre",
    album: "Vaporwave",
    date: "2027-08-09T00:00:00",
    duration: "08:00",
    urlSong: "https://20essentials.github.io/autechre-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/autechre-band/assets/n1.avif"
  },
  {
    title: "No Woman No Cry",
    artist: "Bob Marley",
    album: "Vaporwave",
    date: "2027-08-10T00:00:00",
    duration: "07:00",
    urlSong: "https://20essentials.github.io/bob-marley-album/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/bob-marley-album/assets/n2.avif"
  },
  {
    title: "Flaws",
    artist: "Bastille",
    album: "Vaporwave",
    date: "2027-08-11T00:00:00",
    duration: "03:50",
    urlSong: "https://20essentials.github.io/bastille-ost/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/bastille-ost/assets/n2.avif"
  },
  {
    title: "War Pings",
    artist: "Black Sabbath",
    album: "Vaporwave",
    date: "2027-08-12T00:00:00",
    duration: "07:55",
    urlSong: "https://20essentials.github.io/black-sabbath-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/black-sabbath-band/assets/n1.avif"
  },
  {
    title: "Home Movies",
    artist: "Beach Weather",
    album: "Vaporwave",
    date: "2027-08-13T00:00:00",
    duration: "03:48",
    urlSong: "https://20essentials.github.io/beach-weather-soundtrack/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/beach-weather-soundtrack/assets/n1.avif"
  },
  {
    title: "Call Me",
    artist: "Blondie",
    album: "Vaporwave",
    date: "2027-08-14T00:00:00",
    duration: "03:33",
    urlSong: "https://20essentials.github.io/blondie-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/blondie-soundtrack/assets/n2.avif"
  },
  {
    title: "Adam's Song",
    artist: "Blink-182",
    album: "Vaporwave",
    date: "2027-08-15T00:00:00",
    duration: "04:08",
    urlSong: "https://20essentials.github.io/blink-182-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/blink-182-band/assets/n2.avif"
  },
  {
    title: "Love On Top",
    artist: "Beyonce",
    album: "Vaporwave",
    date: "2027-08-16T00:00:00",
    duration: "04:29",
    urlSong: "https://20essentials.github.io/beyonce-album/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/beyonce-album/assets/n2.avif"
  },
  {
    title: "Girls And Boys",
    artist: "Blur",
    album: "Vaporwave",
    date: "2027-08-17T00:00:00",
    duration: "04:19",
    urlSong: "https://20essentials.github.io/blur-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/blur-band/assets/n2.avif"
  },
  {
    title: "Omniverse Ending",
    artist: "Ben 10",
    album: "Vaporwave",
    date: "2027-08-18T00:00:00",
    duration: "00:24",
    urlSong: "https://20essentials.github.io/ben-10-album/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/ben-10-album/assets/n1.avif"
  },
  {
    title: "Kong",
    artist: "Bonobo",
    album: "Vaporwave",
    date: "2027-08-19T00:00:00",
    duration: "03:57",
    urlSong: "https://20essentials.github.io/bonobo-band/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/bonobo-band/assets/n2.avif"
  },
  {
    title: "Los Ageless",
    artist: "Bojack Horseman",
    album: "Vaporwave",
    date: "2027-08-20T00:00:00",
    duration: "03:41",
    urlSong: "https://20essentials.github.io/bojack-horseman-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/bojack-horseman-soundtrack/assets/n2.avif"
  }
];
const __vite_glob_0_46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vaporwave
}, Symbol.toStringTag, { value: "Module" }));
const witchhouse = [
  {
    title: "No Me Destruyas",
    artist: "Zoé",
    album: "Witch House",
    date: "2028-03-01T00:00:00",
    duration: "03:47",
    urlSong: "https://20essentials.github.io/zoe-ost/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/zoe-ost/assets/n4.avif"
  },
  {
    title: "Tgam",
    artist: "Zara Larsson",
    album: "Witch House",
    date: "2028-03-02T00:00:00",
    duration: "02:53",
    urlSong: "https://20essentials.github.io/zara-larsson-soundtrack/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/zara-larsson-soundtrack/assets/n3.avif"
  },
  {
    title: "Left Behin",
    artist: "Ahrix",
    album: "Witch House",
    date: "2028-03-03T00:00:00",
    duration: "03:07",
    urlSong: "https://20essentials.github.io/ahrix-soundtrack/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/ahrix-soundtrack/assets/n2.avif"
  },
  {
    title: "A Track 3",
    artist: "Zoids Chaotic Century",
    album: "Witch House",
    date: "2028-03-04T00:00:00",
    duration: "03:45",
    urlSong: "https://20essentials.github.io/zoids-chaotic-century-ost/songs/n12.mp3",
    urlPoster: "https://20essentials.github.io/zoids-chaotic-century-ost/assets/n3.avif"
  },
  {
    title: "Crazy",
    artist: "Aerosmith",
    album: "Witch House",
    date: "2028-03-05T00:00:00",
    duration: "05:16",
    urlSong: "https://20essentials.github.io/aerosmith-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/aerosmith-band/assets/n2.avif"
  },
  {
    title: "Broken Sleep",
    artist: "Agnes Obel",
    album: "Witch House",
    date: "2028-03-06T00:00:00",
    duration: "04:50",
    urlSong: "https://20essentials.github.io/agnes-obel-album/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/agnes-obel-album/assets/n1.avif"
  },
  {
    title: "One Drop",
    artist: "Bob Marley",
    album: "Witch House",
    date: "2028-03-07T00:00:00",
    duration: "03:53",
    urlSong: "https://20essentials.github.io/bob-marley-album/songs/n10.mp3",
    urlPoster: "https://20essentials.github.io/bob-marley-album/assets/n2.avif"
  },
  {
    title: "Pompeii",
    artist: "Bastille",
    album: "Witch House",
    date: "2028-03-08T00:00:00",
    duration: "03:34",
    urlSong: "https://20essentials.github.io/bastille-ost/songs/n1.mp3",
    urlPoster: "https://20essentials.github.io/bastille-ost/assets/n1.avif"
  },
  {
    title: "Into The Void",
    artist: "Black Sabbath",
    album: "Witch House",
    date: "2028-03-09T00:00:00",
    duration: "06:11",
    urlSong: "https://20essentials.github.io/black-sabbath-band/songs/n9.mp3",
    urlPoster: "https://20essentials.github.io/black-sabbath-band/assets/n2.avif"
  },
  {
    title: "New Skin",
    artist: "Beach Weather",
    album: "Witch House",
    date: "2028-03-10T00:00:00",
    duration: "03:40",
    urlSong: "https://20essentials.github.io/beach-weather-soundtrack/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/beach-weather-soundtrack/assets/n2.avif"
  },
  {
    title: "Maria",
    artist: "Blondie",
    album: "Witch House",
    date: "2028-03-11T00:00:00",
    duration: "04:06",
    urlSong: "https://20essentials.github.io/blondie-soundtrack/songs/n8.mp3",
    urlPoster: "https://20essentials.github.io/blondie-soundtrack/assets/n3.avif"
  },
  {
    title: "Faded Heart",
    artist: "Borns",
    album: "Witch House",
    date: "2028-03-12T00:00:00",
    duration: "03:34",
    urlSong: "https://20essentials.github.io/borns-band/songs/n4.mp3",
    urlPoster: "https://20essentials.github.io/borns-band/assets/n4.avif"
  },
  {
    title: "I Miss You",
    artist: "Blink-182",
    album: "Witch House",
    date: "2028-03-13T00:00:00",
    duration: "03:49",
    urlSong: "https://20essentials.github.io/blink-182-band/songs/n6.mp3",
    urlPoster: "https://20essentials.github.io/blink-182-band/assets/n2.avif"
  },
  {
    title: "Sugar Sweet",
    artist: "Benson Boone",
    album: "Witch House",
    date: "2028-03-14T00:00:00",
    duration: "02:49",
    urlSong: "https://20essentials.github.io/benson-boone-band/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/benson-boone-band/assets/n3.avif"
  },
  {
    title: "Foreplay",
    artist: "Boston",
    album: "Witch House",
    date: "2028-03-15T00:00:00",
    duration: "07:47",
    urlSong: "https://20essentials.github.io/boston-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/boston-band/assets/n2.avif"
  },
  {
    title: "Grenade",
    artist: "Bruno Mars",
    album: "Witch House",
    date: "2028-03-16T00:00:00",
    duration: "03:44",
    urlSong: "https://20essentials.github.io/bruno-mars-album/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/bruno-mars-album/assets/n2.avif"
  },
  {
    title: "Sunlight",
    artist: "Bag Raiders",
    album: "Witch House",
    date: "2028-03-17T00:00:00",
    duration: "04:03",
    urlSong: "https://20essentials.github.io/bag-raiders-band/songs/n3.mp3",
    urlPoster: "https://20essentials.github.io/bag-raiders-band/assets/n2.avif"
  },
  {
    title: "Back In My Life",
    artist: "Alice Deejay",
    album: "Witch House",
    date: "2028-03-18T00:00:00",
    duration: "03:29",
    urlSong: "https://20essentials.github.io/alice-deejay/songs/n2.mp3",
    urlPoster: "https://20essentials.github.io/alice-deejay/assets/n2.avif"
  },
  {
    title: "All Through The Night",
    artist: "Cindy Lauper",
    album: "Witch House",
    date: "2028-03-19T00:00:00",
    duration: "04:35",
    urlSong: "https://20essentials.github.io/cindy-lauper/songs/n5.mp3",
    urlPoster: "https://20essentials.github.io/cindy-lauper/assets/n2.avif"
  },
  {
    title: "Greatest Love",
    artist: "Culture Code",
    album: "Witch House",
    date: "2028-03-20T00:00:00",
    duration: "04:42",
    urlSong: "https://20essentials.github.io/culture-code-album/songs/n7.mp3",
    urlPoster: "https://20essentials.github.io/culture-code-album/assets/n2.avif"
  }
];
const __vite_glob_0_47 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: witchhouse
}, Symbol.toStringTag, { value: "Module" }));
const $$Astro$g = createAstro();
const $$Pinned = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Pinned;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} data-encore-id="icon" role="img" aria-hidden="false" class="Svg-sc-ytk21e-0 kLkTcI cSWBDsMjkH62GXIXo6mQ" viewBox="0 0 16 16"> <title>Fijada</title> <path fill="currentColor" d="M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z"></path> </svg>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/icons/pinned.astro", void 0);
const $$Astro$f = createAstro();
const $$Music = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Music;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-music"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M9 17v-13h10v13"></path><path d="M9 8h10"></path></svg>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/icons/music.astro", void 0);
const $$Astro$e = createAstro();
const $$PlayListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$PlayListItem;
  const { slug, title, pinned, color, tab } = Astro2.props;
  const initialLetterOfEachWord = title.slice(0, 3).toUpperCase();
  const files = /* @__PURE__ */ Object.assign({ "../data/alternative.json": __vite_glob_0_0, "../data/alternativerock.json": __vite_glob_0_1, "../data/altpop.json": __vite_glob_0_2, "../data/ambient.json": __vite_glob_0_3, "../data/avantgarde.json": __vite_glob_0_4, "../data/background.json": __vite_glob_0_5, "../data/bluepop.json": __vite_glob_0_6, "../data/bluerock.json": __vite_glob_0_7, "../data/chiptune.json": __vite_glob_0_8, "../data/darkfolk.json": __vite_glob_0_9, "../data/darknight.json": __vite_glob_0_10, "../data/discopop.json": __vite_glob_0_11, "../data/electroacid.json": __vite_glob_0_12, "../data/electronic.json": __vite_glob_0_13, "../data/electropop.json": __vite_glob_0_14, "../data/englishpop.json": __vite_glob_0_15, "../data/eurodance.json": __vite_glob_0_16, "../data/filmsost.json": __vite_glob_0_17, "../data/funk.json": __vite_glob_0_18, "../data/garage.json": __vite_glob_0_19, "../data/guitar.json": __vite_glob_0_20, "../data/hauntology.json": __vite_glob_0_21, "../data/hyperpop.json": __vite_glob_0_22, "../data/indiepop.json": __vite_glob_0_23, "../data/indierock.json": __vite_glob_0_24, "../data/instrumental.json": __vite_glob_0_25, "../data/melodicrock.json": __vite_glob_0_26, "../data/ncs.json": __vite_glob_0_27, "../data/newage.json": __vite_glob_0_28, "../data/phonk.json": __vite_glob_0_29, "../data/playlist.json": __vite_glob_0_30, "../data/popcore.json": __vite_glob_0_31, "../data/progressivepop.json": __vite_glob_0_32, "../data/retrowave.json": __vite_glob_0_33, "../data/rockandroll.json": __vite_glob_0_34, "../data/rockpop.json": __vite_glob_0_35, "../data/romantic.json": __vite_glob_0_36, "../data/skweee.json": __vite_glob_0_37, "../data/softrock.json": __vite_glob_0_38, "../data/soul.json": __vite_glob_0_39, "../data/soulpop.json": __vite_glob_0_40, "../data/spanishpop.json": __vite_glob_0_41, "../data/surfrock.json": __vite_glob_0_42, "../data/synthpop.json": __vite_glob_0_43, "../data/synthwave.json": __vite_glob_0_44, "../data/techno.json": __vite_glob_0_45, "../data/vaporwave.json": __vite_glob_0_46, "../data/witchhouse.json": __vite_glob_0_47 });
  const mySlug = `../data/${slug}.json`;
  const currentJson = files[mySlug]?.default || [];
  const randomNumber = ~~(Math.random() * currentJson.length);
  const randomSrc = currentJson[randomNumber]?.urlPoster || "";
  const image = randomSrc;
  return renderTemplate`${maybeRenderHead()}<aside class="playlist-item"${addAttribute(slug, "data-id")}${addAttribute(color, "data-color")}${addAttribute(tab, "tabindex")} data-astro-cid-4ht3nsfd> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} data-astro-cid-4ht3nsfd> <div class="data" data-astro-cid-4ht3nsfd> <strong class="title" data-astro-cid-4ht3nsfd>${title}</strong> <div class="subtitle-container" data-astro-cid-4ht3nsfd> ${pinned && renderTemplate`${renderComponent($$result, "PinnedIcon", $$Pinned, { "width": "0.7vmax", "color": "springgreen", "data-astro-cid-4ht3nsfd": true })}`} <span class="subtitle" data-astro-cid-4ht3nsfd>Playlist - ${initialLetterOfEachWord}</span> </div> </div> ${renderComponent($$result, "Volume", $$Music, { "class": "volume-icon2", "data-astro-cid-4ht3nsfd": true })} </aside>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/components/PlayListItem.astro", void 0);
var __freeze$7 = Object.freeze;
var __defProp$7 = Object.defineProperty;
var __template$7 = (cooked, raw) => __freeze$7(__defProp$7(cooked, "raw", { value: __freeze$7(cooked.slice()) }));
var _a$7;
const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$7 || (_a$7 = __template$7(["<script>\n  document.addEventListener('DOMContentLoaded', () => {\n    const input = document.getElementById('search-input');\n    const playlistContainer = document.querySelector('.sidebarPlaylist');\n    const originalPlaylists = [...playlistContainer.children];\n    input.addEventListener('input', () => {\n      const searchTerm = input.value.toLowerCase();\n      playlistContainer.scrollTop = 0;\n\n      const sortedPlaylists = [...originalPlaylists].sort((a, b) => {\n        const aText = a.textContent.toLowerCase();\n        const bText = b.textContent.toLowerCase();\n\n        const aMatch = aText.includes(searchTerm);\n        const bMatch = bText.includes(searchTerm);\n\n        if (aMatch && !bMatch) return -1;\n        if (!aMatch && bMatch) return 1;\n        return aText.localeCompare(bText);\n      });\n\n      playlistContainer.innerHTML = '';\n      sortedPlaylists.forEach(item => playlistContainer.appendChild(item));\n    });\n  });\n<\/script>", '<div class="container" data-astro-cid-6b5ihhfi> <div class="top-sidebar" data-astro-cid-6b5ihhfi> <button class="btn" data-astro-cid-6b5ihhfi> <input spellcheck="false" autocomplete="off" id="search-input" type="text" maxlength="20" placeholder="Seach Playlist" data-astro-cid-6b5ihhfi> </button> </div> <div class="main-sidebar" data-astro-cid-6b5ihhfi> <section class="the-container" data-astro-cid-6b5ihhfi> <div class="playlist-container" data-astro-cid-6b5ihhfi> <div class="playlist sidebarPlaylist" data-astro-cid-6b5ihhfi> ', " </div> </div> </section> </div> </div>"])), maybeRenderHead(), playlist.sort((a, b) => a.slug.localeCompare(b.slug)).map((pItem, i) => renderTemplate`${renderComponent($$result, "PlayListItem", $$PlayListItem, { "tab": i, ...pItem, "data-astro-cid-6b5ihhfi": true })}`));
}, "C:/Users/amoil/Desktop/PlaylistHub/src/ui/Sidebar/index.astro", void 0);
const $$Astro$d = createAstro();
const $$Clock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Clock;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" class="Svg-sc-ytk21e-0 dYnaPI"> <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path> <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path> </svg>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/icons/clock.astro", void 0);
var __freeze$6 = Object.freeze;
var __defProp$6 = Object.defineProperty;
var __template$6 = (cooked, raw) => __freeze$6(__defProp$6(cooked, "raw", { value: __freeze$6(raw || cooked.slice()) }));
var _a$6;
const $$SongItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$6 || (_a$6 = __template$6([`<script type="module">
  import { setAnimation } from './modules/setAnimation.js';

  class SongItem extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    static get styles() {
      return /* css */ \`
        .row-item {
          display: grid;
          grid-template-columns: var(--playlist-format);
          font-family: var(--default-font);
          align-items: center;
          padding: 0.3vmax 0.5vmax;
          border-radius: calc(var(--pad-gap) / 2);
          user-select: none;
          cursor: pointer;
          transition: background-color .2s ease;
        

          &.title-green {
            .titulin {
              color: var(--theme-color);
              filter: brightness(150%);
            }

            .num {
                display: none;
              }

            .wave-icon {
                display: flex;
            }
          }

          .wave-icon {
            width: 1vmax;
            display: none;
            color: var(--theme-color);
          }

          div:nth-child(4),
          div:nth-child(5) {
            text-align: center;
          }

          &:hover {
            background-color: #ffffff15;
          }
        }

        .text {
          font-size:1vmax;

          &.fecha {
            position: relative;
            z-index: 50;
          }
        }

        .playlist-icon {
          height: fit-content;
          display: flex;
          justify-content: right;
          text-align: right;
       
          &.escondido {
            display: none;
          }
          
          svg {
            width: 1.3vmax;
            height: 1.3vmax;
            opacity: 0.7;
          }
        }

        .playlist-nav-options {
          position: absolute;
          z-index: 800;
          right: 3.4vmax;
          top: 0
          background-color: #0f08;
          display: flex;
          flex-direction: column;
          visibility: hidden;
          pointer-events: none;
          transition: visibility .3s ease, opacity .3s ease;
          opacity: 0;
          border-radius: 0.7vmax;
          transform: translateY(-1.5vmax);
          gap: 0;

          &.playListNavActive {
            visibility: visible;
            pointer-events: auto;
            opacity: 1;
          }
          
          .option {
            font-size: 1vmax;
            text-align: left;
            display: flex;
            gap: 0.5vmax;
            background-color: #000;
            border: none;
            outline: none;
            padding: 0.5vmax;
            padding-right: 1.5vmax;
            position: relative;
            z-index: 1500;
            transition: background-color .2s ease;
            border-bottom: 0.1vmax solid #fff2;

            &:hover {
              background-color: color-mix(in srgb, var(--theme-color), black 50%);
            }

            .left {
              width: 1.1vmax;
              height: 1.1vmax;
              pointer-events: none;

              svg {
                width: 100%;
                height: 100%;
              }
            }
          }
        }

        .esconder {
          @media (width <= 1111px) and (orientation: portrait) {
            display: none;
          }
        }

        .title-container {
          display: flex;
          align-items: center;
          gap: 1vmax;

          & img {
            --size: 3.5vmax;
            width: var(--size);
            height: var(--size);
            border-radius: calc(var(--pad-gap) / 2);

            @media (width <= 800px) and (orientation: landscape) {
              --size: 2.5vmax;
            }
          }

          & .group {
            display: inline-flex;
            flex-direction: column;

            & .artist {
              color: var(--dark-textcolor);

        
            }
          }
        }
      \`;
    }

    connectedCallback() {
      this.slug = this.getAttribute('slug');
      this.title = this.getAttribute('title');
      this.artist = this.getAttribute('artist');
      this.album = this.getAttribute('album');
      this.date = this.getAttribute('date');
      this.duration = this.getAttribute('duration');
      this.index = Number(this.getAttribute('index'));
      this.urlPoster = this.getAttribute('urlPoster');
      this.urlSong = this.getAttribute('urlSong');
      this.image = this.urlPoster;
      this.thumb = this.urlPoster;
      this.render();
      const rowItem = this.shadowRoot.querySelector('.row-item');
      setTimeout(() => setAnimation(rowItem, 'FadeMove'), this.index * 25);
      this.playlistIconListeners();
    }

    playlistIconListeners() {
      const playlistIcon = this.shadowRoot.querySelector('.playlist-icon');
      playlistIcon.addEventListener('click', e => {
        e.stopPropagation();
        const rowItem = e.target.closest('.row-item');
        const songItems = document.querySelectorAll('song-item');
        const playListNavOption = rowItem.querySelector('.playlist-nav-options');
        if (playListNavOption.classList.contains('playListNavActive')) {
          playListNavOption.classList.remove('playListNavActive');
          return;
        }

        songItems.forEach(el => {
          const row = el.shadowRoot?.querySelector('.row-item');
          const playListNavActive = row?.querySelector('.playListNavActive');
          if (playListNavActive) {
            playListNavActive.classList.remove('playListNavActive');
          }
        });

        playListNavOption.classList.add('playListNavActive');
      });
    }

    getData() {
      return {
        index: this.index,
        album: this.album,
        artist: this.artist,
        date: this.date,
        duration: this.duration,
        slug: this.slug,
        title: this.title,
        urlPoster: this.urlPoster,
        urlSong: this.urlSong
      };
    }

    render() {
      this.shadowRoot.innerHTML = /* html */ \`
        <style>\${SongItem.styles}</style>
        <div class="row-item" data-id=\${this.index}>
          <div class=" text">
            <aside class="num">\${(this.index + 1).toString().padStart(2, '0')}</aside>
            <svg class="wave-icon"  viewBox="0 0 135 140" fill="currentColor"><rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect></svg>
          </div>
          
          <div class="title-container">
            <img class="img-thumb" src=\${this.thumb} alt=\${this.title}>
            <div class="group">
              <div class="text titulin">\${this.title}</div>
              <div class="artist text">\${this.artist}</div>
            </div>
          </div>
          <div class="text esconder">\${this.album}</div>
          <div class="text esconder fecha">\${this.date.substring(0, 10)}</div>
          <div class="text">\${this.duration}</div>
          <aside class="playlist-icon escondido" >
              <svg
                viewBox='0 0 32 32'
              >
                <path
                  d='M3 9h17a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm0 6h17a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm12 4H3a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2zm14 0h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2z'
                  stroke='currentColor'
                  stroke-width='1.5'
                  data-name='Layer 2'></path>
              </svg>
          </aside>
          <nav class="playlist-nav-options">
            <button class="option">
              <span class="left">
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  ><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M12 5l0 14'
                  ></path><path d='M5 12l14 0'></path></svg
                >  
              </span>
              <span class="right">Add to Playlist</span>
            </button>
            <button class="option">
               <span class="left">
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  ><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M4 7l16 0'
                  ></path><path d='M10 11l0 6'></path><path d='M14 11l0 6'></path><path
                    d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'></path><path
                    d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'></path></svg
                >
               </span>
               <span class="right">Remove from this Playlist</span>
              </button>
            <button class="option">
              <span class="left">
                <svg viewBox='0 0 24 24'
                  >
                  <path
                    fill='currentColor'
                    d='M1 8.475q0-2.35 1.575-3.912T6.5 3q1.3 0 2.475.55T11 5.1q.85-1 2.025-1.55T15.5 3q1.775 0 3.05.888t1.925 2.287q.175.375.025.763t-.525.562t-.763.025T18.65 7q-.45-1-1.325-1.5T15.5 5q-1.15 0-2.1.65t-1.65 1.6q-.125.2-.325.288T11 7.624t-.425-.1t-.325-.275q-.7-.95-1.65-1.6T6.5 5q-1.425 0-2.462.988T3 8.474q0 .825.35 1.675t1.25 1.963t2.45 2.6T11 18.3l2.225-1.95q.3-.275.7-.25t.675.3q.3.3.288.738t-.338.712l-2.225 1.975q-.275.25-.625.375t-.7.125t-.7-.125t-.625-.4q-1.125-1-2.612-2.275t-2.838-2.737t-2.287-3.063T1 8.475M18 14h-2q-.425 0-.712-.288T15 13t.288-.712T16 12h2v-2q0-.425.288-.712T19 9t.713.288T20 10v2h2q.425 0 .713.288T23 13t-.288.713T22 14h-2v2q0 .425-.288.713T19 17t-.712-.288T18 16z'
                  ></path></svg
                >
              </span>
              <span class="right"> Add to Your Favorite Brands </span>
            </button>
            <button class="option">
              <span class="left">
                  <svg  viewBox='0 0 24 24'
                    >
                    <path
                      fill='currentColor'
                      d='m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z'
                    ></path></svg
                  >
              </span>
              <span class="right"> Download Audio</span>
            </button>
          </nav>
        </div>
      \`;
    }
  }

  customElements.define('song-item', SongItem);
<\/script>`], [`<script type="module">
  import { setAnimation } from './modules/setAnimation.js';

  class SongItem extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    static get styles() {
      return /* css */ \\\`
        .row-item {
          display: grid;
          grid-template-columns: var(--playlist-format);
          font-family: var(--default-font);
          align-items: center;
          padding: 0.3vmax 0.5vmax;
          border-radius: calc(var(--pad-gap) / 2);
          user-select: none;
          cursor: pointer;
          transition: background-color .2s ease;
        

          &.title-green {
            .titulin {
              color: var(--theme-color);
              filter: brightness(150%);
            }

            .num {
                display: none;
              }

            .wave-icon {
                display: flex;
            }
          }

          .wave-icon {
            width: 1vmax;
            display: none;
            color: var(--theme-color);
          }

          div:nth-child(4),
          div:nth-child(5) {
            text-align: center;
          }

          &:hover {
            background-color: #ffffff15;
          }
        }

        .text {
          font-size:1vmax;

          &.fecha {
            position: relative;
            z-index: 50;
          }
        }

        .playlist-icon {
          height: fit-content;
          display: flex;
          justify-content: right;
          text-align: right;
       
          &.escondido {
            display: none;
          }
          
          svg {
            width: 1.3vmax;
            height: 1.3vmax;
            opacity: 0.7;
          }
        }

        .playlist-nav-options {
          position: absolute;
          z-index: 800;
          right: 3.4vmax;
          top: 0
          background-color: #0f08;
          display: flex;
          flex-direction: column;
          visibility: hidden;
          pointer-events: none;
          transition: visibility .3s ease, opacity .3s ease;
          opacity: 0;
          border-radius: 0.7vmax;
          transform: translateY(-1.5vmax);
          gap: 0;

          &.playListNavActive {
            visibility: visible;
            pointer-events: auto;
            opacity: 1;
          }
          
          .option {
            font-size: 1vmax;
            text-align: left;
            display: flex;
            gap: 0.5vmax;
            background-color: #000;
            border: none;
            outline: none;
            padding: 0.5vmax;
            padding-right: 1.5vmax;
            position: relative;
            z-index: 1500;
            transition: background-color .2s ease;
            border-bottom: 0.1vmax solid #fff2;

            &:hover {
              background-color: color-mix(in srgb, var(--theme-color), black 50%);
            }

            .left {
              width: 1.1vmax;
              height: 1.1vmax;
              pointer-events: none;

              svg {
                width: 100%;
                height: 100%;
              }
            }
          }
        }

        .esconder {
          @media (width <= 1111px) and (orientation: portrait) {
            display: none;
          }
        }

        .title-container {
          display: flex;
          align-items: center;
          gap: 1vmax;

          & img {
            --size: 3.5vmax;
            width: var(--size);
            height: var(--size);
            border-radius: calc(var(--pad-gap) / 2);

            @media (width <= 800px) and (orientation: landscape) {
              --size: 2.5vmax;
            }
          }

          & .group {
            display: inline-flex;
            flex-direction: column;

            & .artist {
              color: var(--dark-textcolor);

        
            }
          }
        }
      \\\`;
    }

    connectedCallback() {
      this.slug = this.getAttribute('slug');
      this.title = this.getAttribute('title');
      this.artist = this.getAttribute('artist');
      this.album = this.getAttribute('album');
      this.date = this.getAttribute('date');
      this.duration = this.getAttribute('duration');
      this.index = Number(this.getAttribute('index'));
      this.urlPoster = this.getAttribute('urlPoster');
      this.urlSong = this.getAttribute('urlSong');
      this.image = this.urlPoster;
      this.thumb = this.urlPoster;
      this.render();
      const rowItem = this.shadowRoot.querySelector('.row-item');
      setTimeout(() => setAnimation(rowItem, 'FadeMove'), this.index * 25);
      this.playlistIconListeners();
    }

    playlistIconListeners() {
      const playlistIcon = this.shadowRoot.querySelector('.playlist-icon');
      playlistIcon.addEventListener('click', e => {
        e.stopPropagation();
        const rowItem = e.target.closest('.row-item');
        const songItems = document.querySelectorAll('song-item');
        const playListNavOption = rowItem.querySelector('.playlist-nav-options');
        if (playListNavOption.classList.contains('playListNavActive')) {
          playListNavOption.classList.remove('playListNavActive');
          return;
        }

        songItems.forEach(el => {
          const row = el.shadowRoot?.querySelector('.row-item');
          const playListNavActive = row?.querySelector('.playListNavActive');
          if (playListNavActive) {
            playListNavActive.classList.remove('playListNavActive');
          }
        });

        playListNavOption.classList.add('playListNavActive');
      });
    }

    getData() {
      return {
        index: this.index,
        album: this.album,
        artist: this.artist,
        date: this.date,
        duration: this.duration,
        slug: this.slug,
        title: this.title,
        urlPoster: this.urlPoster,
        urlSong: this.urlSong
      };
    }

    render() {
      this.shadowRoot.innerHTML = /* html */ \\\`
        <style>\\\${SongItem.styles}</style>
        <div class="row-item" data-id=\\\${this.index}>
          <div class=" text">
            <aside class="num">\\\${(this.index + 1).toString().padStart(2, '0')}</aside>
            <svg class="wave-icon"  viewBox="0 0 135 140" fill="currentColor"><rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect></svg>
          </div>
          
          <div class="title-container">
            <img class="img-thumb" src=\\\${this.thumb} alt=\\\${this.title}>
            <div class="group">
              <div class="text titulin">\\\${this.title}</div>
              <div class="artist text">\\\${this.artist}</div>
            </div>
          </div>
          <div class="text esconder">\\\${this.album}</div>
          <div class="text esconder fecha">\\\${this.date.substring(0, 10)}</div>
          <div class="text">\\\${this.duration}</div>
          <aside class="playlist-icon escondido" >
              <svg
                viewBox='0 0 32 32'
              >
                <path
                  d='M3 9h17a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm0 6h17a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm12 4H3a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2zm14 0h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2z'
                  stroke='currentColor'
                  stroke-width='1.5'
                  data-name='Layer 2'></path>
              </svg>
          </aside>
          <nav class="playlist-nav-options">
            <button class="option">
              <span class="left">
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  ><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M12 5l0 14'
                  ></path><path d='M5 12l14 0'></path></svg
                >  
              </span>
              <span class="right">Add to Playlist</span>
            </button>
            <button class="option">
               <span class="left">
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  ><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M4 7l16 0'
                  ></path><path d='M10 11l0 6'></path><path d='M14 11l0 6'></path><path
                    d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'></path><path
                    d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'></path></svg
                >
               </span>
               <span class="right">Remove from this Playlist</span>
              </button>
            <button class="option">
              <span class="left">
                <svg viewBox='0 0 24 24'
                  >
                  <path
                    fill='currentColor'
                    d='M1 8.475q0-2.35 1.575-3.912T6.5 3q1.3 0 2.475.55T11 5.1q.85-1 2.025-1.55T15.5 3q1.775 0 3.05.888t1.925 2.287q.175.375.025.763t-.525.562t-.763.025T18.65 7q-.45-1-1.325-1.5T15.5 5q-1.15 0-2.1.65t-1.65 1.6q-.125.2-.325.288T11 7.624t-.425-.1t-.325-.275q-.7-.95-1.65-1.6T6.5 5q-1.425 0-2.462.988T3 8.474q0 .825.35 1.675t1.25 1.963t2.45 2.6T11 18.3l2.225-1.95q.3-.275.7-.25t.675.3q.3.3.288.738t-.338.712l-2.225 1.975q-.275.25-.625.375t-.7.125t-.7-.125t-.625-.4q-1.125-1-2.612-2.275t-2.838-2.737t-2.287-3.063T1 8.475M18 14h-2q-.425 0-.712-.288T15 13t.288-.712T16 12h2v-2q0-.425.288-.712T19 9t.713.288T20 10v2h2q.425 0 .713.288T23 13t-.288.713T22 14h-2v2q0 .425-.288.713T19 17t-.712-.288T18 16z'
                  ></path></svg
                >
              </span>
              <span class="right"> Add to Your Favorite Brands </span>
            </button>
            <button class="option">
              <span class="left">
                  <svg  viewBox='0 0 24 24'
                    >
                    <path
                      fill='currentColor'
                      d='m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z'
                    ></path></svg
                  >
              </span>
              <span class="right"> Download Audio</span>
            </button>
          </nav>
        </div>
      \\\`;
    }
  }

  customElements.define('song-item', SongItem);
<\/script>`])));
}, "C:/Users/amoil/Desktop/PlaylistHub/src/components/SongItem.astro", void 0);
const $$Astro$c = createAstro();
const $$Config = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Config;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 24 24"> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v3m-2 4.25h4M5 11v10m7-4v4m-2-7.75h4M12 3v10m7-10v3m-2 4.25h4M19 11v10"></path></svg>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/icons/config.astro", void 0);
const $$Astro$b = createAstro();
const $$Playlist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Playlist;
  const user = await Astro2.locals.currentUser();
  const hiddenColumn = user ? "flex" : "none";
  const classLastColumn = user ? "true" : "false";
  const columnsPlaylists = user ? `3% 1fr 0.7fr 0.7fr 0.1fr 0.1fr` : "3% 1fr 0.7fr 0.7fr 0.1fr";
  const $$definedVars = defineStyleVars([{ columns: columnsPlaylists, hiddenColumn }]);
  return renderTemplate`${maybeRenderHead()}<div class="song playlist header-data-items-class"${addAttribute(classLastColumn, "data-last-column")} data-astro-cid-mlamalio${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "SongItem", $$SongItem, { "data-astro-cid-mlamalio": true })} <header data-astro-cid-mlamalio${addAttribute($$definedVars, "style")}> <div class="cell" data-astro-cid-mlamalio${addAttribute($$definedVars, "style")}>#</div> <div class="cell" data-astro-cid-mlamalio${addAttribute($$definedVars, "style")}>Title</div> <div class="cell esconder" data-astro-cid-mlamalio${addAttribute($$definedVars, "style")}>Album</div> <div class="cell esconder" data-astro-cid-mlamalio${addAttribute($$definedVars, "style")}>Date of Addition</div> <div class="cell centrar" data-astro-cid-mlamalio${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Clock", $$Clock, { "class": "clock", "data-astro-cid-mlamalio": true })} </div> <div class="cell last-cell last-cell-of-header" data-astro-cid-mlamalio${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Config", $$Config, { "data-astro-cid-mlamalio": true })} </div> </header> <hr data-astro-cid-mlamalio${addAttribute($$definedVars, "style")}> </div> ${renderScript($$result, "C:/Users/amoil/Desktop/PlaylistHub/src/ui/Content/Playlist.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/ui/Content/Playlist.astro", void 0);
var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(raw || cooked.slice()) }));
var _a$5;
const $$ListHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$5 || (_a$5 = __template$5(["", ` <script type="module">
  import { formatTime, convertToSeconds } from './modules/formatTime.js';

  class ListHeader extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.currentIndex = 0;
    }

    static get styles() {
      return /* css */ \`
        :host {
          mix-blend-mode: normal;
          z-index: 5;
        }

        .texting-strong {
          font-size: 1.5vmax;

          @media (width <= 1111px) and (orientation: portrait) {
            font-size: 1.1vmax;
          }
        }

        .container-anchors {
          position: absolute;
          top: 1.5vmax;
          right: 1.5vmax;
          display: flex;
          gap: 0.5vmax;
          
          button {
            width: 2.5vmax;
            height: 2.5vmax;
            border: none;
            outline: none;
            margin: 0;
            padding: 0;
            border-radius: 50%;
            display: flex;
            flex-wrap: wrap;
            place-content: center;
            text-align: center;
            cursor: pointer;
            background: color-mix(in srgb, var(--theme-color) 50%, black 30%);
            backdrop-filter: blur(0.2vmax);
            transition: opacity .3s ease;
            aspect-ratio: 1;


            &.profile {
              animation: none;
              overflow: hidden;
              transition: transform 0.5s ease, box-shadow 0.2s ease;
              will-change: transform, filter;
              z-index: 10;
              touch-action: none;
              isolation: isolate;
              width: 100%;
              position: relative;
              visibility: hidden;
            }

            &:active {
              opacity: 0.5;
            }

            img {
              pointer-events: none;
              --s-image: 1.9vmax;
              width: var(--s-image);
              height: var(--s-image);
            }
          }
        }

        header {
          display: flex;
          flex-direction: column;
          padding: 0.5vmax;
          position: relative;
          
          
          & .data {
            display: flex;
            gap: 0 1.2vmax;
            padding: 1.3vmax;

            .container-cover {
              --size: 11.5vmax;
              position: relative;
              overflow: hidden;
              width: var(--size);
              height: var(--size);
              aspect-ratio: 1;
              outline: 0.15vmax var(--theme-color) solid;

              @media (width <= 1111px) and (orientation: portrait) {
                --size: 10vmax;
              }

              * {
                pointer-events: none;
              }

                &::before {
                  content: "";
                  background: url('./assets/album-cover.avif');
                  width: var(--size);
                  height: var(--size);
                  background-size: var(--size);
                  top: 0;
                  left: 0;
                  background-position: center;
                  mix-blend-mode: screen;
                  opacity: 55%;
                  z-index: 2;
                  position: absolute;
                  pointer-events: none;
                }

              &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index:3;
                background-image:  radial-gradient(
                  circle 8vmax at var(--x) var(--y),
                  #fff1 40%,
                  transparent 75%
                );
                background-blend-mode: overlay;
                filter: contrast(1.1) brightness(1.5) saturate(1.1);
              }
            }

            .cover {
              width: var(--size);
              height: var(--size);
              background-color: #fff1;
              position: absolute;
              aspect-ratio: 1;
            }

            & .avatar {
              --size: 1vmax;
              width: var(--size);
              height: var(--size);
              background-image: url("./assets/favicon.webp");
              background-size: cover;
              border-radius: 50%;
            }

            .esconder {
              @media (width <= 1111px) and (orientation: portrait) {
                display: none;
              }
            }

            & .info {
              display: flex;
              flex-direction: column;
              justify-content: end;
              font-family: var(--default-font);

              & .row {
                display: grid;
                grid-auto-flow: column;
                justify-content: start;
                gap: 0.5vmax;
                align-items: center;
              }

              & h1 {
                margin: 0;
                font-weight: 800;
                letter-spacing: -0.1vmax;
                font-size: 3.5vmax;

                  @media (width <= 1111px) and (orientation: portrait) {
                    font-size: 2vmax;
                    overflow-wrap: anywhere;
                  }
              }

              & .total-duration {
                color: var(--dark-textcolor);

                @media (width <= 1111px) {
                  filter: brightness(200%);
                }
              }

              .info-subtitle,
              .total-duration {
                font-size: 0.95vmax;
              }
            }
          }
        }
      \`;
    }

    setData(title, songs) {
      const slug = title.toLowerCase().replaceAll(' ', '');
      const total = songs.length;
      const duration = songs
        .map(song => convertToSeconds(song.duration))
        .reduce((first, acc) => first + acc, 0);
      const [min] = formatTime(duration).split(':');
      const time = \`\${min} min \`;

      this.shadowRoot.querySelector('h1').textContent = title;
      this.shadowRoot.querySelector('.info-subtitle').textContent =
        \`PlaylistHub · \${total} songs,\`;
      this.shadowRoot.querySelector('.total-duration').textContent =
        \`\${time} of duration approximately\`;

      setTimeout(() => {
        const result = \`.playlist-item[data-id=\${slug}] img\`;
        this.shadowRoot.querySelector('img.cover').src =
          document.querySelector(result)?.src;
      }, 20);
    }

    addCoverMouseAnimation() {
      const containerCover = this.shadowRoot.querySelector('.container-cover');

      function handleMover(e) {
        e.preventDefault();

        let clientX, clientY;

        if (e.type === 'touchmove') {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          clientX = e.clientX;
          clientY = e.clientY;
        }

        const { left, top } = containerCover.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;

        containerCover.style.setProperty('--x', \`\${x}px\`);
        containerCover.style.setProperty('--y', \`\${y}px\`);
      }

      containerCover.addEventListener('pointermove', handleMover);
      containerCover.addEventListener('touchmove', handleMover, {
        passive: false
      });
    }

    connectedCallback() {
      this.render();
      this.addCoverMouseAnimation();
      const prev = this.shadowRoot.querySelector('.prev-list');
      const next = this.shadowRoot.querySelector('.next-list');
      let playlistItems = document.querySelectorAll('.playlist-item');
      let slugs = [...playlistItems].map(playlist => playlist.dataset.id);
      const { length } = playlistItems;
      const sidebarPlaylist = document.querySelector('.sidebarPlaylist');
    

      function clickOnPlaylist(targetIndex) {
        const slug = slugs[targetIndex];
        const theTarget = document.querySelector(
          \`.playlist-item[data-id="\${slug}"]\`
        );
        theTarget.click();
        theTarget.focus();
      }

      const input = document.getElementById('search-input');

      document.addEventListener('keydown', ({ key }) => {
        const inputHasFocus = document.activeElement === input;
        const clickEnter = inputHasFocus && key === 'Enter';
        const clickArrowDown = inputHasFocus && key === 'ArrowDown';
        const selecttFirsPlaylist = () => {
          const firstPlaylist = sidebarPlaylist.firstElementChild;
          if (firstPlaylist) {
            firstPlaylist.click();
            firstPlaylist.focus();
            this.currentIndex = 0;
            playlistItems = document.querySelectorAll('.playlist-item');
            slugs = [...playlistItems].map(playlist => playlist.dataset.id);
          }
        };

        if (clickEnter) {
          selecttFirsPlaylist();
        }

        if (clickArrowDown) {
          setTimeout(() => {
            selecttFirsPlaylist();
          }, 1);
        }
      });

      prev?.addEventListener('click', () => {
        const prevIndex = (this.currentIndex - 1 + length) % length;
        clickOnPlaylist(prevIndex);
        this.currentIndex = prevIndex;
      });

      next?.addEventListener('click', () => {
        const nextIndex = (this.currentIndex + 1) % length;
        clickOnPlaylist(nextIndex);
        this.currentIndex = nextIndex;
      });

      document.addEventListener('click', e => {
        if (e.target.matches('.playlist-item')) {
          e.target.focus();
          playlistItems = document.querySelectorAll('.playlist-item');
          slugs = [...playlistItems].map(playlist => playlist.dataset.id);
          let index = [...playlistItems].indexOf(e.target);
          this.currentIndex = index;
        }
      });

      function existCoverCard() {
        return document.querySelector('cover-card');
      }

      document.addEventListener('keydown', ({ key }) => {
        if (key === 'ArrowRight') {
          if (existCoverCard()) {
            const nextSongButton = document.querySelector('button.next');
            nextSongButton.click();
            return;
          }
          const nextIndex = (this.currentIndex + 1) % length;
          clickOnPlaylist(nextIndex);
          this.currentIndex = nextIndex;
          sidebarPlaylist.scrollTop += 50;
          if (nextIndex === 0) sidebarPlaylist.scrollTop = 0;
        } else if (key === 'ArrowLeft') {
          if (existCoverCard()) {
            const prevSongButton = document.querySelector('button.prev');
            prevSongButton.click();
            return;
          }
          const prevIndex = (this.currentIndex - 1 + length) % length;
          clickOnPlaylist(prevIndex);
          this.currentIndex = prevIndex;
          sidebarPlaylist.scrollTop -= 50;
          if (prevIndex === length - 1)
            sidebarPlaylist.scrollTop = sidebarPlaylist.scrollHeight;
        }

        if (key === 'ArrowDown') {
          if (existCoverCard()) return;
          if (document.activeElement.classList.contains('playlist-item')) {
            const nextIndex = (this.currentIndex + 1) % length;
            clickOnPlaylist(nextIndex);
            this.currentIndex = nextIndex;
            sidebarPlaylist.scrollTop += 50;
            if (nextIndex === 0) {
              setTimeout(() => {
                sidebarPlaylist.scrollTop = 10;
              }, 1);
            }
          }
        } else if (key === 'ArrowUp') {
          if (existCoverCard()) return;
          if (document.activeElement.classList.contains('playlist-item')) {
            const prevIndex = (this.currentIndex - 1 + length) % length;
            clickOnPlaylist(prevIndex);
            this.currentIndex = prevIndex;
            sidebarPlaylist.scrollTop -= 50;

            if (prevIndex === length - 1) {
              setTimeout(() => {
                sidebarPlaylist.scrollTop = sidebarPlaylist.scrollHeight;
              }, 1);
            }
          }
        }
      });
    }

    render() {
      this.shadowRoot.innerHTML = /* html */ \`
        <style>\${ListHeader.styles}</style>
        <header>
          <div class="data">
            <article class="container-cover">
              <img draggable="false" class="cover" src="./assets/transparent.png" alt="cover" />
            </article>
            <div class="info">
              <strong class="texting-strong">Playlist</strong>
              <h1 class="texting-h1">Electronic</h1>
              <div class="row">
                <div class="avatar esconder"></div>
                <span class="info-subtitle esconder">PlaylistHub · 20 canciones,</span>
                <span class="total-duration">80 min de duración aproximadamente</span>
              </div>
            </div>
          </div>
          <aside class="container-anchors">
            <button class='prev-list' >
              <img src='./assets/prev.svg' alt='prev' />
            </button>
            <button class='profile' style="--bg: url('./assets/v1.gif')">
              <img src='./assets/profile1.png' alt='profile' />
            </button>
            <button class='next-list' >
              <img src='./assets/next.svg' alt='next' />
            </button>
          </aside>
        </header>
      \`;
    }
  }

  customElements.define('list-header', ListHeader);
<\/script>`], ["", ` <script type="module">
  import { formatTime, convertToSeconds } from './modules/formatTime.js';

  class ListHeader extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.currentIndex = 0;
    }

    static get styles() {
      return /* css */ \\\`
        :host {
          mix-blend-mode: normal;
          z-index: 5;
        }

        .texting-strong {
          font-size: 1.5vmax;

          @media (width <= 1111px) and (orientation: portrait) {
            font-size: 1.1vmax;
          }
        }

        .container-anchors {
          position: absolute;
          top: 1.5vmax;
          right: 1.5vmax;
          display: flex;
          gap: 0.5vmax;
          
          button {
            width: 2.5vmax;
            height: 2.5vmax;
            border: none;
            outline: none;
            margin: 0;
            padding: 0;
            border-radius: 50%;
            display: flex;
            flex-wrap: wrap;
            place-content: center;
            text-align: center;
            cursor: pointer;
            background: color-mix(in srgb, var(--theme-color) 50%, black 30%);
            backdrop-filter: blur(0.2vmax);
            transition: opacity .3s ease;
            aspect-ratio: 1;


            &.profile {
              animation: none;
              overflow: hidden;
              transition: transform 0.5s ease, box-shadow 0.2s ease;
              will-change: transform, filter;
              z-index: 10;
              touch-action: none;
              isolation: isolate;
              width: 100%;
              position: relative;
              visibility: hidden;
            }

            &:active {
              opacity: 0.5;
            }

            img {
              pointer-events: none;
              --s-image: 1.9vmax;
              width: var(--s-image);
              height: var(--s-image);
            }
          }
        }

        header {
          display: flex;
          flex-direction: column;
          padding: 0.5vmax;
          position: relative;
          
          
          & .data {
            display: flex;
            gap: 0 1.2vmax;
            padding: 1.3vmax;

            .container-cover {
              --size: 11.5vmax;
              position: relative;
              overflow: hidden;
              width: var(--size);
              height: var(--size);
              aspect-ratio: 1;
              outline: 0.15vmax var(--theme-color) solid;

              @media (width <= 1111px) and (orientation: portrait) {
                --size: 10vmax;
              }

              * {
                pointer-events: none;
              }

                &::before {
                  content: "";
                  background: url('./assets/album-cover.avif');
                  width: var(--size);
                  height: var(--size);
                  background-size: var(--size);
                  top: 0;
                  left: 0;
                  background-position: center;
                  mix-blend-mode: screen;
                  opacity: 55%;
                  z-index: 2;
                  position: absolute;
                  pointer-events: none;
                }

              &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index:3;
                background-image:  radial-gradient(
                  circle 8vmax at var(--x) var(--y),
                  #fff1 40%,
                  transparent 75%
                );
                background-blend-mode: overlay;
                filter: contrast(1.1) brightness(1.5) saturate(1.1);
              }
            }

            .cover {
              width: var(--size);
              height: var(--size);
              background-color: #fff1;
              position: absolute;
              aspect-ratio: 1;
            }

            & .avatar {
              --size: 1vmax;
              width: var(--size);
              height: var(--size);
              background-image: url("./assets/favicon.webp");
              background-size: cover;
              border-radius: 50%;
            }

            .esconder {
              @media (width <= 1111px) and (orientation: portrait) {
                display: none;
              }
            }

            & .info {
              display: flex;
              flex-direction: column;
              justify-content: end;
              font-family: var(--default-font);

              & .row {
                display: grid;
                grid-auto-flow: column;
                justify-content: start;
                gap: 0.5vmax;
                align-items: center;
              }

              & h1 {
                margin: 0;
                font-weight: 800;
                letter-spacing: -0.1vmax;
                font-size: 3.5vmax;

                  @media (width <= 1111px) and (orientation: portrait) {
                    font-size: 2vmax;
                    overflow-wrap: anywhere;
                  }
              }

              & .total-duration {
                color: var(--dark-textcolor);

                @media (width <= 1111px) {
                  filter: brightness(200%);
                }
              }

              .info-subtitle,
              .total-duration {
                font-size: 0.95vmax;
              }
            }
          }
        }
      \\\`;
    }

    setData(title, songs) {
      const slug = title.toLowerCase().replaceAll(' ', '');
      const total = songs.length;
      const duration = songs
        .map(song => convertToSeconds(song.duration))
        .reduce((first, acc) => first + acc, 0);
      const [min] = formatTime(duration).split(':');
      const time = \\\`\\\${min} min \\\`;

      this.shadowRoot.querySelector('h1').textContent = title;
      this.shadowRoot.querySelector('.info-subtitle').textContent =
        \\\`PlaylistHub · \\\${total} songs,\\\`;
      this.shadowRoot.querySelector('.total-duration').textContent =
        \\\`\\\${time} of duration approximately\\\`;

      setTimeout(() => {
        const result = \\\`.playlist-item[data-id=\\\${slug}] img\\\`;
        this.shadowRoot.querySelector('img.cover').src =
          document.querySelector(result)?.src;
      }, 20);
    }

    addCoverMouseAnimation() {
      const containerCover = this.shadowRoot.querySelector('.container-cover');

      function handleMover(e) {
        e.preventDefault();

        let clientX, clientY;

        if (e.type === 'touchmove') {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          clientX = e.clientX;
          clientY = e.clientY;
        }

        const { left, top } = containerCover.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;

        containerCover.style.setProperty('--x', \\\`\\\${x}px\\\`);
        containerCover.style.setProperty('--y', \\\`\\\${y}px\\\`);
      }

      containerCover.addEventListener('pointermove', handleMover);
      containerCover.addEventListener('touchmove', handleMover, {
        passive: false
      });
    }

    connectedCallback() {
      this.render();
      this.addCoverMouseAnimation();
      const prev = this.shadowRoot.querySelector('.prev-list');
      const next = this.shadowRoot.querySelector('.next-list');
      let playlistItems = document.querySelectorAll('.playlist-item');
      let slugs = [...playlistItems].map(playlist => playlist.dataset.id);
      const { length } = playlistItems;
      const sidebarPlaylist = document.querySelector('.sidebarPlaylist');
    

      function clickOnPlaylist(targetIndex) {
        const slug = slugs[targetIndex];
        const theTarget = document.querySelector(
          \\\`.playlist-item[data-id="\\\${slug}"]\\\`
        );
        theTarget.click();
        theTarget.focus();
      }

      const input = document.getElementById('search-input');

      document.addEventListener('keydown', ({ key }) => {
        const inputHasFocus = document.activeElement === input;
        const clickEnter = inputHasFocus && key === 'Enter';
        const clickArrowDown = inputHasFocus && key === 'ArrowDown';
        const selecttFirsPlaylist = () => {
          const firstPlaylist = sidebarPlaylist.firstElementChild;
          if (firstPlaylist) {
            firstPlaylist.click();
            firstPlaylist.focus();
            this.currentIndex = 0;
            playlistItems = document.querySelectorAll('.playlist-item');
            slugs = [...playlistItems].map(playlist => playlist.dataset.id);
          }
        };

        if (clickEnter) {
          selecttFirsPlaylist();
        }

        if (clickArrowDown) {
          setTimeout(() => {
            selecttFirsPlaylist();
          }, 1);
        }
      });

      prev?.addEventListener('click', () => {
        const prevIndex = (this.currentIndex - 1 + length) % length;
        clickOnPlaylist(prevIndex);
        this.currentIndex = prevIndex;
      });

      next?.addEventListener('click', () => {
        const nextIndex = (this.currentIndex + 1) % length;
        clickOnPlaylist(nextIndex);
        this.currentIndex = nextIndex;
      });

      document.addEventListener('click', e => {
        if (e.target.matches('.playlist-item')) {
          e.target.focus();
          playlistItems = document.querySelectorAll('.playlist-item');
          slugs = [...playlistItems].map(playlist => playlist.dataset.id);
          let index = [...playlistItems].indexOf(e.target);
          this.currentIndex = index;
        }
      });

      function existCoverCard() {
        return document.querySelector('cover-card');
      }

      document.addEventListener('keydown', ({ key }) => {
        if (key === 'ArrowRight') {
          if (existCoverCard()) {
            const nextSongButton = document.querySelector('button.next');
            nextSongButton.click();
            return;
          }
          const nextIndex = (this.currentIndex + 1) % length;
          clickOnPlaylist(nextIndex);
          this.currentIndex = nextIndex;
          sidebarPlaylist.scrollTop += 50;
          if (nextIndex === 0) sidebarPlaylist.scrollTop = 0;
        } else if (key === 'ArrowLeft') {
          if (existCoverCard()) {
            const prevSongButton = document.querySelector('button.prev');
            prevSongButton.click();
            return;
          }
          const prevIndex = (this.currentIndex - 1 + length) % length;
          clickOnPlaylist(prevIndex);
          this.currentIndex = prevIndex;
          sidebarPlaylist.scrollTop -= 50;
          if (prevIndex === length - 1)
            sidebarPlaylist.scrollTop = sidebarPlaylist.scrollHeight;
        }

        if (key === 'ArrowDown') {
          if (existCoverCard()) return;
          if (document.activeElement.classList.contains('playlist-item')) {
            const nextIndex = (this.currentIndex + 1) % length;
            clickOnPlaylist(nextIndex);
            this.currentIndex = nextIndex;
            sidebarPlaylist.scrollTop += 50;
            if (nextIndex === 0) {
              setTimeout(() => {
                sidebarPlaylist.scrollTop = 10;
              }, 1);
            }
          }
        } else if (key === 'ArrowUp') {
          if (existCoverCard()) return;
          if (document.activeElement.classList.contains('playlist-item')) {
            const prevIndex = (this.currentIndex - 1 + length) % length;
            clickOnPlaylist(prevIndex);
            this.currentIndex = prevIndex;
            sidebarPlaylist.scrollTop -= 50;

            if (prevIndex === length - 1) {
              setTimeout(() => {
                sidebarPlaylist.scrollTop = sidebarPlaylist.scrollHeight;
              }, 1);
            }
          }
        }
      });
    }

    render() {
      this.shadowRoot.innerHTML = /* html */ \\\`
        <style>\\\${ListHeader.styles}</style>
        <header>
          <div class="data">
            <article class="container-cover">
              <img draggable="false" class="cover" src="./assets/transparent.png" alt="cover" />
            </article>
            <div class="info">
              <strong class="texting-strong">Playlist</strong>
              <h1 class="texting-h1">Electronic</h1>
              <div class="row">
                <div class="avatar esconder"></div>
                <span class="info-subtitle esconder">PlaylistHub · 20 canciones,</span>
                <span class="total-duration">80 min de duración aproximadamente</span>
              </div>
            </div>
          </div>
          <aside class="container-anchors">
            <button class='prev-list' >
              <img src='./assets/prev.svg' alt='prev' />
            </button>
            <button class='profile' style="--bg: url('./assets/v1.gif')">
              <img src='./assets/profile1.png' alt='profile' />
            </button>
            <button class='next-list' >
              <img src='./assets/next.svg' alt='next' />
            </button>
          </aside>
        </header>
      \\\`;
    }
  }

  customElements.define('list-header', ListHeader);
<\/script>`])), renderComponent($$result, "list-header", "list-header", {}));
}, "C:/Users/amoil/Desktop/PlaylistHub/src/ui/Content/ListHeader.astro", void 0);
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-aqhblxhm> ${renderComponent($$result, "SignedIn", $$SignedIn, { "data-astro-cid-aqhblxhm": true }, { "default": ($$result2) => renderTemplate` <button class="profile" style="--bg: url('./assets/v1.gif')" data-astro-cid-aqhblxhm> ${renderComponent($$result2, "UserButton", UserButton, { "data-astro-cid-aqhblxhm": true })} </button> ` })} ${renderComponent($$result, "SignedOut", $$SignedOut, { "data-astro-cid-aqhblxhm": true }, { "default": ($$result2) => renderTemplate` <button class="profile openLogin" style="--bg: url('./assets/v1.gif')" data-astro-cid-aqhblxhm> <img src="./assets/profile1.png" alt="profile" data-astro-cid-aqhblxhm> </button> ` })} ${renderComponent($$result, "ListHeader", $$ListHeader, { "data-astro-cid-aqhblxhm": true })} ${renderComponent($$result, "Playlist", $$Playlist, { "data-astro-cid-aqhblxhm": true })} </div>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/ui/Content/index.astro", void 0);
const $$Astro$a = createAstro();
const $$Volume = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Volume;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"> <path fill="currentColor" d="m3.5 10.494l.257-.429l-.119-.07H3.5zm0-5.996v.5h.138l.12-.071zm5-2.998H9a.5.5 0 0 0-.757-.429zm0 11.992l-.257.429A.5.5 0 0 0 9 13.492zm-5-3.498h-2v1h2zm-2 0a.5.5 0 0 1-.5-.5H0c0 .83.672 1.5 1.5 1.5zm-.5-.5V5.498H0v3.998zm0-3.997a.5.5 0 0 1 .5-.499v-1a1.5 1.5 0 0 0-1.5 1.5zm.5-.499h2v-1h-2zm2.257-.071l5-2.998l-.514-.858l-5 2.998zM8 1.5v11.992h1V1.5zm.757 11.563l-5-2.998l-.514.858l5 2.998zM10 6v3h1V6zm2-2v7h1V4zm2-2v11h1V2z"></path> </svg>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/icons/volume.astro", void 0);
const $$Astro$9 = createAstro();
const $$Volumeoff = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Volumeoff;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"> <path fill="currentColor" d="m3.5 10.494l.257-.429l-.119-.07H3.5zm0-5.996v.5h.138l.12-.071zm5-2.998H9a.5.5 0 0 0-.757-.429zm0 11.992l-.257.429A.5.5 0 0 0 9 13.492zm2.94-7.763l-.354-.353l-.707.707l.354.354zm2.12 3.534l.354.353l.707-.707l-.354-.353zm.708-2.826l.353-.354l-.707-.707l-.353.353zm-3.535 2.119l-.354.353l.707.707l.354-.353zM3.5 9.994h-2v1h2zm-2 0a.499.499 0 0 1-.5-.5H0c0 .83.671 1.5 1.5 1.5zm-.5-.5V5.498H0v3.998zm0-3.997c0-.276.223-.499.5-.499v-1c-.829 0-1.5.67-1.5 1.5zm.5-.499h2v-1h-2zm2.257-.071l5-2.998l-.514-.858l-5 2.998zM8 1.5v11.992h1V1.5zm.757 11.563l-5-2.998l-.514.858l5 2.998zm1.976-6.626l2.827 2.826l.707-.707l-2.828-2.827zm2.828-.708l-2.828 2.827l.707.707l2.828-2.826z"></path> </svg>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/icons/volumeoff.astro", void 0);
var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(cooked.slice()) }));
var _a$4;
const $$SongVolume = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$4 || (_a$4 = __template$4(["", '<div class="song-volume-container" data-astro-cid-243r45sf> ', " ", " ", ` </div> <script type="module">
  const [volume, mute] = document.querySelectorAll('.volume-icon');

  const toggleVolumeIcon = (value = null) => {
    if (value) {
      volume.classList.remove('hidden');
      mute.classList.add('hidden');
    } else if (value === false) {
      volume.classList.add('hidden');
      mute.classList.remove('hidden');
    }
  };

  document.addEventListener('click', e => {
    if (e.target === volume) {
      toggleVolumeIcon(false);
      document.dispatchEvent(
        new CustomEvent('mutedByClick', {
          composed: true,
          bubbles: true,
          detail: { muteado: true}
        })
      );
    }
    if (e.target === mute) {
      toggleVolumeIcon(true);
      document.dispatchEvent(
        new CustomEvent('mutedByClick', {
          composed: true,
          bubbles: true,
          detail: { muteado: false}
        })
      );
    }
  });

  document.addEventListener('volume:mute', () => toggleVolumeIcon(false));
  document.addEventListener('volume:unmute', () => toggleVolumeIcon(true));
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Volume", $$Volume, { "class": "volume-icon", "data-astro-cid-243r45sf": true }), renderComponent($$result, "Volumeoff", $$Volumeoff, { "class": "volume-icon hidden", "hidden": true, "data-astro-cid-243r45sf": true }), renderComponent($$result, "progress-slider", "progress-slider", { "class": "slider", "id": "volume", "value": "100", "data-astro-cid-243r45sf": true }));
}, "C:/Users/amoil/Desktop/PlaylistHub/src/ui/Player/SongVolume.astro", void 0);
const $$Astro$8 = createAstro();
const $$Heartvoid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Heartvoid;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 24 24"${spreadAttributes(Astro2.props)}> <path fill="currentColor" d="m12.67 20.74l-.67.61l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 1.43-.5 2.76-1.38 4.11c-.62-.3-1.31-.5-2.03-.57C19.5 10.8 20 9.65 20 8.5c0-2-1.5-3.5-3.5-3.5c-1.54 0-3.04 1-3.57 2.36h-1.86C10.54 6 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.89 10.05l.11.1l.04-.04c.08.76.3 1.48.63 2.13M17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></path></svg>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/icons/heartvoid.astro", void 0);
const $$Astro$7 = createAstro();
const $$Heartfull = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Heartfull;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 24 24"${spreadAttributes(Astro2.props)}> <path fill="currentColor" d="M12 18c0 1 .25 1.92.67 2.74l-.67.61l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 1.43-.5 2.76-1.38 4.11c-.79-.38-1.68-.61-2.62-.61c-3.31 0-6 2.69-6 6m7-4h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path></svg>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/icons/heartfull.astro", void 0);
var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$6 = createAstro();
const $$SongInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SongInfo;
  const title = "";
  const artist = "";
  const user = await Astro2.locals.currentUser();
  return renderTemplate(_a$3 || (_a$3 = __template$3(["<script type=\"module\">\n  const addCoverCard = link => {\n    const existentCoverCard = document.querySelector('cover-card');\n    if (existentCoverCard) existentCoverCard.remove();\n\n    const coverCard = document.createElement('cover-card');\n    coverCard.setAttribute('src', link);\n    document.body.append(coverCard);\n  };\n\n  const image = document.querySelector('.song-info-container img');\n  image.addEventListener('click', () => addCoverCard(image.src));\n\n  document.addEventListener('player:update-info', ({ detail }) => {\n    const {\n      songData: { title, artist, urlPoster, slug, album },\n      autoplay\n    } = detail;\n\n    const container = document.querySelector('.song-info-container');\n    const titleTag = container.querySelector('.title');\n    const artistTag = container.querySelector('.artist');\n    const imageTag = container.querySelector('img');\n\n    titleTag.textContent = title;\n    artistTag.textContent = artist;\n    imageTag.src = urlPoster;\n    imageTag.alt = title;\n    document.body.style.setProperty('--song-image', `url(${imageTag.src})`);\n\n    autoplay && addCoverCard(imageTag.src);\n  });\n<\/script>", '<div class="song-info-container" data-astro-cid-777hvpqc> <img src="./assets/transparent.png" class="left" data-astro-cid-777hvpqc> <div class="right" data-astro-cid-777hvpqc> <p class="title" data-astro-cid-777hvpqc>', '</p> <p class="artist" data-astro-cid-777hvpqc>', "</p> </div> ", " </div> <script>\n  document.addEventListener('click', e => {\n    if (e.target.matches('.heartEmpty')) {\n      const heartEmpty = e.target;\n      heartEmpty.classList.toggle('isSaved');\n    }\n  });\n<\/script>"], ["<script type=\"module\">\n  const addCoverCard = link => {\n    const existentCoverCard = document.querySelector('cover-card');\n    if (existentCoverCard) existentCoverCard.remove();\n\n    const coverCard = document.createElement('cover-card');\n    coverCard.setAttribute('src', link);\n    document.body.append(coverCard);\n  };\n\n  const image = document.querySelector('.song-info-container img');\n  image.addEventListener('click', () => addCoverCard(image.src));\n\n  document.addEventListener('player:update-info', ({ detail }) => {\n    const {\n      songData: { title, artist, urlPoster, slug, album },\n      autoplay\n    } = detail;\n\n    const container = document.querySelector('.song-info-container');\n    const titleTag = container.querySelector('.title');\n    const artistTag = container.querySelector('.artist');\n    const imageTag = container.querySelector('img');\n\n    titleTag.textContent = title;\n    artistTag.textContent = artist;\n    imageTag.src = urlPoster;\n    imageTag.alt = title;\n    document.body.style.setProperty('--song-image', \\`url(\\${imageTag.src})\\`);\n\n    autoplay && addCoverCard(imageTag.src);\n  });\n<\/script>", '<div class="song-info-container" data-astro-cid-777hvpqc> <img src="./assets/transparent.png" class="left" data-astro-cid-777hvpqc> <div class="right" data-astro-cid-777hvpqc> <p class="title" data-astro-cid-777hvpqc>', '</p> <p class="artist" data-astro-cid-777hvpqc>', "</p> </div> ", " </div> <script>\n  document.addEventListener('click', e => {\n    if (e.target.matches('.heartEmpty')) {\n      const heartEmpty = e.target;\n      heartEmpty.classList.toggle('isSaved');\n    }\n  });\n<\/script>"])), maybeRenderHead(), title, artist, user && renderTemplate`<aside class="last" data-astro-cid-777hvpqc> ${renderComponent($$result, "HeartEmpty", $$Heartvoid, { "class": "heartEmpty", "data-astro-cid-777hvpqc": true })} ${renderComponent($$result, "HeartFull", $$Heartfull, { "class": "heartFull", "data-astro-cid-777hvpqc": true })} <img class="confetti" src="/assets/confetti.gif" alt="Confetti Image" data-astro-cid-777hvpqc> </aside>`);
}, "C:/Users/amoil/Desktop/PlaylistHub/src/ui/Player/SongInfo.astro", void 0);
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$MusicPlayer = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<script type=\"module\">\n  import { MusicPlayer } from './modules/MusicPlayer.js';\n  import NamesOfPlaylists from './data/playlist.json' with { type: 'json' };\n  const allSlugs = NamesOfPlaylists.map(({ slug }) => slug);\n  const randomSlug = ~~(Math.random() * allSlugs.length);\n  const slug = allSlugs[randomSlug];\n  const playlistCorriente = await import(`./data/${slug}.json`, {\n    with: { type: 'json' }\n  });\n  const playlistCorrienteJson = playlistCorriente.default;\n  const randonNumSong = ~~(Math.random() * playlistCorrienteJson.length);\n  const playlistName = slug;\n  const id = randonNumSong + 1;\n  const musicPlayer = new MusicPlayer(playlistName, id);\n\n  const buttons = {\n    play: document.querySelector('.song-player-container .play'),\n    prev: document.querySelector('.song-player-container .prev'),\n    next: document.querySelector('.song-player-container .next'),\n    shuffle: document.querySelector('.song-player-container .shuffle'),\n    repeat: document.querySelector('.song-player-container .repeat')\n  };\n\n  buttons.play.addEventListener('click', () => musicPlayer.play());\n  buttons.prev.addEventListener('click', () => musicPlayer.prev());\n  buttons.next.addEventListener('click', () => musicPlayer.next());\n  buttons.repeat.addEventListener('click', () =>\n    buttons.repeat.classList.toggle('disabled')\n  );\n  buttons.shuffle.addEventListener('click', () => {\n    buttons.shuffle.classList.toggle('disabled');\n    musicPlayer.sortSongs();\n  });\n\n  setTimeout(() => {\n    const songInfo = musicPlayer.getInfoSong();\n    if (songInfo) {\n      let { title: ButtonTitle, artist, album } = songInfo;\n      musicPlayer.updateItemClicked({ ButtonTitle, artist, album });\n      document\n        .querySelector('.title-green')\n        ?.classList.add('playlist-item-active');\n    } else {\n      document\n        .querySelector('.title-green')\n        ?.classList.add('playlist-item-active');\n    }\n  }, 50);\n\n  const playlistItems = document.querySelectorAll('.playlist-item');\n  playlistItems.forEach(playlist => {\n    playlist.addEventListener('click', async () => {\n      const slug = playlist.dataset.id;\n      let title = playlist.querySelector('.title').textContent;\n\n      document\n        .querySelectorAll('.playlist-item-active')\n        .forEach(el => el.classList.remove('playlist-item-active'));\n      playlist.classList.add('playlist-item-active');\n\n      setTimeout(() => {\n        const { title: ButtonTitle, artist, album } = musicPlayer.getInfoSong();\n\n        musicPlayer.updateItemClicked({ ButtonTitle, artist, album });\n      }, 300);\n\n      await musicPlayer.selectList(slug, title, playlist.dataset.color);\n    });\n  });\n\n  const songPlaylist = document.querySelector('.song.playlist');\n  songPlaylist.addEventListener('click', ev => {\n    const isClick = ev.detail === 1;\n\n    if (isClick) {\n      const newSongs = [...document.querySelectorAll('song-item')].map(song =>\n        song.getData()\n      );\n      musicPlayer.setSongs(newSongs);\n      const rowItem = ev\n        .composedPath()\n        .find(tag => tag.classList?.contains('row-item'));\n      let id = Number(rowItem.dataset?.id);\n      let newIndex = id;\n      if (musicPlayer.isShuffle) {\n        newIndex = musicPlayer.songList.findIndex(song => song.index === id);\n      }\n\n      if (rowItem) {\n        musicPlayer.prepare(newIndex);\n        musicPlayer.play();\n        musicPlayer.togglePlayPause(true);\n      }\n    }\n  });\n<\/script>"], ["<script type=\"module\">\n  import { MusicPlayer } from './modules/MusicPlayer.js';\n  import NamesOfPlaylists from './data/playlist.json' with { type: 'json' };\n  const allSlugs = NamesOfPlaylists.map(({ slug }) => slug);\n  const randomSlug = ~~(Math.random() * allSlugs.length);\n  const slug = allSlugs[randomSlug];\n  const playlistCorriente = await import(\\`./data/\\${slug}.json\\`, {\n    with: { type: 'json' }\n  });\n  const playlistCorrienteJson = playlistCorriente.default;\n  const randonNumSong = ~~(Math.random() * playlistCorrienteJson.length);\n  const playlistName = slug;\n  const id = randonNumSong + 1;\n  const musicPlayer = new MusicPlayer(playlistName, id);\n\n  const buttons = {\n    play: document.querySelector('.song-player-container .play'),\n    prev: document.querySelector('.song-player-container .prev'),\n    next: document.querySelector('.song-player-container .next'),\n    shuffle: document.querySelector('.song-player-container .shuffle'),\n    repeat: document.querySelector('.song-player-container .repeat')\n  };\n\n  buttons.play.addEventListener('click', () => musicPlayer.play());\n  buttons.prev.addEventListener('click', () => musicPlayer.prev());\n  buttons.next.addEventListener('click', () => musicPlayer.next());\n  buttons.repeat.addEventListener('click', () =>\n    buttons.repeat.classList.toggle('disabled')\n  );\n  buttons.shuffle.addEventListener('click', () => {\n    buttons.shuffle.classList.toggle('disabled');\n    musicPlayer.sortSongs();\n  });\n\n  setTimeout(() => {\n    const songInfo = musicPlayer.getInfoSong();\n    if (songInfo) {\n      let { title: ButtonTitle, artist, album } = songInfo;\n      musicPlayer.updateItemClicked({ ButtonTitle, artist, album });\n      document\n        .querySelector('.title-green')\n        ?.classList.add('playlist-item-active');\n    } else {\n      document\n        .querySelector('.title-green')\n        ?.classList.add('playlist-item-active');\n    }\n  }, 50);\n\n  const playlistItems = document.querySelectorAll('.playlist-item');\n  playlistItems.forEach(playlist => {\n    playlist.addEventListener('click', async () => {\n      const slug = playlist.dataset.id;\n      let title = playlist.querySelector('.title').textContent;\n\n      document\n        .querySelectorAll('.playlist-item-active')\n        .forEach(el => el.classList.remove('playlist-item-active'));\n      playlist.classList.add('playlist-item-active');\n\n      setTimeout(() => {\n        const { title: ButtonTitle, artist, album } = musicPlayer.getInfoSong();\n\n        musicPlayer.updateItemClicked({ ButtonTitle, artist, album });\n      }, 300);\n\n      await musicPlayer.selectList(slug, title, playlist.dataset.color);\n    });\n  });\n\n  const songPlaylist = document.querySelector('.song.playlist');\n  songPlaylist.addEventListener('click', ev => {\n    const isClick = ev.detail === 1;\n\n    if (isClick) {\n      const newSongs = [...document.querySelectorAll('song-item')].map(song =>\n        song.getData()\n      );\n      musicPlayer.setSongs(newSongs);\n      const rowItem = ev\n        .composedPath()\n        .find(tag => tag.classList?.contains('row-item'));\n      let id = Number(rowItem.dataset?.id);\n      let newIndex = id;\n      if (musicPlayer.isShuffle) {\n        newIndex = musicPlayer.songList.findIndex(song => song.index === id);\n      }\n\n      if (rowItem) {\n        musicPlayer.prepare(newIndex);\n        musicPlayer.play();\n        musicPlayer.togglePlayPause(true);\n      }\n    }\n  });\n<\/script>"])));
}, "C:/Users/amoil/Desktop/PlaylistHub/src/components/MusicPlayer.astro", void 0);
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$ProgressSlider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script type=\"module\">\n  import { emitEvent } from './modules/emitter.js';\n\n  class ProgressSlider extends HTMLElement {\n    constructor() {\n      super();\n      this.attachShadow({ mode: 'open' });\n    }\n\n    connectedCallback() {\n      this.render();\n      this.setValue(this.getAttribute('value') ?? 0);\n\n      const barContainer = this.shadowRoot.querySelector('.bar-container');\n\n      const STEP = 0.01;\n      let isDragging = false;\n\n      const updateProgress = ({ clientX }) => {\n        const { left, width } = barContainer.getBoundingClientRect();\n        const clamped = Math.min(Math.max(0, clientX - left), width);\n        const percentage = (clamped * 100) / width;\n\n        this.setValue(percentage);\n\n        if (this.id === 'current-song')\n          emitEvent('song:changetime', this, percentage);\n        if (this.id === 'volume') emitEvent('volume:change', this, percentage);\n      };\n\n      // Click to set\n      barContainer.addEventListener('click', ({ offsetX }) => {\n        const width = barContainer.getBoundingClientRect().width;\n        const percentage = (Math.min(Math.max(0, offsetX), width) * 100) / width;\n\n        this.setValue(percentage);\n\n        if (this.id === 'current-song')\n          emitEvent('song:changetime', this, percentage);\n        if (this.id === 'volume') emitEvent('volume:change', this, percentage);\n      });\n\n      // Wheel scroll to adjust\n      barContainer.addEventListener(\n        'wheel',\n        ({ deltaY }) => {\n          const direction = deltaY < 0 ? STEP : -STEP;\n          const current = parseFloat(this.getAttribute('value')) || 0;\n          const nextValue = Math.max(0, Math.min(current + direction * 100, 100));\n\n          this.setValue(nextValue);\n\n          if (this.id === 'current-song')\n            emitEvent('song:slidetime', this, direction);\n          if (this.id === 'volume') emitEvent('volume:slide', this, direction);\n        },\n        { passive: true }\n      );\n\n      // Mouse drag\n      barContainer.addEventListener('mousedown', e => {\n        isDragging = true;\n        updateProgress(e);\n      });\n\n      document.addEventListener('mousemove', e => {\n        if (isDragging) updateProgress(e);\n      });\n\n      document.addEventListener('mouseup', () => {\n        isDragging = false;\n      });\n\n      // Volume external update\n      document.addEventListener('volumeNewProgress', ({ detail }) => {\n        if (this.id !== 'volume') return;\n\n        const { muteado, lastVolume } = detail;\n        const volume = muteado ? 0 : lastVolume * 100;\n        this.setValue(volume);\n      });\n    }\n\n    setValue(value) {\n      const rounded = Math.round(value * 100) / 100;\n      const current = parseFloat(this.style.getPropertyValue('--progress')) || 0;\n\n      // Solo actualiza si hay diferencia visual clara (> 0.5%)\n      if (Math.abs(rounded - current) > 0.5) {\n        this.style.setProperty('--progress', `${rounded}%`);\n      }\n\n      this.setAttribute('value', rounded);\n    }\n\n    render() {\n      this.shadowRoot.innerHTML = /* html */ `\n    <style>${ProgressSlider.styles}</style>\n    <div class=\"bar-container\">\n      <div class=\"bar\"></div>\n    </div>\n  `;\n    }\n\n    static get styles() {\n      return /* css */ `\n    :host {\n      --progress: 0%;\n    }\n\n    * {\n      cursor: pointer;\n    }\n\n    .bar-container {\n      background: #555;\n      height: 0.28vmax;\n      border-radius: 1vmax;\n    }\n\n    .bar-container .bar {\n      width: var(--progress);\n      height: 100%;\n      background-color: var(--theme-color);\n      transition: background-color 0.2s ease;\n      position: relative;\n      border-radius: 1vmax;\n    }\n\n    .bar-container .bar::before {\n      content: '';\n      --circle-size: 0.8vmax;\n      width: var(--circle-size);\n      height: var(--circle-size);\n      position: absolute;\n      top: 50%;\n      transform: translateX(40%) translateY(-50%);\n      right: 0%;\n      background: #fff;\n      border-radius: 50%;\n      z-index: 50;\n    }\n  `;\n    }\n  }\n\n  customElements.define('progress-slider', ProgressSlider);\n<\/script>"], ["<script type=\"module\">\n  import { emitEvent } from './modules/emitter.js';\n\n  class ProgressSlider extends HTMLElement {\n    constructor() {\n      super();\n      this.attachShadow({ mode: 'open' });\n    }\n\n    connectedCallback() {\n      this.render();\n      this.setValue(this.getAttribute('value') ?? 0);\n\n      const barContainer = this.shadowRoot.querySelector('.bar-container');\n\n      const STEP = 0.01;\n      let isDragging = false;\n\n      const updateProgress = ({ clientX }) => {\n        const { left, width } = barContainer.getBoundingClientRect();\n        const clamped = Math.min(Math.max(0, clientX - left), width);\n        const percentage = (clamped * 100) / width;\n\n        this.setValue(percentage);\n\n        if (this.id === 'current-song')\n          emitEvent('song:changetime', this, percentage);\n        if (this.id === 'volume') emitEvent('volume:change', this, percentage);\n      };\n\n      // Click to set\n      barContainer.addEventListener('click', ({ offsetX }) => {\n        const width = barContainer.getBoundingClientRect().width;\n        const percentage = (Math.min(Math.max(0, offsetX), width) * 100) / width;\n\n        this.setValue(percentage);\n\n        if (this.id === 'current-song')\n          emitEvent('song:changetime', this, percentage);\n        if (this.id === 'volume') emitEvent('volume:change', this, percentage);\n      });\n\n      // Wheel scroll to adjust\n      barContainer.addEventListener(\n        'wheel',\n        ({ deltaY }) => {\n          const direction = deltaY < 0 ? STEP : -STEP;\n          const current = parseFloat(this.getAttribute('value')) || 0;\n          const nextValue = Math.max(0, Math.min(current + direction * 100, 100));\n\n          this.setValue(nextValue);\n\n          if (this.id === 'current-song')\n            emitEvent('song:slidetime', this, direction);\n          if (this.id === 'volume') emitEvent('volume:slide', this, direction);\n        },\n        { passive: true }\n      );\n\n      // Mouse drag\n      barContainer.addEventListener('mousedown', e => {\n        isDragging = true;\n        updateProgress(e);\n      });\n\n      document.addEventListener('mousemove', e => {\n        if (isDragging) updateProgress(e);\n      });\n\n      document.addEventListener('mouseup', () => {\n        isDragging = false;\n      });\n\n      // Volume external update\n      document.addEventListener('volumeNewProgress', ({ detail }) => {\n        if (this.id !== 'volume') return;\n\n        const { muteado, lastVolume } = detail;\n        const volume = muteado ? 0 : lastVolume * 100;\n        this.setValue(volume);\n      });\n    }\n\n    setValue(value) {\n      const rounded = Math.round(value * 100) / 100;\n      const current = parseFloat(this.style.getPropertyValue('--progress')) || 0;\n\n      // Solo actualiza si hay diferencia visual clara (> 0.5%)\n      if (Math.abs(rounded - current) > 0.5) {\n        this.style.setProperty('--progress', \\`\\${rounded}%\\`);\n      }\n\n      this.setAttribute('value', rounded);\n    }\n\n    render() {\n      this.shadowRoot.innerHTML = /* html */ \\`\n    <style>\\${ProgressSlider.styles}</style>\n    <div class=\"bar-container\">\n      <div class=\"bar\"></div>\n    </div>\n  \\`;\n    }\n\n    static get styles() {\n      return /* css */ \\`\n    :host {\n      --progress: 0%;\n    }\n\n    * {\n      cursor: pointer;\n    }\n\n    .bar-container {\n      background: #555;\n      height: 0.28vmax;\n      border-radius: 1vmax;\n    }\n\n    .bar-container .bar {\n      width: var(--progress);\n      height: 100%;\n      background-color: var(--theme-color);\n      transition: background-color 0.2s ease;\n      position: relative;\n      border-radius: 1vmax;\n    }\n\n    .bar-container .bar::before {\n      content: '';\n      --circle-size: 0.8vmax;\n      width: var(--circle-size);\n      height: var(--circle-size);\n      position: absolute;\n      top: 50%;\n      transform: translateX(40%) translateY(-50%);\n      right: 0%;\n      background: #fff;\n      border-radius: 50%;\n      z-index: 50;\n    }\n  \\`;\n    }\n  }\n\n  customElements.define('progress-slider', ProgressSlider);\n<\/script>"])));
}, "C:/Users/amoil/Desktop/PlaylistHub/src/components/ProgressSlider.astro", void 0);
const $$Astro$5 = createAstro();
const $$Forward = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Forward;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} data-encore-id="icon" fill="currentColor" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"> <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path> </svg>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/icons/forward.astro", void 0);
const $$Astro$4 = createAstro();
const $$Repeat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Repeat;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"> <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path> </svg>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/icons/repeat.astro", void 0);
const $$Astro$3 = createAstro();
const $$Backwards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Backwards;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"> <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path> </svg>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/icons/backwards.astro", void 0);
const $$Astro$2 = createAstro();
const $$Shuffle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Shuffle;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"> <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path> <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path> </svg>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/icons/shuffle.astro", void 0);
const $$Astro$1 = createAstro();
const $$Play = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Play;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"></path></svg>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/icons/play.astro", void 0);
const $$Astro = createAstro();
const $$Pause = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pause;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill="currentColor" d="M6 5h4v14H6zm8 0h4v14h-4z"></path> </svg>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/icons/pause.astro", void 0);
const $$SongPlayer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProgressSlider", $$ProgressSlider, { "data-astro-cid-aomgrfx3": true })}  ${renderComponent($$result, "MusicPlayer", $$MusicPlayer, { "data-astro-cid-aomgrfx3": true })} ${maybeRenderHead()}<div class="song-player-container" data-astro-cid-aomgrfx3> <div class="buttons" data-astro-cid-aomgrfx3> <button class="shuffle disabled" data-astro-cid-aomgrfx3> ${renderComponent($$result, "Shuffle", $$Shuffle, { "class": "btn-icon", "data-astro-cid-aomgrfx3": true })} </button> <button class="prev" data-astro-cid-aomgrfx3> ${renderComponent($$result, "Backward", $$Backwards, { "class": "btn-icon", "data-astro-cid-aomgrfx3": true })} </button> <button class="play circle" data-astro-cid-aomgrfx3> <div class="play" data-astro-cid-aomgrfx3> ${renderComponent($$result, "Play", $$Play, { "class": "btn-in-circle", "data-astro-cid-aomgrfx3": true })} </div> <div class="pause" hidden data-astro-cid-aomgrfx3> ${renderComponent($$result, "Pause", $$Pause, { "class": "btn-in-circle", "data-astro-cid-aomgrfx3": true })} </div> </button> <button class="next" data-astro-cid-aomgrfx3> ${renderComponent($$result, "Forward", $$Forward, { "class": "btn-icon", "data-astro-cid-aomgrfx3": true })} </button> <button class="repeat disabled" data-astro-cid-aomgrfx3> ${renderComponent($$result, "Repeat", $$Repeat, { "class": "btn-icon", "data-astro-cid-aomgrfx3": true })} </button> </div> <div class="time-container" data-astro-cid-aomgrfx3> <time data-astro-cid-aomgrfx3>00:00</time> ${renderComponent($$result, "progress-slider", "progress-slider", { "id": "current-song", "data-astro-cid-aomgrfx3": true })} <time data-astro-cid-aomgrfx3>00:00</time> </div> </div>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/ui/Player/SongPlayer.astro", void 0);
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-lxeybmsx> ${renderComponent($$result, "SongInfo", $$SongInfo, { "data-astro-cid-lxeybmsx": true })} ${renderComponent($$result, "SongPlayer", $$SongPlayer, { "data-astro-cid-lxeybmsx": true })} ${renderComponent($$result, "SongVolume", $$SongVolume, { "data-astro-cid-lxeybmsx": true })} </div>`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/ui/Player/index.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$CoverCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<script type="module">
  import AtroposComponent from './modules/atropos.js';
  import { setAnimation } from './modules/setAnimation.js';
  customElements.define('atropos-component', AtroposComponent);

  class CoverCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    static get styles() {
      return /* css */ \`
        :host {
          display: block;
          position: absolute;
          inset: 0;
          bottom: -10px;
          background: #0004;
          z-index: 50;
          backdrop-filter: blur(0.5vmax);
          height: calc(100vh - var(--player-height));
        }

        atropos-component {
          --size: 22vmax;
          width: var(--size);
          height: var(--size);
          z-index: 5;
          padding: 0;
          border: 0;
          position: absolute;
          left: calc(50% - var(--size) / 2);
          top: calc(50% - var(--size) / 2);

          & .cover {
            max-width: var(--size);
            max-height: var(--size);
            z-index: 10;
            position: absolute;
            top: 0;
            left: 0;

            &::after {
              content: "";
              background: url("./assets/cover-texture.avif");
              width: var(--size);
              height: var(--size);
              background-size: var(--size);
              top: 0;
              left: 0;
              background-position: center;
              mix-blend-mode: screen;
              opacity: 15%;
              position: absolute;
              pointer-events: none;
            }

            &::before {
              content: "";
              width: calc(var(--size) + 60px);
              height: calc(var(--size) + 60px);
              background: radial-gradient(#0000 50%, #000);
              background-size: cover;
              background-position: center;
              position: absolute;
              mix-blend-mode: overlay;
              z-index: 10;
              top: 0;
              left: 0;
              pointer-events: none;
            }
          }

 
          img {
            width: var(--size);
            height: var(--size);
            height: 100%;
            object-fit: cover;
          }
        }
      \`;
    }

    connectedCallback() {
      this.image = this.getAttribute('src');
      this.render();
      this.addEventListener('click', () => this.remove());

      const atroposComponent = this.shadowRoot.querySelector('atropos-component');
      setAnimation(atroposComponent);
    }

    render() {
      this.shadowRoot.innerHTML = /* html */ \`
        <style>\${CoverCard.styles}</style>
        <atropos-component>
          <img src="\${this.image}" alt="Cover Single Image">
          <div class="cover"></div>
        </atropos-component>
      \`;
    }
  }

  customElements.define('cover-card', CoverCard);
<\/script>`], [`<script type="module">
  import AtroposComponent from './modules/atropos.js';
  import { setAnimation } from './modules/setAnimation.js';
  customElements.define('atropos-component', AtroposComponent);

  class CoverCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    static get styles() {
      return /* css */ \\\`
        :host {
          display: block;
          position: absolute;
          inset: 0;
          bottom: -10px;
          background: #0004;
          z-index: 50;
          backdrop-filter: blur(0.5vmax);
          height: calc(100vh - var(--player-height));
        }

        atropos-component {
          --size: 22vmax;
          width: var(--size);
          height: var(--size);
          z-index: 5;
          padding: 0;
          border: 0;
          position: absolute;
          left: calc(50% - var(--size) / 2);
          top: calc(50% - var(--size) / 2);

          & .cover {
            max-width: var(--size);
            max-height: var(--size);
            z-index: 10;
            position: absolute;
            top: 0;
            left: 0;

            &::after {
              content: "";
              background: url("./assets/cover-texture.avif");
              width: var(--size);
              height: var(--size);
              background-size: var(--size);
              top: 0;
              left: 0;
              background-position: center;
              mix-blend-mode: screen;
              opacity: 15%;
              position: absolute;
              pointer-events: none;
            }

            &::before {
              content: "";
              width: calc(var(--size) + 60px);
              height: calc(var(--size) + 60px);
              background: radial-gradient(#0000 50%, #000);
              background-size: cover;
              background-position: center;
              position: absolute;
              mix-blend-mode: overlay;
              z-index: 10;
              top: 0;
              left: 0;
              pointer-events: none;
            }
          }

 
          img {
            width: var(--size);
            height: var(--size);
            height: 100%;
            object-fit: cover;
          }
        }
      \\\`;
    }

    connectedCallback() {
      this.image = this.getAttribute('src');
      this.render();
      this.addEventListener('click', () => this.remove());

      const atroposComponent = this.shadowRoot.querySelector('atropos-component');
      setAnimation(atroposComponent);
    }

    render() {
      this.shadowRoot.innerHTML = /* html */ \\\`
        <style>\\\${CoverCard.styles}</style>
        <atropos-component>
          <img src="\\\${this.image}" alt="Cover Single Image">
          <div class="cover"></div>
        </atropos-component>
      \\\`;
    }
  }

  customElements.define('cover-card', CoverCard);
<\/script>`])));
}, "C:/Users/amoil/Desktop/PlaylistHub/src/components/CoverCard.astro", void 0);
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "PlaylistHub";
  return renderTemplate`${renderComponent($$result, "CoverCard", $$CoverCard, { "data-astro-cid-j7pv25f6": true })}  ${renderComponent($$result, "BaseLayout", $$Base, { "title": title, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-j7pv25f6> <div class="content-container" data-astro-cid-j7pv25f6> <div class="sidebar" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Sidebar", $$Index$3, { "data-astro-cid-j7pv25f6": true })} </div> <div class="content" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Content", $$Index$2, { "data-astro-cid-j7pv25f6": true })} </div> </div> <div class="player" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Player", $$Index$1, { "data-astro-cid-j7pv25f6": true })} </div> </div> ` })}`;
}, "C:/Users/amoil/Desktop/PlaylistHub/src/pages/index.astro", void 0);
const $$file = "C:/Users/amoil/Desktop/PlaylistHub/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  r as renderers
};
