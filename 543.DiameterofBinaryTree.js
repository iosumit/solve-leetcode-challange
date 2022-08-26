import Case from "./cases.js";
import { TreeNodeGenerator, TreeNode } from "./lib.js";
let treeNodeGenerator = new TreeNodeGenerator();

const cases = [
    new Case(treeNodeGenerator.build([1, 2, 3, 4, 5]), 3),
    new Case(treeNodeGenerator.build([1, 2]), 1),
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let max = 0;
    function dfs(node) {
        if (!node) {
            return 0;
        }
        let r = dfs(node.right);
        let l = dfs(node.left);

        let height = Math.max(r, l) + 1;

        max = Math.max(height, r + l + 1, max);
        return height
    }

    dfs(root);
    // console.log(max)
    return max - 1;
};


cases.forEach(element => {
    let a = diameterOfBinaryTree(element.nums, element.target);
    console.log("ANS", a, element.ans);
});