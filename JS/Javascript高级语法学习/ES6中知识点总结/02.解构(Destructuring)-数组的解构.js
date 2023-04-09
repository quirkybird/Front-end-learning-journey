var arr = ["a", "b", "c"]

// var item1 = arr[0]
// var item2 = arr[1]
// var item3 = arr[2]

// 对数组的解构： []
var [item1, item2, item3] = arr
console.log(item1, item2, item3)

//解构后面的元素
var [, , itemz] = arr
console.log(itemz) //bac

// 解构出一个元素，后面的元素放到一个新的数组中
var [itemx, ...newArr] = arr
console.log(itemx, newArr)

// 解构的默认值
var [itema, itemb, itemc, itemd = "d"] = arr
console.log(itemd) //如果不赋值则为undefined，赋值为赋值后的值



