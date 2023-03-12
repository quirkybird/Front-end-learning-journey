//apply和call
function foo(){
    console.log(num1+num2)
    console.log('函数被调用了')
}

//直接调用和apply/call调用不同在于this绑定不同

var obj = {
    name: 'qinye'
}

//call/apply可以指定this的绑定对象
foo.call('obj',10,20)
foo.apply('obj',[20,30])
foo.call('aaaa')

//bind
//默认绑定和bind绑定冲突，优先级是bind绑定优先
function bar() {
    console.log(this)
}
var fn = bar.bind(obj)
fn() //obj对象
