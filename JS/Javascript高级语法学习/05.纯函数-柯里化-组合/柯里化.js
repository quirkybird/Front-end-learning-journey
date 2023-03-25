// 在计算机科学中，柯里化（Currying）,又译为卡瑞化或加里化；
// 是把接收多个参数的函数，变成接受一个单一参数的函数，并且接受返回余下参数的函数，而且返回结果的新函数的技术；
// 柯里化称：如果你固定某些参数，你将得到接受余下参数的一个函数。
function foo(x1,x2,x3,x4){
    return x1+x2+x3+x4;
}
var result1 = foo(1,2,3,4);
console.log(result1);

function bar(x1){
    return function(x2){
        return function(x3){
            return function(x4){
                return x1 + x2 + x3 + x4;
            }
        }
    }
}

var result2 =  bar(1)(2)(3)(4);
console.log(result2);

// 这个过程可以简化为
baz = x1 => x2 => x3 => x4 => x1 + x2 + x3 + x4;
var result3 =  baz(1)(2)(3)(4);
console.log(result3);