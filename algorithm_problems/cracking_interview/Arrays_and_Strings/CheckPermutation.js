function checkPermutation(str1, str2) {
  return (
    str1
      .split("")
      .sort()
      .join() ===
    str2
      .split("")
      .sort()
      .join()
  );
}

function checkPermutation2(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freq = {};

  for (let i = 0; i < str1.length; i++) {
    if (!freq[str1[i]]) {
      freq[str1[i]] = 1;
    } else {
      freq[str1[i]]++;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (!freq[str2[j]]) {
      return false;
    } else {
      freq[str2[j]]--;
    }
  }

  for (let char in freq) {
    if (freq[char] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(checkPermutation2("abcde", "edbac"));
