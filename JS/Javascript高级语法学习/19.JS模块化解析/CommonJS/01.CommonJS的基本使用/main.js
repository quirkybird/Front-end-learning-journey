// 使用另外一个模块导出的对象时，需要用require导入
const { name, age, foo } = require("./quirkybird.js")

console.log(name, age)
foo()