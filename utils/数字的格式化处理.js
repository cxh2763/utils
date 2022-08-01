const num = 123123123123000000;

const result = num.toString().replace(/(?=\B(\d{3})+$)/g, ($) => {
  return $ = ','
})

console.log(result)

let str = '1234567890';
let length = str.length;
let arr = [];
while (length >= 3) {
  arr.unshift(str.slice(length - 3, length))
  length -= 3;
}

str.length % 3 && arr.unshift(str.slice(0, str.length % 3))
console.log(arr.toString()); 