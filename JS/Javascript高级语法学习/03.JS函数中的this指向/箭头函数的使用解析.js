// 箭头函数（arrow function）\
// 1.箭头函数不会绑定this，arguments属性
// 2.箭头函数不能作为构造函数一起使用

var nums = [10,20,30,40];

// 箭头函数的一些常见的简写
// 简写一：如果传入参数只有一个，则可以省略（）
nums.forEach(item => {
    console.log(item)
})

// 简写二：如果函数执行体只有一行代码，那么可以省略{}
// 强调：默认会返回这行函数执行的结果
nums.forEach(item => console.log(item));

var newNums = nums.filter(item => item % 2 === 0)

// 简写三：如果函数的返回值为一个对象
// 可以在对象外面加一个括号
var fn = () => ({name:"qinye",age:18})