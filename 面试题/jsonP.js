/**
 * 
 * @param {*
 *  url,
 *  success,
 * } options
 * 随机生成一个名
 * 把这个方法挂载到window上面去
 * 生成script标签
 * 把回调函数名拼接到script标签的url上
 * 把script标签加入到body中
 * 后端会返回这个函数的执行
 */
function jsonP(options) {
  //随机生成一个函数名
  let callback = "cb" + Math.random().toString().substring(2, 8);
  window[callback] = options.success;
  const script = document.createElement('script');
  let url = options.url;
  if (url.indexOf('?') > 0) {
    //已经有参数
    url = url + `&callback=${callback}`;
  } else {
    url = url + `?callback=${callback}`;
  }
  script.src = url;
  script.id = callback;
  document.body.appendChild(script);
}