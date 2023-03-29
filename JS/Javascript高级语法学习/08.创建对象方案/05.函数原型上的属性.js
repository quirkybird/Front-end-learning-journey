function foo(){

}
foo.prototype = {
    name: "",
    age: 18,
    height: 1.75
}

Object.defineProperty(foo.prototype,"constructor",{
    configurable:true,
    enumerable:false,
    writable: true,
    value: foo
})
