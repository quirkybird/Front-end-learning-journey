function Person(name, age, height, address){
    this.name = name;
    this.age = age;
    this.height = height;
    this.address = address;

    Person.prototype.eating = function() {
        console.log(this.name + "在吃东西~");
    }
    Person.prototype.running = function() {
        console.log(this.name + "在跑步~");
    }
}
var p1 = new Person("qinye", "20", "1.75", "巴中市");
var p2 = new Person("quirkybird", "18", "1.65", "北京市");
var p3 = new Person("Ye", "24", "1.75", "广州市");
var p4 = new Person("juan", "21", "1.75", "重庆市");