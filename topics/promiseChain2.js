function register(){ 
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("user registered")
            resolve();
        }, 1000)
    })

}

function login(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("User logged in successfully");
            resolve();

        }, 2000)
    })

}

function sendEmail(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Email sent");
            resolve();

        },1000)
    })

}

function getUser(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // reject("cannot get data");
            resolve();
            console.log("Get user data");

        },2000)
    })

}

function viewUser(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("user profile view")
            resolve();

        }, 1000)
    })

}

function systemWork(){
    console.log("Other works are happening");
}
systemWork();
//promise chaining
// register()
//  .then(sendEmail)
//  .then(login)
//  .then(getUser)
//  .then(viewUser)
//  .catch((err)=>{
//     console.log(err);
// })

//using async awaity

async function runSystem(){
    try {
        await register();
        await sendEmail();
        await login();
        await getUser();
        await viewUser();
        console.log("All function successfull")
    } catch (error) {
        console.log(error);
    }
}

runSystem();

//Every async function returns promise with them. We can use .then also with the async function. 