var obj = {
    _age: 18
}
 
Object.defineProperties(obj, {
    name: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: "qinye"
    },
    age: {
        configurable: true,
        enumerable: false,
        get: function(){
            return this._age;
        },
        set: function(value){
            this._age = value;
        }

    }
})