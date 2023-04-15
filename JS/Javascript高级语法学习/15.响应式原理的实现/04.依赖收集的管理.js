class Depend{
    constructor(){
        this.reactiveFns = []
    }
    addDepend(fn) {
        this.reactiveFns.push(fn)
    }
    notify(){
        this.reactiveFns.forEach(item => item())
    }
}
// 封装一个响应式函数
const depend = new Depend()
function watchFn(fn) {
    depend.addDepend(fn)
}
// 封装一个获取depend函数
const targetMap = new Map()
function getDepend(target, key) {
    // 根据target对象获取map的过程
    let map = targetMap.get(target)
    if(!map) {
        map = new Map()
        targetMap.set(target, map)
    }
    // 根据key获取depend的过程
    let depend = map.get(key)
    if(!depend) {
        depend = new Depend()
        map.set(key, depend)
    }
    return depend
}
// 对象的响应式
const obj = {
    name: "qinye",
    age: 20
}

// 监听对象属性变量: Proxy（vue3）and Object.defineProperty()(vue2)
const objProxy = new Proxy(obj, {
    get: function(target, key, reiciver) {
        return Reflect.get(target, key, reiciver)
    },
    set: function(target, key, reiciver){
        Reflect.set(target, key, reiciver)
        const depend = getDepend(target, key)
        depend.notify()
    }
}) 

watchFn(function() {
    console.log(objProxy.name)
    console.log("你执行了一下操作")
})

watchFn(function() {
    console.log(objProxy.name)
    console.log("你又执行了下一个操作")
})

objProxy.name = "quirkybird"