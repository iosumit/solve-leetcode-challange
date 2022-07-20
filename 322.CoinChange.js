import Case from "./cases.js";

const cases = [
    new Case([1, 2, 5], 3, 11),
    new Case([2], -1, 3),
    new Case([1], 0, 0),
];

var coinChange = function (coins, amount) {
    // let result = amount;
    // let m = new Map();

    // function findCoins(remain) {
    //     if (remain == 0) return 1;
    //     else if (remain < 0) return remain;
    //     else if (m.has(remain)) return m.get(remain);
    //     else {
    //         for (let i = 0; i < coins.length; i++) {
    //             const element = coins[i];
    //             let count = Math.min(1 + findCoins(remain - element), findCoins(remain));
    //             m.set(remain - element, count);
    //         }
    //     }
    // }
    // result = findCoins(amount);
    // return result == 0 ? -1 : result;

    // let dp = new Map();
    // for (let i = 1; i <= amount + 2; i++) {
    //     dp.set(amount + 1);
    // }
    // dp.set(0, -1);

    // for (let i = 0; i < amount + 1; i++) {
    //     let a = i;
    //     for (let j = 0; j < coins.length; j++) {
    //         const element = coins[j];
    //         if (a - element >= 0) {
    //             dp.set(a, Math.min(dp.get(a), dp.get(a - element)));
    //         }
    //     }

    // }

    // return dp.get(amount) != amount + 1 ? dp.get(amount) : -1;
    let arr = new Array(amount + 1).fill(-1)
    arr[0] = 0

    for (let i = 0; i < amount; i += 1) {
        if (arr[i] != -1) {
            for (let coin of coins) {
                let arrPos = arr[i + coin]
                if ((i + coin <= amount) && (arrPos == -1 || arrPos > (arr[i] + 1))) {
                    arr[i + coin] = arr[i] + 1;
                }
            }
        }
    }

    return arr[amount];
};

cases.forEach(element => {
    let a = coinChange(element.nums, element.target);
    console.log("ANS", a, element.ans);
});