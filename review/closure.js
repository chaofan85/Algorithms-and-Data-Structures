function makeCounter(num) {
  var i = num;

  function count() {
    console.log(i);
    i++;
  }

  return count;
}

var count1 = makeCounter(10);
var count2 = makeCounter(100);
count1();
count2();
count1();
count2();
count1();
