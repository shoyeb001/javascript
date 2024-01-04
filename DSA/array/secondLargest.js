//find the second largest element
const arr = [3, 1, 10, 10, 2, 3, 12, 12];
let largest = Number.NEGATIVE_INFINITY;
let secondLargest = Number.NEGATIVE_INFINITY;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > largest) {
		secondLargest = largest;
		largest = arr[i];
	} else if (arr[i] != largest && arr[i] > secondLargest) {
		secondLargest = arr[i];
	}
}
console.log(secondLargest);
