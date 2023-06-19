function qbThrottle(fn, wait, immediate = true, trailing = true) {
    let startTime = 0
    function _throttle(...args) {
        const nowTime = new Date().getTime()
        if(!immediate && startTime === 0) {
            startTime = nowTime
        }
        const waitTime = wait - (nowTime - startTime)
        if(waitTime <= 0) {
            fn.apply(this, args)
            startTime = nowTime
            return
        }

    }
    return _throttle
}