// function solution(w, timeArr) {
//   // 在这⾥写代码
//   let result = ''
//   if (timeArr.length <= w) {
//     for (let i = 1; i <= w.length; i++) {
//       result += i;
//     }
//     return result;
//   }
//   let Arr = new Array(w).fill(0).map(it => [0]);
//   let time = 0;
//   for (let i = 0; i < timeArr.length; i++) {
//     for (let j = 0; j < w; j++) {
//       if (Arr[j][Arr[j].length - 1] <= time) {
//         result = result + (++j);
//         Arr[j].push(timeArr[i])
//       }
//     }
//     let timeArr = [];
//     for (let j = 0; j < w; j++) {
//       let nowtime = Arr[j].reduce((cur, pre) => {
//         return cur + pre;
//       }, 0);
//       timeArr.push(nowtime);
//     }
//     timeArr.sort((a, b) => a - b);
//     time = timeArr[0];
//   }
//   return result;
// }

// solution(3,)

// function func(str) {
//   let length = str.length;
//   if (length % 2 !== 0) {
//     return false;
//   }
//   let stack = [];
//   let left = ['{', '[', '('];
//   let right = ['}', ']', ')'];
//   for (let i = 0; i < length; i++) {
//     if (left.indexOf(str[i]) !== -1) {
//       stack.push(str[i])
//     } else {
//       let index = right.indexOf(str[i]);
//       if (left.indexOf(stack[stack.length - 1]) === index) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   if (stack.length === 0) {
//     return true;
//   }
// }
// func('{{[]}}')

// var obj1 = { c: 1 }
// var obj2 = { c: 1 }
// obj1['a'] = obj2;
// obj2['b'] = obj1;


// function deepClone(param, map) {
//   let result;
//   if (typeof param !== 'object') {
//     result = param;
//   } else {
//     //只考虑对象一种情况
//     if (map.has(param)) {
//       return param;
//     }
//     map.set(param, true);
//     result = {};
//     for (const key in param) {
//       result[key] = deepClone(param[key], map);
//     }
//   }
//   return result;
// }
// let newObj = deepClone(obj2, new Map());
// console.log(newObj)

// function solution(arr) {
//   arr.sort((a, b) => {
//     return a - b;
//   })
//   let max = 1;
//   let ans = 1;
//   let number = arr[0];
//   let last = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (last === arr[i]) {
//       ans++;
//       if (ans > max) {
//         max = ans;
//         number = last;
//       }
//     } else {
//       ans = 1;
//       last = arr[i];
//     }
//   }
//   console.log(number);
//   return number;
// }

// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

// let newHead = new ListNode(1);
// let node = newHead;
// for (let i = 2; i <= 5; i++) {
//   node.next = new ListNode(i);
//   node = node.next;
// }
// node.next = newHead;

// var reverseList = function (head) {
//   let pre = null;
//   let cur = head;
//   for (let i = 0; i < 5; i++) {
//     let next = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = next;
//   }
//   return pre;
// };

// console.log(reverseList(newHead))

// function solution(arr) {
//   let s = new Map();
//   let max = 0;
//   for (const it of arr) {
//     if (s.has(it)) {
//       let now = s.get(it);
//       s.set(it, ++now)
//     } else {
//       s.set(it, 1)
//     }
//   }
//   console.log(s);
//   for(it of s){
//     console.log
//   }
//   s.forEach((item) => {
//     if (item > max) {
//       max = item;
//     }
//   })

//   console.log(max);
//   return max;
// }

// solution([3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 2, 2, 2])

// console.log(a)
// let a = 1;
// var { foo: F, bar: B = "123" } = { foo: 'aaa', bar: 'bbb' };
// console.log(F);
// console.log(B);
// console.log(foo);

// const valueRaise = (item, k = 'value') => {
//   for (const it in item) {
//     if (typeof item[it] === 'object') {
//       item[it] = valueRaise(item[it], k);
//     } else if (it === 'value') {
//       return item[it];
//     }
//   }
//   return item;
// }

// const obj = {
//   a: {
//     value: '123'
//   },
//   b: {
//     c: {
//       value: '456'
//     }
//   }
// }
// console.log(valueRaise(obj))


// var b = 9;
// var a = function* () {
//   b = yield (10);
//   return 11;
// }
// var f = a();
// console.log(f.next().value, b, f.next().value, b);

// function func(n, m, pi, si) {
//   const result = [];
//   let Score = 0;
//   //k表示一共选了多少个
//   let j = 0;
//   function getScore(k) {
//     if (k === n) {
//       if (j === m) { //因为求最大值所以只需要考虑复习m的情况就可以了
//         Score = Score.toFixed(2);
//         result.push(Score);
//       }
//       return;
//     }
//     //每一个数有两种情况被选中没有选中
//     if (j < m) { //选中数量少于m，有两种情况
//       j++;
//       Score += si[k];
//       getScore(k + 1); //以上是被选中的情况
//       Score -= si[k];
//       Score += si[k] * pi[k] / 100;
//       j--;
//       getScore(k + 1) //以上是没有被选中的情况
//       Score -= si[k] * pi[k] / 100;
//     } else { //选中数量等于m
//       Score += si[k] * pi[k] / 100;
//       getScore(k + 1);
//       Score -= si[k] * pi[k] / 100;
//     }
//   }
//   getScore(0);
//   result.sort((a, b) => {
//     return b - a;
//   })
//   return result[0]
// }

// console.log(func(3, 2, [89, 38, 89], [445, 754, 589]));

// const [n, x, y] = readline().split(" ").map(Number);
// let grades = readline().split(" ").map(Number).sort((a, b) => {
//   return a - b;
// });
// console.log(getMin());
// function getMin() {
//   if (n < x * 2 || n > y * 2) return -1;
//   let min = n > x + y ? n - y : x;
//   while (grades[min] == grades[min + 1]) min++;
//   if (n - min < x) return -1;
//   return grades[min - 1]
// }

// try {
//   setTimeout(() => {
//     throw new Error('error')
//   })
// } catch (e) {
//   console.error(e.message)
// }
// if (!undefined) {
//   console.log(1)
// }

// function range(start = 0, end, step = 1) {
//   if (!end) {
//     end = start;
//     start = 0;
//   }
//   let result = [];
//   if((step>0&&start >= end) ||(step <0) )

//   return result;
// }
// console.log(range(0, -4))