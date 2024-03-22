/** 00:37:54
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
    const arr = Array.from({ length: m }, () => new Array(n).fill(-1));

    let inc = 1;
    let row = 0;
    let col = -1;

    while (head !== null) {

        for (let i = 0; i < n && head !== null; i++) {
            col += inc
            arr[row][col] = head.val;
            head = head.next;
        }

        m--;
        n--;

        for (let i = 0; i < m && head !== null; i++) {
            row += inc
            arr[row][col] = head.val;
            head = head.next;
        }

        inc *= -1
    }

    return arr
};