// const qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
// const zhon = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

// function Node(value) {
// 	this.value = value;
// 	this.left = null;
// 	this.right = null;
// }

// // function f1(qian, zhon) {
// // 	if(qian === null || zhon === null || qian.length === 0 || zhon.length === 0 || qian.length !== zhon.length) return;
// // 	let root = new Node(qian[0]);
// // 	let rootIndex = zhon.indexOf(root.value);
// // 	let qianLeft = qian.slice(1, rootIndex + 1);
// // 	let qianRight = qian.slice(1 + rootIndex, qian.length);
// // 	let zhonLeft = zhon.slice(0, rootIndex);
// // 	let zhonRight = zhon.slice(rootIndex + 1, zhon.length);
// // 	// console.log(qianLeft, qianRight, zhonLeft, zhonRight);
// // 	root.left = f1(qianLeft, zhonLeft);
// // 	root.right = f1(qianRight, zhonRight)

// // 	return root;
// // }

// function f1(qian, zhon) {
// 	if(qian === null || zhon === null || qian.length === 0 || qian.length === 0 || qian.length !== zhon.length) return null;
// 	let root = new Node(qian[0]);
// 	let rootIndex = zhon.indexOf(root.value);
// 	let qianLeft = qian.slice(1, rootIndex + 1);
// 	let qianRight = qian.slice(rootIndex + 1, qian.length);
// 	let zhonLeft = zhon.slice(0, rootIndex);
// 	let zhonRight = zhon.slice(rootIndex + 1, zhon.length);

// 	root.left = f1(qianLeft, zhonLeft);
// 	root.right = f1(qianRight, zhonRight);
// 	return root;
// }

// let root = f1(qian, zhon)

// console.log(root);


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

let root = f1(hou, zhon);

console.log(root);
