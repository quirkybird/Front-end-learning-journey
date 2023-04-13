// 1.第一个区别，WeakMap只能保存对象
// 2.WeakMap 是弱引用
// 3。常见方法
// set/get/has/delete 和WeakSet一样不能遍历

// 4.应用场景（vue3响应式原理）
obj1 = {
    name: "qinye",
    age: 20
}

function obj1NameFn1() {
    console.log("obj1NameFn1被执行")
}
function obj1NameFn2() {
    console.log("obj1NameFn2被执行")
}
obj2 = {
    name: "quirkybird",
    height: 1.76
}
function obj2HeightFn1() {
    console.log("obj2HeightFn1被执行")
}
function obj2HeightFn2() {
    console.log("obj2HeightFn2被执行")
}

// 1.创建WeakMap
const weakMap = new WeakMap()

// 2.收集依赖结构
// 2.1.obj1收集的数据结构
const obj1Map = new Map()
obj1Map.set("name", [obj1NameFn1,obj1NameFn2])
weakMap.set(obj1, obj1Map)

// 对2.2.对obj2收集的数据结构
const obj2Map = new Map()
obj2Map.set("name", [obj2HeightFn1,obj2HeightFn2])
weakMap.set(obj2, obj2Map)

// 3.如果obj1.name发生了改变
// Proxy/Object.defineProperty
obj1.name = "qinye233"
const targetMap = weakMap.get(obj1)
const fns = targetMap.get("name")
fns.forEach(item => {
    item()  
})