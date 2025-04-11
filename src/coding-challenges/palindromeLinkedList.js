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
var isPalindrome = function (head) {
  // convert to array and compare with two pointers
  // Time complexity: O(N)
  // Space complexity: O(N)

  let currentNode = head;
  let arr = [];

  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }

  let l = 0;
  let r = arr.length-1;

  while (l < r) {
    if (arr[l] !== arr[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;

// stack
// Time complexity: O(N)
// Space complexity: O(N)
//   let stack = [];
//   let current = head;

//   while (current) {
//     stack.push(current.val);
//     current = current.next;
//   }

//   current = head;

//   while(current){
//     if (current.val !== stack.pop()) {
//         return false;
//       }
//       current = current.next;
//   }
//   return true;

};
