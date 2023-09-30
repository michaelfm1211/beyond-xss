"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=i,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(k,r(r({ref:n},p),{},{components:t})):a.createElement(k,r({ref:n},p))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(7462),i=(t(7294),t(3905));const o={sidebar_position:7},r="XSS \u7684\u7b2c\u4e8c\u9053\u9632\u7dda\uff1aCSP",l={unversionedId:"ch2/xss-defense-csp",id:"ch2/xss-defense-csp",title:"XSS \u7684\u7b2c\u4e8c\u9053\u9632\u7dda\uff1aCSP",description:"XSS \u7684\u7b2c\u4e00\u9053\u9632\u7dda\u5c31\u662f\u628a\u4f7f\u7528\u8005\u7684\u8f38\u5165\u8655\u7406\u4e7e\u6de8\uff0c\u78ba\u4fdd\u5167\u5bb9\u662f\u6c92\u6709\u554f\u984c\u7684\u3002\u4f46\u8aaa\u8d77\u4f86\u5bb9\u6613\uff0c\u505a\u8d77\u4f86\u96e3\uff0c\u5c24\u5176\u662f\u5c0d\u4e00\u4e9b legacy \u7684\u5c08\u6848\u4f86\u8b1b\uff0c\u7a0b\u5f0f\u78bc\u53c8\u4e82\u53c8\u96dc\u53c8\u591a\uff0c\u8981\u4fee\u54ea\u88e1\u90fd\u4e0d\u77e5\u9053\u3002",source:"@site/docs/ch2/07-xss-defense-csp.md",sourceDirName:"ch2",slug:"/ch2/xss-defense-csp",permalink:"/beyond-xss/ch2/xss-defense-csp",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"XSS \u7684\u7b2c\u4e00\u9053\u9632\u7dda\uff1aSanitization",permalink:"/beyond-xss/ch2/xss-defense-sanitization"},next:{title:"XSS \u7684\u7b2c\u4e09\u9053\u9632\u7dda\uff1a\u964d\u4f4e\u5f71\u97ff\u7bc4\u570d",permalink:"/beyond-xss/ch2/token-storage"}},c={},s=[{value:"\u81ea\u52d5\u9632\u79a6\u6a5f\u5236\uff1aContent Security Policy",id:"\u81ea\u52d5\u9632\u79a6\u6a5f\u5236content-security-policy",level:2},{value:"CSP \u7684\u898f\u5247",id:"csp-\u7684\u898f\u5247",level:2},{value:"script-src \u7684\u898f\u5247",id:"script-src-\u7684\u898f\u5247",level:2},{value:"\u600e\u9ebc\u6c7a\u5b9a CSP \u898f\u5247\u8981\u6709\u54ea\u4e9b\uff1f",id:"\u600e\u9ebc\u6c7a\u5b9a-csp-\u898f\u5247\u8981\u6709\u54ea\u4e9b",level:2},{value:"\u5225\u4eba\u7684 CSP \u662f\u600e\u9ebc\u8a2d\u5b9a\u7684",id:"\u5225\u4eba\u7684-csp-\u662f\u600e\u9ebc\u8a2d\u5b9a\u7684",level:2},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2}],p={toc:s},m="wrapper";function u(e){let{components:n,...o}=e;return(0,i.kt)(m,(0,a.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"xss-\u7684\u7b2c\u4e8c\u9053\u9632\u7ddacsp"},"XSS \u7684\u7b2c\u4e8c\u9053\u9632\u7dda\uff1aCSP"),(0,i.kt)("p",null,"XSS \u7684\u7b2c\u4e00\u9053\u9632\u7dda\u5c31\u662f\u628a\u4f7f\u7528\u8005\u7684\u8f38\u5165\u8655\u7406\u4e7e\u6de8\uff0c\u78ba\u4fdd\u5167\u5bb9\u662f\u6c92\u6709\u554f\u984c\u7684\u3002\u4f46\u8aaa\u8d77\u4f86\u5bb9\u6613\uff0c\u505a\u8d77\u4f86\u96e3\uff0c\u5c24\u5176\u662f\u5c0d\u4e00\u4e9b legacy \u7684\u5c08\u6848\u4f86\u8b1b\uff0c\u7a0b\u5f0f\u78bc\u53c8\u4e82\u53c8\u96dc\u53c8\u591a\uff0c\u8981\u4fee\u54ea\u88e1\u90fd\u4e0d\u77e5\u9053\u3002"),(0,i.kt)("p",null,"\u518d\u8005\uff0c\u5beb\u7a0b\u5f0f\u6642\u4e5f\u53ef\u80fd\u6703\u5931\u8aa4\uff0c\u901a\u5e38\u6703\u767c\u751f\u8cc7\u5b89\u554f\u984c\u6709\u4e09\u7a2e\u539f\u56e0\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f60\u4e0d\u77e5\u9053\u9019\u6a23\u505a\u6703\u51fa\u4e8b"),(0,i.kt)("li",{parentName:"ol"},"\u4f60\u5fd8\u8a18\u9019\u6a23\u505a\u6703\u51fa\u4e8b"),(0,i.kt)("li",{parentName:"ol"},"\u4f60\u77e5\u9053\u9019\u6a23\u505a\u6703\u51fa\u4e8b\uff0c\u4f46\u56e0\u70ba\u5404\u7a2e\u539f\u56e0\u6c7a\u5b9a\u4e0d\u7ba1\u5b83")),(0,i.kt)("p",null,"\u7b2c\u4e00\u7a2e\u5c31\u50cf\u662f\u524d\u9762\u4e00\u518d\u63d0\u5230\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"<a href>")," \u7684\u4f8b\u5b50\uff0c\u4f60\u53ef\u80fd\u4e0d\u77e5\u9053\u9019\u88e1\u9762\u80fd\u653e ",(0,i.kt)("inlineCode",{parentName:"p"},"javascript:")," \u4f86\u57f7\u884c\u7a0b\u5f0f\u78bc\u3002"),(0,i.kt)("p",null,"\u7b2c\u4e8c\u7a2e\u50cf\u662f\u4f60\u77e5\u9053 XSS \u6f0f\u6d1e\uff0c\u4f60\u77e5\u9053\u8f38\u51fa\u61c9\u8a72\u8981\u5148\u505a\u7de8\u78bc\uff0c\u4f46\u4f60\u5fd8\u4e86\u3002"),(0,i.kt)("p",null,"\u7b2c\u4e09\u7a2e\u5247\u662f\u4f60\u64fa\u660e\u77e5\u9053\u9019\u908a\u6c92\u7de8\u78bc\u6703\u6709\u6d1e\uff0c\u800c\u4e14\u61c9\u8a72\u8981\u7de8\u78bc\uff0c\u4f46\u56e0\u70ba\u5c08\u6848\u7684\u6642\u7a0b\u58d3\u529b\u6216\u662f\u8001\u95c6\u7684\u6307\u793a\u6240\u4ee5\u4e0d\u7ba1\u5b83\u3002"),(0,i.kt)("p",null,"\u50cf\u662f\u7b2c\u4e00\u7a2e\u7684\u4f8b\u5b50\uff0c\u4f60\u6839\u672c\u4e0d\u77e5\u9053\u90a3\u908a\u8981\u505a\u8655\u7406\uff0c\u4e0d\u77e5\u9053\u9019\u6a23\u6703\u6709\u6f0f\u6d1e\uff0c\u90a3\u8a72\u600e\u9ebc\u9632\u79a6\uff1f\u9019\u5c31\u662f\u70ba\u4ec0\u9ebc\u6211\u5011\u9700\u8981\u7b2c\u4e8c\u9053\u9632\u7dda\u7684\u7406\u7531\u4e4b\u4e00\u3002"),(0,i.kt)("h2",{id:"\u81ea\u52d5\u9632\u79a6\u6a5f\u5236content-security-policy"},"\u81ea\u52d5\u9632\u79a6\u6a5f\u5236\uff1aContent Security Policy"),(0,i.kt)("p",null,"CSP\uff0c\u5168\u540d\u70ba Content Security Policy\uff0c\u53ef\u4ee5\u7ffb\u4f5c\u300c\u5167\u5bb9\u5b89\u5168\u653f\u7b56\u300d\uff0c\u610f\u601d\u5c31\u662f\u4f60\u53ef\u4ee5\u5e6b\u81ea\u5df1\u7684\u7db2\u9801\u8a02\u7acb\u4e00\u4e9b\u898f\u7bc4\uff0c\u8ddf\u700f\u89bd\u5668\u8aaa\u6211\u7684\u7db2\u9801\u53ea\u5141\u8a31\u7b26\u5408\u9019\u500b\u898f\u5247\u7684\u5167\u5bb9\uff0c\u4e0d\u7b26\u5408\u7684\u90fd\u5e6b\u6211\u64cb\u6389\u3002"),(0,i.kt)("p",null,"\u60f3\u8981\u5e6b\u7db2\u9801\u52a0\u4e0a CSP \u6709\u5169\u7a2e\u65b9\u5f0f\uff0c\u4e00\u7a2e\u662f\u7d93\u7531 HTTP response header ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Security-Policy"),"\uff0c\u53e6\u5916\u4e00\u7a2e\u662f\u7d93\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"<meta>")," \u6a19\u7c64\uff0c\u56e0\u70ba\u5f8c\u8005\u6bd4\u8f03\u5bb9\u6613\u793a\u7bc4\uff0c\u6211\u5011\u5148\u4ee5\u5f8c\u8005\u70ba\u4e3b\uff08\u4f46\u5be6\u969b\u4e0a\u6bd4\u8f03\u5e38\u7528\u7684\u662f\u524d\u8005\uff0c\u56e0\u70ba\u6709\u4e9b\u898f\u5247\u53ea\u80fd\u900f\u904e\u524d\u8005\u4f86\u8a2d\u5b9a\uff09\u3002"),(0,i.kt)("p",null,"\uff08\u5176\u5be6\u9084\u6709\u795e\u79d8\u7684\u7b2c\u4e09\u7a2e\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"<iframe>")," \u7684 csp \u5c6c\u6027\uff0c\u4f46\u90a3\u500b\u53c8\u662f\u5225\u7684\u8b70\u984c\uff0c\u6211\u5011\u4e0d\u6703\u8b1b\u5230\uff09"),(0,i.kt)("p",null,"\u76f4\u63a5\u4f86\u770b\u500b\u7bc4\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n  <meta http-equiv="Content-Security-Policy" content="script-src \'none\'">\n</head>\n<body>\n  <script>alert(1)<\/script>\n  CSP test\n</body>\n</html>\n')),(0,i.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u7db2\u9801\u4e2d\uff0c\u5ba3\u544a\u4e86 CSP \u70ba ",(0,i.kt)("inlineCode",{parentName:"p"},"script-src 'none'"),"\uff0c\u610f\u601d\u5c31\u662f\uff1a\u300c\u9019\u7db2\u9801\u4e0d\u5141\u8a31\u4efb\u4f55 script \u7684\u57f7\u884c\u300d\uff0c\u6240\u4ee5 body \u4e2d\u7684 script \u6700\u5f8c\u4e0d\u6703\u57f7\u884c\uff0c\u5982\u679c\u6253\u958b DevTools \u7684\u8a71\u6703\u770b\u5230\u932f\u8aa4\u8a0a\u606f\uff1a"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Refused to execute inline script because it violates the following Content Security Policy directive: \"script-src 'none'\". Either the 'unsafe-inline' keyword, a hash ('sha256-bhHHL3z2vDgxUt0W3dWQOrprscmda2Y5pLsLg4GF+pI='), or a nonce ('nonce-...') is required to enable inline execution.")),(0,i.kt)("p",null,"\u9019\u5c31\u662f\u70ba\u4ec0\u9ebc\u6211\u628a CSP \u7a31\u4f5c\u662f\u7b2c\u4e8c\u9053\u9632\u7dda\uff0c\u7576\u4f60\u7684\u7b2c\u4e00\u9053\u9632\u7dda\uff08\u8655\u7406\u4f7f\u7528\u8005\u8f38\u5165\uff09\u5931\u6548\u6642\uff0c\u9084\u53ef\u4ee5\u9760\u8457 CSP \u963b\u6b62 script \u6216\u5176\u4ed6\u8cc7\u6e90\u7684\u8f09\u5165\uff0c\u4e00\u6a23\u53ef\u4ee5\u53ca\u6642\u9632\u6b62 XSS \u6f0f\u6d1e\u3002"),(0,i.kt)("h2",{id:"csp-\u7684\u898f\u5247"},"CSP \u7684\u898f\u5247"),(0,i.kt)("p",null,"CSP \u53ef\u4ee5\u5b9a\u7fa9\u7684\u6771\u897f\u5c31\u662f\uff1a\u6307\u793a\uff08directive\uff09\u52a0\u4e0a\u898f\u5247\uff0c\u50cf\u525b\u525b\u5c31\u662f\u6307\u793a ",(0,i.kt)("inlineCode",{parentName:"p"},"script-src")," \u914d\u4e0a\u898f\u5247 ",(0,i.kt)("inlineCode",{parentName:"p"},"'none'"),"\uff0c\u6700\u7d42\u7684\u7d50\u679c\u5c31\u662f\u963b\u6b62\u4efb\u4f55 JavaScript \u7684\u57f7\u884c\u3002"),(0,i.kt)("p",null,"\u5148\u63d0\u9192\u4e00\u9ede\uff0c\u9019\u908a\u7684\u6307\u793a ",(0,i.kt)("inlineCode",{parentName:"p"},"script-src")," \u4e0d\u80fd\u8f15\u6613\u89e3\u8b80\u70ba\u300cscript \u6a19\u7c64\u7684 src\u300d\uff0c\u9019\u88e1\u7684 script \u4ee3\u8868\u7684\u5c31\u662f\u4e00\u822c\u7684\u300c\u8173\u672c\u300d\u7684\u610f\u601d\uff0c\u4e0d\u662f\u5c08\u6307 script \u6a19\u7c64\uff0c\u4e5f\u4e0d\u662f\u5c08\u6307 src \u5c6c\u6027\u3002"),(0,i.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u5047\u8a2d\u9801\u9762\u4e0a\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},'<a href="javascript:alert(1)">click</a>'),"\uff0c\u9019\u4e00\u6bb5 HTML \u6c92\u6709 script \u6a19\u7c64\u4e5f\u6c92\u6709 src\uff0c\u9ede\u4e0b\u53bb\u4e4b\u5f8c\u4f9d\u7136\u6703\u88ab CSP \u963b\u64cb\u4e26\u51fa\u73fe\u932f\u8aa4\u8a0a\u606f\uff0c\u56e0\u70ba ",(0,i.kt)("inlineCode",{parentName:"p"},"script-src 'none'")," \u7684\u610f\u601d\u5c31\u662f\uff1a\u300c\u963b\u6b62\u4efb\u4f55 JavaScript \u7684\u57f7\u884c\u300d\uff0c\u7121\u8ad6\u662f\u7528 script \u6a19\u7c64\u3001event handler \u9084\u662f javascript: \u507d\u5354\u8b70\uff0c\u7d50\u679c\u90fd\u662f\u4e00\u6a23\u7684\u3002"),(0,i.kt)("p",null,"\u90a3\u6307\u793a\u6709\u54ea\u4e9b\u5462\uff1f"),(0,i.kt)("p",null,"\u6700\u91cd\u8981\u7684\u4e00\u500b\u53eb\u505a ",(0,i.kt)("inlineCode",{parentName:"p"},"default-src"),"\uff0c\u5c31\u662f\u9810\u8a2d\u7684\u898f\u5247\uff0c\u4f8b\u5982\u8aaa\u6c92\u6709\u8a2d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"script-src"),"\uff0c\u90a3\u5c31\u6703\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"default-src")," \u7684\u5167\u5bb9\uff0c\u4f46\u8981\u6ce8\u610f\u7684\u662f\u6709\u5e7e\u7a2e\u6307\u793a\u4e0d\u6703 fallback \u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"default-src"),"\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"base-uri")," \u6216\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"form-action")," \u7b49\u7b49\uff0c\u5b8c\u6574\u5217\u8868\u53ef\u4ee5\u770b\u9019\u908a\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://content-security-policy.com/default-src/"},"The default-src Directive")),(0,i.kt)("p",null,"\u5176\u4ed6\u7684\u6307\u793a\u5927\u6982\u6709\u4ee5\u4e0b\u5e7e\u7a2e\uff08\u6211\u6703\u7701\u7565\u4e00\u4e9b\u4e0d\u5e38\u7528\u5230\u7684\uff09\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"script-src"),"\uff1a\u7ba1\u7406 JavaScript"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"style-src"),"\uff1a\u7ba1\u7406 CSS"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"font-src"),"\uff1a\u7ba1\u7406\u5b57\u9ad4"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"img-src"),"\uff1a\u7ba1\u7406\u5716\u7247"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"connect-src"),"\uff1a\u7ba1\u7406\u9023\u7dda\uff08fetch\u3001XMLHttpRequest \u4ee5\u53ca WebSocket \u7b49\u7b49\uff09"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"media-src"),"\uff1a\u7ba1\u7406 video \u8ddf audio \u7b49\u7b49"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"frame-src"),"\uff1a\u7ba1\u7406 frame \u4ee5\u53ca iframe \u7b49\u7b49"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"base-uri"),"\uff1a\u7ba1\u7406 ",(0,i.kt)("inlineCode",{parentName:"li"},"<base>")," \u7684\u4f7f\u7528"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"form-action"),"\uff1a\u7ba1\u7406\u8868\u55ae\u7684 action"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"frame-ancestors"),"\uff1a\u7ba1\u7406\u9801\u9762\u53ef\u4ee5\u88ab\u8ab0\u5d4c\u5165"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"report-uri"),"\uff1a\u5f85\u6703\u518d\u8b1b"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"navigate-to"),"\uff1a\u7ba1\u7406\u9801\u9762\u53ef\u4ee5\u8df3\u8f49\u5230\u7684\u5730\u65b9")),(0,i.kt)("p",null,"\u662f\u4e0d\u662f\u5f88\u591a\u7a2e\uff1f\u800c\u4e14\u9019\u500b\u5217\u8868\u662f\u6703\u8b8a\u5316\u7684\uff0c\u4f8b\u5982\u8aaa\u6700\u5f8c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate-to")," \u5c31\u662f\u6bd4\u8f03\u65b0\u7684\u6771\u897f\uff0c\u76ee\u524d\u7684\u700f\u89bd\u5668\u90fd\u9084\u6c92\u6709\u652f\u63f4\u3002"),(0,i.kt)("p",null,"\u9664\u4e86\u9019\u4e9b\u5176\u5be6\u9084\u6709\u6eff\u591a\u500b\uff0c\u4f46\u6bd4\u8f03\u4e0d\u5e38\u7528\u7684\u6211\u5c31\u6c92\u6709\u7279\u5225\u5beb\u4e86\uff0c\u6709\u8208\u8da3\u7684\u53ef\u4ee5\u5230 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy"},"MDN: Content-Security-Policy")," \u6216\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://content-security-policy.com/"},"Content Security Policy Reference")," \u53bb\u770b\u3002"),(0,i.kt)("p",null,"\u90a3\u9019\u6bcf\u4e00\u500b\u53ef\u4ee5\u642d\u914d\u7684\u898f\u5247\u53c8\u6709\u54ea\u4e9b\u5462\uff1f\u6839\u64da\u6307\u793a\u7684\u4e0d\u540c\uff0c\u4e5f\u6703\u6709\u4e0d\u540c\u7684\u898f\u5247\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u57fa\u672c\u4e0a\u5e38\u898b\u7684\u898f\u5247\u6709\u4ee5\u4e0b\u5e7e\u7a2e\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"*"),"\uff0c\u5141\u8a31\u9664\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"data:")," \u8ddf ",(0,i.kt)("inlineCode",{parentName:"li"},"blob:")," \u9084\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"filesystem:")," \u4ee5\u5916\u6240\u6709\u7684 URL"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"'none'"),"\uff0c\u4ec0\u9ebc\u90fd\u4e0d\u5141\u8a31"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"'self'"),"\uff0c\u53ea\u5141\u8a31 same-origin \u7684\u8cc7\u6e90"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"https:"),"\uff0c\u5141\u8a31\u6240\u6709 HTTPS \u7684\u8cc7\u6e90"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"example.com"),"\uff0c\u5141\u8a31\u7279\u5b9a domain\uff08HTTP \u8ddf HTTPS \u90fd\u53ef\u4ee5\uff09"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"https://example.com"),"\uff0c\u5141\u8a31\u7279\u5b9a origin\uff08\u53ea\u5141\u8a31 HTTPS\uff09")),(0,i.kt)("p",null,"\u4f8b\u5982\u8aaa ",(0,i.kt)("inlineCode",{parentName:"p"},"script-src *")," \u57fa\u672c\u4e0a\u6709\u8a2d\u8ddf\u6c92\u8a2d\u5dee\u4e0d\u591a\uff0c\u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"script-src 'none'")," \u76f4\u63a5\u4e0d\u8b93\u4f60\u57f7\u884c\u4efb\u4f55\u7684 JavaScript\u3002"),(0,i.kt)("p",null,"\u53e6\u5916\uff0c\u6709\u4e9b\u898f\u5247\u662f\u53ef\u4ee5\u758a\u52a0\u7684\uff0c\u4ee5\u5be6\u52d9\u4e0a\u4f86\u8aaa\u5f88\u5e38\u6703\u770b\u898b\u9019\u6a23\u7684\u898f\u5247\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"script-src 'self' cdn.example.com www.google-analytics.com *.facebook.net\n")),(0,i.kt)("p",null,"\u6709\u6642\u5019 script \u6703\u653e\u5728 same-origin\uff0c\u6240\u4ee5\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"self"),"\uff0c\u6709\u4e9b\u6703\u653e\u5728 CDN\uff0c\u6240\u4ee5\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"cdn.example.com"),"\uff0c\u800c\u56e0\u70ba\u6709\u88dd Google Analytics \u8ddf Facebook SDK\uff0c\u6240\u4ee5\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"www.google-analytics.com *.facebook.net"),"\uff0c\u624d\u80fd\u8f09\u5165\u4ed6\u5011\u7684 JavaScript\u3002"),(0,i.kt)("p",null,"\u5b8c\u6574\u7684 CSP \u5c31\u662f\u9019\u4e9b\u6771\u897f\u7684\u7d44\u5408\uff0c\u6307\u793a\u4e4b\u9593\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},";")," \u9694\u958b\uff0c\u50cf\u662f\u9019\u6a23\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"default-src 'none'; script-src 'self' cdn.example.com www.google-analytics.com *.facebook.net; img-src *;\n")),(0,i.kt)("p",null,"\u900f\u904e CSP\uff0c\u6211\u5011\u53ef\u4ee5\u544a\u8a34\u700f\u89bd\u5668\u8aaa\u54ea\u4e9b\u8cc7\u6e90\u5141\u8a31\u8f09\u5165\uff0c\u54ea\u4e9b\u4e0d\u884c\uff0c\u8b93\u653b\u64ca\u8005\u5c31\u7b97\u627e\u5230\u4e86\u6ce8\u5165\u9ede\uff0c\u4e5f\u4e0d\u4e00\u5b9a\u80fd\u57f7\u884c JavaScript\uff0c\u5c31\u4e0d\u662f\u4e00\u500b XSS \u6f0f\u6d1e\u4e86\uff0c\u80fd\u5920\u964d\u4f4e\u5f71\u97ff\u529b\uff08\u4f46\u7576\u7136\u9084\u662f\u8981\u4fee\u5566\uff0c\u53ea\u662f\u98a8\u96aa\u6bd4\u8f03\u5c0f\uff09\u3002"),(0,i.kt)("h2",{id:"script-src-\u7684\u898f\u5247"},"script-src \u7684\u898f\u5247"),(0,i.kt)("p",null,"\u9664\u4e86\u53ef\u4ee5\u898f\u7bc4\u8f09\u5165\u8cc7\u6e90\u7684 URL \u4ee5\u5916\uff0c\u9084\u6709\u5176\u4ed6\u7684\u898f\u5247\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\u8aaa\u8a2d\u7f6e\u4e86 CSP \u4ee5\u5f8c\uff0c\u9810\u8a2d\u662f\u7981\u6b62 inline script \u9084\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"eval")," \u7684\uff0c\u9019\u88e1\u88ab\u5c01\u9396\u7684 inline script \u5305\u62ec\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"<script>")," \u6a19\u7c64\u88e1\u9762\u76f4\u63a5\u653e\u7a0b\u5f0f\u78bc\uff08\u61c9\u8a72\u8981\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"<script src>")," \u5f9e\u5916\u90e8\u5f15\u5165\uff09"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"onclick")," \u9019\u7a2e\u5beb\u5728 HTML \u88e1\u9762\u7684 event handler"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"javascript:")," \u507d\u5354\u8b70")),(0,i.kt)("p",null,"\u8981\u4f7f\u7528 inline script \u7684\u8a71\uff0c\u9700\u8981\u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"'unsafe-inline'")," \u9019\u500b\u898f\u5247\u3002"),(0,i.kt)("p",null,"\u800c\u82e5\u662f\u8981\u50cf ",(0,i.kt)("inlineCode",{parentName:"p"},"eval")," \u90a3\u6a23\uff0c\u628a\u5b57\u4e32\u7576\u6210\u7a0b\u5f0f\u78bc\u4f86\u57f7\u884c\uff0c\u5247\u662f\u8981\u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"'unsafe-eval'")," \u9019\u500b\u898f\u5247\u3002\u6709\u4e9b\u4eba\u53ef\u80fd\u77e5\u9053 ",(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout")," \u5176\u5be6\u4e5f\u53ef\u4ee5\u628a\u5b57\u4e32\u62ff\u4f86\u7576\u7a0b\u5f0f\u78bc\u57f7\u884c\uff0c\u50cf\u9019\u6a23\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"setTimeout('alert(1)')\n")),(0,i.kt)("p",null,"\u9084\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"setInterval")," \u8ddf ",(0,i.kt)("inlineCode",{parentName:"p"},"Function")," \u7b49\u7b49\uff0c\u4e5f\u90fd\u53ef\u4ee5\u505a\u5230\u4e00\u6a23\u7684\u4e8b\u60c5\uff0c\u9019\u4e9b\u90fd\u9700\u8981\u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"'unsafe-eval'")," \u624d\u80fd\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u9664\u4e86\u9019\u4e9b\u4e4b\u5916\uff0c\u9084\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"'nonce-xxx'"),"\uff0c\u610f\u601d\u662f\u5728\u5f8c\u7aef\u7522\u751f\u4e00\u500b\u96a8\u6a5f\u5b57\u4e32\uff0c\u4f8b\u5982\u8aaa ",(0,i.kt)("inlineCode",{parentName:"p"},"a2b5zsa19c")," \u597d\u4e86\uff0c\u90a3\u6709\u5e36\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce=a2b5zsa19c")," \u7684 script \u6a19\u7c64\u5c31\u53ef\u4ee5\u8f09\u5165\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- \u5141\u8a31 --\x3e\n<script nonce=a2b5zsa19c>\n  alert(1)\n<\/script>\n\n\x3c!-- \u4e0d\u5141\u8a31 --\x3e\n<script>\n  alert(1)\n<\/script>\n")),(0,i.kt)("p",null,"\u9084\u6709\u985e\u4f3c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"'sha256-abc...'"),"\uff0c\u610f\u601d\u662f\u5141\u8a31\u7279\u5b9a hash \u7684 inline script\uff0c\u4f8b\u5982\u8aaa ",(0,i.kt)("inlineCode",{parentName:"p"},"alert(1)")," \u62ff\u53bb\u505a sha256 \u4e4b\u5f8c\u6703\u5f97\u5230\u4e00\u500b binary \u7684\u503c\uff0cbase64 \u904e\u5f8c\u6703\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"bhHHL3z2vDgxUt0W3dWQOrprscmda2Y5pLsLg4GF+pI="),"\uff0c\u56e0\u6b64\u5e95\u4e0b\u7bc4\u4f8b\u4e2d\u53ea\u6709\u5167\u5bb9\u525b\u597d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"alert(1)")," \u7684 script \u6703\u8f09\u5165\uff0c\u5176\u4ed6\u90fd\u4e0d\u6703\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n <meta http-equiv="Content-Security-Policy" content="script-src \'sha256-bhHHL3z2vDgxUt0W3dWQOrprscmda2Y5pLsLg4GF+pI=\'">\n</head>\n<body>\n \x3c!-- \u5141\u8a31 --\x3e\n <script>alert(1)<\/script>\n\n \x3c!-- \u4e0d\u5141\u8a31 --\x3e\n <script>alert(2)<\/script>\n\n \x3c!-- \u591a\u4e00\u500b\u7a7a\u683c\u4e5f\u4e0d\u5141\u8a31\uff0c\u56e0\u70ba hash \u503c\u4e0d\u540c --\x3e\n <script>alert(1) <\/script>\n</body>\n</html>\n')),(0,i.kt)("p",null,"\u6700\u5f8c\u9084\u6709\u4e00\u500b\u4e5f\u53ef\u80fd\u6703\u7528\u5230\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"'strict-dynamic'"),"\uff0c\u610f\u601d\u5c31\u662f\uff1a\u300c\u7b26\u5408\u898f\u5247\u7684 script \u53ef\u4ee5\u8f09\u5165\u5176\u4ed6 script \u800c\u4e0d\u53d7 CSP \u9650\u5236\u300d\uff0c\u50cf\u9019\u6a23\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n<head>\n  <meta http-equiv=\"Content-Security-Policy\" content=\"script-src 'nonce-rjg103rj1298e' 'strict-dynamic'\">\n</head>\n<body>\n  <script nonce=rjg103rj1298e>\n    const element = document.createElement('script')\n    element.src = 'https://example.com'\n    document.body.appendChild(element)\n  <\/script>\n</body>\n</html>\n")),(0,i.kt)("p",null,"\u5728\u6211\u5011\u8a2d\u7f6e\u7684 CSP \u4e2d\uff0c\u53ea\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce-rjg103rj1298e")," \u662f\u5141\u8a31\u7684 script\uff0c\u4e26\u6c92\u6709\u5141\u8a31\u5176\u4ed6\u4f86\u6e90\uff0c\u4f46\u662f\u5f9e ",(0,i.kt)("inlineCode",{parentName:"p"},"<script nonce=rjg103rj1298e>")," \u88e1\u9762\u65b0\u589e\u7684 script \u4e0d\u53d7\u9650\u5236\uff0c\u53ef\u4ee5\u52d5\u614b\u65b0\u589e\u5176\u4ed6\u4f86\u6e90\u7684 script\uff0c\u9019\u5c31\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"'strict-dynamic'")," \u7684\u529f\u7528\u3002"),(0,i.kt)("h2",{id:"\u600e\u9ebc\u6c7a\u5b9a-csp-\u898f\u5247\u8981\u6709\u54ea\u4e9b"},"\u600e\u9ebc\u6c7a\u5b9a CSP \u898f\u5247\u8981\u6709\u54ea\u4e9b\uff1f"),(0,i.kt)("p",null,"\u5728\u8a2d\u7f6e CSP \u7684\u6642\u5019\uff0c\u901a\u5e38\u90fd\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"default-src 'self'")," \u8d77\u624b\uff0c\u9810\u8a2d same-origin \u7684\u8cc7\u6e90\u90fd\u662f\u53ef\u4ee5\u8f09\u5165\u7684\u3002"),(0,i.kt)("p",null,"\u63a5\u8457\u5148\u4f86\u8655\u7406\u6700\u91cd\u8981\u7684 script\uff0c\u901a\u5e38\u6700\u512a\u5148\u7684\u4e8b\u9805\u662f\u6700\u597d\u4e0d\u8981\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"'unsafe-inline'")," \u8ddf ",(0,i.kt)("inlineCode",{parentName:"p"},"'unsafe-eval'"),"\uff0c\u56e0\u70ba\u6709\u4e86\u9019\u5169\u500b\u4ee5\u5f8c\uff0c\u6709\u8a2d\u8ddf\u6c92\u8a2d\u7684\u5dee\u5225\u5c31\u4e0d\u5927\u4e86\u3002"),(0,i.kt)("p",null,"\u6211\u5011\u52a0\u4e0a CSP \u7684\u521d\u8877\u662f\u4ec0\u9ebc\uff1f\u60f3\u8981\u7576\u6210 XSS \u7684\u7b2c\u4e8c\u9053\u9632\u7dda\uff0c\u4f46\u5982\u679c\u52a0\u4e0a\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe-inline"),"\uff0c\u5c31\u89aa\u624b\u74e6\u89e3\u4e86\u9019\u9053\u9632\u7dda\uff0c\u53ea\u8981\u96a8\u4fbf\u63d2\u5165\u4e00\u500b ",(0,i.kt)("inlineCode",{parentName:"p"},"<svg onload=alert(1)>")," \u5c31\u53ef\u4ee5\u57f7\u884c\u7a0b\u5f0f\u78bc\u3002"),(0,i.kt)("p",null,"\u4e0d\u904e\u73fe\u5be6\u751f\u6d3b\u6c92\u6709\u9019\u9ebc\u7f8e\u597d\uff0c\u901a\u5e38\u90fd\u6703\u6709\u4e00\u4e9b\u4ee5\u524d\u7684 inline script\uff0c\u8b93\u6211\u5011\u4e0d\u5f97\u4e0d\u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe-inline"),"\uff0c\u9019\u908a\u6559\u5927\u5bb6\u4e00\u500b\u5e38\u898b\u7684\u8655\u7406\u65b9\u5f0f\u3002\u4f8b\u5982\u8aaa Google Analytics \u597d\u4e86\uff0c\u6703\u8981\u4f60\u5728\u7db2\u9801\u4e0a\u52a0\u5165\u5e95\u4e0b\u7684\u7a0b\u5f0f\u78bc\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXX-X\"><\/script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-XXXXXXXX-X');\n<\/script>\n")),(0,i.kt)("p",null,"\u9019\u5c31\u662f\u6211\u5011\u6700\u60f3\u907f\u514d\u7684 inline script\uff0c\u90a3\u8a72\u600e\u9ebc\u505a\u5462\uff1f\u5728 Google \u6240\u63d0\u4f9b\u7684\u5b98\u65b9\u6587\u4ef6\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-platform/tag-manager/csp?hl=zh-tw"},"\u4f7f\u7528\u4ee3\u78bc\u7ba1\u7406\u5de5\u5177\u642d\u914d\u5167\u5bb9\u5b89\u5168\u653f\u7b56"),"\u4e2d\u5c31\u6709\u63d0\u53ca\uff0c\u6211\u5011\u525b\u525b\u5176\u5be6\u4e5f\u6709\u8b1b\u5230\uff0c\u5169\u7a2e\u89e3\u6cd5\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5e6b\u90a3\u4e00\u6bb5 script \u52a0\u4e0a nonce"),(0,i.kt)("li",{parentName:"ol"},"\u7b97\u51fa\u90a3\u6bb5 script \u7684 hash \u4e26\u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"li"},"sha256-xxx")," \u7684\u898f\u5247")),(0,i.kt)("p",null,"\u9019\u5169\u7a2e\u89e3\u6cd5\u90fd\u53ef\u4ee5\u57f7\u884c\u7279\u5b9a\u7684 inline script\uff0c\u800c\u4e0d\u662f\u4f9d\u9760\u6b0a\u9650\u5168\u958b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"'unsafe-inline'"),"\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u5b98\u65b9\u6587\u4ef6\u4e5f\u6709\u63d0\u9192\u5982\u679c\u8981\u4f7f\u7528\u300c\u81ea\u8a02 JavaScript \u8b8a\u6578\u300d\u7684\u529f\u80fd\uff0c\u5fc5\u9808\u8981\u6253\u958b ",(0,i.kt)("inlineCode",{parentName:"p"},"'unsafe-eval'")," \u624d\u6709\u7528\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u78ba\u5b9a\u4f60\u8a2d\u7f6e\u7684 CSP \u662f\u5426\u5b89\u5168\uff0c\u53ef\u4ee5\u5230\u9019\u4e00\u500b Google \u63d0\u4f9b\u7684\u7db2\u7ad9\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://csp-evaluator.withgoogle.com/"},"CSP Evaluator"),"\uff0c\u5b83\u6703\u5075\u6e2c\u4f60\u7684 CSP \u662f\u5426\u6709\u932f\u8aa4\uff0c\u4ee5\u53ca\u662f\u4e0d\u662f\u5b89\u5168\uff0c\u5982\u4e0b\u5716\u6240\u793a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(1804).Z,width:"1620",height:"1296"})),(0,i.kt)("p",null,"\u96d6\u7136\u524d\u9762\u6709\u63d0\u5230\u6c92\u8a2d\u597d\u7684 CSP \u8ddf\u6c92\u8a2d\u5dee\u4e0d\u591a\uff0c\u4f46\u7576\u7136\u9084\u662f\u6709\u8a2d\u5b9a\u6703\u6bd4\u8f03\u597d\uff0c\u7562\u7adf\u8de8\u51fa\u4e86\u7b2c\u4e00\u6b65\u561b\uff0c\u6709\u5f88\u591a\u516c\u53f8\u4ee5\u524d\u53ef\u80fd\u9023\u6709 CSP \u9019\u7a2e\u6771\u897f\u90fd\u4e0d\u77e5\u9053\uff0c\u6709\u52a0\u4e86\u5c31\u503c\u5f97\u9f13\u52f5\uff0c\u4e4b\u5f8c\u518d\u6162\u6162\u6539\u9032\u5c31\u597d\u3002"),(0,i.kt)("p",null,"\u6587\u7ae0\u524d\u534a\u6bb5\u6709\u63d0\u5230\u4e00\u500b\u300creport-uri\u300d\u7684\u6307\u793a\uff0c\u9019\u662f\u500b\u975e\u5e38\u8cbc\u5fc3\u7684\u529f\u80fd\u3002CSP \u5982\u679c\u6c92\u8a2d\u597d\u7684\u8a71\uff0c\u5f88\u6709\u53ef\u80fd\u6703\u963b\u64cb\u6b63\u5e38\u7684\u8cc7\u6e90\uff0c\u5c0e\u81f4\u7db2\u7ad9\u7121\u6cd5\u6b63\u5e38\u4f7f\u7528\u6216\u662f\u90e8\u5206\u529f\u80fd\u58de\u6389\uff0c\u9019\u5c31\u5f97\u4e0d\u511f\u5931\u4e86\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u6709\u53e6\u4e00\u500b\u53eb\u505a ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Security-Policy-Report-Only")," \u7684 header\uff0c\u610f\u601d\u5c31\u662f\u4f60\u53ef\u4ee5\u8a2d\u5b9a CSP\uff0c\u4f46\u662f\u4e0d\u6703\u771f\u7684\u963b\u64cb\uff0c\u53ea\u6703\u5728\u8f09\u5165\u9055\u53cd\u898f\u5247\u7684\u8cc7\u6e90\u6642\u9001\u4e00\u500b\u5831\u544a\u5230\u6307\u5b9a\u7684 URL\u3002"),(0,i.kt)("p",null,"\u900f\u904e\u9019\u500b\u529f\u80fd\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u5148\u89c0\u5bdf\u6709\u54ea\u4e9b\u9055\u53cd CSP \u7684\u72c0\u6cc1\u767c\u751f\uff0c\u5f9e\u9019\u4e9b log \u4e2d\u770b\u770b\u6709\u6c92\u6709\u6c92\u8a2d\u5b9a\u597d\u7684 CSP\uff0c\u78ba\u8a8d\u90fd\u6c92\u554f\u984c\u4e4b\u5f8c\u624d\u6539\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Security-Policy"),"\u3002"),(0,i.kt)("h2",{id:"\u5225\u4eba\u7684-csp-\u662f\u600e\u9ebc\u8a2d\u5b9a\u7684"},"\u5225\u4eba\u7684 CSP \u662f\u600e\u9ebc\u8a2d\u5b9a\u7684"),(0,i.kt)("p",null,"\u4f60\u6709\u770b\u904e\u4ec0\u9ebc\u662f\u4e00\u5927\u4e32 CSP \u55ce\uff1f"),(0,i.kt)("p",null,"\u4f86\u770b\u4e00\u4e0b GitHub \u9996\u9801\u7684 CSP\uff0c\u8b93\u5927\u5bb6\u9ad4\u6703\u4ec0\u9ebc\u662f\u4e00\u5927\u4e32\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"default-src\n  'none';\nbase-uri\n  'self'; \nchild-src\n  github.com/assets-cdn/worker/\n  gist.github.com/assets-cdn/worker/;\nconnect-src\n  'self'\n  uploads.github.com\n  objects-origin.githubusercontent.com\n  www.githubstatus.com\n  collector.github.com\n  raw.githubusercontent.com\n  api.github.com\n  github-cloud.s3.amazonaws.com\n  github-production-repository-file-5c1aeb.s3.amazonaws.com\n  github-production-upload-manifest-file-7fdce7.s3.amazonaws.com\n  github-production-user-asset-6210df.s3.amazonaws.com\n  cdn.optimizely.com\n  logx.optimizely.com/v1/events\n  *.actions.githubusercontent.com\n  productionresultssa0.blob.core.windows.net/\n  productionresultssa1.blob.core.windows.net/\n  productionresultssa2.blob.core.windows.net/\n  productionresultssa3.blob.core.windows.net/\n  productionresultssa4.blob.core.windows.net/\n  wss://*.actions.githubusercontent.com\n  github-production-repository-image-32fea6.s3.amazonaws.com\n  github-production-release-asset-2e65be.s3.amazonaws.com\n  insights.github.com\n  wss://alive.github.com github.githubassets.com; \nfont-src\n  github.githubassets.com;\nform-action\n  'self'\n  github.com\n  gist.github.com\n  objects-origin.githubusercontent.com;\nframe-ancestors\n  'none';\nframe-src\n  viewscreen.githubusercontent.com\n  notebooks.githubusercontent.com;\nimg-src\n  'self'\n  data:\n  github.githubassets.com\n  media.githubusercontent.com\n  camo.githubusercontent.com\n  identicons.github.com\n  avatars.githubusercontent.com\n  github-cloud.s3.amazonaws.com\n  objects.githubusercontent.com\n  objects-origin.githubusercontent.com\n  secured-user-images.githubusercontent.com/\n  user-images.githubusercontent.com/\n  private-user-images.githubusercontent.com\n  opengraph.githubassets.com\n  github-production-user-asset-6210df.s3.amazonaws.com\n  customer-stories-feed.github.com\n  spotlights-feed.github.com\n  *.githubusercontent.com;\nmanifest-src\n  'self';\nmedia-src\n  github.com\n  user-images.githubusercontent.com/\n  secured-user-images.githubusercontent.com/\n  private-user-images.githubusercontent.com\n  github.githubassets.com;\nscript-src\n  github.githubassets.com;\nstyle-src\n  'unsafe-inline'\n  github.githubassets.com;\nupgrade-insecure-requests;\nworker-src\n  github.com/assets-cdn/worker/\n  gist.github.com/assets-cdn/worker/\n")),(0,i.kt)("p",null,"\u57fa\u672c\u4e0a\u5404\u7a2e\u80fd\u8a2d\u5b9a\u7684\u90fd\u8a2d\u5b9a\u4e86\uff0c\u800c\u6211\u5011\u6700\u95dc\u6ce8\u7684 script\uff0c\u53ea\u8a2d\u5b9a\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"github.githubassets.com;"),"\uff0c\u662f\u6eff\u5b89\u5168\u7684\u8a2d\u5b9a\u65b9\u5f0f\u3002"),(0,i.kt)("p",null,"\u800c\u4e14 GitHub \u7684\u8cde\u91d1\u8a08\u756b\u4e2d\u6709\u4e00\u500b\u7279\u6b8a\u7684\u985e\u5225\u53eb\u505a ",(0,i.kt)("a",{parentName:"p",href:"https://bounty.github.com/targets/csp.html"},"GitHub CSP"),"\uff0c\u53ea\u8981\u4f60\u53ef\u4ee5\u7e5e\u904e CSP \u4e26\u4e14\u57f7\u884c\u7a0b\u5f0f\u78bc\uff0c\u5c31\u7b97\u4f60\u6c92\u6709\u627e\u5230\u53ef\u4ee5\u6ce8\u5165 HTML \u7684\u5730\u65b9\u4e5f\u7b97\u6578\u3002"),(0,i.kt)("p",null,"\u63a5\u8457\u770b\u4e00\u4e0b Facebook\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"default-src\n  *\n  data:\n  blob:\n  'self'\n  'wasm-unsafe-eval'\nscript-src\n  *.facebook.com\n  *.fbcdn.net\n  *.facebook.net\n  *.google-analytics.com\n  *.google.com\n  127.0.0.1:*\n  'unsafe-inline'\n  blob:\n  data:\n  'self'\n  'wasm-unsafe-eval'\nstyle-src\n  data:\n  blob:\n  'unsafe-inline'\n  *\nconnect-src\n  secure.facebook.com\n  dashi.facebook.com\n  dashi-pc.facebook.com\n  graph-video.facebook.com\n  streaming-graph.facebook.com\n  z-m-graph.facebook.com\n  z-p3-graph.facebook.com\n  z-p4-graph.facebook.com\n  rupload.facebook.com\n  upload.facebook.com\n  vupload-edge.facebook.com\n  vupload2.facebook.com\n  z-p3-upload.facebook.com\n  z-upload.facebook.com\n  graph.facebook.com\n  'self'\n  *.fbcdn.net\n  wss://*.fbcdn.net\n  attachment.fbsbx.com\n  blob:\n  data:\n  *.cdninstagram.com\n  *.up.facebook.com\n  wss://edge-chat-latest.facebook.com\n  wss://edge-chat.facebook.com\n  edge-chat.facebook.com\n  edge-chat-latest.facebook.com\n  wss://gateway.facebook.com\n  *.facebook.com/rsrc.php/\n  https://api.mapbox.com\n  https://*.tiles.mapbox.com\nblock-all-mixed-content\nupgrade-insecure-requests;\n")),(0,i.kt)("p",null,"\u96d6\u7136\u4e5f\u662f\u4e00\u5927\u4e32\uff0c\u4f46\u53ef\u4ee5\u6ce8\u610f\u5230 script \u6709\u958b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"'unsafe-inline'"),"\uff0c\u662f\u6bd4\u8f03\u4e0d\u5b89\u5168\u7684\u505a\u6cd5\uff0c\u5982\u679c\u628a\u9019\u4e32 CSP \u8cbc\u5230\u524d\u9762\u8b1b\u7684 CSP Evaluator\uff0c\u4e5f\u662f\u8df3\u4e00\u5806\u7d05\u5b57\u51fa\u4f86\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(4245).Z,width:"1618",height:"1482"})),(0,i.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,i.kt)("p",null,"\u6211\u81ea\u5df1\u5176\u5be6\u6eff\u63a8\u85a6\u5927\u5bb6\u8a2d\u5b9a CSP \u7684\uff0c\u53ea\u8981\u8a2d\u5b9a\u4e86\u4ee5\u5f8c\uff0c\u5c31\u591a\u4e86\u4e00\u9053\u9632\u7dda\uff0c\u9019\u6a23\u5728\u554f\u984c\u767c\u751f\u6642\u81f3\u5c11\u9084\u6709\u6a5f\u6703\u633d\u6551\uff0c\u900f\u904e CSP \u963b\u64cb\u653b\u64ca\u8005\u7684 XSS payload\uff0c\u8b93\u640d\u5bb3\u964d\u5230\u6700\u4f4e\u3002"),(0,i.kt)("p",null,"\u800c\u4e14\u9580\u6abb\u4e0d\u9ad8\uff0c\u53ef\u4ee5\u5148\u5f9e report only \u958b\u59cb\uff0c\u908a\u89c0\u5bdf\u908a\u8abf\u6574\u7db2\u7ad9\u7684 CSP \u898f\u5247\uff0c\u78ba\u5b9a\u4e0d\u6703\u5f71\u97ff\u5230\u4e00\u822c\u4f7f\u7528\u8005\u4ee5\u5f8c\u518d\u6b63\u5f0f\u4e0a\u7dda\u3002"),(0,i.kt)("p",null,"\u6700\u5f8c\u4e00\u6a23\u4f86\u500b\u5c0f\u6e2c\u9a57\uff0c\u5728\u4e4b\u5f8c\u7684\u6587\u7ae0\u6703\u89e3\u7b54\u3002"),(0,i.kt)("p",null,"\u5c0f\u660e\u770b\u5b8c\u9019\u7bc7\u4e4b\u5f8c\u56de\u982d\u770b\u4e86\u4e00\u4e0b\u81ea\u5df1\u7684\u5c08\u6848\uff0c\u767c\u73fe JavaScript \u7684\u6a94\u6848\u90fd\u4f86\u81ea\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"https://unpkg.com")," \u4e0a\u7684\u5957\u4ef6\uff0c\u56e0\u6b64\u52a0\u4e0a\u4e86\u5982\u4e0b\u7684 CSP\uff0c\u8acb\u554f ",(0,i.kt)("inlineCode",{parentName:"p"},"script-src")," \u7684\u90e8\u5206\u6709\u4ec0\u9ebc\u554f\u984c\uff1f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Content-Security-Policy: script-src https://unpkg.com;\n")))}u.isMDXComponent=!0},1804:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/07-01-6035cb6d2134c891bf72b92ea09093b7.png"},4245:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/07-02-1857ab161ed3a5dbe854f4574ab9f763.png"}}]);