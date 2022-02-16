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
var import_index_ab720396 = __toModule(require("../../chunks/index-ab720396.js"));
const InstaGramIcon = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"16"}" height="${"16"}" viewBox="${"0 0 16 16"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M11.3013 0.5L4.58026 0.5C2.29783 0.5 0.440918 2.357 0.440918 4.63943L0.440918 11.3605C0.440918 13.643 2.29783 15.4999 4.58026 15.4999H11.3013C13.5839 15.4999 15.4408 13.6429 15.4408 11.3605V4.63943C15.4409 2.357 13.5839 0.5 11.3013 0.5ZM14.1101 11.3605C14.1101 12.9092 12.8501 14.169 11.3014 14.169H4.58026C3.03167 14.1691 1.77178 12.9092 1.77178 11.3605L1.77178 4.63943C1.77178 3.09084 3.03167 1.83086 4.58026 1.83086L11.3013 1.83086C12.85 1.83086 14.11 3.09084 14.11 4.63943V11.3605H14.1101Z"}" fill="${"var(--white)"}"></path><path d="${"M7.94078 4.13525C5.80953 4.13525 4.07568 5.8691 4.07568 8.00035C4.07568 10.1315 5.80953 11.8653 7.94078 11.8653C10.072 11.8653 11.8059 10.1315 11.8059 8.00035C11.8059 5.8691 10.072 4.13525 7.94078 4.13525ZM7.94078 10.5343C6.54346 10.5343 5.40655 9.39758 5.40655 8.00026C5.40655 6.60285 6.54337 5.46603 7.94078 5.46603C9.33819 5.46603 10.475 6.60285 10.475 8.00026C10.475 9.39758 9.3381 10.5343 7.94078 10.5343Z"}" fill="${"var(--white)"}"></path><path d="${"M11.9682 3.00635C11.7117 3.00635 11.4599 3.11016 11.2788 3.29204C11.0968 3.47304 10.9922 3.72501 10.9922 3.98232C10.9922 4.23882 11.0969 4.49071 11.2788 4.67259C11.4598 4.85359 11.7117 4.95828 11.9682 4.95828C12.2255 4.95828 12.4765 4.85359 12.6584 4.67259C12.8403 4.49071 12.9441 4.23873 12.9441 3.98232C12.9441 3.72501 12.8403 3.47304 12.6584 3.29204C12.4774 3.11016 12.2255 3.00635 11.9682 3.00635Z"}" fill="${"var(--white)"}"></path></svg>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "footer.svelte-1orbzj4{background-image:url('/images/toHelpGrid.png');background-position:50% 100%;background-size:contain;background-attachment:fixed;background-repeat:no-repeat;padding-bottom:25vw}h2.svelte-1orbzj4{color:var(--fg)}",
  map: null
};
const Footer = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<footer class="${"svelte-1orbzj4"}"><div class="${"text-container main-grid-layout glassmorph-dark shadow-down"}"><div class="${"main-grid-layout-center"}"><h2 class="${"svelte-1orbzj4"}">Contact Me: <a href="${"mailto:bjhcoutts@gmail.com"}">bjhcoutts@gmail.com</a> or 	<a href="${"https://www.instagram.com/brian_coutts/"}">${(0, import_index_ab720396.v)(InstaGramIcon, "InstaGramIcon").$$render($$result, {}, {}, {})}</a></h2></div></div></footer>`;
});
const ClearIcon = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"clear_24px"}"><path id="${"icon/content/clear_24px"}" d="${"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"}" fill="${"var(--fg)"}" fill-opacity="${"0.54"}"></path></g></svg>`;
});
const MenuIcon = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" height="${"24"}" viewBox="${"0 0 24 24"}" width="${"24"}"><path d="${"M0 0h24v24H0V0z"}" fill="${"none"}"></path><path d="${"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}" fill="${"var(--fg)"}"></path></svg>`;
});
const subscriber_queue = [];
function writable(value, start = import_index_ab720396.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_ab720396.a)(value, new_value)) {
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
  function subscribe2(run, invalidate = import_index_ab720396.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_ab720396.n;
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
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = (0, import_index_ab720396.b)();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = (0, import_index_ab720396.b)();
      cancel_task = false;
      task = (0, import_index_ab720396.l)((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const menuIsOpen = writable(false);
const imageModalIsOpen = writable(false);
const imageModalUrl = writable("");
const innerMenuSpring = spring(0, {
  stiffness: 0.1,
  damping: 0.7
});
const outerMenuSpring = spring(0, {
  stiffness: 0.2,
  damping: 0.9
});
var Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "header.svelte-1gwcq60{position:sticky;top:0;left:0;right:0;z-index:3;overflow:visible;padding:1em 0}.back.svelte-1gwcq60{transform:rotateY(180deg)}.center-container.svelte-1gwcq60{display:flex;justify-content:space-between;align-items:center}.email.svelte-1gwcq60{color:var(--fg)}.email-container.svelte-1gwcq60{border-radius:5px;border:2px solid var(--accent);width:fit-content;display:grid;place-items:center;padding:.2em .4em;background-color:var(--bg);cursor:pointer;color:var(--fg);box-shadow:var(--box-shadow)}.front.svelte-1gwcq60{transform:rotateY(0deg)}.icon-container.svelte-1gwcq60{border-radius:50%;border:2px solid var(--accent);width:fit-content;aspect-ratio:1 / 1;display:grid;place-items:center;padding:.2em;background-color:var(--bg);cursor:pointer;position:absolute;transform-origin:50% 50% 0px;transition:transform .4s ease-in;backface-visibility:hidden;box-shadow:var(--box-shadow)}.place-holder.svelte-1gwcq60{height:34.39px;width:34.39px;display:inline-block}",
  map: null
};
const Header = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  let $menuIsOpen, $$unsubscribe_menuIsOpen;
  $$unsubscribe_menuIsOpen = (0, import_index_ab720396.d)(menuIsOpen, (value) => $menuIsOpen = value);
  $$result.css.add(css$3);
  $$unsubscribe_menuIsOpen();
  return `<header class="${"main-grid-layout glassmorph shadow-down svelte-1gwcq60"}"><div class="${"main-grid-layout-center center-container svelte-1gwcq60"}"><div class="${(0, import_index_ab720396.e)((0, import_index_ab720396.f)(`icon-container ${$menuIsOpen ? "back" : "front"}`)) + " svelte-1gwcq60"}">${(0, import_index_ab720396.v)(MenuIcon, "MenuIcon").$$render($$result, {}, {}, {})}</div>
		
		<div class="${(0, import_index_ab720396.e)((0, import_index_ab720396.f)(`icon-container ${$menuIsOpen ? "front" : "back"}`)) + " svelte-1gwcq60"}">${(0, import_index_ab720396.v)(ClearIcon, "ClearIcon").$$render($$result, {}, {}, {})}</div>

		<div class="${"place-holder svelte-1gwcq60"}"></div>

		<a href="${"mailto: bjhcoutts@gmail.com"}" target="${"_blank"}" class="${"email-container svelte-1gwcq60"}">Contact Me: bjhcoutts@gmail.com</a></div></header>`;
});
var Menu_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "ul.svelte-1ey8ibe.svelte-1ey8ibe{list-style-type:none}li.svelte-1ey8ibe.svelte-1ey8ibe{margin-bottom:2.5em}li.svelte-1ey8ibe a.svelte-1ey8ibe{font:400 2.25rem/1.25em var(--display);text-decoration:none}.container-inner.svelte-1ey8ibe.svelte-1ey8ibe{place-items:center start;background-color:var(--dark-overlay);position:fixed;inset:0;background-color:var(--dark-overlay)}.container-outter.svelte-1ey8ibe.svelte-1ey8ibe{z-index:3;position:fixed;inset:0;background-color:var(--light-overlay)}",
  map: null
};
const Menu = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  let $outerMenuSpring, $$unsubscribe_outerMenuSpring;
  let $innerMenuSpring, $$unsubscribe_innerMenuSpring;
  $$unsubscribe_outerMenuSpring = (0, import_index_ab720396.d)(outerMenuSpring, (value) => $outerMenuSpring = value);
  $$unsubscribe_innerMenuSpring = (0, import_index_ab720396.d)(innerMenuSpring, (value) => $innerMenuSpring = value);
  $$result.css.add(css$2);
  $$unsubscribe_outerMenuSpring();
  $$unsubscribe_innerMenuSpring();
  return `<section class="${"container-outter svelte-1ey8ibe"}"${(0, import_index_ab720396.g)("style", `clip-path: circle(${$outerMenuSpring}% at 0% 50%);`, 0)}><nav class="${"main-grid-layout container-inner svelte-1ey8ibe"}"${(0, import_index_ab720396.g)("style", `clip-path: circle(${$innerMenuSpring}% at 0% 50%);`, 0)}><ul class="${"main-grid-center svelte-1ey8ibe"}" style="${"overflow: visible;"}"><li class="${"svelte-1ey8ibe"}"><a href="${"/"}" class="${"svelte-1ey8ibe"}">Home</a></li>

			<li class="${"svelte-1ey8ibe"}"><a href="${"webdev/"}" class="${"svelte-1ey8ibe"}">Web Development</a></li>

			<li class="${"svelte-1ey8ibe"}"><a href="${"art/"}" class="${"svelte-1ey8ibe"}">Fine Art</a></li>

			<li class="${"svelte-1ey8ibe"}"><a href="${"design/"}" class="${"svelte-1ey8ibe"}">Design</a></li>

			<li class="${"svelte-1ey8ibe"}"><a href="${"contact/"}" class="${"svelte-1ey8ibe"}">Contact</a></li></ul></nav></section>`;
});
var ImageModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".modal-image.svelte-1ed6f52{position:fixed;inset:0;background-color:hsla(0, 0%, 50%, .9);z-index:4;cursor:pointer;width:100%;height:100%;object-fit:contain;object-position:50% / 50%;cursor:pointer}",
  map: null
};
const ImageModal = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  let $imageModalIsOpen, $$unsubscribe_imageModalIsOpen;
  let $imageModalUrl, $$unsubscribe_imageModalUrl;
  $$unsubscribe_imageModalIsOpen = (0, import_index_ab720396.d)(imageModalIsOpen, (value) => $imageModalIsOpen = value);
  $$unsubscribe_imageModalUrl = (0, import_index_ab720396.d)(imageModalUrl, (value) => $imageModalUrl = value);
  $$result.css.add(css$1);
  $$unsubscribe_imageModalIsOpen();
  $$unsubscribe_imageModalUrl();
  return `${$imageModalIsOpen ? `<img class="${"modal-image svelte-1ed6f52"}" alt="${"fullscreen view of selected item"}"${(0, import_index_ab720396.g)("src", $imageModalUrl, 0)}>` : ``}`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--accent:hsl(20, 20%, 70%);--bg:hsl(285, 10%, 35%);--fg:hsl(20, 20%, 85%);--white:hsl(20, 15%, 95%);--black:hsl(290, 5%, 15%);--dark-overlay:hsla(285, 10%, 25%, .9);--light-overlay:hsla(20, 20%, 70%, .80);--display:'Italiana', serif;--sans:'Work Sans', sans-serif;--header-height:50px;--main-grid-layout:[full-start]\r\n				minmax(1.25em, 1fr)\r\n					[center-start]\r\n						minmax(0, 55em)\r\n					[center-end] \r\n				minmax(1.25em, 1fr)\r\n			[full-end]\r\n			;--header-height:68.38px;--margin-bottom:6rem;--margin-bottom-small:3rem;--box-shadow:2px 2px 9px var(--black);--filter-drop-shadow:drop-shadow(3px 3px 4px var(--black));--header-box-shadow:4px hsla(0, 0%, 5%, 0.95);--shadow-down:0px 4px 4px var(--black);--shadow-up:0px -4px 4px var(--black);--text-shadow:2px 2px 6px var(--black)}*{margin:0;padding:0;box-sizing:border-box}html{background-color:var(--bg);color:var(--fg);font-family:var(--sans);scroll-behavior:smooth}a{color:var(--accent);font-style:italic}h1, h2, h3, h4, h5, h6{font-family:var(--display);margin-bottom:.45em}hr{display:block;place-self:center;width:clamp(10%, 10% + 5vw, 80%);border-width:.5em;border-color:var(--grey);border-style:none none dotted;margin:0 auto var(--margin-bottom-small);height:1em}img{max-width:100%;display:block;background-color:darkslategrey}.glassmorph{background:hsla(0, 0%, 100%, 0.20);box-shadow:0 8px 32px 0 hsla(236, 0%, 40%, 0.6);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);border:1px solid hsla(0, 0%, 100%, 0.18);padding:1em}.glassmorph-dark{background:hsla(0, 0%, 0%, 0.5);box-shadow:0 8px 32px 0 hsla(236, 0%, 40%, 0.6);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);border:1px solid hsla(0, 0%, 100%, 0.18);padding:1em}.main-grid-layout{display:grid;grid-template-columns:var(--main-grid-layout)}.main-grid-layout > *{grid-column:center}.main-grid-layout-center{grid-column:center}.main-grid-layout-full{grid-column:full}.margin-bottom{margin-bottom:var(--margin-bottom)\r\n	}.margin-bottom-small{margin-bottom:var(--margin-bottom-small)\r\n	}.shadow-down{box-shadow:var(--shadow-down)}",
  map: null
};
const _layout = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_ab720396.v)(ImageModal, "ImageModal").$$render($$result, {}, {}, {})}

${(0, import_index_ab720396.v)(Menu, "Menu").$$render($$result, {}, {}, {})}

${(0, import_index_ab720396.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"main-grid-layout"}">${slots.default ? slots.default({}) : ``}</main>

${(0, import_index_ab720396.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
