var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => _error,
  load: () => load
});
var import_index_ab720396 = __toModule(require("../../chunks/index-ab720396.js"));
var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1apd9nf{font-size:2.5rem}",
  map: null
};
function load({ error, status }) {
  return {
    props: { title: `${status}: ${error.message}` }
  };
}
const _error = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<section class="${"main-grid-layout padding"}"><div class="${"main-grid-center padding neumorph-35-flat"}"><h1 class="${"svelte-1apd9nf"}">${(0, import_index_ab720396.e)(title)}</h1></div></section>`;
});
