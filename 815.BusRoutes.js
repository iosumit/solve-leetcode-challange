import Case from "./cases.js";

const cases = [
    new Case([[1, 2, 7], [3, 6, 7]], 2, 1, 6),
    new Case([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], -1, 15, 12),
];
/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    let visitedStop = new Set();
    let visitedBuses = new Set();
    let routeMap = {};
    for (let i = 0; i < routes.length; i++) {
        for (let j = 0; j < routes[i].length; j++) {
            let r = routes[i][j];
            routeMap[r] = routeMap[r] == undefined ? [i] : [...routeMap[r], i];
        }
    }
    // console.log(routeMap, source, target);
    let queue = [];
    let busCount = 0;
    queue.push(source);
    visitedStop.add(source)
    while (queue.length) {
        let l = queue.length;
        for (let i = 0; i < l; i++) {
            let s = queue.shift();
            if (s == target) {
                return busCount;
            }
            for (const bus of routeMap[s]) {
                if (visitedBuses.has(bus)) {
                    continue;
                }
                visitedBuses.add(bus);
                for (const stop of routes[bus]) {
                    if (visitedStop.has(stop)) {
                        continue;
                    }
                    visitedStop.add(stop);
                    queue.push(stop);
                }
            }
            // console.log(visitedBuses, visitedStop, queue, s);
        }
        busCount += 1;
    }
    // while (stack.length) {
    //     let c = stack.pop();
    //     if (c == target) {
    //         return busCount;
    //     }
    //     visited.add(c);
    //     for (let i = 0; i < routeMap[c].length; i++) {
    //         const bus = routeMap[c][i];
    //         for (let j = 0; j < routes[bus].length; j++) {
    //             const r = routes[bus][j];
    //             if (!visited.has(r)) {
    //                 stack.push(r);
    //             }
    //         }
    //         busCount += 1;
    //     }
    //     // console.log(c, stack)
    // }
    return -1;
};
cases.forEach(element => {
    let a = numBusesToDestination(element.nums, element.target, element.target1);
    console.log("ANS", a, element.ans);
});