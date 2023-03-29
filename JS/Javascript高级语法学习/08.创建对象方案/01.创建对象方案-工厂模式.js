// 工厂模式： 工厂函数
function createPerson(name, age, height, address) {
  var p = {};
  p.name = name;
  p.age = age;
  p.height = height;
  p.address = address;

  p.eating = function () {
    console.log(this.name + "在吃东西~");
  };

  p.running = function () {
    console.log(this.name + "在跑步~");
  };
  return p;
}

var p1 = createPerson("qinye", "20", "1.75", "巴中市");
var p2 = createPerson("quirkybird", "18", "1.65", "北京市");
var p3 = createPerson("Ye", "24", "1.75", "广州市");
var p4 = createPerson("juan", "21", "1.75", "重庆市");
console.log(p1, p2, p3, p4);
console.log(p1.eating())