let button = document.querySelector(".button");
let incrementDiv = document.getElementById("increment");
let clicked = document.getElementById("clicked");
let count = 0;
let clickedCount = 0;

function debounce(cb, d){
    let timer;
    return function (...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(function(){
            console.log(cb);
            cb(...args)
        },d)
    }
}


const myDebounce = debounce(function(){
        incrementDiv.innerText = ++count;
    }, 800);


button.addEventListener("click", ()=>{
    clicked.innerText = ++clickedCount
    myDebounce();
} )