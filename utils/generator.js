function* task() {
  const d = yield 1;
  console.log(d)
  const resp = yield fetch("https://open.duyiedu.com/api/meituan/header/search.json?appkey=276314445_1590670332060");
  const result = yield resp.json();
  // const result = yield 2 + d;
  console.log(result.data.list)
}

run(task)

function run(generatorFunc) {
  const generator = generatorFunc();
  let result = generator.next();//启动任务（开始迭代），得到迭代数据
  handleResult(result);
  //对result进行处理
  function handleResult(result) {
    if (result.done) {
      return;//迭代完成，不处理
    }
    //没有完成做，分两种情况
    if (typeof result.value.then === "function") {
      //是一个promise,等待promise完成后再进行下一次迭代
      result.value.then(data => {
        result = generator.next(data)
        handleResult(result)
      }, err => {
        result = generator.throw(err);
        handleResult();
      })
    } else {
      //是其他数据,直接进行下一次迭代
      result = generator.next(result.value)
      handleResult(result);
    }
  }
}