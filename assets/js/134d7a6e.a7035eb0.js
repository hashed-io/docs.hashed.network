"use strict";(self.webpackChunkhashed_network_docs=self.webpackChunkhashed_network_docs||[]).push([[611],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},401:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={slug:"nbv-m2",title:"Native Bitcoin Vaults",authors:["max"]},l=void 0,c={permalink:"/blog/nbv-m2",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-10-21-w3f-nbv-m2/index.md",source:"@site/blog/2022-10-21-w3f-nbv-m2/index.md",title:"Native Bitcoin Vaults",description:"Native Bitcoin Vaults Milestone 2 Submitted",date:"2022-10-21T00:00:00.000Z",formattedDate:"October 21, 2022",tags:[],readingTime:4.105,truncated:!1,authors:[{name:"Max Gravitt",title:"Hashed Network Architect",url:"https://github.com/3yekn",imageURL:"https://github.com/3yekn.png",key:"max"}],frontMatter:{slug:"nbv-m2",title:"Native Bitcoin Vaults",authors:["max"]},nextItem:{title:"Treasury Proposal Approved",permalink:"/blog/dot-treasury-pallets"}},u={authorsImageUrls:[void 0]},d=[{value:"Summary",id:"summary",level:2},{value:"Flexible Policy Engine",id:"flexible-policy-engine",level:3},{value:"Verifiable Receiving Addresses",id:"verifiable-receiving-addresses",level:3},{value:"Integration with Hashed Network Features",id:"integration-with-hashed-network-features",level:3}],p={toc:d};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Native Bitcoin Vaults Milestone 2 Submitted"),(0,i.kt)("meta",{charSet:"utf-8"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary"}),(0,i.kt)("meta",{property:"og:image",content:"Native Bitcoin Vaults Milestone 2 Submitted"}),(0,i.kt)("meta",{property:"og:title",content:"nbv-cover-image.png"}),(0,i.kt)("meta",{property:"og:url",content:"https://docs.hashed.network/blog/nbv-m2"})),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"There are 3 key features of Native Bitcoin Vaults. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Flexible policy engine for managing bitcoin with business rules",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Uses Partially-Signed Bitcoin Transactions (PSBTs) to roll-up bitcoin spending proposals and approvals"),(0,i.kt)("li",{parentName:"ul"},"Orchestrated by Substrate, integrated with bitcoin via off-chain workers"),(0,i.kt)("li",{parentName:"ul"},"Bitcoin signing compatible with many convenient signers, from highly secured airgapped signers to not-very-secure 'Sign with Google' for the web3 experimenter."))),(0,i.kt)("li",{parentName:"ol"},"Verifiable receiving addresses",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bitcoin senders can independently verify a receiving address for a specific vault, such as an elected council based on the democracy pallet. "),(0,i.kt)("li",{parentName:"ul"},"Generate a new receiving address for each UTXO"))),(0,i.kt)("li",{parentName:"ol"},"Integration with other Hashed Network features ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Triple entry accounting platform allows businesses to natively assign bitcoin sends and receipts to General Ledger accounts such as Income and Expenses."),(0,i.kt)("li",{parentName:"ul"},"Integration with Confidential Documents, which allows users to securely encrypt, save, and share data that corresponds to a vault or journal entries. ")))),(0,i.kt)("p",null,"There are 3 key 'reasons to believe' NBV is useful. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"More businesses are adopting bitcoin on their balance sheet. "),(0,i.kt)("li",{parentName:"ol"},"NBV is real, simple, pure bitcoin. That's what people want. "),(0,i.kt)("li",{parentName:"ol"},"The market for approval and payment tools is robust.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(8621).Z,width:"635",height:"507"})),(0,i.kt)("h1",{id:"features"},"Features"),(0,i.kt)("h3",{id:"flexible-policy-engine"},"Flexible Policy Engine"),(0,i.kt)("p",null,"Bitcoin is a UTXO-based blockchain (as opposed to account-based, like Polkadot), and in the early days, we would send bitcoin to the same address over and over again. However, it is more privacy-preserving to generate a new receiving address for every transaction, which has become the norm now. Each receiving address is transformed into a UTXO as soon as it receives a payment. "),(0,i.kt)("p",null,"Each UTXO has a pre-determined, Substrate-orchestrated configuration for set of potential signers and threshold. This creates a lot of flexibility for use cases such as budgeting funds to sub-groups or task forces, paying invoices based on requested drawdowns, and using higher security signers for larger UTXOs."),(0,i.kt)("p",null,"To spend the UTXO, Substrate compiles the Paritally Signed Bitcoin Transactions (PSBTs) together, and when ready, broadcasts it to the Bitcoin network. PSBTs were introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki"},"BIP-174")," and are implemented in many wallets including Bitcoin Core. NBV also uses output descriptors extensively, which is also a broadly supported standard for describing UTXOs in a composable fashion."),(0,i.kt)("p",null,"Using standards like these means that there are many available signers, such as ColdCard, BlueWallet, or libraries such as ",(0,i.kt)("a",{parentName:"p",href:"https://bitcoindevkit.org/"},"Bitcoin Dev Kit"),". Users can also sign with a key stored in Confidential Documents (sign via polkadot.js), our own Hashed Wallet, or even 'Sign with Google' for the web3 experimenter or casual user."),(0,i.kt)("h3",{id:"verifiable-receiving-addresses"},"Verifiable Receiving Addresses"),(0,i.kt)("p",null,"There are two primary attacks as it relates to bitcoin. Either a hacker finds your secret, or the sender is tricked into sending bitcoin to an address for which the hacker has the secret. NBV addresses the latter. "),(0,i.kt)("p",null,"The generated receiving addresses can be cryptographically verified by senders from other vaults or senders using any compatible bitcoin wallet. For example, if a set of treasurers were elected using the ",(0,i.kt)("inlineCode",{parentName:"p"},"democracy")," pallet, they could begin receiving contributions immediately and seamlessly rather than the worrisome trouble of having them coordinate together separately to generate receiving addresses. "),(0,i.kt)("h3",{id:"integration-with-hashed-network-features"},"Integration with Hashed Network Features"),(0,i.kt)("p",null,"Verifiability is secure. However, some bitcoin vaults wish to remain private. NBV supports integration with Confidential Documents, which allows users to safely encrypt and share data such as the output descriptors, wallet metadata, receiving addresses, and vault documents. "),(0,i.kt)("p",null,"NBV also integrates with the triple-entry accounting tools on Hashed Network. This platform allows businesses to natively assign bitcoin sends and receipts to General Ledger accounts such as Assets and Expenses, enabling Income Statements and Balance Sheets."),(0,i.kt)("h1",{id:"reasons-to-believe"},"Reasons to believe"),(0,i.kt)("p",null,"Most bitcoin layers that I've seen on programmable blockchains, such as Ethereum and Polkadot, have an element of custody/trust, peg tokens, or collateral backing. They are usually engineered by people much smarter than me, and I'm not qualified to opine on how secure they are. "),(0,i.kt)("p",null,"I think people want real bitcoin though. Real, simple, pure bitcoin. Especially for large amounts often seen in business treasuries or managed by governance teams."),(0,i.kt)("p",null,"In 2021, companies such as Tesla and Microstrategy adopted bitcoin as a treasury asset, many of which described in this ",(0,i.kt)("a",{parentName:"p",href:"https://cointelegraph.com/news/the-bitcoin-boom-the-future-of-the-company-balance-sheet"},"Cointelegraph article"),". We believe this trend will continue and accelerate in the coming years. "),(0,i.kt)("p",null,"Valuations for companies such as Fireblocks, ",(0,i.kt)("a",{parentName:"p",href:"https://www.prnewswire.com/news-releases/fireblocks-raises-550-million-in-series-e-funding-to-become-the-highest-valued-digital-asset-infrastructure-provider-301469630.html"},"which raised $550 million on a valuation of $8 billion"),", suggest that there is a market for payment approval, coordination, and broadcast."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/kn_eqC07wao",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("h1",{id:"road-map"},"Road Map"),(0,i.kt)("p",null,"There are 3 key focus areas on the road map: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Short term focus is usability for basic treasury activities "),(0,i.kt)("li",{parentName:"ol"},"Migrate from off-chain worker BDK-integration to WASM"),(0,i.kt)("li",{parentName:"ol"},"Integrate additional signers")))}h.isMDXComponent=!0},8621:function(e,t,a){t.Z=a.p+"assets/images/nbv-cover-image-0ec24f52bc15be97ef4c5031149a2c27.png"}}]);