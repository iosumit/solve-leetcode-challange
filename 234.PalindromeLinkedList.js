import Case from "./cases.js";


class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function listNodeGenerator(a) {
    let node;
    if (a.length == 0) {
        return node;
    }
    node = new ListNode(a[0], null);
    let start = node;
    for (let index = 1; index < a.length; index++) {
        let n = new ListNode(a[index]);
        start.next = n;
        start = n;
    }
    return node;
}
function listVisitor(a) {
    let res = [];
    while (a != null) {
        res.push(a.val);
        a = a.next;
    }
    return res;
}
const cases = [
    new Case(listNodeGenerator([1, 2, 3, 4, 5]), false),
    new Case(listNodeGenerator([1, 2, 2, 1]), true),
    new Case(listNodeGenerator([1, 2, 1, 2]), false),
];
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let forward = "";
    let backward = "";
    let fast = head;
    let slow = head;
    let stack = [];
    //fast ✅
    while (fast != null && fast.next != null) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    while (slow) {
        if (stack[stack.length - 1] == slow.val) {
            stack.pop();
        }
        slow = slow.next
    }
    return stack.length == 0;
    console.log(slow.val, stack);
    while (head) {
        forward += head.val;
        backward = head.val + backward;
        head = head.next;
    }
    if (forward === backward) {
        return true;
    }
    return false;
};
// let a = mergeTwoLists(cases[0].nums, cases[0].target);
// console.log("ANS", listVisitor(a), cases[0].ans);
cases.forEach(element => {
    let a = isPalindrome(element.nums);
    console.log("ANS", a, element.ans);
});