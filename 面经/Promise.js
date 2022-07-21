//catch函数
Promise.prototype.Mycatch = function (onReject) {
  //  仅处理失败
  return this.then(null, onReject);
}

//finally 
//无论什么结果都会运行
Promise.prototype.Myfinally = function (onSettled) {
  return this.then((data) => {
    onSettled();
    return data;
  }, (reason) => {
    onSettled();
    throw reason;
  });
}

/**
 * resolve  reject 静态方法，不需要创建对象
 * resolve:特殊情况
 * 1.传递的data本身是一个es6的promise，返回该Promise
 * 2.传递的data是满足A+规范的Promise，返回新Promise，状态一致即可
 */
function isPromise(obj) {
  return !!(obj && typeof obj === "object" && typeof obj.then === "function")
}

Promise.resolve = function (data) {
  if (data instanceof Promise) {
    return data;
  } else {
    return new Promise((resolve, reject) => {
      if (isPromise(data)) {
        data.then(resolve, reject)
      } else {
        resolve(data)
      }
    })
  }
}

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  })
}

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
      let Count = 0; //Promise总数
      let fulfilledCount = 0; //已完成的Promise总数
      for (const p of proms) {
        let index = Count;
        Count++;
        //如果不是Promise就包一个Promise
        Promise.resolve(p).then((data) => {
          //这里的代码在微队列中运行
          fulfilledCount++;
          results[index] = data;
          if (fulfilledCount === Count) {
            //所有的都成功了
            resolve(results)
          }
        }, reject)
      }
      if (Count === 0) {
        resolve(results);
      }
    } catch (error) {
      reject(error)
    }
  })
}


// const pro1 = new Promise((resolve) => {
//   resolve(123);
// })

// const pro = Promise.reject(pro1).Mycatch((data) => {
//   console.log(data)
//   return data;
// })

// setTimeout(() => {
//   console.log(pro)
// }, 50);
// let pro = new Promise((resolve, reject) => {
//   reject(1);
// })
// let pro2 = pro.Mycatch((data) => {
//   console.log(data)
//   return data;
// })

// setTimeout(() => {
//   console.log(pro, pro2)
// }, 50);