class Person {
  constructor(name) {
    this.name = name;
  };
  static [Symbol.hasInstance](obj) {
    let left = obj.__proto__;
    console.log('我被调用了');
    while (left) {
      if (left === Person.prototype) {
        return true;
      }
      left = left.__proto__;
    }
    return false;
  }
}
let person = new Person('cxh', 18);
console.log(person instanceof Person);
console.log({} instanceof Person);
