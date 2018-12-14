/*
https://leetcode.com/problems/minimum-window-substring/description/

Given a string S and a string T, find the minimum window in S which will
contain all the characters in T in complexity O(n).

Example:
Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"

Note:
If there is no such window in S that covers all characters in T,
return the empty string "".

If there is such window, you are guaranteed that there will always be
only one unique minimum window in S.
*/

var minWindow = function(s, t) {
  if (!s || !t) return "";
  if (s === t) return s;

  let map = {};
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) {
      map[t[i]] = 1;
    } else {
      map[t[i]]++;
    }
  }
  let uniques = Object.keys(map).length;

  let counter = 0;
  let slow = 0;
  let fast = 0;
  let start = -1;
  let end = -1;
  let minLenth = s.length + 1;

  for (let i = 0; i < s.length; i++) {
    if (counter !== uniques) {
      if (map[s[i]] !== undefined) {
        map[s[i]]--;
        if (map[s[i]] === 0) counter++;
      }
      fast++;
    }
    while (counter === uniques) {
      slow++;
      if (map[s[slow - 1]] !== undefined) {
        map[s[slow - 1]]++;
        let len = fast - slow + 1;
        if (len < minLenth) {
          minLenth = len;
          start = slow - 1;
          end = fast - 1;
        }
        if (map[s[slow - 1]] > 0) {
          counter--;
        }
      }
    }
  }
  return s.substring(start, end + 1);
};

console.log(minWindow("bacbababbadbccb", "bcbd"));
