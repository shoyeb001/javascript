const production = () => {
	setTimeout(() => {
		console.log("set 1 called");
		setTimeout(() => {
			console.log("set 1 called");
			setTimeout(() => {
				console.log("set 1 called");
				setTimeout(() => {
					console.log("set 1 called");
					setTimeout(() => {
						console.log("set 1 called");
						setTimeout(() => {
							console.log("set 1 called");
						}, 1000);
					}, 2000);
				}, 3000);
			}, 4000);
		}, 5000);
	}, 6000);
};

production();
