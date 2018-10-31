// https://leetcode.com/problems/palindromic-substrings/description/

var countSubstrings = function(s) {
  return helper(s);
};

function helper(s) {
  if (!s) return 0;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (isPar(s.substring(i))) counter++;
  }
  return helper(s.substring(0, s.length - 1)) + counter;
}

function isPar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
}

console.log(countSubstrings("abcbcbbcacba"));
