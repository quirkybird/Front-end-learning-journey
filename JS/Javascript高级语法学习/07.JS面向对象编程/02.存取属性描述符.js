var obj = {
    name: "qinye",
    age: 18,
    _address: "北京市"
}
// 存取属性描述符
// 1.隐藏某一个私有属性,不希望直接被外界使用或赋值
// 2.截获某一个属性访问或设置值时,会用到存取属性描述符
Object.defineProperty(obj, "address", {
    // 该特性不可删除/也不可重新定义数据描述符
    configurable: false, //默认值为false
    // 该特性是配置对应的属性是否可以被枚举
    enumerable: false, //默认值false

    get: function(){
        getLog();
        return this._address;
    },

    set: function(value){
        setLog();
        this._address = value;
    }

})
 obj.address = "巴中市"
 console.log(obj.address)


function getLog(){
    console.log("属性被访问");
 }
 function setLog(){
    console.log("属性被修改");
 }