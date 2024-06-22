function showTime(){
    console.log(showTime.timeout);
}
showTime();// this will undefined because we have not set value
showTime.timeout=100; //here we are using a function as object and we can do it in js. 
showTime(); //this will 100