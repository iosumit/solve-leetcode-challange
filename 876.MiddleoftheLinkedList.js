import Case from "./cases.js";


class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function listNodeGenerator(a) {
    let node = new ListNode(a[0], null);
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
    new Case(listNodeGenerator([1, 2, 3, 4, 5]), [3, 4, 5]),
    new Case(listNodeGenerator([1, 2, 3, 4, 5, 6]), [4, 5, 6],),
    new Case(listNodeGenerator([1]), [1]),
];
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    // O(n)
    // let nodes = [];
    // while (head != null) {
    //     nodes.push(head);
    //     head = head.next;
    // }
    // if (nodes.length % 2 == 0) {
    //     return nodes[(nodes.length / 2)];
    // } else {
    //     return nodes[(nodes.length - 1) / 2];
    // }
    // O(n/2) => O(n)
    let fullVisitNode = head;
    let halfVisitNode = head;
    while (fullVisitNode != null && fullVisitNode.next != null) {
        fullVisitNode = fullVisitNode.next.next;
        halfVisitNode = halfVisitNode.next;
    }
    return halfVisitNode;
};
// let a = reverseList(cases[0].nums, cases[0].target);
// console.log("ANS", listVisitor(a), cases[0].ans);
cases.forEach(element => {
    let a = middleNode(element.nums);
    console.log("ANS", listVisitor(a), element.ans);
});