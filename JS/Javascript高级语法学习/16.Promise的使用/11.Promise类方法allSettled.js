const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1111")
    }, 1000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("error message")
    }, 2000);
   
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("3333")
    }, 3000);
    
})

    // 与all方法类似，不过不同的是，他不会因为一个Promise处于reject状态而停止，它会返回所有的结果
Promise.allSettled([p1, p2, p3]).then(res => { //按照传入顺序执行
    console.log(res)
}).catch(err => {
    console.log(err)
})