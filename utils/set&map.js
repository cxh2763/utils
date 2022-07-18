class MySet {
  constructor(iterator = []) {
    //首先验证是否可迭代对象
    if (typeof iterator[Symbol.iterator] !== "function") {
      throw new TypeError(`你提供的${iterator}不是一个可迭代的对象`)
    }
    this._dates = [];
    for (const item of iterator) {
      this.add(item);
    }
  }
  get size() {
    return this._dates.length;
  }

  add(data) {
    if (!this.has(data)) {
      this._dates.push(data);
    }
  }
  has(data) {
    for (const item of this._dates) {
      if (this.isEqual(data, item)) {
        return true;
      }
    }
    return false;
  }
  isEqual(data1, data2) {
    if (data1 === 0 && data2 === 0) {
      return true;
    }
    return Object.is(data1, data2)
  }
  delete(data) {
    for (let i = 0; i < this._dates.length; i++) {
      if (this.isEqual(data, this._dates[i])) {
        this._dates.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  clear() {
    this._dates.length = 0;
  }

  *[Symbol.iterator]() {//变成可迭代
    for (const item of this._dates) {
      yield item;
    }
  }

  forEach(callback) {
    for (const item of this._dates) {
      callback(item, item, this)//没有下标第二个还是传值，第三个是本身
    }
  }
}

let set = new MySet([1, 1, 2, 2, 3, 3, 4, 4])

class MyMap {
  _dates = []
  constructor(iterator = []) {
    if (typeof iterator[Symbol.iterator] !== "function") {
      throw new TypeError(`你提供的${iterator}不是一个可迭代的对象`)
    }
    for (const item of iterator) {
      //item 也要是一个可迭代对象
      if (typeof item[Symbol.iterator] !== "function") {
        throw new TypeError(`你提供的${item}不是一个可迭代的对象`)
      }
      const iterator = item[Symbol.iterator]();//得到了一个迭代器
      const key = iterator.next().value;
      const value = iterator.next().value;
      this.set(key, value);
    }
  }
  set(key, value) {
    const obj = this._getObj(key)
    if (obj) {
      obj.value = value; //因为obj是引用类型，直接修改即可
    } else {
      this._dates.push({
        key,
        value
      })
    }
  }
  has(key) {
    return this._getObj(key) !== undefined;
  }
  isEqual(data1, data2) {
    if (data1 === 0 && data2 === 0) {
      return true;
    }
    return Object.is(data1, data2)
  }
  /**
   * 根据key值从内部数组中，找到对应的数组项
   */
  _getObj(key) {
    for (const item of this._dates) {
      if (this.isEqual(item.key, key)) {
        return item;
      }
    }
  }
  get size() {
    return this._dates.length;
  }
  get(key) {
    const item = this._getObj(key);
    if (item) {
      return item[key];
    }
    return undefined;
  }
  delete(key) {
    for (let i = 0; i < this._dates.length; i++) {
      const element = this._dates[i];
      if (this.isEqual(element.key, key)) {
        this._dates.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  clear() {
    this._dates.length = 0;
  }
  *[Symbol.iterator]() { //变成可迭代
    for (const item of this._dates) {
      yield [item.key, item.value];
    }
  }
  forEach(callback) {
    for (const item of this._dates) {
      callback(item.value, item.key, this)
    }
  }
}

let map = new MyMap([['a', 1], ['b', 2]]);