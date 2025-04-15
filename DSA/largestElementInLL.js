class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }
    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
        prev.next = node;     
        }
        this.size++;
    }
    largestElement() {
        if(this.isEmpty()) return -1;
        let largest = this.head.value;
        let largestIndex;
        let curr = this.head
        let index = 0;
        while(curr) {
            if(curr.value >= largest) {
                largestIndex = index;
                largest = curr.value;
            }
            curr = curr.next;
            index++;
        }
        return largestIndex;
    }
    
}

const list = new LinkedList();
list.append(7)
list.append(4)
list.append(2)
list.append(9)
list.append(10)
list.append(5)

console.log(list.largestElement());
