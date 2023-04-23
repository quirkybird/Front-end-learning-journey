// 1.导入的方式一：普通的导入
// import {name, age} from "./foo.js"

// 2、导入方式二：起别名
import {name as fName, age as fAge, obj as FObj} from "./foo.js"

// 3.导入方式三将导出的所有内容放到一个标识符上

import * as foo from "./foo.js"
console.log(foo.name)