// await 关键词只能在异步函数中使用，普通函数中使用报错

// await通常用来等待Promise到fulfilled状态

function foo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("successful")
        },10000)
})
}

async function bar() {
    console.log("代码开始执行")
    const res = await foo()
    console.log("res: " + res)
}

bar()