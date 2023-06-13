const createArrayIterator = (arr) => { //封装数组的迭代器
    let index = 0
    return {
        next() {
            if(index < arr.length) {
                return { done: false, value: arr[index++] }
            } else {
                return { done: true }
            }
        }
    }
}
    const arr1 = ["wqe", "dsfa", "sda"]
    const arr1Iterator = createArrayIterator(arr1)

    console.log(arr1Iterator.next())
    console.log(arr1Iterator.next())
    console.log(arr1Iterator.next())
    console.log(arr1Iterator.next())
   
