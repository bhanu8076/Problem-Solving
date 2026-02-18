// Recursive Reverse Linked List (JS with input/output)
// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Function to reverse linked list recursively
function reverseList(head) {
  if (!head || !head.next) return head;

  let newHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
}

// Helper function to print list
function printList(head) {
  let curr = head;
  let result = "";
  while (curr) {
    result += curr.value + " -> ";
    curr = curr.next;
  }
  console.log(result + "null");
}

// ===== Input (create list) =====
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

// Output before reverse
console.log("Original List:");
printList(head);

// Reverse using recursion
head = reverseList(head);

// Output after reverse
console.log("Reversed List:");
printList(head);