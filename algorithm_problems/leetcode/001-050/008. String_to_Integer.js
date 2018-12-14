// https://leetcode.com/problems/string-to-integer-atoi/description/

var myAtoi = function(str) {
  if (isNaN(parseInt(str))) {
    return 0;
  }
  if (Math.abs(parseInt(str)) > Math.pow(2, 32) / 2 - 1) {
    if (parseInt(str) > 0) {
      return Math.pow(2, 32) / 2 - 1;
    } else {
      return -(Math.pow(2, 32) / 2);
    }
  }
  return parseInt(str);
};

console.log(myAtoi("54344343"));
