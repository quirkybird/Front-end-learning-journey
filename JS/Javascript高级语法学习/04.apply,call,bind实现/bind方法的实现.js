//给所有的函数添加一个mybind的方法
Function.prototype.mybind = function(thisArg,...firstArgs){
    // 在这里可以去执行调用的那个函数
    // 问题：得可以获取到是哪一个函数执行了mycall
    // 1.获取需要被执行的函数
    var fn = this;
    
    // 2.对thisArg转成对象类型,防止传入的是非对象类型
    
    thisArg = (thisArg!==null && thisArg!==undefined) ? Object(thisArg) : window ; //传入为undefined 和null时,返回为window对象
    
    return function proxyFn(...secondArgs) {
        // 3.返回需要调用的函数
    thisArg.fn = fn;
    finalArray = contact(...firstArgs , ...secondArgs)
    var result = thisArg.fn(...finalArray);
    delete thisArg.fn;
      // 返回输出结果
    return result;
    }
    }
    
    function foo(){
        console.log("foo函数被执行",this);
    }
    function sum(num1,num2,num3,num4){
        console.log("sum函数被执行",this);
        return num1 + num2 + num3 + num4;
    }

var bar = sum.bind({name:"qinye"},1,2);
var sum = bar(3,4);
console.log(sum);