//通常情况下，this使用在函数中
//浏览器中，在全局作用域中this指向window
//即console.log(this) == console.log(window)
//在node环境下，this指向一个空对象{}
console.log(this)
//this指向什么，和函数所处的位置没有关系
//跟函数调用的方式有关系
//this是在运行时被绑定的
function foo(){
    console.log(this)
}

//1.直接调用这个函数
foo()

//2.创建一个函数，对象中的函数指向foo
var obj = {
    name: 'qinye',
    foo: foo
}
obj.foo()
//3.第三种，apply调用
foo.apply('abc')