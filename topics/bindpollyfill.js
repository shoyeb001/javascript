//polyfill for bind method

let name = {
    firstName: "Sk",
    lastName: "Shoyeb"
}

function printInfo(state, country){
    console.log(this.firstName+ " "+this.lastName+ " lives in "+state+" in "+ country);
}

Function.prototype.myBind = function (...arg){
    let obj = this;  //this is the printInfo function now
    let params = arg.slice(1);
    return function(...rests){
        obj.apply(arg[0], [...params, ...rests])
    }
}

let printFunc = printInfo.bind(name, "West Bengal");
printFunc('India');

let printFunc2 = printInfo.myBind(name, "West Bengal")
printFunc2("India");