(self.webpackChunkrichardgong_1987_learn=self.webpackChunkrichardgong_1987_learn||[]).push([[727],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,v=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return t?n.createElement(v,i(i({ref:r},p),{},{components:t})):n.createElement(v,i({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},409:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],c={sidebar_position:22},l="JVM\u6027\u80fd\u8c03\u4f18\u5b66\u4e60",u={unversionedId:"a-java/b-java-jvm/intro",id:"a-java/b-java-jvm/intro",isDocsHomePage:!1,title:"JVM\u6027\u80fd\u8c03\u4f18\u5b66\u4e60",description:"JVM\u662f\u4e00\u4e2a\u89c4\u8303,\u5c31\u50cfsql\u89c4\u8303,\u5b83\u5e76\u4e0d\u662f\u4e00\u4e2a\u5177\u4f53\u7684\u8f6f\u4ef6. \u4e0d\u540c\u7684\u5382\u5bb6,\u6709\u4e0d\u540c\u7684jvm\u5b9e\u73b0",source:"@site/docs/a-java/b-java-jvm/intro.md",sourceDirName:"a-java/b-java-jvm",slug:"/a-java/b-java-jvm/intro",permalink:"/richardgong1987-learn/docs/a-java/b-java-jvm/intro",editUrl:"https://github.com/richardgong1987-learn/richardgong1987-learn/edit/master/website/docs/a-java/b-java-jvm/intro.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"\u7ebf\u7a0b\u6c60",permalink:"/richardgong1987-learn/docs/a-java/a-java-concurrent/threadpool/readme"},next:{title:"\u5185\u5b58\u7ed3\u6784",permalink:"/richardgong1987-learn/docs/a-java/b-java-jvm/1/readme"}},p=[{value:"1.\u5185\u5b58\u7ed3\u6784 ",id:"1\u5185\u5b58\u7ed3\u6784",children:[]},{value:"2.\u5783\u573e\u56de\u6536",id:"2\u5783\u573e\u56de\u6536",children:[]},{value:"3.\u7c7b\u52a0\u8f7d\u548c\u5b57\u8282\u7801\u6280\u672f",id:"3\u7c7b\u52a0\u8f7d\u548c\u5b57\u8282\u7801\u6280\u672f",children:[]},{value:"4.\u5185\u5b58\u6a21\u578b",id:"4\u5185\u5b58\u6a21\u578b",children:[]}],s={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jvm\u6027\u80fd\u8c03\u4f18\u5b66\u4e60"},"JVM\u6027\u80fd\u8c03\u4f18\u5b66\u4e60"),(0,o.kt)("p",null,"JVM\u662f\u4e00\u4e2a\u89c4\u8303,\u5c31\u50cfsql\u89c4\u8303,\u5b83\u5e76\u4e0d\u662f\u4e00\u4e2a\u5177\u4f53\u7684\u8f6f\u4ef6. \u4e0d\u540c\u7684\u5382\u5bb6,\u6709\u4e0d\u540c\u7684jvm\u5b9e\u73b0"),(0,o.kt)("p",null,"\u8fd9\u91cc\u53ea\u8bb2hotspot\u7684jvm\u5b9e\u73b0,\u5176\u5b83\u5382\u5bb6\u5b9e\u73b0\u7684,\u4e5f\u90fd\u662f\u5927\u540c\u5c0f\u5f02"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b4\u4e2a\u8bfe\u9898")),(0,o.kt)("h2",{id:"1\u5185\u5b58\u7ed3\u6784"},"1.",(0,o.kt)("a",{parentName:"h2",href:"1/readme"},"\u5185\u5b58\u7ed3\u6784 ")),(0,o.kt)("h2",{id:"2\u5783\u573e\u56de\u6536"},"2.",(0,o.kt)("a",{parentName:"h2",href:"2/readme"},"\u5783\u573e\u56de\u6536")),(0,o.kt)("h2",{id:"3\u7c7b\u52a0\u8f7d\u548c\u5b57\u8282\u7801\u6280\u672f"},"3.",(0,o.kt)("a",{parentName:"h2",href:"3/readme"},"\u7c7b\u52a0\u8f7d\u548c\u5b57\u8282\u7801\u6280\u672f")),(0,o.kt)("h2",{id:"4\u5185\u5b58\u6a21\u578b"},"4.",(0,o.kt)("a",{parentName:"h2",href:"4/readme"},"\u5185\u5b58\u6a21\u578b")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u8003:")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html"},"https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html")))}m.isMDXComponent=!0}}]);