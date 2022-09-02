
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