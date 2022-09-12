
const arr = [1, 1, 2, 2, 3, 4, 5, 5, 8, 8];

function func1(arr) {
  return Array.from(new Set(arr));
}

function func2(arr) {
  return arr.filter((it, index) => {
    return arr.indexOf(it) === index;
  })
}

function func3(arr) {
  return arr.reduce((pre, cur, index) => {
    arr.indexOf(cur) === index ? pre.push(cur) : pre;
    return pre;
  }, [])
}

function func4(arr) {
  const map = new Map();
  for (const it of arr) {
    if (!map.has(it)) {
      map.set(it, true)
    }
  }
  let result = [];
  for (const it of map) {
    result.push(it[0]);
  }
  return result;
  // let keys = map.keys();
  // let result = [];
  // while (true) {
  //   let obj = keys.next();
  //   let isover = obj.done;
  //   let value = obj.value;
  //   if (isover) {
  //     break;
  //   }
  //   result.push(value);
  // }
}

console.log(func1(arr), func2(arr), func3(arr), func4(arr));
console.log(arr);