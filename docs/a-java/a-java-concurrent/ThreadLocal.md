# ThreadLocal学习

ThreadLocal**主要是用于**

1. **数据传递** 保存每个线程绑定的数据,在需要的地方可以直接获取,避免参数直接传递带来的代码耦合问题

2. **线程隔离** 各线程之间的数据相互隔离却又具备并发性,避免同步方式带来的性能损失

   

## 1.ThreadLocal与Synchronized的区别

- 相同点:

都是解决程序并发时,数据同步问题



- 不同点:
  1. ThreadLocal性能高,Synchronized性能低
  2. Synchronized是以时间换空间,提供一份变量,给不同线程排队访问,ThreadLocal是以空间换时间,为每个线程提供副本,从而实现同时访问,相互不干扰
  3. synchronized侧重点是多线程之间资源的同步, ThreadLocal是多线程资源隔离





## 2.ThreadLocal在jdk8设计

在jdk8以后,ThreadLocal的设计和早期不同

**好处在于:**

1. **每个Map存储的Entry数量变少**
2. **当Thread销毁的时候,ThreadLocalMap也会随之销毁,减少内存占用**



## 3.ThreadLocal源码分析

## 4.ThreadLocalMap源码分析

### 使用弱引用避免内存泄漏.