function NoToChinese(num) {
  if (!/^\d*(\.\d*)?$/.test(num)) {
    throw Error('Number is wrong')
  }
  const AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九");
  const BB = new Array("", "十", "百", "千", "万", "亿", "点", "");
  let a = ('' + num).replace(/(^0*)/g, '').split('.');//如果数字有0开头的把0给去掉
  let k = 0;
  let re = '';
  for (let i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;
      case 4:
        re = BB[4] + re;
        break;
      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }
    //k表示第几位数，i表示还剩多少位数
    if (k % 4 === 2 && a[0].charAt(i + 2) !== '0' && a[0].charAt(i + 1) === '0') {
      //可以写 == 因为有数字类型有字符类型
      re = AA[0] + re;
    }
    if (a[0].charAt(i) != 0) {
      re = AA[a[0].charAt(i)] + BB[k % 4] + re;
    }
    k++;
  }
  if (a.length > 1) {//有小数
    re += BB[6];
    for (let i = 0; i < a[1].length; i++) {
      re += AA[a[1].charAt(i)]
    }
  }
  console.log(re);
  return re;
}
NoToChinese('111110000')
NoToChinese('101')
NoToChinese('10101')
NoToChinese('999999999.999999')