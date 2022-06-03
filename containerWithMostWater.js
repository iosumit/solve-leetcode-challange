class Case {
    constructor(nums, ans) {
        this.nums = nums;
        this.ans = ans;
    }
}
const c = [
    new Case([1, 8, 6, 2, 5, 4, 8, 3, 7], 49),
    new Case([1, 1], 1),
    new Case([28, 342, 418, 485, 719, 670, 878, 752, 662, 994, 654, 504, 929, 660, 424, 855, 922, 744, 600, 229, 728, 33], 0)
]

const containerWithMostWater = (heights) => {

    //---------------Time complexity => O(n2)------------------//
    // let areas = [];
    // for (let i = 0; i < height.length - 1; i++) {
    //     const startHeight = height[i];
    //     for (let j = i + 1; j < height.length; j++) {
    //         const endheight = height[j];
    //         const width = j - i;
    //         let area = Math.min(startHeight, endheight) * width;
    //         if (area > mArea)
    //             mArea = area;
    //         // areas.push(Math.min();
    //     }
    // }
    // return mArea; //Math.max(...areas);

    //---------------Time complexity => O(n)------------------//
    let mArea = 0;
    let left = 0, right = heights.length - 1;
    while (left < right) {
        const currentArea = getMin(heights[left], heights[right]) * (right - left);
        const leftHeight = heights[left];
        const rightHeight = heights[right];
        if (currentArea > mArea)
            mArea = currentArea;
        if (leftHeight > rightHeight) {
            right--;
        } else {
            left++;
        }
    }
    return mArea;
}
const getMax = function (a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
const getMin = function (a, b) {
    if (a < b) {
        return a;
    }
    return b;
}
console.log(containerWithMostWater(c[0].nums), c[0].ans);

// var fs = require("fs");
// fs.readFile("./testcase.webarchive", function (text) {
//     console.log(text)
//     // var textArray = text.split(",")
//     // console.log(textArray)
// });
// var fs = require("fs");
// var text = fs.readFileSync("./testcase.webarchive");
// var textByLine = text.split(",")
