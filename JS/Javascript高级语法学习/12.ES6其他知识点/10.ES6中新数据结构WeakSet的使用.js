const weakSet = new WeakSet()

// 和Set数据结构的区别
// 区别一： 只能存放对象类型
// 如果添加基本数据类型会报错

// 区别二：WeakSet是一个弱引用 
let obj = {
    name: "qinye"
}
weakSet.add(obj)