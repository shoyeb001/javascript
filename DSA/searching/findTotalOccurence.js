//find total occurence in an array;

const nums = [1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 6, 7, 7, 7, 7, 8];
const target = 5;

findTotalOccurence(nums, 3, nums.length);

function findTotalOccurence(nums, target, length) {
	let f = firstOccurence(nums, target, length);
	let l = lastOccurence(nums, target, length);
	let total = 0;
	if (f === -1) {
		total = 0;
	} else if (l === -1) {
		total = 1;
	} else {
		total = l - f + 1;
	}
	console.log(total);
}

function firstOccurence(nums, target, length) {
	let start = 0;
	let end = length - 1;
	let ans = -1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (nums[mid] === target) {
			ans = mid;
			end = mid - 1;
		} else if (nums[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return ans;
}

function lastOccurence(nums, target, length) {
	let start = 0;
	let end = length - 1;
	let ans = -1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (nums[mid] === target) {
			ans = mid;
			start = mid + 1;
		} else if (nums[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return ans;
}
