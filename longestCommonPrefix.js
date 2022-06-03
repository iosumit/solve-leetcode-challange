import Case from "./cases.js";

const cases = [
    new Case(["flower", "flow", "flight"], "fl"),
    new Case(["dog", "racecar", "car"], "")
];

const longestCommonPrefix = (strs) => {
    let common = "";

    // let max = "";
    let min = "";
    let minCount = Infinity;

    for (let i = 0; i < strs.length; i++) {
        const element = strs[i];
        // if (element.length > max.length) {
        //     max = element;
        // }
        if (element.length < minCount) {
            min = element;
            minCount = min.length;
        }
    }

    // let i = 0;
    // let temp = "";
    // while (i < max.length && i < min.length) {
    //     if (max[i] != min[i])
    //         break;
    //     temp += max[i];
    //     i++;
    // }

    for (let i = 0; i < min.length; i++) {
        const short = min[i];
        for (let j = 0; j < strs.length; j++) {
            const element = strs[j][i];
            // console.log(element, short, strs[j]);
            if (short != element) {
                return common;
            }
        }
        common += short;
    }
    // console.log(max, min, strs);

    return common;
}
cases.forEach(element => {
    let a = longestCommonPrefix(element.nums);
    console.log("ANS", a, element.ans, a == element.ans);
});
