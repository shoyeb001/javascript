//bubble sort

function bubbleSort(nums, length) {
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - i - 1; j++) {
			if (nums[j] > nums[j + 1]) {
				[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
			}
		}
	}
	console.log(nums);
}

bubbleSort([12, 5, 3, 14, 15, 16, 1], 7);
