// ES6中的代码块的作用域
// 对let/const/function/class声明类型有效
{
    let foo = "qinye"
    function demo() {
        console.log("demo function")
    }
    class Person {}
}

 console.log(foo) //foo is not defined

// demo() //原则上不能执行
//  不同的浏览器有不同的实现的（大部分浏览器为了兼容之前的代码，让function没有块级作用域）

let p = new Person() //Person is not defined