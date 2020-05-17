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
