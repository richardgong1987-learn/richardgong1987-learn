"use strict";(self.webpackChunkrichardgong_1987_learn=self.webpackChunkrichardgong_1987_learn||[]).push([[5786],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=l(t),g=a,d=p["".concat(o,".").concat(g)]||p[g]||c[g]||i;return t?r.createElement(d,u(u({ref:n},s),{},{components:t})):r.createElement(d,u({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,u=new Array(i);u[0]=g;var m={};for(var o in n)hasOwnProperty.call(n,o)&&(m[o]=n[o]);m.originalType=e,m[p]="string"==typeof e?e:a,u[1]=m;for(var l=2;l<i;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},62487:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return l}});var r=t(83117),a=(t(67294),t(3905));const i={},u="\u4e00\u4e2a\u51fd\u6570\u79d2\u6740 2Sum 3Sum 4Sum \u95ee\u9898",m={unversionedId:"c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/10",id:"c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/10",title:"\u4e00\u4e2a\u51fd\u6570\u79d2\u6740 2Sum 3Sum 4Sum \u95ee\u9898",description:"\u7ecf\u5e38\u5237 LeetCode \u7684\u8bfb\u8005\u80af\u5b9a\u77e5\u9053\u9f0e\u9f0e\u6709\u540d\u7684 twoSum \u95ee\u9898\uff0c\u6211\u4eec\u7684\u65e7\u6587 Two Sum \u95ee\u9898\u7684\u6838\u5fc3\u601d\u60f3 \u5bf9 twoSum \u7684\u51e0\u4e2a\u53d8\u79cd\u505a\u4e86\u89e3\u6790\u3002",source:"@site/docs/c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/10.md",sourceDirName:"c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1",slug:"/c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/10",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/10",draft:!1,editUrl:"https://github.com/richardgong1987-learn/richardgong1987-learn/edit/master/website/docs/c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/10.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b66\u4e60\u7b97\u6cd5\u548c\u5237\u9898\u7684\u6846\u67b6\u601d\u7ef4",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/"},next:{title:"\u5355\u94fe\u8868\u7684\u516d\u5927\u89e3\u9898\u5957\u8def",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/algorithm_cheat_sheet/1/11"}},o={},l=[{value:"\u4e00\u3001twoSum \u95ee\u9898",id:"\u4e00twosum-\u95ee\u9898",level:3},{value:"\u4e8c\u30013Sum \u95ee\u9898",id:"\u4e8c3sum-\u95ee\u9898",level:3},{value:"\u4e09\u30014Sum \u95ee\u9898",id:"\u4e094sum-\u95ee\u9898",level:3},{value:"\u56db\u3001100Sum \u95ee\u9898\uff1f",id:"\u56db100sum-\u95ee\u9898",level:3}],s={toc:l};function p(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e00\u4e2a\u51fd\u6570\u79d2\u6740-2sum-3sum-4sum-\u95ee\u9898"},"\u4e00\u4e2a\u51fd\u6570\u79d2\u6740 2Sum 3Sum 4Sum \u95ee\u9898"),(0,a.kt)("p",null,"\u7ecf\u5e38\u5237 LeetCode \u7684\u8bfb\u8005\u80af\u5b9a\u77e5\u9053\u9f0e\u9f0e\u6709\u540d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"twoSum")," \u95ee\u9898\uff0c\u6211\u4eec\u7684\u65e7\u6587 ",(0,a.kt)("a",{parentName:"p",href:"http://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484474&idx=1&sn=dfbadbe6e17d695a1907e2adcd9f0d3c&chksm=9bd7fa32aca0732406829a6d1de34b7e3144af239cc25e014f5349d73cea952d5f2b0473345a&scene=21#wechat_redirect"},"Two Sum \u95ee\u9898\u7684\u6838\u5fc3\u601d\u60f3")," \u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"twoSum")," \u7684\u51e0\u4e2a\u53d8\u79cd\u505a\u4e86\u89e3\u6790\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u9664\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"twoSum")," \u95ee\u9898\uff0cLeetCode \u4e0a\u9762\u8fd8\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"3Sum"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"4Sum")," \u95ee\u9898\uff0c\u6211\u4f30\u8ba1\u4ee5\u540e\u51fa\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"5Sum"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"6Sum")," \u4e5f\u4e0d\u662f\u4e0d\u53ef\u80fd\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\uff0c\u5bf9\u4e8e\u8fd9\u79cd\u95ee\u9898\u6709\u6ca1\u6709\u4ec0\u4e48\u597d\u529e\u6cd5\u7528\u5957\u8def\u89e3\u51b3\u5462\uff1f\u672c\u6587\u5c31\u7531\u6d45\u5165\u6df1\uff0c\u5c42\u5c42\u63a8\u8fdb\uff0c\u7528\u4e00\u4e2a\u51fd\u6570\u6765\u89e3\u51b3\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"nSum")," \u7c7b\u578b\u7684\u95ee\u9898\u3002"),(0,a.kt)("h3",{id:"\u4e00twosum-\u95ee\u9898"},"\u4e00\u3001twoSum \u95ee\u9898"),(0,a.kt)("p",null,"\u529b\u6263\u4e0a\u7684 twoSum \u95ee\u9898\uff0c\u9898\u76ee\u8981\u6c42\u8fd4\u56de\u7684\u662f\u7d22\u5f15\uff0c\u8fd9\u91cc\u6211\u6765\u7f16\u4e00\u9053 twoSum \u9898\u76ee\uff0c\u4e0d\u8981\u8fd4\u56de\u7d22\u5f15\uff0c\u8fd4\u56de\u5143\u7d20\u7684\u503c\uff1a"),(0,a.kt)("p",null,"\u5982\u679c\u5047\u8bbe\u8f93\u5165\u4e00\u4e2a\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," \u548c\u4e00\u4e2a\u76ee\u6807\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"target"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u4f60\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"strong"},"nums")," \u4e2d\u80fd\u591f\u51d1\u51fa ",(0,a.kt)("inlineCode",{parentName:"strong"},"target")," \u7684\u4e24\u4e2a\u5143\u7d20\u7684\u503c"),"\uff0c\u6bd4\u5982\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"nums = [5,3,1,6], target = 9"),"\uff0c\u90a3\u4e48\u7b97\u6cd5\u8fd4\u56de\u4e24\u4e2a\u5143\u7d20 ",(0,a.kt)("inlineCode",{parentName:"p"},"[3,6]"),"\u3002\u53ef\u4ee5\u5047\u8bbe\u53ea\u6709\u4e14\u4ec5\u6709\u4e00\u5bf9\u513f\u5143\u7d20\u53ef\u4ee5\u51d1\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"target"),"\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5148\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," \u6392\u5e8f\uff0c\u7136\u540e\u5229\u7528\u524d\u6587\u300c",(0,a.kt)("a",{parentName:"p",href:"http://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484505&idx=1&sn=0e9517f7c4021df0e6146c6b2b0c4aba&chksm=9bd7fa51aca07347009c591c403b3228f41617806429e738165bd58d60220bf8f15f92ff8a2e&scene=21#wechat_redirect"},"\u53cc\u6307\u9488\u6280\u5de7\u6c47\u603b"),"\u300d\u5199\u8fc7\u7684\u5de6\u53f3\u53cc\u6307\u9488\u6280\u5de7\uff0c\u4ece\u4e24\u7aef\u76f8\u5411\u800c\u884c\u5c31\u884c\u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"vector<int> twoSum(vector<int>& nums, int target) {\n    // \u5148\u5bf9\u6570\u7ec4\u6392\u5e8f\n    sort(nums.begin(), nums.end());\n    // \u5de6\u53f3\u6307\u9488\n    int lo = 0, hi = nums.size() - 1;\n    while (lo < hi) {\n        int sum = nums[lo] + nums[hi];\n        // \u6839\u636e sum \u548c target \u7684\u6bd4\u8f83\uff0c\u79fb\u52a8\u5de6\u53f3\u6307\u9488\n        if (sum < target) {\n            lo++;\n        } else if (sum > target) {\n            hi--;\n        } else if (sum == target) {\n            return {nums[lo], nums[hi]};\n        }\n    }\n    return {};\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4e0d\u8fc7\u6211\u4eec\u8981\u7ee7\u7eed\u9b54\u6539\u9898\u76ee\uff0c\u628a\u8fd9\u4e2a\u9898\u76ee\u53d8\u5f97\u66f4\u6cdb\u5316\uff0c\u66f4\u56f0\u96be\u4e00\u70b9\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"nums")," \u4e2d\u53ef\u80fd\u6709\u591a\u5bf9\u513f\u5143\u7d20\u4e4b\u548c\u90fd\u7b49\u4e8e ",(0,a.kt)("inlineCode",{parentName:"strong"},"target"),"\uff0c\u8bf7\u4f60\u7684\u7b97\u6cd5\u8fd4\u56de\u6240\u6709\u548c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"strong"},"target")," \u7684\u5143\u7d20\u5bf9\u513f\uff0c\u5176\u4e2d\u4e0d\u80fd\u51fa\u73b0\u91cd\u590d"),"\u3002"),(0,a.kt)("p",null,"\u51fd\u6570\u7b7e\u540d\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"vector<vector<int>> twoSumTarget(vector<int>& nums, int target);\n")),(0,a.kt)("p",null,"\u6bd4\u5982\u8bf4\u8f93\u5165\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"nums = [1,3,1,2,2,3], target = 4"),"\uff0c\u90a3\u4e48\u7b97\u6cd5\u8fd4\u56de\u7684\u7ed3\u679c\u5c31\u662f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"[[1,3],[2,2]]"),"\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4fee\u6539\u540e\u7684\u95ee\u9898\uff0c\u5173\u952e\u96be\u70b9\u662f\u73b0\u5728\u53ef\u80fd\u6709\u591a\u4e2a\u548c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," \u7684\u6570\u5bf9\u513f\uff0c\u8fd8\u4e0d\u80fd\u91cd\u590d\uff0c\u6bd4\u5982\u4e0a\u8ff0\u4f8b\u5b50\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"[1,3]")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"[3,1]")," \u5c31\u7b97\u91cd\u590d\uff0c\u53ea\u80fd\u7b97\u4e00\u6b21\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u57fa\u672c\u601d\u8def\u80af\u5b9a\u8fd8\u662f\u6392\u5e8f\u52a0\u53cc\u6307\u9488\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"vector<vector<int>> twoSumTarget(vector<int>& nums, int target {\n    // \u5148\u5bf9\u6570\u7ec4\u6392\u5e8f\n    sort(nums.begin(), nums.end());\n    vector<vector<int>> res;\n    int lo = 0, hi = nums.size() - 1;\n    while (lo < hi) {\n        int sum = nums[lo] + nums[hi];\n        // \u6839\u636e sum \u548c target \u7684\u6bd4\u8f83\uff0c\u79fb\u52a8\u5de6\u53f3\u6307\u9488\n        if      (sum < target) lo++;\n        else if (sum > target) hi--;\n        else {\n            res.push_back({lo, hi});\n            lo++; hi--;\n        }\n    }\n    return res;\n}\n")),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u8fd9\u6837\u5b9e\u73b0\u4f1a\u9020\u6210\u91cd\u590d\u7684\u7ed3\u679c\uff0c\u6bd4\u5982\u8bf4 ",(0,a.kt)("inlineCode",{parentName:"p"},"nums = [1,1,1,2,2,3,3], target = 4"),"\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"[1,3]")," \u80af\u5b9a\u4f1a\u91cd\u590d\u3002"),(0,a.kt)("p",null,"\u51fa\u95ee\u9898\u7684\u5730\u65b9\u5728\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"sum == target")," \u6761\u4ef6\u7684 if \u5206\u652f\uff0c\u5f53\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"res")," \u52a0\u5165\u4e00\u6b21\u7ed3\u679c\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"lo")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"hi")," \u4e0d\u5e94\u8be5\u6539\u53d8 1 \u7684\u540c\u65f6\uff0c\u8fd8\u5e94\u8be5\u8df3\u8fc7\u6240\u6709\u91cd\u590d\u7684\u5143\u7d20\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u56fe\u7247",src:t(45713).Z,width:"1080",height:"608"})),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u53ef\u4ee5\u5bf9\u53cc\u6307\u9488\u7684 while \u5faa\u73af\u505a\u51fa\u5982\u4e0b\u4fee\u6539\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"while (lo < hi) {\n    int sum = nums[lo] + nums[hi];\n    // \u8bb0\u5f55\u7d22\u5f15 lo \u548c hi \u6700\u521d\u5bf9\u5e94\u7684\u503c\n    int left = nums[lo], right = nums[hi];\n    if (sum < target)      lo++;\n    else if (sum > target) hi--;\n    else {\n        res.push_back({left, right});\n        // \u8df3\u8fc7\u6240\u6709\u91cd\u590d\u7684\u5143\u7d20\n        while (lo < hi && nums[lo] == left) lo++;\n        while (lo < hi && nums[hi] == right) hi--;\n    }\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u4fdd\u8bc1\u4e00\u4e2a\u7b54\u6848\u53ea\u88ab\u6dfb\u52a0\u4e00\u6b21\uff0c\u91cd\u590d\u7684\u7ed3\u679c\u90fd\u4f1a\u88ab\u8df3\u8fc7\uff0c\u53ef\u4ee5\u5f97\u5230\u6b63\u786e\u7684\u7b54\u6848\u3002\u4e0d\u8fc7\uff0c\u53d7\u8fd9\u4e2a\u601d\u8def\u7684\u542f\u53d1\uff0c\u5176\u5b9e\u524d\u4e24\u4e2a if \u5206\u652f\u4e5f\u662f\u53ef\u4ee5\u505a\u4e00\u70b9\u6548\u7387\u4f18\u5316\uff0c\u8df3\u8fc7\u76f8\u540c\u7684\u5143\u7d20\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"vector<vector<int>> twoSumTarget(vector<int>& nums, int target) {\n    // nums \u6570\u7ec4\u5fc5\u987b\u6709\u5e8f\n    sort(nums.begin(), nums.end());\n    int lo = 0, hi = nums.size() - 1;\n    vector<vector<int>> res;\n    while (lo < hi) {\n        int sum = nums[lo] + nums[hi];\n        int left = nums[lo], right = nums[hi];\n        if (sum < target) {\n            while (lo < hi && nums[lo] == left) lo++;\n        } else if (sum > target) {\n            while (lo < hi && nums[hi] == right) hi--;\n        } else {\n            res.push_back({left, right});\n            while (lo < hi && nums[lo] == left) lo++;\n            while (lo < hi && nums[hi] == right) hi--;\n        }\n    }\n    return res;\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u4e00\u4e2a\u901a\u7528\u5316\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"twoSum")," \u51fd\u6570\u5c31\u5199\u51fa\u6765\u4e86\uff0c\u8bf7\u786e\u4fdd\u4f60\u7406\u89e3\u4e86\u8be5\u7b97\u6cd5\u7684\u903b\u8f91\uff0c\u6211\u4eec\u540e\u9762\u89e3\u51b3 ",(0,a.kt)("inlineCode",{parentName:"p"},"3Sum")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"4Sum")," \u7684\u65f6\u5019\u4f1a\u590d\u7528\u8fd9\u4e2a\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u975e\u5e38\u5bb9\u6613\u770b\u51fa\u6765\uff0c\u53cc\u6307\u9488\u64cd\u4f5c\u7684\u90e8\u5206\u867d\u7136\u6709\u90a3\u4e48\u591a while \u5faa\u73af\uff0c\u4f46\u662f\u65f6\u95f4\u590d\u6742\u5ea6\u8fd8\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"O(N)"),"\uff0c\u800c\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"O(NlogN)"),"\uff0c\u6240\u4ee5\u8fd9\u4e2a\u51fd\u6570\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"O(NlogN)"),"\u3002"),(0,a.kt)("h3",{id:"\u4e8c3sum-\u95ee\u9898"},"\u4e8c\u30013Sum \u95ee\u9898"),(0,a.kt)("p",null,"\u8fd9\u662f\u529b\u6263\u7b2c 15 \u9898\u300c\u4e09\u6570\u4e4b\u548c\u300d\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u56fe\u7247",src:t(44599).Z,width:"1080",height:"600"})),(0,a.kt)("p",null,"\u9898\u76ee\u5c31\u662f\u8ba9\u6211\u4eec\u627e ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," \u4e2d\u548c\u4e3a 0 \u7684\u4e09\u4e2a\u5143\u7d20\uff0c\u8fd4\u56de\u6240\u6709\u53ef\u80fd\u7684\u4e09\u5143\u7ec4\uff08triple\uff09\uff0c\u51fd\u6570\u7b7e\u540d\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"vector<vector<int>> threeSum(vector<int>& nums);\n")),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u6211\u4eec\u518d\u6cdb\u5316\u4e00\u4e0b\u9898\u76ee\uff0c\u4e0d\u8981\u5149\u548c\u4e3a 0 \u7684\u4e09\u5143\u7ec4\u4e86\uff0c\u8ba1\u7b97\u548c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," \u7684\u4e09\u5143\u7ec4\u5427\uff0c\u540c\u4e0a\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"twoSum")," \u4e00\u6837\uff0c\u4e5f\u4e0d\u5141\u8bb8\u91cd\u590d\u7684\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"vector<vector<int>> threeSum(vector<int>& nums) {\n    // \u6c42\u548c\u4e3a 0 \u7684\u4e09\u5143\u7ec4\n    return threeSumTarget(nums, 0);\n}\n\nvector<vector<int>> threeSumTarget(vector<int>& nums, int target) {\n    // \u8f93\u5165\u6570\u7ec4 nums\uff0c\u8fd4\u56de\u6240\u6709\u548c\u4e3a target \u7684\u4e09\u5143\u7ec4\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u600e\u4e48\u89e3\u51b3\u5462\uff1f",(0,a.kt)("strong",{parentName:"p"},"\u5f88\u7b80\u5355\uff0c\u7a77\u4e3e\u5457"),"\u3002\u73b0\u5728\u6211\u4eec\u60f3\u627e\u548c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," \u7684\u4e09\u4e2a\u6570\u5b57\uff0c\u90a3\u4e48\u5bf9\u4e8e\u7b2c\u4e00\u4e2a\u6570\u5b57\uff0c\u53ef\u80fd\u662f\u4ec0\u4e48\uff1f",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," \u4e2d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20 ",(0,a.kt)("inlineCode",{parentName:"p"},"nums[i]")," \u90fd\u6709\u53ef\u80fd\uff01"),(0,a.kt)("p",null,"\u90a3\u4e48\uff0c\u786e\u5b9a\u4e86\u7b2c\u4e00\u4e2a\u6570\u5b57\u4e4b\u540e\uff0c\u5269\u4e0b\u7684\u4e24\u4e2a\u6570\u5b57\u53ef\u4ee5\u662f\u4ec0\u4e48\u5462\uff1f\u5176\u5b9e\u5c31\u662f\u548c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"target - nums[i]")," \u7684\u4e24\u4e2a\u6570\u5b57\u5457\uff0c\u90a3\u4e0d\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"twoSum")," \u51fd\u6570\u89e3\u51b3\u7684\u95ee\u9898\u4e48\ud83e\udd14"),(0,a.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u5199\u4ee3\u7801\u4e86\uff0c\u9700\u8981\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"twoSum")," \u51fd\u6570\u7a0d\u4f5c\u4fee\u6539\u5373\u53ef\u590d\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/* \u4ece nums[start] \u5f00\u59cb\uff0c\u8ba1\u7b97\u6709\u5e8f\u6570\u7ec4\n * nums \u4e2d\u6240\u6709\u548c\u4e3a target \u7684\u4e8c\u5143\u7ec4 */\nvector<vector<int>> twoSumTarget(\n    vector<int>& nums, int start, int target) {\n    // \u5de6\u6307\u9488\u6539\u4e3a\u4ece start \u5f00\u59cb\uff0c\u5176\u4ed6\u4e0d\u53d8\n    int lo = start, hi = nums.size() - 1;\n    vector<vector<int>> res;\n    while (lo < hi) {\n        ...\n    }\n    return res;\n}\n\n/* \u8ba1\u7b97\u6570\u7ec4 nums \u4e2d\u6240\u6709\u548c\u4e3a target \u7684\u4e09\u5143\u7ec4 */\nvector<vector<int>> threeSumTarget(vector<int>& nums, int target) {\n    // \u6570\u7ec4\u5f97\u6392\u4e2a\u5e8f\n    sort(nums.begin(), nums.end());\n    int n = nums.size();\n    vector<vector<int>> res;\n    // \u7a77\u4e3e threeSum \u7684\u7b2c\u4e00\u4e2a\u6570\n    for (int i = 0; i < n; i++) {\n        // \u5bf9 target - nums[i] \u8ba1\u7b97 twoSum\n        vector<vector<int>> \n            tuples = twoSumTarget(nums, i + 1, target - nums[i]);\n        // \u5982\u679c\u5b58\u5728\u6ee1\u8db3\u6761\u4ef6\u7684\u4e8c\u5143\u7ec4\uff0c\u518d\u52a0\u4e0a nums[i] \u5c31\u662f\u7ed3\u679c\u4e09\u5143\u7ec4\n        for (vector<int>& tuple : tuples) {\n            tuple.push_back(nums[i]);\n            res.push_back(tuple);\n        }\n        // \u8df3\u8fc7\u7b2c\u4e00\u4e2a\u6570\u5b57\u91cd\u590d\u7684\u60c5\u51b5\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u91cd\u590d\u7ed3\u679c\n        while (i < n - 1 && nums[i] == nums[i + 1]) i++;\n    }\n    return res;\n}\n")),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},"twoSum"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"3Sum")," \u7684\u7ed3\u679c\u4e5f\u53ef\u80fd\u91cd\u590d\uff0c\u6bd4\u5982\u8f93\u5165\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"nums = [1,1,1,2,3], target = 6"),"\uff0c\u7ed3\u679c\u5c31\u4f1a\u91cd\u590d\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5173\u952e\u70b9\u5728\u4e8e\uff0c\u4e0d\u80fd\u8ba9\u7b2c\u4e00\u4e2a\u6570\u91cd\u590d\uff0c\u81f3\u4e8e\u540e\u9762\u7684\u4e24\u4e2a\u6570\uff0c\u6211\u4eec\u590d\u7528\u7684 ",(0,a.kt)("inlineCode",{parentName:"strong"},"twoSum")," \u51fd\u6570\u4f1a\u4fdd\u8bc1\u5b83\u4eec\u4e0d\u91cd\u590d"),"\u3002\u6240\u4ee5\u4ee3\u7801\u4e2d\u5fc5\u987b\u7528\u4e00\u4e2a while \u5faa\u73af\u6765\u4fdd\u8bc1 ",(0,a.kt)("inlineCode",{parentName:"p"},"3Sum")," \u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e0d\u91cd\u590d\u3002"),(0,a.kt)("p",null,"\u81f3\u6b64\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"3Sum")," \u95ee\u9898\u5c31\u89e3\u51b3\u4e86\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e0d\u96be\u7b97\uff0c\u6392\u5e8f\u7684\u590d\u6742\u5ea6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"O(NlogN)"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"twoSumTarget")," \u51fd\u6570\u4e2d\u7684\u53cc\u6307\u9488\u64cd\u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"O(N)"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"threeSumTarget")," \u51fd\u6570\u5728 for \u5faa\u73af\u4e2d\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"twoSumTarget")," \u6240\u4ee5\u603b\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"O(NlogN + N^2) = O(N^2)"),"\u3002"),(0,a.kt)("h3",{id:"\u4e094sum-\u95ee\u9898"},"\u4e09\u30014Sum \u95ee\u9898"),(0,a.kt)("p",null,"\u8fd9\u662f\u529b\u6263\u7b2c 18 \u9898\u300c\u56db\u6570\u4e4b\u548c\u300d\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u56fe\u7247",src:t(11180).Z,width:"1080",height:"627"})),(0,a.kt)("p",null,"\u51fd\u6570\u7b7e\u540d\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"vector<vector<int>> fourSum(vector<int>& nums, int target);\n")),(0,a.kt)("p",null,"\u90fd\u5230\u8fd9\u4efd\u4e0a\u4e86\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"4Sum")," \u5b8c\u5168\u5c31\u53ef\u4ee5\u7528\u76f8\u540c\u7684\u601d\u8def\uff1a\u7a77\u4e3e\u7b2c\u4e00\u4e2a\u6570\u5b57\uff0c\u7136\u540e\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"3Sum")," \u51fd\u6570\u8ba1\u7b97\u5269\u4e0b\u4e09\u4e2a\u6570\uff0c\u6700\u540e\u7ec4\u5408\u51fa\u548c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," \u7684\u56db\u5143\u7ec4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"vector<vector<int>> fourSum(vector<int>& nums, int target) {\n    // \u6570\u7ec4\u9700\u8981\u6392\u5e8f\n    sort(nums.begin(), nums.end());\n    int n = nums.size();\n    vector<vector<int>> res;\n    // \u7a77\u4e3e fourSum \u7684\u7b2c\u4e00\u4e2a\u6570\n    for (int i = 0; i < n; i++) {\n        // \u5bf9 target - nums[i] \u8ba1\u7b97 threeSum\n        vector<vector<int>> \n            triples = threeSumTarget(nums, i + 1, target - nums[i]);\n        // \u5982\u679c\u5b58\u5728\u6ee1\u8db3\u6761\u4ef6\u7684\u4e09\u5143\u7ec4\uff0c\u518d\u52a0\u4e0a nums[i] \u5c31\u662f\u7ed3\u679c\u56db\u5143\u7ec4\n        for (vector<int>& triple : triples) {\n            triple.push_back(nums[i]);\n            res.push_back(triple);\n        }\n        // fourSum \u7684\u7b2c\u4e00\u4e2a\u6570\u4e0d\u80fd\u91cd\u590d\n        while (i < n - 1 && nums[i] == nums[i + 1]) i++;\n    }\n    return res;\n}\n\n/* \u4ece nums[start] \u5f00\u59cb\uff0c\u8ba1\u7b97\u6709\u5e8f\u6570\u7ec4\n * nums \u4e2d\u6240\u6709\u548c\u4e3a target \u7684\u4e09\u5143\u7ec4 */\nvector<vector<int>> \n    threeSumTarget(vector<int>& nums, int start, int target) {\n        int n = nums.size();\n        vector<vector<int>> res;\n        // i \u4ece start \u5f00\u59cb\u7a77\u4e3e\uff0c\u5176\u4ed6\u90fd\u4e0d\u53d8\n        for (int i = start; i < n; i++) {\n            ...\n        }\n        return res;\n")),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u6309\u7167\u76f8\u540c\u7684\u5957\u8def\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"4Sum")," \u95ee\u9898\u5c31\u89e3\u51b3\u4e86\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u7684\u5206\u6790\u548c\u4e4b\u524d\u7c7b\u4f3c\uff0cfor \u5faa\u73af\u4e2d\u8c03\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"threeSumTarget")," \u51fd\u6570\uff0c\u6240\u4ee5\u603b\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"O(N^3)"),"\u3002"),(0,a.kt)("h3",{id:"\u56db100sum-\u95ee\u9898"},"\u56db\u3001100Sum \u95ee\u9898\uff1f"),(0,a.kt)("p",null,"\u5728 LeetCode \u4e0a\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"4Sum")," \u5c31\u5230\u5934\u4e86\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u4f46\u662f\u56de\u60f3\u521a\u624d\u5199 ",(0,a.kt)("inlineCode",{parentName:"strong"},"3Sum")," \u548c ",(0,a.kt)("inlineCode",{parentName:"strong"},"4Sum")," \u7684\u8fc7\u7a0b\uff0c\u5b9e\u9645\u4e0a\u662f\u9075\u5faa\u76f8\u540c\u7684\u6a21\u5f0f\u7684"),"\u3002\u6211\u76f8\u4fe1\u4f60\u53ea\u8981\u7a0d\u5fae\u4fee\u6539\u4e00\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"4Sum")," \u7684\u51fd\u6570\u5c31\u53ef\u4ee5\u590d\u7528\u5e76\u89e3\u51b3 ",(0,a.kt)("inlineCode",{parentName:"p"},"5Sum")," \u95ee\u9898\uff0c\u7136\u540e\u89e3\u51b3 ",(0,a.kt)("inlineCode",{parentName:"p"},"6Sum")," \u95ee\u9898\u2026\u2026"),(0,a.kt)("p",null,"\u90a3\u4e48\uff0c\u5982\u679c\u6211\u8ba9\u4f60\u6c42 ",(0,a.kt)("inlineCode",{parentName:"p"},"100Sum")," \u95ee\u9898\uff0c\u600e\u4e48\u529e\u5462\uff1f\u5176\u5b9e\u6211\u4eec\u53ef\u4ee5\u89c2\u5bdf\u4e0a\u9762\u8fd9\u4e9b\u89e3\u6cd5\uff0c\u7edf\u4e00\u51fa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"nSum")," \u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/* \u6ce8\u610f\uff1a\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u4e4b\u524d\u4e00\u5b9a\u8981\u5148\u7ed9 nums \u6392\u5e8f */\nvector<vector<int>> nSumTarget(\n    vector<int>& nums, int n, int start, int target) {\n\n    int sz = nums.size();\n    vector<vector<int>> res;\n    // \u81f3\u5c11\u662f 2Sum\uff0c\u4e14\u6570\u7ec4\u5927\u5c0f\u4e0d\u5e94\u8be5\u5c0f\u4e8e n\n    if (n < 2 || sz < n) return res;\n    // 2Sum \u662f base case\n    if (n == 2) {\n        // \u53cc\u6307\u9488\u90a3\u4e00\u5957\u64cd\u4f5c\n        int lo = start, hi = sz - 1;\n        while (lo < hi) {\n            int sum = nums[lo] + nums[hi];\n            int left = nums[lo], right = nums[hi];\n            if (sum < target) {\n                while (lo < hi && nums[lo] == left) lo++;\n            } else if (sum > target) {\n                while (lo < hi && nums[hi] == right) hi--;\n            } else {\n                res.push_back({left, right});\n                while (lo < hi && nums[lo] == left) lo++;\n                while (lo < hi && nums[hi] == right) hi--;\n            }\n        }\n    } else {\n        // n > 2 \u65f6\uff0c\u9012\u5f52\u8ba1\u7b97 (n-1)Sum \u7684\u7ed3\u679c\n        for (int i = start; i < sz; i++) {\n            vector<vector<int>> \n                sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);\n            for (vector<int>& arr : sub) {\n                // (n-1)Sum \u52a0\u4e0a nums[i] \u5c31\u662f nSum\n                arr.push_back(nums[i]);\n                res.push_back(arr);\n            }\n            while (i < sz - 1 && nums[i] == nums[i + 1]) i++;\n        }\n    }\n    return res;\n}\n")),(0,a.kt)("p",null,"\u55ef\uff0c\u770b\u8d77\u6765\u5f88\u957f\uff0c\u5b9e\u9645\u4e0a\u5c31\u662f\u628a\u4e4b\u524d\u7684\u9898\u76ee\u89e3\u6cd5\u5408\u5e76\u8d77\u6765\u4e86\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"n == 2")," \u65f6\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"twoSum")," \u7684\u53cc\u6307\u9488\u89e3\u6cd5\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"n > 2")," \u65f6\u5c31\u662f\u7a77\u4e3e\u7b2c\u4e00\u4e2a\u6570\u5b57\uff0c\u7136\u540e\u9012\u5f52\u8c03\u7528\u8ba1\u7b97 ",(0,a.kt)("inlineCode",{parentName:"p"},"(n-1)Sum"),"\uff0c\u7ec4\u88c5\u7b54\u6848\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8c03\u7528\u8fd9\u4e2a ",(0,a.kt)("inlineCode",{parentName:"strong"},"nSum")," \u51fd\u6570\u4e4b\u524d\u4e00\u5b9a\u8981\u5148\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"nums")," \u6570\u7ec4\u6392\u5e8f"),"\uff0c\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"nSum")," \u662f\u4e00\u4e2a\u9012\u5f52\u51fd\u6570\uff0c\u5982\u679c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"nSum")," \u51fd\u6570\u91cc\u8c03\u7528\u6392\u5e8f\u51fd\u6570\uff0c\u90a3\u4e48\u6bcf\u6b21\u9012\u5f52\u90fd\u4f1a\u8fdb\u884c\u6ca1\u6709\u5fc5\u8981\u7684\u6392\u5e8f\uff0c\u6548\u7387\u4f1a\u975e\u5e38\u4f4e\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u8bf4\u73b0\u5728\u6211\u4eec\u5199 LeetCode \u4e0a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"4Sum")," \u95ee\u9898\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"vector<vector<int>> fourSum(vector<int>& nums, int target) {\n    sort(nums.begin(), nums.end());\n    // n \u4e3a 4\uff0c\u4ece nums[0] \u5f00\u59cb\u8ba1\u7b97\u548c\u4e3a target \u7684\u56db\u5143\u7ec4\n    return nSumTarget(nums, 4, 0, target);\n}\n")),(0,a.kt)("p",null,"\u518d\u6bd4\u5982 LeetCode \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"3Sum")," \u95ee\u9898\uff0c\u627e ",(0,a.kt)("inlineCode",{parentName:"p"},"target == 0")," \u7684\u4e09\u5143\u7ec4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"vector<vector<int>> threeSum(vector<int>& nums) {\n    sort(nums.begin(), nums.end());\n    // n \u4e3a 3\uff0c\u4ece nums[0] \u5f00\u59cb\u8ba1\u7b97\u548c\u4e3a 0 \u7684\u4e09\u5143\u7ec4\n    return nSumTarget(nums, 3, 0, 0);        \n}\n")),(0,a.kt)("p",null,"\u90a3\u4e48\uff0c\u5982\u679c\u8ba9\u4f60\u8ba1\u7b97 ",(0,a.kt)("inlineCode",{parentName:"p"},"100Sum")," \u95ee\u9898\uff0c\u76f4\u63a5\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u5c31\u5b8c\u4e8b\u513f\u4e86\u3002"))}p.isMDXComponent=!0},44599:function(e,n,t){n.Z=t.p+"assets/images/640-20210923020437854-c0fccc1709207c6d9fefe5320950839f.bin"},11180:function(e,n,t){n.Z=t.p+"assets/images/640-20210923020437934-375397ca3fb9bf08edcae18a99eebca4.bin"},45713:function(e,n,t){n.Z=t.p+"assets/images/640-20210923020438062-a323f6cf301f9d1a44b98bba934e8bf9.bin"}}]);