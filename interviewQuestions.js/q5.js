let a = {greeting: "Hello"};
let z = a;
z.greeting = "bye"
console.log(a.greeting); //it will be bye because in js objects store the reference of the object. so in z we are not storing the variable we are storing the reference.

//to overcome this we cal de structure the object in the variable;
let y = {...a};
y.greeting = "good morning";
console.log(a.greeting)

//if it is nested object we an use structuredClone() function.