import Case from "./cases.js";
import { TreeNodeGenerator, TreeNode } from "./lib.js";
let treeNodeGenerator = new TreeNodeGenerator();

const cases = [
    new Case(treeNodeGenerator.build([4, 2, 7, 1, 3, 6, 9]), [4, 7, 2, 9, 6, 3, 1]),
    new Case(treeNodeGenerator.build([2, 1, 3]), [2, 3, 1]),
    new Case(treeNodeGenerator.build([]), []),
];
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.stack = [];
    while (root) {
        this.stack.push(root);
        root = root.left;
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    let top = this.stack.pop();
    let node = node.right;
    while (node) {
        this.stack.push(node);
        node = node.left;
    }
    return top.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
cases.forEach(element => {
    let a = invertTree(element.nums, element.target);
    console.log("ANS", treeNodeGenerator.bfsVisit(a), element.ans);
});
treeNodeGenerator.build([4, 2, 1, 3])