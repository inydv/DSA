/*
Binary Tree - Maximum 2 nodes
Binary Search Tree (BST) - Left Node < Root < Right Node

        A         ← Root
       / \
      B   C       ← B and C are children of A; C is parent of F
     / \   \
    D   E   F     ← D and E are children of B; F is right child of C;

Leaf Node: A node that has no children.
Subtree: Any node and all its descendants form a subtree.
Depth: The number of edges from the root to the node.
Height: The number of edges on the longest path from the node to a leaf.
Level: The level of a node is the number of edges from the root. Root is at level 0.
Balanced Tree: A tree where the left and right subtrees of every node differ in height by at most 1.
Complete Binary Tree: All levels are completely filled except possibly the last, which is filled from left to right.
Full Binary Tree: Every node has 0 or 2 children.
Perfect Binary Tree: All internal nodes have two children and all leaf nodes are at the same level.


Breadth-First Search (BFS) - Level by Level (Top-Down)
Depth-First Search (DFS) - InOrder, PreOrder, PostOrder
*/

// Node class
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Tree class
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert node (Level-order insertion)
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();

      if (!current.left) {
        current.left = newNode;
        return;
      }
      queue.push(current.left);

      if (!current.right) {
        current.right = newNode;
        return;
      }
      queue.push(current.right);
    }
  }

  // Search node (BFS)
  search(value) {
    if (!this.root) return false;

    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      if (current.value === value) return true;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return false;
  }

  // Delete node (replace with the deepest node)
  delete(value) {
    if (!this.root) return null;

    let toDelete = null;
    let lastNode = null;
    const queue = [this.root];

    while (queue.length) {
      lastNode = queue.shift();
      if (lastNode.value === value) toDelete = lastNode;
      if (lastNode.left) queue.push(lastNode.left);
      if (lastNode.right) queue.push(lastNode.right);
    }

    if (toDelete) {
      toDelete.value = lastNode.value;
      this._deleteDeepest(lastNode);
    }
  }

  // Helper to delete the deepest node
  _deleteDeepest(nodeToDelete) {
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      if (current.left) {
        if (current.left === nodeToDelete) {
          current.left = null;
          return;
        } else queue.push(current.left);
      }
      if (current.right) {
        if (current.right === nodeToDelete) {
          current.right = null;
          return;
        } else queue.push(current.right);
      }
    }
  }

  // Traversals

  // In-order: L → Root → R
  inOrder(node = this.root) {
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  // Pre-order: Root → L → R
  preOrder(node = this.root) {
    if (!node) return;
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  // Post-order: L → R → Root
  postOrder(node = this.root) {
    if (!node) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }

  // Level-order: BFS
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

// Example usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);

console.log("In-order:");
tree.inOrder();

console.log("Search 30:", tree.search(30)); // true
console.log("Search 99:", tree.search(99)); // false

tree.delete(20);
console.log("After deleting 20, Level-order:");
tree.levelOrder();
