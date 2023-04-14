// 在ES6中新增了一个Proxy类，用于帮我们创建一个代理
// 如果我们想创建一个对象的相关操作，我们可以先创建一个代理对象
// 之后对该对象的所有操作，都通过代理对象来完成，代理对象可以监听我们想要对原对象进行哪些操作

// 监听对象实现
const obj = {
    name: "qinye",
    age: 20
}

const objProxy = new Proxy(obj, {
    // 获取值的捕获器
    get: function(target, key){
        console.log(`监听到对象的${key}被访问了`)
        return target[key]
    },
    
    // 设置值的捕获器
    set: function(target, key, newValue){
        console.log(`监听到对象的${key}被修改了`)
        target[key] = newValue 
    },

    //监听in的捕获器
    has: function(target, key) {
        console.log(`监听到对象的${key} in操作`)
        return key in target
    },

    // 监听delete的捕获器
    deleteProperty: function(target, key){
        console.log(`监听到对象的${key}delete操作`)
        delete target[key]
    }
})

objProxy.age = 21
console.log(objProxy.name)
console.log("name" in objProxy)
delete objProxy.age