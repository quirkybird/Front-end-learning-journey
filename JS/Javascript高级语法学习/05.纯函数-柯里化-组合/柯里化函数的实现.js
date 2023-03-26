// 柯里化函数的实现，自己封装一个自动转为柯里化函数的函数myCurrying
function myCurrying(fn){
    return function curried(...args){
        // 判断已经接收的参数的个数，可以参数本身接收的参数一致
        // 1.当已经传入的参数大于等于需要的参数时，就执行函数
        if(args.length >= fn.length){
            //fn.length可以获取到函数参数的个数
            return fn.apply(this, args);
        }else{
            // 没有达到个数时，需要返回一个函数，继续接受参数
            return function(...args2){
            // 接收参数后，需要用递归curried来检查传入参数是否达到
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

var curryAdd = myCurrying(add);
function add(x, y, z){
    return x + y +z;
}
console.log(curryAdd(10)(20)(30));
console.log(curryAdd(10,20)(30));
console.log(curryAdd(10,20,30));