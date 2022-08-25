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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    function dfs(node) {
        if (!node) {
            return node;
        }
        let r = dfs(node.right);
        let l = dfs(node.left);
        node.left = r;
        node.right = l;
        return node;
    }
    let rev = dfs(root);
    return rev;
};

cases.forEach(element => {
    let a = invertTree(element.nums, element.target);
    console.log("ANS", treeNodeGenerator.bfsVisit(a), element.ans);
});
treeNodeGenerator.build([4, 2, 1, 3])