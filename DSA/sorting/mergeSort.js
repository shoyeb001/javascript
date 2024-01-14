//merge sort

let nums = [3, 1, 8, 4, 6, 5, 12, 11, 19, 7];

function mergeSort(nums) {
	if (nums.length <= 1) {
		return nums;
	}
	let mid = Math.floor(nums.length / 2);
	let left = mergeSort(nums.slice(0, mid));
	let right = mergeSort(nums.slice(mid));
	return merge(left, right);
}

function merge(left, right) {
	let sortedArr = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			sortedArr.push(left.shift());
		} else {
			sortedArr.push(right.shift());
		}
	}
	return [...sortedArr, ...left, ...right];
}

console.log(mergeSort(nums));
