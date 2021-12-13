"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[118],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5022:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_label:"\u7a0b\u5e8f\u72b6\u6001",sidebar_position:1},s={unversionedId:"get-started/smart-contracts/gear-program",id:"get-started/smart-contracts/gear-program",isDocsHomePage:!1,title:"Gear \u7a0b\u5e8f\u72b6\u6001",description:"\u7a0b\u5e8f\u662f Gear \u7ec4\u4ef6\u7684\u4e3b\u8981\u5355\u5143\u3002\u7a0b\u5e8f\u4ee3\u7801\u5b58\u50a8\u4e3a\u4e0d\u53ef\u53d8\u7684 Wasm \u4e8c\u8fdb\u5236\u6587\u4ef6\uff08blob\uff09\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/get-started/smart-contracts/gear-program.md",sourceDirName:"get-started/smart-contracts",slug:"/get-started/smart-contracts/gear-program",permalink:"/zh-cn/get-started/smart-contracts/gear-program",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/get-started/smart-contracts/gear-program.md",version:"current",sidebar_label:"\u7a0b\u5e8f\u72b6\u6001",sidebarPosition:1,frontMatter:{sidebar_label:"\u7a0b\u5e8f\u72b6\u6001",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u672c\u5730\u8282\u70b9",permalink:"/zh-cn/get-started/local-node/setting-up"},next:{title:"\u6d88\u606f\u683c\u5f0f",permalink:"/zh-cn/get-started/smart-contracts/messaging"}},l=[],p={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7a0b\u5e8f\u662f Gear \u7ec4\u4ef6\u7684\u4e3b\u8981\u5355\u5143\u3002\u7a0b\u5e8f\u4ee3\u7801\u5b58\u50a8\u4e3a\u4e0d\u53ef\u53d8\u7684 Wasm \u4e8c\u8fdb\u5236\u6587\u4ef6\uff08blob\uff09\u3002\n\u6bcf\u4e2a\u7a0b\u5e8f\u90fd\u6709\u4e00\u4e2a\u56fa\u5b9a\u7684\u5185\u5b58\uff0c\u5728\u6d88\u606f\u5904\u7406\u4e4b\u95f4\u6301\u7eed\u5b58\u5728\uff08\u6240\u8c13\u7684\u9759\u6001\u533a\u57df\uff09\u3002"),(0,o.kt)("p",null,"Gear \u7a0b\u5e8f\u7684\u6700\u57fa\u672c\u7ed3\u6784\u662f\u8fd9\u6837\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#![no_std]\n\nuse gstd::msg;\n\n#[no_mangle]\npub unsafe extern "C" fn handle() {\n    msg::reply(b"Hello world!", 0, 0);\n}\n\n#[no_mangle]\npub unsafe extern "C" fn init() {}\n\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"init()"),"\u51fd\u6570\u5728\u7a0b\u5e8f\u521d\u59cb\u5316\u65f6\u53ea\u88ab\u8c03\u7528\u4e00\u6b21\u3002\u5e76\u5904\u7406\u4f20\u5165\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"init payload"),"\uff0c\u5982\u679c\u6709\u7684\u8bdd\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"handle()"),"\u51fd\u6570\u5c06\u5728\u6bcf\u6b21\u7a0b\u5e8f\u6536\u5230\u4f20\u5165\u7684\u6d88\u606f\u65f6\u88ab\u8c03\u7528\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," \u5c06\u88ab\u5904\u7406\u3002"))}u.isMDXComponent=!0}}]);