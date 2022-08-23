function func(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (('' + i).indexOf('25') !== -1) {
      result++;
    }
  }
  return result;
}

function func2(n) {
  if (n < 25) {
    return 0;
  }
  if (n < 100) {
    return 1;
  }
  let Arr = new Array(9).fill(0);
  Arr[3] = 1;
  for (let i = 4; i < 10; i++) {
    Arr[i] = Arr[i - 1] * 10 + 10 ** (i - 3) - Arr[i - 2];
  }
  function getResult(str, result) {
    const length = str.length;
    let FirstTwo = +str.slice(0, 2);
    if (length === 2) {
      if (FirstTwo >= 25) {
        result += 1;
      }
      return result;
    }
    if (FirstTwo > 25) {
      result = result + 10 ** (length - 2) - Arr[length - 1];
    }
    if (FirstTwo === 25) {
      result += (+str.slice(2)) + 1;
    }
    result += (+Arr[length]) * (+str.charAt(0))
    return getResult(str.slice(1), result);
  }
  return getResult('' + n, 0);
}
console.log(
  func(5635421),
  func2(5635421),
)

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