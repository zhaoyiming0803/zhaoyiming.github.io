### 基础

在 TS 中定义类：

``` typescript
class Point {
  x: number;
  y: number;

  constructor (x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getPositon () {
    return `${this.x}, ${this.y}`;
  }
}
const point = new Point(1, 2);
```
我们首先在定义类的代码块的顶部定义两个实例属性，并且制定类型为 number。构造函数 constructor 需要传入两个参数，都是 number 类型，并且把这两个参数分别赋值给两个实例属性。最后定义了一个定义在类的原型对象上的方法 getPosition。

同样也可以使用继承来复用一些特性：

``` typescript
class Parent {
  name: string;
  constructor (name: string) {
    this.name = name;
  }
}
class Child extends Parent {
  constructor (name: string) {
    super(name);
  }
}
```
以上这些和 ES6 标准中的类没什么区别。

### 修饰符

