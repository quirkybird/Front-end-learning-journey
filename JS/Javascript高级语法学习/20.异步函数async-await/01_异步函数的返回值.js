// 使用async表明该函数是一个异步函数

async function foo() {
        throw new Error("哎呀呀， 遇到了一个错误")
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("piu~")
            }, 2000)
        }) //如果有异常，会在catch捕获，不会直接报错
}

// 异步函数返回值是一个promise
foo().then(res => console.log("res: " + res) ).catch(err => {
    console.log(err)
})
