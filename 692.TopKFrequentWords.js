import Case from "./cases.js";

const cases = [
    new Case(["i", "love", "leetcode", "i", "love", "coding"], ["i", "love"], 2),
    new Case(["i", "love", "leetcode", "i", "love", "coding"], ["i"], 1),
    new Case(["i", "love", "leetcode", "i", "love", "coding"], ["i", "love", "coding"], 3),
    new Case(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], ["the", "is", "sunny", "day"], 4),
];
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let m = {};
    let r = 0;
    let freq = Array(words.length + 1);
    while (r < words.length) {
        m[words[r]] = m[words[r]] == undefined ? 1 : m[words[r]] + 1;
        r++;
    }

    for (const o in m) {
        freq[m[o]] = freq[m[o]] == undefined ? [o] : [...freq[m[o]], o]
    }
    let occurredMaxK = []
    r = freq.length - 1;
    while (r >= 0) {
        if (freq[r] != undefined) {
            freq[r].sort();
            while (k > 0 && freq[r].length > 0) {
                occurredMaxK.push(freq[r].shift());
                k--;
            }
        }
        r--;
    }
    return occurredMaxK;

};


cases.forEach(element => {
    let a = topKFrequent(element.nums, element.target);
    console.log("ANS", a, element.ans);
});