class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedLIst {
    constructor(head = null) {
        this.head = head
        this.size = 0
    }

    //insert first node
    insertFirst = (data) => {
        this.head = new Node(data, this.head)
        this.size++
        return
    }

    //insert last node
    insertLast = (data) => {
        let current = this.head
        if (current === null) {
            this.head = new Node(data)
            this.size++
            return
        }
        while (current.next) {
            current = current.next
            if (current.next === null) {
                current.next = new Node(data)
                current.next.next = null
                this.size++
                return
            }
        }
    }

    //insert at index
    insertAt = (data, index) => {
        if (index > 0 && index > this.size) {
            return
        }
        if (index === 0) {
            this.insertFirst(data)
            return
        }

        let current = this.head
        let previous
        let count = 0

        while (count < index) {
            count++
            previous = current
            current = current.next
        }

        const node = new Node(data)
        node.next = current
        previous.next = node
        return
    }

    //get at index
    getAt = (index) => {
        let current = this.head
        let count = 0
        while (current) {
            if (count === index) {
                return current
            }
            current = current.next
            count++
        }
        return
    }

    //remove at index
    removeAt = (index) => {
        if (index > 0 && index > this.size) {
            return
        }
        if (index === 0) {
            this.head = this.head.next
            size--
            return
        }

        let current = this.head
        let previous
        let count = 0

        while (count < index) {
            count++
            previous = current
            current = current.next
        }
        previous.next = current.next
        size--
        return
    }

    //search for value
    searchList = (data) => {
        let current = this.head
        while (current) {
            if (current.data === data) {
                return current
            }
            current = current.next
        }
        return null
    }

    //clear list
    clearList = () => {
        this.head = null
        this.size = 0
        return
    }

    //print list
    printList = () => {
        let current = this.head
        let list = ''
        while (current) {
            list += `${current.data} -> `
            current = current.next
        }
        list += `null`
        console.log(list)
    }
}