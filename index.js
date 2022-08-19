// function parseUrlParam(url) {
//   let result = {};
//   const params = url.split('?')[1].split('&').map((item) => {
//     return item.split('=')
//   });

//   params.forEach((item) => {
//     if (!result[item[0]]) {
//       result[item[0]] = item[1] ? item[1] : true;
//     } else {
//       if (typeof result[item[0]] === 'object') {
//         result[item[0]] = [...result[item[0]], item[1]];
//       } else {
//         result[item[0]] = [result[item[0]], item[1]];
//       }
//     }
//   })
//   result['city'] = decodeURI(result['city']);
//   return result;
// }
// let url = 'https://www.4399.com/?user=candidate&id=43&id=99&city=%E5%B9%BF%E5%B7%9E&enabled';
// parseUrlParam(url);

// console.log(module.exports === this)
// console.log(exports === this)

f = function (init) {
  return function (arg) {
    return function (num) {
      return console.log((init = init + num * arg))
    }
  }
}
f1 = f(5);
calc1 = f1(1)
calc2 = f1(-1)
calc1(1)
calc1(1)
calc2(1)