const nums = [1, 3, 1, -5, 1, 2, 2, 1, -2, -2, -1];
const target = 0;
nums.sort();
let result = [];
for (let i = 0; i < nums.length - 3; i++) {
	if (i > 0 && nums[i] === nums[i + 1]) {
		continue;
	}
	for (let j = i + 1; j < nums.length - 2; j++) {
		if (j > i + 1 && nums[j] === nums[j + 1]) {
			continue;
		}
		let left = j + 1;
		let right = nums.length - 1;
		while (left < right) {
			let sum = nums[i] + nums[j] + nums[left] + nums[right];
			if (sum === target) {
				result.push([nums[i], nums[j], nums[left], nums[right]]);
				while (left < right && nums[left] === nums[left + 1]) {
					left++;
				}
				while (left < right && nums[right] === nums[right - 1]) {
					right--;
				}
				left++;
				right--;
			} else if (sum < target) {
				left++;
			} else {
				right--;
			}
		}
	}
}
console.log(result);
