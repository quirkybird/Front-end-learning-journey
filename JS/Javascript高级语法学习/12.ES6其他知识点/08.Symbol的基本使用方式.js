const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2); //false

const s3 = Symbol("aaa");
console.log(s.description) //aaa

// 通过Symbol来添加key值
const obj = {
    [s1]: "aaa",
    [s2]: "bbb"
}

// 方式二
obj[s3] = "ccc"

// 方式三
const s4 = Symbol()
Object.defineProperty(obj, s4, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "ddd"
})
//不能用点来访问
console.log(obj[s1], obj[s2], obj[s3], obj[s4])

// 使用Symbol作为key的属性名，在遍历Object，keys等中是获取不到这些Symbol值
// 需要object.getOwnPropertySymbols来获取所有的Symbol的key
console.log(Object.keys(obj)) //[]
console.log(Object.getOwnPropertySymbols(obj))

const sKeys = Object.getOwnPropertySymbols(obj)
for (const key of sKeys){
    console.log(obj[sKey])
}

//Symbol.for(key)/Symbol.keyFor(Symbol)
const sa = Symbol.for("aaa")
const sb = Symbol.for("aaa")
console.log(sa === sb) //true

const key = Symbol.keyFor(sa)
const sc = Symbol.for(key)
console.log(sa === sc)