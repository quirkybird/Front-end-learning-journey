// 纯函数简单来说，两点
// 1.相同的输入，相同的输出
// 2.函数在执行过程中不会产生任何的副作用（不修改参数，不修改外部变量）

// 纯函数的优点
// 1.在编写函数时，保证了函数的纯度，单纯实现业务逻辑即可，不需要
// 担心传入内容是如何获得或者依赖其他的外部变量是否发生了修改。
// 2.在使用函数时，确定了输入内容不会被任意篡改，并且确定自己的输入，一定会有确定的输出。

// 举例 slice和splice
obj = ["abc","bca","cba","abb"];
function foo(obj){
    return obj.slice(0,2);
}
function bar(obj){
    return obj.splice(0,2);
}
var newObj1 = foo(obj);
console.log(obj);
console.log(newObj1);
//slice()为纯函数
var newObj2 = bar(obj);
console.log(obj);
console.log(newObj2);
//splice不是纯函数