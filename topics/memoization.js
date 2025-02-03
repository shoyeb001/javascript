console.log("memoization");

function memoize (fn){
    const result = {};
    return function(...arg){
        if(result[arg]) return result[arg];
        result[arg] = fn(...arg);
        return result[arg];
    }
}

// const fibonacci = (n)=>{
//     if(n<=2) return 1;
//     return fibonacci(n-1) + fibonacci(n-2)
// }
// const func = memoize(fibonacci);
// console.time("fibonacci");
// console.log(func(40));
// console.timeEnd("fibonacci");
// console.time("fibonacci2");
// console.log(func(40));
// console.timeEnd("fibonacci2");

//ES6 Memoization

const fibonacci=(n, memo={})=>{
    if(memo[n]) return memo[n];
    if(n<=2) return 1;
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
    return memo[n];
}

console.time("fibonacci");  
console.log(fibonacci(90));
console.timeEnd("fibonacci");