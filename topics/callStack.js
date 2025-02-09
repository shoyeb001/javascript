console.log("This is demo of call stack");
gasOn();
function gasOn(){
    console.log("Gas is on");
    getPan();
}
function getPan(){
    console.log("Pan is taken");
    getOil();
}

function getOil(){
    console.log("Oil is taken");
    getOnion();
}

function getOnion(){    
    console.log("Onion is taken");
    getTomato();
 }

function getTomato(){
    console.log("Tomato is taken");
}