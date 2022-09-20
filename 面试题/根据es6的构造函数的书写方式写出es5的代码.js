// class Example {
//   constructor(name) {
//     this.name = name;
//   }
//   init() {
//     const fun = () => { console.log(this.name) }
//     fun();
//   }
//   static staticFunc() {
//     console.log('这是一个静态方法');
//   }
// }
// const e = new Example('Hello');
// e.init();
//*ES6* 中的 *class* 必须通过 *new* 来调用，不能当做普通函数调用，否则报错
//*ES6* 的 *class* 中的所有代码均处于严格模式之下，因此，在答案中，无论是构造函数本身，还是原型方法，都使用了严格模式
//*ES6* 中的原型方法是不可被枚举的
//原型上的方法不允许通过 *new* 来调用
function Example(name) {
  'use strict'
  if (!new.target) {
    throw new TypeError('Class constructor cannot be invoked without new');
  }
  this.name = name;
}
Object.defineProperty(Example.prototype, 'init', {
  value: function () {
    'use strict'
    if (new.target) {
      throw new TypeError('init is not a constructor');
    }
    var fn = function () {
      console.log(this.name)
    }
    fn.call(this);
  },
  enumerable: false,
})
Object.defineProperty(Example, 'staticFunc', {
  value: function () {
    "use strict"
    if (new.target) {
      throw new Error('这不是一个构造函数');
    }
    let fn = function () {
      console.log('这是一个静态方法');
    }
    fn();
  }
})

const e = new Example('Hello');
e.init();
Example.staticFunc();