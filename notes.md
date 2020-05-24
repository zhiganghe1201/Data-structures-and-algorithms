# 数据结构与算法有什么关系？

- 可以容纳数据的结构被称为数据结构。
- 算法是用来对数据结构进行处理的方法。
- 数据结构是静态的， 算法是动态；

# 线性数据结构之数组

一维数据结构：（线性数据结构） 线性的数据结构强调存储与顺序

一维是个线， 二维是个面， 三维是个立方体， 四维带时间；

### 数组

1. 数组是定长的； 长度不够的时候会出现数组扩容；
	如： 一开始数组长度是8； 放1～8； 如果加个9； 操作系统重新分配一个长度为16长度的数组（可能会分配16长度）， 把1～8复制过来 把9加上



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

术语解释：

n: 数据的规模

稳定： 两个相等的值在排序前后相对位置是否改变，如果不会改变则成为稳定，反之为不稳定

排序方式：**内排序**In-place是指所有操作都在内存中完成；**外排序**Out-place把数据放在磁盘中，排序通过磁盘和内存的数据传输才能进行；

时间复杂度：算法执行所消耗的时间；

空间复杂度：算法执行所需的内存的大小；

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

sort(arr);

console.log(arr)

// 优化后的冒泡排序
function bubbleSort(arr) {
	for(let i = 0, len = arr.length; i < len; i ++) {
		let flag = true; // 维护一个flag 如果内层循环一次没有出现 数的交换说明此时已经排序好了， 就没有必要继续循环排序了
		for(let j = 0, len = arr.length - 1 -i; j < len; j ++) { // 这里的减 i 是说明每一次外层循环好， 数组的最后一位已经是最大值了；
			if(arr[j] > arr[j + 1]) {
				flag = false;
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}

		if(flag) break;
	}
	return arr;
}

```

# 选择排序

### 任何一个排序算法没有优劣之分， 只有是否适合的场景， 
冒泡排序适合越有序数据集， 选择排序适合比较一般乱的数据集， 快速排序适合越混乱的数据集


```js

function compare(a, b) {
	if(a < b) return false;
	else return true;
}

function exchange(arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

// 选择排序内层循环， 每一圈选出最大的， 然后放在后面
function sort(arr) {
	for(let i = 0; i < arr.length; i ++) {
		let maxIndex = 0;
		for(let j = 0; j < arr.length - i; j ++) {
			if(compare(arr[j], arr[maxIndex])) {
				maxIndex = j
			}
		}
		exchange(arr, maxIndex, arr.length - 1 -i) // 
	}
}


```


# 简单快速排序

拿数组的第一位当排头， 比我小的放右边， 比我大的放左边；

```js
let arr = [4,1,6,9,3,2,8,7];

// 简易般 这种会创建很多数组
function quickSort(arr) {
	if(arr === null || arr.length === 0) return []
	let leader = arr[0];
	let left = [];
	let right = [];
	for(let i = 1; i < arr.length; i ++) {
		if(arr[i] < leader) {
			left.push(arr[i])
		}else {
			right.push(arr[i])
		}
	}
	left = quickSort(left);
	right = quickSort(right);
	left.push(leader);
	return left.concat(right)

}

const newArr = quickSort(arr);

console.log(newArr);

```

# 标准快速排序

数组第1个数为基数， 排序区间以后往右找比基数大的数， 从右往左找比基数小的； 原地交换； 当left > right 时， 把 begin 的数和 right 的数交换 这时 begin 左边的数都比它小， 右边的数都比它大；

```js
function swap(arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

// begin、end 作为数组的排序的开始和结束  前闭后开 [ )
function quickSort(arr, begin, end) {
	if(begin >= end - 1) return;
	let left = begin;
	let right = end;

	do {
		do left ++; while(left < right && arr[left] < arr[begin]);
		do right --; while(left < right && arr[right] > arr[begin]);

		if(left < right) {
			swap(arr, left right);
		}
	} while(left < right);
	let swapPoint = left === right ? right - 1 : right;
	swap(arr, begin, swapPoint);
	quickSort(arr, begin, swapPoint);
	quickSort(arr, swapPoint + 1, end);
}


function q(arr) {
	quick(arr, 0, arr.length);
}


```



# 栈和队列

栈： 先进后出
队列： 先进先出

```js
// 栈
function Stack() {
	this.arr = [];
	this.push = function(value) {
		this.arr.push(value)
	};
	this.pop = function() {
		return this.arr.pop()
	}

}

// 队列
function Queue() {
	this.arr = [];
	this.push = function(value) {
		this.arr.push(arr);
	};
	this.pop = function() {
		return this.arr.unshift();
	}
}

```

# 双向链表

```js


function Node(value) {
    this.value;
    this.next = null;
    this.pre = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.pre = node1;
node2.next = node3;
node3.pre = node2;
node3.next = node4;
node4.pre = node3;
node4.next = node5;
node5.pre = node4;

// 双向链表的优点，无论给出哪一个节点，都能对整个链表进行遍历。 没有头也没有尾
// 双向链表的缺点，多耗费一个引用的空间，而且构建双向链表比较复杂。


```

# 二维数据结构

1. 二维数组

2. 二维拓扑结构（图）（拓扑：不看大小， 不看位置， 不看距离， 只看关系）  -->  二叉树

# 树形结构 -- 有向无环图
（点开文件夹一样）树是图的一种；  A 只能指向 B， B 不能指向 A; 只能单向

1. 树形结构有一个根节点， 树形结构没有回路；

- 根节点: 最上面的节点
- 叶子节点： 下面没有节点了；
- 节点： 既不是根节点， 又不是叶子节点的普通节点
- 树的度： 这个树有最多分支的节点有多少个 分支， 这颗树的度 就是多少
- 树的深度： 树最多有几层， 树的深度就是多少；
- 子节点： 么个节点下面所有的第一层的节点；（多个）
- 父节点： 么个节点的上一个节点（二叉树只有一个父节点）

# 二叉树

> 树的度最多为2的树形结构（即最多2个分支）

### 满二叉树

1. 所有叶子节点都在最底层；
2. 除叶子节点外，每个节点，都有两个子节点

### 完全二叉树

1. 国内定义：
	- 叶子节点在最后一层或倒数第二层；
	- 叶子节点都向左靠拢

2. 国际定义:
	- 叶子节点在最后一层或倒数第二层；
	- 如果有叶子节点， **就必须有两个叶子节点**

### 二叉树中子树的概念

> 在二叉树中， 每个节点都认为自己是根节点；

- 子树： 二叉树中， 每一个节点或叶子节点都是一颗子树的根节点；

- 左子树、右子树； 相对于根节点而言来划分左子树、右子树；

# 二叉树的遍历

> 传递二叉树要传根节点

![二叉树](./assets/images/tree.png)

- 前序遍历：（先根次序遍历） 先打印当前的， 再打印左边的子树， 再打印右边的子树。   **根节点在最前面 DLR** | **ACFGBDE**
- 中序遍历：（中根次序遍历） 先打印左边的子树， 再打印当前的， 再打印右边的子树。（节点在地上的投影）  **根节点在中间 LDR** | **FCGADBE**
- 后序遍历：（后根次序遍历） 先打印左边边的子树， 再打印右边的子树。 再打印当前的。   **根节点在最后面 LRD** | **FGCDEBA**

- 层次遍历： 从上到下、从左到右； **ACBFGDE**


### 前序遍历

```js
function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
const g = new Node('g')

a.left = c
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

// 前序遍历 先当前再左再右
function DLR(root) {
	if(root === null) return;
	console.log(root.value);
	DLR(root.right)
	
}

DLR(a)

```

### 中序遍历

```js
function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
const g = new Node('g')

a.left = c
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;
// 中序遍历 先左再当前再右
function LDF(root) {
	if(root === null) return;
	LDF(root.left);
	console.log(root.value);
	LDF(root.right)
	
}

LDF(a)
```

### 后序遍历

```js

function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

// 后序遍历  先左再右再当前
function RDL(root) {
	if(root === null) return;
	RDL(root.left)
	RDL(root.right);
	console.log(root.value);
}

RDL(a)

```

#### 常考点
> 还原二叉树必须要有中序遍历

1. 给出二叉树，写出前序、中序、后序遍历
2. 写出前序、中序、后序遍历的代码
3. 给出前序、中序还原二叉树，写出后序遍历；
4. 给出后序、中序还原二叉树，写出前序遍历；

### 给出前序、中序 还原二叉树

```js
const qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
const zhon = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

function f1(qian, zhon) {
	if(qian === null || zhon === null || qian.length === 0 || qian.length === 0 || qian.length !== zhon.length) return null;
	let root = new Node(qian[0]);
	let rootIndex = zhon.indexOf(root.value); // 找到根节点在中序遍历中的位置
	let qianLeft = qian.slice(1, rootIndex + 1); // 找到前序遍历的左子树
	let qianRight = qian.slice(rootIndex + 1, qian.length); // 找到前序遍历的右子树
	let zhonLeft = zhon.slice(0, rootIndex); // 中序遍历的左子树
	let zhonRight = zhon.slice(rootIndex + 1, zhon.length); // 中序遍历的右子树

	root.left = f1(qianLeft, zhonLeft); //根据左子树的 前序和中序还原左子树并赋值给root.left
	root.right = f1(qianRight, zhonRight); //根据左子树的 前序和中序还原左子树并赋值给root.left
	return root;
}

```

### 给出后序、中序 还原二叉树

```js
let hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];
let zhon = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

function f1(hou, zhon) {
	if(hou === null || zhon === null || hou.length === 0 || zhon.length === 0 || hou.length !== zhon.length ) return null;

let root = new Node(hou[hou.length - 1]);
let rootIndex = zhon.indexOf(root.value);
let houLeft = hou.slice(0, rootIndex);
let houRight = hou.slice(rootIndex, hou.length - 1);
let zhonLeft = zhon.slice(0, rootIndex);
let zhonRight = zhon.slice(rootIndex + 1, zhon.length);

root.left = f1(houLeft, zhonLeft);
root.right = f1(houRight, zhonRight);

return root;
}

```