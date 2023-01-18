"use strict";(self.webpackChunkrichardgong_1987_learn=self.webpackChunkrichardgong_1987_learn||[]).push([[2809],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(t),y=a,m=s["".concat(l,".").concat(y)]||s[y]||d[y]||c;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=y;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},9772:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return u}});var r=t(83117),a=(t(67294),t(3905));const c={},i="3.1 \u624b\u628a\u624b\u6559\u4f60\u5199 LRU \u7f13\u5b58\u6dd8\u6c70\u7b97\u6cd5",o={unversionedId:"c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u9ad8\u9891\u9762\u8bd5\u7cfb\u5217/LRU\u7b97\u6cd5",id:"c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u9ad8\u9891\u9762\u8bd5\u7cfb\u5217/LRU\u7b97\u6cd5",title:"3.1 \u624b\u628a\u624b\u6559\u4f60\u5199 LRU \u7f13\u5b58\u6dd8\u6c70\u7b97\u6cd5",description:"\u672c\u6587\u5bf9\u5e94\u7684\u529b\u6263\u9898\u76ee\uff1a",source:"@site/docs/c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u9ad8\u9891\u9762\u8bd5\u7cfb\u5217/LRU\u7b97\u6cd5.md",sourceDirName:"c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u9ad8\u9891\u9762\u8bd5\u7cfb\u5217",slug:"/c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u9ad8\u9891\u9762\u8bd5\u7cfb\u5217/LRU\u7b97\u6cd5",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u9ad8\u9891\u9762\u8bd5\u7cfb\u5217/LRU\u7b97\u6cd5",draft:!1,editUrl:"https://github.com/richardgong1987-learn/richardgong1987-learn/edit/master/website/docs/c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u9ad8\u9891\u9762\u8bd5\u7cfb\u5217/LRU\u7b97\u6cd5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4.8 \u644a\u70e7\u997c\u4e5f\u5f97\u6709\u70b9\u9012\u5f52\u601d\u7ef4",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u7b97\u6cd5\u601d\u7ef4\u7cfb\u5217/\u70e7\u997c\u6392\u5e8f"},next:{title:"5.3 \u5982\u4f55\u8fd0\u7528\u4e8c\u5206\u67e5\u627e\u7b97\u6cd5",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/labuladong\u7b97\u6cd5\u5c0f\u6284\u4ee3\u7801/\u9ad8\u9891\u9762\u8bd5\u7cfb\u5217/koko\u5077\u9999\u8549"}},l={},u=[],p={toc:u};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"31-\u624b\u628a\u624b\u6559\u4f60\u5199-lru-\u7f13\u5b58\u6dd8\u6c70\u7b97\u6cd5"},"3.1 \u624b\u628a\u624b\u6559\u4f60\u5199 LRU \u7f13\u5b58\u6dd8\u6c70\u7b97\u6cd5"),(0,a.kt)("p",null,"\u672c\u6587\u5bf9\u5e94\u7684\u529b\u6263\u9898\u76ee\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/lru-cache/"},"146.LRU\u7f13\u5b58\u673a\u5236")),(0,a.kt)("p",null,"\u81ea\u5df1\u9020\u8f6e\u5b50\u5b9e\u73b0\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Node {\n    public int key, val;\n    public Node next, prev;\n    public Node(int k, int v) {\n        this.key = k;\n        this.val = v;\n    }\n}\n\nclass DoubleList {  \n    // \u5934\u5c3e\u865a\u8282\u70b9\n    private Node head, tail;  \n    // \u94fe\u8868\u5143\u7d20\u6570\n    private int size;\n    \n    public DoubleList() {\n        // \u521d\u59cb\u5316\u53cc\u5411\u94fe\u8868\u7684\u6570\u636e\n        head = new Node(0, 0);\n        tail = new Node(0, 0);\n        head.next = tail;\n        tail.prev = head;\n        size = 0;\n    }\n\n    // \u5728\u94fe\u8868\u5c3e\u90e8\u6dfb\u52a0\u8282\u70b9 x\uff0c\u65f6\u95f4 O(1)\n    public void addLast(Node x) {\n        x.prev = tail.prev;\n        x.next = tail;\n        tail.prev.next = x;\n        tail.prev = x;\n        size++;\n    }\n\n    // \u5220\u9664\u94fe\u8868\u4e2d\u7684 x \u8282\u70b9\uff08x \u4e00\u5b9a\u5b58\u5728\uff09\n    // \u7531\u4e8e\u662f\u53cc\u94fe\u8868\u4e14\u7ed9\u7684\u662f\u76ee\u6807 Node \u8282\u70b9\uff0c\u65f6\u95f4 O(1)\n    public void remove(Node x) {\n        x.prev.next = x.next;\n        x.next.prev = x.prev;\n        size--;\n    }\n    \n    // \u5220\u9664\u94fe\u8868\u4e2d\u7b2c\u4e00\u4e2a\u8282\u70b9\uff0c\u5e76\u8fd4\u56de\u8be5\u8282\u70b9\uff0c\u65f6\u95f4 O(1)\n    public Node removeFirst() {\n        if (head.next == tail)\n            return null;\n        Node first = head.next;\n        remove(first);\n        return first;\n    }\n\n    // \u8fd4\u56de\u94fe\u8868\u957f\u5ea6\uff0c\u65f6\u95f4 O(1)\n    public int size() { return size; }\n\n}\n\nclass LRUCache {\n    // key -> Node(key, val)\n    private HashMap<Integer, Node> map;\n    // Node(k1, v1) <-> Node(k2, v2)...\n    private DoubleList cache;\n    // \u6700\u5927\u5bb9\u91cf\n    private int cap;\n    \n    public LRUCache(int capacity) {\n        this.cap = capacity;\n        map = new HashMap<>();\n        cache = new DoubleList();\n    }\n\n\n    /* \u5c06\u67d0\u4e2a key \u63d0\u5347\u4e3a\u6700\u8fd1\u4f7f\u7528\u7684 */\n    private void makeRecently(int key) {\n        Node x = map.get(key);\n        // \u5148\u4ece\u94fe\u8868\u4e2d\u5220\u9664\u8fd9\u4e2a\u8282\u70b9\n        cache.remove(x);\n        // \u91cd\u65b0\u63d2\u5230\u961f\u5c3e\n        cache.addLast(x);\n    }\n\n    /* \u6dfb\u52a0\u6700\u8fd1\u4f7f\u7528\u7684\u5143\u7d20 */\n    private void addRecently(int key, int val) {\n        Node x = new Node(key, val);\n        // \u94fe\u8868\u5c3e\u90e8\u5c31\u662f\u6700\u8fd1\u4f7f\u7528\u7684\u5143\u7d20\n        cache.addLast(x);\n        // \u522b\u5fd8\u4e86\u5728 map \u4e2d\u6dfb\u52a0 key \u7684\u6620\u5c04\n        map.put(key, x);\n    }\n\n    /* \u5220\u9664\u67d0\u4e00\u4e2a key */\n    private void deleteKey(int key) {\n        Node x = map.get(key);\n        // \u4ece\u94fe\u8868\u4e2d\u5220\u9664\n        cache.remove(x);\n        // \u4ece map \u4e2d\u5220\u9664\n        map.remove(key);\n    }\n\n    /* \u5220\u9664\u6700\u4e45\u672a\u4f7f\u7528\u7684\u5143\u7d20 */\n    private void removeLeastRecently() {\n        // \u94fe\u8868\u5934\u90e8\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u5c31\u662f\u6700\u4e45\u672a\u4f7f\u7528\u7684\n        Node deletedNode = cache.removeFirst();\n        // \u540c\u65f6\u522b\u5fd8\u4e86\u4ece map \u4e2d\u5220\u9664\u5b83\u7684 key\n        int deletedKey = deletedNode.key;\n        map.remove(deletedKey);\n    }\n    \n    public int get(int key) {\n        if (!map.containsKey(key)) {\n            return -1;\n        }\n        // \u5c06\u8be5\u6570\u636e\u63d0\u5347\u4e3a\u6700\u8fd1\u4f7f\u7528\u7684\n        makeRecently(key);\n        return map.get(key).val;\n    }\n    \n    public void put(int key, int val) {\n        if (map.containsKey(key)) {\n            // \u5220\u9664\u65e7\u7684\u6570\u636e\n            deleteKey(key);\n            // \u65b0\u63d2\u5165\u7684\u6570\u636e\u4e3a\u6700\u8fd1\u4f7f\u7528\u7684\u6570\u636e\n            addRecently(key, val);\n            return;\n        }\n        \n        if (cap == cache.size()) {\n            // \u5220\u9664\u6700\u4e45\u672a\u4f7f\u7528\u7684\u5143\u7d20\n            removeLeastRecently();\n        }\n        // \u6dfb\u52a0\u4e3a\u6700\u8fd1\u4f7f\u7528\u7684\u5143\u7d20\n        addRecently(key, val);\n    }\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u6700\u540e\u7528 Java \u7684\u5185\u7f6e\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"LinkedHashMap")," \u6765\u5b9e\u73b0 LRU \u7b97\u6cd5\uff0c\u903b\u8f91\u548c\u4e4b\u524d\u5b8c\u5168\u4e00\u81f4\uff0c\u6211\u5c31\u4e0d\u8fc7\u591a\u89e3\u91ca\u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class LRUCache {\n    int cap;\n    LinkedHashMap<Integer, Integer> cache = new LinkedHashMap<>();\n    public LRUCache(int capacity) { \n        this.cap = capacity;\n    }\n    \n    public int get(int key) {\n        if (!cache.containsKey(key)) {\n            return -1;\n        }\n        // \u5c06 key \u53d8\u4e3a\u6700\u8fd1\u4f7f\u7528\n        makeRecently(key);\n        return cache.get(key);\n    }\n    \n    public void put(int key, int val) {\n        if (cache.containsKey(key)) {\n            // \u4fee\u6539 key \u7684\u503c\n            cache.put(key, val);\n            // \u5c06 key \u53d8\u4e3a\u6700\u8fd1\u4f7f\u7528\n            makeRecently(key);\n            return;\n        }\n        \n        if (cache.size() >= this.cap) {\n            // \u94fe\u8868\u5934\u90e8\u5c31\u662f\u6700\u4e45\u672a\u4f7f\u7528\u7684 key\n            int oldestKey = cache.keySet().iterator().next();\n            cache.remove(oldestKey);\n        }\n        // \u5c06\u65b0\u7684 key \u6dfb\u52a0\u94fe\u8868\u5c3e\u90e8\n        cache.put(key, val);\n    }\n    \n    private void makeRecently(int key) {\n        int val = cache.get(key);\n        // \u5220\u9664 key\uff0c\u91cd\u65b0\u63d2\u5165\u5230\u961f\u5c3e\n        cache.remove(key);\n        cache.put(key, val);\n    }\n}\n")))}s.isMDXComponent=!0}}]);