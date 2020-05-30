// 抽象类

export {} // 确保其它示例没有成员冲突

// 定义抽象类 abstract
// 定义抽象类之后,只能被继承,不能再使用 new 的方式去创建实例对象
abstract class Animal {
    eat (food: string): void {
        console.log(`呼噜呼噜的吃: ${food}`)
    }
    
    // 也可定义 抽象方法
    // 抽象方法也不需要方法体
    // 当父类中存在抽象方法时,在子类中必须去实现这样的一个方法
    abstract run (distance: number): void
}

// 所以必须使用子类去继承这个类型
// 可以使用 VScode 代码修正的一个功能自动生成方法实现 
// Implement inherited abstract class
class Dog extends Animal {
    run(distance: number): void {
        console.log('四脚爬行', distance)
    }
}

// 使用子类创建的对象时,就会同时拥有父类当中的实例方法,以及自身所实现的方法
const d = new Dog()
d.eat('草')
d.run(100)