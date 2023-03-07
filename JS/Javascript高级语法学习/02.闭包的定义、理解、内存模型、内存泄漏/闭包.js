// 闭包由两部分组成： 函数+自由访问的变量
function foo() {
  var name = "foo"; //name被称为自由变量，脱离上下文后，自由变量不会被销毁
  function bar() {
    console.log("bar", name);
  }
  return bar;
}
var fn = foo();
fn();
//关于此法环境的一个示例
var myname = "qinye"
function test1(){
    console.log(myname);
}
function test2(){
    var myname = "qingyu";
    test1();
}
test2();