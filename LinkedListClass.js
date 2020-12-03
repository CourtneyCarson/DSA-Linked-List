class _Node {
  constructor(value, next) {
    this.value = value; 
    this.next = next; 
  }
}

class LinkedList {
  constructor() {
    this.head = null; 
  }

  insertFirst(item) {
  this.head = new _Node(item, this.head)
}
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null);
    }
    tempNode.next = new _Node(item, null);
  }
  find(item) {
    //start at head
    let currNode = this.head; 
    // if list is empty
    if (!this.head) {
      return null;
    }
    // check for the item
    while (currNode.value !== item) {
    /* return null if not end of list and item not on list */
      if (currNode.next === null) {
        return null; 
      }
      else {
        //otherwise keep looking
        currNode = currNode.next
      }
    }
    //found it
    return currNode;
  }
  remove(item) {
  // if list empty
    if (!this.head) {
      return null; 
    }
    // if node to be removed is head, make next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('item not found');
      return;
    }
    previousNode.next = currNode.next; 
}



}