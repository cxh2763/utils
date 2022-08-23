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

const [n, x, y] = readline().split(" ").map(Number);
let grades = readline().split(" ").map(Number).sort((a, b) => {
  return a - b;
});
console.log(getMin());
function getMin() {
  if (n < x * 2 || n > y * 2) return -1;
  let min = n > x + y ? n - y : x;
  while (grades[min] == grades[min + 1]) min++;
  if (n - min < x) return -1;
  return grades[min - 1]
}