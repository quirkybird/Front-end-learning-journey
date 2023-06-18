function qbDebounce(fn, delay) {
    // 用于记录上一次事件触发的timer
  let timer = null;
    // 事件触发执行的函数
  const _debounce = function (...args) {
    if (timer) {
        // 如果有再次触发事件,那么取消上一次的事件
      clearTimeout(timer);
    }
    // 延迟去执行对应的fn函数(传入的回调函数)
    timer = setTimeout(() => {
      fn();
      timer = null; //指向函数后.将timer重置为null
    }, delay);
  };

  return _debounce;
}
