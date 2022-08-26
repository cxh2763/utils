function* walk(str) {
  let path = '';
  let terminals = ['.', '-']
  for (let i = 0; i < str.length; i++) {
    if (terminals.includes(str[i])) {
      yield path;
      path = ''
    } else {
      path += str[i];
    }
  }
  if (path) {
    yield path;
    path = ''
  }
}

// console.log('beta' > 'alpha');

let arr = ['12.3.1', '12.7.8', '1.5.6-alpha.1', '7.2.3-beta'];

function getMax(arr) {

}

function compare(str1, str2) {
  iter1 = walk(str1);
  iter2 = walk(str2);
  let ter = ['beta', 'alpha']
  let max = '';
  let result1 = iter1.next().value;
  let result2 = iter2.next().value;
  while (result1 === result2) {
    result1 = iter1.next().value || 0;
    result2 = iter2.next().value || 0;
  }
  if (ter.includes(result1) && ter.includes(result2)) {
    result1 === 'beta' ? max = str1 : max = str2;
  } else {
    +result1 > +result2 ? max = str1 : max = str2;
  }
  console.log(max);
  return max;
}

compare('12.3.2-beta.1', '12.3.2-beta');

// console.log('alpha' > 'beta');

// function getMax(arr) {
//   let iter = [];
//   let result = '';
//   let terminals = ['alpha', 'beta'];
//   for (const it of arr) {
//     iter.push(walk(it));
//   }

// }

// getMax(arr);

let result = walk('1.5.6-alpha.1');
// for (const item of result) {
//   console.log(item);
// }