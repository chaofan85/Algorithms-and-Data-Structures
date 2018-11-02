// https://leetcode.com/problems/palindromic-substrings/description/

// var countSubstrings = function(s) {
//   return helper(s);
// };

// function helper(s) {
//   if (!s) return 0;
//   let counter = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (isPar(s.substring(i))) counter++;
//   }
//   return helper(s.substring(0, s.length - 1)) + counter;
// }
//
// function isPar(s) {
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== s[s.length - 1 - i]) return false;
//   }
//   return true;
// }

var countSubstrings = function(s) {
  let count = 0;

  if (!s) return 0;
  for (let i = 0; i < s.length; i++) {
    console.log(i, "lalala");
    helper(s, i, i);
    helper(s, i, i + 1);
  }

  function helper(str, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      console.log(left, right);
      count++;
      left--;
      right++;
    }
  }
  return count;
};

console.log(countSubstrings("abc"));
