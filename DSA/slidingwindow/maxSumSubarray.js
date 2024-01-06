//determine the maximum sum of a sunarray of size k.
const arr = [1, 2, 3, 4, 5, 6, 8, 9, 1];
const k = 3;
console.log(maxSubarray(arr, k));
function maxSubarray(nums, k) {
	let i = 0;
	let j = 0;
	let sum = 0;
	let max = 0;
	while (j < nums.length) {
		sum = sum + nums[j];
		if (j - i + 1 < k) {
			j++;
		} else if (j - i + 1 === k) {
			max = Math.max(max, sum);
			sum = sum - nums[i];
			i++;
			j++;
		}
	}
	return max;
}
