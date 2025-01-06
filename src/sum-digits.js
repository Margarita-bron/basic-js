const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  
  let arr = String(n).split('').map(Number)
  const arrFunc=n=>{
    let num=0;
    let arr = String(n).split('').map(Number);
    for(let i=0;i<arr.length;i++){
      num += arr[i]
    }
    return num
  }
  while(String(n).length>1){
    n = arrFunc(n)
  }
  return n;
  
}

module.exports = {
  getSumOfDigits
};
