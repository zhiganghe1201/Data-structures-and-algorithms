// 扁平化数组 flat 

const arr = [1, [2, [3, 4]]];

// console.log(flatten(arr))  --> [1, 2, 3, 4];


// 利用Array.prototype.flat() 实现数组降维
// flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
const newArr = arr.flat(Infinity);



// 递归实现
function flatten(arr) {
	let result = [];
	for(let i = 0, len = arr.length; i < len; i++) {
		if(Array.isArray(arr[i])) {
			result = result.concat(flatten(arr[i]))
		} else {
			result.push(arr[i])
		}
	}
	return result;
}


const newArr = flatten(arr);
console.log(newArr);

// reduce 简化
function flatten1(arr) {
	return arr.reduce((pre, cur) => {
		return pre.concat(Array.isArray(cur) ? flatten1(cur) : cur)
	},[])
	
}

