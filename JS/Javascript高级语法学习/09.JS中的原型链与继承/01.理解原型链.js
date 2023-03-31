// 实现继承之前，我们需要理解原型链
// 从一个对象上面获取属性，如果当前对象没有获取到就会去它的原型上去获取
// 不过需要知道的，原型上面又有原型，如果没有找到，则会找到最顶层的原型
var obj = {
    name: "qinye",
    age: 18
}
obj.__proto__ = {

}

obj.__proto__.__proto__ = {

}

obj.__proto__.__proto__.__proto__ = {
    address: "巴中市"
}
//我们顶层的原型为Object.prototype
var obj1 = new Object();
console.log(obj1.prototype);
console.log(obj1.__proto__ === Object.prototype);