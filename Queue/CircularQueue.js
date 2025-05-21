/**
 * Circular Queue implementation
 */
class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.front = -1;
    this.rear = -1;
    this.size = 0;
  }

  /**
   * Add element to the end of the queue
   * @param {any} element - Element to be added
   * @returns {boolean} - True if element was added, false if queue is full
   */
  enqueue(element) {
    if (this.isFull()) {
      return false;
    }

    if (this.isEmpty()) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;
    this.size++;
    return true;
  }

  /**
   * Remove and return the first element from the queue
   * @returns {any} - The first element or undefined if queue is empty
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const element = this.items[this.front];
    this.items[this.front] = null;

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }

    this.size--;
    return element;
  }

  /**
   * Return the first element without removing it
   * @returns {any} - The first element or undefined if queue is empty
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.front];
  }

  /**
   * Check if the queue is empty
   * @returns {boolean} - True if queue is empty, false otherwise
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Check if the queue is full
   * @returns {boolean} - True if queue is full, false otherwise
   */
  isFull() {
    return this.size === this.capacity;
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
    this.items = new Array(this.capacity);
    this.front = -1;
    this.rear = -1;
    this.size = 0;
  }
}

// Example usage
const queue = new CircularQueue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Queue size:", queue.getSize());
console.log("Front element:", queue.peek());
console.log("Dequeued element:", queue.dequeue());
console.log("Queue size after dequeue:", queue.getSize());
