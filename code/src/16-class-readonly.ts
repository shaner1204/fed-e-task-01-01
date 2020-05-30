// 类（class）

export {} // 确保其它示例没有成员冲突

class Person {
    public name: string  // = 'init name'
    private age: number
    // 如果这个属性已经有了访问修饰符，那么 readonly 应该在访问修饰符的后面
    // 只读属性可以直接在类型声明时进行初始化，也可在构造函数中初始化
    // 两者只能选其一
    protected readonly gender: boolean

    constructor (name: string, age: number) {
        this.name = name
        this.age = age
        this.gender = true
    } 

    sayHi (msg: string): void {
        console.log(`i am ${this.name} ${msg}`)
        console.log(this.age)
    }
}

const tom = new Person('tom', 16)
console.log(tom.name)

// 初始化之后 ，gender 属性不允许被修改
// 不管是在内部还是外部都不可以
tom.gender = false