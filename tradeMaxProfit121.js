import Case from "./cases.js";
import fs from "fs";

const cases = [
    new Case([7, 1, 5, 3, 6, 4], 5),
    new Case([7, 6, 4, 3, 1], 0),
    new Case([2, 1, 2, 1, 0, 1, 2], 2),
];

var maxProfit = function (prices) {
    let maxProfit = 0;
    // let con = 0;

    // let l = 0, r = l + 1;
    // while (l < prices.length - 1 && l < r) {
    //     // console.log(prices[r], prices[l], l, r);

    //     while (l < prices.length - 2 && prices[l] > prices[r]) {
    //         l++;
    //         r = l + 1;
    //     }
    //     // console.log(prices[r], prices[l], l, r);
    //     let p = prices[r] - prices[l];
    //     if (p > maxProfit) {
    //         maxProfit = p;
    //     }
    //     r++;
    //     if (r >= prices.length) {
    //         l++;
    //         r = l + 1;
    //     }
    // }
    let l = 0, r = l + 1;
    while (r < prices.length) {
        if (prices[r] > prices[l]) {
            let p = prices[r] - prices[l];
            maxProfit = maxProfit < p ? p : maxProfit;
        } else {
            l = r;
        }
        r++;
    }

    return maxProfit;
};

cases.forEach(element => {
    let a = maxProfit(element.nums);
    console.log("ANS", a, element.ans);
});
// var fs = import("fs");
// var text = fs.readFileSync("./testcase/tradeMaxProfit121.txt");
// // var textByLine = text.split(",")
// console.log(text.indexOf(657));
// console.log(text[2]);