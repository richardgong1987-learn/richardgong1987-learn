"use strict";(self.webpackChunkrichardgong_1987_learn=self.webpackChunkrichardgong_1987_learn||[]).push([[8394],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var u=r.createContext({}),s=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=s(n.components);return r.createElement(u.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,u=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),p=s(t),m=i,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(h,l(l({ref:e},c),{},{components:t})):r.createElement(h,l({ref:e},c))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,l=new Array(a);l[0]=p;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=n,o.mdxType="string"==typeof n?n:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},37041:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),l=["components"],o={},u="\u7b2c\u4e94\u7ae0\uff1a\u54c8\u5e0c\u8868",s={unversionedId:"c-computer/AlgorithmsDataStructures/OfferOrientedAlgorithms-main/Chapter05",id:"c-computer/AlgorithmsDataStructures/OfferOrientedAlgorithms-main/Chapter05",title:"\u7b2c\u4e94\u7ae0\uff1a\u54c8\u5e0c\u8868",description:"\u9762\u8bd5\u989830\uff1a\u63d2\u5165\u3001\u5220\u9664\u548c\u968f\u673a\u8bbf\u95ee\u90fd\u662fO(1)\u7684\u5bb9\u5668",source:"@site/docs/c-computer/AlgorithmsDataStructures/OfferOrientedAlgorithms-main/Chapter05.md",sourceDirName:"c-computer/AlgorithmsDataStructures/OfferOrientedAlgorithms-main",slug:"/c-computer/AlgorithmsDataStructures/OfferOrientedAlgorithms-main/Chapter05",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/OfferOrientedAlgorithms-main/Chapter05",editUrl:"https://github.com/richardgong1987-learn/richardgong1987-learn/edit/master/website/docs/c-computer/AlgorithmsDataStructures/OfferOrientedAlgorithms-main/Chapter05.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u56db\u7ae0\uff1a\u94fe\u8868",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/OfferOrientedAlgorithms-main/Chapter04"},next:{title:"\u7b2c\u516d\u7ae0\uff1a\u6808",permalink:"/richardgong1987-learn/docs/c-computer/AlgorithmsDataStructures/OfferOrientedAlgorithms-main/Chapter06"}},c=[{value:"\u9762\u8bd5\u989830\uff1a\u63d2\u5165\u3001\u5220\u9664\u548c\u968f\u673a\u8bbf\u95ee\u90fd\u662fO(1)\u7684\u5bb9\u5668",id:"\u9762\u8bd5\u989830\u63d2\u5165\u5220\u9664\u548c\u968f\u673a\u8bbf\u95ee\u90fd\u662fo1\u7684\u5bb9\u5668",children:[{value:"\u9898\u76ee",id:"\u9898\u76ee",children:[],level:3},{value:"\u53c2\u8003\u4ee3\u7801",id:"\u53c2\u8003\u4ee3\u7801",children:[],level:3}],level:2},{value:"\u9762\u8bd5\u989831\uff1a\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7f13\u5b58",id:"\u9762\u8bd5\u989831\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7f13\u5b58",children:[{value:"\u9898\u76ee",id:"\u9898\u76ee-1",children:[],level:3},{value:"\u53c2\u8003\u4ee3\u7801",id:"\u53c2\u8003\u4ee3\u7801-1",children:[],level:3}],level:2},{value:"\u9762\u8bd5\u989832\uff1a\u6709\u6548\u7684\u53d8\u4f4d\u8bcd",id:"\u9762\u8bd5\u989832\u6709\u6548\u7684\u53d8\u4f4d\u8bcd",children:[{value:"\u9898\u76ee",id:"\u9898\u76ee-2",children:[],level:3},{value:"\u53c2\u8003\u4ee3\u7801",id:"\u53c2\u8003\u4ee3\u7801-2",children:[{value:"\u89e3\u6cd5\u4e00",id:"\u89e3\u6cd5\u4e00",children:[],level:4},{value:"\u89e3\u6cd5\u4e8c",id:"\u89e3\u6cd5\u4e8c",children:[],level:4}],level:3}],level:2},{value:"\u9762\u8bd5\u989833\uff1a\u53d8\u4f4d\u8bcd\u7ec4",id:"\u9762\u8bd5\u989833\u53d8\u4f4d\u8bcd\u7ec4",children:[{value:"\u9898\u76ee",id:"\u9898\u76ee-3",children:[],level:3},{value:"\u53c2\u8003\u4ee3\u7801",id:"\u53c2\u8003\u4ee3\u7801-3",children:[{value:"\u89e3\u6cd5\u4e00",id:"\u89e3\u6cd5\u4e00-1",children:[],level:4},{value:"\u89e3\u6cd5\u4e8c",id:"\u89e3\u6cd5\u4e8c-1",children:[],level:4}],level:3}],level:2},{value:"\u9762\u8bd5\u989834\uff1a\u5916\u661f\u8bed\u8a00\u662f\u5426\u6392\u5e8f",id:"\u9762\u8bd5\u989834\u5916\u661f\u8bed\u8a00\u662f\u5426\u6392\u5e8f",children:[{value:"\u9898\u76ee",id:"\u9898\u76ee-4",children:[],level:3},{value:"\u53c2\u8003\u4ee3\u7801",id:"\u53c2\u8003\u4ee3\u7801-4",children:[],level:3}],level:2},{value:"\u9762\u8bd5\u989835\uff1a\u6700\u5c0f\u65f6\u95f4\u5dee",id:"\u9762\u8bd5\u989835\u6700\u5c0f\u65f6\u95f4\u5dee",children:[{value:"\u9898\u76ee",id:"\u9898\u76ee-5",children:[],level:3},{value:"\u53c2\u8003\u4ee3\u7801",id:"\u53c2\u8003\u4ee3\u7801-5",children:[],level:3}],level:2}],d={toc:c};function p(n){var e=n.components,t=(0,i.Z)(n,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b2c\u4e94\u7ae0\u54c8\u5e0c\u8868"},"\u7b2c\u4e94\u7ae0\uff1a\u54c8\u5e0c\u8868"),(0,a.kt)("h2",{id:"\u9762\u8bd5\u989830\u63d2\u5165\u5220\u9664\u548c\u968f\u673a\u8bbf\u95ee\u90fd\u662fo1\u7684\u5bb9\u5668"},"\u9762\u8bd5\u989830\uff1a\u63d2\u5165\u3001\u5220\u9664\u548c\u968f\u673a\u8bbf\u95ee\u90fd\u662fO(1)\u7684\u5bb9\u5668"),(0,a.kt)("h3",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,a.kt)("p",null,"\u8bbe\u8ba1\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u4f7f\u5f97\u5982\u4e0b\u4e09\u4e2a\u64cd\u4f5c\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u662fO(1)\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"insert(value)\uff1a\u5982\u679c\u6570\u636e\u96c6\u4e0d\u5305\u542b\u4e00\u4e2a\u6570\u503c\uff0c\u5219\u628a\u5b83\u6dfb\u52a0\u5230\u6570\u636e\u96c6\uff1b"),(0,a.kt)("li",{parentName:"ul"},"remove(value)\uff1a\u5982\u679c\u6570\u636e\u96c6\u5305\u542b\u4e00\u4e2a\u6570\u503c\uff0c\u5219\u628a\u5b83\u5220\u9664\uff1b"),(0,a.kt)("li",{parentName:"ul"},"getRandom()\uff1a\u968f\u673a\u8fd4\u56de\u6570\u636e\u96c6\u4e2d\u7684\u4e00\u4e2a\u6570\u503c\uff0c\u8981\u6c42\u6570\u636e\u96c6\u91cc\u6bcf\u4e2a\u6570\u5b57\u88ab\u8fd4\u56de\u7684\u6982\u7387\u90fd\u76f8\u540c\u3002")),(0,a.kt)("h3",{id:"\u53c2\u8003\u4ee3\u7801"},"\u53c2\u8003\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class RandomizedSet {\n    public RandomizedSet() {\n        numToLocation = new HashMap<>();\n        nums = new ArrayList<>();\n    }\n    \n    public boolean insert(int val) {\n        if (numToLocation.containsKey(val)) {\n            return false;\n        }\n\n        numToLocation.put(val, nums.size());\n        nums.add(val);\n        return true;\n    }\n    \n    public boolean remove(int val) {\n        if (!numToLocation.containsKey(val)) {\n            return false;\n        }\n        \n        int location = numToLocation.get(val);\n        numToLocation.put(nums.get(nums.size() - 1), location);\n        numToLocation.remove(val);\n        nums.set(location, nums.get(nums.size() - 1));\n        nums.remove(nums.size() - 1);\n        return true;\n    }\n    \n    public int getRandom() {\n        Random random = new Random();\n        int r = random.nextInt(nums.size());\n        return nums.get(r);\n    }\n}\n")),(0,a.kt)("h2",{id:"\u9762\u8bd5\u989831\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7f13\u5b58"},"\u9762\u8bd5\u989831\uff1a\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7f13\u5b58"),(0,a.kt)("h3",{id:"\u9898\u76ee-1"},"\u9898\u76ee"),(0,a.kt)("p",null,"\u8bf7\u8bbe\u8ba1\u5b9e\u73b0\u4e00\u4e2a\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\uff08Least Recently Used\uff0cLRU\uff09\u7f13\u5b58\uff0c\u8981\u6c42\u5982\u4e0b\u4e24\u4e2a\u64cd\u4f5c\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u662fO(1)\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"get(key)\uff1a\u5982\u679c\u7f13\u5b58\u4e2d\u5b58\u5728\u952e\u503ckey\uff0c\u5219\u8fd4\u56de\u5b83\u5bf9\u5e94\u7684\u503c\uff1b\u5426\u5219\u8fd4\u56de-1\u3002"),(0,a.kt)("li",{parentName:"ul"},"put(key, value)\uff1a\u5982\u679c\u7f13\u5b58\u4e2d\u4e4b\u524d\u5305\u542b\u952e\u503ckey\uff0c\u5c06\u5b83\u7684\u503c\u8bbe\u4e3avalue\uff1b\u5426\u5219\u6dfb\u52a0\u952e\u503ckey\u53ca\u5bf9\u5e94\u7684\u503cvalue\u3002\u5728\u6dfb\u52a0\u4e00\u4e2a\u952e\u503c\u65f6\u5982\u679c\u7f13\u5b58\u5bb9\u91cf\u5df2\u7ecf\u6ee1\u4e86\uff0c\u5219\u5728\u6dfb\u52a0\u65b0\u952e\u503c\u4e4b\u524d\u5220\u9664\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684\u952e\u503c\uff08\u7f13\u5b58\u91cc\u6700\u957f\u65f6\u95f4\u6ca1\u6709\u88ab\u4f7f\u7528\u8fc7\u7684\u5143\u7d20\uff09\u3002")),(0,a.kt)("h3",{id:"\u53c2\u8003\u4ee3\u7801-1"},"\u53c2\u8003\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class ListNode{\n    public int key;\n    public int value;\n    public ListNode next;\n    public ListNode prev;\n\n    public ListNode(int k, int v) {\n        key = k;\n        value = v;\n    }\n}\n    \nclass LRUCache {\n    private ListNode head;\n    private ListNode tail;\n    private Map<Integer, ListNode> map;\n    int capacity;\n    \n    public LRUCache(int cap) {\n        map = new HashMap<>();\n        \n        head = new ListNode(-1, -1);\n        tail = new ListNode(-1, -1);\n        head.next = tail;\n        tail.prev = head;\n        \n        capacity = cap;\n    }\n    \n    public int get(int key) {\n        ListNode node = map.get(key);\n        if (node == null) {\n            return -1;\n        }\n        \n        moveToTail(node, node.value);\n        \n        return node.value;\n    }\n    \n    public void put(int key, int value) {\n        if (map.containsKey(key)) {\n            moveToTail(map.get(key), value);\n        } else {\n            if (map.size() == capacity) {\n                ListNode toBeDeleted = head.next;\n                deleteNode(toBeDeleted);\n                \n                map.remove(toBeDeleted.key);\n            }\n            \n            ListNode node = new ListNode(key, value);\n            insertToTail(node);\n            \n            map.put(key, node);\n        }\n    }\n    \n    private void moveToTail(ListNode node, int newValue) {\n        deleteNode(node);\n\n        node.value = newValue;\n        insertToTail(node);\n    }\n    \n    private void deleteNode(ListNode node) {\n        node.prev.next = node.next;\n        node.next.prev = node.prev;\n    }\n    \n    private void insertToTail(ListNode node) {\n        tail.prev.next = node;\n        node.prev = tail.prev;\n        node.next = tail;\n        tail.prev = node;\n    }\n}\n")),(0,a.kt)("h2",{id:"\u9762\u8bd5\u989832\u6709\u6548\u7684\u53d8\u4f4d\u8bcd"},"\u9762\u8bd5\u989832\uff1a\u6709\u6548\u7684\u53d8\u4f4d\u8bcd"),(0,a.kt)("h3",{id:"\u9898\u76ee-2"},"\u9898\u76ee"),(0,a.kt)("p",null,'\u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32s\u548ct\uff0c\u8bf7\u5224\u65ad\u5b83\u4eec\u662f\u4e0d\u662f\u4e00\u7ec4\u53d8\u4f4d\u8bcd\u3002\u5728\u4e00\u7ec4\u53d8\u4f4d\u8bcd\u4e2d\uff0c\u5982\u679c\u5b83\u4eec\u4e2d\u7684\u5b57\u7b26\u4ee5\u53ca\u6bcf\u4e2a\u5b57\u7b26\u51fa\u73b0\u7684\u6b21\u6570\u90fd\u76f8\u540c\uff0c\u4f46\u5b57\u7b26\u7684\u987a\u5e8f\u4e0d\u80fd\u3002\u4f8b\u5982"anagram"\u548c"nagaram"\u5c31\u662f\u4e00\u7ec4\u53d8\u4f4d\u8bcd\u3002'),(0,a.kt)("h3",{id:"\u53c2\u8003\u4ee3\u7801-2"},"\u53c2\u8003\u4ee3\u7801"),(0,a.kt)("h4",{id:"\u89e3\u6cd5\u4e00"},"\u89e3\u6cd5\u4e00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public boolean isAnagram(String str1, String str2) {\n    if (str1.length() != str2.length())\n        return false;\n\n    int[] counts = new int[26];\n    for (char ch : str1.toCharArray()) {\n        counts[ch - 'a']++;\n    }\n\n    for (char ch : str2.toCharArray()) {\n        if (counts[ch - 'a'] == 0) {\n            return false;\n        }\n\n        counts[ch - 'a']--;\n    }\n\n    return true;\n}\n")),(0,a.kt)("h4",{id:"\u89e3\u6cd5\u4e8c"},"\u89e3\u6cd5\u4e8c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public boolean isAnagram(String str1, String str2) {\n    if (str1.length() != str2.length()) {\n        return false;\n    }\n\n    Map<Character, Integer> counts = new HashMap<>();\n    for (char ch : str1.toCharArray()) {\n        counts.put(ch, counts.getOrDefault(ch, 0) + 1);\n    }\n\n    for (char ch : str2.toCharArray()) {\n        if (counts.getOrDefault(ch, 0) == 0)\n            return false;\n\n        counts.put(ch, counts.get(ch) - 1);\n    }\n\n    return true;\n}\n")),(0,a.kt)("h2",{id:"\u9762\u8bd5\u989833\u53d8\u4f4d\u8bcd\u7ec4"},"\u9762\u8bd5\u989833\uff1a\u53d8\u4f4d\u8bcd\u7ec4"),(0,a.kt)("h3",{id:"\u9898\u76ee-3"},"\u9898\u76ee"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u7ec4\u5355\u8bcd\uff0c\u8bf7\u5c06\u5b83\u4eec\u6309\u7167\u53d8\u4f4d\u8bcd\u5206\u7ec4\u3002\u4f8b\u5982\u8f93\u5165\u4e00\u7ec4\u5355\u8bcd",'["eat", "tea", "tan", "ate", "nat", "bat"]',"\uff0c\u5219\u53ef\u4ee5\u5206\u6210\u4e09\u7ec4\uff0c\u5206\u522b\u662f",'["eat", "tea", "ate"]',"\u3001",'["tan", "nat"]',"\u548c",'["bat"]',"\u3002\u5047\u8bbe\u5355\u8bcd\u4e2d\u53ea\u5305\u542b\u5c0f\u5199\u7684\u82f1\u6587\u5b57\u6bcd\u3002"),(0,a.kt)("h3",{id:"\u53c2\u8003\u4ee3\u7801-3"},"\u53c2\u8003\u4ee3\u7801"),(0,a.kt)("h4",{id:"\u89e3\u6cd5\u4e00-1"},"\u89e3\u6cd5\u4e00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public List<List<String>> groupAnagrams(String[] strs) {\n    int hash[] = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, \n        43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101};\n\n    Map<Long, List<String>> groups = new HashMap<>();\n    for (String str : strs) {\n        long wordHash = 1;\n        for(int i = 0; i < str.length(); ++i) {\n            wordHash *= hash[str.charAt(i) - 'a'];\n        }\n\n        groups.putIfAbsent(wordHash, new LinkedList<String>());\n        groups.get(wordHash).add(str);\n    }\n\n    return new LinkedList<>(groups.values());\n}\n")),(0,a.kt)("h4",{id:"\u89e3\u6cd5\u4e8c-1"},"\u89e3\u6cd5\u4e8c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public List<List<String>> groupAnagrams(String[] strs) {\n    Map<String, List<String>> groups = new HashMap<>();\n    for (String str : strs) {\n        char[] charArray = str.toCharArray();\n        Arrays.sort(charArray);\n        String sorted = new String(charArray);\n        groups.putIfAbsent(sorted, new LinkedList<String>());\n        groups.get(sorted).add(str);\n    }\n\n    return new LinkedList<>(groups.values());\n}\n")),(0,a.kt)("h2",{id:"\u9762\u8bd5\u989834\u5916\u661f\u8bed\u8a00\u662f\u5426\u6392\u5e8f"},"\u9762\u8bd5\u989834\uff1a\u5916\u661f\u8bed\u8a00\u662f\u5426\u6392\u5e8f"),(0,a.kt)("h3",{id:"\u9898\u76ee-4"},"\u9898\u76ee"),(0,a.kt)("p",null,"\u6709\u4e00\u95e8\u5916\u661f\u8bed\u8a00\uff0c\u5b83\u7684\u5b57\u6bcd\u8868\u521a\u597d\u5305\u542b\u6240\u6709\u7684\u82f1\u6587\u5c0f\u5199\u5b57\u6bcd\uff0c\u53ea\u662f\u5b57\u6bcd\u8868\u7684\u987a\u5e8f\u4e0d\u540c\u3002\u7ed9\u5b9a\u4e00\u7ec4\u5355\u8bcd\u548c\u5b57\u6bcd\u8868\u987a\u5e8f\uff0c\u8bf7\u5224\u65ad\u8fd9\u4e9b\u5355\u8bcd\u662f\u5426\u6309\u7167\u5b57\u6bcd\u8868\u7684\u987a\u5e8f\u6392\u5e8f\u3002\u4f8b\u5982\uff0c\u8f93\u5165\u4e00\u7ec4\u5355\u8bcd",'["offer", "is", "coming"]','\uff0c\u4ee5\u53ca\u5b57\u6bcd\u8868\u987a\u5e8f"zyxwvutsrqponmlkjihgfedcba"\uff0c\u7531\u4e8e\u5b57\u6bcd\'o\'\u5728\u5b57\u6bcd\u8868\u4e2d\u4f4d\u4e8e\'i\'\u7684\u524d\u9762\uff0c\u6240\u4ee5\u5355\u8bcd"offer"\u6392\u5728"is"\u7684\u524d\u9762\uff1b\u540c\u6837\u7531\u4e8e\u5b57\u6bcd\'i\'\u5728\u5b57\u6bcd\u8868\u4e2d\u4f4d\u4e8e\'c\'\u7684\u524d\u9762\uff0c\u6240\u4ee5\u5355\u8bcd"is"\u6392\u5728"coming"\u7684\u524d\u9762\u3002\u56e0\u6b64\u8fd9\u4e00\u7ec4\u5355\u8bcd\u662f\u6309\u7167\u5b57\u6bcd\u8868\u987a\u5e8f\u6392\u5e8f\u7684\uff0c\u5e94\u8be5\u8f93\u51fatrue\u3002'),(0,a.kt)("h3",{id:"\u53c2\u8003\u4ee3\u7801-4"},"\u53c2\u8003\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public boolean isAlienSorted(String[] words, String order) {\n    int[] orderArray = new int[order.length()];\n    for (int i = 0; i < order.length(); ++i) {\n        orderArray[order.charAt(i) - 'a'] = i;\n    }\n\n    for (int i = 0; i < words.length - 1; ++i) {\n        if (!isSorted(words[i], words[i + 1], orderArray)) {\n            return false;\n        }\n    }\n\n    return true;\n}\n\nprivate boolean isSorted(String word1, String word2, int[] orderArray) {\n    int i = 0;\n    for (; i < word1.length() && i < word2.length(); ++i) {\n        char ch1 = word1.charAt(i);\n        char ch2 = word2.charAt(i);\n        if (orderArray[ch1 - 'a'] < orderArray[ch2 - 'a']) {\n            return true;\n        }\n\n        if (orderArray[ch1 - 'a'] > orderArray[ch2 - 'a']) {\n            return false;\n        }\n    }\n\n    return i == word1.length();\n}\n")),(0,a.kt)("h2",{id:"\u9762\u8bd5\u989835\u6700\u5c0f\u65f6\u95f4\u5dee"},"\u9762\u8bd5\u989835\uff1a\u6700\u5c0f\u65f6\u95f4\u5dee"),(0,a.kt)("h3",{id:"\u9898\u76ee-5"},"\u9898\u76ee"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u7ec4\u8303\u56f4\u572800:00\u81f323:59\u7684\u65f6\u95f4\uff0c\u6c42\u5b83\u4eec\u4efb\u610f\u4e24\u4e2a\u65f6\u95f4\u4e4b\u95f4\u7684\u6700\u5c0f\u65f6\u95f4\u5dee\u3002\u4f8b\u5982\uff0c\u8f93\u5165\u65f6\u95f4\u6570\u7ec4",'["23:50", "23:59", "00:00"]','\uff0c"23:59"\u548c"00:00"\u4e4b\u95f4\u53ea\u67091\u5206\u949f\u95f4\u9694\uff0c\u662f\u6700\u5c0f\u7684\u65f6\u95f4\u5dee\u3002'),(0,a.kt)("h3",{id:"\u53c2\u8003\u4ee3\u7801-5"},"\u53c2\u8003\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public int findMinDifference(List<String> timePoints) {\n    if (timePoints.size() > 1440) {\n        return 0;\n    }\n\n    boolean minuteFlags[] = new boolean[1440];\n    for (String time : timePoints) {\n        String t[] = time.split(":");\n        int minute = Integer.parseInt(t[0]) * 60 + Integer.parseInt(t[1]);\n        if (minuteFlags[minute]) {\n            return 0;\n        }\n\n        minuteFlags[minute] = true;\n    }\n\n    return findMinDifference(minuteFlags);\n}\n\nprivate int findMinDifference(boolean minuteFlags[]) {\n    int minDiff = minuteFlags.length - 1;\n    int prev = -1;\n    int first = minuteFlags.length - 1;\n    int last = -1;\n    for (int i = 0; i < minuteFlags.length; ++i) {\n        if (minuteFlags[i]) {\n            if (prev >= 0) {\n                minDiff = Math.min(i - prev, minDiff);\n            }\n\n            prev = i;\n            first = Math.min(i, first);\n            last = Math.max(i, last);\n        }\n    }\n\n    minDiff = Math.min(first + minuteFlags.length - last, minDiff);\n    return minDiff;\n}\n')))}p.isMDXComponent=!0}}]);