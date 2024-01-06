//find the maximum number of all sub array.
const nums = [1, 5, 7, 8, 4, 3, 5, 6];
const size = nums.length;
const k = 4;
//brute force approach
// for (i = 0; i <= size - k; i++) {
// 	for (j = i; j < i + k; j++) {
// 		if (j - i + 1 === k) {
// 			let max = 0;

// 			for (let m = i; m <= j; m++) {
// 				max = Math.max(max, nums[m]);
// 			}
// 			console.log(max);
// 		}
// 	}
// }

maxSubArray(nums, size, k);

function maxSubArray(nums, size, k) {
	let i = 0;
	let deque = []; //deque store the indexes
	let result = [];
	while (i < size) {
		//remove the element if it's index is lesser than the left most index of the window
		while (deque.length > 0 && deque[0] < i - k + 1) {
			deque.shift();
		}
		//check the new element is grater than the last element of the deque
		while (deque.length > 0 && nums[i] > nums[deque[deque.length - 1]]) {
			deque.pop();
		}
		//push the index of the element
		deque.push(i);
		if (i >= k - 1) result.push(nums[deque[0]]); //when the window size hits push the first index element in the deque
		i++;
	}
	console.log(result);
}
