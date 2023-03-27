"use strict"
// 1.意外创建了全局变量
function foo(){
    message = "world"
}
// 2.不允许函数有相同的参数
function foo1(x, y, x){
    return x;
}
// 3.静默错误
true.name = "abc"
NaN = 123
// 4.with语句不允许使用
// 5.eval()函数不会向上引用变量
// 6.在严格模式下，自执行函数(默认绑定)会指向undefined