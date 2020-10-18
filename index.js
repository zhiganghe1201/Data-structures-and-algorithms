function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

const a1 = new Node('a');
const b1 = new Node('b');
const c1 = new Node('c');
const d1 = new Node('d');
const e1 = new Node('e');
const f1 = new Node('f');
const g1 = new Node('g');

a1.left = c1;
a1.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = e1;


const a2 = new Node('a');
const b2 = new Node('b');
const c2 = new Node('c');
const d2 = new Node('d');
const e2 = new Node('e');
const f2 = new Node('f');
const g2 = new Node('g');

a2.left = c2;
a2.right = b2;
c2.left = f2;
// c2.right = g2;
b2.left = d2;
b2.right = e2;
f2.right = g2



function diffTree(root1, root2, diffList) {
	if(root1 === root2) return diffList;
	if(root1 === null && root2 !== null) {
		diffList.push({ type: '新增', origin: root1, now: root2})
	} else if(root1 !== null && root2 === null) {
		diffList.push({ type: '删除', origin: root1, now: root2})
	} else if(root1.value !== root2.value) {
		console.log(root1, root2);
		
		diffList.push({ type: '修改', origin: root1, now: root2})
		diffTree(root1.left, root2.left, diffList);
		diffTree(root1.right, root2.right, diffList)
	} else {
		diffTree(root1.left, root2.left, diffList);
		diffTree(root1.right, root2.right, diffList)
	}
}

const diffList = [];
diffTree(a1, a2, diffList);
console.log(diffList);


function compareTree(root1, root2) {
	if(root1 === root2) return true;
	if(root1 === null && root2 !== null || root1 !== null && root2 === null) return false;
	if(root1.value !== root2.value) return false;
	const leftBool = compareTree(root1.left, root2.left);
	const rightBool = compare(root1.right, root2.right);
	return leftBool && rightBool;
}

function deepSearch(root, target) {
	if(root === null) return false;
	if(root.value === target) return true;
	let left = deepSearch(root.left, target)
	let right = deepSearch(root.right, target);
	return left || right
}


function breadthSearch(rootList, target) {
	if(rootList === null || rootList.length === 0) return false;
	const childList = [];
	for(let i = 0, len = rootList.length; i < len; i ++) {
		if(rootList[i].value === target) return true;
		childList.push(rootList[i].left);
		childList.push(rootList[i].right)
	}

	return breadthSearch(childList, target);

}


const point = ['A', 'B', 'C', 'D', 'E'],
const distance = [
	[0, 4, 7, max, max],
	[4, 0 ,8, 6, max],
	[7, 8 ,0, 5, max],
	[0, ,4 ,7, max, max],
	[max, max, max,7, max, max],
]