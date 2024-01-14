//find the upper bound of the element in the array. >x
//find the lower bound of an array. (>=x)
const nums = [1, 2, 3, 4, 4, 5, 5, 5, 6, 8, 9, 10, 16, 20, 23, 24];
const target = 16;

binarySearch(nums, nums.length, target);

function binarySearch(nums, n, target) {
	let start = 0;
	let end = target - 1;
	let ans = n;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (nums[mid] > target) {
			ans = nums[mid];
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	console.log(ans);
}
