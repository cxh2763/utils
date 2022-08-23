// let i = 1;
// const timer = setInterval(() => {
//   console.log(i)
//   i++
// }, 1000)

// setTimeout(() => {
//   clearInterval(timer);
// }, 10000);

// function throttle(fn, time) {
//   let timer = null;
//   return function (...arg) {
//     if (!timer) {
//       timer = setTimeout(() => {
//         fn(...arg)
//         timer = null;
//       }, time);
//     }
//   }
// }

let i = 1;
function fn() {
  console.log(i++)
}

function MySetInterval(fn, wait) {
  let timer = null;
  function interval() {
    timer = setTimeout(interval, wait);
    fn();
  }
  timer = setTimeout(interval, wait);
  interval.cancel = function () {
    clearTimeout(timer);
  }
  return interval;
}

let MyInterval = MySetInterval(fn, 1000);
setTimeout(() => {
  MyInterval.cancel();
}, 10000);