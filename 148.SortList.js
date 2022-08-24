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
    new Case(listNodeGenerator([4, 2, 1, 3]), [1, 2, 3, 4]),
    new Case(listNodeGenerator([2, 1, 3, 5, 6, 4, 7]), [2, 3, 6, 7, 1, 5, 4]),
    new Case(listNodeGenerator([-1, 5, 3, 4, 0]), [-1, 0, 3, 4, 5]),
    new Case(listNodeGenerator([]), []),
    new Case(listNodeGenerator([1]), [1]),
    new Case(listNodeGenerator([2, 1]), [1]),
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
var sortList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let firstHalf = head;
    let secHalf = secondHalf(head);
    let fhs = sortList(firstHalf);
    let shs = sortList(secHalf);

    return mergeSort(fhs, shs);
};
function mergeSort(a, b) {
    let f = null;
    if (!a) {
        return b;
    } else if (!b) {
        return a;
    } else if (a.val <= b.val) {
        f = a;
        f.next = mergeSort(f.next, b);
    } else {
        f = b;
        f.next = mergeSort(a, f.next);
    }
    return f;
}

function secondHalf(l) {
    let fast = l.next;
    let slow = l;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let split = slow.next;
    slow.next = null;
    return split;
}
// let a = mergeTwoLists(cases[0].nums, cases[0].target);
// console.log("ANS", listVisitor(a), cases[0].ans);
cases.forEach(element => {
    let a = sortList(element.nums, element.target);
    console.log("ANS", listVisitor(a), element.ans);
});