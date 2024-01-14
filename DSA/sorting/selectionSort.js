//selection sort

function selectionSort(nums, length) {
	for (let i = 0; i < length - 1; i++) {
		let min = i;
		for (let j = i + 1; j < length; j++) {
			if (nums[j] < nums[min]) {
				min = j;
			}
		}
		if (min !== i) {
			[nums[i], nums[min]] = [nums[min], nums[i]];
		}
	}
	console.log(nums);
}

selectionSort([10, 14, 9, 4, 10, 3, 2, 15], 8);

//time complexity = O(n^2)
//space complexity = O(1)
