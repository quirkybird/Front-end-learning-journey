function* bar(arg) {
    console.log("1111", arg)
    console.log("2222", arg)
    const name1 = yield "sss"
    console.log("3333", name1)
    console.log("4444", name1)
    const name2 = yield "rrr"
    console.log("5555", name2)
    console.log("6666", name2)
}
const generator = bar("next0")
console.log(generator.next())
console.log(generator.next("next1"))
console.log(generator.next("next2"))
