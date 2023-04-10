const btns = document.querySelectorAll('button')

// for(var i = 0; i < btns.length; i++){
//     btns[i].onclick = function(){
//         console.log(`点击了第${i+1}个按钮`) //function中i找上一个作用域，找到了全局的变量i
//     }
// }

for(let j = 0; j < btns.length; j++){
    btns[j].onclick = function(){
        console.log(`点击了第${j+1}个按钮`)
    }
}
//完美解决