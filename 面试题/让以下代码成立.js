Object.prototype[Symbol.iterator] = function () {
  // return Object.values(this)[Symbol.iterator]();
  let values = Object.values(this);
  let len = values.length;
  let i = 0;
  return {
    next() {
      while (i < len) {
        let result = {
          value: values[i],
          done: false,
        }
        i++;
        return result;
      }
      return {
        value: undefined,
        done: true,
      }
    }
  }
}

//让这行代码成立，不报错
let [a, b] = { a: 1, b: 2 };

console.log(a, b);