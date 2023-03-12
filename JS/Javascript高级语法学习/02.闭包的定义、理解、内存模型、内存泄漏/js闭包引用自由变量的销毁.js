function foo(){
    var name = 'qinye'
    var age = 18
    function bar(){
        debugger
        console.log(name)
        //age自由变量未被使用
    //这里未使用的自由变量JavaScript引擎会做一个回收
    //在实际的ECMAScript规范里，自由变量在同一个环境应该是不被删除的
    //不引用age变量，则其会被回收。
    }
    return bar
}
var fn = foo()
fn()