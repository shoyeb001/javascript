// function createObject(name, age){
//     let obj  = Object.create(studentMethods);
//      obj.name = name;
//      obj.age = age;
//     return obj;
// }

// const studentMethods = {
//     showEligibility: function(){
//         if(this.age >= 18){
//             console.log(`${this.name} is eligible to vote`);
//         } else {
//             console.log(`${this.name} is not eligible to vote`);
//         }
//     }
// }


// const student1 = createObject('John', 20);
// const student2 = createObject('Jane', 22);
// console.log(student1);
// console.log(student2);
// student1.showEligibility();


//we can create the above thing using function as well

function createObject(name, age){
    this.name = name;
    this.age = age; 
}

createObject.prototype.showEligibility = function(){
    if(this.age >= 18){
        console.log(`${this.name} is eligible to vote`);
    } else {
        console.log(`${this.name} is not eligible to vote`);
    }
}
const student1 = new createObject('John', 20);
console.log(student1.showEligibility());
