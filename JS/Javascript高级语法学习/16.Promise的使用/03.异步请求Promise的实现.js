//request.js
function requestData(url) {
  // 模拟网络请求
  return new Promise((resolve, reject) => { //resolve和reject只能执行一个
    setTimeout(() => {
      // 拿到请求结果
      // url传入的是qinye，请求成功
      if (url === "qinye") {
        // 成功
        let names = ["abc", "cba", "nab"];
        resolve(names);
      } else {
        // 请求失败
        let errMessage = "url错误";
        reject(errMessage);
      }
    }, 2000);
  });
}

const promise = requestData("quirkybird");
promise.then(
  (res) => {
    console.log("请求成功", res);
  },
  (err) => {
    console.log("请求失败", err);
  }
);
