//find the first and last occurence of an array.
const nums = [1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 6, 7, 7, 7, 7, 8];
const target = 5;

findFandL(nums, 5, nums.length);
function findFandL(nums, target, length) {
	console.log(firstOccurence(nums, target, length));
	console.log(lastOccurence(nums, target, length));
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
