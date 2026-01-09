# 🌳 Binary Search Tree (BST)

## 📌 How a Binary Search Tree Works

A Binary Search Tree follows these fundamental rules:

- Each node has **at most two children**
- All values in the **left subtree** are **less than** the parent node
- All values in the **right subtree** are **greater than** the parent node

---

## ➕ Inserting a Node

### Step 1: Create the Node (Insert)

- Create a new node containing the value to be inserted

### Step 2: Start at the Root (Insert)

- If the tree is **empty**, the new node becomes the root
- Otherwise, begin comparison at the root node

### Step 3: Compare Values (Insert)

- **If the new value is greater** than the current node:
  - Move to the **right child**
    - If it exists, repeat the comparison
    - If it does not exist, insert the new node as the **right child**
- **If the new value is smaller** than the current node:
  - Move to the **left child**
    - If it exists, repeat the comparison
    - If it does not exist, insert the new node as the **left child**

---

## 🔍 Finding a Node

### Step 1: Start at the Root (Search)

- If the tree is **empty**, the search ends immediately

### Step 2: Compare Values (Search)

- If the current node’s value **matches** the target value, the search is complete
- Otherwise, compare the target value with the current node

### Step 3: Traverse the Tree (Search)

- **If the target value is greater** than the current node:
  - Move to the **right child**
    - If it exists, repeat the process
    - If it does not exist, the value is not in the tree
- **If the target value is smaller** than the current node:
  - Move to the **left child**
    - If it exists, repeat the process
    - If it does not exist, the value is not in the tree

---

## 🌐 Breadth-First Search (BFS)

### Step 1: Initialize (BFS)

- Create a **queue** (e.g. an array)
- Create a list to store the **visited node values**

### Step 2: Start with the Root (BFS)

- Add the root node to the queue

### Step 3: Traverse Level by Level (BFS)

- While the queue is not empty:
  - Dequeue a node and add its value to the visited list
  - If the node has a **left child**, enqueue it
  - If the node has a **right child**, enqueue it

### Step 4: Return the Result (BFS)

- Return the list containing the visited node values

---

## 🌲 Depth-First Search (DFS) — Preorder

### Step 1: Initialize (DFS Preorder)

- Create a list to store the **visited node values**
- Store the root node in a variable called `current`

### Step 2: Define the Helper Function (DFS Preorder)

- The helper function accepts a node and:
  - Adds the node’s value to the visited list
  - Recursively visits the **left child**, if it exists
  - Recursively visits the **right child**, if it exists

### Step 3: Execute the Traversal (DFS Preorder)

- Invoke the helper function starting from `current`

### Step 4: Return the Result (DFS Preorder)

- Return the list of visited node values

---

## 🌲 Depth-First Search (DFS) — Postorder

### Step 1: Initialize (DFS Postorder)

- Create a list to store the **visited node values**
- Store the root node in a variable called `current`

### Step 2: Define the Helper Function (DFS Postorder)

- The helper function accepts a node and:
  - Recursively visits the **left child**, if it exists
  - Recursively visits the **right child**, if it exists
  - Adds the node’s value to the visited list

### Step 3: Execute the Traversal (DFS Postorder)

- Invoke the helper function starting from `current`

### Step 4: Return the Result (DFS Postorder)

- Return the list of visited node values

---

## 🌲 Depth-First Search (DFS) — Inorder

### Step 1: Initialize (DFS Inorder)

- Create a list to store the **visited node values**
- Store the root node in a variable called `current`

### Step 2: Define the Helper Function (DFS Inorder)

- The helper function accepts a node and:
  - Recursively visits the **left child**, if it exists
  - Adds the node’s value to the visited list
  - Recursively visits the **right child**, if it exists

### Step 3: Execute the Traversal (DFS Inorder)

- Invoke the helper function starting from `current`

### Step 4: Return the Result (DFS Inorder)

- Return the list of visited node values

---

## Examples

### insert(value)

Inserts a new value into the tree while maintaining BST properties.

**Parameters:**

- `value`: The value to insert

**Returns:**

- The tree instance (for chaining), or `undefined` if the value already exists

**Example:**

```javascript
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
```

**Time Complexity:** O(log n) average, O(n) worst case

---

### find(value)

Searches for a value in the tree.

**Parameters:**

- `value`: The value to search for

**Returns:**

- `true` if the value exists, `false` otherwise

**Example:**

```javascript
tree.find(7); // true
tree.find(20); // false
```

**Time Complexity:** O(log n) average, O(n) worst case

---

### bfs()

Performs a Breadth-First Search traversal of the tree (level by level).

**Returns:**

- An array of values in BFS order

**Example:**

```javascript
// Tree structure:
//       10
//      /  \
//     5    15
//    / \
//   3   7

tree.bfs(); // [10, 5, 15, 3, 7]
```

**Time Complexity:** O(n)

---

### dfsPreOrder()

Performs a Depth-First Search traversal using Pre-Order (Root → Left → Right).

**Returns:**

- An array of values in pre-order

**Example:**

```javascript
// Tree structure:
//       10
//      /  \
//     5    15
//    / \
//   3   7

tree.dfsPreOrder(); // [10, 5, 3, 7, 15]
```

**Time Complexity:** O(n)

---

### dfsPostOrder()

Performs a Depth-First Search traversal using Post-Order (Left → Right → Root).

**Returns:**

- An array of values in post-order

**Example:**

```javascript
// Tree structure:
//       10
//      /  \
//     5    15
//    / \
//   3   7

tree.dfsPostOrder(); // [3, 7, 5, 15, 10]
```

**Time Complexity:** O(n)

---

### dfsInOrder()

Performs a Depth-First Search traversal using In-Order (Left → Root → Right). This returns values in sorted order for a BST.

**Returns:**

- An array of values in sorted order

**Example:**

```javascript
// Tree structure:
//       10
//      /  \
//     5    15
//    / \
//   3   7

tree.dfsInOrder(); // [3, 5, 7, 10, 15]
```

**Time Complexity:** O(n)

---

## Complete Usage Example

```javascript
// Create a new tree
const bst = new BinarySearchTree();

// Insert values
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(20);

// Resulting tree:
//        10
//       /  \
//      5    15
//     / \   / \
//    3   7 12  20

// Search for values
console.log(bst.find(7)); // true
console.log(bst.find(100)); // false

// Traverse the tree
console.log(bst.bfs()); // [10, 5, 15, 3, 7, 12, 20]
console.log(bst.dfsPreOrder()); // [10, 5, 3, 7, 15, 12, 20]
console.log(bst.dfsPostOrder()); // [3, 7, 5, 12, 20, 15, 10]
console.log(bst.dfsInOrder()); // [3, 5, 7, 10, 12, 15, 20]
```

## Traversal Comparison

| Method         | Order               | Use Case                                        |
| -------------- | ------------------- | ----------------------------------------------- |
| **BFS**        | Level by level      | Finding shortest path, level-order operations   |
| **Pre-Order**  | Root → Left → Right | Creating a copy of the tree, prefix expressions |
| **In-Order**   | Left → Root → Right | Getting sorted values from BST                  |
| **Post-Order** | Left → Right → Root | Deleting the tree, postfix expressions          |

## Space Complexity

- **Storage:** O(n) where n is the number of nodes
- **Traversal methods:** O(n) for the result array + O(h) for recursion stack (where h is height)
