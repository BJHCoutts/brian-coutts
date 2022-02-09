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
  default: () => _layout
});
var import_index_544abe4e = __toModule(require("../../chunks/index-544abe4e.js"));
var Footer_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "footer.svelte-1orbzj4{background-image:url('/images/toHelpGrid.png');background-position:50% 100%;background-size:contain;background-attachment:fixed;background-repeat:no-repeat;padding-bottom:25vw}h2.svelte-1orbzj4{color:var(--fg)}",
  map: null
};
const Footer = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<footer class="${"svelte-1orbzj4"}"><div class="${"text-container main-grid-layout glassmorph-dark shadow-down"}"><div class="${"main-grid-layout-center"}"><h2 class="${"svelte-1orbzj4"}">Contact Me: <a href="${"mailto:bjhcoutts@gmail.com"}">bjhcoutts@gmail.com</a></h2></div></div></footer>`;
});
const ClearIcon = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"clear_24px"}"><path id="${"icon/content/clear_24px"}" d="${"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"}" fill="${"var(--fg)"}" fill-opacity="${"0.54"}"></path></g></svg>`;
});
const MenuIcon = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" height="${"24"}" viewBox="${"0 0 24 24"}" width="${"24"}"><path d="${"M0 0h24v24H0V0z"}" fill="${"none"}"></path><path d="${"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}" fill="${"var(--fg)"}"></path></svg>`;
});
const subscriber_queue = [];
function writable(value, start = import_index_544abe4e.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_544abe4e.a)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_544abe4e.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_544abe4e.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const menuIsOpen = writable(false);
const imageModalIsOpen = writable(false);
const imageModalUrl = writable("");
var Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "header.svelte-1gwcq60{position:sticky;top:0;left:0;right:0;z-index:3;overflow:visible;padding:1em 0}.back.svelte-1gwcq60{transform:rotateY(180deg)}.center-container.svelte-1gwcq60{display:flex;justify-content:space-between;align-items:center}.email.svelte-1gwcq60{color:var(--fg)}.email-container.svelte-1gwcq60{border-radius:5px;border:2px solid var(--accent);width:fit-content;display:grid;place-items:center;padding:.2em .4em;background-color:var(--bg);cursor:pointer;color:var(--fg);box-shadow:var(--box-shadow)}.front.svelte-1gwcq60{transform:rotateY(0deg)}.icon-container.svelte-1gwcq60{border-radius:50%;border:2px solid var(--accent);width:fit-content;aspect-ratio:1 / 1;display:grid;place-items:center;padding:.2em;background-color:var(--bg);cursor:pointer;position:absolute;transform-origin:50% 50% 0px;transition:transform .4s ease-in;backface-visibility:hidden;box-shadow:var(--box-shadow)}.place-holder.svelte-1gwcq60{height:34.39px;width:34.39px;display:inline-block}",
  map: null
};
const Header = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  let $menuIsOpen, $$unsubscribe_menuIsOpen;
  $$unsubscribe_menuIsOpen = (0, import_index_544abe4e.b)(menuIsOpen, (value) => $menuIsOpen = value);
  $$result.css.add(css$3);
  $$unsubscribe_menuIsOpen();
  return `<header class="${"main-grid-layout glassmorph shadow-down svelte-1gwcq60"}"><div class="${"main-grid-layout-center center-container svelte-1gwcq60"}"><div class="${(0, import_index_544abe4e.e)((0, import_index_544abe4e.d)(`icon-container ${$menuIsOpen ? "back" : "front"}`)) + " svelte-1gwcq60"}">${(0, import_index_544abe4e.v)(MenuIcon, "MenuIcon").$$render($$result, {}, {}, {})}</div>
		
		<div class="${(0, import_index_544abe4e.e)((0, import_index_544abe4e.d)(`icon-container ${$menuIsOpen ? "front" : "back"}`)) + " svelte-1gwcq60"}">${(0, import_index_544abe4e.v)(ClearIcon, "ClearIcon").$$render($$result, {}, {}, {})}</div>

		<div class="${"place-holder svelte-1gwcq60"}"></div>

		<a href="${"mailto: bjhcoutts@gmail.com"}" target="${"_blank"}" class="${"email-container svelte-1gwcq60"}">Contact Me: bjhcoutts@gmail.com</a></div></header>`;
});
var Menu_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "ul.svelte-1sw5ucm.svelte-1sw5ucm{list-style-type:none}li.svelte-1sw5ucm.svelte-1sw5ucm{margin-bottom:2.5em}li.svelte-1sw5ucm a.svelte-1sw5ucm{font:400 2.25rem/1.25em var(--display);text-decoration:none}.container-inner.svelte-1sw5ucm.svelte-1sw5ucm{place-items:center start;transition:clip-path 0.3s ease-in;background-color:var(--dark-overlay);position:fixed;inset:0;clip-path:circle(0px at 0% 50%);transition:clip-path 0.3s ease-in;background-color:var(--dark-overlay)}.container-outter.svelte-1sw5ucm.svelte-1sw5ucm{z-index:3;position:fixed;inset:0;clip-path:circle(0px at 0% 50%);background-color:var(--light-overlay);transition:clip-path 0.2s ease-in}.open-inner.svelte-1sw5ucm.svelte-1sw5ucm{clip-path:circle(70% at 0% 50%)}.open-outter.svelte-1sw5ucm.svelte-1sw5ucm{clip-path:circle(80% at 0% 50%)}",
  map: null
};
const Menu = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  let $menuIsOpen, $$unsubscribe_menuIsOpen;
  $$unsubscribe_menuIsOpen = (0, import_index_544abe4e.b)(menuIsOpen, (value) => $menuIsOpen = value);
  $$result.css.add(css$2);
  $$unsubscribe_menuIsOpen();
  return `<section class="${["container-outter svelte-1sw5ucm", $menuIsOpen ? "open-outter" : ""].join(" ").trim()}"><nav class="${[
    "main-grid-layout container-inner svelte-1sw5ucm",
    $menuIsOpen ? "open-inner" : ""
  ].join(" ").trim()}"><ul class="${"main-grid-center svelte-1sw5ucm"}" style="${"overflow: visible;"}"><li class="${"svelte-1sw5ucm"}"><a href="${"/"}" class="${"svelte-1sw5ucm"}">Home</a></li>

			<li class="${"svelte-1sw5ucm"}"><a href="${"webdev/"}" class="${"svelte-1sw5ucm"}">Web Development</a></li>

			<li class="${"svelte-1sw5ucm"}"><a href="${"art/"}" class="${"svelte-1sw5ucm"}">Fine Art</a></li>

			<li class="${"svelte-1sw5ucm"}"><a href="${"design/"}" class="${"svelte-1sw5ucm"}">Design</a></li>

			<li class="${"svelte-1sw5ucm"}"><a href="${"contact/"}" class="${"svelte-1sw5ucm"}">Contact</a></li></ul></nav></section>`;
});
var ImageModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".modal-image.svelte-1ed6f52{position:fixed;inset:0;background-color:hsla(0, 0%, 50%, .9);z-index:4;cursor:pointer;width:100%;height:100%;object-fit:contain;object-position:50% / 50%;cursor:pointer}",
  map: null
};
const ImageModal = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  let $imageModalIsOpen, $$unsubscribe_imageModalIsOpen;
  let $imageModalUrl, $$unsubscribe_imageModalUrl;
  $$unsubscribe_imageModalIsOpen = (0, import_index_544abe4e.b)(imageModalIsOpen, (value) => $imageModalIsOpen = value);
  $$unsubscribe_imageModalUrl = (0, import_index_544abe4e.b)(imageModalUrl, (value) => $imageModalUrl = value);
  $$result.css.add(css$1);
  $$unsubscribe_imageModalIsOpen();
  $$unsubscribe_imageModalUrl();
  return `${$imageModalIsOpen ? `<img class="${"modal-image svelte-1ed6f52"}" alt="${"fullscreen view of selected item"}"${(0, import_index_544abe4e.f)("src", $imageModalUrl, 0)}>` : ``}`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--accent:hsl(20, 20%, 70%);--bg:hsl(285, 10%, 35%);--fg:hsl(20, 20%, 85%);--white:hsl(20, 15%, 95%);--black:hsl(290, 5%, 15%);--dark-overlay:hsla(285, 10%, 25%, .9);--light-overlay:hsla(20, 20%, 70%, .80);--display:'Italiana', serif;--sans:'Work Sans', sans-serif;--header-height:50px;--main-grid-layout:[full-start]\r\n				minmax(1.25em, 1fr)\r\n					[center-start]\r\n						minmax(0, 55em)\r\n					[center-end] \r\n				minmax(1.25em, 1fr)\r\n			[full-end]\r\n			;--header-height:68.38px;--margin-bottom:6rem;--margin-bottom-small:3rem;--box-shadow:2px 2px 9px var(--black);--filter-drop-shadow:drop-shadow(3px 3px 4px var(--black));--header-box-shadow:4px hsla(0, 0%, 5%, 0.95);--shadow-down:0px 4px 4px var(--black);--shadow-up:0px -4px 4px var(--black);--text-shadow:2px 2px 6px var(--black)}*{margin:0;padding:0;box-sizing:border-box}html{background-color:var(--bg);color:var(--fg);font-family:var(--sans);scroll-behavior:smooth}a{color:var(--accent);font-style:italic}h1, h2, h3, h4, h5, h6{font-family:var(--display);margin-bottom:.45em}hr{display:block;place-self:center;width:clamp(10%, 10% + 5vw, 80%);border-width:.5em;border-color:var(--grey);border-style:none none dotted;margin:0 auto var(--margin-bottom-small);height:1em}img{max-width:100%;display:block;background-color:darkslategrey}.glassmorph{background:hsla(0, 0%, 100%, 0.20);box-shadow:0 8px 32px 0 hsla(236, 0%, 40%, 0.6);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);border:1px solid hsla(0, 0%, 100%, 0.18);padding:1em}.glassmorph-dark{background:hsla(0, 0%, 0%, 0.5);box-shadow:0 8px 32px 0 hsla(236, 0%, 40%, 0.6);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);border:1px solid hsla(0, 0%, 100%, 0.18);padding:1em}.main-grid-layout{display:grid;grid-template-columns:var(--main-grid-layout)}.main-grid-layout > *{grid-column:center}.main-grid-layout-center{grid-column:center}.main-grid-layout-full{grid-column:full}.margin-bottom{margin-bottom:var(--margin-bottom)\r\n	}.margin-bottom-small{margin-bottom:var(--margin-bottom-small)\r\n	}.shadow-down{box-shadow:var(--shadow-down)}",
  map: null
};
const _layout = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_544abe4e.v)(ImageModal, "ImageModal").$$render($$result, {}, {}, {})}

${(0, import_index_544abe4e.v)(Menu, "Menu").$$render($$result, {}, {}, {})}

${(0, import_index_544abe4e.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"main-grid-layout"}">${slots.default ? slots.default({}) : ``}</main>

${(0, import_index_544abe4e.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
