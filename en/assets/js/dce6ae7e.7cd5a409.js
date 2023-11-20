"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:16},r="Template Injection in Frontend: CSTI",s={unversionedId:"ch3/csti",id:"ch3/csti",title:"Template Injection in Frontend: CSTI",description:"CSTI, short for Client Side Template Injection, refers to template injection in the frontend. Since there is a frontend version, there is also a corresponding backend version called SSTI, which stands for Server Side Template Injection.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ch3/16-csti.md",sourceDirName:"ch3",slug:"/ch3/csti",permalink:"/beyond-xss/en/ch3/csti",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Can HTML affect JavaScript? Introduction to DOM clobbering",permalink:"/beyond-xss/en/ch3/dom-clobbering"},next:{title:"CSS Injection: Attacking with Just CSS (Part 1)",permalink:"/beyond-xss/en/ch3/css-injection"}},l={},c=[{value:"Server Side Template Injection",id:"server-side-template-injection",level:2},{value:"Real-world Examples of SSTI",id:"real-world-examples-of-ssti",level:2},{value:"Client Side Template Injection",id:"client-side-template-injection",level:2},{value:"Practical Case of CSTI",id:"practical-case-of-csti",level:2},{value:"AngularJS and CSP Bypass",id:"angularjs-and-csp-bypass",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"template-injection-in-frontend-csti"},"Template Injection in Frontend: CSTI"),(0,i.kt)("p",null,"CSTI, short for Client Side Template Injection, refers to template injection in the frontend. Since there is a frontend version, there is also a corresponding backend version called SSTI, which stands for Server Side Template Injection."),(0,i.kt)("p",null,"Before introducing the frontend version, let's take a look at the backend version."),(0,i.kt)("h2",{id:"server-side-template-injection"},"Server Side Template Injection"),(0,i.kt)("p",null,"When writing backend code that needs to output HTML, you can choose to directly output it like in pure PHP:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n  echo '<h1>hello</h1>';\n?>\n")),(0,i.kt)("p",null,"However, when there are dynamic parts in the HTML, the code becomes more and more complex. Therefore, in real development, a thing called a template engine is usually used, which we briefly mentioned when talking about sanitization."),(0,i.kt)("p",null,"For example, on my blog's article page, there is a part of the template like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<article class="article content gallery" itemscope itemprop="blogPost">\n    <h1 class="article-title is-size-3 is-size-4-mobile" itemprop="name">\n        <%= post.title %>\n    </h1>\n    <div class="article-meta columns is-variable is-1 is-multiline is-mobile is-size-7-mobile">\n        <span class="column is-narrow">\n            <time datetime="<%= date_xml(post.date) %>" itemprop="datePublished"><%= format_date_full(post.date) %></time>\n        </span>\n        <% if (post.categories && post.categories.length){ %>\n        <span class="column is-narrow article-category">\n            <i class="far fa-folder"></i>\n            <%- (post._categories || post.categories).map(category =>\n                    `<a class="article-category-link" href="${url_for(category.path)}">${category.name}</a>`)\n                    .join(\'<span>></span>\') %>\n        </span>\n        <% } %>\n    </div>\n    \n    <div class="article-entry is-size-6-mobile" itemprop="articleBody">\n        <%- post.content %>\n    </div>\n</article>\n')),(0,i.kt)("p",null,"When rendering, I just need to pass in the ",(0,i.kt)("inlineCode",{parentName:"p"},"post")," object and combine it with the template to render a complete article page."),(0,i.kt)("p",null,'Template injection does not mean "attackers can manipulate data like ',(0,i.kt)("inlineCode",{parentName:"p"},"post"),'," but rather "attackers can manipulate the template itself."'),(0,i.kt)("p",null,"For example, let's say there is a marketing email service. Usually, companies import user data into it and set their own templates, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'Hi, {{name}}\n\nDo you find our product fits for your needs?\nIf not, feel free to schedule a brief 10-minute online meeting with me at your convenience.\n\nYou can make a reservation <a href="{{link}}?q={{email}}">here</a>\n\nHuli\n')),(0,i.kt)("p",null,"When the template is directly used by the backend, using Python with Jinja2 as an example, it would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from jinja2 import Template\n\ndata = {\n    "name": "Peter",\n    "link": "https://example.com",\n    "email": "test@example.com"\n}\n\ntemplate_str = """\nHi, {{name}}\n\nDo you find our product fits for your needs?\nIf not, feel free to schedule a brief 10-minute online meeting with me at your convenience.\n\nYou can make a reservation <a href="{{link}}?q={{email}}">here</a>\n\nHuli\n"""\ntemplate = Template(template_str)\nrendered_template = template.render(\n    name=data[\'name\'],\n    link=data[\'link\'],\n    email=data[\'email\'])\nprint(rendered_template)\n')),(0,i.kt)("p",null,"The final output is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'Hi, Peter\n\nDo you find our product fits for your needs?\nIf not, feel free to schedule a brief 10-minute online meeting with me at your convenience.\n\nYou can make a reservation <a href="https://example.com?q=test@example.com">here</a>\n\nHuli\n')),(0,i.kt)("p",null,"It looks fine, but what if we modify the template? Like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from jinja2 import Template\n\ndata = {\n    "name": "Peter",\n    "link": "https://example.com",\n    "email": "test@example.com"\n}\n\ntemplate_str = """\nOutput: {{ \n    self.__init__.__globals__.__builtins__\n    .__import__(\'os\').popen(\'uname\').read()\n}}\n"""\ntemplate = Template(template_str)\nrendered_template = template.render(\n    name=data[\'name\'],\n    link=data[\'link\'],\n    email=data[\'email\'])\nprint(rendered_template)\n')),(0,i.kt)("p",null,"The output will become: ",(0,i.kt)("inlineCode",{parentName:"p"},"Output: Darwin"),", and Darwin is the result of executing the ",(0,i.kt)("inlineCode",{parentName:"p"},"uname")," command."),(0,i.kt)("p",null,"In simple terms, you can think of the contents inside ",(0,i.kt)("inlineCode",{parentName:"p"},"{{}}")," as the code that the template engine will execute for you."),(0,i.kt)("p",null,"Although we used to only write simple ",(0,i.kt)("inlineCode",{parentName:"p"},"{{name}}"),", we can actually do more operations, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ name + email }}"),". In the case above, it starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," and uses Python magic to read ",(0,i.kt)("inlineCode",{parentName:"p"},"__import__"),", allowing the importing of other modules and achieving command execution."),(0,i.kt)("p",null,"Vulnerabilities that allow attackers to control the template are called template injection. When it occurs on the backend, it is called SSTI, and when it occurs on the frontend, it is called CSTI."),(0,i.kt)("p",null,"The defense method is simple: do not treat user input as part of the template. If you must do so, make sure to check if the template engine provides a sandbox feature that allows you to execute untrusted code in a secure environment."),(0,i.kt)("h2",{id:"real-world-examples-of-ssti"},"Real-world Examples of SSTI"),(0,i.kt)("p",null,"The first example is a vulnerability discovered by Orange in Uber in 2016. One day, Orange suddenly noticed a ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," in an email sent by Uber and remembered that they had entered ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ 1+1 }}")," in the name field. This is a common technique when looking for SSTI vulnerabilities, where a lot of payloads are entered in input fields to check if there are any SSTI issues based on the results."),(0,i.kt)("p",null,"Then, they used the technique mentioned above to find which variables can be used and concatenated. Since Uber also uses Jinja2, the final payload is similar to what we just wrote, and they successfully achieved RCE (Remote Code Execution) using SSTI."),(0,i.kt)("p",null,"For a more detailed process, you can refer to: ",(0,i.kt)("a",{parentName:"p",href:"http://blog.orange.tw/2016/04/bug-bounty-uber-ubercom-remote-code_7.html"},"Uber Remote Code Execution via Flask Jinja2 Template Injection")),(0,i.kt)("p",null,"The second example is the Handlebars SSTI in Shopify reported by Mahmoud Gamal in 2019."),(0,i.kt)("p",null,"Shopify's merchant backend has a feature that allows merchants to customize the emails sent to users (similar to the example I mentioned earlier). They can use syntax like ",(0,i.kt)("inlineCode",{parentName:"p"},"{{order.number}}")," to customize the content. The backend uses Node.js with Handlebars as the template engine."),(0,i.kt)("p",null,"Because Handlebars has some protections and is more complex, hackers spent a lot of time trying to figure out how to attack it. After all, having SSTI is one thing, but not every template engine can be exploited for RCE."),(0,i.kt)("p",null,"The final payload they came up with was very long:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{{#with this as |obj|}}\n    {{#with (obj.constructor.keys "1") as |arr|}}\n        {{#with obj.constructor.name as |str|}}\n            {{#blockHelperMissing str.toString}}\n              {{#with (arr.constructor (str.toString.bind "return JSON.stringify(process.env);"))}}\n                  {{#with (obj.constructor.getOwnPropertyDescriptor this 0)}}\n                      {{#with (obj.constructor.defineProperty obj.constructor.prototype "toString" this)}}\n                          {{#with (obj.constructor.constructor "test")}}\n                            {{this}}\n                          {{/with}}\n                      {{/with}}\n                  {{/with}}\n              {{/with}}\n            {{/blockHelperMissing}}\n        {{/with}}\n  {{/with}}\n{{/with}}\n')),(0,i.kt)("p",null,"Details can be found in the original article by the author: ",(0,i.kt)("a",{parentName:"p",href:"https://mahmoudsec.blogspot.com/2019/04/handlebars-template-injection-and-rce.html"},"Handlebars template injection and RCE in a Shopify app")),(0,i.kt)("h2",{id:"client-side-template-injection"},"Client Side Template Injection"),(0,i.kt)("p",null,"Understanding CSTI becomes easier after understanding SSTI, as the principles are similar, with the only difference being that this template is a frontend template."),(0,i.kt)("p",null,"Wait, there are templates in the frontend too? Of course!"),(0,i.kt)("p",null,"For example, Angular is one. Here's an example from the Angular ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/quick-start"},"official website"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// import required packages\nimport 'zone.js';\nimport { Component } from '@angular/core';\nimport { bootstrapApplication } from '@angular/platform-browser';\n\n// describe component\n@Component({\n  selector: 'add-one-button', // component name used in markup\n  standalone: true, // component is self-contained\n  template: // the component's markup\n  `\n   <button (click)=\"count = count + 1\">Add one</button> {{ count }}\n  `,\n})\n\n// export component\nexport class AddOneButtonComponent {\n  count = 0;\n}\n\nbootstrapApplication(AddOneButtonComponent);\n")),(0,i.kt)("p",null,"You can clearly see a parameter called ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),". If you change ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ count }}")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ constructor.constructor('alert(1)')() }}"),", you will see an alert window pop up."),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"constructor.constructor('alert(1)')()")," because the template cannot directly access ",(0,i.kt)("inlineCode",{parentName:"p"},"window"),", so a new function is created through the Function constructor."),(0,i.kt)("p",null,"In the Angular documentation, it is mentioned in ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/guide/security#angulars-cross-site-scripting-security-model"},"Angular's cross-site scripting security model"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Unlike values to be used for rendering, Angular templates are considered trusted by default, and should be treated as executable code. Never create templates by concatenating user input and template syntax. Doing this would enable attackers to inject arbitrary code into your application.")),(0,i.kt)("p",null,"Templates should be treated as executable code, and user control over templates should never be allowed."),(0,i.kt)("p",null,"By the way, do you know the difference between AngularJS and Angular?"),(0,i.kt)("p",null,"When it was first released in 2010, it was called AngularJS, and the version numbers were 0.x.x or 1.x.x. But after version 2, it was renamed Angular, with similar usage but a completely rewritten design. We will mainly refer to the old version, AngularJS, because it has more issues due to its age and is a library that is suitable for assisting attacks."),(0,i.kt)("p",null,"When AngularJS was first released, executing arbitrary code was also possible using ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ constructor.constructor('alert(1)')() }}"),". However, starting from version 1.2.0, a sandbox mechanism was added to prevent access to ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," in every possible way. But when it comes to attack and defense, security researchers will not lose, and they have found ways to bypass the sandbox."),(0,i.kt)("p",null,"This cycle of being bypassed, strengthening the sandbox, and being bypassed again continued. Finally, AngularJS announced the complete removal of the sandbox after version 1.6. The reason is that the sandbox is not actually a security feature. If your template can be controlled, then that should be the problem to solve, not the sandbox. Details can be found in the original announcement article: ",(0,i.kt)("a",{parentName:"p",href:"https://sites.google.com/site/bughunteruniversity/nonvuln/angularjs-expression-sandbox-bypass"},"AngularJS expression sandbox bypass"),". More bypass history can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://portswigger.net/research/dom-based-angularjs-sandbox-escapes"},"DOM based AngularJS sandbox escapes"),"."),(0,i.kt)("p",null,"In the AngularJS 1.x versions, it was more convenient and easy to use, requiring only an element with ",(0,i.kt)("inlineCode",{parentName:"p"},"ng-app"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n</head>\n<body>\n  <div ng-app>\n    {{ \'hello world\'.toUpperCase() }}\n  </div>\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js"><\/script>\n</body>\n</html>\n')),(0,i.kt)("p",null,"Although ideally, the entire frontend should be controlled by AngularJS, with communication with the backend through APIs, and the backend should not be involved in rendering the view, at that time the concept of SPA was not popular yet, and many websites still had the backend responsible for rendering the view. Therefore, it was very likely to write the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n</head>\n<body>\n  <div ng-app>\n    Hello, <?php echo htmlspecialchars($_GET[\'name\']) ?>\n  </div>\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js"><\/script>\n</body>\n</html>\n')),(0,i.kt)("p",null,"Insert the data directly into the HTML when rendering on the backend."),(0,i.kt)("p",null,"Although the above code has encoded the input, there are no illegal characters in ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ alert(1) }}"),", so it can still lead to XSS."),(0,i.kt)("p",null,"The defense method is the same as SSTI. Never treat user input as part of the template content, or it can easily cause issues."),(0,i.kt)("h2",{id:"practical-case-of-csti"},"Practical Case of CSTI"),(0,i.kt)("p",null,"Let's take a hot case as an example. Masato Kinugawa, a cybersecurity researcher from Japan, demonstrated an RCE vulnerability in Microsoft's communication software Teams during Pwn2Own 2022. By sending a message to the target, one can execute code on their computer! This vulnerability earned a prize of $150,000 at Pwn2Own."),(0,i.kt)("p",null,"Teams' desktop software is built with Electron, so essentially, it is a web page. To achieve RCE, the first step is usually to find XSS, which allows executing JavaScript code on the web page."),(0,i.kt)("p",null,"Teams also handle user input. Both the frontend and backend have sanitizers to remove strange things and ensure that the final rendered content is safe. Although some HTML can be controlled, many attributes and content are filtered."),(0,i.kt)("p",null,"For example, even for class names, only certain class names are allowed. Masato discovered that the sanitizer has some room for manipulating class names. For example, there is a rule like ",(0,i.kt)("inlineCode",{parentName:"p"},"swift-*"),", so both ",(0,i.kt)("inlineCode",{parentName:"p"},"swift-abc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"swift-;[]()'%")," are allowed as class names."),(0,i.kt)("p",null,"But what's the use of only manipulating class names?"),(0,i.kt)("p",null,"Here's the key: Teams' web page is written in AngularJS, which has many magical features. One of them is the ",(0,i.kt)("inlineCode",{parentName:"p"},"ng-init")," attribute used for initialization, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<body>\n  <div ng-app>\n    <div ng-init="name=\'test\'">\n      {{ name }}\n    </div>\n  </div>\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js"><\/script>\n</body>\n</html>\n')),(0,i.kt)("p",null,"This will display ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," on the page, indicating that the code inside ",(0,i.kt)("inlineCode",{parentName:"p"},"ng-init")," is executed."),(0,i.kt)("p",null,"So if you change it to ",(0,i.kt)("inlineCode",{parentName:"p"},"ng-init=\"constructor.constructor('alert(1)')()\""),", an alert will pop up."),(0,i.kt)("p",null,"Now, what does this have to do with the class name we mentioned earlier? It turns out that this ",(0,i.kt)("inlineCode",{parentName:"p"},"ng-init")," can also be used inside a class name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<div class=\"ng-init:constructor.constructor('alert(1)')()\">\n</div>\n")),(0,i.kt)("p",null,"Therefore, by combining the class name checking rules mentioned earlier, we can construct a class name that contains the payload mentioned above and successfully execute XSS."),(0,i.kt)("p",null,"The original article also includes a section on how AngularJS parses class names and bypasses the AngularJS sandbox for this version. Transforming XSS into RCE requires some effort, but since these are not related to the CSTI discussed in this article, they are skipped. I highly recommend checking out the original presentation: ",(0,i.kt)("a",{parentName:"p",href:"https://speakerdeck.com/masatokinugawa/how-i-hacked-microsoft-teams-and-got-150000-dollars-in-pwn2own"},"How I Hacked Microsoft Teams and got $150,000 in Pwn2Own")),(0,i.kt)("p",null,"(By the way, Masato is really amazing. Many of his technical articles have impressed me. His understanding of frontend, JavaScript, and AngularJS is top-notch.)"),(0,i.kt)("h2",{id:"angularjs-and-csp-bypass"},"AngularJS and CSP Bypass"),(0,i.kt)("p",null,"AngularJS is most commonly used in practice for CSP bypass. If you can find AngularJS within the paths allowed by CSP, there is a high chance of bypassing it. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta http-equiv="Content-Security-Policy" content="script-src https://cdnjs.cloudflare.com">\n</head>\n<body>\n  <div ng-app ng-csp>\n    <input id=x autofocus ng-focus=$event.composedPath()|orderBy:\'(z=alert)(1)\'>\n  </div>\n\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js"><\/script>\n</body>\n</html>\n')),(0,i.kt)("p",null,"CSP is strict and only allows ",(0,i.kt)("inlineCode",{parentName:"p"},"https://cdnjs.cloudflare.com"),", but this allows us to introduce AngularJS, resulting in XSS."),(0,i.kt)("p",null,"Although it may seem simple, upon closer inspection, it is not easy. Think about it, CSP does not have ",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe-eval"),", so no strings can be executed as code. But then how are all those strings inside ",(0,i.kt)("inlineCode",{parentName:"p"},"ng-focus")," executed? Isn't that executing strings as code?"),(0,i.kt)("p",null,"This is where AngularJS shines. In the default mode, AngularJS uses ",(0,i.kt)("inlineCode",{parentName:"p"},"eval")," or similar methods to parse the strings you pass in. However, if you add ",(0,i.kt)("a",{parentName:"p",href:"https://docs.angularjs.org/api/ng/directive/ngCsp"},"ng-csp"),", it tells AngularJS to switch to a different mode. It will use its own implemented interpreter to parse the strings and execute the corresponding actions."),(0,i.kt)("p",null,"Therefore, you can think of it as AngularJS implementing its own ",(0,i.kt)("inlineCode",{parentName:"p"},"eval")," to execute strings as code without using these default functions."),(0,i.kt)("p",null,'When discussing bypassing CSP earlier, I mentioned that by making the path configuration more strict, you can "reduce the risk" rather than "completely eliminate the risk." An example I gave was setting it to ',(0,i.kt)("inlineCode",{parentName:"p"},"https://www.google.com/recaptcha/")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"https://www.google.com"),"."),(0,i.kt)("p",null,"In fact, in the GoogleCTF 2023, there was a challenge to bypass the CSP of ",(0,i.kt)("inlineCode",{parentName:"p"},"https://www.google.com/recaptcha/"),", and the solution used AngularJS. This is why I said that a strict path can reduce the risk but cannot completely avoid it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta http-equiv="Content-Security-Policy" content="script-src https://www.google.com/recaptcha/">\n</head>\n<body>\n  <div\n    ng-controller="CarouselController as c"\n    ng-init="c.init()"\n  >\n  [[c.element.ownerDocument.defaultView.alert(1)]]\n  <div carousel><div slides></div></div>\n\n  <script src="https://www.google.com/recaptcha/about/js/main.min.js"><\/script>\n</body>\n</html>\n')),(0,i.kt)("p",null,"If you are interested in AngularJS CSP bypass, you can refer to my previous article: ",(0,i.kt)("a",{parentName:"p",href:"https://blog.huli.tw/2022/09/01/en/angularjs-csp-bypass-cdnjs/"},"Automatically Finding Alternatives to prototype.js in AngularJS CSP Bypass"),", which introduces another bypass method."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,'The CSTI discussed this time is also a type of "non-direct execution of JavaScript" attack.'),(0,i.kt)("p",null,"When you encode all the output and think it is secure, but forget that your frontend has AngularJS, attackers can achieve XSS through seemingly secure ",(0,i.kt)("inlineCode",{parentName:"p"},"{{}}")," using CSTI."),(0,i.kt)("p",null,"Although there are fewer and fewer websites using AngularJS now, and fewer people treat user input as part of the template, the world is not lacking in vulnerabilities, but in discoveries. Many vulnerabilities have simply not been discovered yet."),(0,i.kt)("p",null,"If your service uses AngularJS, make sure there are no CSTI issues."))}d.isMDXComponent=!0}}]);