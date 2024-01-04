const arr = [1, 2, 3, 4, 5, 6, 7];
suffle(arr);
function suffle(arr) {
	let suffledArray = [];
	let usedIndex = [];
	let i = 0;
	while (i < arr.length) {
		let randomIndex = Math.floor(Math.random() * arr.length);
		if (!usedIndex.includes(randomIndex)) {
			suffledArray.push(arr[randomIndex]);
			usedIndex.push(randomIndex);
		}
	}
	console.log(suffledArray);
}
