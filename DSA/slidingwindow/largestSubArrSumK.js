//find the size of the largest subarray of sum k.
const nums = [2, 1, 1, 3, 1, 4, 5, 1, 2, 3];
k = 5;

const subArraySize = (nums, k, size) => {
	let i = 0;
	let j = 0;
	let max = 0;
	let sum = 0;
	let index = 0;
	while (j < size) {
		sum = sum + nums[j];
		if (sum < k) {
			j++;
		} else if (sum === k) {
			max = Math.max(max, j - i + 1);
			sum = sum - nums[i];
			index = index - 1;
			i++;
			j++;
		} else if (sum > k) {
			while (sum > k) {
				sum = sum - nums[i];
				i++;
			}
			if (sum == k) {
				max = Math.max(max, j - i + 1);
			}
			j++;
		}
	}
	console.log(max);
};

subArraySize(nums, k, nums.length);
