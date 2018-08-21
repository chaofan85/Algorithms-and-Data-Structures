function permutation(arr) {
  if (arr.length === 1) {
    return [arr];
  }

  let withoutFirst = permutation(arr.slice(1));
  let allPerms = [];
  withoutFirst.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      let newPerm = [...perm.slice(0, i), arr[0], ...perm.slice(i)];
      allPerms.push(newPerm);
    }
  });

  return allPerms;
}

console.log(permutation([1, 2, 3, 4]).length);
