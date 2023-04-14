const obj = {
    name: "qinye",
    age: 20
}
//Reflect和Proxy捕获器方法一一对应
const objProxy = new Proxy(obj, {
    // 获取值的捕获器
    get: function(target, key){
        console.log(`监听到对象的${key}被访问了`)
        return Reflect.get(target, key)
    },
    
    // 设置值的捕获器
    set: function(target, key, newValue){
        console.log(`监听到对象的${key}被修改了`)
        Reflect.set(target, key, newValue)
    }
})

objProxy.age = 21
console.log(objProxy.name)