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
    new Case(listNodeGenerator([1, 2, 3, 4, 5]), [1, 3, 5, 2, 4]),
    new Case(listNodeGenerator([2, 1, 3, 5, 6, 4, 7]), [2, 3, 6, 7, 1, 5, 4]),
    new Case(listNodeGenerator([]), []),
    new Case(listNodeGenerator([1]), [1]),
    new Case(listNodeGenerator([1, 2]), [1]),
    new Case(listNodeGenerator([1, 2]), [1, 2]),
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
var oddEvenList = function (head) {
    if (!head) {
        return head;
    }
    let prevOddHead = null;
    let prevEvenHead = null;
    let start = head;
    let startEven = null;

    let counter = 1;
    while (head) {
        if (counter % 2 != 0) {
            if (prevOddHead) {
                prevOddHead.next = head;
            }
            prevOddHead = head;
        } else {
            if (prevEvenHead) {
                prevEvenHead.next = head;
            } else {
                startEven = head;
            }
            prevEvenHead = head;
        }
        head = head.next;
        counter += 1;
    }
    if (prevEvenHead) {
        prevEvenHead.next = null;
    }
    prevOddHead.next = startEven;
    return start;

};
// let a = mergeTwoLists(cases[0].nums, cases[0].target);
// console.log("ANS", listVisitor(a), cases[0].ans);
cases.forEach(element => {
    let a = oddEvenList(element.nums, element.target);
    console.log("ANS", listVisitor(a), element.ans);
});