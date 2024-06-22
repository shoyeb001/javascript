function Human(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
const member = new Human("Frontend","Master");
Human.getFullName = function(){
    return `${this.firstName}${this.lastName}`;
} //here we are setting a key in Human class which is function type
// console.log(member.getFullName()); //it will show type error because the getFullName is not accessable in member variable. 
Human.prototype.getFullName2 = function(){
    return `${this.firstName}${this.lastName}`;
}
console.log(member.getFullName2()); 