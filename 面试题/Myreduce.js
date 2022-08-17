let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((pre, cur, index) => {
  console.log(index, pre, cur)
  return pre + cur;
})
console.log(result);

Array.prototype.MyReduce = function (callback, pre) {
  if (typeof callback !== 'function') {
    throw Error("请传入归并函数");
  }
  let arr = this;
  arr.forEach((item, index) => {
    if (pre === undefined && index === 0) {
      //如果没有传入初始值，则第一次不会执行回调
      pre = item;
    } else {
      pre = callback(pre, item, index);
    }
  })
  return pre;
}

console.log(arr.MyReduce((pre, cur, index) => {
  console.log(index, pre, cur)
  return pre + cur
}))