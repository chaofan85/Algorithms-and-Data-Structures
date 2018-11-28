/*
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

const isPalidrome = str => {
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
};
const helper = (str, startIndex, partition, result) => {
  console.log(startIndex, str.length, partition);
  if (startIndex === str.length) {
    result.push(partition.slice());
    return;
  }

  for (let i = startIndex; i < str.length; i++) {
    let subStr = str.slice(startIndex, i + 1);
    if (!isPalidrome(subStr)) continue;

    partition.push(subStr);
    // console.log(partition);
    helper(str, i + 1, partition, result);
    partition.pop();
    // console.log(partition);
  }
};

const partition = str => {
  if (str === null || str.length === 0) return [];

  let result = [];

  helper(str, 0, [], result);

  return result;
};

console.log(partition("abb"));
