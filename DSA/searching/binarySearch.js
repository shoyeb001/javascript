const nums = [1, 2, 3, 4, 5, 6, 8, 7, 10, 9, 12, 11];
const target = 7;
nums.sort();

const binarySearch = (nums, target) => {
	let start = 0;
	let end = nums.length - 1;
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
};

console.log(binarySearch(nums, target));
