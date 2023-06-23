//判断标识符的类型，是否为Object、Array、function
function isObject(value) {
    const valueType = typeof value
    return valueType !== null && (valueType === "object" || valueType === "function")
}

// 深拷贝函数封装
function deepCopy(originValue, map = new WeakMap(originValue)) {
    if(!isObject(originValue)) {
        return originValue
    }
    // 如果值是Symbol
    if(typeof originValue === "symbol") {
        return Symbol(originValue.description)
    }
    // 如果是set类型
    if(originValue instanceof Set) {
        const newSet = new Set()
        for(const setItem of originValue) {
            newSet.add(deepCopy(setItem))
        }
        return newSet
    }
    // 如果是function
    if(typeof originValue === "function") {
        return originValue
    }
    // 如果是对象类型，则需要创建新的对象
    const newObj  = Array.isArray(originValue) ? [] : {}
    for(const key in originValue) { //递归实现
        newObj[key] = deepCopy(originValue[key], map)
    }
    //如果是symbol为key值的值
    const symbolKeys = Object.getOwnPropertySymbols(originValue)
    for(const symbolKey of symbolKeys) {
        newObj[Symbol(symbolKey.description)] = deepCopy(originValue[symbolKey], map)
    }
    return newObj
}
const set = new Set(["abc", "bca", "bbc"])

const infos = {
    name: "quirkybird",
    age: 20,
    hobbies: {
        total: 10,
        info:[
            {
                name: "code",
                time: "1 year"
            }, 
            {
                name: "jogging",
                time: "forever"
            }
        ] 
    },
    set
}

const myInfo = deepCopy(infos)
myInfo.hobbies.info[0].time = "forever"
console.log(myInfo)