// 自己实现一个apply方法
Function.prototype.myapply = function(thisArg,argsArray){
    // 1. 获取到调用函数
    var fn = this;
    // 2.对传入thisArg指向进行处理
    thisArg = (thisArg !== null && thisArg !==undefined) ? Object(thisArg) : window;
    // 3.执行函数
    thisArg.fn = fn;
    var result;
    //对要执行函数fn是否有参数进行一个判断,防止出现报错
    if(!argsArray){
        result = thisArg.fn();
    }else{
        result = thisArg.fn(...argsArray);
    }
    delete thisArg.fn;
    // 4.对结果值进行返回
    return result;

}

function foo(){
    console.log("foo函数已经被调用过了",this);
}
foo.myapply(0)