// 父类，公共的方法和属性
function Person(name, friends, age, sex) {
  this.name = name;
  this.friends = friends;
  this.age = age;
  this.sex = sex;
}
Person.prototype.eating = function () {
  console.log(this.name + " eating~");
};

// 子类： 特有的属性和方法
function Student(name, friends, age, sex, sno) {
  Person.call(this, name, friends, age, sex);
  this.sno = sno;
}

// 注意书写顺序
Student.prototype = new Person();

Student.prototype.studying = function () {
  console.log(this.name + " studying~");
};

var stu1 = new Student("qinye", ["quirkybird"], 20, "man", 21012267);
console.log(stu1.name + stu1.sno);
stu1.eating();
stu1.studying();

