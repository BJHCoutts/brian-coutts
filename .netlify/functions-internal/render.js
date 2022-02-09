const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["eatTheMoon.svg","icons/facebook.svg","icons/instagram.svg","icons/materialUIIcons/arrow_back_ios-24px.svg","icons/materialUIIcons/arrow_circle_down-24px.svg","icons/materialUIIcons/arrow_circle_up-24px.svg","icons/materialUIIcons/arrow_forward_ios-24px.svg","icons/materialUIIcons/arrow_right_alt-24px.svg","icons/materialUIIcons/chevron_left-24px.svg","icons/materialUIIcons/chevron_right-24px.svg","icons/materialUIIcons/clear_24px_outlined.svg","icons/materialUIIcons/expand_less-24px.svg","icons/materialUIIcons/expand_more-24px.svg","icons/materialUIIcons/favorite-24px.svg","icons/materialUIIcons/favorite_border-24px.svg","icons/materialUIIcons/first_page-24px.svg","icons/materialUIIcons/last_page-24px.svg","icons/materialUIIcons/menu-24px.svg","icons/materialUIIcons/menu_open-24px.svg","icons/materialUIIcons/thumb_up-24px.svg","icons/menuIconSplatter.afdesign","icons/menuIconSplatter.svg","icons/twitch.svg","icons/twitter.svg","icons/user.afdesign","icons/user.svg","icons/youtube.svg","images/aleppo.jpg","images/toHelpGrid.png","vectors/toHelp.svg","vectors/toHelpCropped.svg"]),
	_: {
		mime: {".svg":"image/svg+xml",".jpg":"image/jpeg",".png":"image/png"},
		entry: {"file":"start-c42288a1.js","js":["start-c42288a1.js","chunks/vendor-3fb5b3e0.js"],"css":["assets/start-61d1577b.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/contact\/?$/,
				params: null,
				path: "/contact",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/design\/?$/,
				params: null,
				path: "/design",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/webdev\/?$/,
				params: null,
				path: "/webdev",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/art\/?$/,
				params: null,
				path: "/art",
				a: [0,6],
				b: [1]
			}
		]
	}
});
