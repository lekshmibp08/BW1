class Queue {
    constructor () {
        this.items = [];
    }
    enqueue(value) {
        this.items.push(value);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        return this.items[0];
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.toString());;
        
    }
}

const queue = new Queue;

console.log(queue.isEmpty());       //true
console.log(queue.size());          //0

queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.print();                     // 100,200,300

console.log(queue.size());         //3
console.log(queue.peek());         //100
console.log(queue.dequeue());      //100
console.log(queue.size());         //2
console.log(queue.peek());         //200
console.log(queue.isEmpty());      //false
