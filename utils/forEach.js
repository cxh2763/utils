arr = [1, 2, 3, 4, 5];

console.log(arr.forEach(item => {
  if (item % 2 === 0) {
    console.log(item);
    return item;
  }
}))

console.log(arr.map((item) => { //对数组进行一个映射
  if (item % 2 === 0) {
    return item;
  } else {
    return item
  }
}))
console.log(arr.filter((item) => { //过滤数组，生成一个新的数组
  if (item % 2 === 0) {
    return item;
  }
}))
//都不会改变当前数组的值
console.log(arr);