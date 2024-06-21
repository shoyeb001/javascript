const code = {
    type:"web"
}
const reactJS={
    name:"js",
    web:"true"
}

console.log(reactJS[code.type]) //true this is valid
console.log(reactJS["type"]) //it is giving undefined
console.log(reactJS[code["type"]]) //true
console.log(code.type.web) //it is also undefined
