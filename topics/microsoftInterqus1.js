let sum = function(a){
    return function(b){
    
        if(b){
             sum(a+b)
        }
        return a;
    }
}

console.log(sum(1)(2)(3)(4)());