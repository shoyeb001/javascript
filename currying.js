//function currying using bind method

// let multiply = function(x,y){
//     console.log(x*y)
// }
// let multiplyByTwo = multiply.bind(this,2);
// let multiplyByThree = multiply.bind(this,3);
// multiplyByTwo(3);
// multiplyByThree(3);

//function currying using closures

let multiply = function (x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo = multiply(2);
let multiplyByThree = multiply(3);
multiplyByTwo(3);
multiplyByThree(3);