"use strict";(self.webpackChunkrichardgong_1987_learn=self.webpackChunkrichardgong_1987_learn||[]).push([[2773],{3905:function(t,n,e){e.d(n,{Zo:function(){return c},kt:function(){return d}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var o=a.createContext({}),u=function(t){var n=a.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},c=function(t){var n=u(t.components);return a.createElement(o.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=u(e),d=r,k=m["".concat(o,".").concat(d)]||m[d]||s[d]||i;return e?a.createElement(k,l(l({ref:n},c),{},{components:e})):a.createElement(k,l({ref:n},c))}));function d(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var i=e.length,l=new Array(i);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var u=2;u<i;u++)l[u]=e[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},87856:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=e(83117),r=e(80102),i=(e(67294),e(3905)),l=["components"],p={},o="BitMap\u6570\u636e\u7ed3\u6784\u8be6\u89e3",u={unversionedId:"c-computer/AlgorithmsDataStructures/bitmap/readme",id:"c-computer/AlgorithmsDataStructures/bitmap/readme",title:"BitMap\u6570\u636e\u7ed3\u6784\u8be6\u89e3",description:"\u95ee\u9898\u6848\u4f8b:",source:"@site/docs/c-computer/AlgorithmsDataStructures/bitmap/readme.md",sourceDirName:"c-computer/AlgorithmsDataStructures/bitmap",slug:"/c-computer/AlgorithmsDataStructures/bitmap/",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/bitmap/",editUrl:"https://github.com/richardgong1987-learn/richardgong1987-learn/edit/master/website/docs/c-computer/AlgorithmsDataStructures/bitmap/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7b97\u6cd5\u5c0f\u6284",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/intro"},next:{title:"Bitwise operation",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/bitmap/bit-operation"}},c=[{value:"\u95ee\u9898\u6848\u4f8b:",id:"\u95ee\u9898\u6848\u4f8b",children:[{value:"(1).\u817e\u8baf43 \u4ebf\u4e2a QQ \u53f7\u7801\u5982\u4f55\u53bb\u91cd\uff1f\u5185\u5b58\u9650\u52361G.",id:"1\u817e\u8baf43-\u4ebf\u4e2a-qq-\u53f7\u7801\u5982\u4f55\u53bb\u91cd\u5185\u5b58\u9650\u52361g",children:[],level:3},{value:"(2).\u817e\u8baf43\u4ebf\u4e2a\u4e92\u4e0d\u76f8\u540c\u7684QQ\u53f7\u7801\u6392\u5e8f?\u5185\u5b58\u9650\u52361G.",id:"2\u817e\u8baf43\u4ebf\u4e2a\u4e92\u4e0d\u76f8\u540c\u7684qq\u53f7\u7801\u6392\u5e8f\u5185\u5b58\u9650\u52361g",children:[],level:3}],level:2},{value:"\u95ee\u9898\u5f15\u5165:",id:"\u95ee\u9898\u5f15\u5165",children:[{value:"\u9700\u6c42\u5206\u6790\uff1a",id:"\u9700\u6c42\u5206\u6790",children:[{value:"\u65b9\u6848\u4e00: \u4f7f\u7528\u5927\u5185\u5b58",id:"\u65b9\u6848\u4e00-\u4f7f\u7528\u5927\u5185\u5b58",children:[],level:4},{value:"\u65b9\u6848\u4e8c: \u5b58\u76d8",id:"\u65b9\u6848\u4e8c-\u5b58\u76d8",children:[],level:4},{value:"\u65b9\u6848\u4e09:  \u95f4\u63a5\u65b9\u5f0f\u5b58\u50a8\u548c\u8ba1\u7b97(\u63a8\u8350)",id:"\u65b9\u6848\u4e09--\u95f4\u63a5\u65b9\u5f0f\u5b58\u50a8\u548c\u8ba1\u7b97\u63a8\u8350",children:[],level:4},{value:"\u4e09\u3001\u5e94\u7528\u4e0e\u4ee3\u7801",id:"\u4e09\u5e94\u7528\u4e0e\u4ee3\u7801",children:[],level:4},{value:"\u5b9e\u4f8b\u4ee3\u7801\uff1a",id:"\u5b9e\u4f8b\u4ee3\u7801",children:[],level:4},{value:"\u5b9e\u4f8b\u4ee3\u7801\uff1a",id:"\u5b9e\u4f8b\u4ee3\u7801-1",children:[],level:4},{value:"\u5b9e\u4f8b\u4ee3\u7801\uff1a",id:"\u5b9e\u4f8b\u4ee3\u7801-2",children:[],level:4},{value:"\u5168\u90e8\u4ee3\u7801:",id:"\u5168\u90e8\u4ee3\u7801",children:[],level:4}],level:3}],level:2},{value:"\u538b\u7f29\u7d22\u5f15\u7684\u7b97\u6cd5:",id:"\u538b\u7f29\u7d22\u5f15\u7684\u7b97\u6cd5",children:[{value:"1.\u5fae\u8f6f\u7684RLE(run length encodeing)\u7f16\u7801",id:"1\u5fae\u8f6f\u7684rlerun-length-encodeing\u7f16\u7801",children:[],level:3}],level:2}],s={toc:c};function m(t){var n=t.components,p=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,p,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bitmap\u6570\u636e\u7ed3\u6784\u8be6\u89e3"},"BitMap\u6570\u636e\u7ed3\u6784\u8be6\u89e3"),(0,i.kt)("h2",{id:"\u95ee\u9898\u6848\u4f8b"},"\u95ee\u9898\u6848\u4f8b:"),(0,i.kt)("h3",{id:"1\u817e\u8baf43-\u4ebf\u4e2a-qq-\u53f7\u7801\u5982\u4f55\u53bb\u91cd\u5185\u5b58\u9650\u52361g"},"(1).\u817e\u8baf43 \u4ebf\u4e2a QQ \u53f7\u7801\u5982\u4f55\u53bb\u91cd\uff1f\u5185\u5b58\u9650\u52361G."),(0,i.kt)("h3",{id:"2\u817e\u8baf43\u4ebf\u4e2a\u4e92\u4e0d\u76f8\u540c\u7684qq\u53f7\u7801\u6392\u5e8f\u5185\u5b58\u9650\u52361g"},"(2).\u817e\u8baf43\u4ebf\u4e2a\u4e92\u4e0d\u76f8\u540c\u7684QQ\u53f7\u7801\u6392\u5e8f?\u5185\u5b58\u9650\u52361G."),(0,i.kt)("h3",{id:""}),(0,i.kt)("h2",{id:"\u95ee\u9898\u5f15\u5165"},"\u95ee\u9898\u5f15\u5165:"),(0,i.kt)("p",null,"\u6709\u4e00\u4e2a\u65e0\u5e8f\u6709\u754c\u7684int\u6570\u7ec4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int[] \u6570\u7ec4={1,2,5,7}\n")),(0,i.kt)("p",null,"\u521d\u6b65\u4f30\u8ba1\u5360\u7528\u5185\u5b58 "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"4 x4=16\u5b57\u8282\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u56e0\u4e3a\u4e00\u4e2a int \u5360\u75284\u4e2aByte(1Byte=8bit),\u8fd9\u91cc\u53ea\u67094\u4e2a\u6570")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u53ef\u4ee5\u5f88\u5feb\u627e\u5230\u9700\u8981\u7684\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4f46\u662f\u5047\u5982\u670910\u4ebf\u4e2a\u8fd9\u6837\u7684\u6570\u5462?")),(0,i.kt)("p",null,"10\u4ebf\u4e2a\u4e0d\u91cd\u590d\u5e76\u4e14\u6ca1\u6709\u6392\u8fc7\u5e8f\u7684\u65e0\u7b26\u53f7\u7684int\u6574\u6570\uff0c\u7ed9\u51fa\u4e00\u4e2a\u6574\u6570\uff0c\u627e\u51fa\u7ed9\u5b9a\u7684\u67d0\u4e2a\u6570,\u600e\u4e48\u529e?"),(0,i.kt)("h3",{id:"\u9700\u6c42\u5206\u6790"},"\u9700\u6c42\u5206\u6790\uff1a"),(0,i.kt)("h4",{id:"\u65b9\u6848\u4e00-\u4f7f\u7528\u5927\u5185\u5b58"},"\u65b9\u6848\u4e00: \u4f7f\u7528\u5927\u5185\u5b58"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Int"),"\u7c7b\u578b\u5728Java\u4e2d\u7684\u5b58\u50a8\u5360\u7528 ",(0,i.kt)("strong",{parentName:"p"},"4\u4e2aByte=32Bit")," \u3002",(0,i.kt)("a",{parentName:"p",href:"memory-unit"},"\u5185\u5b58\u5355\u4f4d\u8be6\u89e3")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"10\u4ebf x 4 / (1024 x 1024 x 1024) = 3.72G\u5de6\u53f3\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"10\u4ebf=1,000,000,000\n\n10\u4ebf\u4e2aint= 10\u4ebf x 4 btyes\n\n1G  = 2 ^ 30 bytes = 1024 bytes x 1024 bytes x 1024 bytes\n1M  = 2 ^ 20 bytes = 1024 bytes x 1024 bytes\n1KB = 2 ^ 10 bytes = 1024 bytes\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7f3a\u70b9:")),(0,i.kt)("p",null,"\u8fd9\u6837\u7684\u4e00\u4e2a\u5927\u7684\u6570\u636e\u505a\u67e5\u627e\u548c\u6392\u5e8f\uff0c\u5185\u5b58\u4e5f\u4e00\u5b9a\u5d29\u6e83"),(0,i.kt)("h4",{id:"\u65b9\u6848\u4e8c-\u5b58\u76d8"},"\u65b9\u6848\u4e8c: \u5b58\u76d8"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u6570\u636e\u53ef\u4ee5\u4e0d\u7528\u4e00\u6b21\u6027\u52a0\u8f7d\u800c\u662f\u5b58\u76d8."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7f3a\u70b9:")),(0,i.kt)("p",null,"\u5b58\u76d8\u5fc5\u7136\u6d88\u8017IO\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u8981\u6c42\u7684\u662f\u9ad8\u6027\u80fd\uff0c\u8fd9\u4e2a\u65b9\u6848\u76f4\u63a5\u4e0d\u8003\u8651\u3002"),(0,i.kt)("h4",{id:"\u65b9\u6848\u4e09--\u95f4\u63a5\u65b9\u5f0f\u5b58\u50a8\u548c\u8ba1\u7b97\u63a8\u8350"},"\u65b9\u6848\u4e09:  \u95f4\u63a5\u65b9\u5f0f\u5b58\u50a8\u548c\u8ba1\u7b97(\u63a8\u8350)"),(0,i.kt)("p",null,"\u7528BitMap\u601d\u60f3\u6765\u89e3\u51b3\u95ee\u9898"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"1byte = 8bit\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u6bcf\u4e00\u4e2abit\u7684\u503c\u5c31\u662f: \u6709\u6216\u8005\u6ca1\u6709\uff0c\u4e5f\u5c31\u662f\u4e8c\u8fdb\u5236\u76840\u62161"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u7528bit\u7684\u4f4d\u7f6e\u4ee3\u8868\u6570\u7ec4\u503c: 0\u4ee3\u8868\u6ca1\u6709\uff0c1\u4ee3\u8868\u6709")))),(0,i.kt)("p",null,"\u5982\u56fe:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(66599).Z,width:"1262",height:"698"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u90a3\u4e4810\u4ebf\u7684\u6570\u636e\u6240\u9700\u7684\u7a7a\u95f4\u5c31\u662f3.72G / 32=0.116G \u8282\u7ea632\u500d\u5185\u5b58"),"  ( \u4e00\u4e2aint\u9700\u89814byte\u4fdd\u5b58, 4byte=4 x 8 = 32bit)"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8282\u770132\u500d\u7684\u7a7a\u95f4:\u4e00\u4e2a\u5360\u752832bit\u7684\u6570\u636e\u73b0\u5728\u53ea\u5360\u7528\u4e861bit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6392\u5e8f:\u65f6\u95f4\u590d\u6742\u5ea6\u53d8\u6210\u4e86O(1) "))),(0,i.kt)("p",null,"\u8fd9\u6837\u7684\u6570\u636e\u4e4b\u95f4\u6ca1\u6709\u5173\u8054\u6027\uff0c\u8981\u662f\u8bfb\u53d6\u7684\uff0c\u53ef\u4ee5\u7528\u591a\u7ebf\u7a0b\u7684\u65b9\u5f0f\u53bb\u8bfb\u53d6\u3002"),(0,i.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\u65b9\u9762\u4e5f\u662fO(Max/n)\uff0c\u5176\u4e2dMax\u4e3abyte[]\u6570\u7ec4\u7684\u5927\u5c0f\uff0cn\u4e3a\u7ebf\u7a0b\u5927\u5c0f\u3002"),(0,i.kt)("h4",{id:"\u4e09\u5e94\u7528\u4e0e\u4ee3\u7801"},"\u4e09\u3001\u5e94\u7528\u4e0e\u4ee3\u7801"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6211\u4eec\u5148\u641e\u6e05\u695a\u4e00\u4e2a\u95ee\u9898.")),(0,i.kt)("p",null,"\u4e00\u4e2a\u6570\u600e\u4e48\u5feb\u901f\u5b9a\u4f4d\u5b83\u7684\u7d22\u5f15\u53f7\uff0c\u4e5f\u5c31\u662f\u8bf4\u641e\u6e05\u695a",(0,i.kt)("strong",{parentName:"p"},"byte","[index]","\u7684index"),"\u662f\u591a\u5c11\uff0c",(0,i.kt)("strong",{parentName:"p"},"position"),"\u662f\u54ea\u4e00\u4f4d"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4f8b\u5982: add(14)"),".  "),(0,i.kt)("p",null,"14\u5df2\u7ecf\u8d85\u51fabyte","[0]","\u7684\u6620\u5c04\u8303\u56f4\uff0c\u5728byte","[1]","\u8303\u56f4\u4e4b\u7c7b\u3002\u90a3\u4e48\u600e\u4e48\u5feb\u901f\u5b9a\u4f4d\u5b83\u7684\u7d22\u5f15\u5462\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u627e\u5230\u5b83\u7684\u7d22\u5f15\u53f7\uff0c\u53c8\u600e\u4e48\u5b9a\u4f4d\u5b83\u7684\u4f4d\u7f6e\u5462\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," Index(N)\u4ee3\u8868N\u7684\u7d22\u5f15\u53f7\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," Position(N)\u4ee3\u8868N\u7684\u6240\u5728\u7684\u4f4d\u7f6e\u53f7\u3002\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Index(N) =  N/8  = N >> 3;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Position(N) = N%8 = N & 0x07;"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(1) add(int num)")),(0,i.kt)("p",null,"\u8981\u5411bitmap\u91ccadd\u6570\u636e\u8be5\u600e\u4e48\u529e\u5462?"),(0,i.kt)("p",null,"add\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u5c06\u6240\u5728\u7684\u4f4d\u7f6e\u4ece0\u53d8\u62101.\u5176\u4ed6\u4f4d\u7f6e\u4e0d\u53d8."),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(99436).Z,width:"1278",height:"560"})),(0,i.kt)("h4",{id:"\u5b9e\u4f8b\u4ee3\u7801"},"\u5b9e\u4f8b\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public void add(int num){ \n        // num/8\u5f97\u5230byte[]\u7684index \n        int arrayIndex = num >> 3;  \n\n        // num%8\u5f97\u5230\u5728byte[index]\u7684\u4f4d\u7f6e \n        int position = num & 0x07;  \n\n        //\u5c061\u5de6\u79fbposition\u540e\uff0c\u90a3\u4e2a\u4f4d\u7f6e\u81ea\u7136\u5c31\u662f1\uff0c\n        //\u7136\u540e\u548c\u4ee5\u524d\u7684\u6570\u636e\u505a|\uff0c\u8fd9\u6837\uff0c\u90a3\u4e2a\u4f4d\u7f6e\u5c31\u66ff\u6362\u62101\u4e86\u3002 \n        bits[arrayIndex] |= 1 << position;  \n    } \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(2) clear(int num)")),(0,i.kt)("p",null,"\u5bf91\u8fdb\u884c\u5de6\u79fb\uff0c\u7136\u540e\u53d6\u53cd\uff0c\u6700\u540e\u4e0ebyte","[index]","\u4f5c\u4e0e\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(69614).Z,width:"1266",height:"564"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(69614).Z,width:"1266",height:"564"})),(0,i.kt)("h4",{id:"\u5b9e\u4f8b\u4ee3\u7801-1"},"\u5b9e\u4f8b\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public void clear(int num){ \n        // num/8\u5f97\u5230byte[]\u7684index \n        int arrayIndex = num >> 3;  \n\n        // num%8\u5f97\u5230\u5728byte[index]\u7684\u4f4d\u7f6e \n        int position = num & 0x07;  \n\n        //\u5c061\u5de6\u79fbposition\u540e\uff0c\u90a3\u4e2a\u4f4d\u7f6e\u81ea\u7136\u5c31\u662f1\uff0c\u7136\u540e\u5bf9\u53d6\u53cd\uff0c\u518d\u4e0e\u5f53\u524d\u503c\u505a&\uff0c\u5373\u53ef\u6e05\u9664\u5f53\u524d\u7684\u4f4d\u7f6e\u4e86. \n        bits[arrayIndex] &= ~(1 << position);  \n\n    } \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(3) contain(int num)")),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(20906).Z,width:"1290",height:"602"})),(0,i.kt)("h4",{id:"\u5b9e\u4f8b\u4ee3\u7801-2"},"\u5b9e\u4f8b\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public boolean contain(int num){ \n       // num/8\u5f97\u5230byte[]\u7684index \n       int arrayIndex = num >> 3;  \n\n       // num%8\u5f97\u5230\u5728byte[index]\u7684\u4f4d\u7f6e \n       int position = num & 0x07;  \n\n       //\u5c061\u5de6\u79fbposition\u540e\uff0c\u90a3\u4e2a\u4f4d\u7f6e\u81ea\u7136\u5c31\u662f1\uff0c\u7136\u540e\u548c\u4ee5\u524d\u7684\u6570\u636e\u505a&\uff0c\u5224\u65ad\u662f\u5426\u4e3a0\u5373\u53ef \n       return (bits[arrayIndex] & (1 << position)) !=0;  \n   } \n")),(0,i.kt)("h4",{id:"\u5168\u90e8\u4ee3\u7801"},"\u5168\u90e8\u4ee3\u7801:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class BitMap { \n    //\u4fdd\u5b58\u6570\u636e\u7684 \n    private byte[] bits; \n\n    //\u80fd\u591f\u5b58\u50a8\u591a\u5c11\u6570\u636e \n    private int capacity; \n\n\n    public BitMap(int capacity){ \n        this.capacity = capacity; \n\n        //1bit\u80fd\u5b58\u50a88\u4e2a\u6570\u636e\uff0c\u90a3\u4e48capacity\u6570\u636e\u9700\u8981\u591a\u5c11\u4e2abit\u5462\uff0ccapacity/8+1,\u53f3\u79fb3\u4f4d\u76f8\u5f53\u4e8e\u9664\u4ee58 \n        bits = new byte[(capacity >>3 )+1]; \n    } \n\n    public void add(int num){ \n        // num/8\u5f97\u5230byte[]\u7684index \n        int arrayIndex = num >> 3;  \n\n        // num%8\u5f97\u5230\u5728byte[index]\u7684\u4f4d\u7f6e \n        int position = num & 0x07;  \n\n        //\u5c061\u5de6\u79fbposition\u540e\uff0c\u90a3\u4e2a\u4f4d\u7f6e\u81ea\u7136\u5c31\u662f1\uff0c\u7136\u540e\u548c\u4ee5\u524d\u7684\u6570\u636e\u505a|\uff0c\u8fd9\u6837\uff0c\u90a3\u4e2a\u4f4d\u7f6e\u5c31\u66ff\u6362\u62101\u4e86\u3002 \n        bits[arrayIndex] |= 1 << position;  \n    } \n\n    public boolean contain(int num){ \n        // num/8\u5f97\u5230byte[]\u7684index \n        int arrayIndex = num >> 3;  \n\n        // num%8\u5f97\u5230\u5728byte[index]\u7684\u4f4d\u7f6e \n        int position = num & 0x07;  \n\n        //\u5c061\u5de6\u79fbposition\u540e\uff0c\u90a3\u4e2a\u4f4d\u7f6e\u81ea\u7136\u5c31\u662f1\uff0c\u7136\u540e\u548c\u4ee5\u524d\u7684\u6570\u636e\u505a&\uff0c\u5224\u65ad\u662f\u5426\u4e3a0\u5373\u53ef \n        return (bits[arrayIndex] & (1 << position)) !=0;  \n    } \n\n    public void clear(int num){ \n        // num/8\u5f97\u5230byte[]\u7684index \n        int arrayIndex = num >> 3;  \n\n        // num%8\u5f97\u5230\u5728byte[index]\u7684\u4f4d\u7f6e \n        int position = num & 0x07;  \n\n        //\u5c061\u5de6\u79fbposition\u540e\uff0c\u90a3\u4e2a\u4f4d\u7f6e\u81ea\u7136\u5c31\u662f1\uff0c\u7136\u540e\u5bf9\u53d6\u53cd\uff0c\u518d\u4e0e\u5f53\u524d\u503c\u505a&\uff0c\u5373\u53ef\u6e05\u9664\u5f53\u524d\u7684\u4f4d\u7f6e\u4e86. \n        bits[arrayIndex] &= ~(1 << position);  \n\n    } \n\n    public static void main(String[] args) { \n        BitMap bitmap = new BitMap(100); \n        bitmap.add(7); \n        System.out.println("\u63d2\u51657\u6210\u529f"); \n\n        boolean isexsit = bitmap.contain(7); \n        System.out.println("7\u662f\u5426\u5b58\u5728:"+isexsit); \n\n        bitmap.clear(7); \n        isexsit = bitmap.contain(7); \n        System.out.println("7\u662f\u5426\u5b58\u5728:"+isexsit); \n    } \n} \n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1a")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bitmap"),"\u5178\u578b\u7684\u5e94\u7528\u573a\u666f\u4e3a\uff1a\u5927\u91cf\u6570\u636e\u7684",(0,i.kt)("strong",{parentName:"p"},"\u5feb\u901f\u6392\u5e8f\u3001\u67e5\u627e\u3001\u53bb\u91cd")),(0,i.kt)("p",null,"\u5176\u88ab\u5e7f\u6cdb\u7528\u4e8e\u6570\u636e\u5e93\u548c\u641c\u7d22\u5f15\u64ce\u4e2d\uff0c\u901a\u8fc7\u5229\u7528\u4f4d\u7ea7\u5e76\u884c\uff0c\u5b83\u4eec\u53ef\u4ee5\u663e\u8457\u52a0\u5feb\u67e5\u8be2\u901f\u5ea6\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u4f4d\u56fe\u7d22\u5f15\u4f1a\u5360\u7528\u5927\u91cf\u7684\u5185\u5b58"),"\uff0c\u56e0\u6b64\u6211\u4eec\u5728\u6b63\u5f0f\u4e1a\u52a1\u5f00\u53d1\u4e2d\u90fd\u662f",(0,i.kt)("strong",{parentName:"p"},"\u538b\u7f29\u4f4d\u56fe\u7d22\u5f15"),"\u3002"),(0,i.kt)("h2",{id:"\u538b\u7f29\u7d22\u5f15\u7684\u7b97\u6cd5"},"\u538b\u7f29\u7d22\u5f15\u7684\u7b97\u6cd5:"),(0,i.kt)("h3",{id:"1\u5fae\u8f6f\u7684rlerun-length-encodeing\u7f16\u7801"},"1.\u5fae\u8f6f\u7684RLE(run length encodeing)\u7f16\u7801"),(0,i.kt)("p",null,"\u601d\u8def: \u5bf9\u4e8e\u91cd\u590d\u51fa\u73b0\u7684\u503c,\u901a\u8fc7\u503c\u52a0\u4e0a\u91cd\u590d\u51fa\u73b0\u7684\u6b21\u6570\u8868\u793a\uff0c\u4ece\u800c\u5230\u8fbe\u6570\u636e\u7684\u538b\u7f29"),(0,i.kt)("p",null,"\u5982:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"[data] [data] [data] [data] [data]\n\u538b\u7f29\u540e:\n[5] [data]\n")),(0,i.kt)("p",null,"\u4ee3\u8868\u4f5c:Oracle\u2019s BBC\u3001WAH\u3001Concise"),(0,i.kt)("p",null,"2.",(0,i.kt)("strong",{parentName:"p"},"roaringbitmap")," (\u63a8\u8350)"),(0,i.kt)("p",null,"\u5df2\u7ecf\u5b9e\u73b0\u7684\u8f6f\u4ef6\u6709: Apache Spark,InfluxDB,Druid..."),(0,i.kt)("p",null,"\u5b98\u65b9\u7f51\u7ad9:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://roaringbitmap.org/"},"https://roaringbitmap.org/")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5b9e\u73b0\u539f\u7406:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6211\u4eec\u5c06 32-bit \u7684\u8303\u56f4 ([0, n)) \u5212\u5206\u4e3a 2^16 \u4e2a\u6876\uff0c\u6bcf\u4e00\u4e2a\u6876\u6709\u4e00\u4e2a Container \u6765\u5b58\u653e\u4e00\u4e2a\u6570\u503c\u7684\u4f4e16\u4f4d\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5b58\u50a8\u548c\u67e5\u8be2\u6570\u503c\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5c06\u4e00\u4e2a\u6570\u503c k \u5212\u5206\u4e3a\u9ad8 16 \u4f4d",(0,i.kt)("inlineCode",{parentName:"li"},"(k % 2^16)"),"\u548c\u4f4e 16 \u4f4d",(0,i.kt)("inlineCode",{parentName:"li"},"(k mod 2^16)"),"\uff0c\u53d6\u9ad8 16 \u4f4d\u627e\u5230\u5bf9\u5e94\u7684\u6876\uff0c\u7136\u540e\u5728\u4f4e 16 \u4f4d\u5b58\u653e\u5728\u76f8\u5e94\u7684 Container \u4e2d\uff1b")))}m.isMDXComponent=!0},99436:function(t,n,e){n.Z=e.p+"assets/images/2021-12-11-22-18-16-image-6f175e23ee83734753aa64a6d1f03c45.png"},69614:function(t,n,e){n.Z=e.p+"assets/images/2021-12-11-22-31-43-image-cfd674d9f19dd5edd8d5d0fcfc2bdca4.png"},20906:function(t,n,e){n.Z=e.p+"assets/images/2021-12-11-22-33-08-image-e7724e2185f5d84260873cffc33d1389.png"},66599:function(t,n,e){n.Z=e.p+"assets/images/826aac48a68926d187497e994c9f0cadca5ac28b-c4af8dbb7684dc1358cc08feef2ebbdf.png"}}]);