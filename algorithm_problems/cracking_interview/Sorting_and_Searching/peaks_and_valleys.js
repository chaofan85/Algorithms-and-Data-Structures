/*
Peaks and Valleys: In an array of integers, a "peak" is an element
which is greater than or equal to the adjacent integers and a "valley"
is an element which is less than or equal to the adjacent integers.
For example, in the array {5, 8, 6, 2, 3, 4, 6}, {8, 6} are peaks
and {5, 2} are valleys. Given an array of integers, sort the array
into an alternating sequence of peaks and valleys.

EXAMPLE
Input: {5, 3, 1, 2, 3}
Output: {5, 1, 3, 2, 3}
*/

function sortValleyPeak(arr) {
  arr = arr.sort((a, b) => a - b);
  let result = [];
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (i !== j) {
      result.push(arr[j], arr[i]);
    } else {
      result.push(arr[i]);
    }
    i++;
    j--;
  }
  console.log(arr);
  return result;
}

function sortValleyPeak2(arr) {
  for (let i = 1; i < arr.length; i += 2) {
    let maxIdx = maxIndex(arr, i - 1, i, i + 1);
    if (i !== maxIdx) [arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]];
  }
  return arr;
}

function maxIndex(arr, a, b, c) {
  let len = arr.length;
  let aValue = a >= 0 && a < len ? arr[a] : Infinity;
  let bValue = b >= 0 && b < len ? arr[b] : Infinity;
  let cValue = c >= 0 && c < len ? arr[c] : Infinity;

  let max = Math.max(aValue, Math.max(bValue, cValue));

  if (aValue === max) return a;
  if (bValue === max) return b;
  if (cValue === max) return c;
}

console.log(sortValleyPeak2([5, 3, 1, 2, 3]));
