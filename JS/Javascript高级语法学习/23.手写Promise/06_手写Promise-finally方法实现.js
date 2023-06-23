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
    const defaultOnRejected = (err) => {
      throw err;
    };
    onReject = onReject || defaultOnRejected;

    const defaultOnFulfilled = (value) => {
      return value;
    };
    onFulfilled = onFulfilled || defaultOnFulfilled;

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
        if (onFulfilled)
          this.onFulfilledFns.push(() => {
            execTryCatch(onFulfilled, this.value, resolve, reject);
          });
        if (onReject)
          this.onRejectFns.push(() => {
            execTryCatch(onReject, this.reason, resolve, reject);
          });
      }
    });
  }

  catch(onReject) {
    return this.then(undefined, onReject);
  }
  finally(onFinally) {
    this.then(
      () => {
        onFinally();
      },
      () => {
        onFinally();
      }
    );
  }
}
const promise = new qbPromise((resolve, reject) => {
  // resolve("12321");
  reject("9999");
});
// finally方法实现

promise
  .then((res) => {
    console.log("res:" + res);
  })
  .catch((err) => {
    console.log("err:" + err);
  })
  .finally(() => {
    console.log("耍耍耍耍耍耍耍耍耍耍耍耍");
  });
