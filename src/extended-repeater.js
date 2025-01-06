const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {


  const repeatTimes = options.repeatTimes || 1;
    const separator = options.separator || '+';
    const addition = options.addition !== undefined ? String(options.addition) : '';
    const additionRepeatTimes = options.additionRepeatTimes;
    const additionSeparator = options.additionSeparator || '|';

  function repeatStr(str,repeat,separator){
    return Array(repeat).fill(str).join(separator)
  }

  let addstr= repeatStr(addition,additionRepeatTimes,additionSeparator)
  let result = repeatStr(str+addstr,repeatTimes,separator)
  return result
}

module.exports = {
  repeater
};
