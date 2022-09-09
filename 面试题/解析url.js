url = 'https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=baidu&wd=%E7%99%BE%E5%BA%A6';

function urlToObj(url) {
  const obj = {};
  let arr1 = url.split('?');
  let arr2 = arr1[1].split('&');
  for (const it of arr2) {
    const [key, value] = it.split('=')
    obj[key] = value;
    if (key === 'wd') {
      obj[key] = decodeURI(obj[key]);
    }
  }
  return obj;
}
console.log(urlToObj(url));