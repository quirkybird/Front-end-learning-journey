
// 定义: arguments是一个函数传递参数的类数组(arry-like)对象

// array-like意味着它不是一个数组类型,而是一个对象类型
// 但是它拥有数组的一些特性,比图说lenth,比如可以通过index索引来访问;
// 但是他却没有数组的一些方法,比如forEach、map等;

function bar(sum1,sum2){
    console.log(arguments);
    // 将arguments转换为Array
    // 1.自己遍历
    var newArray = new Array();
    for(var i = 0; i < arguments.length; i++){
        newArray.push(arguments[i]);
    }
    console.log(newArray);
    // 2.用slice方法
    var newArray1 = Array.prototype.slice.call(arguments);
    console.log(newArray1);
    // 第二种方法可简写为
    var newArray2 = [].slice.call(arguments);
    console.log(newArray2);
}
bar(1,2,3,4,5);