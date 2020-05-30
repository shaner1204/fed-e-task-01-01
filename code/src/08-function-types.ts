// 函数 （function)

export {} // 确保跟其它示例没有成员冲突

// --------------------使用函数使用定义函数-------------------
// 函数声明的类型约束，就是函数每个参数后面添加类型注解

// 1、函数返回值的约束，添加在()圆括号后面
// function func1 (a: number, b: number): string {
//     return 'func1'
// }

// 2、参数是可选的,在参数名称后面添加 ?：表示这个参数可传，可不传
// function func1 (a: number, b?: number): string {
//     return 'func1'
// }
// 3、或使用 es6 中参数默认值的特性，作为可选参数，
// 不过是可选参数还是默认值都要存在参数列表的最后
// function func1 (a: number, b: number = 10): string {
//     return 'func1'
// }

// 4、接收任意个数的参数,可用剩余操作符...
function func1 (a: number, b: number = 10, ...rest: number[]): string {
    return 'func1'
}
// 调用时，参数个数要完全相同，形参、实参保证一致
func1(100, 200)

func1(100)

func1(100, 200, 300)

// ----------------使用函数表达式------------------
// const func2 = function (a: number, b: number): string {
//     return 'func2'
// }
// 函数表达式是最终放到一个变量中的，接收函数的变量也应该是有类型的
// TS 可以根据函数表达式推断出类型
// 如果要把函数作为参数传递，也就是回调函数方式，就必须要约束回调函数这个形参的类型
// 就可使用箭头函数的方式 
const func2: (a: number, b: number) => string = function (a: number, b: number): string {
    return 'func2'
}


