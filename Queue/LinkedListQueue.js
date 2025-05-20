/**
 * Node class for linked list implementation
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Queue implementation using linked list
 */
class LinkedListQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    
    /**
     * Add element to the end of the queue
     * @param {any} element - Element to be added
     */
    enqueue(element) {
        const newNode = new Node(element);
        
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        
        this.size++;
    }
    
    /**
     * Remove and return the first element from the queue
     * @returns {any} - The first element or undefined if queue is empty
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        
        const dequeuedElement = this.front.data;
        this.front = this.front.next;
        
        if (this.front === null) {
            this.rear = null;
        }
        
        this.size--;
        return dequeuedElement;
    }
    
    /**
     * Return the first element without removing it
     * @returns {any} - The first element or undefined if queue is empty
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.front.data;
    }
    
    /**
     * Check if the queue is empty
     * @returns {boolean} - True if queue is empty, false otherwise
     */
    isEmpty() {
        return this.size === 0;
    }
    
    /**
     * Get the size of the queue
     * @returns {number} - Number of elements in the queue
     */
    getSize() {
        return this.size;
    }
    
    /**
     * Clear all elements from the queue
     */
    clear() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
}

// Example usage
const queue = new LinkedListQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Queue size:", queue.getSize());
console.log("Front element:", queue.peek());
console.log("Dequeued element:", queue.dequeue());
console.log("Queue size after dequeue:", queue.getSize()); 