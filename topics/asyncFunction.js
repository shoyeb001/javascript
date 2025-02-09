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


//async function can work on object that has then method with resolve and reject. 

async function callData(){
	const data = await {
		then: function(resolve, reject){
			setTimeout(() => {
				resolve("Data is resolved");
			}, 2000);
		}
	}
	console.log(data);
}
callData();