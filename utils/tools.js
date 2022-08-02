let str = "asmalsdjasdadla";
function unique1(str) {
  let strArr = str.split('')
  let result = strArr.reduce((pre, cur) => {
    if (pre.indexOf(cur) === -1) {
      pre.push(cur)
    }
    return pre;
  }, [])
  return result.join('');
}
console.log(unique1(str))

function unique2(str) {
  let strArr = str.split('');
  let result = new Set(strArr);
  return Array.from(result).join('');
}
console.log(unique2(str))