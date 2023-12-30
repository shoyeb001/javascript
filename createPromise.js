const cart = ["shoes", "pant", "t-shirt"];

const promise = createOrder(cart);
promise
	.then((orderId) => console.log(orderId))
	.catch((err) => {
		console.log(err.message);
	});

function createOrder(cart) {
	const pr = new Promise((resolve, reject) => {
		//create order
		//validate cart
		const validateCard = (cart) => {
			return false;
		};
		if (!validateCard(cart)) {
			const err = new Error("cart is invalid");
			reject(err);
		}

		const orderId = "123";
		setTimeout(() => {
			if (orderId) {
				resolve(orderId);
			}
		}, 5000);
	});
	return pr;
}
