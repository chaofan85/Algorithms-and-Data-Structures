function stringCompression(str) {
  let result = "";
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      result += str[i] + counter;
      counter = 1;
    }
  }

  return result;
}

console.log(stringCompression("aaaheechsaaa"));
