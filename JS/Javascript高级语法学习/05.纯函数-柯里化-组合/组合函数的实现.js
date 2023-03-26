function myCompose(...fns){
    var length = fns.length;
    for (var i = 0; i < length; i++){
        if(typeof fns[i] !== 'function'){
            throw new TypeError("Expected arguments are function");
        }
    }
    return function(...args){
        var index = 0;
        var result = length ? fns[index].apply(this,args) : args;
        while(++index < length){
            result = fns[index].call(this,result);
        }
        return result;
    }
}
function add(x){
    return x + 8;
}
function square(y){
    return y ** 5;
}

var result1 = myCompose(add,square);
console.log(result1(2))