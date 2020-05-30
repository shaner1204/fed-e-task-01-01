// 接口：一种规范，可以约定对象的结构
// 使用接口就必须要遵守接口全部的约定

export {} // 确保其它示例没有成员冲突

// 可以用来约定对象中应该有哪些成员 ，成员类型是什么样的

// 接口中可以使用逗号，但是推荐使用分号分隔成员，也可省略
interface Post {
    title: string
    content: string
}
function printPost (post: Post) {
    console.log(post.title) 
    console.log(post.content)
}

// 显示的要求我们传入的对象必须要有 title content成员
printPost({
    title: 'hello',
    content: 'ss'
})