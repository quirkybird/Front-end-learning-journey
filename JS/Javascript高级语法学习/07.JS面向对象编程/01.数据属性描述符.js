// 虽然name和age没有设置数据属性描述符,但他们具备默认特性
// value: 对应赋值,其他值默认均为false
var obj = {
    name: "qinye",
    age: 18
}
// 数据属性描述符
// 使用了属性描述符,那么就会有默认的特性
Object.defineProperty(obj, "address", {
    // 很多配置
    value: "巴中市", //默认值为undefined
    // 该特性不可删除/也不可重新定义数据描述符
    configurable: false, //默认值为false
    // 该特性是配置对应的属性是否可以被枚举
    enumerable: true, //默认值false
    // 该特性是属性是否可以赋值(写入值)
    writable: true //默认值为false
})

// Test
for(var key in obj){
    console.log(key);
}
obj.age = 20;
console.log(obj);
