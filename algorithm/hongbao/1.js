/**
 * 抢红包
 * @param {number} total 红包总金额
 * @param {number} num 红包个数
 * @returns {number[]} 每个红包的金额
 */
function hongbao(total, num) {
  const arr = [];
  let restAmount = total; // 剩余金额
  let restNum = num; // 剩余个数

  for (let i = 0; i < num - 1; i++) {
    // Math
    // 包装类 
    let amount = Math.random(restAmount / restNum * 2).toFixed(2)// 最大金额
    // console.log(amount);
    arr.push(amount);
    restAmount -= amount;
    restNum--;
  }
  arr.push(restAmount.toFixed(2));
   
//   - 公平性
// 平均值
// 随机性
  return arr;
}

console.log(hongbao(10000, 10)); 