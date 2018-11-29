/*
Given a string s, partition s such that every substring of the
partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

Example:
Input: "aab"
Output: 1

Explanation: The palindrome partitioning ["aa","b"] could be
produced using 1 cut.
*/

var minCut = function(s) {
  let dp = new Array(s.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s.length);
    dp[i].fill(0);
  }

  let length = 1;
  while (length <= 2) {
    for (let i = 0; i + length <= dp.length; i++) {
      if (length === 1) {
        dp[i][i + length - 1] = 0;
      } else if (length === 2) {
        dp[i][i + length - 1] = s[i] === s[i + 1] ? 0 : 1;
      }
    }
    length++;
  }

  while (length <= s.length) {
    for (let j = 0; j + length <= s.length; j++) {
      let subStr = s.substring(j, j + length);
      if (isPalidrome(subStr)) {
        dp[j][j + length - 1] = 0;
      } else {
        let min = s.length + 1;
        for (let k = j; k + 1 < subStr.length; k++) {
          let cuts = 1 + dp[j][k] + dp[k + 1][j + subStr.length - 1];
          if (cuts < min) min = cuts;
        }
        dp[j][j + length - 1] = min;
      }
    }
    length++;
  }

  return dp[0][dp.length - 1];
};

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

function minCut2(s) {
  let n = s.length;
  let cuts = new Array(n + 1);
  for (let i = 0; i <= n; i++) cuts[i] = i - 1;

  for (let i = 0; i < n; i++) {
    for (
      let j = 0;
      j <= i && i + j < n && s[i - j] === s[i + j];
      j++ // odd length palindrome
    ) {
      cuts[i + j + 1] = Math.min(cuts[i + j + 1], 1 + cuts[i - j]);
      console.log(cuts, i, j);
    }

    for (
      let j = 1;
      j - 1 <= i && i + j < n && s[i - j + 1] === s[i + j];
      j++ // even length palindrome
    ) {
      cuts[i + j + 1] = Math.min(cuts[i + j + 1], 1 + cuts[i - j + 1]);
      console.log(cuts, i, j);
    }
  }
  console.log(cuts);
  return cuts[n];
}

console.log(minCut2("abcbm"));
