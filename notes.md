# 数据结构与算法有什么关系？

- 可以容纳数据的结构被称为数据结构。
- 算法是用来对数据结构进行处理的方法。
- 数据结构是静态的， 算法是动态；

# 线性数据结构之数组

一维数据结构：（线性数据结构） 线性的数据结构强调存储与顺序

一维是个线， 二维是个面， 三维是个立方体， 四维带时间；

### 数组

1. 数组是定长的； 长度不够的时候会出现数组扩容；
	如： 一开始数组长度是8； 放1～8； 如果加个9； 操作系统重新分配一个长度为16长度的数组， 把1～8复制过来 把9加上



- 数组特性
	1. 存储在物理空间是连续的；
	2. 底层的数组长度是不可变的；长度不变时数组会进行扩容；
	3. 数组的变量， 指向了数组的第一个元素的位置； ` let a = [1,2,3,4] `;  a[1]、a[2];  方括号表示数组的偏移。 操作系统小知识： **通过偏移查询数据的性能最好**；

优点: 
查询性能好； 指定查询某个位子；

缺点： 
1. 因为空间必须是连续的，所以如果数组比较大，当系统的空间碎片比较多的时候， 容易存不下。（空间碎片：小的零碎的不连续的空间）；
2. 因为数组的长度是固定的，所以数组的内容难以被添加和删除；



# 线性数据结构之链表（不特殊说明都是单链表）

链表结构： a、b

a里面存了a的值和b的引用；

```js
var a = {
	value: 1,
	next: b // 存了b的引用
}

var b = {
	value: 2,
	next: c
}

```

我想传递一个链表， 我必须传递链表的根节点。（**每一个节点， 都认为自己是根节点**）

链表只记录自己和下一个节点的引用；

**链表的特点**
1. 空间上不是连续的；
2. 每存放一个值， 都要多开销一个引用空间

优点：
1. 只要内存只够大，就能存的下，不用担心空间碎片；
2. 链表的添加和删除非常容易；

缺点：
1. 查询速度慢（指定查询某个位置）
2. 链表每一个节点都需要创建一个指向next的引用， 浪费一些空间。 当节点内数据越多的时候， 这部分多开销的内存影响越少；

```js
// 创建一个链表

function Node(value) {
	this.value = value;
	this.next = null;
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);

a.next = b;
b.next = c;
c.next = d;
d.next = null

```

# 线性数据结构的遍历

遍历： 将一个集合中的每一个元素进行获取并查看


**循环遍历**
```js
var arr = [1,2,3,4,5,6,7,8];

function bianArr(arr) {
    if (arr == null) return; // 算法必须要有严谨性判断， 算法报错了一分没有；
    for (var i = 0 ; i < arr.length ; i ++) {
        console.log(arr[i]);
    }
}

function Node(value) {
	this.value = value;
	this.next = null;
}
// 创建一个个节点
var node1 = new Node(1)
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);

// 组合成链表
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;

function bianLink(root) {
	var temp = root;
	while (true) { // 因为不知道链表的长度
		if(temp !== null) {
			console.log(temp.value);
		} else {
			break
		}
		temp = temp.next;
	}
}
```

**递归遍历**

循环遍历的性能最好， 递归遍历数组不推荐， 递归遍历链表推荐

```js
function Node(value) {
	this.value = value;
	this.next = null;
}

var node1 = new Node(1)
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;

function bianLink(root) {
	if(root === null) return; // 递归的关键点是找出口；
	console.log(root.value);
	bindLink(root.next)
}


// 递归遍历数组  不推荐
let arr = [1,2,3,4,5,6,7];

function bianArr(arr, i) {
	if(arr === null || arr.length <= i) return;
	console.log(arr[i]);
	bianArr(arr, i + 1)
}

bianArr(arr, 0)

```

# 链表的逆置

先找到最后一个节点，把最后一个节点指向倒数第二个节点；以此类推； 第一个节点指向空；

```js
function Node(value) {
	this.value = value;
	this.next = null;
}

var node1 = new Node(1)
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;


function nizhi(root) {
	if(root.next.next === null) { // 当前的节点是倒数第二个节点；
		root.next.next = root; // 把最后一个节点指向自己（倒数第二个节点）
		return root.next; // 返回最后一个节点， 逆置后的根节点；
	} else {
		let result = nizhi(root.next);
		root.next.next = root; // 让下一个节点指向自己
		root.next = null; // 自己指向空  主要是第一个节点必须指向空
		return result;

	}
}


```


# 冒泡排序

排序的本质不是比较大小， 本质是比较和交换

```js

var arr = [4,1,6,9,3,2,8,7];

// 比较之后需要得出是否需要交换
function compre(a, b) {
	if(a < b) return false;
	else return true;

}

//将数组中ab位置里的值进行交换
function exchange(arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

//这个sort可以是冒泡排序也可以是选择排序也可以是其它排序。
function sort(arr) {

	for(let i = 0; i < arr.length; i ++) {
		for(let j = 0, len = arr.length - 1; j < len - i; j ++) { // 每次排序是把最大的数放到数组的最后面  每次循环后最后的两个数不用比较
				if(compre(arr[j], arr[j + 1])) {
					exchange(arr, j, j + 1)
				}
			}
	}
	
}

```

