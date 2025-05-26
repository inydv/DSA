// Node structure
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BST implementation
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert value into BST
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // Search value in BST
  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      else current = current.right;
    }
    return false;
  }

  // Find minimum value in a subtree
  _findMin(node) {
    while (node.left) node = node.left;
    return node;
  }

  // Delete a node from BST
  delete(value, node = this.root) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.delete(value, node.left);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);
    } else {
      // Node found
      if (!node.left && !node.right) return null; // Leaf node
      if (!node.left) return node.right; // One child
      if (!node.right) return node.left;

      // Two children
      const minNode = this._findMin(node.right);
      node.value = minNode.value;
      node.right = this.delete(minNode.value, node.right);
    }

    if (node === this.root) this.root = node;
    return node;
  }

  // In-order: Left → Root → Right
  inOrder(node = this.root) {
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  // Pre-order: Root → Left → Right
  preOrder(node = this.root) {
    if (!node) return;
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  // Post-order: Left → Right → Root
  postOrder(node = this.root) {
    if (!node) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }

  // Level-order: Breadth-first
  levelOrder() {
    if (!this.root) return;
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      console.log(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}

// Usage example
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("In-order Traversal:");
bst.inOrder(); // 20 30 40 50 60 70 80

console.log("Pre-order Traversal:");
bst.preOrder();

console.log("Search 60:", bst.search(60)); // true
console.log("Search 100:", bst.search(100)); // false

console.log("Deleting 70...");
bst.delete(70);

console.log("Level-order After Deletion:");
bst.levelOrder();
