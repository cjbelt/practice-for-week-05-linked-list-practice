class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const node = new LinkedListNode(val);

    node.next = this.head;
    this.head = node;
    this.length++;
  }

  addToTail(val) {
    // Your code here
    if (this.head) {
      let current = this.head;

      for (let i = 0; i < this.length - 1; i++) {
        current = current.next;
      }

      current.next = new LinkedListNode(val);
    } else {
      this.head = new LinkedListNode(val);
    }

    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
