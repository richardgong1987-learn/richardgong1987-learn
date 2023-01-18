"use strict";(self.webpackChunkrichardgong_1987_learn=self.webpackChunkrichardgong_1987_learn||[]).push([[848],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return k}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=t.createContext({}),p=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(d.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=i,k=s["".concat(d,".").concat(m)]||s[m]||c[m]||o;return r?t.createElement(k,a(a({ref:n},u),{},{components:r})):t.createElement(k,a({ref:n},u))}));function k(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3615:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var t=r(83117),i=(r(67294),r(3905));const o={},a="\u4e1c\u54e5\u624b\u628a\u624b\u5e2e\u4f60\u5237\u901a\u4e8c\u53c9\u6811|\u7b2c\u4e8c\u671f",l={unversionedId:"c-computer/AlgorithmsDataStructures/BinaryTree/2",id:"c-computer/AlgorithmsDataStructures/BinaryTree/2",title:"\u4e1c\u54e5\u624b\u628a\u624b\u5e2e\u4f60\u5237\u901a\u4e8c\u53c9\u6811|\u7b2c\u4e8c\u671f",description:"\u5148\u6765\u590d\u4e60\u4e00\u4e0b\uff0c\u6211\u4eec\u8bf4\u8fc7\u5199\u6811\u7684\u7b97\u6cd5\uff0c\u5173\u952e\u601d\u8def\u5982\u4e0b\uff1a",source:"@site/docs/c-computer/AlgorithmsDataStructures/BinaryTree/2.md",sourceDirName:"c-computer/AlgorithmsDataStructures/BinaryTree",slug:"/c-computer/AlgorithmsDataStructures/BinaryTree/2",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/BinaryTree/2",draft:!1,editUrl:"https://github.com/richardgong1987-learn/richardgong1987-learn/edit/master/website/docs/c-computer/AlgorithmsDataStructures/BinaryTree/2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u624b\u628a\u624b\u5e26\u4f60\u5237\u4e8c\u53c9\u6811\uff08\u7b2c\u4e00\u671f\uff09",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/BinaryTree/1"},next:{title:"\u4e1c\u54e5\u624b\u628a\u624b\u5e26\u4f60\u5237\u4e8c\u53c9\u6811|\u7b2c\u4e09\u671f",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/BinaryTree/3"}},d={},p=[{value:"\u6784\u9020\u6700\u5927\u4e8c\u53c9\u6811",id:"\u6784\u9020\u6700\u5927\u4e8c\u53c9\u6811",level:2},{value:"\u901a\u8fc7\u524d\u5e8f\u548c\u4e2d\u5e8f\u904d\u5386\u7ed3\u679c\u6784\u9020\u4e8c\u53c9\u6811",id:"\u901a\u8fc7\u524d\u5e8f\u548c\u4e2d\u5e8f\u904d\u5386\u7ed3\u679c\u6784\u9020\u4e8c\u53c9\u6811",level:2},{value:"\u901a\u8fc7\u540e\u5e8f\u548c\u4e2d\u5e8f\u904d\u5386\u7ed3\u679c\u6784\u9020\u4e8c\u53c9\u6811",id:"\u901a\u8fc7\u540e\u5e8f\u548c\u4e2d\u5e8f\u904d\u5386\u7ed3\u679c\u6784\u9020\u4e8c\u53c9\u6811",level:2}],u={toc:p};function s(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e1c\u54e5\u624b\u628a\u624b\u5e2e\u4f60\u5237\u901a\u4e8c\u53c9\u6811\u7b2c\u4e8c\u671f"},"\u4e1c\u54e5\u624b\u628a\u624b\u5e2e\u4f60\u5237\u901a\u4e8c\u53c9\u6811|\u7b2c\u4e8c\u671f"),(0,i.kt)("p",null,"\u5148\u6765\u590d\u4e60\u4e00\u4e0b\uff0c\u6211\u4eec\u8bf4\u8fc7\u5199\u6811\u7684\u7b97\u6cd5\uff0c\u5173\u952e\u601d\u8def\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u628a\u9898\u76ee\u7684\u8981\u6c42\u7ec6\u5316\uff0c\u641e\u6e05\u695a\u6839\u8282\u70b9\u5e94\u8be5\u505a\u4ec0\u4e48\uff0c\u7136\u540e\u5269\u4e0b\u7684\u4e8b\u60c5\u629b\u7ed9\u524d/\u4e2d/\u540e\u5e8f\u7684\u904d\u5386\u6846\u67b6\u5c31\u884c\u4e86"),"\uff0c\u6211\u4eec\u5343\u4e07\u4e0d\u8981\u8df3\u8fdb\u9012\u5f52\u7684\u7ec6\u8282\u91cc\uff0c\u4f60\u7684\u8111\u888b\u624d\u80fd\u538b\u51e0\u4e2a\u6808\u5440\u3002"),(0,i.kt)("p",null,"\u4e5f\u8bb8\u4f60\u8fd8\u4e0d\u592a\u7406\u89e3\u8fd9\u53e5\u8bdd\uff0c\u6211\u4eec\u4e0b\u9762\u6765\u770b\u4f8b\u5b50\u3002"),(0,i.kt)("h2",{id:"\u6784\u9020\u6700\u5927\u4e8c\u53c9\u6811"},"\u6784\u9020\u6700\u5927\u4e8c\u53c9\u6811"),(0,i.kt)("p",null,"\u5148\u6765\u9053\u7b80\u5355\u7684\uff0c\u8fd9\u662f\u529b\u6263\u7b2c 654 \u9898\uff0c\u9898\u76ee\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u56fe\u7247",src:r(41064).Z,width:"1022",height:"1048"})),(0,i.kt)("p",null,"\u51fd\u6570\u7b7e\u540d\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"TreeNode constructMaximumBinaryTree(int[] nums);\n")),(0,i.kt)("p",null,"\u6309\u7167\u6211\u4eec\u521a\u624d\u8bf4\u7684\uff0c\u5148\u660e\u786e\u6839\u8282\u70b9\u505a\u4ec0\u4e48\uff1f",(0,i.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e\u6784\u9020\u4e8c\u53c9\u6811\u7684\u95ee\u9898\uff0c\u6839\u8282\u70b9\u8981\u505a\u7684\u5c31\u662f\u628a\u60f3\u529e\u6cd5\u628a\u81ea\u5df1\u6784\u9020\u51fa\u6765"),"\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u80af\u5b9a\u8981\u904d\u5386\u6570\u7ec4\u628a\u627e\u5230\u6700\u5927\u503c",(0,i.kt)("inlineCode",{parentName:"p"},"maxVal"),"\uff0c\u628a\u6839\u8282\u70b9",(0,i.kt)("inlineCode",{parentName:"p"},"root"),"\u505a\u51fa\u6765\uff0c\u7136\u540e\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"maxVal"),"\u5de6\u8fb9\u7684\u6570\u7ec4\u548c\u53f3\u8fb9\u7684\u6570\u7ec4\u8fdb\u884c\u9012\u5f52\u8c03\u7528\uff0c\u4f5c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"root"),"\u7684\u5de6\u53f3\u5b50\u6811\u3002"),(0,i.kt)("p",null,"\u6309\u7167\u9898\u76ee\u7ed9\u51fa\u7684\u4f8b\u5b50\uff0c\u8f93\u5165\u7684\u6570\u7ec4\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"[3,2,1,6,0,5]"),"\uff0c\u5bf9\u4e8e\u6574\u68f5\u6811\u7684\u6839\u8282\u70b9\u6765\u8bf4\uff0c\u5176\u5b9e\u5728\u505a\u8fd9\u4ef6\u4e8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"TreeNode constructMaximumBinaryTree([3,2,1,6,0,5]) {\n    // \u627e\u5230\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c\n    TreeNode root = new TreeNode(6);\n    // \u9012\u5f52\u8c03\u7528\u6784\u9020\u5de6\u53f3\u5b50\u6811\n    root.left = constructMaximumBinaryTree([3,2,1]);\n    root.right = constructMaximumBinaryTree([0,5]);\n    return root;\n}\n")),(0,i.kt)("p",null,"\u518d\u8be6\u7ec6\u4e00\u70b9\uff0c\u5c31\u662f\u5982\u4e0b\u4f2a\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"TreeNode constructMaximumBinaryTree(int[] nums) {\n    if (nums is empty) return null;\n    // \u627e\u5230\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c\n    int maxVal = Integer.MIN_VALUE;\n    int index = 0;\n    for (int i = 0; i < nums.length; i++) {\n        if (nums[i] > maxVal) {\n            maxVal = nums[i];\n            index = i;\n        }\n    }\n\n    TreeNode root = new TreeNode(maxVal);\n    // \u9012\u5f52\u8c03\u7528\u6784\u9020\u5de6\u53f3\u5b50\u6811\n    root.left = constructMaximumBinaryTree(nums[0..index-1]);\n    root.right = constructMaximumBinaryTree(nums[index+1..nums.length-1]);\n    return root;\n}\n")),(0,i.kt)("p",null,"\u770b\u61c2\u4e86\u5417\uff1f",(0,i.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e\u6bcf\u4e2a\u6839\u8282\u70b9\uff0c\u53ea\u9700\u8981\u627e\u5230\u5f53\u524d",(0,i.kt)("inlineCode",{parentName:"strong"},"nums"),"\u4e2d\u7684\u6700\u5927\u503c\u548c\u5bf9\u5e94\u7684\u7d22\u5f15\uff0c\u7136\u540e\u9012\u5f52\u8c03\u7528\u5de6\u53f3\u6570\u7ec4\u6784\u9020\u5de6\u53f3\u5b50\u6811\u5373\u53ef"),"\u3002"),(0,i.kt)("p",null,"\u660e\u786e\u4e86\u601d\u8def\uff0c\u6211\u4eec\u53ef\u4ee5\u91cd\u65b0\u5199\u4e00\u4e2a\u8f85\u52a9\u51fd\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"build"),"\uff0c\u6765\u63a7\u5236",(0,i.kt)("inlineCode",{parentName:"p"},"nums"),"\u7684\u7d22\u5f15\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/* \u4e3b\u51fd\u6570 */\nTreeNode constructMaximumBinaryTree(int[] nums) {\n    return build(nums, 0, nums.length - 1);\n}\n\n/* \u5c06 nums[lo..hi] \u6784\u9020\u6210\u7b26\u5408\u6761\u4ef6\u7684\u6811\uff0c\u8fd4\u56de\u6839\u8282\u70b9 */\nTreeNode build(int[] nums, int lo, int hi) {\n    // base case\n    if (lo > hi) {\n        return null;\n    }\n\n    // \u627e\u5230\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c\u548c\u5bf9\u5e94\u7684\u7d22\u5f15\n    int index = -1, maxVal = Integer.MIN_VALUE;\n    for (int i = lo; i <= hi; i++) {\n        if (maxVal < nums[i]) {\n            index = i;\n            maxVal = nums[i];\n        }\n    }\n\n    TreeNode root = new TreeNode(maxVal);\n    // \u9012\u5f52\u8c03\u7528\u6784\u9020\u5de6\u53f3\u5b50\u6811\n    root.left = build(nums, lo, index - 1);\n    root.right = build(nums, index + 1, hi);\n\n    return root;\n}\n")),(0,i.kt)("p",null,"\u81f3\u6b64\uff0c\u8fd9\u9053\u9898\u5c31\u505a\u5b8c\u4e86\uff0c\u8fd8\u662f\u633a\u7b80\u5355\u7684\u5bf9\u5427\uff0c\u4e0b\u9762\u770b\u4e24\u9053\u66f4\u56f0\u96be\u4e00\u4e9b\u7684\u3002"),(0,i.kt)("h2",{id:"\u901a\u8fc7\u524d\u5e8f\u548c\u4e2d\u5e8f\u904d\u5386\u7ed3\u679c\u6784\u9020\u4e8c\u53c9\u6811"},"\u901a\u8fc7\u524d\u5e8f\u548c\u4e2d\u5e8f\u904d\u5386\u7ed3\u679c\u6784\u9020\u4e8c\u53c9\u6811"),(0,i.kt)("p",null,"\u7ecf\u5178\u95ee\u9898\u4e86\uff0c\u9762\u8bd5/\u7b14\u8bd5\u4e2d\u5e38\u8003\uff0c\u529b\u6263\u7b2c 105 \u9898\u5c31\u662f\u8fd9\u4e2a\u95ee\u9898\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u56fe\u7247",src:r(36141).Z,width:"664",height:"900"})),(0,i.kt)("p",null,"\u51fd\u6570\u7b7e\u540d\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"TreeNode buildTree(int[] preorder, int[] inorder);\n")),(0,i.kt)("p",null,"\u5e9f\u8bdd\u4e0d\u591a\u8bf4\uff0c\u76f4\u63a5\u6765\u60f3\u601d\u8def\uff0c\u9996\u5148\u601d\u8003\uff0c\u6839\u8282\u70b9\u5e94\u8be5\u505a\u4ec0\u4e48\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7c7b\u4f3c\u4e0a\u4e00\u9898\uff0c\u6211\u4eec\u80af\u5b9a\u8981\u60f3\u529e\u6cd5\u786e\u5b9a\u6839\u8282\u70b9\u7684\u503c\uff0c\u628a\u6839\u8282\u70b9\u505a\u51fa\u6765\uff0c\u7136\u540e\u9012\u5f52\u6784\u9020\u5de6\u53f3\u5b50\u6811\u5373\u53ef"),"\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u5148\u6765\u56de\u987e\u4e00\u4e0b\uff0c\u524d\u5e8f\u904d\u5386\u548c\u4e2d\u5e8f\u904d\u5386\u7684\u7ed3\u679c\u6709\u4ec0\u4e48\u7279\u70b9\uff1f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"void traverse(TreeNode root) {\n    // \u524d\u5e8f\u904d\u5386\n    preorder.add(root.val);\n    traverse(root.left);\n    traverse(root.right);\n}\n\nvoid traverse(TreeNode root) {\n    traverse(root.left);\n    // \u4e2d\u5e8f\u904d\u5386\n    inorder.add(root.val);\n    traverse(root.right);\n}\n")),(0,i.kt)("p",null,"\u524d\u6587 ",(0,i.kt)("a",{parentName:"p",href:"http://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485871&idx=1&sn=bcb24ea8927995b585629a8b9caeed01&chksm=9bd7f7a7aca07eb1b4c330382a4e0b916ef5a82ca48db28908ab16563e28a376b5ca6805bec2&scene=21#wechat_redirect"},"\u4e8c\u53c9\u6811\u5c31\u90a3\u51e0\u4e2a\u6846\u67b6")," \u5199\u8fc7\uff0c\u8fd9\u6837\u7684\u904d\u5386\u987a\u5e8f\u5dee\u5f02\uff0c\u5bfc\u81f4\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"preorder"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"inorder"),"\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u5206\u5e03\u6709\u5982\u4e0b\u7279\u70b9\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u56fe\u7247",src:r(97320).Z,width:"1080",height:"608"})),(0,i.kt)("p",null,"\u627e\u5230\u6839\u8282\u70b9\u662f\u5f88\u7b80\u5355\u7684\uff0c\u524d\u5e8f\u904d\u5386\u7684\u7b2c\u4e00\u4e2a\u503c",(0,i.kt)("inlineCode",{parentName:"p"},"preorder[0]"),"\u5c31\u662f\u6839\u8282\u70b9\u7684\u503c\uff0c\u5173\u952e\u5728\u4e8e\u5982\u4f55\u901a\u8fc7\u6839\u8282\u70b9\u7684\u503c\uff0c\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"preorder"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"postorder"),"\u6570\u7ec4\u5212\u5206\u6210\u4e24\u534a\uff0c\u6784\u9020\u6839\u8282\u70b9\u7684\u5de6\u53f3\u5b50\u6811\uff1f"),(0,i.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u5bf9\u4e8e\u4ee5\u4e0b\u4ee3\u7801\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"?"),"\u90e8\u5206\u5e94\u8be5\u586b\u5165\u4ec0\u4e48\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/* \u4e3b\u51fd\u6570 */\nTreeNode buildTree(int[] preorder, int[] inorder) {\n    return build(preorder, 0, preorder.length - 1,\n                 inorder, 0, inorder.length - 1);\n}\n\n/* \n   \u82e5\u524d\u5e8f\u904d\u5386\u6570\u7ec4\u4e3a preorder[preStart..preEnd]\uff0c\n   \u540e\u7eed\u904d\u5386\u6570\u7ec4\u4e3a postorder[postStart..postEnd]\uff0c\n   \u6784\u9020\u4e8c\u53c9\u6811\uff0c\u8fd4\u56de\u8be5\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 \n*/\nTreeNode build(int[] preorder, int preStart, int preEnd, \n               int[] inorder, int inStart, int inEnd) {\n    // root \u8282\u70b9\u5bf9\u5e94\u7684\u503c\u5c31\u662f\u524d\u5e8f\u904d\u5386\u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\n    int rootVal = preorder[preStart];\n    // rootVal \u5728\u4e2d\u5e8f\u904d\u5386\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\n    int index = 0;\n    for (int i = inStart; i <= inEnd; i++) {\n        if (inorder[i] == rootVal) {\n            index = i;\n            break;\n        }\n    }\n\n    TreeNode root = new TreeNode(rootVal);\n    // \u9012\u5f52\u6784\u9020\u5de6\u53f3\u5b50\u6811\n    root.left = build(preorder, ?, ?,\n                      inorder, ?, ?);\n\n    root.right = build(preorder, ?, ?,\n                       inorder, ?, ?);\n    return root;\n}\n")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u4ee3\u7801\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"rootVal"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"index"),"\u53d8\u91cf\uff0c\u5c31\u662f\u4e0b\u56fe\u8fd9\u79cd\u60c5\u51b5\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u56fe\u7247",src:r(98301).Z,width:"1080",height:"608"})),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6765\u770b\u56fe\u505a\u586b\u7a7a\u9898\uff0c\u4e0b\u9762\u8fd9\u51e0\u4e2a\u95ee\u53f7\u5904\u5e94\u8be5\u586b\u4ec0\u4e48\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"root.left = build(preorder, ?, ?,\n                  inorder, ?, ?);\n\nroot.right = build(preorder, ?, ?,\n                   inorder, ?, ?);\n")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5de6\u53f3\u5b50\u6811\u5bf9\u5e94\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"inorder"),"\u6570\u7ec4\u7684\u8d77\u59cb\u7d22\u5f15\u548c\u7ec8\u6b62\u7d22\u5f15\u6bd4\u8f83\u5bb9\u6613\u786e\u5b9a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u56fe\u7247",src:r(24929).Z,width:"1080",height:"608"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"root.left = build(preorder, ?, ?,\n                  inorder, inStart, index - 1);\n\nroot.right = build(preorder, ?, ?,\n                   inorder, index + 1, inEnd);\n")),(0,i.kt)("p",null,"\u5bf9\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"preorder"),"\u6570\u7ec4\u5462\uff1f\u5982\u4f55\u786e\u5b9a\u5de6\u53f3\u6570\u7ec4\u5bf9\u5e94\u7684\u8d77\u59cb\u7d22\u5f15\u548c\u7ec8\u6b62\u7d22\u5f15\uff1f"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u53ef\u4ee5\u901a\u8fc7\u5de6\u5b50\u6811\u7684\u8282\u70b9\u6570\u63a8\u5bfc\u51fa\u6765\uff0c\u5047\u8bbe\u5de6\u5b50\u6811\u7684\u8282\u70b9\u6570\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"leftSize"),"\uff0c\u90a3\u4e48",(0,i.kt)("inlineCode",{parentName:"p"},"preorder"),"\u6570\u7ec4\u4e0a\u7684\u7d22\u5f15\u60c5\u51b5\u662f\u8fd9\u6837\u7684\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u56fe\u7247",src:r(76706).Z,width:"1080",height:"608"})),(0,i.kt)("p",null,"\u770b\u7740\u8fd9\u4e2a\u56fe\u5c31\u53ef\u4ee5\u628a",(0,i.kt)("inlineCode",{parentName:"p"},"preorder"),"\u5bf9\u5e94\u7684\u7d22\u5f15\u5199\u8fdb\u53bb\u4e86\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int leftSize = index - inStart;\n\nroot.left = build(preorder, preStart + 1, preStart + leftSize,\n                  inorder, inStart, index - 1);\n\nroot.right = build(preorder, preStart + leftSize + 1, preEnd,\n                   inorder, index + 1, inEnd);\n")),(0,i.kt)("p",null,"\u81f3\u6b64\uff0c\u6574\u4e2a\u7b97\u6cd5\u601d\u8def\u5c31\u5b8c\u6210\u4e86\uff0c\u6211\u4eec\u518d\u8865\u4e00\u8865 base case \u5373\u53ef\u5199\u51fa\u89e3\u6cd5\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"TreeNode build(int[] preorder, int preStart, int preEnd, \n               int[] inorder, int inStart, int inEnd) {\n\n    if (preStart > preEnd) {\n        return null;\n    }\n\n    // root \u8282\u70b9\u5bf9\u5e94\u7684\u503c\u5c31\u662f\u524d\u5e8f\u904d\u5386\u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\n    int rootVal = preorder[preStart];\n    // rootVal \u5728\u4e2d\u5e8f\u904d\u5386\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\n    int index = 0;\n    for (int i = inStart; i <= inEnd; i++) {\n        if (inorder[i] == rootVal) {\n            index = i;\n            break;\n        }\n    }\n\n    int leftSize = index - inStart;\n\n    // \u5148\u6784\u9020\u51fa\u5f53\u524d\u6839\u8282\u70b9\n    TreeNode root = new TreeNode(rootVal);\n    // \u9012\u5f52\u6784\u9020\u5de6\u53f3\u5b50\u6811\n    root.left = build(preorder, preStart + 1, preStart + leftSize,\n                      inorder, inStart, index - 1);\n\n    root.right = build(preorder, preStart + leftSize + 1, preEnd,\n                       inorder, index + 1, inEnd);\n    return root;\n}\n")),(0,i.kt)("p",null,"\u6211\u4eec\u7684\u4e3b\u51fd\u6570\u53ea\u8981\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"build"),"\u51fd\u6570\u5373\u53ef\uff0c\u4f60\u770b\u7740\u51fd\u6570\u8fd9\u4e48\u591a\u53c2\u6570\uff0c\u89e3\u6cd5\u8fd9\u4e48\u591a\u4ee3\u7801\uff0c\u4f3c\u4e4e\u6bd4\u6211\u4eec\u4e0a\u9762\u8bb2\u7684\u90a3\u9053\u9898\u96be\u5f88\u591a\uff0c\u8ba9\u4eba\u671b\u800c\u751f\u754f\uff0c\u5b9e\u9645\u4e0a\u5462\uff0c\u8fd9\u4e9b\u53c2\u6570\u65e0\u975e\u5c31\u662f\u63a7\u5236\u6570\u7ec4\u8d77\u6b62\u4f4d\u7f6e\u7684\uff0c\u753b\u4e2a\u56fe\u5c31\u80fd\u89e3\u51b3\u4e86\u3002"),(0,i.kt)("h2",{id:"\u901a\u8fc7\u540e\u5e8f\u548c\u4e2d\u5e8f\u904d\u5386\u7ed3\u679c\u6784\u9020\u4e8c\u53c9\u6811"},"\u901a\u8fc7\u540e\u5e8f\u548c\u4e2d\u5e8f\u904d\u5386\u7ed3\u679c\u6784\u9020\u4e8c\u53c9\u6811"),(0,i.kt)("p",null,"\u7c7b\u4f3c\u4e0a\u4e00\u9898\uff0c\u8fd9\u6b21\u6211\u4eec\u5229\u7528",(0,i.kt)("strong",{parentName:"p"},"\u540e\u5e8f"),"\u548c",(0,i.kt)("strong",{parentName:"p"},"\u4e2d\u5e8f"),"\u904d\u5386\u7684\u7ed3\u679c\u6570\u7ec4\u6765\u8fd8\u539f\u4e8c\u53c9\u6811\uff0c\u8fd9\u662f\u529b\u6263\u7b2c 106 \u9898\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u56fe\u7247",src:r(252).Z,width:"674",height:"908"})),(0,i.kt)("p",null,"\u51fd\u6570\u7b7e\u540d\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"TreeNode buildTree(int[] inorder, int[] postorder);\n")),(0,i.kt)("p",null,"\u7c7b\u4f3c\u7684\uff0c\u770b\u4e0b\u540e\u5e8f\u548c\u4e2d\u5e8f\u904d\u5386\u7684\u7279\u70b9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"void traverse(TreeNode root) {\n    traverse(root.left);\n    traverse(root.right);\n    // \u524d\u5e8f\u904d\u5386\n    postorder.add(root.val);\n}\n\nvoid traverse(TreeNode root) {\n    traverse(root.left);\n    // \u4e2d\u5e8f\u904d\u5386\n    inorder.add(root.val);\n    traverse(root.right);\n}\n")),(0,i.kt)("p",null,"\u8fd9\u6837\u7684\u904d\u5386\u987a\u5e8f\u5dee\u5f02\uff0c\u5bfc\u81f4\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"preorder"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"inorder"),"\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u5206\u5e03\u6709\u5982\u4e0b\u7279\u70b9\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u56fe\u7247",src:r(41473).Z,width:"1080",height:"608"})),(0,i.kt)("p",null,"\u8fd9\u9053\u9898\u548c\u4e0a\u4e00\u9898\u7684\u5173\u952e\u533a\u522b\u662f\uff0c\u540e\u5e8f\u904d\u5386\u548c\u524d\u5e8f\u904d\u5386\u76f8\u53cd\uff0c\u6839\u8282\u70b9\u5bf9\u5e94\u7684\u503c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"postorder"),"\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u3002"),(0,i.kt)("p",null,"\u6574\u4f53\u7684\u7b97\u6cd5\u6846\u67b6\u548c\u4e0a\u4e00\u9898\u975e\u5e38\u7c7b\u4f3c\uff0c\u6211\u4eec\u4f9d\u7136\u5199\u4e00\u4e2a\u8f85\u52a9\u51fd\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"build"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"TreeNode buildTree(int[] inorder, int[] postorder) {\n    return build(inorder, 0, inorder.length - 1,\n                 postorder, 0, postorder.length - 1);\n}\n\nTreeNode build(int[] inorder, int inStart, int inEnd,\n               int[] postorder, int postStart, int postEnd) {\n    // root \u8282\u70b9\u5bf9\u5e94\u7684\u503c\u5c31\u662f\u540e\u5e8f\u904d\u5386\u6570\u7ec4\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\n    int rootVal = postorder[postEnd];\n    // rootVal \u5728\u4e2d\u5e8f\u904d\u5386\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\n    int index = 0;\n    for (int i = inStart; i <= inEnd; i++) {\n        if (inorder[i] == rootVal) {\n            index = i;\n            break;\n        }\n    }\n\n    TreeNode root = new TreeNode(rootVal);\n    // \u9012\u5f52\u6784\u9020\u5de6\u53f3\u5b50\u6811\n    root.left = build(preorder, ?, ?,\n                      inorder, ?, ?);\n\n    root.right = build(preorder, ?, ?,\n                       inorder, ?, ?);\n    return root;\n}\n")),(0,i.kt)("p",null,"\u73b0\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"postoder"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"inorder"),"\u5bf9\u5e94\u7684\u72b6\u6001\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u56fe\u7247",src:r(17378).Z,width:"1080",height:"608"})),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6309\u7167\u4e0a\u56fe\u5c06\u95ee\u53f7\u5904\u7684\u7d22\u5f15\u6b63\u786e\u586b\u5165\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int leftSize = index - inStart;\n\nroot.left = build(inorder, inStart, index - 1,\n                  postorder, postStart, postStart + leftSize - 1);\n\nroot.right = build(inorder, index + 1, inEnd,\n                   postorder, postStart + leftSize, postEnd - 1);\n")),(0,i.kt)("p",null,"\u7efc\u4e0a\uff0c\u53ef\u4ee5\u5199\u51fa\u5b8c\u6574\u7684\u89e3\u6cd5\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"TreeNode build(int[] inorder, int inStart, int inEnd,\n               int[] postorder, int postStart, int postEnd) {\n\n    if (inStart > inEnd) {\n        return null;\n    }\n    // root \u8282\u70b9\u5bf9\u5e94\u7684\u503c\u5c31\u662f\u540e\u5e8f\u904d\u5386\u6570\u7ec4\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\n    int rootVal = postorder[postEnd];\n    // rootVal \u5728\u4e2d\u5e8f\u904d\u5386\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\n    int index = 0;\n    for (int i = inStart; i <= inEnd; i++) {\n        if (inorder[i] == rootVal) {\n            index = i;\n            break;\n        }\n    }\n    // \u5de6\u5b50\u6811\u7684\u8282\u70b9\u4e2a\u6570\n    int leftSize = index - inStart;\n    TreeNode root = new TreeNode(rootVal);\n    // \u9012\u5f52\u6784\u9020\u5de6\u53f3\u5b50\u6811\n    root.left = build(inorder, inStart, index - 1,\n                        postorder, postStart, postStart + leftSize - 1);\n\n    root.right = build(inorder, index + 1, inEnd,\n                        postorder, postStart + leftSize, postEnd - 1);\n    return root;\n}\n")),(0,i.kt)("p",null,"\u6709\u4e86\u524d\u4e00\u9898\u7684\u94fa\u57ab\uff0c\u8fd9\u9053\u9898\u5f88\u5feb\u5c31\u89e3\u51b3\u4e86\uff0c\u65e0\u975e\u5c31\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"rootVal"),"\u53d8\u6210\u4e86\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff0c\u518d\u6539\u6539\u9012\u5f52\u51fd\u6570\u7684\u53c2\u6570\u800c\u5df2\uff0c\u53ea\u8981\u660e\u767d\u4e8c\u53c9\u6811\u7684\u7279\u6027\uff0c\u4e5f\u4e0d\u96be\u5199\u51fa\u6765\u3002"),(0,i.kt)("p",null,"\u6700\u540e\u547c\u5e94\u4e0b\u524d\u6587\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u505a\u4e8c\u53c9\u6811\u7684\u95ee\u9898\uff0c\u5173\u952e\u662f\u628a\u9898\u76ee\u7684\u8981\u6c42\u7ec6\u5316\uff0c\u641e\u6e05\u695a\u6839\u8282\u70b9\u5e94\u8be5\u505a\u4ec0\u4e48\uff0c\u7136\u540e\u5269\u4e0b\u7684\u4e8b\u60c5\u629b\u7ed9\u524d/\u4e2d/\u540e\u5e8f\u7684\u904d\u5386\u6846\u67b6\u5c31\u884c\u4e86"),"\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\u4f60\u662f\u5426\u660e\u767d\u5176\u4e2d\u7684\u7384\u5999\u4e86\u5462\uff1f"))}s.isMDXComponent=!0},41064:function(e,n,r){n.Z=r.p+"assets/images/640-20210923234245429-3555506502d25425191da3604389dbd7.bin"},252:function(e,n,r){n.Z=r.p+"assets/images/640-20210923234246187-ab10d89443042be7dfb2cb9c9881a733.bin"},41473:function(e,n,r){n.Z=r.p+"assets/images/640-20210923234246894-3bd34d17c4d41e7394d607e595f6b52b.bin"},97320:function(e,n,r){n.Z=r.p+"assets/images/640-20210923234247023-26321a3dcf30e930f302471c0374c59d.bin"},36141:function(e,n,r){n.Z=r.p+"assets/images/640-20210923234247048-cdd25f14efa511be9ffffc68fb2196aa.bin"},76706:function(e,n,r){n.Z=r.p+"assets/images/640-20210923234247145-ae48235c9a239dfea0778882888fbd50.bin"},24929:function(e,n,r){n.Z=r.p+"assets/images/640-20210923234247293-8543164de48d3456693baebd019b0a8a.bin"},17378:function(e,n,r){n.Z=r.p+"assets/images/640-20210923234247373-89d495f1e84677a4f2ffc3d85f4b0d3f.bin"},98301:function(e,n,r){n.Z=r.p+"assets/images/640-20210923234247898-44bc8892ca0c7267683c52fc6aeee73f.bin"}}]);