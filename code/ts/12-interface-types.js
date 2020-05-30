"use strict";
// 接口：一种规范，可以约定对象的结构
// 使用接口就必须要遵守接口全部的约定
Object.defineProperty(exports, "__esModule", { value: true });
function printPost(post) {
    console.log(post.title);
    console.log(post.content);
}
// 显示的要求我们传入的对象必须要有 title content成员
printPost({
    title: 'hello',
    content: 'ss'
});
//# sourceMappingURL=12-interface-types.js.map