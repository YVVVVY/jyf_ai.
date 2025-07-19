// // 如何遍历数组
// - for (let i = 0 ...) 计数循环 性能好 可读性不好 不是人脑 是电脑
// - while
// - forEach 
// - map filter find some every ...
// - for of 
const names = Array.of('a','b','c','d');
// console.log(names);
names.forEach(name => {
    if (name === 'b'){
        console.log('b is here,stop...');
        // break; 
        return;// 跳出本次循环，继续下次循环
    }
    console.log('Processing:' + name);
})