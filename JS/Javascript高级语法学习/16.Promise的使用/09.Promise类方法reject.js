// 无论reject方法传入什么值，都调用catch
const promise = Promise.reject("error message")

promise.then(res => {
    console.log("res: ",res)
}).catch(err => {
    console.log("err: ",err)
})