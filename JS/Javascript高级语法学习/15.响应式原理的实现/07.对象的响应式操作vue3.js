let activeReactiveFn = null
class Depend{
    /**
     * Depend优化
     * 1> depend()方法
     * 2> 使用Set保存依赖，而不是数组 []
     */
    constructor(){
        this.reactiveFns = new Set()
    }
    depend() {
        if(activeReactiveFn != null)
        this.reactiveFns.add(activeReactiveFn)
    }
    notify(){
        this.reactiveFns.forEach(item => item())
    }
}
// 封装一个实现响应式对象的函数
function reactive(obj) {
    return new Proxy(obj, {
        get: function(target, key, reiciver) {
            // 根据target.key获取对应的depend
            const depend = getDepend(target, key)
            // 给depend对象添加响应函数
            depend.depend()
            return Reflect.get(target, key, reiciver)
        },
        set: function(target, key, reiciver){
            Reflect.set(target, key, reiciver)
            const depend = getDepend(target, key)
            depend.notify()
        }
    })
}
// 封装一个响应式函数
function watchFn(fn) {
    activeReactiveFn = fn
    fn()
    activeReactiveFn = null
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
const objProxy = reactive(obj)

watchFn(function() {
    console.log(objProxy.name)
    console.log("你执行了一下操作")
    console.log(objProxy.name)
    console.log("-----------------")
})


objProxy.name = "quirkybird"

// 想添加一个新的响应式对象
const infoProxy = reactive({
    name: "花花公子",
    author: "马思唯"
})

watchFn(() => {
    console.log(infoProxy.author)
})
infoProxy.author = "马思唯（feat step.jad）"