## 基本知识

### 1.不使用var    
自从es6后，let的引入，让语言更精确的声明了作用域和语义支持。  
### 2.const优先，let次之  

### 数据类型
javascript有以下数据类型:

* "undefined" 表示值未定义
* "boolean"   表示值为布尔值
* "string"    表示字符串
* "number"    表示数值
* "object"    表示一种复杂的的数据类型
* "dunction"  表示值为函数
* "symbol"    表示值为符号，es6新增类型

### 变量
* 如果只是声明变量而没有赋值，则该变量值是`undefined`。`undefined`是一个特殊值，表示‘无定义’。
* 如果一个变量没有声明直接使用，系统会报错，告诉你变量未定义
``` 
x  
// ReferenceError: x is not defined 
``` 

  
* javascript是一种动态型语言，也就是说可以随时更改类型。
* 变量提升：JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升。

* 标识符（identifier）指的是用来识别各种值的合法名称。
 - 第一个字符，可以是任意 Unicode 字母（包括英文字母和其他语言的字母），以及美元符号（$）和下划线（_）。
 - 第二个字符及后面的字符，除了 Unicode 字母、美元符号和下划线，还可以用数字0-9。

>JavaScript 有一些保留字，不能用作标识符：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。  

### 条件语句 
 不要混淆赋值表达式（=）、严格相等运算符（===）和相等运算符（==）。尤其是赋值表达式不具有比较作用。
### 注意事项
javascript严格区分大小写
### 三元运算符  
JavaScript 还有一个三元运算符（即该运算符需要三个运算子）?:，也可以用于逻辑判断。
>(条件) ? 表达式1 : 表达式2