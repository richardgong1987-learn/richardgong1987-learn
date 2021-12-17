"use strict";(self.webpackChunkrichardgong_1987_learn=self.webpackChunkrichardgong_1987_learn||[]).push([[5977],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var o=r.createContext({}),s=function(n){var e=r.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):p(p({},e),n)),t},u=function(n){var e=s(n.components);return r.createElement(o.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,o=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),c=s(t),m=a,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(g,p(p({ref:e},u),{},{components:t})):r.createElement(g,p({ref:e},u))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,p=new Array(i);p[0]=c;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=n,l.mdxType="string"==typeof n?n:a,p[1]=l;for(var s=2;s<i;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},25949:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),p=["components"],l={},o="BFS \u7b97\u6cd5\u89e3\u9898\u5957\u8def\u6846\u67b6",s={unversionedId:"c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/4",id:"c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/4",title:"BFS \u7b97\u6cd5\u89e3\u9898\u5957\u8def\u6846\u67b6",description:"\u5176\u5b9e DFS \u7b97\u6cd5\u5c31\u662f\u56de\u6eaf\u7b97\u6cd5\uff0c\u6211\u4eec\u524d\u6587 \u56de\u6eaf\u7b97\u6cd5\u6846\u67b6\u5957\u8def\u8be6\u89e3 \u5c31\u5199\u8fc7\u4e86\uff0c\u800c\u4e14\u5199\u5f97\u4e0d\u662f\u4e00\u822c\u5f97\u597d\uff0c\u5efa\u8bae\u597d\u597d\u590d\u4e60\uff0c\u563f\u563f\u563f~",source:"@site/docs/c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/4.md",sourceDirName:"c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1",slug:"/c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/4",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/4",editUrl:"https://github.com/richardgong1987-learn/richardgong1987-learn/edit/master/website/docs/c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/4.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u56de\u6eaf\u7b97\u6cd5\u89e3\u9898\u5957\u8def\u6846\u67b6",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/3"},next:{title:"\u628a Dijkstra \u7b97\u6cd5\u53d8\u6210\u4e86\u9ed8\u5199\u9898",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/5"}},u=[{value:"\u4e8c\u3001\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u9ad8\u5ea6",id:"\u4e8c\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u9ad8\u5ea6",children:[],level:2},{value:"\u4e09\u3001\u89e3\u5f00\u5bc6\u7801\u9501\u7684\u6700\u5c11\u6b21\u6570",id:"\u4e09\u89e3\u5f00\u5bc6\u7801\u9501\u7684\u6700\u5c11\u6b21\u6570",children:[],level:2},{value:"\u56db\u3001\u53cc\u5411 BFS \u4f18\u5316",id:"\u56db\u53cc\u5411-bfs-\u4f18\u5316",children:[],level:2}],d={toc:u};function c(n){var e=n.components,t=(0,a.Z)(n,p);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bfs-\u7b97\u6cd5\u89e3\u9898\u5957\u8def\u6846\u67b6"},"BFS \u7b97\u6cd5\u89e3\u9898\u5957\u8def\u6846\u67b6"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5176\u5b9e DFS \u7b97\u6cd5\u5c31\u662f\u56de\u6eaf\u7b97\u6cd5"),"\uff0c\u6211\u4eec\u524d\u6587 ",(0,i.kt)("a",{parentName:"p",href:"https://labuladong.gitbook.io/algo/mu-lu-ye-3/mu-lu-ye/hui-su-suan-fa-xiang-jie-xiu-ding-ban"},"\u56de\u6eaf\u7b97\u6cd5\u6846\u67b6\u5957\u8def\u8be6\u89e3")," \u5c31\u5199\u8fc7\u4e86\uff0c\u800c\u4e14\u5199\u5f97\u4e0d\u662f\u4e00\u822c\u5f97\u597d\uff0c\u5efa\u8bae\u597d\u597d\u590d\u4e60\uff0c\u563f\u563f\u563f~"),(0,i.kt)("p",null,"BFS \u7684\u6838\u5fc3\u601d\u60f3\u5e94\u8be5\u4e0d\u96be\u7406\u89e3\u7684\uff0c\u5c31\u662f\u628a\u4e00\u4e9b\u95ee\u9898\u62bd\u8c61\u6210\u56fe\uff0c\u4ece\u4e00\u4e2a\u70b9\u5f00\u59cb\uff0c\u5411\u56db\u5468\u5f00\u59cb\u6269\u6563\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u6211\u4eec\u5199 BFS \u7b97\u6cd5\u90fd\u662f\u7528\u300c\u961f\u5217\u300d\u8fd9\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u6bcf\u6b21\u5c06\u4e00\u4e2a\u8282\u70b9\u5468\u56f4\u7684\u6240\u6709\u8282\u70b9\u52a0\u5165\u961f\u5217\u3002"),(0,i.kt)("p",null,"BFS \u76f8\u5bf9 DFS \u7684\u6700\u4e3b\u8981\u7684\u533a\u522b\u662f\uff1a",(0,i.kt)("strong",{parentName:"p"},"BFS \u627e\u5230\u7684\u8def\u5f84\u4e00\u5b9a\u662f\u6700\u77ed\u7684\uff0c\u4f46\u4ee3\u4ef7\u5c31\u662f\u7a7a\u95f4\u590d\u6742\u5ea6\u53ef\u80fd\u6bd4 DFS \u5927\u5f88\u591a"),"\uff0c\u81f3\u4e8e\u4e3a\u4ec0\u4e48\uff0c\u6211\u4eec\u540e\u9762\u4ecb\u7ecd\u4e86\u6846\u67b6\u5c31\u5f88\u5bb9\u6613\u770b\u51fa\u6765\u4e86\u3002"),(0,i.kt)("p",null,"\u672c\u6587\u5c31\u7531\u6d45\u5165\u6df1\u5199\u4e24\u9053 BFS \u7684\u5178\u578b\u9898\u76ee\uff0c\u5206\u522b\u662f\u300c\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u9ad8\u5ea6\u300d\u548c\u300c\u6253\u5f00\u5bc6\u7801\u9501\u7684\u6700\u5c11\u6b65\u6570\u300d\uff0c\u624b\u628a\u624b\u6559\u4f60\u600e\u4e48\u5199 BFS \u7b97\u6cd5\u3002"),(0,i.kt)("h1",{id:"\u4e00\u7b97\u6cd5\u6846\u67b6"},"\u4e00\u3001\u7b97\u6cd5\u6846\u67b6"),(0,i.kt)("p",null,"\u8981\u8bf4\u6846\u67b6\u7684\u8bdd\uff0c\u6211\u4eec\u5148\u4e3e\u4f8b\u4e00\u4e0b BFS \u51fa\u73b0\u7684\u5e38\u89c1\u573a\u666f\u597d\u5427\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u95ee\u9898\u7684\u672c\u8d28\u5c31\u662f\u8ba9\u4f60\u5728\u4e00\u5e45\u300c\u56fe\u300d\u4e2d\u627e\u5230\u4ece\u8d77\u70b9")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"start"))," ",(0,i.kt)("strong",{parentName:"p"},"\u5230\u7ec8\u70b9")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"target"))," ",(0,i.kt)("strong",{parentName:"p"},"\u7684\u6700\u8fd1\u8ddd\u79bb\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u542c\u8d77\u6765\u5f88\u67af\u71e5\uff0c\u4f46\u662f BFS \u7b97\u6cd5\u95ee\u9898\u5176\u5b9e\u90fd\u662f\u5728\u5e72\u8fd9\u4e2a\u4e8b\u513f"),"\uff0c\u628a\u67af\u71e5\u7684\u672c\u8d28\u641e\u6e05\u695a\u4e86\uff0c\u518d\u53bb\u6b23\u8d4f\u5404\u79cd\u95ee\u9898\u7684\u5305\u88c5\u624d\u80fd\u80f8\u6709\u6210\u7af9\u561b\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u5e7f\u4e49\u7684\u63cf\u8ff0\u53ef\u4ee5\u6709\u5404\u79cd\u53d8\u4f53\uff0c\u6bd4\u5982\u8d70\u8ff7\u5bab\uff0c\u6709\u7684\u683c\u5b50\u662f\u56f4\u5899\u4e0d\u80fd\u8d70\uff0c\u4ece\u8d77\u70b9\u5230\u7ec8\u70b9\u7684\u6700\u77ed\u8ddd\u79bb\u662f\u591a\u5c11\uff1f\u5982\u679c\u8fd9\u4e2a\u8ff7\u5bab\u5e26\u300c\u4f20\u9001\u95e8\u300d\u53ef\u4ee5\u77ac\u95f4\u4f20\u9001\u5462\uff1f"),(0,i.kt)("p",null,"\u518d\u6bd4\u5982\u8bf4\u4e24\u4e2a\u5355\u8bcd\uff0c\u8981\u6c42\u4f60\u901a\u8fc7\u67d0\u4e9b\u66ff\u6362\uff0c\u628a\u5176\u4e2d\u4e00\u4e2a\u53d8\u6210\u53e6\u4e00\u4e2a\uff0c\u6bcf\u6b21\u53ea\u80fd\u66ff\u6362\u4e00\u4e2a\u5b57\u7b26\uff0c\u6700\u5c11\u8981\u66ff\u6362\u51e0\u6b21\uff1f"),(0,i.kt)("p",null,"\u518d\u6bd4\u5982\u8bf4\u8fde\u8fde\u770b\u6e38\u620f\uff0c\u4e24\u4e2a\u65b9\u5757\u6d88\u9664\u7684\u6761\u4ef6\u4e0d\u4ec5\u4ec5\u662f\u56fe\u6848\u76f8\u540c\uff0c\u8fd8\u5f97\u4fdd\u8bc1\u4e24\u4e2a\u65b9\u5757\u4e4b\u95f4\u7684\u6700\u77ed\u8fde\u7ebf\u4e0d\u80fd\u591a\u4e8e\u4e24\u4e2a\u62d0\u70b9\u3002\u4f60\u73a9\u8fde\u8fde\u770b\uff0c\u70b9\u51fb\u4e24\u4e2a\u5750\u6807\uff0c\u6e38\u620f\u662f\u5982\u4f55\u5224\u65ad\u5b83\u4fe9\u7684\u6700\u77ed\u8fde\u7ebf\u6709\u51e0\u4e2a\u62d0\u70b9\u7684\uff1f"),(0,i.kt)("p",null,"\u518d\u6bd4\u5982\u2026\u2026"),(0,i.kt)("p",null,"\u51c0\u6574\u4e9b\u82b1\u91cc\u80e1\u54e8\u7684\uff0c\u8fd9\u4e9b\u95ee\u9898\u90fd\u6ca1\u5565\u5947\u6280\u6deb\u5de7\uff0c\u672c\u8d28\u4e0a\u5c31\u662f\u4e00\u5e45\u300c\u56fe\u300d\uff0c\u8ba9\u4f60\u4ece\u4e00\u4e2a\u8d77\u70b9\uff0c\u8d70\u5230\u7ec8\u70b9\uff0c\u95ee\u6700\u77ed\u8def\u5f84\u3002\u8fd9\u5c31\u662f BFS \u7684\u672c\u8d28\uff0c\u6846\u67b6\u641e\u6e05\u695a\u4e86\u76f4\u63a5\u9ed8\u5199\u5c31\u597d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://gblobscdn.gitbook.com/assets%2F-MgaO_np8dKO0rzhRKXx%2Fsync%2Fc38e1ddb81dab37cce367174b9440e84d6bfc6bb.jpeg?alt=media",alt:"img"})),(0,i.kt)("p",null,"\u8bb0\u4f4f\u4e0b\u9762\u8fd9\u4e2a\u6846\u67b6\u5c31 OK \u4e86\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// \u8ba1\u7b97\u4ece\u8d77\u70b9 start \u5230\u7ec8\u70b9 target \u7684\u6700\u8fd1\u8ddd\u79bb\nint BFS(Node start, Node target) {\n    Queue<Node> q; // \u6838\u5fc3\u6570\u636e\u7ed3\u6784\n    Set<Node> visited; // \u907f\u514d\u8d70\u56de\u5934\u8def\n\n\n    q.offer(start); // \u5c06\u8d77\u70b9\u52a0\u5165\u961f\u5217\n    visited.add(start);\n    int step = 0; // \u8bb0\u5f55\u6269\u6563\u7684\u6b65\u6570\n\n\n    while (q not empty) {\n        int sz = q.size();\n        /* \u5c06\u5f53\u524d\u961f\u5217\u4e2d\u7684\u6240\u6709\u8282\u70b9\u5411\u56db\u5468\u6269\u6563 */\n        for (int i = 0; i < sz; i++) {\n            Node cur = q.poll();\n            /* \u5212\u91cd\u70b9\uff1a\u8fd9\u91cc\u5224\u65ad\u662f\u5426\u5230\u8fbe\u7ec8\u70b9 */\n            if (cur is target)\n                return step;\n            /* \u5c06 cur \u7684\u76f8\u90bb\u8282\u70b9\u52a0\u5165\u961f\u5217 */\n            for (Node x : cur.adj())\n                if (x not in visited) {\n                    q.offer(x);\n                    visited.add(x);\n                }\n        }\n        /* \u5212\u91cd\u70b9\uff1a\u66f4\u65b0\u6b65\u6570\u5728\u8fd9\u91cc */\n        step++;\n    }\n}\n")),(0,i.kt)("p",null,"\u961f\u5217 ",(0,i.kt)("inlineCode",{parentName:"p"},"q")," \u5c31\u4e0d\u8bf4\u4e86\uff0cBFS \u7684\u6838\u5fc3\u6570\u636e\u7ed3\u6784\uff1b",(0,i.kt)("inlineCode",{parentName:"p"},"cur.adj()")," \u6cdb\u6307 ",(0,i.kt)("inlineCode",{parentName:"p"},"cur")," \u76f8\u90bb\u7684\u8282\u70b9\uff0c\u6bd4\u5982\u8bf4\u4e8c\u7ef4\u6570\u7ec4\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"cur")," \u4e0a\u4e0b\u5de6\u53f3\u56db\u9762\u7684\u4f4d\u7f6e\u5c31\u662f\u76f8\u90bb\u8282\u70b9\uff1b",(0,i.kt)("inlineCode",{parentName:"p"},"visited")," \u7684\u4e3b\u8981\u4f5c\u7528\u662f\u9632\u6b62\u8d70\u56de\u5934\u8def\uff0c\u5927\u90e8\u5206\u65f6\u5019\u90fd\u662f\u5fc5\u987b\u7684\uff0c\u4f46\u662f\u50cf\u4e00\u822c\u7684\u4e8c\u53c9\u6811\u7ed3\u6784\uff0c\u6ca1\u6709\u5b50\u8282\u70b9\u5230\u7236\u8282\u70b9\u7684\u6307\u9488\uff0c\u4e0d\u4f1a\u8d70\u56de\u5934\u8def\u5c31\u4e0d\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"visited"),"\u3002"),(0,i.kt)("h2",{id:"\u4e8c\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u9ad8\u5ea6"},"\u4e8c\u3001\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u9ad8\u5ea6"),(0,i.kt)("p",null,"\u5148\u6765\u4e2a\u7b80\u5355\u7684\u95ee\u9898\u5b9e\u8df5\u4e00\u4e0b BFS \u6846\u67b6\u5427\uff0c\u5224\u65ad\u4e00\u68f5\u4e8c\u53c9\u6811\u7684",(0,i.kt)("strong",{parentName:"p"},"\u6700\u5c0f"),"\u9ad8\u5ea6\uff0c\u8fd9\u4e5f\u662f LeetCode \u7b2c 111 \u9898\uff0c\u770b\u4e00\u4e0b\u9898\u76ee\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://gblobscdn.gitbook.com/assets%2F-MgaO_np8dKO0rzhRKXx%2Fsync%2Fc9c83087f0260508f8330e15a12f1296b6bbbe02.jpg?alt=media",alt:"img"})),(0,i.kt)("p",null,"\u600e\u4e48\u5957\u5230 BFS \u7684\u6846\u67b6\u91cc\u5462\uff1f\u9996\u5148\u660e\u786e\u4e00\u4e0b\u8d77\u70b9 ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," \u548c\u7ec8\u70b9 ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," \u662f\u4ec0\u4e48\uff0c\u600e\u4e48\u5224\u65ad\u5230\u8fbe\u4e86\u7ec8\u70b9\uff1f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u663e\u7136\u8d77\u70b9\u5c31\u662f")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"root"))," ",(0,i.kt)("strong",{parentName:"p"},"\u6839\u8282\u70b9\uff0c\u7ec8\u70b9\u5c31\u662f\u6700\u9760\u8fd1\u6839\u8282\u70b9\u7684\u90a3\u4e2a\u300c\u53f6\u5b50\u8282\u70b9\u300d\u561b"),"\uff0c\u53f6\u5b50\u8282\u70b9\u5c31\u662f\u4e24\u4e2a\u5b50\u8282\u70b9\u90fd\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," \u7684\u8282\u70b9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"if (cur.left == null && cur.right == null) \n    // \u5230\u8fbe\u53f6\u5b50\u8282\u70b9\n")),(0,i.kt)("p",null,"\u90a3\u4e48\uff0c\u6309\u7167\u6211\u4eec\u4e0a\u8ff0\u7684\u6846\u67b6\u7a0d\u52a0\u6539\u9020\u6765\u5199\u89e3\u6cd5\u5373\u53ef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int minDepth(TreeNode root) {\n    if (root == null) return 0;\n    Queue<TreeNode> q = new LinkedList<>();\n    q.offer(root);\n    // root \u672c\u8eab\u5c31\u662f\u4e00\u5c42\uff0cdepth \u521d\u59cb\u5316\u4e3a 1\n    int depth = 1;\n\n\n    while (!q.isEmpty()) {\n        int sz = q.size();\n        /* \u5c06\u5f53\u524d\u961f\u5217\u4e2d\u7684\u6240\u6709\u8282\u70b9\u5411\u56db\u5468\u6269\u6563 */\n        for (int i = 0; i < sz; i++) {\n            TreeNode cur = q.poll();\n            /* \u5224\u65ad\u662f\u5426\u5230\u8fbe\u7ec8\u70b9 */\n            if (cur.left == null && cur.right == null) \n                return depth;\n            /* \u5c06 cur \u7684\u76f8\u90bb\u8282\u70b9\u52a0\u5165\u961f\u5217 */\n            if (cur.left != null)\n                q.offer(cur.left);\n            if (cur.right != null) \n                q.offer(cur.right);\n        }\n        /* \u8fd9\u91cc\u589e\u52a0\u6b65\u6570 */\n        depth++;\n    }\n    return depth;\n}\n")),(0,i.kt)("p",null,"\u4e8c\u53c9\u6811\u662f\u5f88\u7b80\u5355\u7684\u6570\u636e\u7ed3\u6784\uff0c\u6211\u60f3\u4e0a\u8ff0\u4ee3\u7801\u4f60\u5e94\u8be5\u53ef\u4ee5\u7406\u89e3\u7684\u5427\uff0c\u5176\u5b9e\u5176\u4ed6\u590d\u6742\u95ee\u9898\u90fd\u662f\u8fd9\u4e2a\u6846\u67b6\u7684\u53d8\u5f62\uff0c\u518d\u63a2\u8ba8\u590d\u6742\u95ee\u9898\u4e4b\u524d\uff0c\u6211\u4eec\u89e3\u7b54\u4e24\u4e2a\u95ee\u9898\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1\u3001\u4e3a\u4ec0\u4e48 BFS \u53ef\u4ee5\u627e\u5230\u6700\u77ed\u8ddd\u79bb\uff0cDFS \u4e0d\u884c\u5417"),"\uff1f"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u770b BFS \u7684\u903b\u8f91\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"depth")," \u6bcf\u589e\u52a0\u4e00\u6b21\uff0c\u961f\u5217\u4e2d\u7684\u6240\u6709\u8282\u70b9\u90fd\u5411\u524d\u8fc8\u4e00\u6b65\uff0c\u8fd9\u4fdd\u8bc1\u4e86\u7b2c\u4e00\u6b21\u5230\u8fbe\u7ec8\u70b9\u7684\u65f6\u5019\uff0c\u8d70\u7684\u6b65\u6570\u662f\u6700\u5c11\u7684\u3002"),(0,i.kt)("p",null,"DFS \u4e0d\u80fd\u627e\u6700\u77ed\u8def\u5f84\u5417\uff1f\u5176\u5b9e\u4e5f\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u662f\u65f6\u95f4\u590d\u6742\u5ea6\u76f8\u5bf9\u9ad8\u5f88\u591a\u3002\u4f60\u60f3\u554a\uff0cDFS \u5b9e\u9645\u4e0a\u662f\u9760\u9012\u5f52\u7684\u5806\u6808\u8bb0\u5f55\u8d70\u8fc7\u7684\u8def\u5f84\uff0c\u4f60\u8981\u627e\u5230\u6700\u77ed\u8def\u5f84\uff0c\u80af\u5b9a\u5f97\u628a\u4e8c\u53c9\u6811\u4e2d\u6240\u6709\u6811\u6748\u90fd\u63a2\u7d22\u5b8c\u624d\u80fd\u5bf9\u6bd4\u51fa\u6700\u77ed\u7684\u8def\u5f84\u6709\u591a\u957f\u5bf9\u4e0d\u5bf9\uff1f\u800c BFS \u501f\u52a9\u961f\u5217\u505a\u5230\u4e00\u6b21\u4e00\u6b65\u300c\u9f50\u5934\u5e76\u8fdb\u300d\uff0c\u662f\u53ef\u4ee5\u5728\u4e0d\u904d\u5386\u5b8c\u6574\u68f5\u6811\u7684\u6761\u4ef6\u4e0b\u627e\u5230\u6700\u77ed\u8ddd\u79bb\u7684\u3002"),(0,i.kt)("p",null,"\u5f62\u8c61\u70b9\u8bf4\uff0cDFS \u662f\u7ebf\uff0cBFS \u662f\u9762\uff1bDFS \u662f\u5355\u6253\u72ec\u6597\uff0cBFS \u662f\u96c6\u4f53\u884c\u52a8\u3002\u8fd9\u4e2a\u5e94\u8be5\u6bd4\u8f83\u5bb9\u6613\u7406\u89e3\u5427\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2\u3001\u65e2\u7136 BFS \u90a3\u4e48\u597d\uff0c\u4e3a\u5565 DFS \u8fd8\u8981\u5b58\u5728"),"\uff1f"),(0,i.kt)("p",null,"BFS \u53ef\u4ee5\u627e\u5230\u6700\u77ed\u8ddd\u79bb\uff0c\u4f46\u662f\u7a7a\u95f4\u590d\u6742\u5ea6\u9ad8\uff0c\u800c DFS \u7684\u7a7a\u95f4\u590d\u6742\u5ea6\u8f83\u4f4e\u3002"),(0,i.kt)("p",null,"\u8fd8\u662f\u62ff\u521a\u624d\u6211\u4eec\u5904\u7406\u4e8c\u53c9\u6811\u95ee\u9898\u7684\u4f8b\u5b50\uff0c\u5047\u8bbe\u7ed9\u4f60\u7684\u8fd9\u4e2a\u4e8c\u53c9\u6811\u662f\u6ee1\u4e8c\u53c9\u6811\uff0c\u8282\u70b9\u6570\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),"\uff0c\u5bf9\u4e8e DFS \u7b97\u6cd5\u6765\u8bf4\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6\u65e0\u975e\u5c31\u662f\u9012\u5f52\u5806\u6808\uff0c\u6700\u574f\u60c5\u51b5\u4e0b\u9876\u591a\u5c31\u662f\u6811\u7684\u9ad8\u5ea6\uff0c\u4e5f\u5c31\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"O(logN)"),"\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u4f60\u60f3\u60f3 BFS \u7b97\u6cd5\uff0c\u961f\u5217\u4e2d\u6bcf\u6b21\u90fd\u4f1a\u50a8\u5b58\u7740\u4e8c\u53c9\u6811\u4e00\u5c42\u7684\u8282\u70b9\uff0c\u8fd9\u6837\u7684\u8bdd\u6700\u574f\u60c5\u51b5\u4e0b\u7a7a\u95f4\u590d\u6742\u5ea6\u5e94\u8be5\u662f\u6811\u7684\u6700\u5e95\u5c42\u8282\u70b9\u7684\u6570\u91cf\uff0c\u4e5f\u5c31\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"N/2"),"\uff0c\u7528 Big O \u8868\u793a\u7684\u8bdd\u4e5f\u5c31\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"O(N)"),"\u3002"),(0,i.kt)("p",null,"\u7531\u6b64\u89c2\u4e4b\uff0cBFS \u8fd8\u662f\u6709\u4ee3\u4ef7\u7684\uff0c\u4e00\u822c\u6765\u8bf4\u5728\u627e\u6700\u77ed\u8def\u5f84\u7684\u65f6\u5019\u4f7f\u7528 BFS\uff0c\u5176\u4ed6\u65f6\u5019\u8fd8\u662f DFS \u4f7f\u7528\u5f97\u591a\u4e00\u4e9b\uff08\u4e3b\u8981\u662f\u9012\u5f52\u4ee3\u7801\u597d\u5199\uff09\u3002"),(0,i.kt)("p",null,"\u597d\u4e86\uff0c\u73b0\u5728\u4f60\u5bf9 BFS \u4e86\u89e3\u5f97\u8db3\u591f\u591a\u4e86\uff0c\u4e0b\u9762\u6765\u4e00\u9053\u96be\u4e00\u70b9\u7684\u9898\u76ee\uff0c\u6df1\u5316\u4e00\u4e0b\u6846\u67b6\u7684\u7406\u89e3\u5427\u3002"),(0,i.kt)("h2",{id:"\u4e09\u89e3\u5f00\u5bc6\u7801\u9501\u7684\u6700\u5c11\u6b21\u6570"},"\u4e09\u3001\u89e3\u5f00\u5bc6\u7801\u9501\u7684\u6700\u5c11\u6b21\u6570"),(0,i.kt)("p",null,"\u8fd9\u9053 LeetCode \u9898\u76ee\u662f\u7b2c 752 \u9898\uff0c\u6bd4\u8f83\u6709\u610f\u601d\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://gblobscdn.gitbook.com/assets%2F-MgaO_np8dKO0rzhRKXx%2Fsync%2Ffb52bc2342e2f4e2302f695eba0df6144fb068e4.jpg?alt=media",alt:"img"})),(0,i.kt)("p",null,"\u9898\u76ee\u4e2d\u63cf\u8ff0\u7684\u5c31\u662f\u6211\u4eec\u751f\u6d3b\u4e2d\u5e38\u89c1\u7684\u90a3\u79cd\u5bc6\u7801\u9501\uff0c\u82e5\u679c\u6ca1\u6709\u4efb\u4f55\u7ea6\u675f\uff0c\u6700\u5c11\u7684\u62e8\u52a8\u6b21\u6570\u5f88\u597d\u7b97\uff0c\u5c31\u50cf\u6211\u4eec\u5e73\u65f6\u5f00\u5bc6\u7801\u9501\u90a3\u6837\u76f4\u5954\u5bc6\u7801\u62e8\u5c31\u884c\u4e86\u3002"),(0,i.kt)("p",null,"\u4f46\u73b0\u5728\u7684\u96be\u70b9\u5c31\u5728\u4e8e\uff0c\u4e0d\u80fd\u51fa\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"deadends"),"\uff0c\u5e94\u8be5\u5982\u4f55\u8ba1\u7b97\u51fa\u6700\u5c11\u7684\u8f6c\u52a8\u6b21\u6570\u5462\uff1f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b65\uff0c\u6211\u4eec\u4e0d\u7ba1\u6240\u6709\u7684\u9650\u5236\u6761\u4ef6\uff0c\u4e0d\u7ba1")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"deadends"))," ",(0,i.kt)("strong",{parentName:"p"},"\u548c")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"target"))," ",(0,i.kt)("strong",{parentName:"p"},"\u7684\u9650\u5236\uff0c\u5c31\u601d\u8003\u4e00\u4e2a\u95ee\u9898\uff1a\u5982\u679c\u8ba9\u4f60\u8bbe\u8ba1\u4e00\u4e2a\u7b97\u6cd5\uff0c\u7a77\u4e3e\u6240\u6709\u53ef\u80fd\u7684\u5bc6\u7801\u7ec4\u5408\uff0c\u4f60\u600e\u4e48\u505a"),"\uff1f"),(0,i.kt)("p",null,"\u7a77\u4e3e\u5457\uff0c\u518d\u7b80\u5355\u4e00\u70b9\uff0c\u5982\u679c\u4f60\u53ea\u8f6c\u4e00\u4e0b\u9501\uff0c\u6709\u51e0\u79cd\u53ef\u80fd\uff1f\u603b\u5171\u6709 4 \u4e2a\u4f4d\u7f6e\uff0c\u6bcf\u4e2a\u4f4d\u7f6e\u53ef\u4ee5\u5411\u4e0a\u8f6c\uff0c\u4e5f\u53ef\u4ee5\u5411\u4e0b\u8f6c\uff0c\u4e5f\u5c31\u662f\u6709 8 \u79cd\u53ef\u80fd\u5bf9\u5427\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\u8bf4\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},'"0000"')," \u5f00\u59cb\uff0c\u8f6c\u4e00\u6b21\uff0c\u53ef\u4ee5\u7a77\u4e3e\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},'"1000", "9000", "0100", "0900"...')," \u5171 8 \u79cd\u5bc6\u7801\u3002\u7136\u540e\uff0c\u518d\u4ee5\u8fd9 8 \u79cd\u5bc6\u7801\u4f5c\u4e3a\u57fa\u7840\uff0c\u5bf9\u6bcf\u4e2a\u5bc6\u7801\u518d\u8f6c\u4e00\u4e0b\uff0c\u7a77\u4e3e\u51fa\u6240\u6709\u53ef\u80fd..."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4ed4\u7ec6\u60f3\u60f3\uff0c\u8fd9\u5c31\u53ef\u4ee5\u62bd\u8c61\u6210\u4e00\u5e45\u56fe\uff0c\u6bcf\u4e2a\u8282\u70b9\u6709 8 \u4e2a\u76f8\u90bb\u7684\u8282\u70b9"),"\uff0c\u53c8\u8ba9\u4f60\u6c42\u6700\u77ed\u8ddd\u79bb\uff0c\u8fd9\u4e0d\u5c31\u662f\u5178\u578b\u7684 BFS \u561b\uff0c\u6846\u67b6\u5c31\u53ef\u4ee5\u6d3e\u4e0a\u7528\u573a\u4e86\uff0c\u5148\u5199\u51fa\u4e00\u4e2a\u300c\u7b80\u964b\u300d\u7684 BFS \u6846\u67b6\u4ee3\u7801\u518d\u8bf4\u522b\u7684\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// \u5c06 s[j] \u5411\u4e0a\u62e8\u52a8\u4e00\u6b21\nString plusOne(String s, int j) {\n    char[] ch = s.toCharArray();\n    if (ch[j] == '9')\n        ch[j] = '0';\n    else\n        ch[j] += 1;\n    return new String(ch);\n}\n// \u5c06 s[i] \u5411\u4e0b\u62e8\u52a8\u4e00\u6b21\nString minusOne(String s, int j) {\n    char[] ch = s.toCharArray();\n    if (ch[j] == '0')\n        ch[j] = '9';\n    else\n        ch[j] -= 1;\n    return new String(ch);\n}\n\n\n// BFS \u6846\u67b6\uff0c\u6253\u5370\u51fa\u6240\u6709\u53ef\u80fd\u7684\u5bc6\u7801\nvoid BFS(String target) {\n    Queue<String> q = new LinkedList<>();\n    q.offer(\"0000\");\n\n\n    while (!q.isEmpty()) {\n        int sz = q.size();\n        /* \u5c06\u5f53\u524d\u961f\u5217\u4e2d\u7684\u6240\u6709\u8282\u70b9\u5411\u5468\u56f4\u6269\u6563 */\n        for (int i = 0; i < sz; i++) {\n            String cur = q.poll();\n            /* \u5224\u65ad\u662f\u5426\u5230\u8fbe\u7ec8\u70b9 */\n            System.out.println(cur);\n\n\n            /* \u5c06\u4e00\u4e2a\u8282\u70b9\u7684\u76f8\u90bb\u8282\u70b9\u52a0\u5165\u961f\u5217 */\n            for (int j = 0; j < 4; j++) {\n                String up = plusOne(cur, j);\n                String down = minusOne(cur, j);\n                q.offer(up);\n                q.offer(down);\n            }\n        }\n        /* \u5728\u8fd9\u91cc\u589e\u52a0\u6b65\u6570 */\n    }\n    return;\n}\n")),(0,i.kt)("p",null,"PS\uff1a\u8fd9\u6bb5\u4ee3\u7801\u5f53\u7136\u6709\u5f88\u591a\u95ee\u9898\uff0c\u4f46\u662f\u6211\u4eec\u505a\u7b97\u6cd5\u9898\u80af\u5b9a\u4e0d\u662f\u4e00\u8e74\u800c\u5c31\u7684\uff0c\u800c\u662f\u4ece\u7b80\u964b\u5230\u5b8c\u7f8e\u7684\u3002\u4e0d\u8981\u5b8c\u7f8e\u4e3b\u4e49\uff0c\u54b1\u8981\u6162\u6162\u6765\uff0c\u597d\u4e0d\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd9\u6bb5 BFS \u4ee3\u7801\u5df2\u7ecf\u80fd\u591f\u7a77\u4e3e\u6240\u6709\u53ef\u80fd\u7684\u5bc6\u7801\u7ec4\u5408\u4e86\uff0c\u4f46\u662f\u663e\u7136\u4e0d\u80fd\u5b8c\u6210\u9898\u76ee\uff0c\u6709\u5982\u4e0b\u95ee\u9898\u9700\u8981\u89e3\u51b3"),"\uff1a"),(0,i.kt)("p",null,"1\u3001\u4f1a\u8d70\u56de\u5934\u8def\u3002\u6bd4\u5982\u8bf4\u6211\u4eec\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},'"0000"')," \u62e8\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},'"1000"'),"\uff0c\u4f46\u662f\u7b49\u4ece\u961f\u5217\u62ff\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},'"1000"')," \u65f6\uff0c\u8fd8\u4f1a\u62e8\u51fa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},'"0000"'),"\uff0c\u8fd9\u6837\u7684\u8bdd\u4f1a\u4ea7\u751f\u6b7b\u5faa\u73af\u3002"),(0,i.kt)("p",null,"2\u3001\u6ca1\u6709\u7ec8\u6b62\u6761\u4ef6\uff0c\u6309\u7167\u9898\u76ee\u8981\u6c42\uff0c\u6211\u4eec\u627e\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," \u5c31\u5e94\u8be5\u7ed3\u675f\u5e76\u8fd4\u56de\u62e8\u52a8\u7684\u6b21\u6570\u3002"),(0,i.kt)("p",null,"3\u3001\u6ca1\u6709\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"deadends")," \u7684\u5904\u7406\uff0c\u6309\u9053\u7406\u8fd9\u4e9b\u300c\u6b7b\u4ea1\u5bc6\u7801\u300d\u662f\u4e0d\u80fd\u51fa\u73b0\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u4f60\u9047\u5230\u8fd9\u4e9b\u5bc6\u7801\u7684\u65f6\u5019\u9700\u8981\u8df3\u8fc7\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u80fd\u591f\u770b\u61c2\u4e0a\u9762\u90a3\u6bb5\u4ee3\u7801\uff0c\u771f\u5f97\u7ed9\u4f60\u9f13\u638c\uff0c\u53ea\u8981\u6309\u7167 BFS \u6846\u67b6\u5728\u5bf9\u5e94\u7684\u4f4d\u7f6e\u7a0d\u4f5c\u4fee\u6539\u5373\u53ef\u4fee\u590d\u8fd9\u4e9b\u95ee\u9898\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'int openLock(String[] deadends, String target) {\n    // \u8bb0\u5f55\u9700\u8981\u8df3\u8fc7\u7684\u6b7b\u4ea1\u5bc6\u7801\n    Set<String> deads = new HashSet<>();\n    for (String s : deadends) deads.add(s);\n    // \u8bb0\u5f55\u5df2\u7ecf\u7a77\u4e3e\u8fc7\u7684\u5bc6\u7801\uff0c\u9632\u6b62\u8d70\u56de\u5934\u8def\n    Set<String> visited = new HashSet<>();\n    Queue<String> q = new LinkedList<>();\n    // \u4ece\u8d77\u70b9\u5f00\u59cb\u542f\u52a8\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\n    int step = 0;\n    q.offer("0000");\n    visited.add("0000");\n\n\n    while (!q.isEmpty()) {\n        int sz = q.size();\n        /* \u5c06\u5f53\u524d\u961f\u5217\u4e2d\u7684\u6240\u6709\u8282\u70b9\u5411\u5468\u56f4\u6269\u6563 */\n        for (int i = 0; i < sz; i++) {\n            String cur = q.poll();\n\n\n            /* \u5224\u65ad\u662f\u5426\u5230\u8fbe\u7ec8\u70b9 */\n            if (deads.contains(cur))\n                continue;\n            if (cur.equals(target))\n                return step;\n\n\n            /* \u5c06\u4e00\u4e2a\u8282\u70b9\u7684\u672a\u904d\u5386\u76f8\u90bb\u8282\u70b9\u52a0\u5165\u961f\u5217 */\n            for (int j = 0; j < 4; j++) {\n                String up = plusOne(cur, j);\n                if (!visited.contains(up)) {\n                    q.offer(up);\n                    visited.add(up);\n                }\n                String down = minusOne(cur, j);\n                if (!visited.contains(down)) {\n                    q.offer(down);\n                    visited.add(down);\n                }\n            }\n        }\n        /* \u5728\u8fd9\u91cc\u589e\u52a0\u6b65\u6570 */\n        step++;\n    }\n    // \u5982\u679c\u7a77\u4e3e\u5b8c\u90fd\u6ca1\u627e\u5230\u76ee\u6807\u5bc6\u7801\uff0c\u90a3\u5c31\u662f\u627e\u4e0d\u5230\u4e86\n    return -1;\n}\n')),(0,i.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u5c31\u89e3\u51b3\u8fd9\u9053\u9898\u76ee\u4e86\u3002\u6709\u4e00\u4e2a\u6bd4\u8f83\u5c0f\u7684\u4f18\u5316\uff1a\u53ef\u4ee5\u4e0d\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"dead")," \u8fd9\u4e2a\u54c8\u5e0c\u96c6\u5408\uff0c\u53ef\u4ee5\u76f4\u63a5\u5c06\u8fd9\u4e9b\u5143\u7d20\u521d\u59cb\u5316\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"visited")," \u96c6\u5408\u4e2d\uff0c\u6548\u679c\u662f\u4e00\u6837\u7684\uff0c\u53ef\u80fd\u66f4\u52a0\u4f18\u96c5\u4e00\u4e9b\u3002"),(0,i.kt)("h2",{id:"\u56db\u53cc\u5411-bfs-\u4f18\u5316"},"\u56db\u3001\u53cc\u5411 BFS \u4f18\u5316"),(0,i.kt)("p",null,"\u4f60\u4ee5\u4e3a\u5230\u8fd9\u91cc BFS \u7b97\u6cd5\u5c31\u7ed3\u675f\u4e86\uff1f\u6070\u6070\u76f8\u53cd\u3002BFS \u7b97\u6cd5\u8fd8\u6709\u4e00\u79cd\u7a0d\u5fae\u9ad8\u7ea7\u4e00\u70b9\u7684\u4f18\u5316\u601d\u8def\uff1a",(0,i.kt)("strong",{parentName:"p"},"\u53cc\u5411 BFS"),"\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u63d0\u9ad8\u7b97\u6cd5\u7684\u6548\u7387\u3002"),(0,i.kt)("p",null,"\u7bc7\u5e45\u6240\u9650\uff0c\u8fd9\u91cc\u5c31\u63d0\u4e00\u4e0b\u533a\u522b\uff1a",(0,i.kt)("strong",{parentName:"p"},"\u4f20\u7edf\u7684 BFS \u6846\u67b6\u5c31\u662f\u4ece\u8d77\u70b9\u5f00\u59cb\u5411\u56db\u5468\u6269\u6563\uff0c\u9047\u5230\u7ec8\u70b9\u65f6\u505c\u6b62\uff1b\u800c\u53cc\u5411 BFS \u5219\u662f\u4ece\u8d77\u70b9\u548c\u7ec8\u70b9\u540c\u65f6\u5f00\u59cb\u6269\u6563\uff0c\u5f53\u4e24\u8fb9\u6709\u4ea4\u96c6\u7684\u65f6\u5019\u505c\u6b62"),"\u3002"),(0,i.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8fd9\u6837\u80fd\u591f\u80fd\u591f\u63d0\u5347\u6548\u7387\u5462\uff1f\u5176\u5b9e\u4ece Big O \u8868\u793a\u6cd5\u5206\u6790\u7b97\u6cd5\u590d\u6742\u5ea6\u7684\u8bdd\uff0c\u5b83\u4fe9\u7684\u6700\u574f\u590d\u6742\u5ea6\u90fd\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"O(N)"),"\uff0c\u4f46\u662f\u5b9e\u9645\u4e0a\u53cc\u5411 BFS \u786e\u5b9e\u4f1a\u5feb\u4e00\u4e9b\uff0c\u6211\u7ed9\u4f60\u753b\u4e24\u5f20\u56fe\u770b\u4e00\u773c\u5c31\u660e\u767d\u4e86\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://gblobscdn.gitbook.com/assets%2F-MgaO_np8dKO0rzhRKXx%2Fsync%2F96d7b1ab7db024a1831170c128f5dcacfb68abb8.jpeg?alt=media",alt:"img"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://gblobscdn.gitbook.com/assets%2F-MgaO_np8dKO0rzhRKXx%2Fsync%2F946f50b8251df56bfaa1d60a133affd736e4ebb3.jpeg?alt=media",alt:"img"})),(0,i.kt)("p",null,"\u56fe\u793a\u4e2d\u7684\u6811\u5f62\u7ed3\u6784\uff0c\u5982\u679c\u7ec8\u70b9\u5728\u6700\u5e95\u90e8\uff0c\u6309\u7167\u4f20\u7edf BFS \u7b97\u6cd5\u7684\u7b56\u7565\uff0c\u4f1a\u628a\u6574\u68f5\u6811\u7684\u8282\u70b9\u90fd\u641c\u7d22\u4e00\u904d\uff0c\u6700\u540e\u627e\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),"\uff1b\u800c\u53cc\u5411 BFS \u5176\u5b9e\u53ea\u904d\u5386\u4e86\u534a\u68f5\u6811\u5c31\u51fa\u73b0\u4e86\u4ea4\u96c6\uff0c\u4e5f\u5c31\u662f\u627e\u5230\u4e86\u6700\u77ed\u8ddd\u79bb\u3002\u4ece\u8fd9\u4e2a\u4f8b\u5b50\u53ef\u4ee5\u76f4\u89c2\u5730\u611f\u53d7\u5230\uff0c\u53cc\u5411 BFS \u662f\u8981\u6bd4\u4f20\u7edf BFS \u9ad8\u6548\u7684\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u8fc7\uff0c\u53cc\u5411 BFS \u4e5f\u6709\u5c40\u9650\uff0c\u56e0\u4e3a\u4f60\u5fc5\u987b\u77e5\u9053\u7ec8\u70b9\u5728\u54ea\u91cc"),"\u3002\u6bd4\u5982\u6211\u4eec\u521a\u624d\u8ba8\u8bba\u7684\u4e8c\u53c9\u6811\u6700\u5c0f\u9ad8\u5ea6\u7684\u95ee\u9898\uff0c\u4f60\u4e00\u5f00\u59cb\u6839\u672c\u5c31\u4e0d\u77e5\u9053\u7ec8\u70b9\u5728\u54ea\u91cc\uff0c\u4e5f\u5c31\u65e0\u6cd5\u4f7f\u7528\u53cc\u5411 BFS\uff1b\u4f46\u662f\u7b2c\u4e8c\u4e2a\u5bc6\u7801\u9501\u7684\u95ee\u9898\uff0c\u662f\u53ef\u4ee5\u4f7f\u7528\u53cc\u5411 BFS \u7b97\u6cd5\u6765\u63d0\u9ad8\u6548\u7387\u7684\uff0c\u4ee3\u7801\u7a0d\u52a0\u4fee\u6539\u5373\u53ef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'int openLock(String[] deadends, String target) {\n    Set<String> deads = new HashSet<>();\n    for (String s : deadends) deads.add(s);\n    // \u7528\u96c6\u5408\u4e0d\u7528\u961f\u5217\uff0c\u53ef\u4ee5\u5feb\u901f\u5224\u65ad\u5143\u7d20\u662f\u5426\u5b58\u5728\n    Set<String> q1 = new HashSet<>();\n    Set<String> q2 = new HashSet<>();\n    Set<String> visited = new HashSet<>();\n\n\n    int step = 0;\n    q1.add("0000");\n    q2.add(target);\n\n\n    while (!q1.isEmpty() && !q2.isEmpty()) {\n        // \u54c8\u5e0c\u96c6\u5408\u5728\u904d\u5386\u7684\u8fc7\u7a0b\u4e2d\u4e0d\u80fd\u4fee\u6539\uff0c\u7528 temp \u5b58\u50a8\u6269\u6563\u7ed3\u679c\n        Set<String> temp = new HashSet<>();\n\n\n        /* \u5c06 q1 \u4e2d\u7684\u6240\u6709\u8282\u70b9\u5411\u5468\u56f4\u6269\u6563 */\n        for (String cur : q1) {\n            /* \u5224\u65ad\u662f\u5426\u5230\u8fbe\u7ec8\u70b9 */\n            if (deads.contains(cur))\n                continue;\n            if (q2.contains(cur))\n                return step;\n            visited.add(cur);\n\n\n            /* \u5c06\u4e00\u4e2a\u8282\u70b9\u7684\u672a\u904d\u5386\u76f8\u90bb\u8282\u70b9\u52a0\u5165\u96c6\u5408 */\n            for (int j = 0; j < 4; j++) {\n                String up = plusOne(cur, j);\n                if (!visited.contains(up))\n                    temp.add(up);\n                String down = minusOne(cur, j);\n                if (!visited.contains(down))\n                    temp.add(down);\n            }\n        }\n        /* \u5728\u8fd9\u91cc\u589e\u52a0\u6b65\u6570 */\n        step++;\n        // temp \u76f8\u5f53\u4e8e q1\n        // \u8fd9\u91cc\u4ea4\u6362 q1 q2\uff0c\u4e0b\u4e00\u8f6e while \u5c31\u662f\u6269\u6563 q2\n        q1 = q2;\n        q2 = temp;\n    }\n    return -1;\n}\n')),(0,i.kt)("p",null,"\u53cc\u5411 BFS \u8fd8\u662f\u9075\u5faa BFS \u7b97\u6cd5\u6846\u67b6\u7684\uff0c\u53ea\u662f",(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u518d\u4f7f\u7528\u961f\u5217\uff0c\u800c\u662f\u4f7f\u7528 HashSet \u65b9\u4fbf\u5feb\u901f\u5224\u65ad\u4e24\u4e2a\u96c6\u5408\u662f\u5426\u6709\u4ea4\u96c6"),"\u3002"),(0,i.kt)("p",null,"\u53e6\u5916\u7684\u4e00\u4e2a\u6280\u5de7\u70b9\u5c31\u662f ",(0,i.kt)("strong",{parentName:"p"},"while \u5faa\u73af\u7684\u6700\u540e\u4ea4\u6362")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"q1"))," ",(0,i.kt)("strong",{parentName:"p"},"\u548c")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"q2"))," ",(0,i.kt)("strong",{parentName:"p"},"\u7684\u5185\u5bb9"),"\uff0c\u6240\u4ee5\u53ea\u8981\u9ed8\u8ba4\u6269\u6563 ",(0,i.kt)("inlineCode",{parentName:"p"},"q1")," \u5c31\u76f8\u5f53\u4e8e\u8f6e\u6d41\u6269\u6563 ",(0,i.kt)("inlineCode",{parentName:"p"},"q1")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"q2"),"\u3002"),(0,i.kt)("p",null,"\u5176\u5b9e\u53cc\u5411 BFS \u8fd8\u6709\u4e00\u4e2a\u4f18\u5316\uff0c\u5c31\u662f\u5728 while \u5faa\u73af\u5f00\u59cb\u65f6\u505a\u4e00\u4e2a\u5224\u65ad\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// ...\nwhile (!q1.isEmpty() && !q2.isEmpty()) {\n    if (q1.size() > q2.size()) {\n        // \u4ea4\u6362 q1 \u548c q2\n        temp = q1;\n        q1 = q2;\n        q2 = temp;\n    }\n    // ...\n")),(0,i.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8fd9\u662f\u4e00\u4e2a\u4f18\u5316\u5462\uff1f"),(0,i.kt)("p",null,"\u56e0\u4e3a\u6309\u7167 BFS \u7684\u903b\u8f91\uff0c\u961f\u5217\uff08\u96c6\u5408\uff09\u4e2d\u7684\u5143\u7d20\u8d8a\u591a\uff0c\u6269\u6563\u4e4b\u540e\u65b0\u7684\u961f\u5217\uff08\u96c6\u5408\uff09\u4e2d\u7684\u5143\u7d20\u5c31\u8d8a\u591a\uff1b\u5728\u53cc\u5411 BFS \u7b97\u6cd5\u4e2d\uff0c\u5982\u679c\u6211\u4eec\u6bcf\u6b21\u90fd\u9009\u62e9\u4e00\u4e2a\u8f83\u5c0f\u7684\u96c6\u5408\u8fdb\u884c\u6269\u6563\uff0c\u90a3\u4e48\u5360\u7528\u7684\u7a7a\u95f4\u589e\u957f\u901f\u5ea6\u5c31\u4f1a\u6162\u4e00\u4e9b\uff0c\u6548\u7387\u5c31\u4f1a\u9ad8\u4e00\u4e9b\u3002"),(0,i.kt)("p",null,"\u4e0d\u8fc7\u8bdd\u8bf4\u56de\u6765\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u65e0\u8bba\u4f20\u7edf BFS \u8fd8\u662f\u53cc\u5411 BFS\uff0c\u65e0\u8bba\u505a\u4e0d\u505a\u4f18\u5316\uff0c\u4ece Big O \u8861\u91cf\u6807\u51c6\u6765\u770b\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u662f\u4e00\u6837\u7684"),"\uff0c\u53ea\u80fd\u8bf4\u53cc\u5411 BFS \u662f\u4e00\u79cd trick\uff0c\u7b97\u6cd5\u8fd0\u884c\u7684\u901f\u5ea6\u4f1a\u76f8\u5bf9\u5feb\u4e00\u70b9\uff0c\u638c\u63e1\u4e0d\u638c\u63e1\u5176\u5b9e\u90fd\u65e0\u6240\u8c13\u3002\u6700\u5173\u952e\u7684\u662f\u628a BFS \u901a\u7528\u6846\u67b6\u8bb0\u4e0b\u6765\uff0c\u53cd\u6b63\u6240\u6709 BFS \u7b97\u6cd5\u90fd\u53ef\u4ee5\u7528\u5b83\u5957\u51fa\u89e3\u6cd5\u3002"))}c.isMDXComponent=!0}}]);