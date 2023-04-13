// Set 中元素不允许重复
// 1.创建set结构
const set = new Set()
set.add(10)
set.add(20)
set.add(30)

// 2.添加对象时特别注意
set.add({})
set.add({})
// set里面会有两个{},因为有创建了两个对象，在不同的内存地址

const obj = {}
set.add(obj)
set.add(obj)
// set里只会出现一个{}，之创建一个{}对象，指向同一个内存地址

// 3.对数组去重（去除重复元素）
const arr = [33, 18, 26, 30, 33, 26]
const arrSet = new Set(arr)
const newArr1 = Array.from(arrSet)
const newArr2 = [...arrSet]

// 4.size属性
console.log(arrSet.add.size)

// add
arrSet.add(100)
// delete
arrSet.delete(100) //只能传入数据

// has //有没有包含某个值
console.log(arrSet.has(100))

// clear
arrSet.clear()
console.log(arrSet)

// 6.对Set进行遍历
arrSet.forEach(item => {
    console.log(item)
})

for (const item of arrSet){
    console.log(item)
}