//insertion sort
function insertionSort(nums) {
	for (let i = 1; i < nums.length; i++) {
		let ele = nums[i];
		let j = i - 1;
		while (j >= 0 && nums[j] > ele) {
			nums[j + 1] = nums[j];
			j--;
		}
		nums[j + 1] = ele;
	}
	console.log(nums);
}

insertionSort([10, 14, 9, 4, 10, 3, 2, 15]);
