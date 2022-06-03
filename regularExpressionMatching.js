Constraints:
// 1 <= s.length <= 20
// 1 <= p.length <= 30
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.
// expected 's' to have 1 <= size <= 20 but got 0
// 's' must consist of values from a to z only
//--------------
// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
const cases = [
    {
        s: "aa", p: "a", ans: false
    },
    {
        s: "aa", p: "a*", ans: true
    },
    {
        s: "ab", p: ".*", ans: true
    },
    {
        s: "aa", p: ".*.", ans: true
    },
    {
        s: "aa", p: "..", ans: true
    },
    {
        s: "ab", p: "..", ans: true
    },
    {
        s: "aba", p: ".*", ans: true
    },
    {
        s: "abc", p: ".*", ans: true
    },
    {
        s: "abc", p: "*", ans: false //Invalid
    },
    {
        s: "abc", p: "...", ans: true
    },
    {
        s: "abc", p: "....", ans: false
    },
    {
        s: "abc", p: "...*", ans: true
    },
];
const regularExpresionMatching = (s, p) => {
    if (p.length < 0) {
        return false;
    }





    return regularExpresionMatching(s, p)
}