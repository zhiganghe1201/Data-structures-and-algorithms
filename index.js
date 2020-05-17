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


let arr = [4,1,6,9,3,2,8,7];


function compare(a, b) {
	if(b < a) return true;
	else return false;
}

function exchange(arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp
}

function sort(arr) {
	for(let j = 0; j < arr.length; j ++) {
		for(let i = 0, len = arr.length - 1; i < len - j; i++) {
			if(compare(arr[i], arr[i + 1])) {
				exchange(arr, i, i + 1)
			}
		}
	}
	
	// return arr
}

console.log(sort(arr))
console.log(arr);
