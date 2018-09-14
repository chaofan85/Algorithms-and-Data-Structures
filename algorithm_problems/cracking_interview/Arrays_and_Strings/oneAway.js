function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) return false;

  let shorter = str1.length <= str2.length ? str1 : str2;
  let longer = str1.length > str2.length ? str1 : str2;
  let diffs = 0;

  let chars = {};
  for (let i = 0; i < longer.length; i++) {
    if (!chars[str1[i]]) {
      chars[str1[i]] = 1;
    } else {
      chars[str1[i]]++;
    }
  }

  for (let j = 0; j < shorter.length; j++) {
    if (chars[str2[j]] !== undefined) {
      chars[str2[j]]--;
    }
  }

  for (let char in chars) {
    if (chars[char] !== 0) diffs += Math.abs(chars[char]);
  }

  return diffs < 2;
}

console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bae"));
console.log(oneAway("abcccc", "aaacc"));
