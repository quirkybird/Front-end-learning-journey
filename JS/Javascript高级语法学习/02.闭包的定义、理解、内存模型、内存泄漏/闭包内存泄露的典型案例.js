function createFnArray() {
  //占据内存 4M
  var aee = new Array(1024 * 1024).fill(1);
  return function () {
    console.log(arr.length);
  };
}

var arrayFns = [];
for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    arrayFns.push(createFnArray());
  }, i * 100);
}

setTimeout(() => {
  for (var i = 0; i < 100; i++) {
    setTimeout(() => {
      arrayFans.pop();
    }, 100 * i);
  }
}, 10000);
//在开发者工具中测试，被清除一般，最终会有400左右的内存占用，造成内存泄漏
