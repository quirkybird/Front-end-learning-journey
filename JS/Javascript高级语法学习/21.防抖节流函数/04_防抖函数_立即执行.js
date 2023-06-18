function qbDebounce(fn, delay, immediate = true) {
    // 用于记录上一次事件触发的timer
    let timer = null;
    let isInvoke = false
    // 事件触发执行的函数
    const _debounce = function (...args) {
      if (timer) {
        // 如果有再次触发事件,那么取消上一次的事件
        clearTimeout(timer);
      }

    //   立即执行
      if(immediate && !isInvoke) {
        fn.apply(this, args);
        isInvoke = true
        return
      }
      // 延迟去执行对应的fn函数(传入的回调函数)
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null; //指向函数后.将timer重置为null
        isInvoke = false
      }, delay);
    };
  
    //函数是一个一个对象,所以我们给它添加属性
    //给debounce添加一个取消功能
    _debounce.cancel = function () {
      if (timer) {
        clearTimeout(timer);
        timer = null
        isInvoke = false
        console.log("请求已被取消");
      }
    };
    return _debounce;
  }
  