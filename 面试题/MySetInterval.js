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
  let stop = {
    stop: false
  }
  function interval() {
    if (stop.stop) {
      return;
    }
    setTimeout(interval, wait);
    fn();
  }
  setTimeout(interval, wait);
  return stop;
}

let stop = MySetInterval(fn, 1000);
setTimeout(() => {
  stop.stop = true;
}, 10000);