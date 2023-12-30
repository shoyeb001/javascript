//find the maximum from the array
const arr = [3, 45, 5, 78, 20, 45, 10, 62, 41, 90, 10, 23, 56];

const output = arr.reduce((max, curr) => {
	if (curr > max) {
		max = curr;
	}
	return max;
}, 0);

console.log(output);
