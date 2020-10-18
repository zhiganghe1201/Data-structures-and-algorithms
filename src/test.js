function diffTree(root1, root2, diffList) {
	if(root1 === root2) return diffList;
	if(root1 === null && root2 !== null) {
		diffList.push({
			type: '新增',
			origin: null,
			now: root2
		})
	} else if(root1 !== null && root2 === null) {
		diffList.push({
			type: '删除',
			origin: root1,
			now: null
		})
	} else if(root1.value !== root2.value) {
		diffList.push({
			type: '修改',
			origin: root1,
			now: root2
		})
		diffTree(root1.left, root2.left, diffList);
		diffTree(root1.right, root2.right, diffList)
	} else {
		diffTree(root1.left, root2.left, diffList);
		diffTree(root1.right, root2.right, diffList)
	}
}