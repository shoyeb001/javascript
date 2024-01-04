/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
function rotate(arr, left, right) {
	while (left <= right) {
		[arr[left], arr[right]] = [arr[right], arr[left]];
		left++;
		right--;
	}
}
const n = nums.length - 1;
k = k % nums.length;
rotate(nums, 0, n);
rotate(nums, 0, k - 1);
rotate(nums, k, n);
console.log(nums);
