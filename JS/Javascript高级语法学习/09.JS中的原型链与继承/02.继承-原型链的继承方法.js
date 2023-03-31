// 父类，公共属性和方法

// 该方法有三个弊端：见文末
function Person() {
    this.name = "qinye"
    this.friends = []
}
Person.prototype.eating = function() {
    console.log(this.name + " eating~")
}

// 子类： 特有的属性和方法
function Student() {
    this.sno = 111
}

// 注意书写顺序
Student.prototype = new Person();

Student.prototype.studying = function(){
    console.log(this.name + " studying~")
}

var stu1 = new Student();
console.log(stu1.name + stu1.sno );
stu1.eating()
stu1.studying()

// 1.无法获取到继承的属性
console.log(stu1);

// 2.创建出来两个stu对象
var stu2 = new Student();
var stu3 = new Student();

// 直接获取对象上的属性，是给本对象添加一个新属性
stu1.name = "kobe"
console.log(stu2.name)

// 获取引用，修改引用的值，会相互影响
stu2.friends.push("kobe")
console.log(stu2.friends) //kobe
console.log(stu3.friends) //kobe

// 3.无法实现传递参数