function multiply(a, b) {
  if (b === 1) return a;
  return a + multiply(a, b - 1);
}

console.log(multiply(5432343, 42345236));
