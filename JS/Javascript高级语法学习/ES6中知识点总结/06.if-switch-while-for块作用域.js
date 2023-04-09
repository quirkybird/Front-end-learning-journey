// 在这些语句中，都有块级作用域，并不是{}一种方式来表明代码块
for(var i = 0; i < 10; i++){

}
console.log(i) //10

for(let j = 0; j < 10; j++){

}
console.log(j) // j is not defined