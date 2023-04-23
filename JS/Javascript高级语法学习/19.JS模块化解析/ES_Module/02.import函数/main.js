// import foo from "./foo.js"
// 可以使用import函数来导入，它返回的是一个promise
// 和普通import不同的是，它是异步加载的,导入时不会阻塞加载
import("./foo.js").then(res => {
    console.log(res.name)
})

console.log("我在import函数后面,我却先执行")
console.log(import.meta)