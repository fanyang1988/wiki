"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[921],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1630:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:1,sidebar_label:"Connect"},s={unversionedId:"api/connect",id:"api/connect",isDocsHomePage:!1,title:"Connect API",description:"The API allows us to interact with the chain and make queries via Javascript. The basic API is implemented on the Substrate layer and is the same for all substrate-based networks.",source:"@site/docs/api/connect.md",sourceDirName:"api",slug:"/api/connect",permalink:"/api/connect",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/api/connect.md",version:"current",sidebar_label:"Connect",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Connect"},sidebar:"tutorialSidebar",previous:{title:"`cargo-program` utility",permalink:"/get-started/smart-contracts/cargo-program"},next:{title:"Ussing CLI",permalink:"/api/cli"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Getting started",id:"getting-started",children:[]},{value:"Example",id:"example",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The API allows us to interact with the chain and make queries via Javascript. The basic API is implemented on the Substrate layer and is the same for all substrate-based networks."),(0,o.kt)("p",null,"Complete API overview and cookbook is on ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/"},"Polkadot documentation portal"),"."),(0,o.kt)("p",null,"Below are a few entry points for interact with Gear:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ws://127.0.0.1:9944")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @gear-js/api \n")),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"Start an API connection to a running node on localhost"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { GearApi } from '@gear-js/api';\n\nconst gearApi = await GearApi.create();\n")),(0,o.kt)("p",null,"You can also connect to a different node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const gearApi = await GearApi.create({ provider: 'wss://someIP:somePort' });\n")),(0,o.kt)("p",null,"Registering custom types"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const yourCustomTypesExample = {\n  Person: {\n    surname: 'String',\n    name: 'String',\n    patronymic: 'Option<String>'\n  },\n  Id: {\n    decimal: 'u64',\n    hex: 'Vec<u8>'\n  },\n  Data: {\n    id: 'Id',\n    person: 'Person',\n    data: 'Vec<String>'\n  }\n};\nconst gearApi = await GearApi.create({ customTypes: { ...yourCustomTypesExample } });\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This simple example describes how to subscribe to a new blocks and get chain spec:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function connect() {\n  const gearApi = await GearApi.create();\n\n  const [chain, nodeName, nodeVersion] = await Promise.all([\n    gearApi.api.rpc.system.chain(),\n    gearApi.api.rpc.system.name(),\n    gearApi.api.rpc.system.version(),\n  ]);\n  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);\n\n  gearApi.gearEvents.subscribeNewBlocks((header) => {\n    console.log(`New block with number: ${header.number.toNumber()} and hash: ${header.hash.toHex()}`);\n  });\n}\nconnect().catch(console.error);\n")))}u.isMDXComponent=!0}}]);