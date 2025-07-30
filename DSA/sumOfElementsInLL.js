
class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0
  }
  printList() {
    if(this.size === 0) {
      return 'Empty'
    }
    let curr = this.head;
    let listValues = '';
    while(curr) {
      listValues += `${curr.value} => `;
      curr = curr.next;
    }
    console.log(listValues)
  }
  append(value) {
    const node = new Node(value);
    if(this.size === 0) {
      this.head = node;
    } else {
      let curr = this.head;
      while(curr.next !== null) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }
  sum() {
    if(this.size < 5) {
      return 0;
    }
    let index = 0;
    let mid = Math.floor(this.size/2);
    let sum = 0;
    let curr = this.head;
    while(curr) {
      if(index < mid-2 || index > mid+2 ) {
        sum += curr.value;
      }
      index++;
      curr = curr.next;
    }
    return sum;
    
  }
}

const list = new LinkedList();
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.append(70)


list.printList();
console.log(list.sum())








