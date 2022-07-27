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

1. 什么是虚拟dom？

   在vue中，每个组件都有一个`render`函数，每个`render`函数都会返回一个虚拟dom树，这也就意味着每个组件都对应一棵虚拟DOM树。

2. 为什么需要虚拟dom

   在`vue`中，渲染视图会调用`render`函数，这种渲染不仅发生在组件创建时，同时发生在视图依赖的数据更新时。如果在渲染时，直接使用真实`DOM`，由于真实`DOM`的创建、更新、插入等操作会带来大量的性能损耗，从而就会极大的降低渲染效率。

   因此，`vue`在渲染时，使用虚拟dom来替代真实dom，主要为解决渲染效率的问题。

3. 虚拟dom是如何转换为真实dom的？

   在一个组件实例首次被渲染时，它先生成虚拟dom树，然后根据虚拟dom树创建真实dom，并把真实dom挂载到页面中合适的位置，此时，每个虚拟dom便会对应一个真实的dom。

   如果一个组件受响应式数据变化的影响，需要重新渲染时，它仍然会重新调用render函数，创建出一个新的虚拟dom树，用新树和旧树对比，通过对比，vue会找到最小更新量，然后更新必要的虚拟dom节点，最后，这些更新过的虚拟节点，会去修改它们对应的真实dom

4. 模板和虚拟dom的关系？ 

   vue框架中有一个`compile`模块，它主要负责将模板转换为`render`函数，而`render`函数调用后将得到虚拟dom。
   编译的过程分两步：

   1. 讲模板字符串转换成AST

   2. 讲AST转换为render函数

   如果使用传统的引入方式，则编译时间发生在组件第一次加载时，这称之为运行时编译。

   如果是在`vue-cli`的默认配置下，编译发生在打包时，这称之为模板预编译。

   编译是一个极其耗费性能的操作，预编译可以有效的提高运行时的性能，而且，由于运行的时候已不需要编译，`vue-cli`在打包时会排除掉`vue`中的`compile`模块，以减少打包体积

   模板的存在，仅仅是为了让开发人员更加方便的书写界面代码

   **vue最终运行的时候，最终需要的是render函数，而不是模板，因此，模板中的各种语法，在虚拟dom中都是不存在的，它们都会变成虚拟dom的配置**

### v-model

请阐述一下 `v-model` 的原理 ？

`v-model`即可以作用于表单元素，又可作用于自定义组件，无论是哪一种情况，它都是一个语法糖，最终会生成一个属性和一个事件

**当其作用于表单元素时**，`vue`会根据作用的表单元素类型而生成合适的属性和事件。例如，作用于普通文本框的时候，它会生成`value`属性和`input`事件，而当其作用于单选框或多选框时，它会生成`checked`属性和`change`事件。

`v-model`也可作用于自定义组件，**当其作用于自定义组件时**，默认情况下，它会生成一个`value`属性和`input`事件。

### 数据响应式原理

vue2：

**响应式数据的最终目标**，是当对象本身或对象属性发生变化时，将会运行一些函数，最常见的就是render函数。

在具体实现上，vue用到了**几个核心部件**：

1. Observer
2. Dep
3. Watcher
4. Scheduler

#### Observer

Observer要实现的目标非常简单，就是把一个普通的对象转换为响应式的对象

为了实现这一点，Observer把对象的每个属性通过`Object.defineProperty`转换为带有`getter`和`setter`的属性，这样一来，当访问或设置属性时，`vue`就有机会做一些别的事情。

<img src="http://mdrs.yuanjin.tech/img/20210226153448.png" alt="image-20210226153448807" style="zoom:50%;" />

Observer是vue内部的构造器，我们可以通过Vue提供的静态方法`Vue.observable( object )`间接的使用该功能。

在组件生命周期中，这件事发生在`beforeCreate`之后，`created`之前。

具体实现上，它会递归遍历对象的所有属性，以完成深度的属性转换。

由于遍历时只能遍历到对象的当前属性，因此无法监测到将来动态增加或删除的属性，因此`vue`提供了`$set`和`$delete`两个实例方法，让开发者通过这两个实例方法对已有响应式对象添加或删除属性。

对于数组，`vue`会更改它的隐式原型，之所以这样做，是因为vue需要监听那些可能改变数组内容的方法

<img src="http://mdrs.yuanjin.tech/img/20210226154624.png" alt="image-20210226154624015" style="zoom:50%;" />

总之，Observer的目标，就是要让一个对象，它属性的读取、赋值，内部数组的变化都要能够被vue感知到。

#### Dep

这里有两个问题没解决，就是读取属性时要做什么事，而属性变化时要做什么事，这个问题需要依靠Dep来解决。

Dep的含义是`Dependency`，表示依赖的意思。

`Vue`会为响应式对象中的每个属性、对象本身、数组本身创建一个`Dep`实例，每个`Dep`实例都有能力做以下两件事：

- 记录依赖：是谁在用我
- 派发更新：我变了，我要通知那些用到我的人

当读取响应式对象的某个属性时，它会进行依赖收集：有人用到了我

当改变某个属性时，它会派发更新：那些用我的人听好了，我变了

<img src="http://mdrs.yuanjin.tech/img/20210226155852.png" alt="image-20210226155852964" style="zoom:50%;" />

#### watcher

这里又出现一个问题，就是Dep如何知道是谁在用我？

要解决这个问题，需要依靠另一个东西，就是Watcher。

当某个函数执行的过程中，用到了响应式数据，响应式数据是无法知道是哪个函数在用自己的

因此，vue通过一种巧妙的办法来解决这个问题

我们不要直接执行函数，而是把函数交给一个叫做watcher的东西去执行，watcher是一个对象，每个这样的函数执行时都应该创建一个watcher，通过watcher去执行

watcher会设置一个全局变量，让全局变量记录当前负责执行的watcher等于自己，然后再去执行函数，在函数的执行过程中，如果发生了依赖记录`dep.depend()`，那么`Dep`就会把这个全局变量记录下来，表示：有一个watcher用到了我这个属性

当Dep进行派发更新时，它会通知之前记录的所有watcher：我变了

<img src="http://mdrs.yuanjin.tech/img/20210226161404.png" alt="image-20210226161404327" style="zoom:50%;" />

每一个`vue`组件实例，都至少对应一个`watcher`，该`watcher`中记录了该组件的`render`函数。

`watcher`首先会把`render`函数运行一次以收集依赖，于是那些在render中用到的响应式数据就会记录这个watcher。

当数据变化时，dep就会通知该watcher，而watcher将重新运行render函数，从而让界面重新渲染同时重新记录当前的依赖。

#### Scheduler

调度器维护一个执行队列，该队列同一个watcher仅会存在一次，队列中的watcher不是立即执行，它会通过一个叫做`nextTick`的工具方法，把这些需要执行的watcher放入到事件循环的微队列中，nextTick的具体做法是通过`Promise`完成的

当响应式数据变化时，`render`函数的执行是异步的，并且在微队列中

![image-20210226163936839](http://mdrs.yuanjin.tech/img/20210226163936.png)