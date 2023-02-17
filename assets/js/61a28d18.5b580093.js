"use strict";(self.webpackChunkhashed_network_docs=self.webpackChunkhashed_network_docs||[]).push([[5999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"2023 Road Map",slug:"2023-road-map",authors:["max"]},i=void 0,c={permalink:"/blog/2023-road-map",editUrl:"https://github.com/hashed-io/docs.hashed.network/blog/2022-12-22-road-map/index.md",source:"@site/blog/2022-12-22-road-map/index.md",title:"2023 Road Map",description:"2023 Road Map",date:"2022-12-22T00:00:00.000Z",formattedDate:"December 22, 2022",tags:[],readingTime:.955,hasTruncateMarker:!1,authors:[{name:"Max Gravitt",title:"Hashed Network Architect",url:"https://github.com/3yekn",imageURL:"https://github.com/3yekn.png",key:"max"}],frontMatter:{title:"2023 Road Map",slug:"2023-road-map",authors:["max"]},prevItem:{title:"Crowdloan Update",permalink:"/blog/crowdloan-update"},nextItem:{title:"Federal Tax Credits Become Transferable in 2023",permalink:"/blog/federal-credits-transferable"}},p={authorsImageUrls:[void 0]},s=[],l={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"2023 Road Map"),(0,o.kt)("meta",{charSet:"utf-8"}),(0,o.kt)("meta",{property:"og:image",content:"https://docs.hashed.network/img/networked-desk-cartoon.png"}),(0,o.kt)("meta",{property:"twitter:description",content:""}),(0,o.kt)("meta",{property:"og:description",content:""}),(0,o.kt)("meta",{property:"og:title",content:"2023 Road Map"}),(0,o.kt)("meta",{property:"og:url",content:"https://docs.hashed.network/blog/2023-road-map"})),(0,o.kt)("p",null,"2023 Road Map\nQ1 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Phase 2 of Bitcoin Orchestration\n    - Attach multiple `xpubs` to a Substrate account\n    - Proof-of-reserves reporting\n    - 'Sign with Google' direct in browser \n\n- Signer mobile app (Hancock) prototype, including porting the below libraries to Substrate:        \n    - `substrate-signing-request`, or `ssr://`\n    - `anchor-link` \n    - `anchor-link-browser-transport`\n    - `buoy-server`\n    - `buoy-client`\n\n- Initial release of the `fund-admin` and `marketplace` protocols \n- Support the release of partner dapps (PRXY, Afloat)\n\nQ2\n- Phase 3 of Bitcoin Orchestration\n    - Visual spend policy builder for bitcoin orchestration\n    - Schnorr key aggregation\n    - UTXO spending policy and metadata sharing\n\n- Hancock ALPHA\n\nQ3\n- Phase 4 of Bitcoin Orchestration\n    - Signature request push notifications\n\n- Hancock BETA\n    - Add bitcoin signing\n    - Improve user onboarding and key backup/recovery\n\n- Expand `fund-admin` protocol and `marketplace` protocols\n\nQ4 and beyond\n- Hancock v1 Release\n- More abstracted components to be used as core business processes\n    - Accounting\n    - DAO LLC \n    - Supply Chain\n    - Invoicing\n")))}u.isMDXComponent=!0}}]);