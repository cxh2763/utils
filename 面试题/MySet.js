const MyMap = (() => {
  const keyArr = []
  const valueArr = []
  class MyMap {
    // 静态属性
    // static mapArr = []   // MyMap.mapArr = []
    constructor(ite) {
      if (!ite) {
        return this;
      }
      // 构造函数
      if (!ite[Symbol.iterator]) {
        throw new Error('请传入可迭代对象');
      }
    }
    // MyMap.prototype.set = function 
    set(key, value) {
      keyArr.push(key);
      valueArr.push(value);
    }
    get(key) {
      const keyInd = keyArr.indexOf(key);
      return valueArr[keyInd];
    }
    forEach(callBack) {
      // 拿到可迭代的对象
      const iteObj = this[Symbol.iterator]()  // [num]
      let nextIte = iteObj.next();
      while (!nextIte.done) {
        callBack.call(null, nextIte.value[0], nextIte.value[1]);
        nextIte = iteObj.next();
      }
    }
    // 迭代器对象的构造函数 工厂函数
    [Symbol.iterator]() {
      let ind = -1;
      const len = keyArr.length;
      return {
        // 将当前的迭代推向下一个迭代
        next() {
          ind++;
          return {
            value: [valueArr[ind], keyArr[ind]],
            done: ind >= len
          }
        }
      }
    }
  }
  return MyMap;
})()

const obj = {}

const map = new MyMap();
console.log(map)
map.set(1, 2);
map.set(obj, '2');
map.set(undefined, null);
map.set(null, void 0)
map.set(true, false)
// console.log(map.get(undefined));

map.forEach((ite, ind) => {
  console.log(ind, ite)
})

for (const item of map) {
  console.log(item)
}

// const map2 = new Map(null)

// // {} this --> {} this.ite = ite  this.__proto__ = Map.prototype return this
// console.log(map2.get())








// const num = new Number({a: 1})

// num.a