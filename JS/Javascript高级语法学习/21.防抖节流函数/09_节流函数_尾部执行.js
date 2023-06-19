function qbThrottle(fn, wait, immediate = true, trailing = true) {
    let startTime = 0
    let timer = null
    function _throttle(...args) {
        const nowTime = new Date().getTime()
        if(!immediate && startTime === 0) {
            startTime = nowTime
        }
        const waitTime = wait - (nowTime - startTime)
        if(waitTime <= 0) {
            if(timer) clearTimeout(timer)
            fn.apply(this, args)
            startTime = nowTime
            timer = null
            return
        }
        if(trailing && !timer) {
            timer = setTimeout(() => {
               fn.apply(this, args) 
               startTime = new Date().getTime()
               timer - null
            }, wait);
        }

    }
    return _throttle
}