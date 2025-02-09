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

multiply(2)(3)

//currying besr interview question. Imeplement sum(1)(2)(3)(4)....()

// function sum(a){
//     return function(b){
//         if(b) return sum(a+b);
//         return a;
//     }
// }

// console.log(sum(1)(2)(3)(4)(5)(6)());

// // implement sum(a,b,c) in curring like sum(a)(b)(c) 

// const sum1 = (a,b,c)=>{
//     return a+b+c;
// }

// function curryFunc(fn){
//     return function innerFunc(...arg){
//         if(arg.length>=fn.length){
//             return fn(...arg);
//         }else{
//             return function(...next){
//                 return function(){
//                     return innerFunc(...arg, ...next)
//                 }
//             }
//         }
        
//     }
// }

// console.log(sum1(5,3,2));
// const curry = curryFunc(sum1);
// console.log(curry(5)(3)(2));


function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(sum(1)(2)(3));