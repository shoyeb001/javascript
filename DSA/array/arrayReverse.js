//reverse an array
const arr = [10, 20, 30, 40, 50, 60, 70];
arr.reverse();
console.log(arr);
// without reverse function
let newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
	newArr.push(arr[i]);
}
console.log(newArr);

//using two pointer
let left = 0;
let right = arr.length - 1;
while (left <= right) {
	[arr[left], arr[right]] = [arr[right], arr[left]];
	left++;
	right--;
}
console.log(arr);
