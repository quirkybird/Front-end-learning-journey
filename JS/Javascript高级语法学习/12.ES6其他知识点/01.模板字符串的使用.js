// ES6之后提供模板字符串
const name = "qinye"
const age = 20
const address = "巴中市"

const message = `My name is ${name}, age is ${age}, address is ${address}`
console.log(message)

const info = `Age double is ${age * 2}`
console.log(info)

function doubleAge() {
    return age * 2
}
const info1 = `Age double is ${doubleAge()}`
console.log(info1)