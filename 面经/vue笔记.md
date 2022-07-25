# Vue

### VueRouter

说一下HashRouter和HistoryRouter的区别和原理？

区别：

1.history和hash都是利用浏览器的两种特性实现前端路由，history是利用浏览历史记录栈的api实现的，hash是监听location对象hash值变化事件来实现

2.history没有#，hash有

3.相同的url，history会触发添加到浏览器历史记录栈中，hash不会触发，history需要后端配合，如果后端不配合刷新浏览器会出现404

 HashRouter的原理：通过window.onhashchange方法获取新URL中hash值，再做进一步处理 

 HistoryRouter的原理：通过history.pushState 使用它做页面跳转不会触发页面刷新，使用window.onpopstate 监听浏览器的前进和后退，再做其他处理 

需要兼容低版本的浏览器时，建议使用hash模式。
需要添加任意类型数据到记录时，可以使用history模式。 

### Vue组件通讯

#### 父子组件的通讯

prop  event  

style和class（父组件可以向子组件传递`style`和`class`，它们会合并到子组件的根元素中）

如果父组件传递了一些属性到子组件，但子组件并没有声明这些属性，则它们称之为`attribute`，这些属性会直接附着在子组件的根元素上

native （在注册事件时，父组件可以使用`native`修饰符，将事件注册到子组件的根元素上）

$listeners  （子组件可以通过`$listeners`获取父组件传递过来的所有事件处理函数）

v-model

sync

$parent和$children

在组件内部，可以通过`$parent`和`$children`属性，分别得到当前组件的父组件和子组件实例

$slots和$scopedSlots

$ref

#### 跨组件通信

Provide和Inject

Router

Vuex

store模式（自己定义一个store.js）

事件总线 eventbus

### 虚拟dom

虚拟dom本质上就是一个普通的JS对象，用于描述视图的界面结构

在vue中，每个组件都有一个`render`函数，每个`render`函数都会返回一个虚拟dom树，这也就意味着每个组件都对应一棵虚拟DOM树

