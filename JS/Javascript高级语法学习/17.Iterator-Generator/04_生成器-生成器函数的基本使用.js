/**
 * 生成器函数： 
 *      1.function后面会跟上符号： *
 *      2.代码在被执行时可以被yield控制
 *      3.生成器函数默认在执行时，返回一个生成器对象
 *          -想要执行函数内部代码，需要生成器对象，调用它的next操作
 *          -当遇到yield时，会执行中断操作
 */

// 定义一个迭代器函数
function* bar() {
    console.log("1111")
    console.log("2222")
    yield
    console.log("3333")
    console.log("4444")
    yield
    console.log("5555")
    console.log("6666")
}
// 调用生成器函数，返回一个生成器
const generator = bar()
generator.next()
generator.next()