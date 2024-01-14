//js inbuild sort function;

const fruits = ["mango", "banana", "apple", "watermelon"];
console.log(fruits.sort());

const nums = [2, 21, 3, 1, 15, 31, 29, 7];
console.log(nums.sort()); // the sort will not proper. Because the sort function consider the array elements as strings. to sort the numbers you have to do the following step

console.log(nums.sort((a, b) => a - b));

//sort the object;

const info = [
	{
		name: "Sk",
		age: 15,
	},
	{
		name: "Ayush",
		age: 16,
	},
	{
		name: "body",
		age: 7,
	},
];

console.log(info.sort((a, b) => a.age - b.age));
