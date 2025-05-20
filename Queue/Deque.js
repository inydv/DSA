/**
 * Deque (Double-ended Queue) implementation
 */
class Deque {
    constructor() {
        this.items = [];
    }
    
    /**
     * Add element to the front of the deque
     * @param {any} element - Element to be added
     */
    addFront(element) {
        this.items.unshift(element);
    }
    
    /**
     * Add element to the rear of the deque
     * @param {any} element - Element to be added
     */
    addRear(element) {
        this.items.push(element);
    }
    
    /**
     * Remove and return the front element from the deque
     * @returns {any} - The front element or undefined if deque is empty
     */
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }
    
    /**
     * Remove and return the rear element from the deque
     * @returns {any} - The rear element or undefined if deque is empty
     */
    removeRear() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }
    
    /**
     * Return the front element without removing it
     * @returns {any} - The front element or undefined if deque is empty
     */
    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }
    
    /**
     * Return the rear element without removing it
     * @returns {any} - The rear element or undefined if deque is empty
     */
    peekRear() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }
    
    /**
     * Check if the deque is empty
     * @returns {boolean} - True if deque is empty, false otherwise
     */
    isEmpty() {
        return this.items.length === 0;
    }
    
    /**
     * Get the size of the deque
     * @returns {number} - Number of elements in the deque
     */
    size() {
        return this.items.length;
    }
    
    /**
     * Clear all elements from the deque
     */
    clear() {
        this.items = [];
    }
}

// Example usage
const deque = new Deque();
deque.addFront(1);
deque.addRear(2);
deque.addFront(3);
console.log("Deque size:", deque.size());
console.log("Front element:", deque.peekFront());
console.log("Rear element:", deque.peekRear());
console.log("Removed front:", deque.removeFront());
console.log("Removed rear:", deque.removeRear());
console.log("Deque after operations:", deque.items); 