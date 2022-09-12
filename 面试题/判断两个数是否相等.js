//判断x，y是否相等，如果相等返回true，否则返回false
//如果是对象直接比较地址即可
function isSame(x, y) {
  // return Object.is(x, y);
  if (x === y) {
    return x === 0 ? 1 / x === 1 / y : x;
  } else {
    return x !== x || y !== y;
  }
}
console.log(hasChange(+0, -0), hasChange(NaN, NaN))