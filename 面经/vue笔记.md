# Vue

说一下HashRouter和HistoryRouter的区别和原理？

区别：

1.history和hash都是利用浏览器的两种特性实现前端路由，history是利用浏览历史记录栈的api实现的，hash是监听location对象hash值变化事件来实现

2.history没有#，hash有

3.相同的url，history会触发添加到浏览器历史记录栈中，hash不会触发，history需要后端配合，如果后端不配合刷新浏览器会出现404

 HashRouter的原理：通过window.onhashchange方法获取新URL中hash值，再做进一步处理 

 HistoryRouter的原理：通过history.pushState 使用它做页面跳转不会触发页面刷新，使用window.onpopstate 监听浏览器的前进和后退，再做其他处理 

需要兼容低版本的浏览器时，建议使用hash模式。
需要添加任意类型数据到记录时，可以使用history模式。 

