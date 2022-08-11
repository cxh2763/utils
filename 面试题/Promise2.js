/**
 * Promise all,传递的是迭代器
 * 传入很多个Promise，返回一个新的Promise，如果全部成功则成功，有一个失败就直接返回第一个失败的
 * @proms 是一个迭代器
 * 顺序是按照传入的顺序
 */

Promise.all = function (proms) {
  return new Promise((resolve, reject) => {
    try {
      const results = [];
      let Count = 0;//Promise总数
      let fulfillCount = 0;//已经完成的Promise数
      for (const prom of proms) {
        let index = Count;
        Count++;
        //如果不是Promise,就包裹一个promise
        Promise.resolve(prom).then((data) => {
          //这个里面的代码是异步代码，所以Count会很快变成Promise的总数
          fulfillCount++;
          results[index] = data;
          if (fulfillCount === Count) {
            resolve(results);
          }
        }, reject)
      }
      if (Count === 0) {
        //如果总数＝0直接resolve
        resolve(results)
      }
    } catch (error) {
      reject(error)
    }
  })
}

let pro1 = new Promise((resolve) => {
  resolve(1)
})
let pro2 = new Promise((resolve) => {
  resolve(1)
})
let pro3 = new Promise((resolve, reject) => {
  reject(1)
})
let pro4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1)
  }, 50);
})

let proall = Promise.all([pro1, pro2, pro3, pro4]);

proall.then((data) => {
  console.log(data)
}, (err) => {
  console.log("err", err)
})

/**
 * resolve  reject 静态方法，不需要创建对象
 * resolve:特殊情况
 * 1.传递的data本身是一个es6的promise，返回该Promise
 * 2.传递的data是满足A+规范的Promise，返回新Promise，状态一致即可
 */
function isPromise(data) {
  return !!(data && typeof data === 'object' && typeof data.then === 'function')
}


Promise.resolve = function (data) {
  if (data instanceof Promise) {
    return data;
  } else {
    return new Promise((resolve, reject) => {
      if (isPromise(data)) {
        data.then(resolve, reject);
      } else {
        resolve(data);
      }
    })
  }
}

console.log(Promise.resolve(1))