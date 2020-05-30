// 类（class）

export {} // 确保其它示例没有成员冲突

// 每个成员都可以使用访问修饰符修饰它们
class Person {
    // public 默认为public 公有属性
    public name: string  // = 'init name'
    // private 表示 age 是一个私有属性，私有属性只能在类的内部去访问
    private age: number
    // protected 受保护的
    protected gender: boolean

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

class Student extends Person {
    // 构造函数的修饰符默认也为 public
    private constructor (name: string, age: number) {
        // 使用 super 调用一个父类的构造函数
        super(name, age)
        // 访问父类的 gender
        // protected 表示只允许在子类中访问对应的成员
        console.log(this.gender)
    }

    // 静态方法
    static create (name: string, age: number) {
        // 使用 new 的方式去创建这个类型的实例
        // 因为 new 的方式就是调用了这个函数的构造函数
        // create 方法内部也属于类型的内部，所以是可以调用到构造函数的
        return new Student(name, age)
    }
}

const tom = new Person('tom', 16)
console.log(tom.name)
// 这里会报错，因为 age 为私有属性
// console.log(tom.age)
// 报错，gender 为受保护的属性
// console.log(tom.gender)

// 如果构造函数设置为 private 那么在外面就不能对其进行实例化，也不被继承
// 这种情况，就只能在类中添加一个静态方法，然后在静态方法中，创建这个类型的实例
// 因为 private 只允许在内部去访问
// const jack = new Student()

// 现在可以使用 create 的静态去创建对象 

const jack = Student.create('jack', 14)
// 如果构造函数标记为 protected,这个类型也不可以被实例化
// 但相比 private 它是允许继承的