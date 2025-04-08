class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    printList() {
        if(this.size === 0) {
            return console.log("Empty");            
        }
        let listValues = "";
        let curr = this.head;
        while(curr) {
            listValues += `${curr.value} => `;
            curr = curr.next;
        }
        console.log(listValues);        
    }
    appendNode(value) {
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
        this.size++
    }
    prependNode(value) {
        const node = new Node(value)
        if(this.size === 0) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    reverse() {
        if(this.size === 0) {
            return console.log("Empty");            
        }
        let curr = this.head;
        let prev = null;
        while(curr !== null) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        this.head = prev;
    }
    sort() {
        if(this.size === 0) {
            return console.log("Empty");            
        }        
        let swapped;
        do {
            swapped = false;
            let curr = this.head;
            while(curr.next !== null)  {
                if(curr.next.value <curr.value) {
                    [curr.value, curr.next.value] = [curr.next.value, curr.value];
                    swapped = true;
                }
                curr = curr.next;
            }
        } while(swapped)
    }
    removeDuplicatesFromSortedList() {
        let curr = this.head;
        while(curr.next !== null) {
            if(curr.value === curr.next.value) {
                curr.next = curr.next.next;
                this.size--;
            } else {
                curr = curr.next;
            }
        }
    }
    removeDuplicatesFromUnsortedList() {
        let seen = new Set();
        let prev = null;
        let curr = this.head;
        while(curr) {
            if( seen.has(curr.value) ) {
                prev.next = curr.next
            } else {
                seen.add(curr.value);
                prev = curr
            }
            curr = curr.next;
        }
    }
    sumOfFirstAndLast() {
        if(this.size < 4) {
            return console.log("Insufficient data");            
        }
        let firstSum, lastSum, prev;
        let curr = this.head;
        while(curr.next !== null) {
            if(curr === this.head) {
                firstSum = curr.value + curr.next.value;
            }
            prev = curr;
            curr = curr.next;
        }
        lastSum = prev.value + curr.value;
        return firstSum+lastSum;
    }
    merge(list) {
        if(this.size === 0) {
            this.head = list.head;
        } else {
            let curr = this.head;
            while(curr.next !== null) {
                curr = curr.next;
            }
            curr.next = list.head;
        }
        this.size += list.size;
    }
    delete(value) {
        if(this.size === 0) {
            console.log("Empty");            
        }
        while(this.head !== null && this.head.value === value) {
            this.head = this.head.next;
            this.size--;
        }
        let curr = this.head;
        while(curr.next !== null) {
            if(curr.next.value === value) {
                curr.next = curr.next.next;
                this.size--;
            } else {
                curr = curr.next;
            }
        }
    }
    removeRepeatedEntry() {
        if(this.size === 0) {
            return console.log("Empty list");            
        }
        let map = new Map();
        let curr = this.head;
        while(curr) {
            map.set(curr.value, (map.get(curr.value) || 0) + 1);
            curr = curr.next;
        }
        let dummy = new Node(0);
        let prev = dummy;
        dummy.next = this.head;
        let current = this.head;
        while(current.next !== null) {
            if(map.get(current.value) > 1) {
                prev.next = current.next;
                this.size--;
            } else {
                prev = current;
            }
            current = current.next;
        }
        this.head = dummy.next;      
    }

}

const list = new LinkedList();
const list1 = new LinkedList();
list.appendNode(11);
list.appendNode(7);
list.appendNode(3);
list.appendNode(4);
list.appendNode(6);
list.appendNode(3);
list.prependNode(9)
list.printList();
list.reverse();
list.sort();
list.printList();
console.log(list.sumOfFirstAndLast());
list1.appendNode(11);
list1.appendNode(7);
list1.appendNode(2);
list1.appendNode(3);
list.printList()
list.delete(6)
list.removeDuplicatesFromSortedList()
list.printList()
list.merge(list1);
list.printList()
list.removeRepeatedEntry()
list.printList()


