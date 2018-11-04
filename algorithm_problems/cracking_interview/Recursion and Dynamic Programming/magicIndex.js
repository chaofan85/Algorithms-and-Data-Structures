function magicIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) return i;
  }
  return -1;
}

function magicIndex2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    console.log(mid);
    if (arr[mid] === mid) return mid;
    if (arr[mid] > mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(magicIndex2([-1, 0, 1, 2, 3, 4, 6]));
