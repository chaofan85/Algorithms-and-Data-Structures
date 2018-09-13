function isUnique(str) {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }

  return true;
}

function isUnique2(str) {
  let chars = {};
  for (let i = 0; i < str.length; i++) {
    if (!chars[str[i]]) {
      chars[str[i]] = true;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isUnique("hello"));
console.log(isUnique("abcde"));
console.log(isUnique2("hello"));
console.log(isUnique2("abcde"));
