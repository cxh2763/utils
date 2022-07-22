const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'reject';
//创建一个微队列函数,辅助函数
function runMicroTask(callback) {
  //判断环境
  if (process && process.nextTick) {
    process.nextTick(callback) //node环境
  } else if (MutationObserver) {
    //大部分浏览器环境
    const p = document.createElement('p')
    const observe = new MutationObserver(callback);
    observe.observe(p, {
      childList: true, //观察元素内部变化
    });
    p.innerHTML = '1';//微队列触发回调函数
  } else {
    //旧版浏览器
    setTimeout(callback, 0);
  }

}

class Mypromise {
  /**
 * 创建一个Promise
 * @param {Function} executor 任务执行器，立即执行
 */
  constructor(executor) {
    this._state = PENDING;
    this._value = undefined;
    this._handlers = [];//处理函数形成的队列
    try {
      executor(this._resolve.bind(this), this._reject.bind(this))//class为严格模型，不绑定this，函数直接执行this指向undefiend
    } catch (error) {
      this._reject(error)
      console.error(error);
    }
  }

  /**
   * 
   * @param {function} executor 添加的函数
   * @param {String} state 该函数什么状态下执行
   * @param {function} resolve Promie成功执行
   * @param {function} reject Promise失败执行
   */
  _pushHandlers(executor, state, resolve, reject) {
    this._handlers.push({
      executor,
      state,
      resolve,
      reject,
    })
  }

  //根据实际情况，执行队列
  _runHandlers() {
    if (this._state === PENDING)
      //	目前任务还在挂起
      return
    while (this._handlers[0]) {
      const handler = this._handlers[0];
      this._runOnehandler(handler)
      //执行后从队列删除
      this._handlers.shift()
    }
  }

  /**
 * 处理一个handler
 * @param {Object} handler
 */
  _runOnehandler(handler) {
    //在微队列中执行
    runMicroTask(() => {
      if (handler.state !== this._state) {
        return
        //状态不一致，不处理
      }
      if (typeof handler.executor !== 'function') {
        //then中的后续处理不是一个函数
        return this._state === FULFILLED ? handler.resolve(this._value) : handler.reject(this._value)
      }

      try {
        const result = handler.executor(this._value);
        if (this._isPromise(result)) {
          //如果后续处理函数返回的也是一个promise,最后的结果与返回的promise结果一致
          return result.then(handler.resolve, handler.reject)
        } else {
          handler.resolve(result)
        }
      } catch (error) {
        handler.reject(error);
      }

    })
  }

  /**
   * 判断一个数据是否是Promise对象，是一个对象，对象不为空，并且具有then函数
   * @param {any} obj
   * @returns
   */
  _isPromise(obj) {
    return !!(obj && typeof obj === 'object' && typeof obj.then === 'function');
  }

  _resolve(data) {
    //改变状态和数据
    this._change(FULFILLED, data)
  }

  _reject(reason) {
    //改变状态和数据
    this._change(REJECTED, reason)
  }

  //then中的函数在微队列中执行
  then(onFulfilled, onRejected) {
    return new Mypromise((resolve, reject) => {
      this._pushHandlers(onFulfilled, FULFILLED, resolve, reject)
      this._pushHandlers(onRejected, REJECTED, resolve, reject)
      this._runHandlers();
    })
  }


  /**
   * 更改任务状态和数据
   */
  _change(newState, value) {
    if (this._state === PENDING) {
      this._state = newState;
      this._value = value;
      this._runHandlers() //状态变化，执行队列
    }
  }

}

//测试
const pro = new Mypromise((resolve, reject) => {
  resolve(1)
})
// pro.then(function A1(){},function A2(){})
const pro2 = pro.then('6')

const pro3 = pro2.then((data) => {
  throw 3;
})
const pro4 = pro3.then(null, (reason) => {
  return 4
})


setTimeout(() => {
  console.log(pro, pro2, pro3, pro4)
}, 0);
