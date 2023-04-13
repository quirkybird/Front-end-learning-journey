// 判断某个值是否在数组里
const arr = ["aaa", "bbb", "ccc"]
// ES7之前
if(arr.indexOf("bbb") !== -1){
    console.log("元素存在数组中")
}

// ES7
if(arr.includes("bbb", 1)){ //可以传入参数，检索从第几个开始查看
    console.log("元素存在数组内")
}