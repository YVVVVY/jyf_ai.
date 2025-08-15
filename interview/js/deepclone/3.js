const target = {
    a: 1,
}
const source = {
    // 对象的嵌套
    b: {
        name: '张三',
        hobbies: ['篮球', '足球']
    },
    c:1,
}
// 浅拷贝
Object.assign(target, source);
target.b.name = '李四';
target.b.hobbies.push('跑步');
target.c = 2;
console.log(source.b.name, source.b.hobbies,source.c);




