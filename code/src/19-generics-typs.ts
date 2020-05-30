// 泛型

export {} // 确保其它示例没有成员冲突

function createNumberArray (length: number, value: number): number[] {
    // es6 新增的 fill
    // 先通过 Array 对象创建指定长度的空数组
    // 再通过数组的 fill 方法去填充每个数组元素的值
    // Array 创建的默认为 any 类型的数组
    // 指定类型就是通过【泛型参数】去传递一个类型
    // Array 就是一个泛型类，在TS内部定义这个Array类型时，并不知道使用它去存放什么类型的数据
    // 所以使用泛型参数，让我们去调用一个具体的类型
    const arr = Array<number>(length).fill(value)
    return arr
}

// const res = createNumberArray(2, 100)
// 得到一个包含2个100的数组
// res => [100, 100]

// 如果要再定义一个string的数组，这种情况下两个函数就会有冗余
// 更合理的办法就是使用泛型
// 也就是把 string、number变成一个参数，让我们调用时再传递类型
function createStringArray (length: number, value: string): string[] {
    const arr = Array<string>(length).fill(value)
    return arr
}

// 使用泛型就是在函数后面使用一对 尖括号
// 在尖括号里面定义泛型参数
// 参数一般会用 T 作为名称，然后把函数中不明确的类型，都改用这个 T 来代表
function createArray<T> (length: number, value: T): T[] {
    const arr = Array<T>(length).fill(value)
    return arr
}

// 调用函数时，就可以使用 尖括号 去传递要使用的参数
// 泛型就是能在定义不能明确的类型变成参数，让我们在使用时再传递类型参数
const res = createArray<string>(2, 'foo')