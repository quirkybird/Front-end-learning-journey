// 找dom节点，必须要把Script标签放在dom树后面
const doc = document;
const pre = doc.querySelector('#left');
const next = doc.querySelector('#right');
const lpte = doc.querySelector('.loopPicture');

const one = doc.querySelector('.dot li:nth-child(1)');
const two = doc.querySelector('.dot li:nth-child(2)');
const three = doc.querySelector('.dot li:nth-child(3)');
const four = doc.querySelector('.dot li:nth-child(4)');
const five = doc.querySelector('.dot li:last-child');
let curpicIndex = 0;//当前图片
const picList = [
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a3729c82b1ec2bdbb641c30564c5bed1.jpg?w=2452&h=920",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c0a961647a4ffb29372a8395893de97.png?thumb=1&w=1226&h=460&f=webp&q=90",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/212e321c7a8a858e7a458a756ab6122f.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c162874708ca7856f972ef5eee976e3a.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d507a3851facf18b1ee54ee94c9e8e8.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
]
window.addEventListener('click', function(){
    

})
let listenpic = function(){
    console.log(curpicIndex)
    switch(curpicIndex){
        case 0: 
            five.style.backgroundColor = '#a9a9a9';
            one.style.backgroundColor = '#fff';
            break;
        case 1: 
            one.style.backgroundColor = '#a9a9a9';
            two.style.backgroundColor = '#fff';
            break;
        case 2: 
            two.style.backgroundColor = '#a9a9a9';
            three.style.backgroundColor = '#fff';
            break;
        case 3: 
            three.style.backgroundColor = '#a9a9a9';
            four.style.backgroundColor = '#fff';
            break;
        case 4: 
            four.style.backgroundColor = '#a9a9a9';
            five.style.backgroundColor = '#fff';
            break;
        default:
            break;
    }
    
}
function render() {
    lpte.style.backgroundImage = "url(" + picList[curpicIndex] + ") ";
    lpte.style.backgroundSize = 'cover';
    listenpic();
    curpicIndex += 1;
    if(curpicIndex === 5){
        curpicIndex = 0;
    }
}
render();
setInterval('render()', 5000);

pre.onclick = function(){
    if(curpicIndex > 0 && curpicIndex <= 4 ){
    render();
    }
}
next.onclick = function(){
    if(curpicIndex <= 4 ){
    render();
    }
}

