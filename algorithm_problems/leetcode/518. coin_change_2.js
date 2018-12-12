// https://leetcode.com/problems/coin-change-2/description/

var change = function(amount, coins) {
  let arr = new Array(amount + 1);

  arr.fill(0);
  arr[0] = 1;

  coins.forEach(coin => {
    for (let i = coin; i <= amount; i++) {
      arr[i] += arr[i - coin];
    }
  });

  return arr[amount];
};

// function change(amount, coins, memo = {}) {
//   let key = `${amount}-${coins.join(',')}`;
//   if (key in memo) {
//     return memo[key];
//   }

//   if (amount === 0) return 1;
//   if (coins.length === 0) return 0;

//   let coinVal = coins[coins.length - 1];

//   let total = 0;
//   for (let quantity = 0; quantity <= amount / coinVal; quantity++) {
//     total += change(amount - quantity * coinVal, coins.slice(0, -1), memo);
//   }

//   memo[key] = total;
//   return total;
// }

// function coinChange(coins, amount, index = 0) {
//   if (amount === 0) return 1;
//   if (amount < 0) return 0;

//   let result = 0;
//   for (let i = index; i < coins.length; i++) {
//     result += coinChange(coins, amount - coins[i], i);
//   }

//   return result;
// }

console.log(change(4, [1, 2]));
