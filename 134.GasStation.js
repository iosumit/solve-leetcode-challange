/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let gassum = gas.reduce((a, b) => a + b, 0);
    let costsum = cost.reduce((a, b) => a + b, 0);

    if (gassum < costsum) return - 1;
    let res = 0, total = 0;
    for (let i = 0; i < gas.length; i++) {
        total += (gas[i] - cost[i]);

        if (total < 0) {
            total = 0;
            res = i + 1;
        }
    }
    return res;
};

// let gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2];
let gas = [2, 3, 4], cost = [3, 4, 3];

console.log(canCompleteCircuit(gas, cost));