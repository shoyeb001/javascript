const income = {
    amount: 2000,
    monthly(){
        return this.amount * 100;
    },
    yearly:()=> {return this.amount * 1000}
}
console.log(income.monthly()) //200000 because under a object function the this refers to the object itself
console.log(income.yearly())//NaN because in arrow function this refers to the global context. In global there is no amount