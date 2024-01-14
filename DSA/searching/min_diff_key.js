//find the minimum difference key in an sorted array.
const nums = [1, 5, 10, 11, 15, 16, 19];
const key = 17;

const ele = findMinKey(nums, key, nums.length);
console.log(ele);

function findMinKey(arr, key, length) {
	let start = 0;
	let end = length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] === key) {
			return arr[mid];
		} else if (arr[mid] > key) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	let up = Math.abs(arr[start] - key);
	let down = Math.abs(arr[end] - key);

	if (up < down) {
		return arr[start];
	} else {
		return arr[end];
	}
}
