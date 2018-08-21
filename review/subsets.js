function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  let withoutFirst = subsets(arr.slice(1));
  let withFirst = withoutFirst.map(sub => [arr[0], ...sub]);

  return withFirst.concat(withoutFirst);
  // return [...withFirst, ...withoutFirst];
}

console.log(subsets([1, 2, 3, 4]));
