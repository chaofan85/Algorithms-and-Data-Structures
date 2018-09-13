function palindromePermutation(str) {
  str = str.toLowerCase();
  let freq = {};
  let invalid = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    if (!freq[str[i]]) {
      freq[str[i]] = 1;
    } else {
      freq[str[i]]++;
    }
  }

  for (let char in freq) {
    if (freq[char] % 2 === 1) {
      invalid++;
    }
  }

  return invalid < 2;
}

console.log(palindromePermutation("Tactaa Coa"));
