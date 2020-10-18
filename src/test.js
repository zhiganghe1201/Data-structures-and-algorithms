const arr = [];

for (let i = 0; i < 10; i++) {
	arr[i] = Math.floor(Math.random() * 10000)
	
}
let num = 0;
function search(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		num ++
		if(arr[i] === target) return true;
	}
	return false;
}


// console.log(search(arr, 1000), num)


function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

let a = [4,1,2,3,6,5]
function addNode(root, num) {
	if(root === null) return;
	if(root.value === num) return;
	if(root.value < num) { // 目标值比当前值大
		if(root.right === null) root.right = new Node(num);
		else addNode(root.right, num)
	} else { // 目标值比当前值大
		if(root.left === null) root.left = new Node(num);
		else addNode(root.left, num)
	}
}

/**
 * 通过一个数组创建一个二叉搜索树
 * @param {*} arr 
 */
function buildSearchTree(arr) {
	if(arr === null || arr.length === 0) return null;
	let root = new Node(arr[0])

	for (let i = 1; i < arr.length; i++) {
		addNode(root, arr[i])
	}
	return root;
}


const newArr = buildSearchTree(a);
console.log(newArr);

function searchByTree(root, target) {
	if(root === null) return false;
	if(root.value === target) return true;
	if(root.value > target) return searchByTree(root.left, target);
	else return searchByTree(root.right, target)
}