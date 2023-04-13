// Map 就是允许我们对象类型来作为key的 （普通对象不行）
// 构造函数的使用
const obj1 = {
    name: "qinye"
}
const obj2 = {
    name: "quirkybird"
}
const map1 = new Map()
map.set(obj1, "aaa")
map.set(obj2, "bbb")
map.set(1, "ccc")
console.log(map) 

const map2 = new Map([[obj1, "aaa"], [obj2, "bbb"], [2, "ddd"]])
console.log(map2)

// 2.常见的属性和方法
console.log(map2.size)

// set(key)
// get(key)
// has(key)
// delete(key)
// clear()

// 3.遍历map
map2.forEach((item, key) => {
    console.log(item, key)
})

for (const item of map2){
    console.log(item[0], item[1])
}

for(const [key, value] of map2){
    console.log(key, value)
}