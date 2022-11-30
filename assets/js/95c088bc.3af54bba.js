"use strict";(self.webpackChunkhashed_network_docs=self.webpackChunkhashed_network_docs||[]).push([[244],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3346:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={title:"Bitcoin Orchestration",sidebar_position:4,tags:["NBV","bitcoin"]},c=void 0,l={unversionedId:"nbv",id:"nbv",title:"Bitcoin Orchestration",description:"Hashed Network Bitcoin Orchestration",source:"@site/docs/nbv.md",sourceDirName:".",slug:"/nbv",permalink:"/docs/nbv",draft:!1,tags:[{label:"NBV",permalink:"/docs/tags/nbv"},{label:"bitcoin",permalink:"/docs/tags/bitcoin"}],version:"current",sidebarPosition:4,frontMatter:{title:"Bitcoin Orchestration",sidebar_position:4,tags:["NBV","bitcoin"]},sidebar:"docs",previous:{title:"Component Overview",permalink:"/docs/intro"},next:{title:"Fund Administration",permalink:"/docs/fund_administration"}},p={},u=[{value:"Taproot Upgrade",id:"taproot-upgrade",level:2},{value:"Coin Control",id:"coin-control",level:2},{value:"Proof of Reserves",id:"proof-of-reserves",level:2}],d={toc:u};function h(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Hashed Network Bitcoin Orchestration"),(0,i.kt)("meta",{charSet:"utf-8"}),(0,i.kt)("meta",{property:"og:image",content:"https://docs.hashed.network/img/taproot-example.png"}),(0,i.kt)("meta",{property:"og:description",content:"The bitcoin orchestrator generates the scripts and Schnoor addresses based on the configuration and business rules. The following diagram shows how a real-world spending policy would be translated to Tapscript and implemented with Hashed Network bitcoin orchestration."}),(0,i.kt)("meta",{property:"og:title",content:"Hashed Network Bitcoin Orchestration"}),(0,i.kt)("meta",{property:"og:url",content:"https://docs.hashed.network/docs/nbv"})),(0,i.kt)("p",null,"Recent innovations in bitcoin, such as ",(0,i.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/BIP_0174"},"BIP 174"),", and the taproot upgrade, ",(0,i.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/BIP_0340"},"BIP 340"),", ",(0,i.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/BIP_0341"},"BIP 341"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/BIP_0342"},"BIP 342"),", enables developers to de-couple the signing experience from the orchestration of transactions. For example, BIP 174 introduced the now widely supported partially signed bitcoin transaction (PSBT) format for multisignature wallets. "),(0,i.kt)("p",null,"Bitcoin orchestration is used to generate receiving addresses, verify ownership of treasuries, and proof of reserves reporting. The intermediate payloads (not private keys) may be encrypted or shared with a group. Compatible bitcoin signers include BlueWallet, in-browser via Hashed key vault, and more coming soon."),(0,i.kt)("p",null,"Users create an extended public key with their preferred signer, and verify that public key on Hashed Network (via QR code). When multiple users (or multiple accounts or security levels of the same user) attest to these keys on-chain, the pallet and off-chain workers orchestrate the process for signers. "),(0,i.kt)("p",null,"BIP 174 supports a limited number of signers per wallet, and lacks the scalability and privacy-preserving features of taproot."),(0,i.kt)("h2",{id:"taproot-upgrade"},"Taproot Upgrade"),(0,i.kt)("p",null,"Taproot upgrade functionality (340/341) preserves privacy because the outputs are always Schnoor signatures that make complex functionality and single addresses publicly indistinguishable. "),(0,i.kt)("p",null,"Pay-to-Taproot (P2TR) supports key and script aggregation in a hierarchy known as a Merkelized Alternative Script Tree (MAST). This ",(0,i.kt)("strong",{parentName:"p"},"tree")," enables functionality for conditionally allowing spend of a UTXO. MASTs preserve privacy by only requiring a proof from the branch of the tree that satisfies the root condition."),(0,i.kt)("p",null,"As described by ",(0,i.kt)("a",{parentName:"p",href:"https://beincrypto.com/learn/taproot/"},"Moeller"),', "',"[Tapscript]",' provides user choice, meaning some transactions can be anonymous while others can stay public, depending on the use case. Tapscript validates these newer forms of transaction validity."'),(0,i.kt)("p",null,'The ability to nest tapscript conditions recursively with MASTs enables a variety of expressive "smart contract" functionality to build into bitcoin spends. For example, require extended approvals for larger amounts, wait periods, and additional tiers of hardware signers.'),(0,i.kt)("p",null,"The bitcoin orchestrator generates the scripts and Schnoor addresses based on the configuration and business rules. The following diagram shows how a real-world spending policy would be translated to Tapscript and implemented with Hashed Network bitcoin orchestration. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(8375).Z,width:"1027",height:"702"})),(0,i.kt)("h2",{id:"coin-control"},"Coin Control"),(0,i.kt)("p",null,"Coin control allows users to organize, combine, label, and sweep UTXOs. Businesses map transactions to general ledger income or expense accounts for proper bookkeeping. Users can export these ledgers as text files to be used in ",(0,i.kt)("a",{parentName:"p",href:"https://www.hledger.org"},"hledger")," and other ",(0,i.kt)("a",{parentName:"p",href:"https://plaintextaccounting.org/"},"plain text accounting")," tools. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/accounting"},"Triple Entry Accounting")," for more."),(0,i.kt)("h2",{id:"proof-of-reserves"},"Proof of Reserves"),(0,i.kt)("p",null,'With coin control and accounting to properly manage the treasury, the information is well-organized for "proof-of-reserves". Treasurers can sign a single transaction that is combined with a report, that prove that the treasurer has access to the listed UTXOs.'),(0,i.kt)("h1",{id:"primary-benefits-of-bitcoin-orchestration"},"Primary Benefits of Bitcoin Orchestration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verifiable/trustless receiving addresses and tapscript"),(0,i.kt)("li",{parentName:"ul"},"Coin control for labeling and grouping UTXOs with policies"),(0,i.kt)("li",{parentName:"ul"},"Integration with triple entry accounting systems"),(0,i.kt)("li",{parentName:"ul"},"Proof-of-Reserves reporting"),(0,i.kt)("li",{parentName:"ul"},"Active notifications to prompt approvers for signatures"),(0,i.kt)("li",{parentName:"ul"},"Integration with common pallets such as ",(0,i.kt)("inlineCode",{parentName:"li"},"democracy")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"alliance"))))}h.isMDXComponent=!0},8375:function(e,t,r){t.Z=r.p+"assets/images/taproot-example-8664421a72ceb0eb8bf648c5ceca797a.png"}}]);