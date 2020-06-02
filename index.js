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

function breadthSearch(rootList, target) {
	if(rootList === null || rootList.length === 0) return false;
	let childList = [];
	for(let i = 0; i < rootList.length; i++) {
		console.log(rootList[i].value);
		
		if(rootList[i] !== null && rootList[i].value === target) {
			return true;
		} else {
			childList.push(rootList[i].left);
			childList.push(rootList[i].right);
		}
	}

	return breadthSearch(childList, target);
}
console.log(breadthSearch([a], 'd'));
