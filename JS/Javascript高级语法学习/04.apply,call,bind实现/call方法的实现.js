//给所有的函数添加一个mycall的方法
Function.prototype.mycall = function(thisArg,...args){
// 在这里可以去执行调用的那个函数
// 问题：得可以获取到是哪一个函数执行了mycall
// 1.获取需要被执行的函数
var fn = this;

// 2.对thisArg转成对象类型,防止传入的是非对象类型

thisArg = (thisArg!==null && thisArg!==undefined) ? Object(thisArg) : window ; //传入为undefined 和null时,返回为window对象

// 3.调用需要被执行的函数
thisArg.fn = fn;
var result = thisArg.fn(...args);
delete thisArg.fn;
// 4,将最终的结果返回出去
return result;
}

function foo(){
    console.log("foo函数被执行",this);
}
function sum(num1,num2){
    console.log("sum函数被执行",this);
    return num1 + num2;
}

foo.mycall();
foo.mycall(null);
sum.mycall({});
var result = sum.mycall({},1,9);
console.log(result);
