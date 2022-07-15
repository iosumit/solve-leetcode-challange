import Case from "./cases.js";

const cases = [
    new Case(2, 2),
    new Case(3, 3),
    new Case(5, 8),
];
// You are climbing a staircase.It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.In how many distinct ways can you climb to the top ?

var climbStairs = function (n) {

    let m = new Map();

    function doSteps(steps) {
        if (steps == n) {
            return 1;
        } else if (steps > n) {
            return 0;
        } else if (m.has(steps)) {
            return m.get(steps);
        } else {
            // console.log(steps);
            let stepOne = doSteps(steps + 1);
            let stepTwo = doSteps(steps + 2);
            // if (stepOne != 0) {
            m.set(steps + 1, stepOne);
            // } if (stepTwo != 0) {
            m.set(steps + 2, stepTwo);
            // }
            return stepOne + stepTwo;
        }
    }
    return doSteps(0);
    //Bottom Up
    // function doSteps(steps) {
    //     // console.log(st)
    //     if (steps == 0) {
    //         return 1;
    //     } else if (steps < 0) {
    //         return 0;
    //     } else if (m.has(steps)) {
    //         return m.get(steps);
    //     } else {

    //         let stepOne = doSteps(steps - 1);
    //         let stepTwo = doSteps(steps - 2);
    //         if (stepOne != 0) {
    //             m.set(steps - 1, stepOne);
    //         } if (stepTwo != 0) {
    //             m.set(steps - 2, stepTwo);
    //         }
    //         // console.log(m.has(stepOne - 2));
    //         return stepOne + stepTwo;
    //     }
    // }
    // return doSteps(n);


    // let one = 1, two = 1;

    // for (let i = 0; i < n; i++) {
    //     let temp = one;
    //     one = one + two;
    //     two = temp;
    // }

    return one;

};

cases.forEach(element => {
    let a = climbStairs(element.nums);
    console.log("ANS", a, element.ans);
});