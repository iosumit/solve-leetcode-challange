import Case from "./cases.js";
import { TreeNodeGenerator, TreeNode } from "./lib.js";
let treeNodeGenerator = new TreeNodeGenerator();

const cases = [
    new Case(treeNodeGenerator.build([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 3, 8),
    new Case(treeNodeGenerator.build([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 3, 22),
    new Case(treeNodeGenerator.build([0, 1, 1]), 4, 1),
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let count = 0;
    let stack = [];
    function dfs(node) {
        if (!node) return;

        stack.push(node.val);
        dfs(node.left);
        dfs(node.right);
        // console.log(stack);
        let s = 0;
        for (let i = stack.length - 1; i >= 0; i--) {
            s += stack[i];
            if (s == targetSum) {
                count += 1;
                // break;
            }
        }
        stack.pop();
    }
    dfs(root);
    return count;
};


cases.forEach(element => {
    let a = pathSum(element.nums, element.target);
    console.log("ANS", a, element.ans);
});