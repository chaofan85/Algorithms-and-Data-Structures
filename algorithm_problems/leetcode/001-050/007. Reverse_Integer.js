// https://leetcode.com/problems/reverse-integer/description/

var reverse = function(x) {
  let abs = Math.abs(x);
  let arr = [];

  while (abs >= 1) {
    arr.push(abs % 10);
    abs = Math.floor(abs / 10);
  }

  let result = 0;
  let tens = 1;
  while (arr.length) {
    result += arr.pop() * tens;
    tens *= 10;
  }

  const upper = Math.pow(2, 31) - 1;
  const lower = 0 - Math.pow(2, 31);

  if (result > upper || -result < lower) return 0;
  return x > 0 ? result : -result;
};

console.log(reverse(12531234));