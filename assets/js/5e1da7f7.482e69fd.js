"use strict";(self.webpackChunkhashed_network_docs=self.webpackChunkhashed_network_docs||[]).push([[8755],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,k=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4328:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var a=n(3117),r=(n(7294),n(3905));const o={title:"MoneScript Integration",sidebar_position:4,tags:["accounting"]},l=void 0,i={unversionedId:"accounting/monescript",id:"accounting/monescript",title:"MoneScript Integration",description:"Hashed Network MoneScript Integration",source:"@site/docs/accounting/monescript.md",sourceDirName:"accounting",slug:"/accounting/monescript",permalink:"/docs/accounting/monescript",draft:!1,tags:[{label:"accounting",permalink:"/docs/tags/accounting"}],version:"current",sidebarPosition:4,frontMatter:{title:"MoneScript Integration",sidebar_position:4,tags:["accounting"]},sidebar:"docs",previous:{title:"Beancount Integration",permalink:"/docs/accounting/beancount"},next:{title:"Ledger in Go Integration",permalink:"/docs/accounting/ledger_in_go"}},p={},s=[],c={toc:s};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Hashed Network MoneScript Integration"),(0,r.kt)("meta",{charSet:"utf-8"}),(0,r.kt)("meta",{property:"og:image",content:"https://docs.hashed.network/img/monolith.png"}),(0,r.kt)("meta",{property:"og:description",content:"On-chain, triple entry accounting protocol generates journal files from Native Bitcoin Vaults and enables vault administrators to run balance sheets and income statements"}),(0,r.kt)("meta",{property:"og:title",content:"Hashed Network On-chain Accounting"}),(0,r.kt)("meta",{property:"og:url",content:"https://docs.hashed.network/docs/accounting"})),(0,r.kt)("p",null,"MoneScript is a double-entry plain-text accounting system that works in your browser. Monescript is a server-less application, all the calculations are performed locally in your browser window without any data leaving your computer."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Github Repository: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jmgayosso/btc-monescript"},"MoneScript BTC"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Journal Syntax")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Transaction format"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"YYYY-MM-DD date format"),(0,r.kt)("li",{parentName:"ul"},"BTC currency"),(0,r.kt)("li",{parentName:"ul"},"simple arithmetic value expressions (+, -, *, /)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Comments prefixed with ';' or '#'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bucket Command")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tag names")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample MoneScript Journal File")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-journal"},"2021-10-11 * Sent to Bob - Deposit                   ; 6595a1894cc976937ddeff4d111df9edf603040008e49d41cedbbc6081f08592\n    Assets:Bitcoin Vaults:Hot     BTC-0.10954338  ; bc1qjymg5ggxetpcu9sl2ugdmvkple86n2cqfanhde\n    Expenses:Marketing\n\n2021-10-13 * Sent to Bob - Project Kickoff                 ; e8db07fba6dcf5d33dae093930f7504035ce7ad35473fbf7efc74fe5c4612246\n    Assets:Bitcoin Vaults:Hot           BTC-2.94966474  ; bc1qjymg5ggxetpcu9sl2ugdmvkple86n2cqfanhde\n    Expenses:Marketing\n\n2021-10-14 * Sent to Charlie to pay Invoice 992               ; d4b977ec4a522e648ddd2e4735a4f4bff32209fa0d2175a8ac5cb20d43bafa28\n    Assets:Bitcoin Vaults:Hot           BTC-0.13835373     ; 19Ne2oXRWtWJcKPu8dbbBwDqJqjCJUqpPQ\n    Expenses:Development\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requirements")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node")," >= 16.x.x"),(0,r.kt)("li",{parentName:"ul"},"Npm or ",(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"Yarn")," installed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tools used")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pegjs.org/"},"PegJS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://browserify.org/"},"Browserify")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vuejs.org/"},"Vue"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Installation")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jmgayosso/btc-monescript"},"repository")),(0,r.kt)("li",{parentName:"ol"},"Execute Yarn or Npm to install all the dependencies",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n"))),(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://browserify.org/#install"},"Browserify")),(0,r.kt)("li",{parentName:"ol"},"Execute the following command to create the file to process the Journal",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build-grammar\n"))),(0,r.kt)("li",{parentName:"ol"},"Execute the following command to compile the Vue UI and bundle the application, this is ready to deploy in a server using the .html ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn uib\n"))),(0,r.kt)("li",{parentName:"ol"},"Execute the following command to open the application",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tutorial & Example")),(0,r.kt)("p",null,"The user interface"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Elements")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Open Tab")," Here you can upload your Journal File ","[.journal or .txt]"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Transactions Tab")," Here you will see the Graphs after upload the journal file")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image14",src:n(689).Z,width:"2880",height:"1588"})),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," tab to load your Journal"),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"Image15",src:n(9994).Z,width:"2881",height:"572"})," "),(0,r.kt)("p",null,"Once loaded the data you will see something like this.\nIn the following image you can see the Graphs using the Tabs of Monthly Chart & Weekly Chart."),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"Image16",src:n(9764).Z,width:"2850",height:"1836"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Monthly Chart"),"\n",(0,r.kt)("img",{alt:"image17",src:n(3052).Z,width:"2834",height:"860"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Weekly Chart"),"\n",(0,r.kt)("img",{alt:"image18",src:n(4574).Z,width:"2849",height:"799"})),(0,r.kt)("p",null,"The UI provides many filters to use."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Filters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Expenses ","[Button red]"," "),(0,r.kt)("li",{parentName:"ul"},"Incomes ","[Button green]"),(0,r.kt)("li",{parentName:"ul"},"Month Selector"),(0,r.kt)("li",{parentName:"ul"},"Payee"),(0,r.kt)("li",{parentName:"ul"},"Tag\n",(0,r.kt)("img",{alt:"image16",src:n(2713).Z,width:"2835",height:"383"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Table Section")),(0,r.kt)("p",null,"The table reacts to changes when you change between expenses, incomes and assets, and you can see with details the information for each entry in the Journal. This table has the columns date, Amount, Payee and the Account"),(0,r.kt)("p",null,"Expenses\n",(0,r.kt)("img",{alt:"image17",src:n(5068).Z,width:"2835",height:"696"}),"\nIncomes\n",(0,r.kt)("img",{alt:"image18",src:n(403).Z,width:"2833",height:"872"})))}u.isMDXComponent=!0},2713:function(e,t,n){t.Z=n.p+"assets/images/filters-24314cfd6570879f2342ca6c52bd77fd.png"},689:function(e,t,n){t.Z=n.p+"assets/images/homepage-5f298324cfa8843e620e1c023a0777cc.png"},9764:function(e,t,n){t.Z=n.p+"assets/images/homepageJournal-d062aed0fe04b877ca352db0f3ff7dd6.png"},9994:function(e,t,n){t.Z=n.p+"assets/images/loadJournal-dc9a727a5d46846cb0fa9858e070e98f.png"},3052:function(e,t,n){t.Z=n.p+"assets/images/monthlyChart-15103757dc008ca28513ea96995603cf.png"},5068:function(e,t,n){t.Z=n.p+"assets/images/tableExpenses-75429249fd79abd6e5ed2ff296386c78.png"},403:function(e,t,n){t.Z=n.p+"assets/images/tableIncome-6a99e84686e8a11f8198e009b43114d6.png"},4574:function(e,t,n){t.Z=n.p+"assets/images/weeklyChart-2473b5811b8e66661b03259402e05cd7.png"}}]);