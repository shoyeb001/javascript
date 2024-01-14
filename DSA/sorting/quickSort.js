//quick sort

const nums = [3, 1, 8, 4, 6, 5, 12, 11, 19, 7];

function quickSort(nums) {
	if (nums.length <= 1) {
		return nums;
	}
	const pivot = nums[0];
	const left = [];
	const right = [];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] < pivot) {
			left.push(nums[i]);
		} else {
			right.push(nums[i]);
		}
	}

	return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(nums));
