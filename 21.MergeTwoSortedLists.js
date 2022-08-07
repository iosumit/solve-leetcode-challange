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
    new Case(listNodeGenerator([1, 2, 4]), [1, 1, 2, 3, 4, 4], listNodeGenerator([1, 3, 4])),
    new Case(listNodeGenerator([]), [], listNodeGenerator([])),
    new Case(listNodeGenerator([]), [0], listNodeGenerator([0])),
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
var mergeTwoLists = function (list1, list2) {
    let node = null;

    if (list1 != null && list2 != null) {
        node = new ListNode();
        if (list1.val > list2.val) {
            node.val = list2.val;
            list2 = list2.next;
        } else {
            node.val = list1.val;
            list1 = list1.next;
        }
    } else if (list1 != null) {
        node = new ListNode();
        node.val = list1.val;
        list1 = list1.next;
    } else if (list2 != null) {
        node = new ListNode();
        node.val = list2.val;
        list2 = list2.next;
    }
    let start = node;
    while (list1 != null || list2 != null) {
        let _n = new ListNode();
        if (list1 != null && list2 != null) {
            if (list1.val > list2.val) {
                _n.val = list2.val;
                list2 = list2.next;
            } else {
                _n.val = list1.val;
                list1 = list1.next;
            }
        } else if (list1 != null) {
            start.next = list1;
            break;
            // _n.val = list1.val;
            // list1 = list1.next;
            // start.next = _n;
            // start = _n;
        } else if (list2 != null) {
            start.next = list2;
            break;

            // _n.val = list2.val;
            // list2 = list2.next;
        }
        start.next = _n;
        start = _n;
    }
    return node;
};
// let a = mergeTwoLists(cases[0].nums, cases[0].target);
// console.log("ANS", listVisitor(a), cases[0].ans);
cases.forEach(element => {
    let a = mergeTwoLists(element.nums, element.target);
    console.log("ANS", listVisitor(a), element.ans);
});