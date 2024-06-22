function getSummary(one,two,three){
    console.log(one);
    console.log(two);
    console.log(three);
}
const fName = "Shoyeb";
const age = 22;
getSummary `${fName} age is ${age}`;

//when we pass a template string the function first argument receive a string of array of the words. and the rest params become the variable within the ${}.
