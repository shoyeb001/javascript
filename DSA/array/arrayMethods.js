//concat
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];
// const newArr = arr1.concat(arr2);
// console.log(newArr);

//slice
// const newArr = arr1.slice(-3, -1);
// console.log(newArr);

//splice
const delArr = arr1.splice(1, 1);
console.log(delArr);
//fill

const arr3 = [1, 2, 3, 4, 5];
arr3.fill("hi", 2, 4);
console.log(arr3);
