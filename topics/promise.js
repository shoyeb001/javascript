const products = fetch("https://fakestoreapi.com/products");
console.log(products); // the fetch function returns promise in products. It contains state and response
products.then((data) => {
	console.log(data); //printing the response after the promise fullfill
});
//promise are immutable. You cannot edit data. 


