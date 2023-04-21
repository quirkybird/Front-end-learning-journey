function sum(num1, num2) {
    // 当传入的参数的类型不正确时，应该告知调用者一个错误
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        // 抛出一个错误
        throw "parameters is error type~"
    }
    return num1 + num2
}

// 调用者如果进行错误处理，那么程序会直接终止
console.log(sum({}, true))
// 后续代码不会继续执行
console.log(sum(20, 30))