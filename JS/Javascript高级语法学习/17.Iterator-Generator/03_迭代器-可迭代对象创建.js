// 1.必须实现一个特定的函数[Sysbol.iterator]
// 2.这个函数需要返回一个迭代器（这个迭代器用于迭代器当前对象和）
const infos = {
    friends: ["quirkybird", "qinye", "micros"],
    [Symbol.iterator]: function() {
        let index = 0
        const infosIterator = {
            next: () => {
                if(index < this.friends.length) {
                    return { done: false, value:  this.friends[index++]}
                } else {
                    return { done: true }
                }
            }
        }
        return infosIterator
    }
}

const Iterator = infos[Symbol.iterator]()
console.log(Iterator.next())
console.log(Iterator.next())
console.log(Iterator.next())
console.log(Iterator.next())

const info = {
    name: "quirkybird",
    age: 20,

    [Symbol.iterator]: function() {
        const keys = Object.keys(this)
        // const values = Object.values(this)
        // const entries = Object.entries(this)
        let index = 0
        const infoIterator =  {
            next: () => {
                if(index < keys.length) {
                    return { done: false, value: keys[index++] }
                } else {
                    return { done: true }
                }
            }
        }
        return infoIterator
    }
}


for(const item of info) {
    console.log(item)
}