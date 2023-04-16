function foo() {
  // Promise
  return new Promise((resolve, reject) => {
    // 成功执行resolve函数，否则执行reject函数
    // 两个函数分别调用对象方法then()的第一个回调函数和第二个回调函数
    // resolve()
    reject();
  });
}

const fooPromise = foo();
fooPromise.then(
  (res) => {
    console.log("成功");
  },
  (err) => {
    console.log("失败");
  }
);
