// 类（class）

export {} // 确保其它示例没有成员冲突

class Person {
    // 可用=设置默认值，不过还是要在s构造函数中动态的设置的 name 值
    name: string  // = 'init name'
    // 在 TS 中类的属性必须要有一个初始值，
    // 要么=初始化，要么构造函数中定义，否则报错
    // 类的属性在使用之前，必须声明，为了给类的属性进行标注
    age: number

    constructor (name: string, age: number) {
        this.name = name
        this.age = age
    } 

    // 可以对参数、返回值进行类型注解
    sayHi (msg: string): void {
        // 方法内部，可以用this访问实例对象，进而访问对应的属性
        console.log(`i am ${this.name} ${msg}`)
    }
}