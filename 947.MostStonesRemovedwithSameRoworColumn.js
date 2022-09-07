import Case from "./cases.js";

const cases = [
    new Case([[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]], 5),
    new Case([[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]], 3),
    new Case([[0, 0]], 0),
    new Case([[0, 1], [1, 0]], 0),
    new Case([[0, 1], [1, 0], [1, 1]], 2),
];

class DSU {
    constructor(sets) {
        this.parents = [...Array(sets).keys()]
        this.rank = Array(sets).fill(0)
    }

    find(x) {
        const { parents } = this
        if (parents[x] !== x) {
            parents[x] = this.find(parents[x])
        }
        return parents[x]
    }

    union(x, y) {
        const { parents, rank } = this
        const leaderX = this.find(x)
        const leaderY = this.find(y)
        if (leaderX === leaderY) {
            return false
        } else if (rank[leaderX] < rank[leaderY]) {
            parents[leaderX] = leaderY
        } else {
            if (rank[leaderY] < rank[leaderX]) {
                rank[leaderX]++
            }
            parents[leaderY] = leaderX
        }
        return true
    }
}
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
    const stoneRange = 10000;
    const dsu = new DSU(stoneRange * 2)

    for (const [r, c] of stones) {
        dsu.union(r, c + stoneRange)
    }
    const visited = new Set()
    for (const [r] of stones) visited.add(dsu.find(r))
    return stones.length - visited.size

};
cases.forEach(element => {
    let a = removeStones(element.nums, element.target, element.target1);
    console.log("ANS", a, element.ans);
});