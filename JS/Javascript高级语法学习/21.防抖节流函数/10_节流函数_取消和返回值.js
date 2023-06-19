function qbThrottle(fn, wait, immediate = true, trailing = true) {
  let startTime = 0;
  let timer = null;
  function _throttle(...args) {
    return new Promise((resolve, reject) => {
            try {
                const nowTime = new Date().getTime();
                if (!immediate && startTime === 0) {
                    startTime = nowTime;
                }
                const waitTime = wait - (nowTime - startTime);
                if (waitTime <= 0) {
                    if (timer) clearTimeout(timer);
                    const res = fn.apply(this, args);
                    resolve(res)
                    startTime = nowTime;
                    timer = null;
                    return;
                }
                if (trailing && !timer) {
                    timer = setTimeout(() => {
                    const res = fn.apply(this, args);
                    resolve(res)
                    startTime = new Date().getTime();
                    timer - null;
                    }, wait);
                }
            } catch (error) {
                reject(error)
            }
        });

            
        }
  _throttle.cancel = function () {
    if (timer) clearTimeout(timer);
    startTime = 0;
    timer = 0;
  };
  return _throttle;
}
