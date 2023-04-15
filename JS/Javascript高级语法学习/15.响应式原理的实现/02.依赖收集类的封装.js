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

// 对象的响应式
const obj = {
    name: "qinye",
    age: 20
}

watchFn(function() {
    console.log(obj.name)
    console.log("你执行了一下操作")
})

watchFn(function() {
    console.log(obj.name)
    console.log("你又执行了下一个操作")
})

obj.name = "quirkybird"
depend.notify()