function foo(){
    this = {};
    this.__proto__ = foo.prototype //这个是new本身会做的
}
// 函数也是一个对象
// console.log(foo.__proto__) //函数作为对象来说，它也是有[[prototypr]]显式原型
// 函数他因为是是一个函数，所以它会多出来一个显式原型属性： prototype
console.log(foo.prototype)
new foo()