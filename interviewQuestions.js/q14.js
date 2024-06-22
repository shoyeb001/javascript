function checkAge(data){
    if(data==={age:18}){
        console.log("you are an adult")
    }else if(data=={age:18}){
        console.log("you are still adult")
    }else{
        console.log("Hmm.. No Age")
    }
}
checkAge({age:18})

//in js the objects can be same but their reference is different. Always comparing two objects are false in js.