// Objects, Arrays, etc.. are passed by Reference
// meaning when you pass it as an arg, you are giving the exact object in memory
// Primitive types: nums, string, bools.. are pass by Value
// meaning when you pass it as an arg, you are giving a copy of the value

function callee(str) {
  str += '!';
}

function caller() {
  var string = '';
  callee(string);
  console.log(string);
}

caller();
