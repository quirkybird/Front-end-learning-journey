const obj = {
    _name: "qinye",
    get name() {
        return this._name
    },
    set name(newValue) {
        this._name = newValue
    }

}

const objProxy = new Proxy(obj, {
    get: function(target, key, receiver) {
        console.log("get方法被访问---", key)
        console.log(receiver === objProxy) //receiver === objProxy
        return Reflect.get(target, key, receiver) //receiver让obj中get方法中this绑定为receiver
    },
    set: function(target, key, newValue, receiver){
        console.log("set方法被使用", key)
        Reflect.set(target, key, newValue, receiver)
    }
})

console.log(objProxy.name)
objProxy.name = "quirkybird"