//在实际开发过程中，this也可以有其他的替代方法，不过将会变得很不方便
//下面的函数中，this可以用obj替代，毕竟这里this就是指向obj的
//不过我们一旦换一个obj的名称，接下来的数据都会跟着变动，修改变得非常不便，使用this就可以解决这个问题
var obj = {
    name:'qinye',
    eating: function() {
        console.log(this.name + '在吃东西')
    },
    running: function() {
        console.log(this.name + '在跑步')
    },
    studying: function() {
        console.log(this.name + '在学习')
    }
}

obj.eating()
obj.running()
obj.studying()