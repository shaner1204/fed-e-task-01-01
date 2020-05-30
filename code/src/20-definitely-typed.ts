// 类型声明

export {} // 确保其它示例没有成员冲突

// camelCase 将字符串转换为驼峰模式
import { camelCase } from 'lodash'
// query-string 模块——用来解析 url 中的query string 字符串
import qs from 'query-string'

qs.parse('?key=value&key2=value2')

// 参数是 string，返回的也是一个 string
// 调用时并没看到类型提示，这种情况就需要单独的类型声明
// 使用 declare 声明函数的类型，再去调用 camelCase函数就会有类型限制了——这就是类型声明
// 
// declare function camelCase(input: string): string
const res = camelCase('hello type')

// 另一种方式就是安装第三方模块类型声明，npm i lodash
// npm i query string