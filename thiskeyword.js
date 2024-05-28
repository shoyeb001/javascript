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

