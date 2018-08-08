function saveThePrisoner(n, m, s) {
  const result = (s + (m % n) - 1) % n;
  return result === 0 ? n : result;
}

console.log(saveThePrisoner(3, 7, 3));
console.log(saveThePrisoner(3, 8, 3));
