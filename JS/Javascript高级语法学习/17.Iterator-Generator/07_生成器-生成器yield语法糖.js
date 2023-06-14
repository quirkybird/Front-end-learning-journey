const names = ["abc", "cba", "daf"]

function* createIterator(arr) {
    yield* arr
}

const iterator = createIterator(names)

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())