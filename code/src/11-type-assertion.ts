// 类型断言：并不是类型转换，类型转换是执行时的概念，而类型转换只是编译时的概念，当代码编译之后 ，断言就不会存在了，所以与类型转换有本质上的差异

export {} // 确保其它示例没有成员冲突

// 假定这个 nums 来自明确的接口
const nums = [1, 2, 3, 4]

const res = nums.find(i => i > 0)

// TS 不知道这里一定会返回一个数值
// 它能知道的是这个变量可能是number 或 undefined,
// 所以会报错，那么就使用断言去告诉TS这个是number类型
// const square = res * res

// 使用 as 
const num1 = res as number

// 使用<>断言,
// 如果使用JSX会与标签产生冲突，JSX 下不能使用
const num2 = <number>res