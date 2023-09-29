"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?a.createElement(m,s(s({ref:t},h),{},{components:n})):a.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:8},s="The Third Line of Defense against XSS: Reducing the Impact Scope",r={unversionedId:"ch2/token-storage",id:"ch2/token-storage",title:"The Third Line of Defense against XSS: Reducing the Impact Scope",description:"In the first line of defense, we processed user input to ensure that it is encoded or sanitized, preventing the insertion of malicious content. The second line of defense is CSP, which prevents the execution of JavaScript and loading of external resources, even if malicious content is inserted.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ch2/08-token-storage.md",sourceDirName:"ch2",slug:"/ch2/token-storage",permalink:"/beyond-xss/en/ch2/token-storage",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"The Second Line of Defense Against XSS: CSP",permalink:"/beyond-xss/en/ch2/xss-defense-csp"},next:{title:"Latest XSS Defense: Trusted Types and Built-in Sanitizer API",permalink:"/beyond-xss/en/ch2/trust-types"}},l={},c=[{value:"Tactic 1: The Most Effective Solution - Multi-Factor Authentication",id:"tactic-1-the-most-effective-solution---multi-factor-authentication",level:2},{value:"Tactic 2: Preventing Token Theft",id:"tactic-2-preventing-token-theft",level:2},{value:"Tactic 3: Limit API Calls",id:"tactic-3-limit-api-calls",level:2},{value:"Tactic 4: Limit Token Scopes",id:"tactic-4-limit-token-scopes",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-third-line-of-defense-against-xss-reducing-the-impact-scope"},"The Third Line of Defense against XSS: Reducing the Impact Scope"),(0,o.kt)("p",null,"In the first line of defense, we processed user input to ensure that it is encoded or sanitized, preventing the insertion of malicious content. The second line of defense is CSP, which prevents the execution of JavaScript and loading of external resources, even if malicious content is inserted. "),(0,o.kt)("p",null,"Now, let's discuss the third line of defense, which assumes that XSS will inevitably occur and formulates protection strategies based on this assumption."),(0,o.kt)("p",null,"Some may wonder why we need to do this. Shouldn't the first two lines of defense be enough to prevent XSS attacks? Why do we need to assume that XSS will occur and develop strategies to mitigate the damage? Isn't this putting the cart before the horse?"),(0,o.kt)("p",null,'Let me give you an example. You have probably seen movies like "Mission: Impossible" where there are scenes involving theft. The place where valuable items are stored is always designed with multiple layers of security measures. There are retina recognition, facial recognition, voiceprint recognition, and even walking posture recognition. After passing these checks, you still need a key to open the vault door. Inside the door, there may be a safe, and you need another set of passwords to open the safe and finally get the item.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7324).Z,width:"1792",height:"1200"})),(0,o.kt)("p",null,'The reason for having multiple layers of security is simple: to increase safety. Although some designs may seem secure, you can never guarantee that they won\'t be breached. Therefore, additional layers of protection are needed to ensure that "only when each layer is breached will there be damage," thus increasing the cost for attackers.'),(0,o.kt)("p",null,"The same principle applies to cybersecurity. Even if we thoroughly check the backend code and ensure that every part is properly validated and encoded, we cannot guarantee that the frontend will never be vulnerable to XSS. New developers may make mistakes and write insecure code, and third-party libraries may have 0-day vulnerabilities or be compromised with malicious code. All of these are risks."),(0,o.kt)("p",null,"That's why we add CSP, which at least ensures that if the first layer is compromised, the second layer can still block the attack, preventing the attacker from loading external resources or sending data out. Of course, the second layer is not foolproof either. In the upcoming chapters, we will see techniques to bypass CSP rules, rendering CSP ineffective."),(0,o.kt)("p",null,'After taking all possible measures to protect against XSS, the third layer is to think in reverse: "If XSS inevitably occurs, what can we do to minimize the damage?" This adds an extra layer of security so that even if XSS does occur, the impact will not be as severe.'),(0,o.kt)("p",null,"First of all, I want to clarify that every company and product should choose appropriate protection measures based on their own cybersecurity needs. To put it more professionally, it depends on their risk appetite. How much risk are they willing to accept?"),(0,o.kt)("p",null,"While adding an extra layer does increase security to some extent, it also adds costs and complexity. Not every product requires such stringent protection. For example, in the case of my blog website, even if it is affected by XSS, the impact is minimal. Therefore, I don't need CSP or to consider how to mitigate the damage caused by XSS."),(0,o.kt)("p",null,"On the other hand, for a cryptocurrency exchange, if the cold wallet is stolen or compromised, the losses could be significant. Therefore, they usually implement a series of risk management measures. For example, the cold wallet itself is stored in a highly encrypted storage device, which is then placed in a fireproof and waterproof safe. This safe is kept in a room with 24-hour surveillance, and access to the room requires fingerprint recognition and a key, among other measures."),(0,o.kt)("p",null,"Knowing the benefits of different layers allows you to immediately identify possible solutions and evaluate their costs and benefits. The more information you have, the better you can determine whether to adopt these solutions."),(0,o.kt)("p",null,"Before discussing the protection measures for the third layer, we need to understand what an attacker can do once they find an XSS vulnerability."),(0,o.kt)("p",null,"When an attacker discovers an XSS vulnerability, they can execute JavaScript code on a page when a user opens it. Therefore, the most common actions are stealing tokens used for authentication or directly calling APIs to perform dangerous operations such as changing passwords or making transfers. They may also steal data, such as personal information or transaction records."),(0,o.kt)("p",null,"To reduce the impact of XSS, we need to find ways to limit what attackers can do."),(0,o.kt)("h2",{id:"tactic-1-the-most-effective-solution---multi-factor-authentication"},"Tactic 1: The Most Effective Solution - Multi-Factor Authentication"),(0,o.kt)("p",null,"Why can attackers access data or perform operations after XSS? It's because the backend of the website considers the request to be legitimate, either from the user themselves or, to be more technical, the request contains a token that can verify the user's identity. The backend trusts this request and executes the operation."),(0,o.kt)("p",null,"Therefore, one of the most effective solutions is to introduce multi-factor authentication. In addition to the token, the server should require other information that only the user knows, thereby reducing the potential harm."),(0,o.kt)("p",null,"For example, when making a transfer in online banking, after entering the amount and recipient's address, there is usually an additional step, such as entering a pre-defined online banking password or receiving an SMS verification code. This is to ensure an extra layer of security. For instance, if a banking website has an XSS vulnerability and an attacker can execute arbitrary code on the banking page, without the additional security step, the attacker could simply call the ",(0,o.kt)("inlineCode",{parentName:"p"},"/transfer")," API and transfer your money."),(0,o.kt)("p",null,"However, with the additional step, one of the parameters for ",(0,o.kt)("inlineCode",{parentName:"p"},"/transfer")," would be the SMS verification code. Since the attacker doesn't know the verification code, they cannot successfully call the API and, therefore, cannot steal your money."),(0,o.kt)("p",null,"You will notice that significant operations usually require an additional step, such as entering the current password to change it or receiving an SMS verification code for transfers. The concept is similar."),(0,o.kt)("p",null,'And in addition to XSS, it also ensures that "even if someone physically accesses your computer, they cannot do anything malicious." This shows a significant improvement in security. Typically, security and user experience are inversely proportional. The higher the security, the worse the experience because there are more things you have to do, and this is unavoidable.'),(0,o.kt)("p",null,"For example, the most secure approach is to require a new SMS for every API call, which is very secure but also provides a poor user experience. Therefore, in practical situations, most operations only require a second verification method for major actions. Other APIs that retrieve data, such as transaction records or user data, do not require additional protection."),(0,o.kt)("h2",{id:"tactic-2-preventing-token-theft"},"Tactic 2: Preventing Token Theft"),(0,o.kt)("p",null,'As mentioned earlier, the most common way is to steal the token after an attack. Here, the term "token" does not refer to any specific technology. It can be a session ID, a JWT token, or an OAuth token. Just consider it as something that can verify identity.'),(0,o.kt)("p",null,"If the token is stolen, the user can use it to send requests to the backend API without being limited to the browser."),(0,o.kt)("p",null,'Some people may think, "Does it matter if the token is stolen?" For example, suppose the token is stored as an HttpOnly cookie, which ensures that JavaScript cannot access the cookie. However, when an attacker uses ',(0,o.kt)("inlineCode",{parentName:"p"},"fetch('/api/me')"),", they can still obtain personal data because the cookie is automatically included in the request."),(0,o.kt)("p",null,"This is correct, but although it may not seem different, attackers can still do many things. However, there are some subtle differences."),(0,o.kt)("p",null,'The first difference is whether they will be "restricted by the website."'),(0,o.kt)("p",null,"If they have the token, they can return it and send requests to the backend from anywhere. But if they don't have it, they can only execute malicious code at the XSS attack point. At this point, there may be some restrictions, such as limitations on payload length or the same-origin policy."),(0,o.kt)("p",null,"For example, let's say there are two websites, ",(0,o.kt)("inlineCode",{parentName:"p"},"a.huli.tw")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"b.huli.tw"),", both using cookies stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"huli.tw")," for authentication."),(0,o.kt)("p",null,"Suppose the attacker successfully finds an XSS vulnerability on ",(0,o.kt)("inlineCode",{parentName:"p"},"a.huli.tw"),", but the user data is on ",(0,o.kt)("inlineCode",{parentName:"p"},"b.huli.tw"),". In this case, they cannot access the user's data on ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," because the same-origin policy blocks the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," request. However, if both services use the same token and store it in ",(0,o.kt)("inlineCode",{parentName:"p"},"localStorage"),", the attacker can use this token to access ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," and successfully retrieve the user's data."),(0,o.kt)("p",null,'The second difference is whether there is a "time limit." If they have the token, they can send requests as the user as long as the token is not expired.'),(0,o.kt)("p",null,"But if they can only use XSS, it means they can only execute attacks when the user has the webpage open. Once the user closes the webpage or the browser, they cannot execute JavaScript code anymore."),(0,o.kt)("p",null,"Therefore, if possible, it is best not to let the attacker get the token, as it limits the attacks that the attacker can launch."),(0,o.kt)("p",null,"With the current frontend mechanisms, the only way to ensure that JavaScript cannot access the token is to use an HttpOnly cookie (excluding browser vulnerabilities and APIs that directly return tokens). There are no other options."),(0,o.kt)("p",null,'However, if your requirement is to "only allow certain JavaScript to access the token," there is another solution. But note that this solution does not persistently store the token. Once the user refreshes the page, the token will be gone.'),(0,o.kt)("p",null,"This solution is simple: store the token in a JavaScript variable and wrap it with a closure to ensure that it cannot be accessed from outside, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const API = (function() {\n  let token\n  return {\n    login(username, password) {\n      fetch('/api/login', {\n        method: 'POST',\n        body: JSON.stringify({ username, password })\n      }).then(res => res.json())\n      .then(data => token = data.token)\n    },\n\n    async getProfile() {\n      return fetch('/api/me', {\n        headers: {\n          'Authorization': 'Bearer ' + token\n        }\n      })\n    }\n  }\n})()\n\n// Using API\nAPI.login()\nAPI.getProfile()\n")),(0,o.kt)("p",null,'In this way, even if the attacker finds an XSS vulnerability, they cannot "directly" access the ',(0,o.kt)("inlineCode",{parentName:"p"},"token"),' variable due to the scope. I marked the word "directly" because once the attacker has XSS, they can do many malicious things, like this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"window.fetch = function(path, options) {\n  console.log(options?.headers?.Authorization)\n}\nAPI.getProfile()\n")),(0,o.kt)("p",null,"By replacing the implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"window.fetch"),", they can intercept the parameters passed to the function and indirectly access the ",(0,o.kt)("inlineCode",{parentName:"p"},"token"),"."),(0,o.kt)("p",null,"Therefore, a more secure method is to prevent XSS from interfering with the execution environment that has the token, achieving context isolation. In web frontend, this can be accomplished using Web Workers. By using Web Workers, a new execution environment can be created to isolate it, as shown in the following diagram:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7941).Z,width:"1742",height:"1220"})),(0,o.kt)("p",null,"The approximate code is as follows (just a conceptual example):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// worker.js\nlet token\nasync function login({ username, password }) {\n  return fetch('/api/login', {\n    method: 'POST',\n    body: JSON.stringify({ username, password })\n  }).then(res => res.json())\n  .then(data => {\n    // Do not return token\n    const { token, ...props } = data\n    token = data.token\n    return props\n  })\n}\n\nasync function getProfile() {\n  return fetch('/api/me', {\n    headers: {\n      'Authorization': 'Bearer ' + token\n    }\n  })\n}\n\nonmessage = async function(e) {\n  const { name, params } = e.data\n  let response\n  if (name === 'login') {\n    response = await login(params)\n    \n  } else if (name === 'getProfile') {\n    response = await getProfile()\n  }\n\n  postMessage({\n    name,\n    response\n  })\n}\n")),(0,o.kt)("p",null,"And in the application code, initialize the worker and call the API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const apiWorker = new Worker(\"worker.js\");\n\nasync function login(params) {\n  return new Promise(resolve => {\n    apiWorker.postMessage({\n      name: 'login',\n      params: {\n        username,\n        password\n      }\n    })\n\n    apiWorker.onmessage = (e) => {\n      const { name, response } = e.data\n      if (name === 'login') {\n        resolve(e.response)\n      }\n    }\n  })\n}\n\nlogin({\n  username: 'test',\n  password: 'test'\n})\n")),(0,o.kt)("p",null,"Actually, the idea is to put all API network requests in a worker. Due to the isolation of the execution environment, unless there is XSS in the worker, the main thread cannot interfere with the worker and cannot access its data. This ensures the security of the token."),(0,o.kt)("p",null,"However, this solution obviously increases development costs because many things need to be adjusted. If you are interested in more details and pros and cons of this solution, you can refer to the technical blog of Mercari, a Japanese second-hand goods trading platform: ",(0,o.kt)("a",{parentName:"p",href:"https://engineering.mercari.com/en/blog/entry/20220930-building-secure-apps-using-web-workers/"},"Building secure web apps using Web Workers")),(0,o.kt)("p",null,"Regarding token storage, if you need to access the token in JavaScript and do not need persistence, this option is probably the best solution. Auth0, a company specializing in identity verification, has also written an article discussing token storage, which you can refer to: ",(0,o.kt)("a",{parentName:"p",href:"https://auth0.com/docs/secure/security-guidance/data-security/token-storage"},"Auth0 docs - Token Storage")),(0,o.kt)("h2",{id:"tactic-3-limit-api-calls"},"Tactic 3: Limit API Calls"),(0,o.kt)("p",null,"As mentioned earlier, even if the token is not stolen, attackers can still call the API and get a response through XSS, which is true when using cookies to store the token."),(0,o.kt)("p",null,"However, if you use the method mentioned above, using Web Workers and variables to store the token, the situation is different. Using this method means that it is useless for attackers to call the API themselves using ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," because there will be no token attached to the request, so the server's authentication will not pass."),(0,o.kt)("p",null,"Just like the example given above, all API requests must go through Web Workers, which is like creating a frontend proxy at the worker level. Therefore, even if XSS can access ",(0,o.kt)("inlineCode",{parentName:"p"},"apiWorker"),", it can only call the APIs implemented by ",(0,o.kt)("inlineCode",{parentName:"p"},"apiWorker")," and cannot call others."),(0,o.kt)("p",null,"For example, suppose the backend API server has implemented a ",(0,o.kt)("inlineCode",{parentName:"p"},"/uploadFile")," function, but this function is for internal use only, so it is not implemented in the worker. In this case, attackers cannot use this function no matter what, adding an extra layer of protection."),(0,o.kt)("h2",{id:"tactic-4-limit-token-scopes"},"Tactic 4: Limit Token Scopes"),(0,o.kt)("p",null,"Similar to when devising defense strategies against XSS, it is important to minimize the damage in case XSS occurs. Therefore, the last measure is to assume that the token will be exploited and consider what else can be done to reduce the damage."),(0,o.kt)("p",null,"The most intuitive approach is to limit the scopes of the token, so that it cannot perform too many actions. Of course, backend access control is a must, but the frontend can also do more."),(0,o.kt)("p",null,"For example, suppose there is a restaurant reservation system, and the backend API is a complete service, whether it is for making reservations or for internal use. They all use the same API server, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"/users/me")," to get one's own data and ",(0,o.kt)("inlineCode",{parentName:"p"},"/internal/users")," to get all user data (with permission checks)."),(0,o.kt)("p",null,"Suppose XSS occurs on the restaurant reservation website, and the target being attacked is an authorized internal employee. In that case, the attacker can call ",(0,o.kt)("inlineCode",{parentName:"p"},"/internal/users")," to get all user data. The ideal solution would be to separate the internal system from the restaurant reservation system at the backend API level, but this may require too much time and cost."),(0,o.kt)("p",null,"In this case, another solution called Backend For Frontend (BFF) can be used. BFF is a backend server specifically for the frontend, and all frontend requests go through BFF, as shown in the diagram:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(235).Z,width:"1029",height:"508"})),(0,o.kt)("p",null,"Therefore, the token obtained by the frontend is only the token used to communicate with BFF, not the token of the backend server behind BFF. In this way, access permissions can be limited on the BFF side, directly blocking all requests to ",(0,o.kt)("inlineCode",{parentName:"p"},"/internal"),", and restricting the permissions of the token obtained by the frontend, ensuring that the APIs used internally cannot be called."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,'"Preventing XSS" is something that must be done, but it is only the first line of defense. If only this is done, the defense is either 0 or 1. Either everything is well defended, or if one aspect is not well defended, it is as if there is no defense at all, and the system is easily breached.'),(0,o.kt)("p",null,"That's why we need a second or even third line of defense to provide deeper security. Even if one aspect forgets to filter user input, there is CSP blocking JavaScript execution. Even if CSP is bypassed, at least the transfer function cannot be executed because a mobile verification code is required."),(0,o.kt)("p",null,"More layers of defense mean higher security, but also higher costs and system complexity. It is important to understand the means of defense, but it does not mean that every product needs all these measures. For most websites, the first two lines of defense may be sufficient."),(0,o.kt)("p",null,'Originally, I didn\'t have a deep understanding of this topic. It was just by chance that someone brought up this topic in the Facebook group "Front-End Developers Taiwan," which gave me a better understanding of it and prompted me to include it in this series of articles.'),(0,o.kt)("p",null,"I would like to express my special thanks to Ho Hong Yip for providing the Auth0 reference materials and to \u8a3c\u5bd3 for sharing multiple links. The technical discussions with them have helped me clarify my thoughts on this issue to some extent (although there may still be room for improvement, so please feel free to leave comments for further discussion)."),(0,o.kt)("p",null,"References:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.facebook.com/groups/f2e.tw/posts/6432399706797340/"},"Facebook Group: Front-End Developers Taiwan Discussion Thread")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://auth0.com/docs/secure/security-guidance/data-security/token-storage"},"auth0 - Token Storage")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://engineering.mercari.com/en/blog/entry/20220930-building-secure-apps-using-web-workers/"},"Building secure web apps using Web Workers")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/73096336/why-is-bff-pattern-deemed-safer-for-spas"},"Why is BFF pattern deemed safer for SPA's?"))))}d.isMDXComponent=!0},7324:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/08-01-395dcb9b5dcb42d72175ac42dfab406f.png"},7941:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/08-02-f54b6db25f6e138ec2e72d28328c1452.png"},235:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/08-03-6bd4d4941b882d788bf15d415bc96d3c.png"}}]);