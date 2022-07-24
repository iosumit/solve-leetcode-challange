// Constraints:
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
    {
        s: "b", p: "a*b", ans: true
    },
    {
        s: "b", p: ".*b", ans: true
    },
];
const regularExpresionMatching = (s, p) => {
    let m = new Map();

    function dfs(i, j) {
        if (m.has("" + i + j)) {
            return m.get("" + i + j);
        }
        if (i >= s.length && j >= p.length) {
            return true;
        } else if (j >= p.length) {
            return false;
        }
        let match = (i < s.length) && (s[i] == p[j] || p[j] == ".");
        if ((j + 1 < p.length) && (p[j + 1] == "*")) {
            let x = dfs(i, j + 2) ||
                (match && dfs(i + 1, j));
            m.set("" + i + j, x);
            return m.get("" + i + j);
        }
        if (match) {
            let x = dfs(i + 1, j + 1);
            m.set("" + i + j, x);
            return m.get("" + i + j);
        }
        return false;
    }

    return dfs(0, 0);
}
// var isMatch = function (s, p) {
//     // TOP DOWN Memoization
//     // console.log(s.length, p.length);

//     function dfs(i, j) {
//         if (i >= s.length && j >= p.length) {
//             return true;
//         }
//         if (j >= p.length) {
//             return false;
//         }
//         let match = i < s.length && (s[i] == p[j] || p[j] == '.');
//         if ((j + 1 < p.length) && (p[j + 1] == '*')) {
//             return (dfs(i, j + 2) || (match && dfs(dfs(i + 1, j))));
//         }
//         if (match) {
//             return dfs(i + 1, j + 1);
//         }
//         return false;
//     }

//     return dfs(0, 0);
// };
let a = regularExpresionMatching(cases[3].s, cases[3].p);
console.log("ANS", a, cases[3].ans);
// cases.forEach(element => {
//     let a = regularExpresionMatching(element.s, element.p);
//     console.log("ANS", a, element.ans);
// });