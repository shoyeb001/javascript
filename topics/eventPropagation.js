let div = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let btn = document.querySelector(".button")

//event bubbleling
// btn.addEventListener("click", ()=>{
//     console.log("Button");
// });

// div2.addEventListener("click", ()=>{
//     console.log("Div2");
// });

// div.addEventListener("click", ()=>{
//     console.log("Div");
// });

//this is event trickling or capturing where the parent event called first and follow to child
// btn.addEventListener("click", ()=>{
//     console.log("Button");
// },{
//     capture: true
// });

// div2.addEventListener("click", ()=>{
//     console.log("Div2");
// },
// {
//     capture: true
// });

// div.addEventListener("click", ()=>{
//     console.log("Div");
// },{
//     capture: true
// }
// );

//what are the difference bewteen event.target, event.currentTarget and this.target
const clickFun = (event)=>{
    console.log("Clicked on  " + event.target.tagName+ " EventTarget "+ event.currentTarget.tagName+ " this "+this.tagName);
}
btn.addEventListener("click", (e)=>{
    e.stopPropagation();
    clickFun(e);
});

div2.addEventListener("click", (e)=>{
    e.stopPropagation();
    clickFun(e);
});

div.addEventListener("click", (e)=>{
    e.stopPropagation();
    clickFun(e);
}
);



