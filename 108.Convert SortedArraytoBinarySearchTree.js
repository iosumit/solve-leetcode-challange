import Case from "./cases.js";
import { TreeNode, TreeNodeGenerator } from "./lib.js";
const generator = new TreeNodeGenerator();

const cases = [
    new Case([-10, -3, 0, 5, 9], [0, -3, 9, -10, null, 5]),
    new Case([1, 3], [3, 1]),
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (!nums.length) {
        return null;
    }
    function build(l, r) {
        if (l > r) {
            return null;
        }
        let mid = Math.floor((l + r) / 2);
        let node = new TreeNode(nums[mid]);
        node.left = build(l, mid - 1);
        node.right = build(mid + 1, r);
        return node;
    }
    let root = build(0, nums.length - 1);
    // console.log(root)
    return root;

};


cases.forEach(element => {
    let a = sortedArrayToBST(element.nums, element.target);
    console.log("ANS", generator.bfsVisit(a), element.ans);
});