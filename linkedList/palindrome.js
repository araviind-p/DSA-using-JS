/**
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

//leetcode 234

var isPalindrome = function (head) {
    let res1 = ""
    let res2 = ""
    while (head != null) {
        res1 += head.val
        res2 = head.val + res2
        head = head.next
    }
    return res1 === res2
};