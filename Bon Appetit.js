// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
  const total = bill.reduce((sum, el) => sum + el);
  if ((total - bill[k]) / 2 === b) {
    console.log('Bon Appetit');
  } else {
    console.log(b - (total - bill[k]) / 2);
  }
}

bonAppetit([2, 10, 3, 9], 1, 12);
bonAppetit([2, 10, 3, 9], 1, 7);
