let arr = [10, 20, 30, 40, 50, 60, 70];
newEle = 100;
position = 3;

const len = arr.length;
for (let i = len - 1; i >= 0; i--) {
	if (i >= position) {
		arr[i + 1] = arr[i];
	}
	if (i === position) {
		arr[position] = newEle;
	}
}
console.log(arr);
