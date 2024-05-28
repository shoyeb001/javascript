//call bind and apply methods

let name = {
    firstName: "Sk",
    lastName: "Shoyeb",
    printName: function(){
        console.log(this.firstName + " " + this.lastName)
    }
}
name.printName();

function printName2(){
    console.log(this.firstName + " " + this.lastName)
}

let name2={
    firstName: "Salman",
    lastName: "Khan",
}

//function borrowing method

name.printName.call(name2); //call function
printName2.call(name);
printName2.call(name2);

function printInfo(address,state){
    console.log(this.firstName + " " + this.lastName + " " + "lives in "+address + ", "+state)
}

printInfo.apply(name, ["puratan chawk","Burdwan"]) // in apply method we can send other args in array list
let fullInfo = printInfo.bind(name, "address", "Burdwan"); //in bind it directly does not call. It returns a method in a var then we can call it.
fullInfo();
