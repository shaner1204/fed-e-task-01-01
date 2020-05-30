// 任意类型 （弱类型）

export {} // 确保其它示例没有成员冲突

// any 接收任意类型,不会有任意的类型检查
function stringfy (value: any) {
    return JSON.stringify(value)
}

stringfy('string')

stringfy(100)

stringfy(true)

let foo: any = 1100

foo = 100

foo.bar()