const obj1 = {
  a: 1,
  b: {
    c: 3
  },
  d: [0, 1, 2, 3, 4, 5]
}

function deepclone(target) {
  let result;
  let toString = Object.prototype.toString;
  if (typeof target !== "object") {
    result = target;
  } else {
    if (toString.call(target) === "[object Array]") {
      result = [];
      for (const index in target) {
        if (typeof target[index] !== "object") {
          result[index] = target[index]
        } else {
          result[index] = deepclone(target[index])
        }
      }
    }
    if (toString.call(target) === "[object Object]") {
      result = {};
      for (const key in target) {
        if (typeof target[key] !== "object") {
          result[key] = target[key]
        } else {
          result[key] = deepclone(target[key])
        }
      }
    }
  }
  return result;
}
let obj2 = deepclone(obj1)
console.log(obj1 === obj2, JSON.stringify(obj1) === JSON.stringify(obj2))