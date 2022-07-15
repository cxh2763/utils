let arr = [79, 98, 13, 32, 79, 89, 24, 46, 13, 63, 31];
//快速排序
function quickSort(arr) {
  function _quickSort(left, right) {
    if (left < 0 || right > arr.length || left >= right) {
      return;
    }
    //确定高位、低位
    let low = left;
    let high = right;
    //先找一个基数
    let key = arr[low]; // low这个位置空出来了
    while (low < high) {
      while (arr[high] >= key && low < high) { //必须要大于等于不然数组里面有一样大的数就会死循环
        high--;
      }
      //高位不满足条件了，交换
      arr[low] = arr[high]
      //high这个位置空出来了
      while (arr[low] <= key && low < high) {
        low++;
      }
      //低位不满足了，交换
      arr[high] = arr[low]
    }
    //循环后low等于high
    arr[low] = key;//key的位置就确定了
    _quickSort(left, low - 1)
    _quickSort(low + 1, right)
  }
  _quickSort(0, arr.length - 1);
  return arr;
}

// console.log(quickSort(arr));

//归并排序
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid)
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
  const result = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift())
    } else {
      result.push(rightArr.shift())
    }
  }
  return result.concat(leftArr).concat(rightArr)
}
console.log(mergeSort(arr))