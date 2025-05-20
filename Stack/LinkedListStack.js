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
 * Stack implementation using linked list
 */
class LinkedListStack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    
    /**
     * Push element to the top of the stack
     * @param {any} element - Element to be pushed
     */
    push(element) {
        const newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
    
    /**
     * Remove and return the top element from the stack
     * @returns {any} - The top element or undefined if stack is empty
     */
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        
        const poppedElement = this.top.data;
        this.top = this.top.next;
        this.size--;
        return poppedElement;
    }
    
    /**
     * Return the top element without removing it
     * @returns {any} - The top element or undefined if stack is empty
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.top.data;
    }
    
    /**
     * Check if the stack is empty
     * @returns {boolean} - True if stack is empty, false otherwise
     */
    isEmpty() {
        return this.size === 0;
    }
    
    /**
     * Get the size of the stack
     * @returns {number} - Number of elements in the stack
     */
    getSize() {
        return this.size;
    }
    
    /**
     * Clear all elements from the stack
     */
    clear() {
        this.top = null;
        this.size = 0;
    }
}

// Example usage
const stack = new LinkedListStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack size:", stack.getSize());
console.log("Top element:", stack.peek());
console.log("Popped element:", stack.pop());
console.log("Stack size after pop:", stack.getSize()); 