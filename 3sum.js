import Case from "./cases.js";

const cases = [
    new Case([-1, 0, 1, 2, -1, -4], [[-1, -1, 2], [-1, 0, 1]]),
    new Case([], []),
    new Case([0], []),
    new Case(
        [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4], [[-4, 0, 4], [-4, 1, 3], [-3, -1, 4], [-3, 0, 3], [-3, 1, 2], [-2, -1, 3], [-2, 0, 2], [-1, -1, 2], [-1, 0, 1]])
];

var threeSum = function (nums) {
    //---------XXXXXXXXX------//
    // let myMap = {};
    // let set = new Set();
    // let result = [];
    // let setres = [];

    // for (let i = 0; i < nums.length; i++) {
    //     const a = nums[i];
    //     // set.add(i);
    //     for (let j = 0; j < nums.length && i != j; j++) {
    //         const b = nums[j];
    //         for (let k = 0; k < nums.length && j != k && k != i; k++) {
    //             const c = nums[k];
    //             let sum = a + b + c;
    //             if (sum == 0) {
    //                 if (setres.length > 0) {
    //                     for (let j = 0; j < setres.length; j++) {
    //                         const element = setres[j];
    //                         console.log(element, [a, b, c]);
    //                         if (!element.has(a) && !element.has(b) && !element.has(c)) {
    //                             result.push([a, b, c]);
    //                             let s = new Set([a, b, c]);
    //                             setres.push(s);
    //                         }
    //                     }
    //                 } else {
    //                     result.push([a, b, c]);
    //                     let s = new Set([a, b, c]);
    //                     setres.push(s);
    //                 }
    //             }
    //         }
    //     }
    // }
    //---------XXXXXXXXX------//

    let result = [];
    nums.sort((a, b) => a - b);

    // result = nums;
    // return result;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        if (i > 0 && element == nums[i - 1]) {
            continue;
        }
        let l = i + 1, r = nums.length - 1;

        while (l < r) {
            let _threeSum = element + nums[l] + nums[r];

            console.log(_threeSum);
            if (_threeSum > 0) {
                r -= 1;
            }
            else if (_threeSum < 0) {
                l += 1;
            } else {
                result.push([element, nums[l], nums[r]])
                l += 1;
                while (nums[l] == nums[l - 1] && l < r) {
                    l += 1;
                }
            }
        }

    }

    return result;
};
cases.forEach(element => {
    let a = threeSum(element.nums);
    console.log("ANS", a, element.ans);
});