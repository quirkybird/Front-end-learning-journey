//一个约定俗成的规划，构造函数函数名首字母大写
//构造函数存在的一些缺点：比如里面的function，每一次new一个新Person都会创建一个新的function，这样会浪费不必要的内存
function Person(name, age, height, address){
    this.name = name;
    this.age = age;
    this.height = height;
    this.address = address;

    this.eating = function() {
        console.log(this.name + "在吃东西~");
    }
    this.running = function() {
        console.log(this.name + "在跑步~");
    }
}
var p1 = new Person("qinye", "20", "1.75", "巴中市");
var p2 = new Person("quirkybird", "18", "1.65", "北京市");
var p3 = new Person("Ye", "24", "1.75", "广州市");
var p4 = new Person("juan", "21", "1.75", "重庆市");
console.log(p1, p2, p3, p4);
console.log(p1.eating())
