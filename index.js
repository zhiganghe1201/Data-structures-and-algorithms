function Node(value) {
	this.value = value;
	this.next = null;
}

var node1 = new Node(1)
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5)

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;



function nizhi(root) {
	if(root.next.next === null) {
		root.next.next = root;
		return root.next;
	} else {
		console.log(1,' -----');
		const result = nizhi(root.next);
		console.log('999');
		
		root.next.next = root;
		root.next = null;
		return result;
	}
}

// const newRoot = nizhi(node1)

// function bianLink(root) {
// 	if(root === null) return
// 	// console.log(root.value);
// 	bianLink(root.next)
	
// }

// bianLink(newRoot)


let arr = [1,9,2,2,23,3,4];


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

// const newArr = quickSort(arr);

// console.log(newArr);


// function checkType(type) {
// 	return v => Object.prototype.toString.call(v) === `[object ${type}]`
// }

const checktype = type => v => Object.prototype.toString.call(v) === `[object ${type}]`;

const isNumber = checktype('Number');

// console.log(isNumber(2323));


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

console.log(bubbleSort(arr))