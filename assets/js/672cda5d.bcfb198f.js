"use strict";(self.webpackChunkrichardgong_1987_learn=self.webpackChunkrichardgong_1987_learn||[]).push([[7146],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=c(a),m=n,s=k["".concat(o,".").concat(m)]||k[m]||d[m]||l;return a?r.createElement(s,u(u({ref:t},p),{},{components:a})):r.createElement(s,u({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var c=2;c<l;c++)u[c]=a[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},957:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return k}});var r=a(83117),n=a(80102),l=(a(67294),a(3905)),u=["components"],i={},o="\u7ebf\u7a0b\u6c60",c={unversionedId:"a-java/a-java-concurrent/threadpool/readme",id:"a-java/a-java-concurrent/threadpool/readme",isDocsHomePage:!1,title:"\u7ebf\u7a0b\u6c60",description:"\u7ebf\u7a0b\u6c60\u7814\u53d1\u8bb2\u4e49.ppt",source:"@site/docs/a-java/a-java-concurrent/threadpool/readme.md",sourceDirName:"a-java/a-java-concurrent/threadpool",slug:"/a-java/a-java-concurrent/threadpool/readme",permalink:"/richardgong1987-learn/docs/a-java/a-java-concurrent/threadpool/readme",editUrl:"https://github.com/richardgong1987-learn/richardgong1987-learn/edit/master/website/docs/a-java/a-java-concurrent/threadpool/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u539f\u7406\u7bc7",permalink:"/richardgong1987-learn/docs/a-java/a-java-concurrent/concurent/readme"},next:{title:"JVM\u6027\u80fd\u8c03\u4f18\u5b66\u4e60",permalink:"/richardgong1987-learn/docs/a-java/b-java-jvm/intro"}},p=[{value:"\u7ebf\u7a0b\u6c60\u7814\u53d1\u8bb2\u4e49.ppt",id:"\u7ebf\u7a0b\u6c60\u7814\u53d1\u8bb2\u4e49ppt",children:[],level:4},{value:"\u90d1\u5dde\u6821\u533a-\u5f20\u5b66\u5168-\u7ebf\u7a0b\u6c60\u7814\u53d1\u5927\u7eb2_v2019-11-21.xmind",id:"\u90d1\u5dde\u6821\u533a-\u5f20\u5b66\u5168-\u7ebf\u7a0b\u6c60\u7814\u53d1\u5927\u7eb2_v2019-11-21xmind",children:[],level:4},{value:"1.\u3010\u7406\u89e3\u3011\u7ebf\u7a0b\u6c60\u57fa\u672c\u6982\u5ff5",id:"1\u7406\u89e3\u7ebf\u7a0b\u6c60\u57fa\u672c\u6982\u5ff5",children:[{value:"<strong>1.3</strong>\u4f7f\u7528\u7ebf\u7a0b\u6c60\u6709\u54ea\u4e9b\u4f18\u52bf",id:"13\u4f7f\u7528\u7ebf\u7a0b\u6c60\u6709\u54ea\u4e9b\u4f18\u52bf",children:[],level:3}],level:2},{value:"2.\u3010\u7406\u89e3\u3011\u7ebf\u7a0b\u6c60\u5de5\u4f5c\u539f\u7406",id:"2\u7406\u89e3\u7ebf\u7a0b\u6c60\u5de5\u4f5c\u539f\u7406",children:[{value:"Java\u5185\u7f6e\u7ebf\u7a0b\u6c60\u539f\u7406\u5256\u6790",id:"java\u5185\u7f6e\u7ebf\u7a0b\u6c60\u539f\u7406\u5256\u6790",children:[],level:3},{value:"2.1.1:ThreadPoolExecutor\u90e8\u5206\u6e90\u7801",id:"211threadpoolexecutor\u90e8\u5206\u6e90\u7801",children:[],level:3}],level:2},{value:"3.\u3010\u638c\u63e1\u3011\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60",id:"3\u638c\u63e1\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60",children:[{value:"<strong>2.2:</strong>\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60\u53c2\u6570\u8bbe\u8ba1\u5206\u6790",id:"22\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60\u53c2\u6570\u8bbe\u8ba1\u5206\u6790",children:[],level:3},{value:"<strong>2.2:**</strong>\u81ea\u5b9a\u4e49*<strong>*\u7ebf\u7a0b\u6c60**</strong>-*<strong>*\u5b9e\u73b0\u6b65\u9aa4</strong>",id:"22\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60-\u5b9e\u73b0\u6b65\u9aa4",children:[],level:3}],level:2},{value:"4.\u3010\u5e94\u7528\u3011java\u5185\u7f6e\u7ebf\u7a0b\u6c60",id:"4\u5e94\u7528java\u5185\u7f6e\u7ebf\u7a0b\u6c60",children:[{value:"<strong>2.3:Java**</strong>\u5185\u7f6e\u7ebf\u7a0b\u6c60*<strong>*-**</strong>ExecutorService*<strong>*\u4ecb\u7ecd</strong>",id:"23java\u5185\u7f6e\u7ebf\u7a0b\u6c60-executorservice\u4ecb\u7ecd",children:[],level:3},{value:"<strong>2.3:Java**</strong>\u5185\u7f6e\u7ebf\u7a0b\u6c60*<strong>*-**</strong>ExecutorService*<strong>*\u83b7\u53d6</strong>",id:"23java\u5185\u7f6e\u7ebf\u7a0b\u6c60-executorservice\u83b7\u53d6",children:[],level:3},{value:"<strong>2.3:Java**</strong>\u5185\u7f6e\u7ebf\u7a0b\u6c60*<strong>*-**</strong>ScheduledExecutorService**",id:"23java\u5185\u7f6e\u7ebf\u7a0b\u6c60-scheduledexecutorservice",children:[],level:3},{value:"<strong>2.3:Java**</strong>\u5185\u7f6e\u7ebf\u7a0b\u6c60*<strong>*-**</strong>ScheduledExecutorService**",id:"23java\u5185\u7f6e\u7ebf\u7a0b\u6c60-scheduledexecutorservice-1",children:[],level:3},{value:"<strong>2.3:Java**</strong>\u5185\u7f6e\u7ebf\u7a0b\u6c60*<strong>*-**</strong>\u5f02\u6b65\u8ba1\u7b97\u7ed3\u679c*<strong>*(Future)</strong>",id:"23java\u5185\u7f6e\u7ebf\u7a0b\u6c60-\u5f02\u6b65\u8ba1\u7b97\u7ed3\u679cfuture",children:[],level:3}],level:2},{value:"<strong>\u7ebf\u7a0b\u6c60\u603b\u7ed3</strong>",id:"\u7ebf\u7a0b\u6c60\u603b\u7ed3",children:[],level:2}],d={toc:p};function k(e){var t=e.components,i=(0,n.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7ebf\u7a0b\u6c60"},"\u7ebf\u7a0b\u6c60"),(0,l.kt)("h1",{id:"\u7ebf\u7a0b\u6c60\u5b66\u4e60"},"\u7ebf\u7a0b\u6c60\u5b66\u4e60"),(0,l.kt)("h4",{id:"\u7ebf\u7a0b\u6c60\u7814\u53d1\u8bb2\u4e49ppt"},(0,l.kt)("a",{target:"_blank",href:a(69983).Z},"\u7ebf\u7a0b\u6c60\u7814\u53d1\u8bb2\u4e49.ppt")),(0,l.kt)("h4",{id:"\u90d1\u5dde\u6821\u533a-\u5f20\u5b66\u5168-\u7ebf\u7a0b\u6c60\u7814\u53d1\u5927\u7eb2_v2019-11-21xmind"},(0,l.kt)("a",{target:"_blank",href:a(35989).Z},"\u90d1\u5dde\u6821\u533a-\u5f20\u5b66\u5168-\u7ebf\u7a0b\u6c60\u7814\u53d1\u5927\u7eb2_v2019-11-21.xmind")),(0,l.kt)("h2",{id:"1\u7406\u89e3\u7ebf\u7a0b\u6c60\u57fa\u672c\u6982\u5ff5"},"1.\u3010\u7406\u89e3\u3011\u7ebf\u7a0b\u6c60\u57fa\u672c\u6982\u5ff5"),(0,l.kt)("h3",{id:"13\u4f7f\u7528\u7ebf\u7a0b\u6c60\u6709\u54ea\u4e9b\u4f18\u52bf"},(0,l.kt)("strong",{parentName:"h3"},"1.3"),"\u4f7f\u7528\u7ebf\u7a0b\u6c60\u6709\u54ea\u4e9b\u4f18\u52bf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"1:\u7ebf\u7a0b\u548c\u4efb\u52a1\u5206\u79bb,\u63d0\u5347\u7ebf\u7a0b\u91cd\u7528\u6027;")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"2:\u63a7\u5236\u7ebf\u7a0b\u5e76\u53d1\u6570\u91cf,\u964d\u4f4e\u670d\u52a1\u5668\u538b\u529b,\u7edf\u4e00\u7ba1\u7406\u6240\u6709\u7ebf\u7a0b;")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"3:\u63d0\u5347\u7cfb\u7edf\u54cd\u5e94\u901f\u5ea6,\u5047\u5982\u521b\u5efa\u7ebf\u7a0b\u7528\u7684\u65f6\u95f4\u4e3aT1\uff0c\u6267\u884c\u4efb\u52a1\u7528\u7684\u65f6\u95f4\u4e3aT2,\u9500\u6bc1\u7ebf\u7a0b\u7528\u7684\u65f6\u95f4\u4e3aT3\uff0c\u90a3\u4e48\u4f7f\u7528\u7ebf\u7a0b\u6c60\u5c31\u514d\u53bb\u4e86T1\u548cT3\u7684\u65f6\u95f4\uff1b"))),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"2.1"),"Java\u5185\u7f6e\u7ebf\u7a0b\u6c60\u4ecb\u7ecd"),(0,l.kt)("h2",{id:"2\u7406\u89e3\u7ebf\u7a0b\u6c60\u5de5\u4f5c\u539f\u7406"},"2.\u3010\u7406\u89e3\u3011\u7ebf\u7a0b\u6c60\u5de5\u4f5c\u539f\u7406"),(0,l.kt)("h3",{id:"java\u5185\u7f6e\u7ebf\u7a0b\u6c60\u539f\u7406\u5256\u6790"},"Java\u5185\u7f6e\u7ebf\u7a0b\u6c60\u539f\u7406\u5256\u6790"),(0,l.kt)("p",null,"  \u6211\u4eec\u8981\u60f3\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60,\u5fc5\u987b\u5148\u4e86\u89e3\u7ebf\u7a0b\u6c60\u7684\u5de5\u4f5c\u539f\u7406,\u624d\u80fd\u81ea\u5df1\u5b9a\u4e49\u7ebf\u7a0b\u6c60\uff1b"),(0,l.kt)("p",null,"  \u8fd9\u91cc\u6211\u4eec\u901a\u8fc7\u89c2\u5bdfjava\u4e2dThreadPoolExecutor\u7684\u6e90\u7801\u6765\u5b66\u4e60\u7ebf\u7a0b\u6c60\u7684\u539f\u7406;"),(0,l.kt)("h3",{id:"211threadpoolexecutor\u90e8\u5206\u6e90\u7801"},"2.1.1:ThreadPoolExecutor\u90e8\u5206\u6e90\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\u6784\u9020\u65b9\u6cd5:\npublic ThreadPoolExecutor(int corePoolSize, //\u6838\u5fc3\u7ebf\u7a0b\u6570\u91cf\n                              int maximumPoolSize,//     \u6700\u5927\u7ebf\u7a0b\u6570\n                              long keepAliveTime, //       \u6700\u5927\u7a7a\u95f2\u65f6\u95f4\n                              TimeUnit unit,         //        \u65f6\u95f4\u5355\u4f4d\n                              BlockingQueue<Runnable> workQueue,   //   \u4efb\u52a1\u961f\u5217\n                              ThreadFactory threadFactory,    // \u7ebf\u7a0b\u5de5\u5382\n                              RejectedExecutionHandler handler  //  \u9971\u548c\u5904\u7406\u673a\u5236\n    ) \n{ ... }\n\n")),(0,l.kt)("p",null,"  **2.1.3:\u7ebf\u7a0b\u6c60\u5de5\u4f5c\u6d41\u7a0b\u603b\u7ed3\u793a\u610f\u56fe"),(0,l.kt)("p",null,"  ",(0,l.kt)("img",{alt:"image-20210909101328978",src:a(44549).Z})),(0,l.kt)("h2",{id:"3\u638c\u63e1\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60"},"3.\u3010\u638c\u63e1\u3011\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60"),(0,l.kt)("h3",{id:"22\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60\u53c2\u6570\u8bbe\u8ba1\u5206\u6790"},(0,l.kt)("strong",{parentName:"h3"},"2.2:"),"\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60\u53c2\u6570\u8bbe\u8ba1\u5206\u6790"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"1:\u6838\u5fc3\u7ebf\u7a0b\u6570(corePoolSize)"),(0,l.kt)("p",{parentName:"li"},"\u6838\u5fc3\u7ebf\u7a0b\u6570\u7684\u8bbe\u8ba1\u9700\u8981\u4f9d\u636e\u4efb\u52a1\u7684\u5904\u7406\u65f6\u95f4\u548c\u6bcf\u79d2\u4ea7\u751f\u7684\u4efb\u52a1\u6570\u91cf\u6765\u786e\u5b9a,\u4f8b\u5982:\u6267\u884c\u4e00\u4e2a\u4efb\u52a1\u9700\u89810.1\u79d2,\u7cfb\u7edf\u767e\u5206\u4e4b80\u7684\u65f6\u95f4\u6bcf\u79d2\u90fd\u4f1a\u4ea7\u751f100\u4e2a\u4efb\u52a1,\u90a3\u4e48\u8981\u60f3\u57281\u79d2\u5185\u5904\u7406\u5b8c\u8fd9100\u4e2a\u4efb\u52a1,\u5c31\u9700\u898110\u4e2a\u7ebf\u7a0b,\u6b64\u65f6\u6211\u4eec\u5c31\u53ef\u4ee5\u8bbe\u8ba1\u6838\u5fc3\u7ebf\u7a0b\u6570\u4e3a10;\u5f53\u7136\u5b9e\u9645\u60c5\u51b5\u4e0d\u53ef\u80fd\u8fd9\u4e48\u5e73\u5747,\u6240\u4ee5\u6211\u4eec\u4e00\u822c\u6309\u71678020\u539f\u5219\u8bbe\u8ba1\u5373\u53ef,\u65e2\u6309\u7167\u767e\u5206\u4e4b80\u7684\u60c5\u51b5\u8bbe\u8ba1\u6838\u5fc3\u7ebf\u7a0b\u6570,\u5269\u4e0b\u7684\u767e\u5206\u4e4b20\u53ef\u4ee5\u5229\u7528\u6700\u5927\u7ebf\u7a0b\u6570\u5904\u7406;"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"2:\u4efb\u52a1\u961f\u5217\u957f\u5ea6(workQueue)"),(0,l.kt)("p",{parentName:"li"},"\u4efb\u52a1\u961f\u5217\u957f\u5ea6\u4e00\u822c\u8bbe\u8ba1\u4e3a:\u6838\u5fc3\u7ebf\u7a0b\u6570/\u5355\u4e2a\u4efb\u52a1\u6267\u884c\u65f6\u95f4*2\u5373\u53ef;\u4f8b\u5982\u4e0a\u9762\u7684\u573a\u666f\u4e2d,\u6838\u5fc3\u7ebf\u7a0b\u6570\u8bbe\u8ba1\u4e3a10,\u5355\u4e2a\u4efb\u52a1\u6267\u884c\u65f6\u95f4\u4e3a0.1\u79d2,\u5219\u961f\u5217\u957f\u5ea6\u53ef\u4ee5\u8bbe\u8ba1\u4e3a200;"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"3:\u6700\u5927\u7ebf\u7a0b\u6570(maximumPoolSize)"),(0,l.kt)("p",{parentName:"li"},"\u6700\u5927\u7ebf\u7a0b\u6570\u7684\u8bbe\u8ba1\u9664\u4e86\u9700\u8981\u53c2\u7167\u6838\u5fc3\u7ebf\u7a0b\u6570\u7684\u6761\u4ef6\u5916,\u8fd8\u9700\u8981\u53c2\u7167\u7cfb\u7edf\u6bcf\u79d2\u4ea7\u751f\u7684\u6700\u5927\u4efb\u52a1\u6570\u51b3\u5b9a:\u4f8b\u5982:\u4e0a\u8ff0\u73af\u5883\u4e2d,\u5982\u679c\u7cfb\u7edf\u6bcf\u79d2\u6700\u5927\u4ea7\u751f\u7684\u4efb\u52a1\u662f1000\u4e2a,\u90a3\u4e48,\u6700\u5927\u7ebf\u7a0b\u6570=(\u6700\u5927\u4efb\u52a1\u6570-\u4efb\u52a1\u961f\u5217\u957f\u5ea6)",(0,l.kt)("em",{parentName:"p"},"\u5355\u4e2a\u4efb\u52a1\u6267\u884c\u65f6\u95f4;\u65e2: \u6700\u5927\u7ebf\u7a0b\u6570=(1000-200)"),"0.1=80\u4e2a;"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"4:\u6700\u5927\u7a7a\u95f2\u65f6\u95f4(keepAliveTime)"),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u53c2\u6570\u7684\u8bbe\u8ba1\u5b8c\u5168\u53c2\u8003\u7cfb\u7edf\u8fd0\u884c\u73af\u5883\u548c\u786c\u4ef6\u538b\u529b\u8bbe\u5b9a,\u6ca1\u6709\u56fa\u5b9a\u7684\u53c2\u8003\u503c,\u7528\u6237\u53ef\u4ee5\u6839\u636e\u7ecf\u9a8c\u548c\u7cfb\u7edf\u4ea7\u751f\u4efb\u52a1\u7684\u65f6\u95f4\u95f4\u9694\u5408\u7406\u8bbe\u7f6e\u4e00\u4e2a\u503c\u5373\u53ef;"))),(0,l.kt)("h3",{id:"22\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60-\u5b9e\u73b0\u6b65\u9aa4"},(0,l.kt)("strong",{parentName:"h3"},"2.2:**"),"\u81ea\u5b9a\u4e49*",(0,l.kt)("strong",{parentName:"h3"},"*\u7ebf\u7a0b\u6c60**"),"-*",(0,l.kt)("strong",{parentName:"h3"},"*\u5b9e\u73b0\u6b65\u9aa4")),(0,l.kt)("p",null,"1:\u7f16\u5199\u4efb\u52a1\u7c7b(MyTask),\u5b9e\u73b0Runnable\u63a5\u53e3;"),(0,l.kt)("p",null,"2:\u7f16\u5199\u7ebf\u7a0b\u7c7b(MyWorker),\u7528\u4e8e\u6267\u884c\u4efb\u52a1,\u9700\u8981\u6301\u6709\u6240\u6709\u4efb\u52a1;"),(0,l.kt)("p",null,"3:\u7f16\u5199\u7ebf\u7a0b\u6c60\u7c7b(MyThreadPool),\u5305\u542b\u63d0\u4ea4\u4efb\u52a1,\u6267\u884c\u4efb\u52a1\u7684\u80fd\u529b;"),(0,l.kt)("h2",{id:"4\u5e94\u7528java\u5185\u7f6e\u7ebf\u7a0b\u6c60"},"4.\u3010\u5e94\u7528\u3011java\u5185\u7f6e\u7ebf\u7a0b\u6c60"),(0,l.kt)("h3",{id:"23java\u5185\u7f6e\u7ebf\u7a0b\u6c60-executorservice\u4ecb\u7ecd"},(0,l.kt)("strong",{parentName:"h3"},"2.3:Java**"),"\u5185\u7f6e\u7ebf\u7a0b\u6c60*",(0,l.kt)("strong",{parentName:"h3"},"*-**"),"ExecutorService*",(0,l.kt)("strong",{parentName:"h3"},"*\u4ecb\u7ecd")),(0,l.kt)("p",null,"ExecutorService\u63a5\u53e3\u662fjava\u5185\u7f6e\u7684\u7ebf\u7a0b\u6c60\u63a5\u53e3,\u901a\u8fc7\u5b66\u4e60\u63a5\u53e3\u4e2d\u7684\u65b9\u6cd5,\u53ef\u4ee5\u5feb\u901f\u7684\u638c\u63e1java\u5185\u7f6e\u7ebf\u7a0b\u6c60\u7684\u57fa\u672c\u4f7f\u7528"),(0,l.kt)("p",null,"\u5e38\u7528\u65b9\u6cd5:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"void shutdown()  \u542f\u52a8\u4e00\u6b21\u987a\u5e8f\u5173\u95ed\uff0c\u6267\u884c\u4ee5\u524d\u63d0\u4ea4\u7684\u4efb\u52a1\uff0c\u4f46\u4e0d\u63a5\u53d7\u65b0\u4efb\u52a1\u3002 ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"List\\<Runnable",">"," shutdownNow() \u505c\u6b62\u6240\u6709\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1\uff0c\u6682\u505c\u5904\u7406\u6b63\u5728\u7b49\u5f85\u7684\u4efb\u52a1\uff0c\u5e76\u8fd4\u56de\u7b49\u5f85\u6267\u884c\u7684\u4efb\u52a1\u5217\u8868\u3002 ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\\<T",">"," Future\\<T",">"," submit(Callable\\<T",">"," task)  \u6267\u884c\u5e26\u8fd4\u56de\u503c\u7684\u4efb\u52a1\uff0c\u8fd4\u56de\u4e00\u4e2aFuture\u5bf9\u8c61\u3002 ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Future\\<?",">"," submit(Runnable task) \u6267\u884c Runnable \u4efb\u52a1\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u8be5\u4efb\u52a1\u7684 Future\u3002 ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\\<T",">"," Future\\<T",">"," submit(Runnable task, T result)  \u6267\u884c Runnable \u4efb\u52a1\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u8be5\u4efb\u52a1\u7684 Future\u3002 "))),(0,l.kt)("h3",{id:"23java\u5185\u7f6e\u7ebf\u7a0b\u6c60-executorservice\u83b7\u53d6"},(0,l.kt)("strong",{parentName:"h3"},"2.3:Java**"),"\u5185\u7f6e\u7ebf\u7a0b\u6c60*",(0,l.kt)("strong",{parentName:"h3"},"*-**"),"ExecutorService*",(0,l.kt)("strong",{parentName:"h3"},"*\u83b7\u53d6")),(0,l.kt)("p",null,"\u83b7\u53d6ExecutorService\u53ef\u4ee5\u5229\u7528JDK\u4e2d\u7684Executors \u7c7b\u4e2d\u7684\u9759\u6001\u65b9\u6cd5,\u5e38\u7528\u83b7\u53d6\u65b9\u5f0f\u5982\u4e0b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"static ExecutorService newCachedThreadPool() \u521b\u5efa\u4e00\u4e2a\u9ed8\u8ba4\u7684\u7ebf\u7a0b\u6c60\u5bf9\u8c61,\u91cc\u9762\u7684\u7ebf\u7a0b\u53ef\u91cd\u7528,\u4e14\u5728\u7b2c\u4e00\u6b21\u4f7f\u7528\u65f6\u624d\u521b\u5efa ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"static ExecutorService newCachedThreadPool(ThreadFactory threadFactory) "),(0,l.kt)("p",{parentName:"li"},"\u200b     \u7ebf\u7a0b\u6c60\u4e2d\u7684\u6240\u6709\u7ebf\u7a0b\u90fd\u4f7f\u7528ThreadFactory\u6765\u521b\u5efa,\u8fd9\u6837\u7684\u7ebf\u7a0b\u65e0\u9700\u624b\u52a8\u542f\u52a8,\u81ea\u52a8\u6267\u884c; ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"static ExecutorService newFixedThreadPool(int nThreads)  \u521b\u5efa\u4e00\u4e2a\u53ef\u91cd\u7528\u56fa\u5b9a\u7ebf\u7a0b\u6570\u7684\u7ebf\u7a0b\u6c60 ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"static ExecutorService newFixedThreadPool(int nThreads, ThreadFactory threadFactory) "),(0,l.kt)("p",{parentName:"li"},"\u200b     \u521b\u5efa\u4e00\u4e2a\u53ef\u91cd\u7528\u56fa\u5b9a\u7ebf\u7a0b\u6570\u7684\u7ebf\u7a0b\u6c60\u4e14\u7ebf\u7a0b\u6c60\u4e2d\u7684\u6240\u6709\u7ebf\u7a0b\u90fd\u4f7f\u7528ThreadFactory\u6765\u521b\u5efa\u3002 ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"static ExecutorService newSingleThreadExecutor() "),(0,l.kt)("p",{parentName:"li"},"\u200b    \u521b\u5efa\u4e00\u4e2a\u4f7f\u7528\u5355\u4e2a worker \u7ebf\u7a0b\u7684 Executor\uff0c\u4ee5\u65e0\u754c\u961f\u5217\u65b9\u5f0f\u6765\u8fd0\u884c\u8be5\u7ebf\u7a0b\u3002 ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"static ExecutorService newSingleThreadExecutor(Thread")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Factory threadFactory) "),(0,l.kt)("p",{parentName:"li"},"\u200b     \u521b\u5efa\u4e00\u4e2a\u4f7f\u7528\u5355\u4e2a worker \u7ebf\u7a0b\u7684 Executor\uff0c\u4e14\u7ebf\u7a0b\u6c60\u4e2d\u7684\u6240\u6709\u7ebf\u7a0b\u90fd\u4f7f\u7528ThreadFactory\u6765\u521b\u5efa\u3002 "))),(0,l.kt)("h3",{id:"23java\u5185\u7f6e\u7ebf\u7a0b\u6c60-scheduledexecutorservice"},(0,l.kt)("strong",{parentName:"h3"},"2.3:Java**"),"\u5185\u7f6e\u7ebf\u7a0b\u6c60*",(0,l.kt)("strong",{parentName:"h3"},"*-**"),"ScheduledExecutorService**"),(0,l.kt)("p",null,"ScheduledExecutorService\u662fExecutorService\u7684\u5b50\u63a5\u53e3,\u5177\u5907\u4e86\u5ef6\u8fdf\u8fd0\u884c\u6216\u5b9a\u671f\u6267\u884c\u4efb\u52a1\u7684\u80fd\u529b,"),(0,l.kt)("p",null,"\u5e38\u7528\u83b7\u53d6\u65b9\u5f0f\u5982\u4e0b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"static ScheduledExecutorService newScheduledThreadPool(int corePoolSize)"),(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u53ef\u91cd\u7528\u56fa\u5b9a\u7ebf\u7a0b\u6570\u7684\u7ebf\u7a0b\u6c60\u4e14\u5141\u8bb8\u5ef6\u8fdf\u8fd0\u884c\u6216\u5b9a\u671f\u6267\u884c\u4efb\u52a1;")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"static ScheduledExecutorService newScheduledThreadPool(int corePoolSize, ThreadFactory threadFactory)"))),(0,l.kt)("p",null,"\u200b     \u521b\u5efa\u4e00\u4e2a\u53ef\u91cd\u7528\u56fa\u5b9a\u7ebf\u7a0b\u6570\u7684\u7ebf\u7a0b\u6c60\u4e14\u7ebf\u7a0b\u6c60\u4e2d\u7684\u6240\u6709\u7ebf\u7a0b\u90fd\u4f7f\u7528ThreadFactory\u6765\u521b\u5efa,\u4e14\u5141\u8bb8\u5ef6\u8fdf\u8fd0\u884c\u6216\u5b9a\u671f\u6267\u884c\u4efb\u52a1; "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"static ScheduledExecutorService newSingleThreadScheduledExecutor() ")),(0,l.kt)("p",null,"\u200b     \u521b\u5efa\u4e00\u4e2a\u5355\u7ebf\u7a0b\u6267\u884c\u7a0b\u5e8f\uff0c\u5b83\u5141\u8bb8\u5728\u7ed9\u5b9a\u5ef6\u8fdf\u540e\u8fd0\u884c\u547d\u4ee4\u6216\u8005\u5b9a\u671f\u5730\u6267\u884c\u3002 "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"static ScheduledExecutorService newSingleThreadScheduledExecutor(ThreadFactory threadFactory) ")),(0,l.kt)("p",null,"\u200b      \u521b\u5efa\u4e00\u4e2a\u5355\u7ebf\u7a0b\u6267\u884c\u7a0b\u5e8f\uff0c\u5b83\u53ef\u5b89\u6392\u5728\u7ed9\u5b9a\u5ef6\u8fdf\u540e\u8fd0\u884c\u547d\u4ee4\u6216\u8005\u5b9a\u671f\u5730\u6267\u884c\u3002 "),(0,l.kt)("h3",{id:"23java\u5185\u7f6e\u7ebf\u7a0b\u6c60-scheduledexecutorservice-1"},(0,l.kt)("strong",{parentName:"h3"},"2.3:Java**"),"\u5185\u7f6e\u7ebf\u7a0b\u6c60*",(0,l.kt)("strong",{parentName:"h3"},"*-**"),"ScheduledExecutorService**"),(0,l.kt)("p",null,"ScheduledExecutorService\u5e38\u7528\u65b9\u6cd5\u5982\u4e0b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"<\\V",">"," ScheduledFuture\\<V",">"," schedule(Callable\\<V",">"," callable, long delay, TimeUnit unit) ")),(0,l.kt)("p",null,"\u200b     \u5ef6\u8fdf\u65f6\u95f4\u5355\u4f4d\u662funit,\u6570\u91cf\u662fdelay\u7684\u65f6\u95f4\u540e\u6267\u884ccallable\u3002 "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ScheduledFuture\\<?",">"," schedule(Runnable command, long delay, TimeUnit unit) ")),(0,l.kt)("p",null,"\u200b     \u5ef6\u8fdf\u65f6\u95f4\u5355\u4f4d\u662funit,\u6570\u91cf\u662fdelay\u7684\u65f6\u95f4\u540e\u6267\u884ccommand\u3002 "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ScheduledFuture\\<?",">"," scheduleAtFixedRate(Runnable command, long initialDelay, long period, TimeUnit unit) ")),(0,l.kt)("p",null,"\u200b     \u5ef6\u8fdf\u65f6\u95f4\u5355\u4f4d\u662funit,\u6570\u91cf\u662finitialDelay\u7684\u65f6\u95f4\u540e,\u6bcf\u95f4\u9694period\u65f6\u95f4\u91cd\u590d\u6267\u884c\u4e00\u6b21command\u3002 "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ScheduledFuture\\<?",">"," scheduleWithFixedDelay(Runnable command, long initialDelay, long delay, TimeUnit unit) ")),(0,l.kt)("p",null,"\u200b     \u521b\u5efa\u5e76\u6267\u884c\u4e00\u4e2a\u5728\u7ed9\u5b9a\u521d\u59cb\u5ef6\u8fdf\u540e\u9996\u6b21\u542f\u7528\u7684\u5b9a\u671f\u64cd\u4f5c\uff0c\u968f\u540e\uff0c\u5728\u6bcf\u4e00\u6b21\u6267\u884c\u7ec8\u6b62\u548c\u4e0b\u4e00\u6b21\u6267\u884c\u5f00\u59cb\u4e4b\u95f4\u90fd\u5b58\u5728\u7ed9\u5b9a\u7684\u5ef6\u8fdf\u3002 "),(0,l.kt)("h3",{id:"23java\u5185\u7f6e\u7ebf\u7a0b\u6c60-\u5f02\u6b65\u8ba1\u7b97\u7ed3\u679cfuture"},(0,l.kt)("strong",{parentName:"h3"},"2.3:Java**"),"\u5185\u7f6e\u7ebf\u7a0b\u6c60*",(0,l.kt)("strong",{parentName:"h3"},"*-**"),"\u5f02\u6b65\u8ba1\u7b97\u7ed3\u679c*",(0,l.kt)("strong",{parentName:"h3"},"*(Future)")),(0,l.kt)("p",null,"Future \u7684\u5e38\u7528\u65b9\u6cd5\u5982\u4e0b:"),(0,l.kt)("p",null,"boolean cancel(boolean mayInterruptIfRunning) "),(0,l.kt)("p",null,"\u200b     \u8bd5\u56fe\u53d6\u6d88\u5bf9\u6b64\u4efb\u52a1\u7684\u6267\u884c\u3002 "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"V get()")),(0,l.kt)("p",null,"\u200b     \u5982\u6709\u5fc5\u8981\uff0c\u7b49\u5f85\u8ba1\u7b97\u5b8c\u6210\uff0c\u7136\u540e\u83b7\u53d6\u5176\u7ed3\u679c\u3002 "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"V get(long timeout, TimeUnit unit) ")),(0,l.kt)("p",null,"\u200b     \u5982\u6709\u5fc5\u8981\uff0c\u6700\u591a\u7b49\u5f85\u4e3a\u4f7f\u8ba1\u7b97\u5b8c\u6210\u6240\u7ed9\u5b9a\u7684\u65f6\u95f4\u4e4b\u540e\uff0c\u83b7\u53d6\u5176\u7ed3\u679c\uff08\u5982\u679c\u7ed3\u679c\u53ef\u7528\uff09\u3002 "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"boolean isCancelled() ")),(0,l.kt)("p",null,"\u200b     \u5982\u679c\u5728\u4efb\u52a1\u6b63\u5e38\u5b8c\u6210\u524d\u5c06\u5176\u53d6\u6d88\uff0c\u5219\u8fd4\u56de true\u3002 "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"boolean isDone() ")),(0,l.kt)("p",null,"\u200b     \u5982\u679c\u4efb\u52a1\u5df2\u5b8c\u6210\uff0c\u5219\u8fd4\u56de true\u3002 "),(0,l.kt)("h2",{id:"\u7ebf\u7a0b\u6c60\u603b\u7ed3"},(0,l.kt)("strong",{parentName:"h2"},"\u7ebf\u7a0b\u6c60\u603b\u7ed3")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ebf\u7a0b\u6c60\u7684\u4f7f\u7528\u6b65\u9aa4\u53ef\u4ee5\u5f52\u7eb3\u603b\u7ed3\u4e3a\u4e94\u6b65")," ",(0,l.kt)("strong",{parentName:"p"},":")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"1:\u5229\u7528Executors\u5de5\u5382\u7c7b\u7684\u9759\u6001\u65b9\u6cd5,\u521b\u5efa\u7ebf\u7a0b\u6c60\u5bf9\u8c61;")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"2:\u7f16\u5199Runnable\u6216Callable\u5b9e\u73b0\u7c7b\u7684\u5b9e\u4f8b\u5bf9\u8c61;")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"3:\u5229\u7528ExecutorService\u7684submit\u65b9\u6cd5\u6216ScheduledExecutorService\u7684schedule\u65b9 \u6cd5\u63d0\u4ea4\u5e76\u6267\u884c\u7ebf\u7a0b\u4efb\u52a1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"4:\u5982\u679c\u6709\u6267\u884c\u7ed3\u679c,\u5219\u5904\u7406\u5f02\u6b65\u6267\u884c\u7ed3\u679c(Future)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"5:\u8c03\u7528shutdown()\u65b9\u6cd5,\u5173\u95ed\u7ebf\u7a0b\u6c60"))))}k.isMDXComponent=!0},69983:function(e,t,a){t.Z=a.p+"assets/files/\u7ebf\u7a0b\u6c60\u7814\u53d1\u8bb2\u4e49-c36d8f70fb08410647a69a519a59fb2b.ppt"},35989:function(e,t,a){t.Z=a.p+"assets/files/\u90d1\u5dde\u6821\u533a-\u5f20\u5b66\u5168-\u7ebf\u7a0b\u6c60\u7814\u53d1\u5927\u7eb2_v2019-11-21-1846fbb08701862c9968c2bebcd128d3.xmind"},44549:function(e,t,a){t.Z=a.p+"assets/images/image-20210909101328978-93b06f755c3727450968833d3bfa6e0d.png"}}]);