

class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
};

// {
//     val: 1,
//         neighbors: [{ val: 2, neighbors: [Array] }, { val: 4, neighbors: [Array] }]
// }

function cloneGraphGenrator(array) {
    // [[2, 4], [1, 3], [2, 4], [1, 3]]
    let a = new Node(1);
    let b = new Node(2);
    let d = new Node(4);
    let c = new Node(3);

    a.neighbors.push(b, c);
    b.neighbors.push(a, d);
    d.neighbors.push(b, c);
    c.neighbors.push(a, d);
    return a;
}
function cloneGraphGenrator2(array) {
    // [[2, 4], [1, 3], [2, 4], [1, 3]]
    let a = new Node();

    return a;
}

var cloneGraph = function (node) {
    // console.log(node);

    let hMap = new Map();

    function clone(node) {
        if (hMap.has(node)) {
            // console.log(node);
            return hMap.get(node);
        }

        let copy = new Node(node.val);
        hMap.set(node, copy);
        node.neighbors.forEach(element => {
            copy.neighbors.push(clone(element))
        });
        // for (const key in node.neighbors) {
        //     console.log(key);

        // }
        return copy;
    }

    return clone(node);

};
let g = cloneGraphGenrator2();
console.log(cloneGraph(g));