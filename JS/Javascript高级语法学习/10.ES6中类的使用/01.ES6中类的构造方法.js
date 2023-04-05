var names = ["qinye", "why", "quirkybird"]
class Person {

    // 每个类只能有一个构造函数，如果有多个constructor，则会抛出异常
    //和构造函数一样，通过new操作符操作类时，会自动调用constructor方法，并执行下面操作:
    // 1.在内存中创建一个新的对象（空对象）
    // 2.这个被创建的对象的原型[[prototype]]会指向类的prototype属性
    // 3.类里面的this,会指向被创建的对象
    // 4.会自动执行类里面的代码
    // 5.返回这个被创建的对象 
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._address = "锦州市";
    }

    // 类的访问器方法
    get address() {
        console.log("拦截访问操作")
        return this._address
    }

    set address(newAddress) {
        console.log("拦截设置操作")
        this._address = newAddress
    }

    // 类的静态方法（类方法）
    static randomPerson() {
        var nameIndex = Math.floor(Math.random() * names.length)
        var name = names[nameIndex]
        var age = Math.floor(Math.random() * 100)
        return new Person(name ,age) 
    }
}

var p1 = new Person("qinye",20);
var p2 = new Person("quirkybird",8);
console.log(p1, p2)

console.log(p1.address)
p1.address = "巴中市"
console.log(p1.address)

console.log(Person.randomPerson())
