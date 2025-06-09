# react 业务
friends 数据
App
挂载点
页面的显示
- 原生js
  DOM 编程
  底层API 不够高效
  聚焦于业务
  前端切图崽（html,css + 一点js）->前端开发工程师 （微博，美团） js 框架（vue/react）-> node 全栈开发（node + 数据库） ->react native Android + ios App ->AIGC AI应用 -> 全干工程师
  web 应用（www.baidu.com） 移动应用（Android,Ios）
  Node(server) AI 统领一切 JS AI全干工程师

## **项目**的创建
- npm 是什么？ node package manager
  node 包管理器 安装react package App开发能力
- npm init vite 
  按vite 模板初始化一个项目 init 
  vite vue/react 项目模板和**工程**化
- 选择一些配置
  - react
  - js 
  项目模板，基于它开始开发
- cd 项目名
- npm i 安装依赖
  node_modules 包所在
- npm run dev 启动项目
  3000 端口启动应用

# 5 w
- what web App
- how npm init vite 初始化并vite的项目模板
- 安装依赖
- 启动应用 http 5173 react 技术栈 Web App
远离JS API 编程，面向业务
## 响应式业务 
## TODOS 任务列表
  - 数据['脱单','学习'，'健身']
    数据在页面上渲染 react 提供点啥 支持这个业务

## react 初体验
- react 组件是完成开发任务的最小单元
- 组件组合html,css,js
- 组件就是一个函数
- 返回一段html
- 函数体里面 return 之前可以声明数据和业务逻辑
- {} js 表达式 不用写DOM API 

## 响应式数据
- 数据会发生改变的，数据状态 state
- [todos, setTodos] = useState(初始值) 使用一个数据状态, 返回一个数组
  数组第一项 数据项
  数组第二项 修改数据的方法

## react

1. state 组件的内部状态
2. props 组件外部传入的状态
3. render/return 渲染 Dom 元素
4. setState 更新组件的状态 修改 state，

## what is react

1. 一个用于构建用户界面的 JavaScript 库
2. 声明式：React 采用声明式编程，声明式的视图层，注重于描述界面的状态和数据的变化。
3. 高效：React 通过对组件进行局部更新来实现高效的界面渲染。
   更新 state 数据-->触发 render 函数-->更新虚拟 dom 元素-->diff 算法-->更新真实 dom 元素-->更新 UI 渲染
4. 灵活：React 可以与其他库和框架一起使用，例如 Redux 用于管理应用状态，MobX 用于状态管理，以及 React Router 用于路由管理。
5. 组件化：React 鼓励组件化开发，将用户界面划分为独立的、可重用的组件。

## react 脚手架

react-reate-app 脚手架
react-devtools 调试工具

## jsx 语法糖

1. jsx 是一种用于描述 ui 的 js 扩展语法，用于描述组件的 ui 结构
   注意： DOM 元素写的时候需要小写开头，react 组件写的时候需要大写开头
2. jsx 可以直接使用 js 表达式，使用{}包裹
   - 通过表达式给标签属性赋值
   - 通过表达式来定义子组件
   - jsx 中不可写多行 js，也没有 if 判断，需要使用函数去封装
3. class 使用 className，事件都是使用 on+事件名，例如 onClick，————》驼峰命名法
4. 注释的写法 {/_ 注释内容 _/}

- 不一定要使用 jsx，还可以使用 React.createElement()方法来创建元素，但是不推荐使用，因为 jsx 更加简洁，可读性更强。

ReactDOM.render 方法用于将 React 元素渲染到指定的 DOM 节点中

- dom 节点发生变化的时候，react 元素不会改变
- react 元素是不可改变的，一旦创建就不能修改，React 会通过比较前后两次的元素来确定需要更新的部分，从而实现高效的界面渲染。
- 并且他的子元素和属性值也是不可变的
- 每次更新 ui 都会重新创建一个新的 react 元素，然后进行比较，从而实现高效的界面渲染。

## 组件

1. 定义： 组件是 React 应用程序的基本构建块，用于封装可重用的 UI 逻辑和状态。

- 函数组件： 函数组件是一个纯函数，接受 props 作为参数，并返回一个 React 元素。
- 类组件： 使用 class，类组件是一个继承自 React.Component 的类，需要定义 render 方法，返回一个 React 元素。

2. 组件的 props

- props 是组件的属性，用于传递数据给组件。
- props 是只读的，不能在组件内部修改 props。
- props 是不可变的，一旦创建就不能修改。
- props 可以是任何类型的数据，包括字符串、数字、对象、数组等。
  1. props 的属性校验：（可以在 class 中使用 static propTypes = {}来定义 props 的类型和是否是必需的。）
     - 可以使用 propTypes 属性来定义 props 的类型和是否是必需的。import PropTypes from 'prop-types';
     - 可以使用 defaultProps 属性来定义 props 的默认值。组件初始化的生命周期中被初始化的
     - 可以使用 isRequired 属性来定义 props 是必需的，否则会报 warn。比如：userName：PropTypes.string.isRequired
- props 可以是从父组件传递过来的，也可以是组件内部的默认值。

3. 组件的 state

- 表示组件的内部状态，反映组件内部状态变化的数据
- 组件的 state 是可变的，在组件内部可以修改 state。
- 在 constructor 阶段被初始化
- 修改 state 的值不能直接修改，需要使用 setState 方法来更新 state。
- set State 有俩种使用方式
  - 1. 传入一个对象，对象的属性名就是 state 的属性名，对象的属性值就是 state 的属性值
  - 2. 传入一个函数，函数的参数是更新前的 state 和 props，返回一个对象，对象的属性名就是 state 的属性名，对象的属性值就是 state 的属性值
       可以接受一个回调函数作为第二个参数，该回调函数会在 state 更新后立即调用，用于执行一些副作用操作。
       注意：setState 是异步的，不会立即更新 state，而是会将更新请求放入队列中，然后在下一次事件循环中批量更新 state。

4. 有状态组件和无状态组件

- 有状态组件： 有状态组件是一个类组件，需要定义 render 方法，返回一个 React 元素。
- 无状态组件： 无状态组件是一个函数组件，接受 props 作为参数，并返回一个 React 元素。
- 有状态组件和无状态组件的区别：（组件内部是否有状态的变化）
  - 有状态组件可以有自己的 state，而无状态组件没有自己的 state。
  - 有状态组件可以有自己的生命周期方法，而无状态组件没有自己的生命周期方法。
  - 有状态组件可以有自己的方法，而无状态组件没有自己的方法。
- 无状态组件推荐用函数式组件，因为函数式组件的性能比类组件更好。

5. 组件样式

- 1. className
- 2. css in js

6. 组件的生命周期

- 组件的生命周期是指组件从创建到销毁的过程，每个阶段都有对应的生命周期方法。
- 由于函数组件内部没有状态，没有生命周期，所以指的是类组件的生命周期。
- 挂载阶段：
  - constructor： 组件实例化时调用，用于初始化 state 和绑定方法。
    - 在这里初始化 state 、绑定方法、
    - 注意：
      1. 如果需要在构造函数中访问 props，需要在 super(props)之后调用 this.props，现有 super 再有 this
      2. 不要在构造函数中调用 setState，因为在执行 setState 之前，组件的 props 和 state 还没有被初始化。
      3.
  - getDerivedStateFromProps： 组件接收到新的 props 时调用，用于根据 props 更新 state。(谨慎使用)
    - 在每次渲染前都会被调用
    - 接受俩个参数：props 和 state 并且返回一个对象或者 null
    - 主要目的就是让组件在 props 更新的时候更新 state
    - 注意：
      1. 这个方法是静态方法 static，不能访问 this
      2. 返回的是一个对象，那么 state 更新就会有俩个来源，一个是 props，一个是 this.state 会以一种追加的方式进行更新
         {...this.state, ...getDerivedStateFromProps(props, state)}
  - render： 组件渲染时调用，返回一个 React 元素。注意：在 render 执行完后会 react 会更新 DOM 和 refs 的操作。会生成真实的节点并且执行组件上的 refs
    - 注意：
      1. render 函数是一个纯函数，也是 class 组件的唯一必须实现的方法
      2. 不可以调用 setState 方法，以及其他有副作用的方法
      3. 返回的只是一个 ui 描述，而不是执行渲染工作
    - 返回的类型：
      1. react 元素
      2. null/undefined
      3. 数组或片段
      4. 字符串或数字
      5. 布尔值
      6. Portals
  - componentDidMount： 组件挂载到 DOM 后调用，用于执行一些副作用操作。
    - 使用场景：
      1. 发送网络请求
      2. 订阅事件
      3. 手动操作 DOM
- 更新阶段：（当组件中有新的 props 传入、调用了 set State、父组件重新渲染、调用了 forceUpdate）
  - getDerivedStateFromProps： 组件接收到新的 props 时调用，用于根据 props 更新 state。
    - 接受俩个参数：props 和 state 并且返回一个对象或者 null
    - 每次渲染前都会被调用
    * 和挂载阶段是一样的
  - shouldComponentUpdate： 组件接收到新的 props 或 state 时调用，用于判断是否需要更新组件或者说继续执行更新过程。（谨慎使用）
    - 接受俩个参数：nextProps 和 nextState 并且返回一个布尔值
    - 注意：
      1. 这个方法是静态方法 static，不能访问 this
      2. 返回的是一个布尔值，true 表示需要更新，false 表示不需要更新
      3. 这个方法是在 render 之前调用的，所以可以在这个方法中进行一些判断，比如 props 和 state 是否有变化，如果没有变化，那么就不需要更新组件。
  - render： 组件渲染时调用，返回一个 React 元素。
    - 注意：在挂载和更新阶段都会执行，但是在更新阶段会先执行 shouldComponentUpdate 方法，如果返回 false，那么 render 方法就不会执行。
  - getSnapshotBeforeUpdate： 组件更新前调用，用于获取一些信息，用于在 componentDidUpdate 中使用。
    - 接受俩个参数：prevProps 和 prevState 并且返回一个值 snapshot 或者 null
    - 对更新以后的值进行操作
  - componentDidUpdate： 组件更新后调用，用于执行一些副作用操作。 - 接受三个参数：prevProps 和 prevState 和 snapshot
    例如：处理页面滚动的时候可以用到 getSnapshotBeforeUpdate 去判断是否有新的内容，有新的内容就记录滚动的位置，然后在 componentDidUpdate 中滚动到记录的位置。
- 卸载阶段：

  - componentWillUnmount： 组件卸载或者销毁前调用，用于执行一些清理操作。
    - 注意：
      1. 不可以调用 set State 方法，以及其他有副作用的方法
      2. 这个方法是在组件卸载或者销毁前调用的，所以可以在这个方法中进行一些清理操作，比如取消订阅事件、清除定时器、清除网络请求等。

- 其他的方法：
  - force Update 强制更新组件，并且跳过 shouldComponentUpdate 方法，直接出发 render 方法的执行。
    - 注意：
      1. 依赖于其他的数据而不是组件的 state 和 props，
      2. 谨慎使用，因为强制更新会导致组件的重新渲染，可能会影响性能。
  - 错误处理
  - setState
