function register(cb){ //sending a function as param. it is also called a high order function
    setTimeout(()=>{
        console.log("user registered")
        cb();
    }, 1000)
}

function login(cb){
    setTimeout(()=>{
        console.log("User logged in successfully");
        cb();
    }, 2000)
}

function sendEmail(cb){
    setTimeout(()=>{
        console.log("Email sent");
        cb();
    },1000)
}

function getUser(cb){
    setTimeout(()=>{
        console.log("Get user data");
        cb()
    },2000)
}

function viewUser(){
    setTimeout(()=>{
        console.log("user profile view")
    }, 1000)
}

function systemWork(){
    console.log("Other works are happening");
}

systemWork();

//call back hell
register(function(){
    sendEmail(function(){
        login(function(){
            getUser(function(){
                viewUser();
            })
        })
    })
})