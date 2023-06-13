const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 resolve")
    }, 4000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("error message")
    }, 2000);
   
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 resolve")
    }, 3000);
    
})

// race竞争，谁先有结果就返回谁，无论是fulfilled还是reject
Promise.race([p1, p2, p3]).then(res => { 
    console.log("race resolve:" + res)
}).catch(err => {
    console.log("race error:" + err)
})