// 1.多层处理逻辑
function foo(x){
    x = x + 1;
    return function(y){
        y = y * y;
        return function(z){
            z = z * 5;
            return x + y + z;
        }
    }
        
}
//此处意味着对传入的参数，分别做处理，此处只是简单的处理了参数，实际开发中可能是一个很复杂的步骤
var result1 = foo(1)(2)(3);
console.log(result1);

// 2。对于有重复使用的需求
function log(date){
    return function(type){
        return function(message){
    console.log(`[${date.getHours()}:${date.getMinutes()}][${type}][${message}]`);
    }
 }
}
log(new Date)("Debug")("轮播图有bug");
log(new Date)("Debug")("菜单有bug");
log(new Date)("Debug")("导航栏有bug");

// 可以改为这样写，就不用重复写一些东西了
var bugLog = log(new Date)('Debug');
bugLog("轮播图有bug");
bugLog("菜单栏有bug");
bugLog("导航栏有bug");