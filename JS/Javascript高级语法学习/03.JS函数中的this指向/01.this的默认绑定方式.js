//直接调用独立函数，this必定指向window
//案例一
function foo(){
    console.log(this)
}
foo() //window对象

//案例二
function foo1(){
    console.log(this)
}
function foo2(){
    console.log(this)
    foo1()
}
foo2() //window对象

//案例三
var obj = {
    name: 'qinye',
    foo: function (){
        console.log(this)
    }
}
var fn = obj.foo
fn() //window对象

//案例三
function foo(){
    console.log(this)
}
var obj = {
    name: 'qinye',
    foo: foo
}
var fn = obj.foo
fn() //window对象

//案例五
function foo(){
    return function bar(){
        console.log(this)
    }
}

var Fn = foo()
Fn() //window对象
