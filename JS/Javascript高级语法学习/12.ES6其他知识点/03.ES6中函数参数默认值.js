// ES6可以给函数参数提供默认值
function foo(m = "aaa", n = "bbb") {
    console.log(m, n)
}
foo() //aaa bbb
foo(0, "") //0 

// 1.对象参数和默认值以及解构
function printInfo({name, age} = {name: "qinye", age: 20}){
    
    console.log(name, age)

}
printInfo({name: "quirkybird", age: 20});

// 2.另一种写法 
function newPrintInfo({name = "qinye", age = 20} = {}){
    console.log(name, age)
}

newPrintInfo()

// 3.有默认值的形参最好放到最后
function bar(x, y, z = 3){
    console.log(x, y, z)
}
bar(1, 2) //方便不传入第三个参数，让其等于默认值

// 4.有默认值函数的length属性
function baz(a, b, c = 3, d) {
    console.log(a, b, c, d)

}
console.log(baz.length) //2 ，长度计算为没有默认参数值前参数的个数
