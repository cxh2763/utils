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



function* gen() {
  let n = 1;
  let v = yield n + 22;           //第一个  yield
  console.log('aa-----', v);
  v = yield 123;                  //第二个  yield
  console.log('bb-----', v);
  v = yield 456;                  //第三个  yield
  console.log('cc-----', v);
  v = yield 789;                  //第四个  yield
  console.log('dd-----', v);
}

//遍历器 g
let g = gen();

console.log(g.next());                         //  第一行
console.log(g.next('111'));                    //  第二行
console.log(g.next(null));                     //  第三行
console.log(g.next());                         //  第四行
console.log(g.next('aa'));                     //  第五行