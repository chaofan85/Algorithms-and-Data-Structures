// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let visited = new Set();
  let queue = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (!queue.length || !visited.has(s[i])) {
      queue.push(s[i]);
      visited.add(s[i]);
      count++;
      if (count > max) max = count;
    } else if (visited.has(s[i])) {
      while (visited.has(s[i])) {
        let first = queue.shift();
        visited.delete(first);
        count--;
      }
      queue.push(s[i]);
      visited.add(s[i]);
      count++;
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aab"));
