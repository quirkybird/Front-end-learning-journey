// 我们每一个对象中都有一个[[prototype]],这个属性可以称之为对象的原型（隐式原型）
var obj = {name: "qinye"}
// 解释原型概念和查看原型
// 早期的ECMA是没有规范如何查看[[prototype]]

// 给对象提供一个属性，可以让我们看到这个原型对象（浏览器提供的）
//__proto__
console.log(obj.__proto__)//{}

//ES5之后提供的Object.getPrototypeOf
console.log(Object.getPrototypeOf(obj))

// 2.原型有什么用呢？
// 当我们从一个对象中获取某一个属性时，他会触发[[get]]操作
// 1.在当前对象查找对应的属性，如果找到直接使用
// 2.如果没有找到，那么会沿着它原型去查找[[prototype]]
obj.__proto__.age = 20;
console.log(obj.age);