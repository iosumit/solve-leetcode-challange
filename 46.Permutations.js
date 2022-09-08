import Case from "./cases.js";

const cases = [
    new Case([1, 2, 3], [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]),
    new Case([0, 1], [[0, 1], [1, 0]]),
    new Case([1], [[1]]),
];
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];
    // console.log(nums)
    if (nums.length == 1) {
        return [Array.from(nums)];
    }
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let n = nums.shift();
        let per = permute(nums);
        for (let o of per) {
            o.push(n);
            res.push(o);
        }
        nums.push(n);
    }
    return res;

    // let res = [];
    // function dfs(cur, left) {
    //     if (nums.length == cur.length) {
    //         res.push(Array.from(res));
    //     }
    //     let c = left;
    //     for (let i = 0; i < left.length; i++) {
    //         cur.push(left[i]);
    //         c.splice(i, 1);
    //         dfs(cur, c);
    //         cur.pop();
    //         res.in
    //     }

    // }
};
cases.forEach(element => {
    let a = permute(element.nums, element.target, element.target1);
    console.log("ANS", a, element.ans);
});