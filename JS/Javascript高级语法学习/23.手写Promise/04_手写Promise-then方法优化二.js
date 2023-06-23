// 实现的Promise需要符合Promise A plus规范

const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECT = "reject";

// 封装工具函数
function execTryCatch(execFn, value, resolve, reject) {
  try {
    const result = execFn(value);
    resolve(result);
  } catch (error) {
    reject(error);
  }
}
// 手写promise
class qbPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledFns = [];
    this.onRejectFns = [];
    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          this.onFulfilledFns.forEach((fn) => fn());
        });
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_REJECT;
          this.reason = reason;
          this.onRejectFns.forEach((fn) => fn());
        });
      }
    };
    executor(resolve, reject);
  }

  then(onFulfilled, onReject) {
    return new qbPromise((resolve, reject) => {
      // 状态已经确定后的then方法调用
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        execTryCatch(onFulfilled, this.value, resolve, reject);
      }

      if (this.status === PROMISE_STATUS_REJECT && onReject) {
        execTryCatch(onReject, this.reason, resolve, reject);
      }
      // 将回调函数放到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledFns.push(() => {
          execTryCatch(onFulfilled, this.value, resolve, reject);
        });
        this.onRejectFns.push(() => {
          execTryCatch(onReject, this.reason, resolve, reject);
        });
      }
    });
  }
}
const promise = new qbPromise((resolve, reject) => {
//   resolve("12321");
    reject("9999")
});
// then优化三: then方法的链式调用

promise
  .then(
    (res) => {
      console.log("res1:" + res);
      return "32131";
    },
    (err) => {
        console.log("err1:" + err)
        return "78979"
    }
  )
  .then(
    (res) => {
      console.log("res2:" + res);
    },
    (err) => console.log("err2:" + err)
  );
