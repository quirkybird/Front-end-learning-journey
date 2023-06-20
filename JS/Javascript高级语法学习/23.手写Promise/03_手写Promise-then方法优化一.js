// 实现的Promise需要符合Promise A plus规范

const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECT = "reject"
class qbPromise{
    constructor(executor) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledFns = []
        this.onRejectFns = []
        const resolve = (value) => {
            if(this.status === PROMISE_STATUS_PENDING) {
                    queueMicrotask(() => {
                        if(this.status !== PROMISE_STATUS_PENDING) return
                        this.status = PROMISE_STATUS_FULFILLED
                        this.value = value
                        this.onFulfilledFns.forEach(fn => fn(this.value))
                        console.log("resolve")
                    })   
            }
        }
        const reject = (reason) => {
            if(this.status === PROMISE_STATUS_PENDING) {
                    queueMicrotask(() => {
                        if(this.status !== PROMISE_STATUS_PENDING) return
                        this.status = PROMISE_STATUS_REJECT
                        this.reason = reason
                        this.onRejectFns.forEach(fn => fn(this.reason))
                        console.log("reject")
                    })
            }
        }
        executor(resolve, reject)
    }
        then(onFulfilled, onReject) {
            if(this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
                onFulfilled(this.value)
            }
            if(this.status === PROMISE_STATUS_REJECT && onReject) {
                onReject(this.reason)
            }
            // 将回调函数放到数组中
            if(this.status === PROMISE_STATUS_PENDING) {
                this.onFulfilledFns.push(onFulfilled)
                this.onRejectFns.push(onReject)
            }
            
        }
}


const promise = new qbPromise((resolve, reject) => {
    resolve("12321")
    reject(111)
})
// 优化一，then方法的多次调用
promise.then(res => console.log(res))
promise.then(res => console.log(res))

// 优化二，延时执行prmise正常调用then
setTimeout(() => {
    promise.then(res => console.log(res))
}, 2000);