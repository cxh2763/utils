// const timeout = 0;
// console.log(1);
// setTimeout(() => {
//   console.log(2)
// }, timeout);
// new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(1)
//   }, timeout)
// }).then(() => {
//   console.log(3);
// })

// requestAnimationFrame(_ => console.log(5));

// console.log(4)


// const first = () => (new Promise((resolve, reject) => {
//   console.log(3);
//   let p = new Promise((resolve, reject) => {
//     console.log(7);
//     setTimeout(() => {
//       console.log(1);
//     }, 0);
//     setTimeout(() => {
//       console.log(2);
//       resolve(3);
//     }, 0)
//     resolve(4);
//   });
//   resolve(2);
//   p.then((arg) => {
//     console.log(arg, 5); // 1 bb
//   });
//   setTimeout(() => {
//     console.log(6);
//   }, 0);
// }))
// first().then((arg) => {
//   console.log(arg, 7); // 2 aa
//   setTimeout(() => {
//     console.log(8);
//   }, 0);
// });
// setTimeout(() => {
//   console.log(9);
// }, 0);
// console.log(10);
//  3  7  10  4  5  2 7  1 2 6 9 8
// 宏队列  1 2 6 9 8
// 微队列