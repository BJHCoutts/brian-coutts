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
var import_index_ab720396 = __toModule(require("../../chunks/index-ab720396.js"));
var FeaturedContainer_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "section.svelte-yv4qvg{display:grid;grid-template-columns:1fr;grid-gap:6em 4em}",
  map: null
};
const FeaturedContainer = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return `<section class="${"contents-container margin-bottom svelte-yv4qvg"}">${slots.default ? slots.default({}) : ``}</section>`;
});
var FeaturedRowImageLeft_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".container.svelte-16udw8l{display:grid;grid-template-columns:1fr;position:relative;grid-gap:2em}.inner-border.svelte-16udw8l{inset:1em;position:absolute;border:4px solid var(--accent);opacity:15%}@media screen and (min-width: 500px){.container.svelte-16udw8l{grid-template-columns:1fr 1fr}.inner-border.svelte-16udw8l{grid-column:1 / -1;z-index:-1}}",
  map: null
};
const FeaturedRowImageLeft = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<div class="${"container svelte-16udw8l"}"><div class="${"inner-border svelte-16udw8l"}"></div>
	${slots.default ? slots.default({}) : ``}</div>`;
});
var FeaturedRowImageRight_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".container.svelte-16udw8l{display:grid;grid-template-columns:1fr;position:relative;grid-gap:2em}.inner-border.svelte-16udw8l{inset:1em;position:absolute;border:4px solid var(--accent);opacity:15%}@media screen and (min-width: 500px){.container.svelte-16udw8l{grid-template-columns:1fr 1fr}.inner-border.svelte-16udw8l{grid-column:1 / -1;z-index:-1}}",
  map: null
};
const FeaturedRowImageRight = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<div class="${"container svelte-16udw8l"}"><div class="${"inner-border svelte-16udw8l"}"></div>
	${slots.default ? slots.default({}) : ``}</div>`;
});
var ArtText_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "h2.svelte-1rffhgl{background-color:var(--bg)}",
  map: null
};
const ArtText = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div class="${"margin-bottom container"}"><h2 class="${"svelte-1rffhgl"}"><a href="${"art"}">Fine Art</a></h2>
	
	<div class="${"text-container"}"><p>Made free from the need to have a purpose other than to exist in itself.</p>

		<a href="${"https://www.instagram.com/brian_coutts/"}">My fine art on Instagram</a></div></div>`;
});
var DesignText_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "h2.svelte-1rffhgl{background-color:var(--bg)}",
  map: null
};
const DesignText = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="${"margin-bottom"}"><h2 class="${"svelte-1rffhgl"}"><a href="${"/design"}">Design</a></h2>
	
	<div class="${"text-container"}"><p>Not just aesthetic, these creations all serve a function.</p></div></div>`;
});
var WebDevText_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "h2.svelte-1rffhgl{background-color:var(--bg)}",
  map: null
};
const WebDevText = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"margin-bottom"}"><h2 class="${"svelte-1rffhgl"}"><a href="${"/webdev"}">Web Development</a></h2>
	
	<div class="${"text-container"}"><p>A number of websites that I have worked on, as well as some cool custom components that I have made from scratch, so that I can show off some cool things that I can do without overloading this site with a bunch of gaudy features that would cripple modern minimalist design sensibilities.</p></div></div>`;
});
var FeaturedImage_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "img.svelte-117k6x1{background-color:darkslategrey;height:100%;width:100%;transition:all .5s ease-in;opacity:0;transform:rotateX(90deg);object-fit:contain;object-position:center}.image-onscreen.svelte-117k6x1{opacity:1;transform:rotateX(0deg)}",
  map: null
};
const FeaturedImage = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  let { imageFileName } = $$props;
  if ($$props.imageFileName === void 0 && $$bindings.imageFileName && imageFileName !== void 0)
    $$bindings.imageFileName(imageFileName);
  $$result.css.add(css$3);
  return `<div><img${(0, import_index_ab720396.g)("src", `/images/${imageFileName}`, 0)} alt="${"placeholder"}" class="${"svelte-117k6x1"}">
	<div style="${"display:hidden;"}" class="${"image-onscreen svelte-117k6x1"}"></div></div>`;
});
var MultiImageExpand_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "img.svelte-4si1bt{background-color:grey;width:25%;aspect-ratio:1 / 1;position:absolute;transition:.3s ease-in;box-shadow:var(--box-shadow);object-fit:contain;background:none}.animatedContainer.svelte-4si1bt{transform-origin:center;height:50%;width:50%;position:absolute;inset:25%;transition:.4s ease-in-out;cursor:pointer;transform:scale(100%, 100%) rotate(-1deg);min-height:150px}.animatedContainer.svelte-4si1bt:hover{transform:scale(150%, 150%) rotate(1deg)}.background.svelte-4si1bt{background-color:darkslategrey;height:50%;width:50%;position:absolute;inset:25%;min-height:150px}.container.svelte-4si1bt{position:relative;height:100%;width:100%;min-height:fit-content}.image1.svelte-4si1bt{top:-20%;left:50%}.image2.svelte-4si1bt{top:30%;right:-10%}.image3.svelte-4si1bt{bottom:-20%;right:50%}.image4.svelte-4si1bt{bottom:30%;left:-10%}.image1.mouseIsOver.svelte-4si1bt{transform:translateY(340%) rotate(-3deg)}.image2.mouseIsOver.svelte-4si1bt{transform:translateX(-400%) rotate(-3deg)}.image3.mouseIsOver.svelte-4si1bt{transform:translateY(-360%) rotate(-3deg)}.image4.mouseIsOver.svelte-4si1bt{transform:translateX(400%) rotate(-3deg)}",
  map: null
};
const MultiImageExpand = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  let { imageFileNames = ["aleppo.jpg", "aleppo.jpg", "aleppo.jpg", "aleppo.jpg", "aleppo.jpg"] } = $$props;
  if ($$props.imageFileNames === void 0 && $$bindings.imageFileNames && imageFileNames !== void 0)
    $$bindings.imageFileNames(imageFileNames);
  $$result.css.add(css$2);
  return `<div class="${"container svelte-4si1bt"}"><div class="${"background svelte-4si1bt"}"></div>
	<div class="${"animatedContainer svelte-4si1bt"}">${(0, import_index_ab720396.v)(FeaturedImage, "FeaturedImage").$$render($$result, { imageFileName: imageFileNames[0] }, {}, {})}
		<img${(0, import_index_ab720396.g)("src", `/images/${imageFileNames[1]}`, 0)} alt="${""}" class="${["image1 svelte-4si1bt", ""].join(" ").trim()}">
		<img${(0, import_index_ab720396.g)("src", `/images/${imageFileNames[2]}`, 0)} alt="${""}" class="${["image2 svelte-4si1bt", ""].join(" ").trim()}">
		<img${(0, import_index_ab720396.g)("src", `/images/${imageFileNames[3]}`, 0)} alt="${""}" class="${["image3 svelte-4si1bt", ""].join(" ").trim()}">
		<img${(0, import_index_ab720396.g)("src", `/images/${imageFileNames[4]}`, 0)} alt="${""}" class="${["image4 svelte-4si1bt", ""].join(" ").trim()}"></div></div>`;
});
const abstractArt = { "/static/images/abstractExpressionist/104perspCrissCrossOverCloudFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/104perspCrissCrossOverCloudFin-ab35ed4a.js"))), "/static/images/abstractExpressionist/11vibrantWavelengthFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/11vibrantWavelengthFin-66e4ef75.js"))), "/static/images/abstractExpressionist/14greenFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/14greenFin-1207f8ad.js"))), "/static/images/abstractExpressionist/1WetWaercolourSplotchesFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/1WetWaercolourSplotchesFin-c9b15558.js"))), "/static/images/abstractExpressionist/2diagonalBlurGridBlueBrownFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/2diagonalBlurGridBlueBrownFin-91cc063f.js"))), "/static/images/abstractExpressionist/33birdStarFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/33birdStarFin-3fad3265.js"))), "/static/images/abstractExpressionist/34underTableWebLaceLookingUpFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/34underTableWebLaceLookingUpFin-37c93c47.js"))), "/static/images/abstractExpressionist/3earthToSkyFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/3earthToSkyFin-b473519f.js"))), "/static/images/abstractExpressionist/45hardOutSmearJustBlendColourFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/45hardOutSmearJustBlendColourFin-aa07bd45.js"))), "/static/images/abstractExpressionist/59strongLinesPrimesFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/59strongLinesPrimesFin-4df68539.js"))), "/static/images/abstractExpressionist/64beckerFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/64beckerFin-1105e6eb.js"))), "/static/images/abstractExpressionist/6trianglesFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/6trianglesFin-3233c57e.js"))), "/static/images/abstractExpressionist/7springSmearsFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/7springSmearsFin-f2d2699a.js"))), "/static/images/abstractExpressionist/84waterColorChalkDNAFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/84waterColorChalkDNAFin-0ab65e5b.js"))), "/static/images/abstractExpressionist/8crackedCornerTreesFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/8crackedCornerTreesFin-d61eddd7.js"))), "/static/images/abstractExpressionist/96orange4objectsFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/96orange4objectsFin-d76d0313.js"))), "/static/images/abstractExpressionist/98karenHaleFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/98karenHaleFin-8101c685.js"))), "/static/images/abstractExpressionist/autumnBoatSmears.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/autumnBoatSmears-02e881d3.js"))), "/static/images/abstractExpressionist/sharpBreezeFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/sharpBreezeFin-d41f8a15.js"))), "/static/images/abstractExpressionist/trianglesInAMeshFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/trianglesInAMeshFin-13eeea06.js"))), "/static/images/abstractExpressionist/washAndChonksFin.png": () => Promise.resolve().then(() => __toModule(require("../../chunks/washAndChonksFin-362d8bd9.js"))) };
var ContentsContainer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-11ij4y7{display:inline-block;height:100%;width:100%;min-height:fit-content}",
  map: null
};
const ContentsContainer = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  console.log(Object.keys(abstractArt)[0].slice(7));
  $$result.css.add(css$1);
  return `<p>doop</p>
<img${(0, import_index_ab720396.g)("src", Object.keys(abstractArt)[0].slice(7), 0)} alt="${""}">
<p>doop</p>

${(0, import_index_ab720396.v)(FeaturedContainer, "FeaturedContainer").$$render($$result, {}, {}, {
    default: () => `${(0, import_index_ab720396.v)(FeaturedRowImageLeft, "FeaturedRowImageLeft").$$render($$result, {}, {}, {
      default: () => `<a href="${"/webdev"}" class="${"svelte-11ij4y7"}">${(0, import_index_ab720396.v)(MultiImageExpand, "MultiImageExpand").$$render($$result, {}, {}, {})}</a>
		${(0, import_index_ab720396.v)(WebDevText, "WebDevText").$$render($$result, {}, {}, {})}`
    })}
	
	${(0, import_index_ab720396.v)(FeaturedRowImageRight, "FeaturedRowImageRight").$$render($$result, {}, {}, {
      default: () => `${(0, import_index_ab720396.v)(DesignText, "DesignText").$$render($$result, {}, {}, {})}
		<a href="${"/design"}" class="${"svelte-11ij4y7"}">${(0, import_index_ab720396.v)(MultiImageExpand, "MultiImageExpand").$$render($$result, {}, {}, {})}</a>`
    })}
		
	${(0, import_index_ab720396.v)(FeaturedRowImageLeft, "FeaturedRowImageLeft").$$render($$result, {}, {}, {
      default: () => `<a href="${"/webdev"}" class="${"svelte-11ij4y7"}">${(0, import_index_ab720396.v)(MultiImageExpand, "MultiImageExpand").$$render($$result, {}, {}, {})}</a>
		${(0, import_index_ab720396.v)(ArtText, "ArtText").$$render($$result, {}, {}, {})}`
    })}`
  })}`;
});
var IntroImage_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1l8bke3.svelte-1l8bke3{font-size:clamp(4rem, 10vw, 6rem)}h2.svelte-1l8bke3.svelte-1l8bke3{font-size:2.5rem}hr.svelte-1l8bke3.svelte-1l8bke3{margin-left:0}section.svelte-1l8bke3.svelte-1l8bke3{grid-column:full;background-image:linear-gradient(to bottom, hsla(231, 54%, 97%, 0.40), hsla(29, 50%, 29%, 0.60)),\r\n			url('/images/aleppo.jpg')\r\n		;margin-top:calc(var(--header-height) * -1);padding:calc(var(--header-height) * 2) 0;background-attachment:fixed;background-position:center;background-size:cover;background-repeat:none;position:relative}section.svelte-1l8bke3>.svelte-1l8bke3{color:var(--white);text-shadow:var(--text-shadow)}.details.svelte-1l8bke3.svelte-1l8bke3{color:var(--accent);position:absolute;bottom:0;right:0;opacity:50%}.disc-line-break.svelte-1l8bke3.svelte-1l8bke3{display:block}@media(min-width: 450px){.disc-line-break.svelte-1l8bke3.svelte-1l8bke3{display:none}}",
  map: null
};
const IntroImage = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"main-grid-layout margin-bottom-small svelte-1l8bke3"}"><h1 class="${"svelte-1l8bke3"}">Brian Coutts</h1>
	<hr class="${"svelte-1l8bke3"}">
	<h2 class="${"svelte-1l8bke3"}">Site is Work In Progess</h2>
	<h2 class="${"svelte-1l8bke3"}">Web Dev \u25C7 Design \u25C7 Fine Art</h2>
	<small class="${"details svelte-1l8bke3"}">Digital painting by Brian Coutts.
		<br class="${"disc-line-break svelte-1l8bke3"}"> 
		Original photo by Joseph Eid.
	</small></section>`;
});
const IntroText = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"margin-bottom"}"><p>I live in Vancouver, BC and I am an absolute mercenary when it comes to creative work. 
	</p></section>`;
});
const CurrentNews = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  return `<article><h3>Jan 2022</h3>

	<p>This site is currently WIP</p>
	
	<p><a href="${"https://drive.google.com/file/d/18dGW66hD8Ku0HlGGd6eWdtIZHcdRVq_a/view?usp=sharing"}">Link to Resume PDF</a></p>
	<p><a href="${"https://drive.google.com/file/d/1fN5i6lWL9IWDJQ2zZJ3D8HV--x1ErYSz/view?usp=sharing"}">Link to Visual Portfolio PDF</a></p>
	<p><a href="${"https://www.instagram.com/brian_coutts/"}">My fine art on Instagram</a></p></article>`;
});
const NewsContainer = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"margin-bottom"}"><h2>News</h2>

	${(0, import_index_ab720396.v)(CurrentNews, "CurrentNews").$$render($$result, {}, {}, {})}</section>`;
});
const Routes = (0, import_index_ab720396.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_ab720396.v)(IntroImage, "IntroImage").$$render($$result, {}, {}, {})}
${(0, import_index_ab720396.v)(IntroText, "IntroText").$$render($$result, {}, {}, {})}

<hr>

${(0, import_index_ab720396.v)(NewsContainer, "NewsContainer").$$render($$result, {}, {}, {})}

<hr>

${(0, import_index_ab720396.v)(ContentsContainer, "ContentsContainer").$$render($$result, {}, {}, {})}`;
});
