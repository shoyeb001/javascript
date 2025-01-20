// 1. If function is invoked with a new keyword then this will be the newly created object. 

// 2. If we call function with call/ bind /apply method the value of this will be the object itself. 

// 3. If we call the function with the object like obj.fn() then the value of this will be obj. 

// 4. If we call the function directly then this will be window object and if strict mode is on then this will be undefined. 

function x(){
    var a=10;
    function y(){
        console.log(this)
    }
    y()
}
x(); // this will print the window object in normal mode and undefined in strict mode

const obj = {
    a: 10,
    b: function(){
        console.log(this.a)
    }
}

obj.b(); // here this is the obj itself
var name = 'sohan'
function show(){
    console.log(`the name is ${this.name}`)
}
show.call({name:"Shoyeb"})
show();


const movie = {
    name:"Pushpa",
    f1(){
        const f2 = ()=>{
            console.log(this.name)
        }
        f2();
    }
}
movie.f1();