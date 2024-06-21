let button = document.querySelector(".button");
let incrementDiv = document.getElementById("increment");
let clicked = document.getElementById("clicked");
let count = 0;
let clickedCount = 0;

function throttle(cb, d){
    let last = 0;
    return function (...args) {
        let now = new Date().getTime();
        if(now-last < d) return;
        last = now;
       return cb(...args);
    }
}


const myThrottle = throttle(function(){
        incrementDiv.innerText = ++count;
    }, 1000);


button.addEventListener("click", ()=>{
    clicked.innerText = ++clickedCount
    myThrottle();
} )