function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this)
  return this;
}

Person.prototype.print = function () {
  console.log(`我是${this.name},我今年${this.age}岁`)
}

// let people = new Person("cxh", 18)

// console.log(people, people.print())

//js new 操作符干了什么
//1. 创建一个新的空对象
//2. 把这个新的空对象的__proto__指向构造函数的prototype
//3. 把构造函数中的this指向新创建的空对象并且执行构造函数
//4，判断返回的执行结果是否是引用类型，如果是引用类型则返回执行的结果，否则返回创建的对象
function myNew(fn, ...args) {
  const obj = new Object();
  obj.__proto__ = fn.prototype;
  const result = fn.call(obj, ...args);//把this指向了空对象
  return result instanceof Object ? result : obj;
}

let people = myNew(Person, "cxh", 18);
console.log(people)
people.print()