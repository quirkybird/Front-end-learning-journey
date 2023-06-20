// 实现的Promise需要符合Promise A plus规范

const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECT = "reject"
class qbPromise{
    constructor(executor) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        const resolve = (value) => {
            if(this.status === PROMISE_STATUS_PENDING) {
                this.status = PROMISE_STATUS_FULFILLED
                    queueMicrotask(() => {
                        this.value = value
                        this.onFulfilled(this.value)
                        console.log("resolve")
                    })   
            }
        }
        const reject = (reason) => {
            if(this.status === PROMISE_STATUS_PENDING) {
                this.status = PROMISE_STATUS_REJECT
                    queueMicrotask(() => {
                        this.reason = reason
                        this.onReject(this.reason)
                        console.log("reject")
                    })
            }
        }
        executor(resolve, reject)
    }
        then(onFulfilled, onReject) {
            this.onFulfilled = onFulfilled
            this.onReject = onReject
        }
}


const promise = new qbPromise((resolve, reject) => {
    resolve("12321")
})

promise.then(res => console.log(res))