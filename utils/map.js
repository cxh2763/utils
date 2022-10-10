Array.prototype.myMap = function (callback, toThis) {
  if (typeof callback !== 'function') {
    throw Error("请传入归并函数");
  }
  let arr = this;
  const result = [];
  toThis = toThis || Object.create(null);
  arr.forEach((it, index) => {
    const item = callback.call(toThis, it, index, arr)
    result.push(item);
  })
  return result;
}

Array.prototype.myfilter = function (callback, toThis) {
  if (typeof callback !== 'function') {
    throw Error("请传入归并函数");
  }
  let arr = this;
  const result = [];
  toThis = toThis || Object.create(null);
  arr.forEach((it, index) => {
    if (callback.call(toThis, it, index, arr)) {
      result.push(it);
    }
  })
  return result;
}


Array.prototype.Myreduce = function (callback, initValue) {
  if (typeof callback !== 'function') {
    throw Error("请传入归并函数");
  }
  const arr = this;
  let pre = initValue;
  arr.forEach((it, index) => {
    if (index === 0 && initValue === undefined) {
      pre = it;
    } else {
      pre = callback(pre, it, index, arr)
    }
  })
  return pre;
}


console.log(
  [1, 2, 3, 4].Myreduce((pre, cur, index, arr) => {
    console.log(cur);
    return pre + cur;
  })
)


const newArr = [1, 2, 3, 4, 5, 6].myfilter((item, index) => {
  if (item % 2 === 0) {
    return item;
  }
})

console.log(newArr)