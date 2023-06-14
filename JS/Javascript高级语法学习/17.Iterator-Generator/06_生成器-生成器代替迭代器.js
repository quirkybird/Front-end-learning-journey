const names = ["abc", "cba", "daf"]

function* createIterator(arr) {
    for(let i = 0; i < arr.length; i++) {
        yield arr[i]
    }
}

const iterator = createIterator(names)

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())