//lets take a example of call by hell
const cart = ["shoe", "apple", "watch"];
createOrder(cart, function () {
	proceedToPayment(orderId, function () {
		showOrderSummery(paymentId, function () {
			updateWallentBallence();
		});
	});
});

//we can resolve this call by hell with promise chaining

createOrder(cart)
	.then(function (orderId) {
		return proceedToPayment(orderId);
	})
	.then((paymentId) => {
		return showOrderSummery(paymentId);
	})
	.then(() => {
		return updateWallentBallence();
	});

//we need to pipe the data through the promise chain. So we need to return it.
