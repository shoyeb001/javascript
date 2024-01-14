//find an element in an rotated sorted array.
const nums = [11, 12, 15, 18, 2, 5, 6, 8];

const ele = findElement(nums, 6, nums.length);
console.log(ele);

function findElement(nums, target, length) {
	const min = findRotation(nums, length);
	if (min === target) {
		return min;
	} else {
		const right = binarySearch(nums, target, 0, min - 1);
		const left = binarySearch(nums, target, min + 1, length - 1);
		if (right > -1) {
			return right;
		} else if (left > -1) {
			return left;
		}
	}
}

function findRotation(nums, length) {
	let start = 0;
	let end = length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		let next = (mid + 1) % length;
		let prev = (mid + length - 1) % length;
		if (nums[mid] <= nums[next] && nums[mid] <= nums[prev]) {
			return mid;
		} else if (nums[mid] <= nums[end]) {
			end = mid - 1;
		} else if (nums[start] <= nums[mid]) {
			start = mid + 1;
		}
	}
}

function binarySearch(nums, target, start, end) {
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
}
