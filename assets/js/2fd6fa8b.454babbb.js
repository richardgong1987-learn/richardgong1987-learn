"use strict";(self.webpackChunkrichardgong_1987_learn=self.webpackChunkrichardgong_1987_learn||[]).push([[9509],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const a={},u="4.5 2Sum\u95ee\u9898\u7684\u6838\u5fc3\u601d\u60f3",i={unversionedId:"c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u7b97\u6cd5\u601d\u7ef4\u7cfb\u5217/twoSum\u95ee\u9898\u7684\u6838\u5fc3\u601d\u60f3",id:"c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u7b97\u6cd5\u601d\u7ef4\u7cfb\u5217/twoSum\u95ee\u9898\u7684\u6838\u5fc3\u601d\u60f3",title:"4.5 2Sum\u95ee\u9898\u7684\u6838\u5fc3\u601d\u60f3",description:"\u672c\u6587\u5bf9\u5e94\u7684\u529b\u6263\u9898\u76ee\uff1a",source:"@site/docs/c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u7b97\u6cd5\u601d\u7ef4\u7cfb\u5217/twoSum\u95ee\u9898\u7684\u6838\u5fc3\u601d\u60f3.md",sourceDirName:"c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u7b97\u6cd5\u601d\u7ef4\u7cfb\u5217",slug:"/c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u7b97\u6cd5\u601d\u7ef4\u7cfb\u5217/twoSum\u95ee\u9898\u7684\u6838\u5fc3\u601d\u60f3",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u7b97\u6cd5\u601d\u7ef4\u7cfb\u5217/twoSum\u95ee\u9898\u7684\u6838\u5fc3\u601d\u60f3",draft:!1,editUrl:"https://github.com/richardgong1987-learn/richardgong1987-learn/edit/master/website/docs/c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u7b97\u6cd5\u601d\u7ef4\u7cfb\u5217/twoSum\u95ee\u9898\u7684\u6838\u5fc3\u601d\u60f3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4.2 \u56de\u6eaf\u7b97\u6cd5\u6700\u4f73\u5b9e\u8df5\uff1a\u89e3\u6570\u72ec",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u7b97\u6cd5\u601d\u7ef4\u7cfb\u5217/sudoku"},next:{title:"1.6 \u6211\u5199\u4e86\u9996\u8bd7\uff0c\u4fdd\u4f60\u95ed\u7740\u773c\u775b\u5199\u4e8c\u5206\u67e5\u627e\u7b97\u6cd5",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u7b97\u6cd5\u601d\u7ef4\u7cfb\u5217/\u4e8c\u5206\u67e5\u627e\u8be6\u89e3"}},c={},l=[{value:"4.5.1 TwoSum I",id:"451-twosum-i",level:3},{value:"4.5.2 TwoSum II",id:"452-twosum-ii",level:3}],s={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"45-2sum\u95ee\u9898\u7684\u6838\u5fc3\u601d\u60f3"},"4.5 2Sum\u95ee\u9898\u7684\u6838\u5fc3\u601d\u60f3"),(0,o.kt)("p",null,"\u672c\u6587\u5bf9\u5e94\u7684\u529b\u6263\u9898\u76ee\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/two-sum"},"1.\u4e24\u6570\u4e4b\u548c")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/two-sum-iii-data-structure-design"},"170.\u4e24\u6570\u4e4b\u548c III - \u6570\u636e\u7ed3\u6784\u8bbe\u8ba1")),(0,o.kt)("h3",{id:"451-twosum-i"},"4.5.1 TwoSum I"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u54c8\u5e0c\u8868\u8bb0\u5f55\u5143\u7d20\u503c\u5230\u7d22\u5f15\u7684\u6620\u5c04\uff0c\u51cf\u5c11\u65f6\u95f4\u590d\u6742\u5ea6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"int[] twoSum(int[] nums, int target) {\n    int n = nums.length;\n    index<Integer, Integer> index = new HashMap<>();\n    // \u6784\u9020\u4e00\u4e2a\u54c8\u5e0c\u8868\uff1a\u5143\u7d20\u6620\u5c04\u5230\u76f8\u5e94\u7684\u7d22\u5f15\n    for (int i = 0; i < n; i++)\n        index.put(nums[i], i);\n    \n    for (int i = 0; i < n; i++) {\n        int other = target - nums[i];\n        // \u5982\u679c other \u5b58\u5728\u4e14\u4e0d\u662f nums[i] \u672c\u8eab\n        if (index.containsKey(other) && index.get(other) != i)\n            return new int[] {i, index.get(other)};\n    }\n    \n    return new int[] {-1, -1};\n}\n")),(0,o.kt)("h3",{id:"452-twosum-ii"},"4.5.2 TwoSum II"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4eff\u7167\u4e0a\u4e00\u9053\u9898\u76ee\uff0c\u4f7f\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\u8f85\u52a9 ",(0,o.kt)("inlineCode",{parentName:"p"},"find")," \u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class TwoSum {\n    Map<Integer, Integer> freq = new HashMap<>();\n\n    public void add(int number) {\n        // \u8bb0\u5f55 number \u51fa\u73b0\u7684\u6b21\u6570\n        freq.put(number, freq.getOrDefault(number, 0) + 1);\n    }\n    \n    public boolean find(int value) {\n        for (Integer key : freq.keySet()) {\n            int other = value - key;\n            // \u60c5\u51b5\u4e00\n            if (other == key && freq.get(key) > 1)\n                return true;\n            // \u60c5\u51b5\u4e8c\n            if (other != key && freq.containsKey(other))\n                return true;\n        }\n        return false;\n    }\n}\n")))}m.isMDXComponent=!0}}]);