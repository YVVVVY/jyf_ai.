// Object.defineProperty()
var obj = {}; // 对象
// es5 就提供api 兼容性更好
// react 和vue 最新版 对浏览器有要求
Object.defineProperty(obj,'num',{
    value: 1,
    // 属性描述
    configurable:true,
    writable:true,
    enumerable:false,
    // get: function() {
    //     console.log('读取了属性num');
    //     return 1
    // }
})
// obj.num = 2;
// console.log(obj.num);
// // 可配置
// delete obj.num;
// console.log(obj.num);
for (let key in obj){
    console.log(key + ':' + obj[key]);
}

console.log(Object.getOwnPropertyDescriptor(obj,'num'));
Object.defineProperty(obj,'name',{
    writable:true
})
obj.name = 'Bob'
console.log(obj.name);
console.log(Object.getOwnPropertyDescriptor(obj,'name'));

for (let key in obj){
    console.log(key,obj[key]);
}



