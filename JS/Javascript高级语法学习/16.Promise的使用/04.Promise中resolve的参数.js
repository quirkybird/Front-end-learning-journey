/**
 * resolve(参数)
 * 1> 普通的值或者对象 pending -> fulfilled
 * 2> 传入一个Promise
 *    那么当前的Promise的状态会由传入的Promise来决定
 *    相当于状态进行了移交
 * 3> 传入一个对象，并且这个对象有实现then方法（并且这个对象实现了thenable）
 *    那么也会执行该then方法，并且又由该then方法决定后续的状态
 */

// 1.传入一个Promise
const newPromise = new Promise((resolve, reject) => {
  resolve("qinye");
});

new Promise((reslove, reject) => {
  reslove(newPromise);
}).then(
  (res) => {
    console.log("res: ", res);
  },
  (err) => {
    console.log("err: ", err);
  }
);

// 传入一个有then方法的对象
new Promise((reslove, reject) => {
    reslove({
        then: function(resolve, reject) {
            reject("这是一个错误！")
        }
    });
  }).then(
    (res) => {
      console.log("res: ", res);
    },
    (err) => {
      console.log("err: ", err);
    }
  );