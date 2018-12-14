/*
https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number could represent.

Example:
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

var letterCombinations = function(digits) {
  if (!digits.length) return [];
  let map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };
  if (digits.length === 1) return map[digits];
  let result = map[digits[0]];
  for (let i = 1; i < digits.length; i++) {
    result = combine(result, map[digits[i]]);
  }

  return result;
};

function combine(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push(arr1[i] + arr2[j]);
    }
  }
  return result;
}

console.log(letterCombinations("23"));
