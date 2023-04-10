// 第一个参数依然是字符串中整个字符串，只是被切成很多快，放到一个数组中
// 第二个参数是模板字符串，第一个${}
function foo(m, n) {
    console.log(m, n)
}

//另外调用函数的方式 ： 标签模板字符串
// foo``
const name = "qinye"
foo`hello${name}world`