/**
 * Node class for circular doubly linked list implementation
 */
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

/**
 * Circular Doubly Linked List implementation
 */
class CircularDoublyLinkedList {
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
        
        if (this.isEmpty()) {
            newNode.next = newNode;
            newNode.prev = newNode;
            this.head = newNode;
        } else {
            newNode.next = this.head;
            newNode.prev = this.head.prev;
            this.head.prev.next = newNode;
            this.head.prev = newNode;
            this.head = newNode;
        }
        
        this.size++;
    }
    
    /**
     * Add element at the end of the list
     * @param {any} data - Data to be added
     */
    addLast(data) {
        const newNode = new Node(data);
        
        if (this.isEmpty()) {
            newNode.next = newNode;
            newNode.prev = newNode;
            this.head = newNode;
        } else {
            newNode.next = this.head;
            newNode.prev = this.head.prev;
            this.head.prev.next = newNode;
            this.head.prev = newNode;
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
        
        if (position === this.size) {
            this.addLast(data);
            return;
        }
        
        const newNode = new Node(data);
        let current = this.head;
        let index = 0;
        
        while (index < position) {
            current = current.next;
            index++;
        }
        
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
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
        
        if (this.size === 1) {
            this.head = null;
        } else {
            this.head.next.prev = this.head.prev;
            this.head.prev.next = this.head.next;
            this.head = this.head.next;
        }
        
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
        
        const removedData = this.head.prev.data;
        this.head.prev.prev.next = this.head;
        this.head.prev = this.head.prev.prev;
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
        
        if (position === this.size - 1) {
            return this.removeLast();
        }
        
        let current = this.head;
        let index = 0;
        
        while (index < position) {
            current = current.next;
            index++;
        }
        
        const removedData = current.data;
        current.prev.next = current.next;
        current.next.prev = current.prev;
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
        if (this.isEmpty()) {
            return [];
        }
        
        const result = [];
        let current = this.head;
        
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);
        
        return result;
    }
}

// Example usage
const list = new CircularDoublyLinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);
console.log("List size:", list.getSize());
console.log("List elements:", list.toArray());
console.log("Element at position 1:", list.getAt(1));
console.log("Removed first:", list.removeFirst());
console.log("List after removal:", list.toArray()); 