// https://leetcode.com/problems/partition-equal-subset-sum/description/

var canPartition = function(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i];

  if (sum % 2 !== 0) return false;
  if (nums.includes(sum / 2)) return true;

  nums = nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    let acc = nums[0];
    let stack = [];
    for (let j = i; j < nums.length; j++) {
      if (acc + nums[j] < sum / 2) {
        stack.push(nums[j]);
        acc += nums[j];
      } else if (acc + nums[j] === sum / 2) {
        return true;
      } else {
        if (nums[j] === stack[stack.length - 1]) {
          let top = stack.pop();
          acc -= top;
          acc -= stack.pop();
          acc += top;
          stack.push(top);
          stack.push(nums[j]);
          acc += nums[j];
          if (acc === sum / 2) return true;
        } else {
          acc -= stack.pop();
          stack.push(nums[j]);
          acc += nums[j];
          if (acc === sum / 2) return true;
        }
      }
    }
  }
  return false;
};
//
// var canPartition2 = function(nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) sum += nums[i];
//
//   if (sum % 2 !== 0) return false;
//   if (nums.includes(sum / 2)) return true;
//   let copy = nums.slice(0);
//
//   nums = nums.sort((a, b) => a - b);
//   let left = [];
//   let right = [];
//   let accu = 0;
//   for (let i = 0, j = nums.length - 1; i <= j;) {
//     if (accu += nums[i] )
//     right.push(nums[j]);
//     accu += nums[j];
//
//   }
// }

console.log(canPartition([1, 2, 3, 4, 5, 6, 7]));
// console.log(canPartition([1, 1, 2, 5, 5, 5, 5])); // 24 / 2
