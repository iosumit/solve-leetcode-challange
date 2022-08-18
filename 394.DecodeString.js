import Case from "./cases.js";

const cases = [
    new Case('3[a]2[bc]', 'aaabcbc'),
    new Case('3[a2[c]]', 'accaccacc'),
    new Case("100[leetcode]",),
    new Case('2[abc]3[cd]ef', 'abcabccdcdcdef'),
];
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let d = dec(s);
    return d;
};

function dec(r, times = 1) {
    let decoded = '';
    for (let i = 0; i < r.length; i++) {
        const c = r[i];
        if (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57) {
            let subString = '';
            let bracket = 1;
            let subNum = '';
            while (r[i] != '[') {
                subNum += r[i];
                i++;
            }
            // console.log(subNum);
            // i++;
            while (bracket != 0) {
                i++;
                if (r[i] == '[') {
                    bracket++;
                    subString += r[i];
                } else if (r[i] == ']') {
                    bracket--;
                    if (bracket != 0) {
                        subString += r[i];
                    }
                } else {
                    subString += r[i];
                }
            }
            // console.log(subString, c, i);
            decoded += dec(subString, parseInt(subNum));
        } else {
            decoded += c;
        }
    }
    // console.log(decoded);
    let subs = '';
    while (times > 0) {
        subs += decoded;
        times--;
    }
    return subs;
}

cases.forEach(element => {
    let a = decodeString(element.nums);
    console.log("ANS", a, element.ans);
});