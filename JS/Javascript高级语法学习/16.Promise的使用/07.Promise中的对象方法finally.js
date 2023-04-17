// finally无论是resolve还是reject都会执行
const promise = new Promise((resolve, reject) => {
    // resolve("resolve message")
    reject("reject message")
})

promise.then((res) => {
    console.log("res: ",res)
}).catch((err) => {
    console.log("err: ",err)    
}).finally(() => {
    console.log("finallyy code")
})