let arr = [10, 20, 30, 50, 60, 90];
const po = 3;
const len = arr.length;
for (let i = po; i < len - 1; i++) {
	arr[i] = arr[i + 1];
}
arr.length = len - 1;
console.log(arr);
