const names = ["abc", "cba", "bac"]

// 为names创建一个迭代器Iterator
let index = 0
const nameIterator = {
    next: function() {
        // 必须有一个next方法
        // done（Boolean）， value(具体值/undefined)
        if(index < names.length) {
            return { done: false, value:names[index++] }
        } else {
            return { done: true }
        }
    }
}
// 使用迭代器
console.log(nameIterator.next())
console.log(nameIterator.next())
console.log(nameIterator.next())
console.log(nameIterator.next())