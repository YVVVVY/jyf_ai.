const s = Symbol('id'); // 独一无二 
const sourcr = {
    [s]: 123,
    a :1
}
const target =[];
Object.assign(target, sourcr);
console.log(target)
