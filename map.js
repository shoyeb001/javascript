const users = [
	{ firstName: "Sk", lastName: "Shoyeb", age: 22 },
	{ firstName: "Sania", lastName: "Khatun", age: 19 },
	{ firstName: "Sumit", lastName: "Das", age: 22 },
];
//find out all the full names of the users

const fullName = users.map((item) => {
	return item.firstName + " " + item.lastName;
});

console.log(fullName);
