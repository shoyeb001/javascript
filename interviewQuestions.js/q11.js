function Human(fname, lname){
    this.firstName = fname;
    this.lastName = lname;
}
const mrX = new Human("Mr","X");
const rock = Human("The","Rock");
console.log(mrX); //it will return Human object
console.log(rock); // it will undefined as function not returning anything
