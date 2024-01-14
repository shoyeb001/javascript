//find the triplates of size 3 which sum is 0;
const nums = [1, 2, 3, -1, -5, -2, 2, 3, 1, -4];
//output = [-5,2,3], [1,1,-2], [1,3,-4]

//brute force approach

let arr = [];
// for (let i = 0; i < nums.length - 2; i++) {
// 	for (let j = i + 1; j < nums.length - 1; j++) {
// 		for (let k = j + 1; k < nums.length; k++) {
// 			if (nums[i] + nums[j] + nums[k] === 0) {
// 				arr.push([nums[i], nums[j], nums[k]]);
// 			}
// 		}
// 	}
// }
// console.log(arr);

//two pointer approach

nums.sort();
let i = 0;

while (i < nums.length - 2) {
	let left = i + 1;
	let right = nums.length - 1;
	while (left < right) {
		let sum = nums[left] + nums[right] + nums[i];
		if (sum === 0) {
			arr.push([nums[i], nums[left], nums[right]]);
			while (left < right && nums[left] === nums[left + 1]) left++; //skip the duplicate lefts
			while (left < right && nums[right] === nums[right - 1]) right--; //skip the deplicate rights
			left++;
			right++;
		} else if (sum < 0) {
			left++;
		} else {
			right--;
		}
	}
	i++;
}
console.log(arr);
