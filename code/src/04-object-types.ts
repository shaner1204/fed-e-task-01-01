//  Object 类型

export {}  // 确保其它示例没有成员冲突

// object 不单指一个普通的对象，还包含 数组[]、函数function
const foo: object = function () {} // [] // {}

// 如要定义一个对象类型,要使用类型字面量的语法去定义类型
const obj: { foo: number, bar: string} = { foo: 123, bar: 'string'}