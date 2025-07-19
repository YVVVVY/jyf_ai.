// fill 一样的
// Array 静态方法
console.log (Array.of(1,2,3)) // 不同地初始化
// 复杂的计算或转变
console.log (Array.from(new Array(26),
(val,index) => String.fromCodePoint(65 + index))) // 不同地初始化