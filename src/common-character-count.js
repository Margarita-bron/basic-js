const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let charS1 = {}
  let count=0

  for(const char of s1){
    if(charS1[char]){
      charS1[char]++
    }
    else charS1[char]=1
  }

  for(let char of s2){
    if(charS1[char]){
      count++
      charS1[char]--
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
