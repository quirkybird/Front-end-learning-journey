var obj = {
    name: "qinye",
    age: 18
}
// 1.禁止对象继续添加新的属性
Object.preventExtensions(obj);
obj.height = 1.75;
console.log(obj);
// 2.禁止修改配置/删除里面的属性
obj.seal(obj);
delete obj.name;
console.log(obj.name);
// 3.禁止修改属性值
obj.freeze()
obj.age = 20;
console.log(obj.age);