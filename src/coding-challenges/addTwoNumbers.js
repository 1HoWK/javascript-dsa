/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sum = 0;
    let carryForward = 0;
    let list = new ListNode(0);
    let head = list;

    while (l1 !== null || l2 !== null || sum !== 0) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            sum -= 10;
            carryForward++;
        }

        head.next = new ListNode(sum);
        head = head.next;
        sum = carryForward;
        carryForward = 0
    }
    return list.next;
};
