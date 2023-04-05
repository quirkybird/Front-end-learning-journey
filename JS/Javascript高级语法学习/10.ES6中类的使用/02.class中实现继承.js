// super关键词
// 1.在子（派生）类的构造函数中使用this或者返回默认对象之前，必须先通过super调用父类构造函数！
// 2。super的使用位置有三个：子类的构造函数，实例方法，静态方法；

class Person {
    
    constructor(name, age) {
    this.name = name
    this.age = age
    }

    sleeping(){
        console.log(this.name + " sleeping~")
    }

    personMethod() {
        console.log("处理逻辑1")
        console.log("处理逻辑2")
        console.log("处理逻辑3")
    }

    static staticMethod() {
        console.log("PersonStaticMethod!")
    }
}
class Student extends Person{

    constructor(name, age, score) {
        super(name, age)
        this.score = score
    }

    studying(){
        console.log(this.name + "studying")
    }

    // 类对父类方法的重写
    sleeping() {
        console.log("student " + this.name + " running")
    }

    // 重写personMethod方法
    studentMethod() {
        // 实现父类处理逻辑
        super.personMethod()

        console.log("处理逻辑4")
        console.log("处理逻辑5")
        console.log("处理逻辑6")

    }
    //重写静态方法
    static staticMethod() {
        super.staticMethod()
        console.log("StudentStaticMethod!")
    }

}

var p = new Student("qinye", 20, 89)
p.sleeping()
p.studying()

p.studentMethod()

Student.staticMethod()