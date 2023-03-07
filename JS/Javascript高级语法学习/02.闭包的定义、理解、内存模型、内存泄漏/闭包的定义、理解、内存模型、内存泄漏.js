// 高阶函数：把一个函数如果接受另一个函数作为参数，或者该函数会返回另外一个函数作为返回值的函数，称这个函数为高阶函数。
// 函数为一等公民，作为参数和返回值

// 数组中的函数使用

let nums = [10, 5, 11, 100, 55]

let newNums = [];
for(let i = 0; i < nums.length; i++){
    let num = nums[i];
    if(num % 2 === 0){
        newNums.push(num);
    }
}

//filter方法

newNums = nums.filter((curValue) => {
    return curValue % 2 === 0;
})

console.log(newNums)

//map方法 映射
let newNums1 = nums.map((curValue) =>{
    return curValue * 10;
})
console.log(newNums1)

//forEach方法 迭代
nums.forEach((curValue) => {
    console.log(curValue)
})

// find(找到满足条件的第一个值)/findIndex方法 (找到满足条件的第一个值的索引)
let item = nums.find((curValue) =>{
    return curValue > 50;
})
console.log(item)

//reduce方法 累加
// nums.reduce

let total = nums.reduce((prevValue,item) =>{
    return prevValue + item;
},0)
console.log(total)