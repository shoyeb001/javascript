const nums = [5, 10, 20, 14, 16];

const ele = peakElement(nums, nums.length);
console.log(ele);
function peakElement(nums, length) {
	let start = 0;
	let end = length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (mid > 0 && mid < length - 1) {
			if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
				return nums[mid];
			} else if (nums[mid] < nums[mid + 1]) {
				start = mid + 1;
			} else if (nums[mid] < nums[mid - 1]) {
				end = mid - 1;
			}
		} else {
			if (nums[mid] > nums[mid + 1]) {
				return nums[mid];
			} else if (nums[mid] < nums[mid + 1]) {
				return nums[mid + 1];
			} else if (nums[mid] > nums[mid - 1]) {
				return nums[mid];
			} else {
				return nums[mid - 1];
			}
		}
	}
}
