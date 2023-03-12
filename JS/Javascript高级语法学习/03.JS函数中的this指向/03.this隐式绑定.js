//隐式绑定 Object.fn()
//Object会被js引擎绑定到fn函数的this里面
function foo(){
    console.log(this)
}
var obj = {
    name: 'qinye',
    foo: foo
}

obj.foo() //this指向obj