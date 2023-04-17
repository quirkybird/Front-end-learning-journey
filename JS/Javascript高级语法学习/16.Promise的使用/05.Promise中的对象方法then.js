const promise = new Promise((resolve, reject) => {
  resolve("hahahaha");
});

// 1.同一个Promise可以被多次调用then方法
// 当我们的resolve方法被回调时，所有的then方法传入的回调函数都会被调用
promise.then((res) => {
  console.log("res:", res);
});

promise.then((res) => {
  console.log("res:", res);
});

promise.then((res) => {
  console.log("res:", res);
});


//2.then方法传入的回调函数：可以有返回值
// then方法本身也是有返回值的，他返回值是Promise
// 1> 如果我们返回的是一个普通值（数值/字符串/普通对象/undefined），那么这个普通的值被作为一个新的Promise的resolve值
// 2> 如果我们返回的是一个Promise
// 3> 如果返回的一个包含then方法的对象，会移交至这个then方法处理

// 1>
promise.then(res => {
    return "1> 999999" //return new Promise((resolve, reject) => resolve("999999"))
}).then(res => {
    console.log("res: ", res)
})

// 2>
promise.then(res => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2> 666666") //return new Promise((resolve, reject) => resolve(Promise)) //这个Promise就是自己写的返回的Promise
        }, 2000)
    }) 
}).then(res => {
    console.log("res: ", res)
})

// 3>
promise.then(res => {
    return {
        then: function(reslove, reject) {
            reslove("3> 888888")
        }
    }
}).then(res => {
    console.log("res: ", res)
})