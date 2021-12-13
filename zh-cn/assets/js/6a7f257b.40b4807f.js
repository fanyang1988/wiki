"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[632],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3928:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return i},default:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],s={sidebar_label:"\u6d88\u606f\u683c\u5f0f",sidebar_position:1},c={unversionedId:"get-started/smart-contracts/messaging",id:"get-started/smart-contracts/messaging",isDocsHomePage:!1,title:"\u6d88\u606f\u683c\u5f0f",description:"\u4e0e\u6bcf\u4e2a\u7a0b\u5e8f\u7684\u4ea4\u4e92\u662f\u901a\u8fc7\u4fe1\u606f\u4f20\u9012\u8fdb\u884c\u7684\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/get-started/smart-contracts/messaging.md",sourceDirName:"get-started/smart-contracts",slug:"/get-started/smart-contracts/messaging",permalink:"/zh-cn/get-started/smart-contracts/messaging",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/get-started/smart-contracts/messaging.md",version:"current",sidebar_label:"\u6d88\u606f\u683c\u5f0f",sidebarPosition:1,frontMatter:{sidebar_label:"\u6d88\u606f\u683c\u5f0f",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Gear \u7a0b\u5e8f\u72b6\u6001",permalink:"/zh-cn/get-started/smart-contracts/gear-program"},next:{title:"\u90e8\u7f72\u667a\u80fd\u5408\u7ea6",permalink:"/zh-cn/get-started/smart-contracts/deploy"}},i=[{value:"\u6d88\u606f\u7c7b\u578b",id:"\u6d88\u606f\u7c7b\u578b",children:[]},{value:"Gas",id:"gas",children:[]},{value:"\u6d88\u606f\u5904\u7406\u6a21\u5757",id:"\u6d88\u606f\u5904\u7406\u6a21\u5757",children:[]},{value:"\u6d88\u606f\u7f16\u89e3\u7801",id:"\u6d88\u606f\u7f16\u89e3\u7801",children:[]}],p={toc:i};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e0e\u6bcf\u4e2a\u7a0b\u5e8f\u7684\u4ea4\u4e92\u662f\u901a\u8fc7\u4fe1\u606f\u4f20\u9012\u8fdb\u884c\u7684\u3002"),(0,l.kt)("p",null,"Gear \u4e2d\u7684\u6d88\u606f\u6709\u5171\u540c\u7684\u63a5\u53e3\uff0c\u53c2\u6570\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"source account,\ntarget account,\npayload,\ngas_limit\nvalue\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gas_limit")," \u662f\u7528\u6237\u613f\u610f\u82b1\u5728\u5904\u7406\u4fe1\u606f\u4e0a\u7684 gas \u6570\u91cf\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"value")," \u662f\u4e00\u4e2a\u8981\u8f6c\u8d26\u5230\u76ee\u6807\u8d26\u6237\u7684\u503c\u3002\u5728\u521d\u59cb\u7a0b\u5e8f\u4e0a\u4f20\u7684\u7279\u6b8a\u4fe1\u606f\u4e2d\uff0c\u8fd9\u4e2a\u503c\u5c06\u88ab\u53d1\u9001\u5230\u8be5\u7a0b\u5e8f\u65b0\u521b\u5efa\u8d26\u6237\u7684\u4f59\u989d\u4e2d\u3002"),(0,l.kt)("h2",{id:"\u6d88\u606f\u7c7b\u578b"},"\u6d88\u606f\u7c7b\u578b"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u8be5\u7a0b\u5e8f\uff0c\u6709\u4ee5\u4e0b\u7c7b\u578b\u7684\u6d88\u606f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ece\u7528\u6237\u5230\u7a0b\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u4ece\u7a0b\u5e8f\u5230\u7a0b\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u4ece\u7a0b\u5e8f\u5230\u7528\u6237"),(0,l.kt)("li",{parentName:"ul"},"\u6765\u81ea\u7528\u6237\u7684\u7279\u6b8a\u6d88\u606f\uff0c\u7528\u4e8e\u5c06\u65b0\u7a0b\u5e8f\u4e0a\u4f20\u5230\u7f51\u7edc\u3002 payload \u5fc5\u987b\u5305\u542b\u7a0b\u5e8f\u672c\u8eab\u7684 Wasm \u6587\u4ef6\u3002 \u4e0d\u5f97\u6307\u5b9a\u76ee\u6807\u5e10\u6237 - \u5b83\u5c06\u4f5c\u4e3a\u5904\u7406\u6d88\u606f\u53d1\u5e03\u7684\u4e00\u90e8\u5206\u521b\u5efa\u3002")),(0,l.kt)("h2",{id:"gas"},"Gas"),(0,l.kt)("p",null,"Gear \u8282\u70b9\u5728\u6d88\u606f\u5904\u7406\u8fc7\u7a0b\u4e2d\u6536\u53d6 gas \u8d39\u7528\u3002 gas \u8d39\u7528\u662f\u7ebf\u6027\u7684\u2014\u2014\u6bcf\u4e2a\u5206\u914d\u7684 64KB \u5185\u5b58\u9875\u9762\u9700\u8981 64000 gas\uff0c\u6bcf\u4e2a\u68c0\u6d4b\u7684 Wasm \u6307\u4ee4\u9700\u8981 1000 gas\u3002\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u624b\u7eed\u8d39\u6700\u4f4e\u7684\u4ea4\u6613\u7684\u6d88\u606f\u53ef\u80fd\u4f1a\u5ef6\u8fdf\uff0c\u751a\u81f3\u6c38\u8fdc\u4e0d\u4f1a\u8fdb\u5165\u5904\u7406\u961f\u5217\u3002\u5982\u679c\u5728\u8fbe\u5230\u9650\u5236\u4e4b\u524d\u5904\u7406\u4e86\u4ea4\u6613\uff0c\u5219\u5269\u4f59\u7684\u6c14\u4f53\u5c06\u8fd4\u56de\u5230\u53d1\u9001\u5e10\u6237\u3002"),(0,l.kt)("h2",{id:"\u6d88\u606f\u5904\u7406\u6a21\u5757"},"\u6d88\u606f\u5904\u7406\u6a21\u5757"),(0,l.kt)("p",null,"\u6839\u636e\u4e0a\u4e0b\u6587\uff0c\u7a0b\u5e8f\u4ee5\u4e0d\u540c\u7684\u65b9\u5f0f\u89e3\u91ca\u6d88\u606f\u3002 \u4e3a\u4e86\u5728 Gear \u7a0b\u5e8f\u4e2d\u5904\u7406\u6d88\u606f\uff0c\u4f7f\u7528\u4e86\u4e13\u6709\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"gstd")," \u6807\u51c6\u5e93\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"::msg")," \u6a21\u5757\u3002 gstd \u4e2d msg.rs \u4e2d\u63cf\u8ff0\u4e86\u6240\u6709\u53ef\u7528\u51fd\u6570\uff1a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/gear/blob/master/gstd/src/msg.rs"},"github \u94fe\u63a5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"pub fn load<D: Decode>() -> Result<D, codec::Error> {\n    D::decode(&mut load_bytes().as_ref())\n}\n")),(0,l.kt)("p",null,"\u52a0\u8f7d\u5b57\u8282\u5e76\u5c1d\u8bd5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"codec"),"\u89e3\u7801\u4e3a\u6307\u5b9a\u7684\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"pub fn load_bytes() -> Vec<u8> {\n    let mut result = vec![0u8; gcore::msg::size()];\n    gcore::msg::load(&mut result[..]);\n    result\n}\n")),(0,l.kt)("p",null,"\u52a0\u8f7d\u5b57\u8282"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"pub fn reply<E: Encode>(payload: E, gas_limit: u64, value: u128) -> MessageId {\n    reply_bytes(&payload.encode(), gas_limit, value)\n}\n")),(0,l.kt)("p",null,"\u56de\u590d\u6d88\u606f\u5e76\u5c1d\u8bd5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"codec")," \u89e3\u7801\u4e3a\u6307\u5b9a\u7c7b\u578b\u3002 \u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"MessageId"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"pub fn reply_bytes<T: AsRef<[u8]>>(payload: T, gas_limit: u64, value: u128) -> MessageId {\n    gcore::msg::reply(payload.as_ref(), gas_limit, value)\n}\n")),(0,l.kt)("p",null,"\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"payload")," \u4e2d\u7684\u5b57\u8282\u56de\u590d\u6d88\u606f\u3002 \u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"MessageId")),(0,l.kt)("h2",{id:"\u6d88\u606f\u7f16\u89e3\u7801"},"\u6d88\u606f\u7f16\u89e3\u7801"),(0,l.kt)("p",null,"Gear \u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"parity-scale-codec"),"\uff0c\u8fd9\u662f SCALE \u7f16\u89e3\u7801\u5668\u7684 Rust \u5b9e\u73b0\u3002\nSCALE \u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u683c\u5f0f\uff0c\u5141\u8bb8\u7f16\u7801\uff08\u548c\u89e3\u7801\uff09\uff0c\u8fd9\u4f7f\u5f97\u5b83\u975e\u5e38\u9002\u7528\u4e8e\u8d44\u6e90\u53d7\u9650\u7684\u6267\u884c\u73af\u5883\uff0c\u5982\u533a\u5757\u94fe\u8fd0\u884c\u65f6\u95f4\u548c\u4f4e\u529f\u8017\u3001\u4f4e\u5185\u5b58\u8bbe\u5907\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"#[derive(Encode, Decode)]\n")),(0,l.kt)("p",null,"\u66f4\u591a\u5173\u4e8e SCALE \u7684\u5185\u5bb9\u8bf7\u770b ",(0,l.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/advanced/codec"},"SCALE Codec"),"\u3002"))}u.isMDXComponent=!0}}]);