class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//     a
//    / \
//   b   c
//  /\    \
// d  e    f

// console.log(a);

// DFS Traversal
// Iterative
// const depthFirstValues = (root) => {
//     if (!root) return [];

//     const stack = [root];
//     const values = [];

//     while (stack.length > 0) {
//         const current = stack.pop();
//         // console.log(current.val);
//         values.push(current.val);

//         if (current.right) stack.push(current.right);
//         if (current.left) stack.push(current.left);

//     }
//     return values;
// }
// Recurrsive solution 
// const depthFirstValues = (root) => {
//     if (!root) return [];

//     const left = depthFirstValues(root.left);   //[b, d, e]
//     const right = depthFirstValues(root.right); //[c, f]

//     return [root.val, ...left, ...right];
// }
// console.log(depthFirstValues(b));

// BFS Traversal
// const breadthFirstValues = (root) => {
//     if (!root) {
//         return [];
//     }
//     const queue = [root];
//     const values = [];

//     while (queue.length > 0) {
//         const current = queue.shift();
//         // console.log(current.val);
//         values.push(current.val);

//         if (current.left) queue.push(current.left);
//         if (current.right) queue.push(current.right);
//     }
//     return values;
// }
const breadthFirstValues = (root) => {
    if (!root) return [];

    const queue = [root];
    const nodes = [];

    while (queue.length > 0) {
        let l = queue.length;
        let level = [];
        for (let i = 0; i < l; i++) {
            let current = queue.shift();
            if (current) {
                level.push(current.val);
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }
        }
        nodes.push(level);
    }
    return nodes;
}
// XxXXXXXXXXXXXXXXXXX
// const breadthFirstValues = (root) => {
//     if (!root) {
//         return [];
//     }

//     const left = breadthFirstValues(root.left);
//     const right = breadthFirstValues(root.right);

//     return [root.val, ...left, ...right,];

// }

console.log(breadthFirstValues(a));

// Tree Sum
// let a = new Node(3);
// let b = new Node(11);
// let c = new Node(4);
// let d = new Node(4);
// let e = new Node(2);
// let f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// const treeSum = (root) => {
//     if (!root) {
//         return 0;
//     }
//     return root.val + treeSum(root.left) + treeSum(root.right);
// };
// console.log(treeSum(a));

// let a = new Node(5);
// let b = new Node(11);
// let c = new Node(3);
// let d = new Node(4);
// let e = new Node(15);
// let f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// const minValTree = (node) => {
//     if (!node) return Infinity;
//     return Math.min(minValTree(node.left), minValTree(node.right), node.val);
// }
// console.log(minValTree(a));