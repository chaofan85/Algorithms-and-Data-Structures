// https://leetcode.com/problems/palindromic-substrings/description/

var countSubstrings = function(s) {
  let count = 0;

  if (!s) return 0;
  for (let i = 0; i < s.length; i++) {
    helper(s, i, i);
    helper(s, i, i + 1);
  }

  function helper(str, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }
  return count;
};

console.log(countSubstrings("abcabbacba"));
