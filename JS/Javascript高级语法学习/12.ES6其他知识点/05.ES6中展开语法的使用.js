const names = ["a", "b", "c"]
const name = "qinye"
const info = {name: "qinye", age: 20}

// 1.函数调用时
function foo(x, y, z){
    console.log(x, y, z)
}

foo(...names)
foo(...name)

// 2.构造函数时
const newNames = [...names]
console.log(newNames)

// 3.构建对象字面量时ES2018(ES9)
const obj = {...info, address: "巴中市"}
console.log(obj)