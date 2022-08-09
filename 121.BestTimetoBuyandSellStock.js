import Case from "./cases.js";

const cases = [
    new Case([7, 1, 5, 3, 6, 4], 5),
    new Case([7, 6, 4, 3, 1], 0),
    new Case([1, 2], 1),
    new Case([1, 4, 2], 3),
];

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let _l = 0;
    let _r = 1;
    let _mProfit = 0;

    while (_r < prices.length) {
        if (prices[_l] < prices[_r]) {
            let _m = prices[_r] - prices[_l];
            _mProfit = _m > _mProfit ? _m : _mProfit;
        } else {
            _l = _r;
        }
        _r++;
    }
    return _mProfit;
};

cases.forEach(element => {
    let a = maxProfit(element.nums);
    console.log("ANS", a, element.ans);
});