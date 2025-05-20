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
 * Single Linked List implementation
 */
class SingleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    /**
     * Add element at the beginning of the list
     * @param {any} data - Data to be added
     */
    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    
    /**
     * Add element at the end of the list
     * @param {any} data - Data to be added
     */
    addLast(data) {
        const newNode = new Node(data);
        
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        
        this.size++;
    }
    
    /**
     * Add element at a specific position
     * @param {any} data - Data to be added
     * @param {number} position - Position to add the element (0-based)
     */
    addAt(data, position) {
        if (position < 0 || position > this.size) {
            throw new Error("Invalid position");
        }
        
        if (position === 0) {
            this.addFirst(data);
            return;
        }
        
        const newNode = new Node(data);
        let current = this.head;
        let previous = null;
        let index = 0;
        
        while (index < position) {
            previous = current;
            current = current.next;
            index++;
        }
        
        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }
    
    /**
     * Remove first element from the list
     * @returns {any} - Removed element or undefined if list is empty
     */
    removeFirst() {
        if (this.isEmpty()) {
            return undefined;
        }
        
        const removedData = this.head.data;
        this.head = this.head.next;
        this.size--;
        return removedData;
    }
    
    /**
     * Remove last element from the list
     * @returns {any} - Removed element or undefined if list is empty
     */
    removeLast() {
        if (this.isEmpty()) {
            return undefined;
        }
        
        if (this.size === 1) {
            const removedData = this.head.data;
            this.head = null;
            this.size = 0;
            return removedData;
        }
        
        let current = this.head;
        let previous = null;
        
        while (current.next) {
            previous = current;
            current = current.next;
        }
        
        const removedData = current.data;
        previous.next = null;
        this.size--;
        return removedData;
    }
    
    /**
     * Remove element at a specific position
     * @param {number} position - Position to remove the element (0-based)
     * @returns {any} - Removed element or undefined if position is invalid
     */
    removeAt(position) {
        if (position < 0 || position >= this.size) {
            return undefined;
        }
        
        if (position === 0) {
            return this.removeFirst();
        }
        
        let current = this.head;
        let previous = null;
        let index = 0;
        
        while (index < position) {
            previous = current;
            current = current.next;
            index++;
        }
        
        const removedData = current.data;
        previous.next = current.next;
        this.size--;
        return removedData;
    }
    
    /**
     * Get element at a specific position
     * @param {number} position - Position to get the element (0-based)
     * @returns {any} - Element at the position or undefined if position is invalid
     */
    getAt(position) {
        if (position < 0 || position >= this.size) {
            return undefined;
        }
        
        let current = this.head;
        let index = 0;
        
        while (index < position) {
            current = current.next;
            index++;
        }
        
        return current.data;
    }
    
    /**
     * Check if the list is empty
     * @returns {boolean} - True if list is empty, false otherwise
     */
    isEmpty() {
        return this.size === 0;
    }
    
    /**
     * Get the size of the list
     * @returns {number} - Number of elements in the list
     */
    getSize() {
        return this.size;
    }
    
    /**
     * Clear all elements from the list
     */
    clear() {
        this.head = null;
        this.size = 0;
    }
    
    /**
     * Convert the list to an array
     * @returns {Array} - Array containing all elements in the list
     */
    toArray() {
        const result = [];
        let current = this.head;
        
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        
        return result;
    }
}

// Example usage
const list = new SingleLinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);
console.log("List size:", list.getSize());
console.log("List elements:", list.toArray());
console.log("Element at position 1:", list.getAt(1));
console.log("Removed first:", list.removeFirst());
console.log("List after removal:", list.toArray()); 