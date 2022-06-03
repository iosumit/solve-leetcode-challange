import Case from "./cases.js";
// import ca from "./lib.js";
// compareArray = ca.compareArray;


const cases = [
    new Case([-4, -1, 0, 3, 10], [0, 1, 9, 16, 100]),
    new Case([-7, -3, 2, 3, 11], [4, 9, 9, 49, 121]),
    new Case([-1], [1]),
    new Case([-3, 0, 2], [0, 4, 9]),
    new Case([-1, 0], [0, 1]),
    new Case([-2, -1, 0], [0, 1, 4]),
]

var sortedSquares = function (nums) {
    const queue = [];
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (nums[i] <= 0) {
            queue.splice(0, 0, element * element);
        } else {
            result.push(element * element)
        }
    }
    // console.log(queue, result);
    if (result.length == 0) return queue;
    let i = 0;
    while (queue.length > 0 && result.length > i) {
        if (queue[0] <= result[i]) {
            const current = queue.shift();
            result.splice(i, 0, current);
        }
        i++;
    }
    if (queue.length > 0) {
        return [...result, ...queue];
    }
    return result;
};
cases.forEach(element => {
    let a = sortedSquares(element.nums);
    console.log("ANS", a, element.ans);
});