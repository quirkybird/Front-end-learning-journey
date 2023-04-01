var obj = {
    name: "qinye",
    age: 20
}
//原型式继承函数
//实现一
function createObject1(o){
    var newObj = {};
    Object.setPrototypeOf(newObj, o);
    return newObj;
}

// 实现二
function createObject2(o){
    function Fn() {}
    Fn.prototype = 0;
    var newObj = new Fn();
    return newObj;
}

// 实现三
var info = Object.create(obj)

console.log(info);
console.log(info.__proto__);