function qbThrottle(fn, wait) {
    let startTime = 0
    function _throttle(...args) {
        const nowTime = new Date().getTime()
        const waitTime = wait - (nowTime - startTime)
        if(waitTime <= 0) {
            fn.apply(this, args)
            startTime = nowTime
        }
    }
    return _throttle
}