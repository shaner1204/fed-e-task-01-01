// 隐式类型推断

export {} // 确保其它示例没有成员冲突

// TS 自动推断为 number 类型
let age = 14

// 再赋值字符串的话，就会报错，因为已经推断为 number
// age = 'string'

// 如果无法推断类型，就判断为 any
let foo

foo = 100

foo = 'string'

// 建议为每个变量添加类型