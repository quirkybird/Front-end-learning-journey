function qbThrottle(fn, wait) {
    let startTime = 0
    function _throttle() {
        const nowTime = new Date().getTime()
        const waitTime = wait - (nowTime - startTime)
        if(waitTime <= 0) {
            fn()
            startTime = nowTime
        }
    }
    return _throttle
}