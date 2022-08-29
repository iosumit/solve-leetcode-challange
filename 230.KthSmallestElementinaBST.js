import Case from "./cases.js";
import { TreeNode, TreeNodeGenerator } from "./lib.js";
const generator = new TreeNodeGenerator();

const cases = [
    new Case(generator.build([3, 1, 4, null, 2]), 1, 1),
    new Case(generator.build([1]), 1, 1),
    new Case(generator.build([5, 3, 6, 2, 4, null, null, 1]), 3, 3),
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let found;
    let kth = k;
    function inOrder(node) {
        if (!node || found) {
            return;
        }
        inOrder(node.left);
        kth -= 1;
        if (kth == 0) {
            found = node.val;
        }
        inOrder(node.right);
    }
    inOrder(root)
    return found;
};


cases.forEach(element => {
    let a = kthSmallest(element.nums, element.target);
    console.log("ANS", a, element.ans);
});