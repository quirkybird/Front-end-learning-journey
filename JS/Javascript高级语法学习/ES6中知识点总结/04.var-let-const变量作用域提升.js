// var可重复声明
// var关键词是会对变量提升
console.log(foo)
var foo = "bae" //不会报错,正常运行

// 如果是let/const对变量声明
console.log(bar)
let bar = "bar" //ReferenceError: Cannot access 'bar' before initialization
// 这里并不意味着bar没有被创建，只是在那之前不可以被访问，所以let/const是没有变量提升的
// 注意，let/const不会保存到window对象中，而是放到一个variable_