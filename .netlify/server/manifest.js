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
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: new Set(["eatTheMoon.svg", "icons/facebook.svg", "icons/instagram.svg", "icons/materialUIIcons/arrow_back_ios-24px.svg", "icons/materialUIIcons/arrow_circle_down-24px.svg", "icons/materialUIIcons/arrow_circle_up-24px.svg", "icons/materialUIIcons/arrow_forward_ios-24px.svg", "icons/materialUIIcons/arrow_right_alt-24px.svg", "icons/materialUIIcons/chevron_left-24px.svg", "icons/materialUIIcons/chevron_right-24px.svg", "icons/materialUIIcons/clear_24px_outlined.svg", "icons/materialUIIcons/expand_less-24px.svg", "icons/materialUIIcons/expand_more-24px.svg", "icons/materialUIIcons/favorite-24px.svg", "icons/materialUIIcons/favorite_border-24px.svg", "icons/materialUIIcons/first_page-24px.svg", "icons/materialUIIcons/last_page-24px.svg", "icons/materialUIIcons/menu-24px.svg", "icons/materialUIIcons/menu_open-24px.svg", "icons/materialUIIcons/thumb_up-24px.svg", "icons/menuIconSplatter.afdesign", "icons/menuIconSplatter.svg", "icons/twitch.svg", "icons/twitter.svg", "icons/user.afdesign", "icons/user.svg", "icons/youtube.svg", "images/aleppo.jpg", "vectors/toHelp.svg"]),
  _: {
    mime: { ".svg": "image/svg+xml", ".jpg": "image/jpeg" },
    entry: { "file": "start-6d7739de.js", "js": ["start-6d7739de.js", "chunks/vendor-3fb5b3e0.js"], "css": ["assets/start-61d1577b.css"] },
    nodes: [
      () => Promise.resolve().then(() => __toModule(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/6.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/contact\/?$/,
        params: null,
        path: "/contact",
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/design\/?$/,
        params: null,
        path: "/design",
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/webdev\/?$/,
        params: null,
        path: "/webdev",
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/art\/?$/,
        params: null,
        path: "/art",
        a: [0, 6],
        b: [1]
      }
    ]
  }
};
