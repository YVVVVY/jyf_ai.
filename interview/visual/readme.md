# 数据可视化

- echarts
    老板、客户，数据报表
    开源的用于柱状图、饼状图等的可视化库
- @types/echarts
    echarts 类型申明文件，单独的
    为什么react 不需要单独安装类型申明文件
    react 是用ts写出来的
    echarts 原生js 和类型声明文件是分开的

- 直观看出数据的价值
    echarts 2D
    three.js 3D
    数据可视化

- echarts 流程
    - 安装而插头，@types/echarts
    - init 实例化
        要给他一个图表的DOM 挂载点
        useRef<HTMLDivElement>(null)
        null | HTMLDivElement
        联合类型 useRefer 可变

