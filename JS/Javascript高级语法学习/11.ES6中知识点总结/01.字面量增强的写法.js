var name = "qinye"
var age = 20
 
var obj = {
    // 1.property shorthand(属性的简写)
    // 曾经的写法： name: name, age: age
    name,
    age,

    // 2.method shortthand(方法的简写)
    foo: function() {
        
    },
    bar() {

    },

    // 3.computed property name(计算属性名)
    [name + 29]: "hahahah"
}
// 第三种写法原来的写法
// obj[name + 29] = "hahahaah"
