/**
 * Queue implementation using array
 */
class ArrayQueue {
    constructor() {
        this.items = [];
    }
    
    /**
     * Add element to the end of the queue
     * @param {any} element - Element to be added
     */
    enqueue(element) {
        this.items.push(element);
    }
    
    /**
     * Remove and return the first element from the queue
     * @returns {any} - The first element or undefined if queue is empty
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }
    
    /**
     * Return the first element without removing it
     * @returns {any} - The first element or undefined if queue is empty
     */
    front() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }
    
    /**
     * Check if the queue is empty
     * @returns {boolean} - True if queue is empty, false otherwise
     */
    isEmpty() {
        return this.items.length === 0;
    }
    
    /**
     * Get the size of the queue
     * @returns {number} - Number of elements in the queue
     */
    size() {
        return this.items.length;
    }
    
    /**
     * Clear all elements from the queue
     */
    clear() {
        this.items = [];
    }
}

// Example usage
const queue = new ArrayQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Queue size:", queue.size());
console.log("Front element:", queue.front());
console.log("Dequeued element:", queue.dequeue());
console.log("Queue after dequeue:", queue.items); 