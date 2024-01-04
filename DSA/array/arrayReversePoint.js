//reverse from a point of an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const k = 4; //output should be [1,2,3,4,9,8,7,6,5]
let left = k - 1;
let right = arr.length - 1;
while (left <= right) {
	[arr[left], arr[right]] = [arr[right], arr[left]];
	left++;
	right--;
}
console.log(arr);
