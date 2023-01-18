"use strict";(self.webpackChunkrichardgong_1987_learn=self.webpackChunkrichardgong_1987_learn||[]).push([[3575],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},l="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),l=p(n),b=o,f=l["".concat(u,".").concat(b)]||l[b]||m[b]||a;return n?r.createElement(f,i(i({ref:e},s),{},{components:n})):r.createElement(f,i({ref:e},s))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c[l]="string"==typeof t?t:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},44384:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(83117),o=(n(67294),n(3905));const a={},i="Bitwise operation",c={unversionedId:"c-computer/AlgorithmsDataStructures/bitmap/bit-operation",id:"c-computer/AlgorithmsDataStructures/bitmap/bit-operation",title:"Bitwise operation",description:"",source:"@site/docs/c-computer/AlgorithmsDataStructures/bitmap/bit-operation.md",sourceDirName:"c-computer/AlgorithmsDataStructures/bitmap",slug:"/c-computer/AlgorithmsDataStructures/bitmap/bit-operation",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/bitmap/bit-operation",draft:!1,editUrl:"https://github.com/richardgong1987-learn/richardgong1987-learn/edit/master/website/docs/c-computer/AlgorithmsDataStructures/bitmap/bit-operation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BitMap\u6570\u636e\u7ed3\u6784\u8be6\u89e3",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/bitmap/"},next:{title:"Memory unit:",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/bitmap/memory-unit"}},u={},p=[],s={toc:p};function l(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bitwise-operation"},"Bitwise operation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'        // Initial values\n        int a = 5;\n        int b = 7;\n        /**\n         and\n\n         0101\n         &\n         0111\n\n         =0101 = 5\n\n         */\n        System.out.println("a&b = " + (a & b));\n\n        /**\n         bitwise or\n         0101\n         |\n         0111\n\n         =0111=7\n         */\n        System.out.println("a|b = " + (a | b));\n\n        /**\n         bitwise xor\n\n         0101\n         ^\n         0111\n\n         =0010=2\n         */\n        System.out.println("a^b = " + (a ^ b));\n\n        /**\n         bitwise not\n\n         ~0101=1010\n\n         will give 2\'s complement of 1010 = -6\n         */\n        System.out.println("~a = " + ~a);\n\n        // can also be combined with\n        // assignment operator to provide shorthand\n        // assignment\n        // a=a&b\n        a &= b;\n        System.out.println("a= " + a);\n')))}l.isMDXComponent=!0}}]);