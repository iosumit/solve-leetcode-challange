import Case from "./cases.js";
import { TreeNodeGenerator, TreeNode } from "./lib.js";
let treeNodeGenerator = new TreeNodeGenerator();

const cases = [
    new Case(treeNodeGenerator.build([3, 9, 20, null, null, 15, 7]), true),
    new Case(treeNodeGenerator.build([1, 2, 2, 3, 3, null, null, 4, 4]), false),
    new Case(treeNodeGenerator.build([1, 1, 2]), true),
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) {
        return true;
    }
    let is = isBalanced(root.left) && isBalanced(root.right);
    if (!is) return false;
    // console.log(root)
    // console.log(root.right);
    // console.log(root.left);
    let rh = height(root.right);
    let lh = height(root.left);
    // console.log(rh, lh);
    if (((rh - lh > 1) || (lh - rh > 1))) {
        return false;
    }
    return true;
};
function height(root) {
    if (!root) {
        return 0;
    }
    let rh = height(root.right);
    let lh = height(root.left);
    let res = 1 + ((rh < lh) ? lh : rh)
    return res;
}


cases.forEach(element => {
    let a = isBalanced(element.nums, element.target);
    console.log("ANS", a, element.ans);
});