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


function sum(n1,n2){
    let val = valApi();
    return function(){
        return n1+n2+val;
    } 
}

const callSum = sum(3,5);


setTimeout(() => {
    console.log("latest Sum", callSum());
}, 2000);

function valApi(){
    setTimeout(()=>{
        return 20;
    },100)
}