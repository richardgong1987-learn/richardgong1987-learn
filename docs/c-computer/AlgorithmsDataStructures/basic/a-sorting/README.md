---
sidebar_position: 1
---



# 各种排序

## 1.冒泡排序


**特点:**

每次循环,通过挨个对比相邻的两个元素,并交换位置,最终每一轮它都会找出最大的排到最后面

![image](asserts/images/strip-20210722172149013.gif)

```java
do

  swapped = false

  for i = 1 to indexOfLastUnsortedElement-1
    if leftElement > rightElement
      swap(leftElement, rightElement)
      swapped = true

while swapped
```

这里需要保存indexOfLastUnsortedElement最后的被排序元素索引,用于节省时间复杂度



## 2.选择排序

**原理:**

它只是每次从一组中**选择最(小/大)**的数,取出来,按排序add到array里.

```java
        var list = new ArrayList<>(List.of(5, 3, 4, 7, 2));
        var result = new ArrayList<Integer>();

        while (!list.isEmpty()) {
            /**
             * looking min item
             */
            var max = Collections.min(list);
            /**
             * add to result
             */
            result.add(max);


            list.remove(max);
        }
        System.out.println(result);

```

![image](asserts/images/strip-20210722172131496.gif)









## 3.插入排序

**步骤:**

它是先把第二个元素开始.

- 看一下自己的前面的元素是否大于自己,
- 如果大于自己就继续往前查找,
- 直接找到比自己小的元素前插入.





![image](asserts/images/strip-20210722172049933.gif)

```java
mark first element as sorted

for each unsorted element X

  'extract' the element X

  for j = lastSortedIndex down to 0

    if current element j > X

      move sorted element to the right by 1

    break loop and insert X here
```



## 4. 合并排序(merge sort)

#### 5.1 算法步骤

- 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
- 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
- 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
- 重复步骤 3 直到某一指针达到序列尾；
- 将另一序列剩下的所有元素直接复制到合并序列尾。

![image](asserts/images/strip-20210722171936261.gif)

```java
split each element into partitions of size 1

recursively merge adjacent partitions

  for i = leftPartIdx to rightPartIdx

    if leftPartHeadValue <= rightPartHeadValue

      copy leftPartHeadValue

    else: copy rightPartHeadValue

copy elements back to original array

```



## 5.快速排序

**主要的思想:**

先从中间取一下pivot

然后基于pivot,

小的放基于pivot左边,大的放基于pivot后边

当左下标和右下标重合时,就排序完一轮

然后,递归把左组的数据重新来一遍



![image](asserts/images/strip-20210722171912312.gif)

```java
for each (unsorted) partition

set first element as pivot

  storeIndex = pivotIndex + 1

  for i = pivotIndex + 1 to rightmostIndex

    if element[i] < element[pivot]

      swap(i, storeIndex); storeIndex++

  swap(pivot, storeIndex - 1)
```

**参考视频:**

https://www.bilibili.com/video/BV1at411T75o/?spm_id_from=autoNext



## 6. 计数排序

####  算法步骤

- 花O(n)的时间扫描一下整个序列 A，获取最小值 min 和最大值 max

- 开辟一块新的空间创建新的数组 B，长度为 ( max - min + 1)

- 数组 B 中 index 的元素记录的值是 A 中某元素出现的次数

- 最后输出目标整数序列，具体的逻辑是遍历数组 B，输出相应元素以及对应的个数

  ![image](asserts/images/strip.gif)

  ```java
  create key (counting) array

  for each element in list

    increase the respective counter by 1

  for each counter, starting from smallest key

    while counter is non-zero

      restore element to list

      decrease counter by 1
  ```



## 7.基数排序

#### 算法步骤

- 将所有待比较数值（正整数）统一为同样的数位长度，数位较短的数前面补零
- 从最低位开始，依次进行一次排序
- 从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列

![image](asserts/images/strip-20210722172532660.gif)

```java
create 10 buckets (queues) for each digit (0 to 9)

for each digit placing

  for each element in list

    move element into respective bucket

  for each bucket, starting from smallest digit

    while bucket is non-empty

      restore element to list
```



## 8. 堆排序

####  算法步骤

- 创建一个堆 H[0……n-1]；
- 把堆首（最大值）和堆尾互换；
- 把堆的尺寸缩小 1，并调用 shift_down(0)，目的是把新的数组顶端数据调整到相应位置；
- 重复步骤 2，直到堆的尺寸为 1



![image](asserts/images/strip-20210722173120814.gif)
