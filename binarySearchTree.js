class Node {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value)
        this.count = 0
    }

    size() {
        return this.count
    }

    insert(value) {
        this.count++
        const newNode = new Node(value)

        const searchTree = (node) => {
            if (value < node.value) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    searchTree(node.left)
                }
            } else if (value > node.value) {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    searchTree(node.right)
                }
            }
        }

        searchTree(this.root)
    }

    min() {
        let currentNode = this.root
        while (currentNode.left) {
            currentNode = currentNode.left
        }
        return currentNode
    }

    max() {
        let currentNode = this.root
        while (currentNode.right) {
            currentNode = currentNode.right
        }
        return currentNode
    }

    contains(value) {
        let currentNode = this.root
        while (currentNode) {
            if (value === currentNode.value) {
                return true
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }
        return false
    }

    // left -> root -> right
    dfsInOrder() {
        const result = []
        const traverse = node => {
            if (node.left) traverse(node.left)
            result.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return result
    }

    // root -> left -> right
    dfsPreOrder() {
        const result = []
        const traverse = node => {
            result.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return result
    }

    // left -> right -> root
    dfsPostOrder() {
        const result = []
        const traverse = node => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            result.push(node.value)
        }
        traverse(this.root)
        return result
    }

    bfs() {
        let result = []
        let queue = []
        queue.push(this.root)
        while (queue.length) {
            let currentNode = queue.shift()
            result.push(currentNode.value)
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return result
    }
}

const bst = new BST(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

bst.size()

bst.min()
bst.max()

bst.contains(2)
bst.contains(9)

// DFS!!!
// in-order: 2, 3, 12, 15, 28, 36, 39
console.log('in order', bst.dfsInOrder())

// pre-order: 15, 3, 2, 12, 36, 28, 39
console.log('pre order', bst.dfsPreOrder())

// post-order: 2, 12, 3, 28, 39, 36, 15
console.log('post order', bst.dfsPostOrder())

// BFS!!!
// 15, 3, 36, 2, 12, 28, 39
console.log('post order', bst.bfs())
