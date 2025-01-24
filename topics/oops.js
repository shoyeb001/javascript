class User{
    name = "Sk Shoyeb";
    constructor(name){
        if(name){
            this.name = name;
        }
    }
    getName(){
        console.log(this.name);
    }
}

class Vichel{
    type="car";
    constructor(brand){
        this.brand = brand
    }
    getBrand(){
        console.log(this.brand)
    }
}



class Bus extends Vichel{
    static owner = "Sk";  //static is only accessible in the class
    distance = 300;
    #wheel = 2; //private variable
    constructor(brand){
        super(brand);
    }

    callBrand(){
        console.log(this.#wheel);
        console.log(Bus.owner)
        super.getBrand();
    }
}

// super used for invoke a function of the parent class or setting default value of parent class constructer. 

const newObj = new User();
newObj.getName();
const carObj = new Vichel("BMW");
carObj.getBrand();

const busObj = new Bus("Volvo");
busObj.callBrand();
Bus.prototype.name="Qhelica";
console.log(busObj.name)


class Man{
    name= "shoyeb";
}
const obj = new Man();
console.log(obj.name);
Man.prototype.age=50;
console.log(obj.age)


