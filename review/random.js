function sayName(first, last, ...args) {
  console.log(first);
  console.log(last);
  console.log(args);
}

// spread - when we use ... infront of an array argument,
// we are unpacking the elements (removing the brackets)
// rest - when we use ... infront of a parameter,
// we accept all arguments into that param

sayName('Chao', 'Fan', 'Darryl', 'Randy', 'Colin');
