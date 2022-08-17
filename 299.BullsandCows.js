import Case from "./cases.js";

const cases = [
    new Case("1807", "1A3B", "7810"),
    new Case("1123", "1A1B", "0111"),
    new Case("1122", "3A0B", "1222"),
];
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let bulls = 0;
    let cows = 0;
    let _m = new Map();
    for (let i = 0; i < secret.length; i++) {
        const s = secret[i];
        const g = guess[i];
        if (s == g) {
            bulls++;
            continue;
        }
        if (_m.has(s)) {
            _m.set(s, _m.get(s) + 1);
        } else {
            _m.set(s, 1);
        }
    }
    // console.log(_m);
    for (let i = 0; i < secret.length; i++) {
        const s = secret[i];
        const g = guess[i];
        // if (s == g) {
        //     bulls++;
        //     _m.set(g, _m.get(g) - 1);
        //     continue;
        // }
        if (s != g && _m.has(g) && _m.get(g) > 0) {
            cows++;
            _m.set(g, _m.get(g) - 1);
        }
    }
    // console.log(_m);


    return bulls + "A" + cows + "B";
};


cases.forEach(element => {
    let a = getHint(element.nums, element.target);
    console.log("ANS", a, element.ans);
});