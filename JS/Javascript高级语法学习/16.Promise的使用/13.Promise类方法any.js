const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1111")
    }, 4000);
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

// 与race类似，不同的是他需要一个resolve的fulfilled状态返回
Promise.any([p1, p2, p3]).then(res => { 
    console.log("any resolve:" + res)
}).catch(err => {
    console.log("any error:" + err)
})