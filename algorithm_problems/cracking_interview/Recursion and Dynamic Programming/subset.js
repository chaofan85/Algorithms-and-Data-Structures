function subset(nums) {
  if (!nums.length) return [[]];
  let prev = subset(nums.slice(1));
  let first = nums[0];
  let newSet = [];
  for (let i = 0; i < prev.length; i++) {
    newSet.push([...prev[i], first]);
  }

  return [...prev, ...newSet];
}

console.log(subset([1, 2]));
