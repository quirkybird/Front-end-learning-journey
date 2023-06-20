// 实现的Promise需要符合Promise A plus规范

const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECT = "reject"
class qbPromise{
    constructor(executor) {
        this.status = PROMISE_STATUS_PENDING
        const resolve = () => {
            if(this.status === PROMISE_STATUS_PENDING) {
                this.status = PROMISE_STATUS_FULFILLED
                console.log("resolve")
            }
        }
        const reject = () => {
            if(this.status === PROMISE_STATUS_PENDING) {
                this.status = PROMISE_STATUS_REJECT
                console.log("reject")
            }
        }
        executor(resolve, reject)
    }
}


const promise = new qbPromise((resolve, reject) => {
    resolve()
})