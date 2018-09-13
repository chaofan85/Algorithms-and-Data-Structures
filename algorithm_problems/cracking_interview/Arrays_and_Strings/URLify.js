function urlify(str, length) {
  let result = "";

  let i = 0;
  while (i < str.length) {
    if (result.length === 0) {
      if (str[i] === " ") {
        i++;
      } else {
        result += str[i];
        i++;
      }
    } else if (result.length < length) {
      if (str[i] !== " ") {
        result += str[i];
        i++;
      } else {
        if (result[result.length - 1] !== " ") {
          result += str[i];
          i++;
        } else {
          i++;
        }
      }
    } else {
      break;
    }
  }

  return result.split(" ").join("%20");
}

console.log(urlify(" Mr    John  Smitasgasdgh    ", 20));
