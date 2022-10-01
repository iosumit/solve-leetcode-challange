import Case from "./cases.js";

const cases = [
    new Case([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]], [[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]]),
    new Case([[0, 2, 3], [2, 5, 3]], [[0, 3], [5, 0]])
];

function getResult(pos, res, pq, mv) {
    let n = pos.length;
    let mp = {};
    for (let i = 0; i < n; i++) {
        let v = pos[i][1];

        if (v < 0) {
            pq.push(Math.abs(v));
            pq.sort((a, b) => a - b);
            if (pq[pq.length - 1] > mv) {
                mv = pq[pq.length - 1];
                res.push([pos[i][0], mv]);
            }
        } else {
            mp[v] = mp[v] == undefined ? 1 : mp[v] + 1;
            while (mp[pq[pq.length - 1]] > 0) {
                mp[pq[pq.length - 1]]--;
                pq.pop();
            }
            if (pq.length <= 0) {
                if (i == n - 1 || pos[i + 1][0] != pos[i][0]) {
                    res.push([pos[i][0], 0]);
                    mv = 0;
                }
            }
            else if (pq[pq.length - 1] < mv) {
                mv = pq[pq.length - 1];
                res.push([pos[i][0], mv]);
            }
        }

        // if (v >= 0) {
        //     mp[v] = mp[v] == undefined ? 1 : mp[v] + 1;
        //     while (mp[pq[pq.length - 1]] > 0) {
        //         mp[pq[pq.length - 1]]--;
        //         pq.pop();
        //     }
        //     if (pq.length <= 0) {
        //         if (i == n - 1 || pos[i + 1][0] != pos[i][0]) {
        //             res.push([pos[i][0], 0]);
        //             mv = 0;
        //         }
        //     }
        //     else if (pq[pq.length - 1] < mv) {
        //         mv = pq[pq.length - 1];
        //         res.push([pos[i][0], mv]);
        //     }
        // } else {
        //     pq.push(Math.abs(v));
        //     pq.sort((a, b) => a - b);
        //     if (pq[pq.length - 1] > mv) {
        //         mv = pq[pq.length - 1];
        //         res.push([pos[i][0], mv]);
        //     }
        // }
    }
    return res;
};
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
function getSkyline(buildings) {
    let pos = [];
    let res = [];
    let n = buildings.length;
    for (let i = 0; i < n; i++) {
        pos.push([buildings[i][0], - buildings[i][2]]);
        pos.push([buildings[i][1], buildings[i][2]]);
    }
    pos.sort((a, b) => a[0] == b[0] ? a[1] - b[1] :
        a[0] - b[0]);
    let pq = [];
    let mv = 0;
    pq.push(0);
    res = getResult(pos, res, pq, mv);
    return res;
}
cases.forEach(element => {
    let a = getSkyline(element.nums);
    console.log("ANS", a, element.ans, a == element.ans);
});
