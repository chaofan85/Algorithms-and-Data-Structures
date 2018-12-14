/*
https://leetcode.com/problems/palindrome-partitioning/description/

Given a string s, partition s such that every substring of the
partition is a palindrome.
Return all possible palindrome partitioning of s.

Example:
Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
*/

var partition = function(str) {
  if (str === null || str.length === 0) return [];
  let result = [];
  helper(str, 0, [], result);
  return result;
};

function helper(str, start, par, result) {
  if (start === str.length) {
    result.push(par.slice());
    return;
  }

  for (let i = start; i < str.length; i++) {
    let subStr = str.slice(start, i + 1);
    if (!isPalidrome(subStr)) continue;

    par.push(subStr);
    helper(str, i + 1, par, result);
    par.pop();
  }
}

function isPalidrome(str) {
  let start = 0;
  let end = str.length - 1;
  while (start <= end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(partition("abb"));
