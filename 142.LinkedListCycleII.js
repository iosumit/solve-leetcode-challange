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
    new Case(listNodeGenerator([3, 2, 0, -4]), 1),
    new Case(listNodeGenerator([1, 2]), 0,),
    new Case(listNodeGenerator([1]), -1),
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
var detectCycle = function (head) {
    let _m = new Map();
    let counter = 0
    while (head != null) {
        if (_m.has(head)) {
            return _m.get(head);
        }
        _m.set(head, counter);
        counter++
        head = head.next;
    }
    return null;
};
// let a = reverseList(cases[0].nums, cases[0].target);
// console.log("ANS", listVisitor(a), cases[0].ans);
cases.forEach(element => {
    let a = detectCycle(element.nums);
    console.log("ANS", a, element.ans);
});