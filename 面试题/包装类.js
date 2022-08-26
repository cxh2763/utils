

Number.prototype.add = function (param) {
  param = Number(param);
  return this + param;
}

Number.prototype.minus = function (param) {
  param = Number(param);
  return this - param;
}


// console.log((10).add(10).minus(2));

//基础版本
// function Person(name, age) { 
//   if (!Person.obj) {
//     Person.obj = this;
//     this.name = name;
//     this.age = age;
//   }
//   return Person.obj;
// }

//改进版本
// let Person = (function (name, age) {
//   let _this = null;
//   return function () {
//     if (!_this) {
//       _this = this;
//       this.name = name;
//       this.age = age;
//     }
//     return _this;
//   }
// })();

//直接把这个功能给抽出来
let getSingle = function (func) {
  let _this = null;
  return function (...arg) {
    if (!_this) {
      _this = this;
      func.apply(this, arg);
    }
    return _this;
  }
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let SinglePerson = getSingle(Person);

let person1 = new SinglePerson('cxh', 18);
let person2 = new SinglePerson('cxh', 20);

console.log(person1)
console.log(person1 === person2)