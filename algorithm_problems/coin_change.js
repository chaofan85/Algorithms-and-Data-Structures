// https://leetcode.com/problems/coin-change/

// function coinChange(coins, amount, numCoins = 0, memo = {}) {
//   let key = `${coins}-${amount}-${numCoins}`;
//   if (key in memo) return memo[key];
//
//   if (amount === 0) return numCoins;
//   if (coins.length === 0) return -1;
//
//   let coinVal = coins[coins.length - 1];
//   let possibilities = [];
//   for (let quantity = 0; quantity <= amount / coinVal; quantity++) {
//     possibilities.push(
//       coinChange(
//         coins.slice(0, -1),
//         amount - quantity * coinVal,
//         numCoins + quantity,
//         memo
//       )
//     );
//   }
//
//   let filtered = possibilities.filter(num => num !== -1);
//
//   if (filtered.length === 0) {
//     memo[key] = -1;
//     return -1;
//   } else {
//     let best = Math.min(...filtered);
//     memo[key] = best;
//     return best;
//   }
// }

function coinChange(coins, amount, memo = {}) {
  if (amount < 1) return 0;
  if (amount in memo) return memo[amount];

  let min = -1;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > amount) continue;

    let val = coinChange(coins, amount - coins[i], memo);

    // if (val < min) min = val;
    if (min === -1) {
      min = val;
    } else {
      if (val < min) min = val;
    }
  }

  min = min === -1 ? min : min + 1;

  memo[amount] = min;

  return min;
}

// function coinChange(coins, amount) {
//   let max = amount + 1;
//   let arr = new Array(amount + 1);
//   arr.fill(max);
//   arr[0] = 0;
//   for (let i = 1; i <= amount; i++) {
//     for (let j = 0; j < coins.length; j++) {
//       if (coins[j] <= i) {
//         arr[i] = Math.min(arr[i], arr[i - coins[j]] + 1);
//       }
//     }
//   }
//
//   return arr[amount] > amount ? -1 : arr[amount];
// }

console.log(coinChange([186, 419, 83, 408], 6249));
