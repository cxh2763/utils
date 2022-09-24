function A(x) {
  this.x = x;
}
A.prototype.x = 1;

function B(x) {
  this.x = x;
}
B.prototype = new A();
var a = new A(2)
var b = new B(3);
delete b.x;
console.log(b.x);
// function delay(duration) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, duration)
//   })
// }

// delay(2000).then(() => {
//   console.log(1)
// })
// arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 4], [3, 1], [3, 2], [3, 4], [4, 1], [4, 2], [4, 3]];
// function unique(arr) {
//   arr.map((item) => {
//     return JSON.stringify(item.sort((a, b) => a - b))
//   })
//   arr = [...new Set(arr)];
//   console.log(arr)
  // let newArr = []
  // let obj = {}
  // arr.forEach(item => {
  //   if (typeof item !== 'object') {
  //     if (newArr.indexOf(item) === -1) {
  //       newArr.push(item)
  //     }
  //   } else {
  //     let str = JSON.stringify(item)
  //     console.log(str)
  //     if (!obj[str]) {
  //       newArr.push(item)
  //       obj[str] = 1
  //     }
  //   }
  // })
  // return newArr
// }
// console.log(unique(arr))