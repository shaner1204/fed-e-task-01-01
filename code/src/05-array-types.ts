// 数组类型

// 使用 array 泛型
const arr1: Array<number> = [1, 2, 3] // 表示纯数字组成的数组

// 使用元素类型加 []方括号
const arr2: number[] = [1, 2, 3] // 表示数字组成的数组

// -------------- 在 TS 中使用强类型的优势 -----------------

// 参数使用 es6 的rest剩余操作符去接收任意个数的参数
// 函数内部，使用数组的 reduce 方法去计算所有成员的总和
// reduce 方法接收两个参数，
// reduce 方法接收的回调包含两个参数
// 一个是一次计算的结果， 第二个是本次循环的当前值，内部返回两个参数中的总和
// 第二个参数为默认值，或初始值
function sum ( ...args: number[]) {
    // 判断是不是每个成员都是成员
    return args.reduce((prev, current) => prev + current, 0)
}

sum(1, 2, 3)