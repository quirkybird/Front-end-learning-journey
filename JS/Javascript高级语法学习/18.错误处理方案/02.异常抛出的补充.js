function foo(number) {
    console.log("foo函数开始执行")
    if (typeof number !== "number"){
        throw new TypeError("parameters is not number type")
        //通常我们抛出一个对象，JavaScript给我们提供了一个Error对象，专门用于抛出错误
        // 他有一些自己的子类
          // RangeError:下标值越界时使用的错误类型
          // SyntaxError: 解析语法错误时使用的错误的类型
          // TypeError: 出现类型错误时，使用的类型错误
        // 他们有一些属性
          //message:创建Error对象时传入的message
          //name:Error的名称，通常和类名一致
          //stack：整个Error的错误信息，包括函数的调用栈
    }
    if (number === 0) {
        throw new Error("parameters cannot be equal to zero")
    }
    console.log("foo函数执行结束")
}

foo("rrr")