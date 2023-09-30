"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[100],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),h=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=h(i),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return i?n.createElement(m,s(s({ref:t},c),{},{components:i})):n.createElement(m,s({ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var h=2;h<o;h++)s[h]=i[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},7797:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var n=i(7462),a=(i(7294),i(3905));const o={sidebar_position:24},s="Same-site cookie, the savior of CSRF?",r={unversionedId:"ch4/same-site-cookie",id:"ch4/same-site-cookie",title:"Same-site cookie, the savior of CSRF?",description:"When it comes to defending against CSRF, regardless of the method used, both the frontend and backend need to implement a comprehensive mechanism to protect against it. Previously, when discussing XSS, we mentioned CSP, which can block resources that do not comply with the rules. But does the browser provide a similar way to prevent CSRF? Is there something we can add to prevent CSRF?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ch4/24-same-site-cookie.md",sourceDirName:"ch4",slug:"/ch4/same-site-cookie",permalink:"/beyond-xss/en/ch4/same-site-cookie",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"Cross-Site Request Forgery (CSRF) Made Easy",permalink:"/beyond-xss/en/ch4/csrf"},next:{title:"From same-site to main site",permalink:"/beyond-xss/en/ch4/subdomain"}},l={},h=[{value:"Exploring the same-site cookie",id:"exploring-the-same-site-cookie",level:2},{value:"History of Same-site cookie",id:"history-of-same-site-cookie",level:2},{value:"Mid-Break for Reflection",id:"mid-break-for-reflection",level:2},{value:"CSRF with GET Requests",id:"csrf-with-get-requests",level:2},{value:"Hidden Rules of Same-site Cookies",id:"hidden-rules-of-same-site-cookies",level:2},{value:"Is Same-site Cookie Enough to Prevent CSRF?",id:"is-same-site-cookie-enough-to-prevent-csrf",level:2},{value:"Real-world Example",id:"real-world-example",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:h},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"same-site-cookie-the-savior-of-csrf"},"Same-site cookie, the savior of CSRF?"),(0,a.kt)("p",null,"When it comes to defending against CSRF, regardless of the method used, both the frontend and backend need to implement a comprehensive mechanism to protect against it. Previously, when discussing XSS, we mentioned CSP, which can block resources that do not comply with the rules. But does the browser provide a similar way to prevent CSRF? Is there something we can add to prevent CSRF?"),(0,a.kt)("p",null,"Yes, there is something called a same-site cookie. In this post, let's explore what it is and whether using it can give us peace of mind."),(0,a.kt)("h2",{id:"exploring-the-same-site-cookie"},"Exploring the same-site cookie"),(0,a.kt)("p",null,"As the name suggests, a same-site cookie is a cookie that is only sent under same-site conditions. It is used by setting an attribute called ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite"),", which can have three values:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"None"),(0,a.kt)("li",{parentName:"ol"},"Lax"),(0,a.kt)("li",{parentName:"ol"},"Strict")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"None"),' is the most lenient, meaning "I don\'t want the SameSite attribute."'),(0,a.kt)("p",null,"On the other hand, ",(0,a.kt)("inlineCode",{parentName:"p"},"Strict"),' is the strictest. When you add it, it explicitly states that "this cookie can only be sent when the target is same-site."'),(0,a.kt)("p",null,"For example, suppose a cookie is set with ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite=Strict")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.huli.tw"),". In that case, requests sent from ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.huli.tw")," will not include this cookie because these two websites are not same-site."),(0,a.kt)("p",null,"However, if it is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://test.huli.tw"),", the cookie will be included because it is same-site."),(0,a.kt)("p",null,'How strict is it? It\'s so strict that even "clicking on a link counts." If I click on a hyperlink ',(0,a.kt)("inlineCode",{parentName:"p"},'<a href="https://api.huli.tw"></a>')," on ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com"),", it is equivalent to sending a cross-site request from ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.huli.tw"),"."),(0,a.kt)("p",null,"Therefore, in this case, the cookie will not be included."),(0,a.kt)("p",null,"But isn't this inconvenient? Let's take Google as an example. Suppose Google uses a same-site cookie to verify user identity, and there is a hyperlink in my article that leads to a Google search page. When a user clicks on the link, the opened Google page will be in a logged-out state because it doesn't have the token. This results in a poor user experience."),(0,a.kt)("p",null,"There are two solutions to this issue. The first is similar to Amazon's approach, which involves preparing two sets of cookies. The first set maintains the login status, while the second set is used for sensitive operations (such as purchasing items or account settings). The first set does not have the ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite")," attribute, so it will maintain the login status regardless of where the request comes from. However, even if an attacker has the first set of cookies, they cannot do anything because they cannot perform any operations. The second set, on the other hand, completely avoids CSRF by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite")," attribute."),(0,a.kt)("p",null,"However, this approach can be a bit cumbersome. So you can consider the second solution, which is to adjust to another mode of ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Lax"),"."),(0,a.kt)("p",null,'Lax mode relaxes some restrictions. Basically, as long as it is a "top-level navigation," such as ',(0,a.kt)("inlineCode",{parentName:"p"},"<a href>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},'<form method="GET">'),", cookies will still be included. However, if it is a POST method form, the cookie will not be included."),(0,a.kt)("p",null,"This way, you can maintain flexibility, allowing users to maintain their login status when coming from other websites, while also preventing CSRF attacks."),(0,a.kt)("p",null,"If cross-site requests do not include cookies, attackers cannot execute CSRF attacks."),(0,a.kt)("h2",{id:"history-of-same-site-cookie"},"History of Same-site cookie"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/draft-west-first-party-cookies-00"},"first draft specification"),' of the Same-site cookie was published in October 2014. At that time, it was called "First-Party Cookie" instead of the current "Same-site cookie." It was not until January 2016 that the name was changed to Same-site cookie.'),(0,a.kt)("p",null,"Google officially introduced this feature with Chrome 51 in May 2016: ",(0,a.kt)("a",{parentName:"p",href:"https://www.chromestatus.com/feature/4672634709082112"},"SameSite cookie"),". Firefox also added support in Firefox 60, released in May 2018. Safari, with the slowest progress, only fully supported this feature with the release of Safari 15 in September 2021."),(0,a.kt)("p",null,"Due to the increased security and privacy protection provided by the SameSite attribute, in October 2019, Chrome directly released an article titled ",(0,a.kt)("a",{parentName:"p",href:"https://blog.chromium.org/2019/10/developers-get-ready-for-new.html"},"Developers: Get Ready for New SameSite=None; Secure Cookie Settings"),", announcing that starting from February 2020, cookies without the SameSite attribute will default to Lax."),(0,a.kt)("p",null,"And after the outbreak of the pandemic, although we had tested this feature for a while before going live, Chrome still wanted to ensure that all websites were stable and not broken. Therefore, in April 2020, they decided to temporarily rollback this change: ",(0,a.kt)("a",{parentName:"p",href:"https://blog.chromium.org/2020/04/temporarily-rolling-back-samesite.html"},"Temporarily rolling back SameSite Cookie Changes"),"."),(0,a.kt)("p",null,"However, after the pandemic eased slightly in July, this change was gradually redeployed and was fully deployed by August."),(0,a.kt)("p",null,"In addition to Chrome, Firefox also announced in August 2020 that they would follow suit. Cookies without the SameSite attribute would default to Lax. The article at that time was: ",(0,a.kt)("a",{parentName:"p",href:"https://hacks.mozilla.org/2020/08/changes-to-samesite-cookie-behavior/"},"Changes to SameSite Cookie Behavior \u2013 A Call to Action for Web Developers"),"."),(0,a.kt)("p",null,"As for Safari, they announced in March 2020 that they would ",(0,a.kt)("a",{parentName:"p",href:"https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/"},"completely block third-party cookies"),", but the actual behavior seems to be a black box."),(0,a.kt)("h2",{id:"mid-break-for-reflection"},"Mid-Break for Reflection"),(0,a.kt)("p",null,"By now, everyone should be somewhat familiar with the principles and defense methods of CSRF. The same-site cookie introduced in this article seems quite reliable, and browsers even automatically make it the default, allowing you to enjoy the benefits without making any adjustments."),(0,a.kt)("p",null,"With the default ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite=Lax"),", CSRF seems to have exited the stage, officially declared dead, becoming a tear of the times. It's okay not to add a CSRF token because the same-site cookie will automatically handle everything."),(0,a.kt)("p",null,"However, is it really like that?"),(0,a.kt)("p",null,"Is the default ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite=Lax")," really that powerful? Do we still need to add a CSRF token with it? Will there be any issues if we don't add it? What situations can cause problems?"),(0,a.kt)("p",null,"Think about these questions first, and then continue reading."),(0,a.kt)("h2",{id:"csrf-with-get-requests"},"CSRF with GET Requests"),(0,a.kt)("p",null,"In the previous examples, when I introduced CSRF, I always used POST requests. The reason is simple: CSRF focuses on executing actions, and generally, GET requests are not used for executing actions because it does not align with the semantics of the GET method (or, in more professional terms, GET is only suitable for idempotent operations)."),(0,a.kt)("p",null,'However, "not suitable" does not mean "cannot be done".'),(0,a.kt)("p",null,"As I mentioned in the first example when talking about CSRF, some people may take shortcuts and use GET to implement deletion or other functions, like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"/delete?id=3"),"."),(0,a.kt)("p",null,"In this case, SameSite lax cannot provide protection because lax allows the following behavior:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"location = 'https://api.example.com/delete?id=3'\n")),(0,a.kt)("p",null,"Redirecting to pages like this is one of the allowed behaviors. Therefore, even with the default same-site cookie, it still cannot provide protection."),(0,a.kt)("p",null,'In the future, when you see someone writing this kind of "executing actions with GET," besides telling them that it is a bad practice, now you have another reason: "Doing this will have security issues."'),(0,a.kt)("p",null,"However, there should be only a few people who write it this way, right? So, the problem should not be significant?"),(0,a.kt)("p",null,"For this kind of writing, it is indeed rare, but there is another common mechanism we can utilize: method override."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"method")," attribute in HTML forms represents the HTTP method used when the request is sent. It only supports two values: GET and POST."),(0,a.kt)("p",null,"What if we want to use PUT, PATCH, or DELETE? It cannot be done. Either we have to use ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," to send the request or implement a workaround on the backend, which many frameworks support."),(0,a.kt)("p",null,"For some web frameworks, if a request has the ",(0,a.kt)("inlineCode",{parentName:"p"},"X-HTTP-Method-Override")," header or the query string has the ",(0,a.kt)("inlineCode",{parentName:"p"},"_method")," parameter, the value inside will be used as the request method instead of the original HTTP method."),(0,a.kt)("p",null,"This was originally used in the scenario I just mentioned, where you want to update data but can only use POST. You can add a ",(0,a.kt)("inlineCode",{parentName:"p"},"_method")," parameter to let the server know that it is actually a PATCH request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/api/update/1" method="POST">\n  <input type=hidden name=_method value=PATCH>\n  <input name=title value=new_title>\n</form>\n')),(0,a.kt)("p",null,"But it can also be used in our CSRF attack. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/deleteMyAccount?_method=POST")," will be treated as a POST request by the server, not GET."),(0,a.kt)("p",null,"Through this method, the protection of lax can be bypassed, attacking servers that support this method override. As for which web frameworks have this mechanism enabled by default, you can refer to: ",(0,a.kt)("a",{parentName:"p",href:"https://hazanasec.github.io/2023-07-30-Samesite-bypass-method-override.md/"},"Bypassing Samesite Cookie Restrictions with Method Override")),(0,a.kt)("h2",{id:"hidden-rules-of-same-site-cookies"},"Hidden Rules of Same-site Cookies"),(0,a.kt)("p",null,"So, if there is no support for method override and no inappropriate operations using GET, does that mean everything is fine? Of course, it's not that simple."),(0,a.kt)("p",null,"The default same-site cookie actually has a hidden rule, or rather, a lesser-known rule that was mentioned in the previous announcement by Firefox:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For any flows involving POST requests, you should test with and without a long delay. This is because both Firefox and Chrome implement a two-minute threshold that permits newly created cookies without the SameSite attribute to be sent on top-level, cross-site POST requests (a common login flow).")),(0,a.kt)("p",null,'This means that for a cookie without the SameSite attribute, it can bypass some of the lax restrictions within the first two minutes of being written, allowing "top-level cross-site POST requests," in plain terms, ',(0,a.kt)("inlineCode",{parentName:"p"},"<form method=POST>"),"."),(0,a.kt)("p",null,"Therefore, let's assume a user has just logged into a website, and the cookie used for authentication has just been written. At this time, the user opens a webpage created by an attacker, and the content of the webpage is a CSRF exploit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form id=f action="https://api.huli.tw/transfer" method="POST">\n    <input type=hidden name=target value=attacker_account>\n    <input type=hidden name=amount value=1000>\n</form>\n<script>\n  f.submit()\n<\/script>\n')),(0,a.kt)("p",null,"Due to the exception mentioned earlier, the CSRF attack will be successful."),(0,a.kt)("p",null,'This exception was originally added to prevent certain websites from breaking, but at the same time, it also opened a backdoor for attackers. As long as certain conditions are met, the "default lax" restrictions can be ignored.'),(0,a.kt)("p",null,"If a website explicitly specifies ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite=Lax"),", then this issue would not exist. So, does that mean it is truly secure?"),(0,a.kt)("p",null,"I think you know what I'm about to say."),(0,a.kt)("h2",{id:"is-same-site-cookie-enough-to-prevent-csrf"},"Is Same-site Cookie Enough to Prevent CSRF?"),(0,a.kt)("p",null,"Although CSRF stands for cross-site, most of the time it is more like cross-origin. In other words, if an attacker can launch an attack from ",(0,a.kt)("inlineCode",{parentName:"p"},"assets.huli.tw")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"huli.tw"),", we would generally consider it as CSRF, even though these two websites are not cross-site."),(0,a.kt)("p",null,"Same-site cookies only ensure that cookies are not sent in cross-site scenarios. But if two websites are same-site, it doesn't care."),(0,a.kt)("p",null,"Continuing from the previous example, let's say the main website of Facebook is ",(0,a.kt)("inlineCode",{parentName:"p"},"www.facebook.com"),", and it has a testing environment called ",(0,a.kt)("inlineCode",{parentName:"p"},"sandbox.facebook.com"),", where an XSS vulnerability was found."),(0,a.kt)("p",null,"If the website only relies on same-site cookies to prevent CSRF, then it is completely useless in this scenario because ",(0,a.kt)("inlineCode",{parentName:"p"},"www.facebook.com")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sandbox.facebook.com")," are obviously same-site. Therefore, we can easily launch a CSRF attack on the main website using the XSS vulnerability found on the sandbox."),(0,a.kt)("p",null,"But this is clearly a vulnerability that should be defended against because we don't want subdomains to be able to attack other domains."),(0,a.kt)("p",null,"Therefore, relying solely on same-site cookies to defend against CSRF is an insecure choice. The ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-12#name-samesite-cookies"},"RFC for Cookies")," also states:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Developers are strongly encouraged to deploy the usual server-side defenses (CSRF tokens, ensuring that "safe" HTTP methods are idempotent, etc) to mitigate the risk more fully.')),(0,a.kt)("p",null,"It is strongly recommended that developers implement the usual defense measures, such as CSRF tokens, in addition to same-site cookies."),(0,a.kt)("p",null,"So, even with same-site cookies, it doesn't mean that the previous defense measures can be removed. We still need CSRF tokens, combined with same-site cookies, to build a more robust defense wall and prevent various attack scenarios."),(0,a.kt)("h2",{id:"real-world-example"},"Real-world Example"),(0,a.kt)("p",null,"In 2022, jub0bs and abrahack discovered a CSRF vulnerability in the open-source monitoring system Grafana, with the identifier ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/grafana/grafana/security/advisories/GHSA-cmf4-h3xc-jw8w"},"CVE-2022-21703"),"."),(0,a.kt)("p",null,"The root cause is that Grafana only uses ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite=Lax"),' as CSRF protection, so any same-site request can execute a CSRF attack. Interestingly, in 2019, Grafana originally intended to add a CSRF token, but after some changes, they thought "having a same-site cookie seems sufficient" and stopped development. You can find more details in this PR: ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/grafana/grafana/pull/20070"},"WIP: security: csrf protection #20070"),"."),(0,a.kt)("p",null,"However, there is a reason why Grafana thinks this way. The Grafana API only accepts requests with the ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json")," content type, and this content type cannot be sent via a form. You can only use ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),", and this content type falls under non-simple requests, so it requires a preflight."),(0,a.kt)("p",null,"Since there is a preflight, other origin requests should be blocked, so theoretically, there should be no issue."),(0,a.kt)("p",null,"But by carefully reading the CORS specification and a small bug in the server, this limitation was successfully bypassed."),(0,a.kt)("p",null,"A MIME type consists of three parts: type, subtype, and parameters. We often see ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json"),", where the type is application, the subtype is json, and there are no parameters."),(0,a.kt)("p",null,"However, ",(0,a.kt)("inlineCode",{parentName:"p"},"text/plain; charset=utf-8")," has a type of text, a subtype of plain, and the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"charset=utf-8"),"."),(0,a.kt)("p",null,"The CORS specification only requires the type and subtype to be one of the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"application/x-www-form-urlencoded"),(0,a.kt)("li",{parentName:"ol"},"multipart/form-data"),(0,a.kt)("li",{parentName:"ol"},"text/plain")),(0,a.kt)("p",null,"But it does not restrict the content of the parameters."),(0,a.kt)("p",null,"Therefore, this content type can be a simple request: ",(0,a.kt)("inlineCode",{parentName:"p"},"text/plain; application/json"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json")," is the parameter, and ",(0,a.kt)("inlineCode",{parentName:"p"},"text/plain")," is the type + subtype, which fully complies with the specification."),(0,a.kt)("p",null,"The handling logic on the API side is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func bind(ctx *macaron.Context, obj interface{}, ifacePtr ...interface{}) {\n  contentType := ctx.Req.Header.Get("Content-Type")\n  if ctx.Req.Method == "POST" || ctx.Req.Method == "PUT" || len(contentType) > 0 {\n    switch {\n    case strings.Contains(contentType, "form-urlencoded"):\n      ctx.Invoke(Form(obj, ifacePtr...))\n    case strings.Contains(contentType, "multipart/form-data"):\n      ctx.Invoke(MultipartForm(obj, ifacePtr...))\n    case strings.Contains(contentType, "json"):\n      ctx.Invoke(Json(obj, ifacePtr...))\n    // ...\n  } else {\n    ctx.Invoke(Form(obj, ifacePtr...))\n  }\n}\n')),(0,a.kt)("p",null,"Here, ",(0,a.kt)("inlineCode",{parentName:"p"},"strings.contains")," is used directly on the entire content type, so even though the content type we pass in is essentially ",(0,a.kt)("inlineCode",{parentName:"p"},"text/plain"),", it is treated as a valid JSON by the server due to the parameters."),(0,a.kt)("p",null,"After bypassing this limitation, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," to initiate a CSRF attack from a same-site website."),(0,a.kt)("p",null,"Assuming Grafana is hosted at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://grafana.huli.tw"),", we would need to find at least one XSS vulnerability or gain control over the entire ",(0,a.kt)("inlineCode",{parentName:"p"},"*.huli.tw")," domain to launch an attack. Although it may be challenging, it is not impossible."),(0,a.kt)("p",null,"As I mentioned earlier, this is an attack initiated from the same site, so same-site cookies cannot prevent it. Strictly speaking, if we consider the literal meaning, it cannot be called CSRF because it is not cross-site. However, giving it a new name seems odd."),(0,a.kt)("p",null,"You can find the original writeup here: ",(0,a.kt)("a",{parentName:"p",href:"https://jub0bs.com/posts/2022-02-08-cve-2022-21703-writeup/"},"CVE-2022-21703: cross-origin request forgery against Grafana")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article, we introduced the new measures that major browsers have recently implemented, which is setting cookies to ",(0,a.kt)("inlineCode",{parentName:"p"},"SameSite=Lax")," by default. Although this does increase some security, do not think that using this alone can completely prevent CSRF."),(0,a.kt)("p",null,"Just like defending against XSS, defending against CSRF also requires multiple layers of protection to ensure that if one line of defense is breached, there are other defenses to hold up. For example, if only same-site cookies are used, it means surrendering when another same-site website is compromised. Instead, it is better to implement additional protection measures such as CSRF tokens, which can at least mitigate the impact when the same-site is compromised."),(0,a.kt)("p",null,"Speaking of which, is it easy to gain control over other same-site websites? And what can be done once control is obtained? Everyone can think about these questions, and we will discuss them in the next article."),(0,a.kt)("p",null,"References:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.sjoerdlangkemper.nl/2016/04/14/preventing-csrf-with-samesite-cookie-attribute/"},"Preventing CSRF with the same-site cookie attribute")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"http://bobao.360.cn/learning/detail/2844.html"},"\u518d\u89c1\uff0cCSRF\uff1a\u8bb2\u89e3set-cookie\u4e2d\u7684SameSite\u5c5e\u6027")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"http://www.cnblogs.com/ziyunfei/p/5637945.html"},"SameSite Cookie\uff0c\u9632\u6b62 CSRF \u653b\u51fb")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://rlilyyy.github.io/2016/07/10/SameSite-Cookie%E2%80%94%E2%80%94%E9%98%B2%E5%BE%A1-CSRF-XSSI/"},"SameSite\u2014\u2014\u9632\u5fa1 CSRF & XSSI \u65b0\u673a\u5236")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://scotthelme.co.uk/csrf-is-dead/"},"Cross-Site Request Forgery is dead!"))))}u.isMDXComponent=!0}}]);