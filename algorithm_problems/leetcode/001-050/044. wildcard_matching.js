// https://leetcode.com/problems/wildcard-matching/description/

var isMatch = function(s, p) {
  let table = new Array(s.length + 1);
  for (let i = 0; i < table.length; i++) {
    table[i] = new Array(p.length + 1);
  }

  table[0][0] = true;
  for (let i = 0; i < p.length; i++) {
    table[0][i + 1] = p[i] === "*" ? table[0][i] : false;
  }

  for (let i = 1; i < table.length; i++) {
    for (let j = 0; j < table[0].length; j++) {
      if (j === 0) {
        table[i][j] = false;
      } else if (s[i - 1] === p[j - 1] || p[j - 1] === "?") {
        table[i][j] = table[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        table[i][j] = table[i][j - 1] || table[i - 1][j];
      } else {
        table[i][j] = false;
      }
    }
  }
  return table[table.length - 1][table[0].length - 1];
};

console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "*"));
console.log(isMatch("cb", "?a"));
console.log(isMatch("aab", "c*a*b"));
console.log(isMatch("abcde", "a*c?b"));
