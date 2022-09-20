// function isTrue(arr, k) {
//   let obj = {};
//   for (const it of arr) {
//     if (!obj[it]) {
//       obj[it] = 1;
//     } else {
//       obj[it]++;
//     }
//   }
//   let arr1 = Object.values(obj);
//   for (const it of arr1) {
//     if (it >= k) {
//       return true;
//     }
//   }
//   return false;
// }

// function func(n, k, arr) {
//   let result = 0;
//   for (let i = 0; i <= n; i++) {
//     let j = i + k;
//     while (j <= n) {
//       let value = arr.slice(i, j);
//       if (isTrue(value, k)) {
//         result++;
//       }
//       j++;
//     }
//   }
//   console.log(result);
//   return result;
// }

// func(6, 2, [1, 2, 1, 3, 2, 3]);
// function func(n, k, arr) {
//   let dp = new Array(n).fill(Number.MAX_VALUE);
//   dp[0] = 0;
//   for (let i = 0; i < n; i++) {
//     let j = 1;
//     while (j <= k) {
//       if (arr[i + j] > arr[i]) {
//         let value = dp[i] + arr[i + j] - arr[i];
//         dp[i + j] = Math.min(dp[i + j], value);
//       } else {
//         dp[i + j] = Math.min(dp[i + j], dp[i]);
//       }
//       j++;
//     }
//   }
//   console.log(dp[n - 1]);
// }
// func(5, 2, [1, 5, 3, 4, 2]);

// function func(arr, score) {
//   let min = Number.MAX_VALUE;
//   for (const itar of arr) {
//     let err = 0;
//     for (let i = 0; i < itar.length; i++) {
//       if (itar[i] <= score) {
//         err++;
//       }
//     }
//     min = Math.min(min, itar.length - err);
//   }
//   console.log(min);
//   return min;
// }
// func([[4], [7, 7], [6, 6], [8]], 2);

// function convertToEnglish(num) {
//   // write code here
//   let obj = {
//     0: "zero",
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six",
//     7: "seven",
//     8: "eight",
//     9: "nine",
//     10: "ten",
//     11: "eleven",
//     12: "twevle",
//     13: "thirteen",
//     14: "fourteen",
//     15: "fifteen",
//     16: "sixteen",
//     17: "seventeen",
//     18: "eighteen",
//     19: "nineteen",
//     20: "twenty",
//     30: "thirty",
//     40: "forty",
//     50: "fifty",
//     60: "sixty",
//     70: "seventy",
//     80: "eighty",
//     90: "ninty",
//     100: "one-hundred"
//   }
//   if (num <= 20 || num % 10 === 0) {
//     return obj[num];
//   } else {
//     let left = num % 10;
//     let right = Math.floor(num / 10);
//     let result = `${obj[left * 10]}-${obj[right]}`;
//     return result;
//   }
// }
// function minimumOperations(tyres) {

// }
// function minimumOperations(tyres) {
//   let flag = 0;
//   if (tyres[0] === 'L') {
//     flag++;
//   }
//   if (tyres[tyres.length - 1] === 'L') {
//     flag++;
//   }
//   let left = 0;
//   let right = tyres.length - 1;
//   while (left < right) {
//     if (tyres[left] === 'S') {
//       left++;
//     }
//     if (tyres[right] === 'S') {
//       right--;
//     }
//     if (tyres[left] === tyres[right] && tyres[left] === 'L') {
//       break;
//     }
//   }
//   let newStr = tyres.slice(left, right + 1);
//   console.log(newStr)
//   let obj = {
//     S: 0,
//     L: 0,
//   }
//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] === 'S') {
//       obj.S++;
//     } else {
//       obj.L++;
//     }
//   }
//   let result = Math.min(obj.S, obj.L) += flag;
//   return result;
// }
// console.log(minimumOperations("SLSLSL"));
// function func(str) {
//   if (str.length % 2 !== 0) {
//     return false;
//   }
//   let left = ['{', '[', '('];
//   let right = ['}', ']', ')'];
//   let stack = [];
//   let result = true;
//   for (let i = 0; i < str.length; i++) {
//     if (left.indexOf(str[i]) !== -1) {
//       stack.push(str[i]);
//     } else {
//       if (left.indexOf(stack.pop()) !== right.indexOf(str[i])) {
//         result = false;
//         break;
//       }
//     }
//   }
//   return result;
// }
// console.log(func(''))

// function func(str) {
//   let left = 0;
//   let right = str.length - 1;
//   let result = true;
//   while (left < right) {
//     if (str[left] !== str[right]) {
//       result = false;
//       break;
//     }
//     left++;
//     right--;
//   }
//   if (result) {
//     console.log('是');
//   } else {
//     console.log('否');
//   }
//   return result;
// }
// func('aa');

// function func1(n) {
//   if (n < 2) {
//     return 0;
//   }
//   if (n === 2) {
//     return 1;
//   }
//   let result = 0;
//   for (let i = 2; i <= n; i++) {
//     let j = i;
//     let result0 = n;
//     let result1 = j;
//     for (let m = 1; m < j; m++) {
//       result0 = result0 * (n - m);
//       result1 = result1 * (j - m);
//     }
//     // console.log(result0, result1)
//     result += result0 / result1;
//     result0 = n;
//     result1 = j;
//   }
//   // console.log(result);
//   return result;
// }
// func1(3)

// function func(arr, len) {
//   let result = 0;
//   let odd = 0;
//   let even = 0;
//   for (let i = 0; i < len; i++) {
//     if (arr[i] % 2 === 0) {
//       even++;
//     } else {
//       odd++;
//     }
//   }
//   result += func1(odd) + func1(even);
//   result = result % 1000000007;
//   console.log(result);
//   return result;
// }
// func([1, 2, 5, 2, 8], 5)


// let len = +readline();
// let arr = readline().split(' ').map(Number);

// function func(arr, len) {
//   let result;
//   let odd = 0;
//   let even = 0;
// for(const it of arr){
//     if(it % 2 === 0){
//         odd++;
//     }else{
//         even++;
//     }
// }
//     function fun(n){
//         if(n < 2)
//             return 0;
//         return 2 ** n - n - 1;
//     }
//   result = (fun(odd) + fun(even))%1000000007;
//   console.log(result);
//   return result;
// }
// func(arr,len);
// function func(str) {
//   let result = 0;
//   for (let i = 0; i < str.length - 2; i++) {
//     if (str[i] !== str[i + 1]) {
//       result++;
//     }
//   }
//   console.log(result);
//   return result;
// }
// func('abccaa');
// let items = [];
// let result = {
//   odd: 0,
//   even: 0,
// }
// var len = 100000;
// for (var i = 0; i < len; i++) {
//   items[i] = i;
// }
// function callback() {
//   console.log("done");
// }
// function process(items, callback) {
//   for (const it of items) {
//     it % 2 ? result.odd++ : result.even++;
//   }
//   callback();
// }
// process(items, callback);

// function makeChagne(change) {
//   // write code here
//   let result = [0, 0, 0, 0, 0];
//   let money = [100, 50, 20, 5, 1];
//   while (change > 0) {
//     for (let i = 0; i < money.length; i++) {
//       result[i] += Math.floor(change / money[i]);
//       change = change % money[i];
//     }
//   }
//   return result;
// }
// makeChagne(126);
// function func(str) {
//   let queryArr = str.split('?')[1].split('#')[0].split('&').map((it) => {
//     let [key, value] = it.split('=');
//     return { [key]: value ? value : '' };
//   });
//   let result = {}
//   for (const it of queryArr) {
//     result = { ...result, ...it }
//   }
//   console.log(JSON.stringify(result));
// }
// func("http://xxx.com?a=1&b=2&c=xx&d#hash")

// (function func() {
//   let name = 1;
//   let obj = {
//     name: 10,
//   }
//   function func2() {
//     name = name * 2;
//   }
//   func2.apply(obj);
//   console.log(obj.name + name);
// })()
// let Arr = [];
// function func() {
//   for (var i = 0; i < 5; i++) {
//     ((i) => {
//       setTimeout(() => {
//         console.log(i);
//       })
//     })(i)
//   }
// }
// func();
// for (const it of Arr) {
//   it();
// }
// Function.prototype.sangfor = function () {
//   return Function.prototype.call.bind(this);
// }
// console.log(Array.prototype.push.sangfor()([], 0, 1, 2))
// console.log(Array.prototype.push.call([], 0, 1, 2))
// let obj = {
//   name: 'obj'
// }
// function a() {
//   let name = 'a'
//   console.log(this)
//   console.log(this.name);
// }
// Function.prototype.Mycall = function () {
//   return Function.prototype.call.bind(this);
// };
// a.Mycall()(obj);

// function func(arr) {
//   let result = [];
//   for (const it of arr) {
//     for (const it2 of arr) {
//       if (it !== it2 && it2.startsWith(it) && result.indexOf(it) === -1) {
//         result.push(it);
//       }
//     }
//   }
//   console.log(result.join(','));
// }
// func(['/a', '/a / b', '/a/c', '/b/c', '/b/c / d', '/b/cf']);
// function func(str) {
//   let Newstr = str.slice(1);
//   if (Newstr.length !== 3 && Newstr.length !== 6) {
//     return str;
//   }
//   let strArr = Newstr.split('');
//   let newArr = ['', '', ''];
//   if (strArr.length === 3) {
//     for (let i = 0; i < strArr.length; i++) {
//       newArr[i] += strArr[i];
//       newArr[i] += strArr[i];

//     }
//   } else {
//     for (let i = 0; i < strArr.length; i++) {
//       let j = i / 2;
//       newArr[j] += strArr[i++];
//       newArr[j] += strArr[i];
//     }
//   }
//   parseInt(newArr[0], 16)
//   parseInt(newArr[1], 16)
//   parseInt(newArr[2], 16)
//   let result = `rgb(${parseInt(newArr[0], 16)},${parseInt(newArr[1], 16)},${parseInt(newArr[2], 16)})`
//   return result;
// }
// console.log(func('#FaFaF'))

// function func2(n) {
//   let arr = new Array(n + 1).fill(0);
//   arr[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     arr[i] = i - 1 + arr[i - 1];
//   }
//   console.log(arr[n]);
//   return arr[n];
// }
// func2(10000000)



// class a {

// }
// console.log(typeof a);

// var waysToStep = function (n) {
//   let arr = new Array(n + 1).fill(0);
//   arr[1] = 1;
//   arr[2] = 2;
//   arr[3] = 4;
//   for (let i = 4; i <= n; i++) {
//     arr[i] = (arr[i - 1] + arr[i - 2] + arr[i - 3]) % 1000000007;
//   }
//   return arr[n];
// }
// waysToStep(50)
/**
 *  1 2 3 4 5 6
 *  2 1
 *  3 2
 *  4 2
 *  5 3
 *  6 3
 *  1 -> 2
 *  2 -> 1 3 4
 *  3 -> 2 5 6
 *  4 -> 2
 *  5 -> 3
 *  6 -> 3
 */
// function Node(value) {
//   this.value = value;
//   this.neighbor = [];
// }
// function creatGraph(n, arr) {
//   let graph = [];
//   for (let i = 0; i < n; i++) {
//     graph[i] = new Node(i + 1);
//   }
//   let Arr = [];
//   for (let i = 1; i <= arr.length; i++) {
//     Arr.push([arr[i - 1], i + 1]);
//     Arr.push([i + 1, arr[i - 1]]);
//   }
//   for (let i = 0; i < Arr.length; i++) {
//     graph[Arr[i][0] - 1].neighbor.push(graph[Arr[i][1] - 1]);
//   }
//   return graph;
// }
// let graph = creatGraph(6, [1, 2, 2, 3, 3])

// function deepSerach(node, graph, path) {
//   if (path.indexOf(node) > -1) return;
//   for (let i = 0; i < node.neighbor.length; i++) {
//     if (path.indexOf(node.neighbor[i]) === -1 && path.indexOf(node) === -1) {
//       path.push(node, node.neighbor[i])
//     }
//     deepSerach(node.neighbor[i], graph, path);
//   }
// }
// let path = [];
// for (let i = 0; i < graph.length; i++) {
//   deepSerach(graph[i], graph, path);
// }
// console.log(path);
// function func(n, k, arr) {
//   let result = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (arr[i] * arr[j] >= k) {
//         result++;
//       }
//     }
//   }
//   result = result * 2;
//   return result;
// }
// let arr = new Array(3000).fill(3)
// console.log(func(3, 3, [3, 2, 1]))

// //arr n * m
// function func(n, m, id, arr) {
//   let obj = {};
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     obj[i + 1] = 0;
//     for (let j = 0; j < m; j++) {
//       obj[i + 1] += arr[i][j];
//     }
//   }
//   let flag = obj[id];
//   for (const it in obj) {
//     if (obj[it] === flag) {
//       if (+it < id) {
//         result++
//       }
//     } else if (obj[it] > flag) {
//       result++;
//     }
//   }
//   console.log(result);
//   return result;
// }
// func(4, 3, 2, [[90, 90, 90], [80, 100, 90], [80, 85, 85], [100, 100, 100]])
// function func(nodes) {
//   let result = [];
//   let path = [];
//   function findPath(nowNode) {
//     if (nowNode === nodes.length - 1) {
//       result.push(path.slice());
//       return;
//     }
//     for (let i = 0; i < nodes[nowNode].length; i++) {
//       path.push(nowNode)
//       findPath(nodes[nowNode][i]);
//       path.pop(nowNode);
//     }
//   }
//   findPath(0);
//   return result;
// }
// console.log(func([[1, 2, 3], [3], [3], [4], []]));

// function func(n) {
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     if (('' + i).indexOf('25') !== -1) {
//       result++;
//     }
//   }
//   return result;
// }

// function func2(n) {
//   if (n < 25) {
//     return 0;
//   }
//   if (n < 100) {
//     return 1;
//   }
//   let Arr = new Array(9).fill(0);
//   Arr[3] = 1;
//   for (let i = 4; i < 10; i++) {
//     Arr[i] = Arr[i - 1] * 10 + 10 ** (i - 3) - Arr[i - 2];
//   }
//   function getResult(str, result) {
//     const length = str.length;
//     let FirstTwo = +str.slice(0, 2);
//     if (length === 2) {
//       if (FirstTwo >= 25) {
//         result += 1;
//       }
//       return result;
//     }
//     if (FirstTwo > 25) {
//       result = result + 10 ** (length - 2) - Arr[length - 1];
//     }
//     if (FirstTwo === 25) {
//       result += (+str.slice(2)) + 1;
//     }
//     result += (+Arr[length]) * (+str.charAt(0))
//     return getResult(str.slice(1), result);
//   }
//   return getResult('' + n, 0);
// }
// console.log(
//   func(5635421),
//   func2(5635421),
// )

//1
// 20
// 299
// 3970
// 49401

// function func(n, arr) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     let num = 0;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] === arr[i]) {
//         sum += num;
//       }
//       if (arr[j] < arr[i]) {
//         num++;
//       }
//     }
//   }
//   console.log(sum)
//   return sum;
// }

// func(6, [3, 1, 3, 4, 3, 4]);



// function func(a, b) {
//   let result = [];
//   function getComputed(a, b, num) {
//     if (a < 10 && b < 10) {
//       result = -1;
//       return;
//     }
//     if (a % b === 0 || b % a === 0) {
//       result.push(num);
//       return;
//     }
//     if (a >= 10) {
//       a = a + '';
//       for (let i = 0; i < a.length; i++) {
//         let result1 = a.split('');
//         result1.splice(i, 1);
//         let newNum1 = +result1.join('');
//         getComputed(newNum1, b, num + 1);
//       }
//     }
//     if (b >= 10) {
//       b = b + '';
//       for (let j = 0; j < b.length; j++) {
//         let result2 = b.split('');
//         result2.splice(j, 1);
//         let newNum2 = +result2.join('');
//         getComputed(a, newNum2, num + 1);
//       }
//     }
//   }
//   getComputed(a, b, 0);
//   result.sort((a, b) => a - b);
//   return result[0];
// }
// console.log(func(1234, 99))