// 枚举 (Enum)

export {} // 确保跟其它示例没有成员冲突

// 状态取值只能是0，1，2
// 枚举类型特点：
// 1、可以给一组数值起上一个更好理解的名字 
// 2、一个枚举中只会存在几个固定值，并不会存在超出范围的可能性

// 在JavaScript中会使用对象去模拟实现枚举
// const PostStatus = {
//     Draf: 0,
//     Unpublished: 1,
//     Published: 2
// }

// TS 中有一个专门的枚举类型
// 使用 等号= 赋值
// enum PostStatus {
//     Draf = 0,
//     Unpublished = 1,
//     Published = 2
// }

// 成员值会默认从 0 开始累加
// 如果给第一个成员设置值之后，就会从第一个成员值的基础上进行累加
// enum PostStatus {
//     // Draf,
//     Draf = 6,
//     Unpublished,
//     Published
// }

// 枚举值 除了是数值还可以是字符串，字符串枚举需要手动给每个成员设置初始值
// enum PostStatus {
//     Draf = 'aa',
//     Unpublished = 'bbb',
//     Published = 'ccc'
// }

// 枚举使用方式与对象相同——  枚举名称.成员名称
const post = {
    title: 'hello TypeScript',
    content: 'TS is a typed superset of JavaScript',
    // status: 2 // 1(待发布) // 0（未发布） // 2(已发布)
    status: PostStatus.Draf
}

// 枚举会入侵到运行时的代码
// 影响编译后的结果，在TS中使用的类型经过编译之后都会被移除掉，因为它们只是为我们在编译过程中提供类型检查
// 而枚举不会，最终会编译为一个双向的键值对对象 
// 键值对对象：可以通过键获取值，也可以通过值获取键
// 为了可以让我动态的根据枚举值去获取枚举名称
// 可以通过索引器的方式访问对应的枚举名称
// PostStatus[0] // => Draf

// 如果代码中不会用索引器的方式去访问枚举名称
// 建议使用常量枚举
const enum PostStatus {
    // Draf,
    Draf = 6,
    Unpublished,
    Published
}

// 编译代码之后，找到对应生成的JS文件
// 所使用的枚举都会移除掉，使用枚举值的地方会被替换为原本的值
// 枚举的名称会在后面以注释的方式进行标注 /* Draf */
// var post = {
//     title: 'hello TypeScript',
//     content: 'TS is a typed superset of JavaScript',
//     // status: 2 // 1(待发布) // 0（未发布） // 2(已发布)
//     status: 6 /* Draf */
// };




