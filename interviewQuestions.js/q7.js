class Lizard{
    static colorChange(newColor){
        this.newColor = newColor;
        return this.newColor
    }
    constructor({newColor="orange"}={}){
        this.newColor = newColor
    }
}
const tommy = new Lizard({newColor:"Orange"})
// console.log(tommy.colorChange("blue"))  // it will give error because static methods cannot be access through its instance, 
//if we want to change color we need to change it from the class itself.

console.log(Lizard.colorChange("blue"))