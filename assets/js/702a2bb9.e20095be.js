"use strict";(self.webpackChunkrichardgong_1987_learn=self.webpackChunkrichardgong_1987_learn||[]).push([[3005],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=o(n),s=r,v=d["".concat(c,".").concat(s)]||d[s]||k[s]||l;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[d]="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},33515:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return o}});var a=n(83117),r=(n(67294),n(3905));const l={},i="\u539f\u7406\u7bc7",u={unversionedId:"a-java/a-java-concurrent/concurent/readme",id:"a-java/a-java-concurrent/concurent/readme",title:"\u539f\u7406\u7bc7",description:"2.\u5e76\u53d1\u7f16\u7a0b\u539f\u7406.pdf",source:"@site/docs/a-java/a-java-concurrent/concurent/readme.md",sourceDirName:"a-java/a-java-concurrent/concurent",slug:"/a-java/a-java-concurrent/concurent/",permalink:"/richardgong1987-learn/docs/a-java/a-java-concurrent/concurent/",draft:!1,editUrl:"https://github.com/richardgong1987-learn/richardgong1987-learn/edit/master/website/docs/a-java/a-java-concurrent/concurent/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java\u5e76\u53d1\u7f16\u7a0b",permalink:"/richardgong1987-learn/docs/a-java/a-java-concurrent/intro"},next:{title:"NIO\u3010\u7f51\u7edc\u7f16\u7a0b\u548c\u3011",permalink:"/richardgong1987-learn/docs/a-java/a-java-concurrent/nio"}},c={},o=[{value:"2.\u5e76\u53d1\u7f16\u7a0b_\u539f\u7406.pdf",id:"2\u5e76\u53d1\u7f16\u7a0b_\u539f\u7406pdf",level:2},{value:"1.\u6307\u4ee4\u7ea7\u5e76\u884c\u539f\u7406",id:"1\u6307\u4ee4\u7ea7\u5e76\u884c\u539f\u7406",level:3},{value:"1.\u540d\u8bcd(Clock Cycle Time)",id:"1\u540d\u8bcdclock-cycle-time",level:4},{value:"CPI",id:"cpi",level:5},{value:"IPC",id:"ipc",level:5},{value:"CPU \u6267\u884c\u65f6\u95f4",id:"cpu-\u6267\u884c\u65f6\u95f4",level:5},{value:"2. \u9c7c\u7f50\u5934\u7684\u6545\u4e8b",id:"2-\u9c7c\u7f50\u5934\u7684\u6545\u4e8b",level:3},{value:"3. \u6307\u4ee4\u91cd\u6392\u5e8f\u4f18\u5316",id:"3-\u6307\u4ee4\u91cd\u6392\u5e8f\u4f18\u5316",level:3},{value:"4. \u652f\u6301\u6d41\u6c34\u7ebf\u7684\u5904\u7406\u5668",id:"4-\u652f\u6301\u6d41\u6c34\u7ebf\u7684\u5904\u7406\u5668",level:3},{value:"5. SuperScalar \u5904\u7406\u5668",id:"5-superscalar-\u5904\u7406\u5668",level:3},{value:"2.CPU \u7f13\u5b58\u7ed3\u6784\u539f\u7406",id:"2cpu-\u7f13\u5b58\u7ed3\u6784\u539f\u7406",level:2},{value:"1.CPU \u7f13\u5b58\u7ed3\u6784",id:"1cpu-\u7f13\u5b58\u7ed3\u6784",level:3},{value:"2.CPU \u7f13\u5b58\u8bfb",id:"2cpu-\u7f13\u5b58\u8bfb",level:3},{value:"3. CPU \u7f13\u5b58\u4e00\u81f4\u6027",id:"3-cpu-\u7f13\u5b58\u4e00\u81f4\u6027",level:3},{value:"3. volatile \u539f\u7406",id:"3-volatile-\u539f\u7406",level:2},{value:"3.1 \u5982\u4f55\u4fdd\u8bc1\u53ef\u89c1\u6027",id:"31-\u5982\u4f55\u4fdd\u8bc1\u53ef\u89c1\u6027",level:3},{value:"3.2\u5982\u4f55\u4fdd\u8bc1\u6709\u5e8f\u6027",id:"32\u5982\u4f55\u4fdd\u8bc1\u6709\u5e8f\u6027",level:3},{value:"3. double-checked locking \u95ee\u9898",id:"3-double-checked-locking-\u95ee\u9898",level:3},{value:"4.final \u539f\u7406",id:"4final-\u539f\u7406",level:2},{value:"4.1. \u8bbe\u7f6e final \u53d8\u91cf\u7684\u539f\u7406",id:"41-\u8bbe\u7f6e-final-\u53d8\u91cf\u7684\u539f\u7406",level:3},{value:"4.2 \u83b7\u53d6 final \u53d8\u91cf\u7684\u539f\u7406",id:"42-\u83b7\u53d6-final-\u53d8\u91cf\u7684\u539f\u7406",level:3},{value:"5.Monitor \u539f\u7406",id:"5monitor-\u539f\u7406",level:2},{value:"6.synchronized \u539f\u7406",id:"6synchronized-\u539f\u7406",level:2},{value:"6.1 synchronized \u539f\u7406\u8fdb\u9636",id:"61-synchronized-\u539f\u7406\u8fdb\u9636",level:3},{value:"6.1.1. \u8f7b\u91cf\u7ea7\u9501",id:"611-\u8f7b\u91cf\u7ea7\u9501",level:3},{value:"6.1.2. \u9501\u81a8\u80c0",id:"612-\u9501\u81a8\u80c0",level:3},{value:"6.1.3. \u81ea\u65cb\u4f18\u5316",id:"613-\u81ea\u65cb\u4f18\u5316",level:3},{value:"6.1.4. \u504f\u5411\u9501",id:"614-\u504f\u5411\u9501",level:3},{value:"6.1.5. \u9501\u6d88\u9664",id:"615-\u9501\u6d88\u9664",level:3},{value:"7.wait notify \u539f\u7406",id:"7wait-notify-\u539f\u7406",level:2},{value:"8.join \u539f\u7406",id:"8join-\u539f\u7406",level:2},{value:"9.park unpark \u539f\u7406",id:"9park-unpark-\u539f\u7406",level:2},{value:"10.AQS \u539f\u7406",id:"10aqs-\u539f\u7406",level:2},{value:"10.1\u6982\u8ff0",id:"101\u6982\u8ff0",level:3},{value:"2. \u5b9e\u73b0\u4e0d\u53ef\u91cd\u5165\u9501",id:"2-\u5b9e\u73b0\u4e0d\u53ef\u91cd\u5165\u9501",level:3},{value:"\u81ea\u5b9a\u4e49\u540c\u6b65\u5668",id:"\u81ea\u5b9a\u4e49\u540c\u6b65\u5668",level:3},{value:"\u81ea\u5b9a\u4e49\u9501",id:"\u81ea\u5b9a\u4e49\u9501",level:3}],p={toc:o};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u539f\u7406\u7bc7"},"\u539f\u7406\u7bc7"),(0,r.kt)("h2",{id:"2\u5e76\u53d1\u7f16\u7a0b_\u539f\u7406pdf"},(0,r.kt)("a",{target:"_blank",href:n(79792).Z},"2.\u5e76\u53d1\u7f16\u7a0b_\u539f\u7406.pdf")),(0,r.kt)("h3",{id:"1\u6307\u4ee4\u7ea7\u5e76\u884c\u539f\u7406"},"1.\u6307\u4ee4\u7ea7\u5e76\u884c\u539f\u7406"),(0,r.kt)("h4",{id:"1\u540d\u8bcdclock-cycle-time"},"1.\u540d\u8bcd(Clock Cycle Time)"),(0,r.kt)("p",null,"\u610f\u601d\u662f CPU \u80fd \u591f\u8bc6\u522b\u7684\u6700\u5c0f\u65f6\u95f4\u5355\u4f4d"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u8fd0\u884c\u4e00\u6761\u52a0\u6cd5\u6307\u4ee4\u4e00\u822c\u9700\u8981\u4e00\u4e2a\u65f6\u949f\u5468\u671f\u65f6\u95f4"),(0,r.kt)("h5",{id:"cpi"},"CPI"),(0,r.kt)("p",null,"\u6709\u7684\u6307\u4ee4\u9700\u8981\u66f4\u591a\u7684\u65f6\u949f\u5468\u671f\u65f6\u95f4\uff0c\u6240\u4ee5\u5f15\u51fa\u4e86 CPI \uff08Cycles Per Instruction\uff09\u6307\u4ee4\u5e73\u5747\u65f6\u949f\u5468\u671f\u6570"),(0,r.kt)("h5",{id:"ipc"},"IPC"),(0,r.kt)("p",null,"IPC\uff08Instruction Per Clock Cycle\uff09\u5373 CPI \u7684\u5012\u6570\uff0c\u8868\u793a\u6bcf\u4e2a\u65f6\u949f\u5468\u671f\u80fd\u591f\u8fd0\u884c\u7684\u6307\u4ee4\u6570"),(0,r.kt)("h5",{id:"cpu-\u6267\u884c\u65f6\u95f4"},"CPU \u6267\u884c\u65f6\u95f4"),(0,r.kt)("p",null,"\u7a0b\u5e8f\u7684 CPU \u6267\u884c\u65f6\u95f4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," \u7a0b\u5e8f CPU \u6267\u884c\u65f6\u95f4 = \u6307\u4ee4\u6570 * CPI * Clock Cycle Time \n")),(0,r.kt)("h3",{id:"2-\u9c7c\u7f50\u5934\u7684\u6545\u4e8b"},"2. \u9c7c\u7f50\u5934\u7684\u6545\u4e8b"),(0,r.kt)("h3",{id:"3-\u6307\u4ee4\u91cd\u6392\u5e8f\u4f18\u5316"},"3. \u6307\u4ee4\u91cd\u6392\u5e8f\u4f18\u5316"),(0,r.kt)("h3",{id:"4-\u652f\u6301\u6d41\u6c34\u7ebf\u7684\u5904\u7406\u5668"},"4. \u652f\u6301\u6d41\u6c34\u7ebf\u7684\u5904\u7406\u5668"),(0,r.kt)("h3",{id:"5-superscalar-\u5904\u7406\u5668"},"5. SuperScalar \u5904\u7406\u5668"),(0,r.kt)("h2",{id:"2cpu-\u7f13\u5b58\u7ed3\u6784\u539f\u7406"},"2.CPU \u7f13\u5b58\u7ed3\u6784\u539f\u7406"),(0,r.kt)("h3",{id:"1cpu-\u7f13\u5b58\u7ed3\u6784"},"1.CPU \u7f13\u5b58\u7ed3\u6784"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210909091025515",src:n(8368).Z,width:"1880",height:"1100"})),(0,r.kt)("h3",{id:"2cpu-\u7f13\u5b58\u8bfb"},"2.CPU \u7f13\u5b58\u8bfb"),(0,r.kt)("h3",{id:"3-cpu-\u7f13\u5b58\u4e00\u81f4\u6027"},"3. CPU \u7f13\u5b58\u4e00\u81f4\u6027"),(0,r.kt)("h2",{id:"3-volatile-\u539f\u7406"},"3. volatile \u539f\u7406"),(0,r.kt)("h3",{id:"31-\u5982\u4f55\u4fdd\u8bc1\u53ef\u89c1\u6027"},"3.1 \u5982\u4f55\u4fdd\u8bc1\u53ef\u89c1\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5199\u5c4f\u969c\uff08sfence\uff09\u4fdd\u8bc1\u5728\u8be5\u5c4f\u969c\u4e4b\u524d\u7684\uff0c\u5bf9\u5171\u4eab\u53d8\u91cf\u7684\u6539\u52a8\uff0c\u90fd\u540c\u6b65\u5230\u4e3b\u5b58\u5f53\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u8bfb\u5c4f\u969c\uff08lfence\uff09\u4fdd\u8bc1\u5728\u8be5\u5c4f\u969c\u4e4b\u540e\uff0c\u5bf9\u5171\u4eab\u53d8\u91cf\u7684\u8bfb\u53d6\uff0c\u52a0\u8f7d\u7684\u662f\u4e3b\u5b58\u4e2d\u6700\u65b0\u6570\u636e")),(0,r.kt)("h3",{id:"32\u5982\u4f55\u4fdd\u8bc1\u6709\u5e8f\u6027"},"3.2\u5982\u4f55\u4fdd\u8bc1\u6709\u5e8f\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5199\u5c4f\u969c\u4f1a\u786e\u4fdd\u6307\u4ee4\u91cd\u6392\u5e8f\u65f6\uff0c\u4e0d\u4f1a\u5c06\u5199\u5c4f\u969c\u4e4b\u524d\u7684\u4ee3\u7801\u6392\u5728\u5199\u5c4f\u969c\u4e4b\u540e"),(0,r.kt)("li",{parentName:"ul"},"\u8bfb\u5c4f\u969c\u4f1a\u786e\u4fdd\u6307\u4ee4\u91cd\u6392\u5e8f\u65f6\uff0c\u4e0d\u4f1a\u5c06\u8bfb\u5c4f\u969c\u4e4b\u540e\u7684\u4ee3\u7801\u6392\u5728\u8bfb\u5c4f\u969c\u4e4b\u524d")),(0,r.kt)("p",null,"\u8fd8\u662f\u90a3\u53e5\u8bdd\uff0c\u4e0d\u80fd\u89e3\u51b3\u6307\u4ee4\u4ea4\u9519\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5199\u5c4f\u969c\u4ec5\u4ec5\u662f\u4fdd\u8bc1\u4e4b\u540e\u7684\u8bfb\u80fd\u591f\u8bfb\u5230\u6700\u65b0\u7684\u7ed3\u679c\uff0c\u4f46\u4e0d\u80fd\u4fdd\u8bc1\u8bfb\u8dd1\u5230\u5b83\u524d\u9762\u53bb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u800c\u6709\u5e8f\u6027\u7684\u4fdd\u8bc1\u4e5f\u53ea\u662f\u4fdd\u8bc1\u4e86\u672c\u7ebf\u7a0b\u5185\u76f8\u5173\u4ee3\u7801\u4e0d\u88ab\u91cd\u6392\u5e8f"))),(0,r.kt)("h3",{id:"3-double-checked-locking-\u95ee\u9898"},"3. double-checked locking \u95ee\u9898"),(0,r.kt)("h2",{id:"4final-\u539f\u7406"},"4.final \u539f\u7406"),(0,r.kt)("h3",{id:"41-\u8bbe\u7f6e-final-\u53d8\u91cf\u7684\u539f\u7406"},"4.1. \u8bbe\u7f6e final \u53d8\u91cf\u7684\u539f\u7406"),(0,r.kt)("p",null,"final \u53d8\u91cf\u7684\u8d4b\u503c\u4e5f\u4f1a\u901a\u8fc7 putfield \u6307\u4ee4\u6765\u5b8c\u6210\uff0c\u540c\u6837\u5728\u8fd9\u6761\u6307\u4ee4\u4e4b\u540e\u4e5f\u4f1a\u52a0\u5165\u5199\u5c4f\u969c\uff0c\u4fdd\u8bc1\u5728\u5176\u5b83\u7ebf\u7a0b\u8bfb\u5230 \u5b83\u7684\u503c\u65f6\u4e0d\u4f1a\u51fa\u73b0\u4e3a 0 \u7684\u60c5\u51b5"),(0,r.kt)("h3",{id:"42-\u83b7\u53d6-final-\u53d8\u91cf\u7684\u539f\u7406"},"4.2 \u83b7\u53d6 final \u53d8\u91cf\u7684\u539f\u7406"),(0,r.kt)("h2",{id:"5monitor-\u539f\u7406"},"5.Monitor \u539f\u7406"),(0,r.kt)("p",null,"\u6bcf\u4e2a Java \u5bf9\u8c61\u90fd\u53ef\u4ee5\u5173\u8054\u4e00\u4e2a Monitor \u5bf9\u8c61\uff0c\u5982\u679c\u4f7f\u7528 synchronized \u7ed9\u5bf9\u8c61\u4e0a\u9501\uff08\u91cd\u91cf\u7ea7\uff09\u4e4b\u540e\uff0c\u8be5\u5bf9\u8c61\u5934\u7684 Mark Word \u4e2d\u5c31\u88ab\u8bbe\u7f6e\u6307\u5411 Monitor \u5bf9\u8c61\u7684\u6307\u9488"),(0,r.kt)("p",null,"Monitor \u7ed3\u6784\u5982\u4e0b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210909092008315",src:n(52197).Z,width:"1706",height:"658"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u521a\u5f00\u59cb Monitor \u4e2d Owner \u4e3a null ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53 Thread-2 \u6267\u884c synchronized(obj) \u5c31\u4f1a\u5c06 Monitor \u7684\u6240\u6709\u8005 Owner \u7f6e\u4e3a Thread-2\uff0cMonitor\u4e2d\u53ea\u80fd\u6709\u4e00 \u4e2a Owner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728 Thread-2 \u4e0a\u9501\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c Thread-3\uff0cThread-4\uff0cThread-5 \u4e5f\u6765\u6267\u884c synchronized(obj)\uff0c\u5c31\u4f1a\u8fdb\u5165 EntryList BLOCKED Thread-2 \u6267\u884c\u5b8c\u540c\u6b65\u4ee3\u7801\u5757\u7684\u5185\u5bb9\uff0c\u7136\u540e\u5524\u9192 EntryList \u4e2d\u7b49\u5f85\u7684\u7ebf\u7a0b\u6765\u7ade\u4e89\u9501\uff0c\u7ade\u4e89\u7684\u65f6\u662f\u975e\u516c\u5e73\u7684")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u56fe\u4e2d WaitSet \u4e2d\u7684 Thread-0\uff0cThread-1 \u662f\u4e4b\u524d\u83b7\u5f97\u8fc7\u9501\uff0c\u4f46\u6761\u4ef6\u4e0d\u6ee1\u8db3\u8fdb\u5165 WAITING \u72b6\u6001\u7684\u7ebf\u7a0b\uff0c\u540e\u9762\u8bb2 wait-notify \u65f6\u4f1a\u5206\u6790"))),(0,r.kt)("h2",{id:"6synchronized-\u539f\u7406"},"6.synchronized \u539f\u7406"),(0,r.kt)("h3",{id:"61-synchronized-\u539f\u7406\u8fdb\u9636"},"6.1 synchronized \u539f\u7406\u8fdb\u9636"),(0,r.kt)("h3",{id:"611-\u8f7b\u91cf\u7ea7\u9501"},"6.1.1. \u8f7b\u91cf\u7ea7\u9501"),(0,r.kt)("p",null,"\u8f7b\u91cf\u7ea7\u9501\u7684\u4f7f\u7528\u573a\u666f\uff1a\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u867d\u7136\u6709\u591a\u7ebf\u7a0b\u8981\u52a0\u9501\uff0c\u4f46\u52a0\u9501\u7684\u65f6\u95f4\u662f\u9519\u5f00\u7684\uff08\u4e5f\u5c31\u662f\u6ca1\u6709\u7ade\u4e89\uff09\uff0c\u90a3\u4e48\u53ef\u4ee5 \u4f7f\u7528\u8f7b\u91cf\u7ea7\u9501\u6765\u4f18\u5316"),(0,r.kt)("h3",{id:"612-\u9501\u81a8\u80c0"},"6.1.2. \u9501\u81a8\u80c0"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u5c1d\u8bd5\u52a0\u8f7b\u91cf\u7ea7\u9501\u7684\u8fc7\u7a0b\u4e2d\uff0cCAS \u64cd\u4f5c\u65e0\u6cd5\u6210\u529f\uff0c\u8fd9\u65f6\u4e00\u79cd\u60c5\u51b5\u5c31\u662f\u6709\u5176\u5b83\u7ebf\u7a0b\u4e3a\u6b64\u5bf9\u8c61\u52a0\u4e0a\u4e86\u8f7b\u91cf\u7ea7\u9501\uff08\u6709 \u7ade\u4e89\uff09\uff0c\u8fd9\u65f6\u9700\u8981\u8fdb\u884c\u9501\u81a8\u80c0\uff0c\u5c06\u8f7b\u91cf\u7ea7\u9501\u53d8\u4e3a\u91cd\u91cf\u7ea7\u9501"),(0,r.kt)("h3",{id:"613-\u81ea\u65cb\u4f18\u5316"},"6.1.3. \u81ea\u65cb\u4f18\u5316"),(0,r.kt)("p",null,"\u91cd\u91cf\u7ea7\u9501\u7ade\u4e89\u7684\u65f6\u5019\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528\u81ea\u65cb\u6765\u8fdb\u884c\u4f18\u5316\uff0c\u5982\u679c\u5f53\u524d\u7ebf\u7a0b\u81ea\u65cb\u6210\u529f\uff08\u5373\u8fd9\u65f6\u5019\u6301\u9501\u7ebf\u7a0b\u5df2\u7ecf\u9000\u51fa\u4e86\u540c\u6b65 \u5757\uff0c\u91ca\u653e\u4e86\u9501\uff09\uff0c\u8fd9\u65f6\u5f53\u524d\u7ebf\u7a0b\u5c31\u53ef\u4ee5\u907f\u514d\u963b\u585e"),(0,r.kt)("h3",{id:"614-\u504f\u5411\u9501"},"6.1.4. \u504f\u5411\u9501"),(0,r.kt)("h3",{id:"615-\u9501\u6d88\u9664"},"6.1.5. \u9501\u6d88\u9664"),(0,r.kt)("h2",{id:"7wait-notify-\u539f\u7406"},"7.wait notify \u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210909092739374",src:n(86773).Z,width:"1394",height:"544"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Owner \u7ebf\u7a0b\u53d1\u73b0\u6761\u4ef6\u4e0d\u6ee1\u8db3\uff0c\u8c03\u7528 wait \u65b9\u6cd5\uff0c\u5373\u53ef\u8fdb\u5165 WaitSet \u53d8\u4e3a WAITING \u72b6\u6001 "),(0,r.kt)("li",{parentName:"ul"},"BLOCKED \u548c WAITING \u7684\u7ebf\u7a0b\u90fd\u5904\u4e8e\u963b\u585e\u72b6\u6001\uff0c\u4e0d\u5360\u7528 CPU \u65f6\u95f4\u7247"),(0,r.kt)("li",{parentName:"ul"},"BLOCKED \u7ebf\u7a0b\u4f1a\u5728 Owner \u7ebf\u7a0b\u91ca\u653e\u9501\u65f6\u5524\u9192"),(0,r.kt)("li",{parentName:"ul"},"WAITING \u7ebf\u7a0b\u4f1a\u5728 Owner \u7ebf\u7a0b\u8c03\u7528 notify \u6216 notifyAll \u65f6\u5524\u9192\uff0c\u4f46\u5524\u9192\u540e\u5e76\u4e0d\u610f\u5473\u8005\u7acb\u523b\u83b7\u5f97\u9501\uff0c\u4ecd\u9700\u8fdb\u5165 EntryList \u91cd\u65b0\u7ade\u4e89")),(0,r.kt)("h2",{id:"8join-\u539f\u7406"},"8.join \u539f\u7406"),(0,r.kt)("p",null,"\u662f\u8c03\u7528\u8005\u8f6e\u8be2\u68c0\u67e5\u7ebf\u7a0b alive \u72b6\u6001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"t1.join();\n")),(0,r.kt)("p",null,"\u7b49\u4ef7\u4e8e\u4e0b\u9762\u7684\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"        synchronized (t1) {\n            // \u8c03\u7528\u8005\u7ebf\u7a0b\u8fdb\u5165 t1 \u7684 waitSet \u7b49\u5f85, \u76f4\u5230 t1 \u8fd0\u884c\u7ed3\u675f \n            while (t1.isAlive()) {\n                t1.wait(0);\n            }\n        }\n\n")),(0,r.kt)("h2",{id:"9park-unpark-\u539f\u7406"},"9.park unpark \u539f\u7406"),(0,r.kt)("p",null,"\u5176\u5b9e\u5c31\u662f\u57fa\u4e8eUnsafe.park\u5b9e\u73b0\u7684"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210909093223004",src:n(18530).Z,width:"1250",height:"742"})),(0,r.kt)("h2",{id:"10aqs-\u539f\u7406"},"10.AQS \u539f\u7406"),(0,r.kt)("h3",{id:"101\u6982\u8ff0"},"10.1\u6982\u8ff0"),(0,r.kt)("p",null,"\u5168\u79f0\u662f AbstractQueuedSynchronizer\uff0c\u662f\u963b\u585e\u5f0f\u9501\u548c\u76f8\u5173\u7684\u540c\u6b65\u5668\u5de5\u5177\u7684\u6846\u67b6"),(0,r.kt)("p",null,"\u7279\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7528 state \u5c5e\u6027\u6765\u8868\u793a\u8d44\u6e90\u7684\u72b6\u6001\uff08\u5206\u72ec\u5360\u6a21\u5f0f\u548c\u5171\u4eab\u6a21\u5f0f\uff09\uff0c\u5b50\u7c7b\u9700\u8981\u5b9a\u4e49\u5982\u4f55\u7ef4\u62a4\u8fd9\u4e2a\u72b6\u6001\uff0c\u63a7\u5236\u5982\u4f55\u83b7\u53d6 \u9501\u548c\u91ca\u653e\u9501"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"getState - \u83b7\u53d6 state \u72b6\u6001 ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"setState - \u8bbe\u7f6e state \u72b6\u6001 ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"compareAndSetState - cas \u673a\u5236\u8bbe\u7f6e state \u72b6\u6001 ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u72ec\u5360\u6a21\u5f0f\u662f\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u80fd\u591f\u8bbf\u95ee\u8d44\u6e90\uff0c\u800c\u5171\u4eab\u6a21\u5f0f\u53ef\u4ee5\u5141\u8bb8\u591a\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\u8d44\u6e90")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4f9b\u4e86\u57fa\u4e8e FIFO \u7684\u7b49\u5f85\u961f\u5217\uff0c\u7c7b\u4f3c\u4e8e Monitor \u7684 EntryList")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6761\u4ef6\u53d8\u91cf\u6765\u5b9e\u73b0\u7b49\u5f85\u3001\u5524\u9192\u673a\u5236\uff0c\u652f\u6301\u591a\u4e2a\u6761\u4ef6\u53d8\u91cf\uff0c\u7c7b\u4f3c\u4e8e Monitor \u7684 WaitSet"))),(0,r.kt)("p",null,"\u5b50\u7c7b\u4e3b\u8981\u5b9e\u73b0\u8fd9\u6837\u4e00\u4e9b\u65b9\u6cd5\uff08\u9ed8\u8ba4\u629b\u51fa UnsupportedOperationException\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"tryAcquire"),(0,r.kt)("li",{parentName:"ul"},"tryRelease "),(0,r.kt)("li",{parentName:"ul"},"tryAcquireShared"),(0,r.kt)("li",{parentName:"ul"},"tryReleaseShared "),(0,r.kt)("li",{parentName:"ul"},"isHeldExclusively ")),(0,r.kt)("p",null,"\u83b7\u53d6\u9501"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java\xa0"},"// \u5982\u679c\u83b7\u53d6\u9501\u5931\u8d25 \n        if (!tryAcquire(arg)) {\n            // \u5165\u961f, \u53ef\u4ee5\u9009\u62e9\u963b\u585e\u5f53\u524d\u7ebf\u7a0b  park unpark \n        }\n")),(0,r.kt)("p",null,"\u91ca\u653e\u9501"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"        // \u5982\u679c\u91ca\u653e\u9501\u6210\u529f \n        if (tryRelease(arg)) {\n            // \u8ba9\u963b\u585e\u7ebf\u7a0b\u6062\u590d\u8fd0\u884c \n        }\n")),(0,r.kt)("h3",{id:"2-\u5b9e\u73b0\u4e0d\u53ef\u91cd\u5165\u9501"},"2. \u5b9e\u73b0\u4e0d\u53ef\u91cd\u5165\u9501"),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u540c\u6b65\u5668"},"\u81ea\u5b9a\u4e49\u540c\u6b65\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"final class MySync extends AbstractQueuedSynchronizer {\n    @Override\n    protected boolean tryAcquire(int acquires) {\n        if (acquires == 1) {\n            if (compareAndSetState(0, 1)) {\n                setExclusiveOwnerThread(Thread.currentThread());\n                return true;\n            }\n        }\n        return false;\n    }\n\n    @Override\n    protected boolean tryRelease(int acquires) {\n        if (acquires == 1) {\n            if (getState() == 0) {\n                thrownewIllegalMonitorStateException();\n            }\n            setExclusiveOwnerThread(null);\n            setState(0);\n            return true;\n        }\n        return false;\n    }\n\n    protected Conditionn ewCondition() {\n        return newConditionObject();\n    }\n\n    @Override\n    protected boolean isHeldExclusively() {\n        return getState() == 1;\n    }\n}\n")),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u9501"},"\u81ea\u5b9a\u4e49\u9501"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java\xa0"},"class MyLock implements Lock {\n    static MySync sync = new MySync();\n    @Override // \u5c1d\u8bd5\uff0c\u4e0d\u6210\u529f\uff0c\u8fdb\u5165\u7b49\u5f85\u961f\u5217 \n    public void lock() {\n        sync.acquire(1);\n    }\n\n    @Override // \u5c1d\u8bd5\uff0c\u4e0d\u6210\u529f\uff0c\u8fdb\u5165\u7b49\u5f85\u961f\u5217\uff0c\u53ef\u6253\u65ad \n    public void lockInterruptibly() throwsInterruptedException {\n        sync.acquireInterruptibly(1);\n    }\n\n    @Override // \u5c1d\u8bd5\u4e00\u6b21\uff0c\u4e0d\u6210\u529f\u8fd4\u56de\uff0c\u4e0d\u8fdb\u5165\u961f\u5217 \n    public boolean tryLock() {\n        return sync.tryAcquire(1);\n    }\n\n    @Override // \u5c1d\u8bd5\uff0c\u4e0d\u6210\u529f\uff0c\u8fdb\u5165\u7b49\u5f85\u961f\u5217\uff0c\u6709\u65f6\u9650\n    public boolean tryLock(longtime, TimeUnitunit) throwsInterruptedException {\n        return sync.tryAcquireNanos(1, unit.toNanos(time));\n    }\n\n    @Override // \u91ca\u653e\u9501 \n    public void unlock() {\n        sync.release(1);\n    }\n\n    @Override // \u751f\u6210\u6761\u4ef6\u53d8\u91cf \n    public Condition newCondition() {\n        return sync.newCondition();\n    }\n}\n")))}d.isMDXComponent=!0},79792:function(e,t,n){t.Z=n.p+"assets/files/\u5e76\u53d1\u7f16\u7a0b_\u539f\u7406-e9bf6149d69250f211d839170b99cbef.pdf"},8368:function(e,t,n){t.Z=n.p+"assets/images/image-20210909091025515-62ea430dd4246f53fe9169bc4e93c835.png"},52197:function(e,t,n){t.Z=n.p+"assets/images/image-20210909092008315-9c7cf17d78ffbff85af2b68324ffef22.png"},86773:function(e,t,n){t.Z=n.p+"assets/images/image-20210909092739374-244f370255c89c6d3422629b39a70aa9.png"},18530:function(e,t,n){t.Z=n.p+"assets/images/image-20210909093223004-ba3c85a14b87feebfb5f76fe2dd34e01.png"}}]);