/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if (this.head == null) {
      const inp = new Node(val);
      this.head = inp;
      this.tail = inp;
      this.length++;
    } else {
      const inp = new Node(val);
      this.tail.next = inp;
      inp.prev = this.tail;
      this.tail = inp;
      this.length++;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (this.head == null) {
      const inp = new Node(val);
      this.head = inp;
      this.tail = inp;
      this.length++;
    } else {
      const inp = new Node(val);
      inp.next = this.head;
      this.head = inp;
      this.length++;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    let ans;
    if (this.length > 1) {
      let inp = this.tail;
      this.tail = inp.prev;
      this.length--;
      ans = inp.val;
    } else {
      ans = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    return ans;
  }

  /** shift(): return & remove first item. */

  shift() {
    let ans;
    if (this.length > 1) {
      let inp = this.head;
      this.head = inp.next;
      this.head.prev = null;
      this.length--;
      ans = inp.val;
    } else {
      ans = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    return ans;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let ans = `Index of ${idx} isn't present`;
    let nodeOn = this.head;
    let index = 0;
    while (nodeOn != null) {
      if (index == idx) {
        ans = nodeOn.val;
        return ans;
      }
      index++;
      nodeOn = nodeOn.next;
    }
    return ans;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let nodeOn = this.head;
    let index = 0;
    while (nodeOn != null) {
      if (index == idx) {
        nodeOn.val = val;
        break;
      }
      index++;
      nodeOn = nodeOn.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    //front
    if (idx == 0) {
      if (this.length == 0) {
        const newNode = new Node(val);
        this.head = newNode;
        this.tail = newNode;
        this.length++;
      } else {
        const holder = this.head;
        const newNode = new Node(val);
        holder.prev = newNode;
        newNode.next = holder;
        this.head = newNode;
      }
    }
    //back
    else if (idx == this.length) {
      const holder = this.tail;
      const newNode = new Node(val);
      holder.next = newNode;
      newNode.prev = holder;
      this.tail = newNode;
    }
    //middle
    else {
      let nodeOn = this.head;
      let index = 0;
      while (nodeOn != null) {
        if (idx == index) {
          let temp = nodeOn;
          const newNode = new Node(val);
          newNode.prev = temp.prev;
          newNode.next = temp;
          temp.prev = newNode;
          let previous = newNode.prev;
          previous.next = newNode;
          this.length++;
          break;
        }
        index++;
        nodeOn = nodeOn.next;
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let ans;
    if (idx == 0) {
      ans = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else if (idx == this.length) {
      ans = this.tail.val;
      const holder = this.tail.prev;
      holder.next = null;
      this.tail = holder;
    } else {
      let nodeOn = this.head;
      let index = 0;
      while (nodeOn != null) {
        if (idx == index) {
          ans = nodeOn.val;
          const holder = nodeOn;
          holder.prev = holder.next;
          holder.next = holder.prev;
          break;
        }
        index++;
        nodeOn = nodeOn.next;
      }
    }
    return ans;
  }

  /** average(): return an average of all values in the list */

  average() {
    let ans = 0;
    let index = 0;
    let nodeOn = this.head;
    if (this.head == null) {
      return 0;
    } else {
      while (nodeOn != null) {
        ans += nodeOn.val;
        index++;
        nodeOn = nodeOn.next;
      }
      return ans / index;
    }
  }
}

module.exports = LinkedList;
