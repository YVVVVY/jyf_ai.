# 智能前端之单词学习
- 产品和商业模式
  - 学单词
  - 拍照记单词
    - 图片交给多模态模型 word
    - deepseek aigc 例句
    - tts 发音 
- focus
  拍照背单词，用单词
- 解决一些特定的效率性，创新型的APP

- npm init vite
  vite 是工程化脚手架，构建工具
- npm i 慢了点
  react ... 项目依赖
  pnpm 代替npm 
  不同的项目中 重复去安装了react , react-dom等包
  react等包放到一个地方，如果之前安装过，链接过，只需要安装一次

## react 语法
- 单项数据流
  数据状态流动
  - 父组件提供数据状态，和api 接口请求
  - 拆成多个子组件 
  - 数据会从父组件流向子组件
  - 子组件负责消费数据  专注于显示
  - props
    <pictureCard
      uploadImage={uploadImage}
    />
    函数参数一样，可以解构
## 项目中一定要安排的技能点
- pnpm
- react 思想
  - 数据状态 useState
  - 数据驱动
  - 响应式 数据状态变化，视图会自动更新
    - 不用频繁操作DOM，只需要关注业务
- 业务
  - 图片上传
    - 图片预览
   
- 组件化设计
  - App
    - 提供数据
    - 图片上传大模型
  - PictureCard
    单项数据流
    - 子组件只负责消费数据
    - 父组件负责提供数据，数据的请求
    - 先要给父组件
- 性能优化
  - linear-gradient 代替图片做背景
- 用户体验
  - 上传图片的功能，预览功能
  - 无障碍访问
    label for +input#id
- es6 新特性
  -可选链操作符
- html5 功能
  - file 文件对象
- 智能
  - 多模态模型
    月之暗面 base64
    prompt?