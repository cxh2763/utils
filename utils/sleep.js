function sleep(wait) {
  const start = (new Date()).getTime();
  while ((new Date()).getTime() - start < wait) {
    continue;
  }
}

function delay(wait) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, wait);
  })
}
async function test() {
  console.log('111');
  await delay(2000)
  console.log(2222)
}



//数组交集
arr1 = [1, 2, 3]
arr2 = [2, 3, 4]
//交集
const result1 = [...new Set(arr1)].filter((item) => {
  return arr2.indexOf(item) !== -1;
})
console.log(result1)
//并集
const result2 = [...new Set([...arr1, ...arr2])];
console.log(result2)
//差集
const result3 = result2.filter((item) => {
  return result1.indexOf(item) === -1;
})
console.log(result3)