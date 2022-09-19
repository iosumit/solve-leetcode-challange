import Case from "./cases.js";

const cases = [
    new Case(["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"],
        [["root/a/2.txt", "root/c/d/4.txt", "root/4.txt"], ["root/a/1.txt", "root/c/3.txt"]]),
    new Case(["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)"],
        [["root/a/2.txt", "root/c/d/4.txt"], ["root/a/1.txt", "root/c/3.txt"]]),
    new Case(["root/a 1.txt(abcd) 2.txt(efsfgh)", "root/c 3.txt(abdfcd)", "root/c/d 4.txt(efggdfh)"],
        []),
];

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
    let cMap = new Map();
    let curPath = "";

    for (let i = 0; i < paths.length; i++) {
        const p = paths[i];
        const pf = p.split(" ");
        curPath = pf[0];
        for (let c = 1; c < pf.length; c++) {
            const cfL = pf[c].split("(");
            if (cfL.length == 0)
                continue;
            // console.log(cfL);
            let filepath = curPath + "/" + cfL[0];
            // console.log(filepath);
            let content = cfL[1].substring(0, cfL[1].length - 1);
            if (cMap.has(content)) {
                cMap.set(content, [...cMap.get(content), filepath]);
            } else {
                cMap.set(content, [filepath]);
            }
        }
    }
    let res = [];
    for (const o of cMap) {
        if (o[1].length > 1)
            res.push(o[1]);
    }
    return res;

};

cases.forEach(element => {
    let a = findDuplicate(element.nums, element.target);
    console.log("ANS", a, element.ans);
});