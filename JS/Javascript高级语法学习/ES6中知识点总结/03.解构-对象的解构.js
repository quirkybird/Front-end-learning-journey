var obj = {
    name: "qinye",
    age: 20
}

// 对象的解构
// 不分顺序
var { name, age } = obj
console.log(name, age) //"qinye" 20

var { name: newName } = obj
console.log(newName) //"qinye"

var { address =  "巴中市" } = obj
console.log(address) //"巴中市"

// 应用场景
// 1.对变量的解构
// 2.对函数的参数解构

function foo(obj) {
     console.log(obj.name, obj.age)
}
// 使用参数的解构
function bar({ name, age }) {
    console.log(name, age)
}

foo(obj)
bar(obj)
