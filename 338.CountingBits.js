import Case from "./cases.js";

const cases = [
    new Case(2, [0, 1, 1]),
    new Case(5, [0, 1, 1, 2, 1, 2]),
];
var countBits = function (n) {
    let counts = [];
    let m = new Map();
    let time = 0;

    // O(n)
    for (let i = 0; i <= n; i++) {
        let c = i;
        let count = 0;
        while (c) {
            if (m.has(c)) {
                count += m.get(c);
                break;
            } else {
                c = c & (c - 1);
                count++;
            }
            time++;
        }
        m.set(i, count);
        counts.push(count);
    }
    // console.log(time);

    // let offset = 1;

    // for (let i = 0; i <= n; i++) {
    //     m.set(i, 0);
    //     m.set(i + 1, 0);

    //     if (offset * 2 == i) {
    //         offset = i;
    //         console.log("OFFSET", offset);
    //     }
    //     let c = 1 + m.get(Math.abs(i - offset));
    //     console.log(c, m.get(Math.abs(i - offset)),);
    //     m.set(i, c);
    //     counts.push(c);
    // }

    return counts;
};
cases.forEach(element => {
    let a = countBits(element.nums);
    console.log("ANS", a, element.ans);
});