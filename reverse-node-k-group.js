/**
 * Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
 * 
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let count = 0;
    let node = head;
    while (node && count != k) {
        node = node.next;
        count++;
    }
    if (count == k) {
        node = reverseKGroup(node, k);
        while (count > 0) {
            let temp = head.next;
            head.next = node;
            node = head;
            head = temp;
            count--;
        }
        head = node;
    }
    return head;
};

const testCaseObj = {
    firstCase: {
        head: [1, 2, 3, 4, 5],
        k: 2
    },
    secondCase: {
        head: [1, 2, 3, 4, 5],
        k: 3
    }
};

console.log(reverseKGroup(testCaseObj.firstCase.head, testCaseObj.firstCase.k));
console.log(reverseKGroup(testCaseObj.secondCase.head, testCaseObj.secondCase.k));