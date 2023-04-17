// catch也可以多次调用，同时执行所有catch方法
const promise = new Promise((resolve, reject) => {
    reject("rejected status")
    // throw new Error("rejected status")
})

// 1.catch方法会reject回调函数调用时使用/捕获一个Error异常
promise.catch(err => {
    console.log(err)
})

// 2.配合then方法使用
promise.then((res) => {

}).catch((err) => { //需要注意的是，这里的catch现在是promise的方法，如果promise没有异常
                    //会查找then方法返回的new Promise()中是否出现Error或者调用reject回调函数
    console.log(err)
})