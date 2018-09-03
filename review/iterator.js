function* myGenerator() {
  console.log('first');
  yield 42;
  console.log('second');
  yield 100;
}

let gen = myGenerator();
console.log(gen.next());
console.log(gen.next());
