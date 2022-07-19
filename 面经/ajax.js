class Ajax {
  constructor(obj) {
    this.method = obj.method;
    this.url = obj.url;
    this.data = obj.data;
    this.success = obj.success;
  }
  Send() {
    let success = this.success;
    //开始封装ajax；
    let xhr = null;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      //  兼容ie
      xhr = new ActiveXObject('Microsoft.XMLHttp')
    }
    if (this.method == "GET") {
      xhr.open(this.method, this.url, true)     // 打开连接
      xhr.send(null)                          // 发送数据
    } else if (this.method == "POST") {
      xhr.open(this.method, this.url, true)     // 打开连接
      // post设置请求头的内容
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      // 发送数据
      xhr.send(JSON.stringify(this.data))
    } else {
      throw new Error(`不兼容${this.method}类型的请求`);
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(xhr.responseText);
          return 'success';
        } else {
          console.log(xhr.status);
          return 'fail';
        }
      }
    }
  }
}