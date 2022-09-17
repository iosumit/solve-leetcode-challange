import Case from "./cases.js";

const cases = [
    new Case(["abcd", "dcba", "lls", "s", "sssll"], [[0, 1], [1, 0], [3, 2], [2, 4]]),
    new Case(["bat", "tab", "cat"], [[0, 1], [1, 0]]),
    new Case(["a", ""], [[0, 1], [1, 0]]),
];

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
    let res = [];
    let hMap = new Map();
    for (let i = 0; i < words.length; i++) {
        let rev = words[i].split("").reverse().join("");
        hMap.set(rev, i);
    }
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j <= words[i].length; j++) {
            let _l = words[i].substring(0, j);
            let _r = words[i].substring(j);
            // console.log(_l, _r);
            if (hMap.has(_l) && isPalindrome(_r) && hMap.get(_l) != i) {
                res.push([i, hMap.get(_l)]);
            }
            if (_l.length && hMap.has(_r) && isPalindrome(_l) && hMap.get(_r) != i) {
                res.push([hMap.get(_r), i]);
            }
        }
    }



    // O(n k^2)
    // let res = [];
    // let hMap = new Map();
    // for (let i = 0; i < words.length; i++) {
    //     hMap.set(words[i], i);
    // }
    // if (hMap.has("")) {
    //     let emptyStrI = hMap.get("");
    //     let i = 0;
    //     while (i < words.length) {
    //         if (i != emptyStrI && isPalindrome(words[i])) { res.push([emptyStrI, i]); res.push([i, emptyStrI]) }
    //         i++;
    //     }
    // }
    // for (let i = 0; i < words.length; i++) {
    //     let rev = words[i].split("").reverse().join("");
    //     if (hMap.has(rev) && hMap.get(rev) != i) { res.push([i, hMap.get(rev)]) }
    // }

    // for (let i = 0; i < words.length; i++) {
    //     for (let j = 1; j < words[i].length; j++) {
    //         let _l = words[i].substring(0, j);
    //         let _r = words[i].substring(j);
    //         console.log(_l, _r);
    //         if (isPalindrome(_l)) {
    //             let revR = _r.split("").reverse().join("");
    //             if (hMap.has(revR))
    //                 res.push([i, hMap.get(revR)]);
    //         }
    //         if (isPalindrome(_r)) {
    //             let revL = _l.split("").reverse().join("");
    //             if (hMap.has(revL))
    //                 res.push([i, hMap.get(revL)]);
    //         }
    //     }
    // }
    return res;
};
function isPalindrome(str) {
    let l = 0;
    let r = str.length - 1;
    let s = "";
    while (l < r) {
        if (str.charAt(l++) != str.charAt(r--)) return false;
    }
    return true;
}

cases.forEach(element => {
    let a = palindromePairs(element.nums, element.target);
    console.log("ANS", a, element.ans);
});