function quicksort(nums) {
  if (nums.length < 2) return nums;

  let pivot = nums[0];
  let less = [];
  let greater = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) {
      less.push(nums[i]);
    } else {
      greater.push(nums[i]);
    }
  }

  return quicksort(less).concat(pivot, quicksort(greater));
}

console.log(quicksort([7, 4, 3, 1, 5, 5, 7, 1, 4]));
