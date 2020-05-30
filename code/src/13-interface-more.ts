// 接口：一种规范，可以约定对象的结构
// 使用接口就必须要遵守接口全部的约定

export {} // 确保其它示例没有成员冲突


interface Post {
    title: string
    content: string
    subtitle?: string // 可选成员
    readonly summary: string // 只读成员
}


const hello: Post = {
    title: 'sdfsdf',
    content: '333',
    summary: 'asdfsdf' // 初始化之后，就不能再修改
}

// 再赋值会报错
// hello.summary = 'other'

// 动态成员：具有动态成员的对象,不知道具体的成员
interface Cache {
    // key 不是固定的，只是代表了属性名称的格式 
    // [key: string]
    // :string 是成员名的类型，也就是键的类型
    // 外面可以设置动态属性的值为 string
    [prop: string]: string
}

const cache: Cache = {}

cache.foo = 'va'
cache.bar = 'sdf'