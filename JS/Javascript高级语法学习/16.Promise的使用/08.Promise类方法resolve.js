// 传入值的分前面说到的三种情况
const promise = Promise.resolve("aaa")

promise.then(res => {
    console.log(res)
})