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
  default: () => Routes
});
var import_index_544abe4e = __toModule(require("../../chunks/index-544abe4e.js"));
var FeaturedContainer_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "section.svelte-yv4qvg{display:grid;grid-template-columns:1fr;grid-gap:6em 4em}",
  map: null
};
const FeaturedContainer = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<section class="${"contents-container margin-bottom svelte-yv4qvg"}">${slots.default ? slots.default({}) : ``}</section>`;
});
var FeaturedRowImageLeft_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".container.svelte-16udw8l{display:grid;grid-template-columns:1fr;position:relative;grid-gap:2em}.inner-border.svelte-16udw8l{inset:1em;position:absolute;border:4px solid var(--accent);opacity:15%}@media screen and (min-width: 500px){.container.svelte-16udw8l{grid-template-columns:1fr 1fr}.inner-border.svelte-16udw8l{grid-column:1 / -1;z-index:-1}}",
  map: null
};
const FeaturedRowImageLeft = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<div class="${"container svelte-16udw8l"}"><div class="${"inner-border svelte-16udw8l"}"></div>
	${slots.default ? slots.default({}) : ``}</div>`;
});
var FeaturedRowImageRight_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".container.svelte-16udw8l{display:grid;grid-template-columns:1fr;position:relative;grid-gap:2em}.inner-border.svelte-16udw8l{inset:1em;position:absolute;border:4px solid var(--accent);opacity:15%}@media screen and (min-width: 500px){.container.svelte-16udw8l{grid-template-columns:1fr 1fr}.inner-border.svelte-16udw8l{grid-column:1 / -1;z-index:-1}}",
  map: null
};
const FeaturedRowImageRight = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div class="${"container svelte-16udw8l"}"><div class="${"inner-border svelte-16udw8l"}"></div>
	${slots.default ? slots.default({}) : ``}</div>`;
});
var FeaturedImage_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "img.svelte-117k6x1{background-color:darkslategrey;height:100%;width:100%;transition:all .5s ease-in;opacity:0;transform:rotateX(90deg);object-fit:contain;object-position:center}.image-onscreen.svelte-117k6x1{opacity:1;transform:rotateX(0deg)}",
  map: null
};
const FeaturedImage = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  let { imageFileName } = $$props;
  if ($$props.imageFileName === void 0 && $$bindings.imageFileName && imageFileName !== void 0)
    $$bindings.imageFileName(imageFileName);
  $$result.css.add(css$5);
  return `<div><img${(0, import_index_544abe4e.f)("src", `./src/assets/images/${imageFileName}`, 0)} alt="${"placeholder"}" class="${"svelte-117k6x1"}">
	<div style="${"display:hidden;"}" class="${"image-onscreen svelte-117k6x1"}"></div></div>`;
});
var ArtText_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "h2.svelte-1rffhgl{background-color:var(--bg)}",
  map: null
};
const ArtText = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"margin-bottom container"}"><h2 class="${"svelte-1rffhgl"}"><a href="${"art"}">Fine Art</a></h2>
	
	<div class="${"text-container"}"><p>Made free from the need to have a purpose other than to exist in itself.</p></div></div>`;
});
var DesignText_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "h2.svelte-1rffhgl{background-color:var(--bg)}",
  map: null
};
const DesignText = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"margin-bottom"}"><h2 class="${"svelte-1rffhgl"}"><a href="${"/design"}">Design</a></h2>
	
	<div class="${"text-container"}"><p>Not just aesthetic, these creations all serve a function.</p></div></div>`;
});
var WebDevText_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "h2.svelte-1rffhgl{background-color:var(--bg)}",
  map: null
};
const WebDevText = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"margin-bottom"}"><h2 class="${"svelte-1rffhgl"}"><a href="${"/webdev"}">Web Development</a></h2>
	
	<div class="${"text-container"}"><p>A number of websites that I have worked on, as well as some cool custom components that I have made from scratch, so that I can show off some cool things that I can do without overloading this site with a bunch of gaudy features that would cripple modern minimalist design sensibilities.</p></div></div>`;
});
const ContactText = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"margin-bottom"}"><h2><a href="${"contact"}">Contact</a></h2>
	
	<div class="${"text-container"}"><p>Get in touch with me.</p></div></div>`;
});
var ContactImage_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-142xl59{height:100%;width:100%;grid-column:1 / -1;height:250px;object-fit:cover}",
  map: null
};
const ContactImage = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  const urls = {};
  console.log(urls);
  $$result.css.add(css$1);
  return `<img src="${"/images/aleppo.jpg"}" alt="${""}" class="${"svelte-142xl59"}">`;
});
const Contact = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_544abe4e.v)(ContactImage, "ContactImage").$$render($$result, {}, {}, {})}
${(0, import_index_544abe4e.v)(ContactText, "ContactText").$$render($$result, {}, {}, {})}`;
});
const ContentsContainer = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_544abe4e.v)(FeaturedContainer, "FeaturedContainer").$$render($$result, {}, {}, {
    default: () => `${(0, import_index_544abe4e.v)(FeaturedRowImageLeft, "FeaturedRowImageLeft").$$render($$result, {}, {}, {
      default: () => `${(0, import_index_544abe4e.v)(FeaturedImage, "FeaturedImage").$$render($$result, { imageFileName: `aleppo.jpg` }, {}, {})}
		${(0, import_index_544abe4e.v)(WebDevText, "WebDevText").$$render($$result, {}, {}, {})}`
    })}
	
	${(0, import_index_544abe4e.v)(FeaturedRowImageRight, "FeaturedRowImageRight").$$render($$result, {}, {}, {
      default: () => `${(0, import_index_544abe4e.v)(DesignText, "DesignText").$$render($$result, {}, {}, {})}
		${(0, import_index_544abe4e.v)(FeaturedImage, "FeaturedImage").$$render($$result, { imageFileName: `aleppo.jpg` }, {}, {})}`
    })}

	${(0, import_index_544abe4e.v)(FeaturedRowImageLeft, "FeaturedRowImageLeft").$$render($$result, {}, {}, {
      default: () => `${(0, import_index_544abe4e.v)(FeaturedImage, "FeaturedImage").$$render($$result, { imageFileName: `aleppo.jpg` }, {}, {})}
		${(0, import_index_544abe4e.v)(ArtText, "ArtText").$$render($$result, {}, {}, {})}`
    })}`
  })}

${(0, import_index_544abe4e.v)(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
var IntroImage_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-en7iw3.svelte-en7iw3{font-size:clamp(4rem, 10vw, 6rem)}h2.svelte-en7iw3.svelte-en7iw3{font-size:2.5rem}hr.svelte-en7iw3.svelte-en7iw3{margin-left:0}section.svelte-en7iw3.svelte-en7iw3{grid-column:full;background-image:linear-gradient(to bottom, hsla(231, 54%, 97%, 0.40), hsla(29, 50%, 29%, 0.60)),\r\n			url('../../../assets/images/aleppo.jpg')\r\n		;margin-top:calc(var(--header-height) * -1);padding:calc(var(--header-height) * 2) 0;background-attachment:fixed;background-position:center;background-size:cover;background-repeat:none;position:relative}section.svelte-en7iw3>.svelte-en7iw3{color:var(--white);text-shadow:var(--text-shadow)}.details.svelte-en7iw3.svelte-en7iw3{color:var(--accent);position:absolute;bottom:0;right:0;opacity:50%}.disc-line-break.svelte-en7iw3.svelte-en7iw3{display:block}@media(min-width: 450px){.disc-line-break.svelte-en7iw3.svelte-en7iw3{display:none}}",
  map: null
};
const IntroImage = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"main-grid-layout margin-bottom-small svelte-en7iw3"}"><h1 class="${"svelte-en7iw3"}">Brian Coutts</h1>
	<hr class="${"svelte-en7iw3"}">
	<h2 class="${"svelte-en7iw3"}">Site is Work In Progess</h2>
	<h2 class="${"svelte-en7iw3"}">Web Dev \u25C7 Design \u25C7 Fine Art</h2>
	<small class="${"details svelte-en7iw3"}">Digital painting by Brian Coutts.
		<br class="${"disc-line-break svelte-en7iw3"}"> 
		Original photo by Joseph Eid.
	</small></section>`;
});
const IntroText = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"margin-bottom"}"><p>I live in Vancouver, BC and I am an absolute mercenary when it comes to creative work. 
	</p></section>`;
});
const CurrentNews = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  return `<article><h3>Jan 2022</h3>

	<p>This site is currently WIP</p>
	
	<p><a href="${"https://drive.google.com/file/d/18dGW66hD8Ku0HlGGd6eWdtIZHcdRVq_a/view?usp=sharing"}">Link to Resume PDF</a></p>
	<p><a href="${"https://drive.google.com/file/d/1fN5i6lWL9IWDJQ2zZJ3D8HV--x1ErYSz/view?usp=sharing"}">Link to Visual Portfolio PDF</a></p></article>`;
});
const NewsContainer = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"margin-bottom"}"><h2>News</h2>

	${(0, import_index_544abe4e.v)(CurrentNews, "CurrentNews").$$render($$result, {}, {}, {})}</section>`;
});
const Routes = (0, import_index_544abe4e.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_544abe4e.v)(IntroImage, "IntroImage").$$render($$result, {}, {}, {})}
${(0, import_index_544abe4e.v)(IntroText, "IntroText").$$render($$result, {}, {}, {})}

<hr>

${(0, import_index_544abe4e.v)(NewsContainer, "NewsContainer").$$render($$result, {}, {}, {})}

<hr>

${(0, import_index_544abe4e.v)(ContentsContainer, "ContentsContainer").$$render($$result, {}, {}, {})}`;
});
