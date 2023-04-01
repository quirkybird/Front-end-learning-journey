function createObject(o){
    function Fn() {}
    Fn.prototype = o;
    return new Fn();
}
// 封装这个继承实现
function inheritPrototype(SubType, SuperType) {
    SubType.prototype = createObject(SuperType.prototype);
    Object.defineProperty(SubType.prototype, "constructor", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: SubType
    })
}

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
Person.prototype.eating = function() {
    console.log(this.name + " eating~");
}
Person.prototype.sleeping = function() {
    console.log(this.name + " sleeping~");
}

function Student(name, age, sex, sno, teacher) {
    Person.call(this, name, age, sex);
    this.sno = sno;
    this.teacher = teacher;
}

inheritPrototype(Student, Person)
// Student.prototype = Object.create(Person.prototype)

Student.prototype.studying = function(){
    console.log(this.name + " studying~")
}

var stu = new Student("qinye", 20, "man", 21012267, "coderwhy")
console.log(stu)
stu.studying()
stu.sleeping()