//find the number of rotation in a sorted array

const nums = [11, 12, 15, 18, 2, 5, 6, 8];

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
console.log(findRotation(nums, nums.length));
