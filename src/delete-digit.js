const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numb = String(n);
  let arrNumb=[Number(numb.slice(1))]
  for(let i=1;i<numb.length;i++){
    let newnumb;
    newnumb = numb.slice(0,i)+numb.slice(i+1);
    arrNumb.push(Number(newnumb))
  }
  return Math.max(...arrNumb)
}

module.exports = {
  deleteDigit
};
