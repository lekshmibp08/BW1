class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if(this.size === 0) {
            this.front = newNode;
            this.rear = newNode;
            this.size++;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.size++;
        }
    }
    dequeue() {
        if(this.size === 0) {
            return null;
        }
        let removedValue = this.front.value;
        if(this.front === this.rear) {
            this.front = this.rear = null;
        }
        this.front = this.front.next;
        this.size--;
        return removedValue;
    }
    peek() {
        if(this.size === 0) {
            return null;
        }
        return this.front.value;
    }
    getSize() {
        return this.size;
    }
    print() {
        let queueValues = '';
        if(this.size === 0) {
            return console.log('Queue is Empty...');
        }
        let curr = this.front;
        while(curr) {
            queueValues += `${curr.value}, `;
            curr = curr.next;
        }
        console.log(queueValues);        
    }
}


const queue = new LinkedListQueue;

console.log(queue.getSize());       //0

queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);

console.log(queue.getSize());       //3
console.log(queue.peek());         //100
queue.print()                      //100 200 300 
console.log(queue.dequeue());      //100
console.log(queue.getSize());      //2
console.log(queue.peek());         //200
queue.print()                      //200 300