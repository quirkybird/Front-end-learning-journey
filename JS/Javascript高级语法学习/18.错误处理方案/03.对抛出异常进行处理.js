function foo(type) {
    if (type === 0) {
        throw new Error("foo error message~")
    }
}

function bar() {
    try {
        foo(0)
    }catch(err) { //若try遇到抛出异常，会被catch捕获到，err参数可以拿到错误信息
        console.log(err)
    }
}

bar()

// 还可以不处理异常，这样执行到最高层仍然没有try/catch,函数就会在调用处停止执行