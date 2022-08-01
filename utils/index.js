let str = 'abvdssaa';
let arr = str.split('');
let set = new Set(arr);
let result = [...set].join('')
console.log(result)