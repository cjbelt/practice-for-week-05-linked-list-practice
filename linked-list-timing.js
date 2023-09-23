const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
// Singly linked list

let singleList = new LinkedList();

console.log("addToHead");
let startTime = Date.now();
for (let i = 100000; i >= 0; i--) {
    singleList.addToHead(i);
}
let endTime = Date.now();
console.log(endTime - startTime);

singleList = new LinkedList();

console.log("addToTail");
startTime = Date.now();
for (let i = 0; i < 100000; i++) {
    singleList.addToTail(i);
}
endTime = Date.now();
console.log(endTime - startTime);

// doubly linked list
let doublyList = new DoublyLinkedList();

console.log("addToHead");
startTime = Date.now();

for (let i = 0; i < 100000; i++) {
    doublyList.addToHead(i);
}

endTime = Date.now();
console.log(endTime - startTime);

doublyList = new DoublyLinkedList();

console.log("addToTail");

startTime = Date.now();

for (let i = 0; i < 100000; i++) {
    doublyList.addToTail(i);
}

endTime = Date.now();
console.log(endTime - startTime);

// impressions: all methods performed well except the singly list addToTail
