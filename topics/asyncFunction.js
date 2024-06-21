//async with then

// async function getData() {
// 	return "data returned";
// }

// getData().then((res) => {
// 	console.log(res);
// });

//handelling promise async await

const p = new Promise((resolve, reject) => {
	resolve("This is a promise");
});

async function promiseHandel() {
	const data = await p;
	console.log(data);
}

promiseHandel();
