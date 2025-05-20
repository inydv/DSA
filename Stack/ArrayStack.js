/**
 * Stack implementation using array
 */
class ArrayStack {
    constructor() {
        this.items = [];
    }
    
    /**
     * Push element to the top of the stack
     * @param {any} element - Element to be pushed
     */
    push(element) {
        this.items.push(element);
    }
    
    /**
     * Remove and return the top element from the stack
     * @returns {any} - The top element or undefined if stack is empty
     */
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }
    
    /**
     * Return the top element without removing it
     * @returns {any} - The top element or undefined if stack is empty
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }
    
    /**
     * Check if the stack is empty
     * @returns {boolean} - True if stack is empty, false otherwise
     */
    isEmpty() {
        return this.items.length === 0;
    }
    
    /**
     * Get the size of the stack
     * @returns {number} - Number of elements in the stack
     */
    size() {
        return this.items.length;
    }
    
    /**
     * Clear all elements from the stack
     */
    clear() {
        this.items = [];
    }
}

// Example usage
const stack = new ArrayStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack size:", stack.size());
console.log("Top element:", stack.peek());
console.log("Popped element:", stack.pop());
console.log("Stack after pop:", stack.items); 