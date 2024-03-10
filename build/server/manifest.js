const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Univers-light-normal.ttf","fonts/UniversLTStd-Bold.otf","fonts/UniversLTStd.otf","fonts.css","images/background/background.svg","images/background/background.webp","images/background/background2.svg","images/background/background2.webp","images/background/background3.webp","images/batterypak/1.png","images/batterypak/10.png","images/batterypak/11.png","images/batterypak/12.png","images/batterypak/13.png","images/batterypak/14.png","images/batterypak/15.png","images/batterypak/16.png","images/batterypak/17.png","images/batterypak/18.png","images/batterypak/19.png","images/batterypak/2.png","images/batterypak/20.png","images/batterypak/21.png","images/batterypak/22.png","images/batterypak/23.png","images/batterypak/24.png","images/batterypak/3.png","images/batterypak/4.png","images/batterypak/5.png","images/batterypak/6.png","images/batterypak/7.png","images/batterypak/8.png","images/batterypak/9.png","images/batterypak.png","images/custom.png","images/customdesign.png","images/propak/1.png","images/propak/10.png","images/propak/11.png","images/propak/12.png","images/propak/13.png","images/propak/14.png","images/propak/15.png","images/propak/16.png","images/propak/17.png","images/propak/18.png","images/propak/19.png","images/propak/2.png","images/propak/20.png","images/propak/21.png","images/propak/22.png","images/propak/23.png","images/propak/24.png","images/propak/3.png","images/propak/4.png","images/propak/5.png","images/propak/6.png","images/propak/7.png","images/propak/8.png","images/propak/9.png","images/propak.png","images/reman/1.png","images/reman/10.png","images/reman/11.png","images/reman/12.png","images/reman/13.png","images/reman/14.png","images/reman/15.png","images/reman/16.png","images/reman/17.png","images/reman/18.png","images/reman/19.png","images/reman/2.png","images/reman/20.png","images/reman/21.png","images/reman/22.png","images/reman/23.png","images/reman/24.png","images/reman/3.png","images/reman/4.png","images/reman/5.png","images/reman/6.png","images/reman/7.png","images/reman/8.png","images/reman/9.png","images/reman.png","images/reman2.png","images/shuertadvantage.png","images/shuertadvantage2.png","images/singlesheet.png","images/sustain.png","images/sustain2.png","images/svg/SVG/batterypak.svg","images/svg/SVG/custom.svg","images/svg/SVG/propak.svg","images/svg/SVG/reman.svg","images/svg/SVG/unirak.svg","images/svg/SVG/yarnpak.svg","images/svg/unicase.svg","images/twinsheet.png","images/unicase/1.png","images/unicase/10.png","images/unicase/11.png","images/unicase/12.png","images/unicase/13.png","images/unicase/14.png","images/unicase/15.png","images/unicase/16.png","images/unicase/17.png","images/unicase/18.png","images/unicase/19.png","images/unicase/2.png","images/unicase/20.png","images/unicase/21.png","images/unicase/22.png","images/unicase/23.png","images/unicase/24.png","images/unicase/3.png","images/unicase/4.png","images/unicase/5.png","images/unicase/6.png","images/unicase/7.png","images/unicase/8.png","images/unicase/9.png","images/unicase.png","images/unidirectional/1.png","images/unidirectional/10.png","images/unidirectional/11.png","images/unidirectional/12.png","images/unidirectional/13.png","images/unidirectional/14.png","images/unidirectional/15.png","images/unidirectional/16.png","images/unidirectional/17.png","images/unidirectional/18.png","images/unidirectional/19.png","images/unidirectional/2.png","images/unidirectional/20.png","images/unidirectional/21.png","images/unidirectional/22.png","images/unidirectional/23.png","images/unidirectional/24.png","images/unidirectional/3.png","images/unidirectional/4.png","images/unidirectional/5.png","images/unidirectional/6.png","images/unidirectional/7.png","images/unidirectional/8.png","images/unidirectional/9.png","images/unidirectional.png","images/unipak/1.png","images/unipak/10.png","images/unipak/11.png","images/unipak/12.png","images/unipak/13.png","images/unipak/14.png","images/unipak/15.png","images/unipak/16.png","images/unipak/17.png","images/unipak/18.png","images/unipak/19.png","images/unipak/2.png","images/unipak/20.png","images/unipak/21.png","images/unipak/22.png","images/unipak/23.png","images/unipak/24.png","images/unipak/3.png","images/unipak/4.png","images/unipak/5.png","images/unipak/6.png","images/unipak/7.png","images/unipak/8.png","images/unipak/9.png","images/unipak.png","images/unipak2.png","images/unipallet/1.png","images/unipallet/10.png","images/unipallet/11.png","images/unipallet/12.png","images/unipallet/13.png","images/unipallet/14.png","images/unipallet/15.png","images/unipallet/16.png","images/unipallet/17.png","images/unipallet/18.png","images/unipallet/19.png","images/unipallet/2.png","images/unipallet/20.png","images/unipallet/21.png","images/unipallet/22.png","images/unipallet/23.png","images/unipallet/24.png","images/unipallet/3.png","images/unipallet/4.png","images/unipallet/5.png","images/unipallet/6.png","images/unipallet/7.png","images/unipallet/8.png","images/unipallet/9.png","images/unipallet.png","images/unirak/1.png","images/unirak/10.png","images/unirak/11.png","images/unirak/12.png","images/unirak/13.png","images/unirak/14.png","images/unirak/15.png","images/unirak/16.png","images/unirak/17.png","images/unirak/18.png","images/unirak/19.png","images/unirak/2.png","images/unirak/20.png","images/unirak/21.png","images/unirak/22.png","images/unirak/23.png","images/unirak/24.png","images/unirak/3.png","images/unirak/4.png","images/unirak/5.png","images/unirak/6.png","images/unirak/7.png","images/unirak/8.png","images/unirak/9.png","images/unirak.png","images/yarnpak/1.png","images/yarnpak/10.png","images/yarnpak/11.png","images/yarnpak/12.png","images/yarnpak/13.png","images/yarnpak/14.png","images/yarnpak/15.png","images/yarnpak/16.png","images/yarnpak/17.png","images/yarnpak/18.png","images/yarnpak/19.png","images/yarnpak/2.png","images/yarnpak/20.png","images/yarnpak/21.png","images/yarnpak/22.png","images/yarnpak/23.png","images/yarnpak/24.png","images/yarnpak/3.png","images/yarnpak/4.png","images/yarnpak/5.png","images/yarnpak/6.png","images/yarnpak/7.png","images/yarnpak/8.png","images/yarnpak/9.png","images/yarnpak.png","logo.svg","map.png","SVG/gude-2023-10-17.log","SVG/SVG/Asset 10.svg","SVG/SVG/Asset 11.svg","SVG/SVG/Asset 2.svg","SVG/SVG/gude-2023-10-23.log"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".otf":"font/otf",".css":"text/css",".svg":"image/svg+xml",".webp":"image/webp",".log":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.BPgYqm2b.js","app":"_app/immutable/entry/app.VX6uUWmf.js","imports":["_app/immutable/entry/start.BPgYqm2b.js","_app/immutable/chunks/entry.BVh6nDbZ.js","_app/immutable/chunks/scheduler.NS8L8LGm.js","_app/immutable/entry/app.VX6uUWmf.js","_app/immutable/chunks/scheduler.NS8L8LGm.js","_app/immutable/chunks/index.OFbx2xAc.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-B_MikT8F.js')),
			__memo(() => import('./chunks/1-DY7ZX7DB.js')),
			__memo(() => import('./chunks/2-C0r0AiNY.js')),
			__memo(() => import('./chunks/3-C98ouR65.js')),
			__memo(() => import('./chunks/4-DqQ7egam.js')),
			__memo(() => import('./chunks/5-B39FrPVd.js')),
			__memo(() => import('./chunks/6-TWSOV1o1.js')),
			__memo(() => import('./chunks/7-Bxmw_O5y.js')),
			__memo(() => import('./chunks/8-D0OS533l.js')),
			__memo(() => import('./chunks/9-Dp9sqGD4.js')),
			__memo(() => import('./chunks/10-DX5mNX07.js')),
			__memo(() => import('./chunks/11-BfCf12yR.js')),
			__memo(() => import('./chunks/12-Cyln8sYF.js')),
			__memo(() => import('./chunks/13-fYf6UsTW.js')),
			__memo(() => import('./chunks/14-BZEqSgaK.js')),
			__memo(() => import('./chunks/15-Bh3puTBo.js')),
			__memo(() => import('./chunks/16-qui7n01_.js')),
			__memo(() => import('./chunks/17-B5sQC10n.js')),
			__memo(() => import('./chunks/18-D1tVmsX-.js')),
			__memo(() => import('./chunks/19-CXdlu4HN.js')),
			__memo(() => import('./chunks/20-CDv8TIB7.js')),
			__memo(() => import('./chunks/21-Zkd9yzyl.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(app)/_blog",
				pattern: /^\/_blog\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(app)/_careers",
				pattern: /^\/_careers\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(app)/_careers/[slug]",
				pattern: /^\/_careers\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(app)/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/customdesign",
				pattern: /^\/customdesign\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/products/batterypak",
				pattern: /^\/products\/batterypak\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/products/propak",
				pattern: /^\/products\/propak\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/products/remanpak",
				pattern: /^\/products\/remanpak\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/products/unicase",
				pattern: /^\/products\/unicase\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/products/unidirectional",
				pattern: /^\/products\/unidirectional\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(app)/products/unipak",
				pattern: /^\/products\/unipak\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(app)/products/unipallet",
				pattern: /^\/products\/unipallet\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(app)/products/unirak",
				pattern: /^\/products\/unirak\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(app)/products/yarnpak",
				pattern: /^\/products\/yarnpak\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(app)/requestaquote",
				pattern: /^\/requestaquote\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(app)/shuertadvantage",
				pattern: /^\/shuertadvantage\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(app)/sustainability",
				pattern: /^\/sustainability\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
