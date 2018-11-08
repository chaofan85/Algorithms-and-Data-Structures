function sortedMerge(arr1, arr2) {
  let idx1 = arr1.length - 1;
  let idx2 = arr2.length - 1;
  let idxM = idx1 + idx2 + 1;

  while (idx2 >= 0) {
    if (idx1 >= 0 && arr1[idx1] > arr2[idx2]) {
      arr1[idxM] = arr1[idx1];
      idx1--;
    } else {
      arr1[idxM] = arr2[idx2];
      idx2--;
    }
    idxM--;
  }
  return arr1;
}

console.log(sortedMerge([1, 3, 5], [2, 4, 5, 6]));
