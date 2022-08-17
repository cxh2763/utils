/**
 * Promise all,传递的是迭代器
 * 传入很多个Promise，返回一个新的Promise，如果全部成功则成功，有一个失败就直接返回第一个失败的
 * @proms 是一个迭代器
 * 顺序是按照传入的顺序
 */

Promise.all = function (proms) {
  return new Promise((resolve, reject) => {
    try {
      let Count = 0;
      let fulfillCount = 0;//成功的个数
      let result = [];
      for (const item of proms) {
        let index = Count;
        Count++;//统计promise的个数
        Promise.resolve(item).then((data) => {
          //这个里面的代码是异步代码，for of 循环结束后才执行
          fulfillCount++;
          result[index] = data;//因为需要按顺序返回
          if (fulfillCount === Count) {
            //已经全部执行完成，并且全部成功
            resolve(result);
          }
        }, reject)//有一个失败了就之间reject
      }
      if (Count === 0) {
        resolve(result);
      }
    } catch (error) {
      console.error(error)
      reject(error)
    }
  })
}

Promise.all = function (proms) {
  return new Promise((resolve, reject) => {
    try {
      let Count = 0;
      let fulfillCount = 0;
      let result = [];
      for (const item of proms) {
        let index = Count;
        Count++;//统计Promise个数
        Promise.resolve(item).then((data) => {
          result[index] = data;
          fulfillCount++;
          if (fulfillCount === Count) {
            resolve(result);
          }
        }, reject)
      }
      if (Count === 0) {
        resolve(result);
      }
    } catch (err) {
      console.error(err)
      reject(err);
    }
  })
}

let pro1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 100);
})
let pro2 = new Promise((resolve) => {
  resolve(2)
})
let pro3 = new Promise((resolve, reject) => {
  reject(3)
})
let pro4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(4)
  }, 50);
})

let proall = Promise.all([pro1, pro2, pro3, pro4]);

proall.then((data) => {
  console.log(data)
}, (err) => {
  console.log("err", err)
})


Promise.MyallSettled = function (proms) {
  const result = [];
  for (const item of proms) {
    result.push(Promise.resolve(item).then((data) => {
      return {
        status: 'fulfilled',
        value: data,
      }
    }, (error) => {
      return {
        status: 'rejected',
        reason: error
      }
    }))
  }
  return Promise.all(result);
}

// let proAllSet = Promise.MyallSettled([pro1, pro2, pro3, pro4]);
// proAllSet.then((data) => {
//   console.log(data);
// })

// Promise.allSettled([pro1, pro2, pro3, pro4]).then((data) => {
//   console.log(data)
// })

