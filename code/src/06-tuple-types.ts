// 元组 (Tuple)

export {} // 确保跟其它示例没有成员冲突

// 使用类型数组字面量的方式定义元组类型
// 如果类型不相符，或超出2个元素都会报错
const tuple: [number, string] = [16, 'abc']

// 访问元组中的数值，可以使用数组下标的方式
// const age = tuple[0]
// const name = tuple[1]

// 或者使用数组解构去提取每个元素
const [age, name] = tuple

// 元组一般用来在函数中返回多个返回值

// -----------------------
// 获取一个对象中的所有键值数组 es2017中的属性
Object.entries({
    foo: 3,
    bar: 4
})