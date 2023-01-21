import Case from "./cases.js";

const cases = [
    new Case([4, 5, 0, -2, -3, 1], 7, 5),
    new Case([5], 0, 9),
];
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {

    let prefixMode = 0, res = 0;
    let modGroup = Array(k).fill(0);
    modGroup[0] = 1;
    for (const num of nums) {
        prefixMode = (prefixMode + num % k + k) % k;
        res += modGroup[prefixMode];
        modGroup[prefixMode]++;
    }
    return res;
};

cases.forEach(element => {
    let a = subarraysDivByK(element.nums, element.target, element.target1);
    console.log("ANS", a, element.ans);
});