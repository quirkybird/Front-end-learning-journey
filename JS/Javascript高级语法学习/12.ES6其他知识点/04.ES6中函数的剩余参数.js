function foo(m, n, ...args){ //最后那个就是剩余参数
    console.log(m, n)        //rest poromaters必须放到最后
    console.log(args)        //剩余参数的出现就是来取代arguments的
    console.log(arguments)
}

foo(10, 20, 30, 40, 50)
