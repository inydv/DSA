/**
 * Priority Queue implementation
 */
class PriorityQueue {
    constructor() {
        this.items = [];
    }
    
    /**
     * Queue element with priority
     * @param {any} element - Element to be added
     * @param {number} priority - Priority of the element (lower number = higher priority)
     */
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        
        if (!added) {
            this.items.push(queueElement);
        }
    }
    
    /**
     * Remove and return the highest priority element
     * @returns {any} - The highest priority element or undefined if queue is empty
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift().element;
    }
    
    /**
     * Return the highest priority element without removing it
     * @returns {any} - The highest priority element or undefined if queue is empty
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0].element;
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
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 2);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 3);
console.log("Queue size:", priorityQueue.size());
console.log("Highest priority element:", priorityQueue.peek());
console.log("Dequeued element:", priorityQueue.dequeue());
console.log("Queue size after dequeue:", priorityQueue.size()); 