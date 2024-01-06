//print the first negative number of every sub array of window size k
const nums = [1, -2, 3, -6, -4, 5, 6, -7];
const k = 3;
//using brute force
// for (let i = 0; i <= nums.length - k; i++) {
// 	for (let j = i; j < j + k; j++) {
// 		if (nums[j] < 0) {
// 			console.log(nums[j]);
// 			break;
// 		}
// 	}
// }

//using sliding window

negativeNum(nums, k);

function negativeNum(nums, k) {
	let i = 0;
	let j = 0;
	let neg = [];
	while (j < nums.length) {
		if (nums[j] < 0) {
			neg.push(nums[j]);
		}
		if (j - i + 1 < k) {
			j++;
		} else if (j - i + 1 === k) {
			if (neg.length != 0) {
				console.log(neg[0]);
				if (nums[i] === neg[0]) {
					neg.shift();
				}
			}
			i++;
			j++;
		}
	}
}
