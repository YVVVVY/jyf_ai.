const arr = [1,2,3];
const newArr = [...arr];

let arr2 = arr.slice();
console.log(arr2);

// const arr3 = [[1,2],[3,4],[5,[6,7]]];
// let arr4 = arr3.slice();
// arr2[1] = 'b';
// console.log(arr2,arr); 

const arr3 = [[1,2],[3,4],[5,[6,7]]];
let arr4 = arr3.slice();
console.log(arr4)