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
    new Case(listNodeGenerator([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]),
    new Case(listNodeGenerator([1, 2]), [2, 1],),
    new Case(listNodeGenerator([]), []),
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
var reverseList = function (head) {
    let r = null;
    if (head != null) {
        r = new ListNode(head.val);
        head = head.next;
    }
    while (head != null) {
        let _n = new ListNode(head.val);
        _n.next = r;
        r = _n;
        head = head.next;
    }
    return r;
};
// let a = reverseList(cases[0].nums, cases[0].target);
// console.log("ANS", listVisitor(a), cases[0].ans);
cases.forEach(element => {
    let a = reverseList(element.nums, element.target);
    console.log("ANS", listVisitor(a), element.ans);
});