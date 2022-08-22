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
    new Case(listNodeGenerator([1, 2, 3, 4, 5]), [1, 2, 3, 5], 2),
    new Case(listNodeGenerator([1]), [], 1),
    new Case(listNodeGenerator([]), [], 1),
    new Case(listNodeGenerator([1, 2]), [1], 1),
    new Case(listNodeGenerator([1, 2]), [1], 2),
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    if (!head) {
        return head;
    }

    let slow = head;
    let count = 0;
    while (slow) {
        count += 1;
        slow = slow.next;
    }

    let c = 0;
    if (count == c) {
        return null;
    } else if (n == count) {
        return head.next;
    }
    count = count - n;
    let start = head;
    while (c <= count && head) {
        if ((c == count - 1)) {
            head.next = !head.next ? null : head.next.next;
            break;
        }
        head = head.next;
        c += 1;
    }
    return start;

};
// let a = mergeTwoLists(cases[0].nums, cases[0].target);
// console.log("ANS", listVisitor(a), cases[0].ans);
cases.forEach(element => {
    let a = removeNthFromEnd(element.nums, element.target);
    console.log("ANS", listVisitor(a), element.ans);
});