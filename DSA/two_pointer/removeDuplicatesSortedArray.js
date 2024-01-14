//remove duplicates from the sorted array and return the unique array length

const nums = [1, 1, 2, 3, 4, 4];

const bruteforce = (nums) => {
	const newArr = nums.filter((item, index, arr) => {
		if ((index === 0) | (arr[index - 1] !== item)) {
			return true;
		}
	});
	console.log(newArr);
};

// bruteforce(nums);

//in the above solution the space complexity is O(n) and time complexity is also O(n).
//if you want space complexity O(1) then do this two pointer approach.

const twoPointer = (nums) => {
	if (nums.length === 1) {
		return 1;
	}
	let i = 0;
	let j = 1;
	while (j < nums.length) {
		if (nums[j] != nums[i]) {
			i++;
			nums[i] = nums[j];
		}
		j++;
	}
	console.log(i + 1);
};
twoPointer(nums);
