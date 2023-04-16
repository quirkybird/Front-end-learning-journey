//request.js
function requestData(url, successCallback, failtureCallback) {
  // 模拟网络请求
  setTimeout(() => {
    // 拿到请求结果
    // url传入的是qinye，请求成功
    if (url === "qinye") {
      // 成功
      let names = ["abc", "cba", "nab"];
      successCallback(names);
    } else {
      // 请求失败
      let errMessage = "请求失败，url错误";
      failtureCallback(errMessage);
    }
  }, 2000);
}

requestData(
  "qinye",
  (succesful) => {
    console.log(succesful);
  },
  (err) => {
    console.log(err);
  }
);
