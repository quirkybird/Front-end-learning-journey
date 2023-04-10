// 展开语法中仅仅做了一个浅拷贝
// 浅拷贝：
// 对象的浅拷贝是其属性与拷贝源对象的属性共享相同引用（指向相同的底层值）的副本。
// 因此，当你更改源或副本时，也可能导致其他对象也发生更改——也就是说，你可能会无
// 意中对源或副本造成意料之外的更改。这种行为与深拷贝的行为形成对比，在深拷贝中，
// 源和副本是完全独立的。
const info = {
    name: "qinye",
    friend: {name: "juan"}
}

const obj = {...info, name: "quirkybird"}
obj.friend.name = "juanjuan"

console.log(info.friend.name)
// 在 JavaScript 中，所有标准的内置对象复制操作
// （展开语法、Array.prototype.concat()、Array.prototype.slice()、Array.from()、Object.assign() 
// 和 Object.create()）创建的是浅拷贝而不是深拷贝。