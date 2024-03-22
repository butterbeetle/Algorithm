/** 00:07:17
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
    const stack = [];

    while (head) {
        stack.push(head.val);
        head = head.next
    }

    let l = 0;
    let r = stack.length - 1;

    while (l <= r) {
        if (stack[l++] !== stack[r--]) return false
    }

    return true
};