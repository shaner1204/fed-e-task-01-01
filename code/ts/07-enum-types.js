"use strict";
// 枚举 (Enum)
Object.defineProperty(exports, "__esModule", { value: true });
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
var post = {
    title: 'hello TypeScript',
    content: 'TS is a typed superset of JavaScript',
    // status: 2 // 1(待发布) // 0（未发布） // 2(已发布)
    status: 6 /* Draf */
};
// 编译代码之后，找到对应生成的JS文件
// 所使用的枚举都会移除掉，使用枚举值的地方会被替换为原本的值
// 枚举的名称会在后面以注释的方式进行标注 /* Draf */
// var post = {
//     title: 'hello TypeScript',
//     content: 'TS is a typed superset of JavaScript',
//     // status: 2 // 1(待发布) // 0（未发布） // 2(已发布)
//     status: 6 /* Draf */
// };
//# sourceMappingURL=07-enum-types.js.map