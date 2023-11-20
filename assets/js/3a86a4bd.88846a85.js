"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,m=u["".concat(p,".").concat(k)]||u[k]||b[k]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:30},o="\u7db2\u9801\u524d\u7aef\u653b\u64ca\u5728 Web3 \u4e0a\u7684\u61c9\u7528",i={unversionedId:"ch5/web3-attacks",id:"ch5/web3-attacks",title:"\u7db2\u9801\u524d\u7aef\u653b\u64ca\u5728 Web3 \u4e0a\u7684\u61c9\u7528",description:"\u8ac7\u5230\u4e86 Web3\uff0c\u5927\u591a\u6578\u4eba\u60f3\u5230\u7684\u90fd\u6703\u662f\u52a0\u5bc6\u8ca8\u5e63\u3001\u5143\u5b87\u5b99\u6216\u662f NFT \u7b49\u7b49\u7684\u6771\u897f\uff0c\u800c\u9019\u4e9b\u80cc\u5f8c\u7684\u6280\u8853\u662f\u5340\u584a\u93c8\u4ee5\u53ca\u667a\u6167\u5408\u7d04\uff0c\u662f\u4e00\u5957\u5b8c\u5168\u4e0d\u540c\u7684\u9ad4\u7cfb\u3002",source:"@site/docs/ch5/30-web3-attacks.md",sourceDirName:"ch5",slug:"/ch5/web3-attacks",permalink:"/beyond-xss/ch5/web3-attacks",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef\u4f9b\u61c9\u93c8\u653b\u64ca\uff1a\u5f9e\u4e0a\u6e38\u653b\u64ca\u4e0b\u6e38",permalink:"/beyond-xss/ch5/supply-chain-attack"},next:{title:"\u6700\u6709\u8da3\u7684\u524d\u7aef\u65c1\u8def\u653b\u64ca\uff1aXSLeaks\uff08\u4e0a\uff09",permalink:"/beyond-xss/ch5/xsleaks-1"}},p={},s=[{value:"\u5f71\u97ff\u529b\u66f4\u5927\u7684 XSS",id:"\u5f71\u97ff\u529b\u66f4\u5927\u7684-xss",level:2},{value:"Cookie bomb \u7684\u5be6\u969b\u61c9\u7528",id:"cookie-bomb-\u7684\u5be6\u969b\u61c9\u7528",level:2},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2}],c={toc:s},u="wrapper";function b(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7db2\u9801\u524d\u7aef\u653b\u64ca\u5728-web3-\u4e0a\u7684\u61c9\u7528"},"\u7db2\u9801\u524d\u7aef\u653b\u64ca\u5728 Web3 \u4e0a\u7684\u61c9\u7528"),(0,a.kt)("p",null,"\u8ac7\u5230\u4e86 Web3\uff0c\u5927\u591a\u6578\u4eba\u60f3\u5230\u7684\u90fd\u6703\u662f\u52a0\u5bc6\u8ca8\u5e63\u3001\u5143\u5b87\u5b99\u6216\u662f NFT \u7b49\u7b49\u7684\u6771\u897f\uff0c\u800c\u9019\u4e9b\u80cc\u5f8c\u7684\u6280\u8853\u662f\u5340\u584a\u93c8\u4ee5\u53ca\u667a\u6167\u5408\u7d04\uff0c\u662f\u4e00\u5957\u5b8c\u5168\u4e0d\u540c\u7684\u9ad4\u7cfb\u3002"),(0,a.kt)("p",null,"\u4f46\u53ef\u5225\u5fd8\u8a18\u4e86\uff0cWeb3 \u7684\u4e16\u754c\u4ecd\u7136\u9700\u8981\u4e00\u500b\u5165\u53e3\uff0c\u800c\u9019\u500b\u5165\u53e3\u5c31\u662f Web2\uff0c\u4e5f\u5c31\u662f\u6211\u5011\u6240\u719f\u6089\u7684\u7db2\u9801\u4e16\u754c\u3002"),(0,a.kt)("p",null,"\u5728\u9019\u4e00\u7bc7\u88e1\u9762\uff0c\u6211\u6703\u8ddf\u8457\u5927\u5bb6\u4e00\u8d77\u770b\u5e7e\u500b\u5f9e Web2 \u653b\u64ca Web3 \u4e16\u754c\u7684\u771f\u5be6\u6848\u4f8b\u3002"),(0,a.kt)("h2",{id:"\u5f71\u97ff\u529b\u66f4\u5927\u7684-xss"},"\u5f71\u97ff\u529b\u66f4\u5927\u7684 XSS"),(0,a.kt)("p",null,"\u5728\u4e00\u822c\u7684\u7db2\u7ad9\u88e1\u9762\u5982\u679c\u6210\u529f\u627e\u5230\u4e86 XSS \u6f0f\u6d1e\uff0c\u90a3\u53ef\u4ee5\u505a\u7684\u4e8b\u60c5\u901a\u5e38\u90fd\u662f\u5077\u53d6\u4f7f\u7528\u8005\u5728\u7db2\u7ad9\u4e0a\u7684\u8cc7\u6599\uff0c\u4f8b\u5982\u8aaa\u96fb\u8a71\u3001Email \u6216\u662f\u59d3\u540d\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u90a3\u5982\u679c\u5728 Web3 \u7684\u4e16\u754c\u88e1\u9762\u627e\u5230\u4e86 XSS \u5462\uff1f\u6216\u8a31\u9664\u4e86\u5077\u8cc7\u6599\u4ee5\u5916\uff0c\u9084\u53ef\u4ee5\u5077\u66f4\u6709\u50f9\u503c\u7684\u6771\u897f\u2014\u2014\u52a0\u5bc6\u8ca8\u5e63\u3002"),(0,a.kt)("p",null,"\u5728\u52a0\u5bc6\u8ca8\u5e63\u7684\u4e16\u754c\u4e2d\uff0c\u6bcf\u500b\u4eba\u90fd\u6709\u4e00\u500b\u81ea\u5df1\u7684\u9322\u5305\uff0c\u800c\u5728\u700f\u89bd\u5668\u4e0a\u6700\u77e5\u540d\u7684\u9322\u5305\u4e4b\u4e00\u5c31\u662f Metamask\uff0c\u7576\u4f60\u8981\u6388\u6b0a\u4e00\u7b46\u4ea4\u6613\u6216\u662f\u7c3d\u7f72\u4e00\u500b\u8a0a\u606f\u7684\u6642\u5019\uff0c\u6703\u770b\u5230\u5982\u4e0b\u7684\u4ecb\u9762\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6440).Z,width:"360",height:"618"})),(0,a.kt)("p",null,"\u5982\u679c\u662f\u4ea4\u6613\u6216\u662f\u667a\u6167\u5408\u7d04\u6388\u6b0a\u7684\u8a71\uff0c\u4e0a\u9762\u6703\u5beb\u8457\u5408\u7d04\u7684\u5730\u5740\u4ee5\u53ca\u8a0a\u606f\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u5927\u5bb6\u90fd\u77e5\u9053\u4e0d\u8981\u96a8\u4fbf\u540c\u610f\u4f86\u8def\u4e0d\u660e\u7684\u4ea4\u6613\uff0c\u770b\u8d77\u4f86\u5947\u602a\u7684\u7db2\u7ad9\u5c31\u5ffd\u7565\u5b83\uff0c\u4f46\u5982\u679c\u4eca\u5929\u662f\u50cf PancakeSwap \u9019\u7a2e\u6709\u540d\u7684\u7db2\u7ad9\u5462\uff1f\u7576\u4f60\u5728\u4e0a\u9762\u57f7\u884c\u64cd\u4f5c\u4e26\u6309\u4e0b\u78ba\u8a8d\u6642\uff0cMetamask \u9322\u5305\u8df3\u51fa\u4e86\u63d0\u793a\u8996\u7a97\uff0c\u8981\u4f60\u540c\u610f\u4ea4\u6613\uff0c\u6211\u60f3\u61c9\u8a72\u4e5d\u6210\u7684\u4eba\u90fd\u6703\u76f4\u63a5\u6309\u4e0b\u78ba\u5b9a\u3002"),(0,a.kt)("p",null,"\u4f46\u6709\u53ef\u80fd\u56e0\u70ba\u9019\u500b\u5c0f\u5c0f\u7684\u9ede\u64ca\uff0c\u5c0e\u81f4\u4f60\u640d\u5931\u4e86\u5927\u91cf\u7684\u52a0\u5bc6\u8ca8\u5e63\u3002"),(0,a.kt)("p",null,"\u6240\u8b02\u7684\u300c\u7c3d\u7f72\u4ea4\u6613\u300d\u9019\u4ef6\u4e8b\u60c5\uff0c\u5176\u5be6\u5c31\u662f\u7db2\u7ad9\u900f\u904e JavaScript \u53bb\u547c\u53eb\u9322\u5305\u6240\u63d0\u4f9b\u7684 API\uff0c\u4e26\u4e14\u8b93\u9322\u5305\u8df3\u51fa\u76f8\u95dc\u7684\u4ecb\u9762\uff0c\u7576\u4f7f\u7528\u8005\u6309\u4e0b\u540c\u610f\u6642\uff0c\u624d\u6703\u4f7f\u7528\u79c1\u9470\u53bb\u7c3d\u7f72\u4ea4\u6613\uff0c\u9019\u7b46\u4ea4\u6613\u624d\u7b97\u6210\u7acb\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5728 Web3 \u7684\u4e16\u754c\u4e2d\uff0c\u5982\u679c\u6709\u99ed\u5ba2\u638c\u63e1\u4e86 JavaScript \u7684\u57f7\u884c\uff0c\u5c31\u53ef\u4ee5\u5728\u770b\u8d77\u4f86\u5408\u6cd5\u7684\u7db2\u7ad9\u4e0a\uff0c\u8df3\u51fa\u4e00\u7b46\u60e1\u610f\u7684\u4ea4\u6613\uff0c\u7576\u4f7f\u7528\u8005\u6309\u4e0b\u540c\u610f\u6642\u53ef\u80fd\u5c31\u6703\u5c07\u52a0\u5bc6\u8ca8\u5e63\u6388\u6b0a\u7d66\u99ed\u5ba2\u7684\u667a\u6167\u5408\u7d04\uff0c\u9322\u5c31\u88ab\u5077\u8d70\u4e86\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\u8aaa 2022 \u5e74\u6642\u4e00\u500b\u53eb\u505a PREMINT \u7684 NFT \u7db2\u7ad9\u4e0a\u7684 JavaScript \u6a94\u6848\u906d\u5230\u7ac4\u6539\uff0c\u5c0e\u81f4\u6709\u4e00\u4e9b\u4f7f\u7528\u8005\u5728\u7121\u610f\u9593\u540c\u610f\u4e86\u99ed\u5ba2\u7684\u667a\u6167\u5408\u7d04\u7684\u6388\u6b0a\uff0c\u66f4\u591a\u7d30\u7bc0\u8acb\u53c3\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.certik.com/resources/blog/77oaazrsx1mewnraJePYQI-premint-nft-incident-analysis"},"PREMINT NFT Incident Analysis")),(0,a.kt)("p",null,"\u627e\u5230\u4e86\u4e00\u500b\u53ef\u4ee5 XSS \u7684\u7db2\u7ad9\uff0c\u5c31\u53ea\u80fd\u653b\u64ca\u4e00\u500b\uff0c\u4f46\u5982\u679c\u627e\u5230\u4e86\u8a31\u591a\u7db2\u7ad9\u5171\u540c\u4f7f\u7528\u7684 library \u7684\u6f0f\u6d1e\uff0c\u90a3\u5f71\u97ff\u529b\u5c31\u66f4\u5927\u4e86\u3002"),(0,a.kt)("p",null,"\u524d\u9762\u4ecb\u7d39\u904e\u7684\u4f9b\u61c9\u93c8\u653b\u64ca\u4e5f\u53ef\u4ee5\u904b\u7528\u5728 Web3 \u7684\u7db2\u7ad9\u4e0a\u9762\uff0c\u63a5\u4e0b\u4f86\u8981\u4ecb\u7d39\u7684\u662f\u7531 Sam Curry \u5728 2022 \u5e74\u6642\u767c\u5e03\u7684\u6587\u7ae0\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://samcurry.net/universal-xss-on-netlifys-next-js-library/"},"Exploiting Web3\u2019s Hidden Attack Surface: Universal XSS on Netlify\u2019s Next.js Library")),(0,a.kt)("p",null,"\u5728\u6587\u7ae0\u4e2d\uff0c\u4ed6\u63cf\u8ff0\u4e86\u81ea\u5df1\u627e\u5230\u4e86\u4e00\u500b Next.js \u76f8\u95dc\u5957\u4ef6\u4ee5\u53ca @netlify/ipx \u7684\u6f0f\u6d1e\uff0c\u80fd\u5920\u5728\u4efb\u4f55\u6709\u4f7f\u7528\u9019\u4e9b\u5957\u4ef6\u7684\u7db2\u7ad9\u4e0a\u9762\u57f7\u884c XSS\u3002"),(0,a.kt)("p",null,"\u800c netlify \u539f\u672c\u5c31\u662f\u4e00\u500b\u8a31\u591a\u4eba\u6703\u9078\u64c7\u5728\u4e0a\u9762\u90e8\u7f72\u7db2\u7ad9\u7684\u670d\u52d9\uff0c\u5c24\u5176\u662f Web3 \u7684\u7db2\u7ad9\uff0c\u53ef\u80fd\u53ea\u662f\u4e00\u500b\u6c92\u6709\u50b3\u7d71\u5f8c\u7aef\u7684\u975c\u614b\u9801\u9762\uff0c\u6240\u6709\u9801\u9762\u7684\u529f\u80fd\u90fd\u53ef\u4ee5\u900f\u904e HTML\u3001CSS \u4ee5\u53ca JavaScript \u5b8c\u6210\uff0c\u4e0d\u9700\u8981\u5f8c\u7aef API\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u900f\u904e\u9019\u500b\u6f0f\u6d1e\uff0c\u53ef\u4ee5\u653b\u64ca\u50cf\u662f Gemini \u6216\u662f PancakeSwap \u9019\u7a2e\u6709\u540d\u7684\u5927\u7db2\u7ad9\uff0c\u5229\u7528 XSS \u8df3\u51fa\u667a\u6167\u5408\u7d04\u6388\u6b0a\u7684\u756b\u9762\uff0c\u4e26\u4e14\u8a98\u9a19\u4f7f\u7528\u8005\u9ede\u64ca\u3002"),(0,a.kt)("h2",{id:"cookie-bomb-\u7684\u5be6\u969b\u61c9\u7528"},"Cookie bomb \u7684\u5be6\u969b\u61c9\u7528"),(0,a.kt)("p",null,"\u524d\u9762\u63d0\u904e\u7684 cookie bomb\uff0c\u5728 Web3 \u7684\u4e16\u754c\u4e2d\u4e5f\u6709\u4e86\u65b0\u7684\u610f\u7fa9\u3002"),(0,a.kt)("p",null,"OtterSec \u5728 2023 \u5e74\u767c\u4f48\u7684\u6587\u7ae0\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://osec.io/blog/2023-08-11-web2-bug-repellant-instructions"},"Web2 Bug Repellant Instructions")," \u88e1\u9762\uff0c\u5c31\u6709\u63d0\u5230\u5be6\u969b\u7684\u6848\u4f8b\u3002"),(0,a.kt)("p",null,"\u73fe\u5728\u6709\u8a31\u591a\u7db2\u7ad9\u90fd\u652f\u63f4\u5716\u7247\u4e0a\u50b3\uff0c\u800c\u6709\u4e9b\u7db2\u7ad9\u751a\u81f3\u5141\u8a31 SVG\u3002"),(0,a.kt)("p",null,"\u90a3 SVG \u8ddf\u5176\u4ed6\u5716\u7247\u683c\u5f0f\u5dee\u5728\u54ea\u908a\u5462\uff1f\u5dee\u5225\u5728\u65bc\uff0cSVG \u6a94\u6848\u662f\u53ef\u4ee5\u57f7\u884c script \u7684\uff0c\u50cf\u5e95\u4e0b\u9019\u6a23\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-svg"},'<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg">\n  <script type="text/javascript">\n    alert("Hello");\n  <\/script>\n</svg>\n')),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u4e00\u500b\u7db2\u7ad9\u652f\u63f4 SVG \u4e0a\u50b3\uff0c\u5c31\u6709\u6eff\u9ad8\u7684\u6a5f\u7387\u53ef\u4ee5\u5229\u7528 SVG \u4f86\u9054\u6210 XSS \u6f0f\u6d1e\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u6709\u4e00\u500b\u554f\u984c\uff0c\u90a3\u5c31\u662f\u8a31\u591a\u5716\u7247\u4e0a\u50b3\u7684\u5730\u65b9\u90fd\u6703\u8207\u4e3b\u7db2\u7ad9\u9694\u958b\uff0c\u4f8b\u5982\u8aaa\u76f4\u63a5\u4e0a\u50b3\u5230 S3\uff0c\u800c\u4e14\u6c92\u6709\u7279\u5225\u8a2d\u5b9a\u57df\u540d\u3002\u6240\u4ee5\u5145\u5176\u91cf\u4e5f\u53ea\u662f\u5f97\u5230\u4e86\u4e00\u500b\u5716\u7247\u7db2\u57df\u7684 XSS\uff0c\u4e26\u6c92\u6709\u4ec0\u9ebc\u5f71\u97ff\u529b\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u5c0d\u65bc NFT \u7684\u7db2\u7ad9\u5c31\u4e0d\u540c\u4e86\u3002"),(0,a.kt)("p",null,"\u4ee5 NFT \u7684\u7db2\u7ad9\u4f86\u8aaa\uff0c\u5716\u7247\u662f\u5f88\u91cd\u8981\u7684\u4e00\u74b0\uff0c\u5982\u679c\u6c92\u8fa6\u6cd5\u770b\u5230\u5716\u7247\uff0c\u6574\u500b\u7db2\u7ad9\u7684\u53ef\u7528\u6027\u6703\u53d7\u5230\u6bd4\u8f03\u56b4\u91cd\u7684\u5f71\u97ff\u3002\u56e0\u6b64\u900f\u904e cookie bomb \u4f86\u5c0d\u5716\u7247\u9032\u884c DoS\uff0c\u5c0d\u65bc NFT \u7db2\u7ad9\u4f86\u8aaa\u662f\u6709\u66f4\u5927\u7684\u5f71\u97ff\u529b\u3002"),(0,a.kt)("p",null,"\u540c\u4e00\u500b\u6f0f\u6d1e\uff0c\u5c0d\u65bc\u4e0d\u540c\u985e\u578b\u7684\u7522\u54c1\u4f86\u8aaa\uff0c\u56b4\u91cd\u6027\u8ddf\u5f71\u97ff\u529b\u4e5f\u6703\u4e0d\u540c\u3002"),(0,a.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u540c\u6a23\u662f DoS \u6f0f\u6d1e\uff0c\u90fd\u53ef\u4ee5\u628a\u4e00\u500b\u7db2\u9801\u66ab\u6642\u5f04\u5230\u7576\u6a5f\uff0c\u5c0d\u53bb\u5e74\u8056\u8a95\u7bc0\u7684\u6d3b\u52d5\u7db2\u9801\u4f86\u8aaa\u5c31\u6c92\u4ec0\u9ebc\uff0c\u4f46\u662f\u5c0d\u52a0\u5bc6\u8ca8\u5e63\u4ea4\u6613\u6240\u4f86\u8aaa\u5c31\u6703\u640d\u5931\u6158\u91cd\u3002"),(0,a.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,a.kt)("p",null,"\u5728\u9019\u7bc7\u88e1\u9762\u6211\u5011\u770b\u5230\u4e86 Web3 \u7684\u7522\u54c1\u5176\u5be6\u9084\u662f\u5fc5\u9808\u9762\u5c0d\u50b3\u7d71\u7db2\u9801\u8cc7\u5b89\u6703\u78b0\u5230\u7684\u554f\u984c\uff0c\u800c\u4e14\u5fc5\u9808\u52a0\u4ee5\u9632\u8b77\u3002\u5982\u679c\u6c92\u6709\u9632\u8b77\u597d\uff0c\u5c31\u7b97\u5165\u4fb5\u7684\u4e0d\u662f\u667a\u6167\u5408\u7d04\uff0c\u4e5f\u53ef\u4ee5\u9020\u6210\u4e00\u5b9a\u7684\u640d\u5bb3\u3002"),(0,a.kt)("p",null,"Web3 \u7684\u653b\u64ca\u9762\u4e26\u4e0d\u53ea\u6709\u667a\u6167\u5408\u7d04\uff0c\u50cf\u662f\u50b3\u7d71\u7db2\u9801\u8cc7\u5b89\u3001\u91e3\u9b5a\u653b\u64ca\u6216\u662f\u79c1\u9470\u5b89\u5168\u7b49\u7b49\uff0c\u4e5f\u90fd\u662f\u9700\u8981\u9632\u5099\u7684\u90e8\u5206\u3002"))}b.isMDXComponent=!0},6440:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/30-01-4d88bac101815b874305f822c1adc4f1.png"}}]);