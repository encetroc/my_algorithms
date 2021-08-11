const LinkedList = require('./tdd-linked-list')

describe('#insertAtHead', () => {
    test('it adds the element to the beginning of the list', () => {
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)
        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
})

describe('#getByIndex', () => {
    describe('with index less than 0', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 20)
            expect(ll.getByIndex(-1)).toBeNull()
        })
    })

    describe('with index greater than list length', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 20)
            expect(ll.getByIndex(3)).toBeNull()
        })
    })

    describe('with index 0', () => {
        test('it returns list head', () => {
            const ll = LinkedList.fromValues(10, 20)
            expect(ll.getByIndex(0).value).toBe(10)
        })
    })

    describe('with index in the list', () => {
        test('it returns the node at the precise index', () => {
            const ll = LinkedList.fromValues(10, 20, 30)
            expect(ll.getByIndex(1).value).toBe(20)
        })
    })
})

describe('#insertAtIndex', () => {
    describe('with index less than 0', () => {
        test('it does not insert any thing', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertAtIndex(-1, 30)
            expect(ll.length).toBe(2)
        })
    })

    describe('with index greater than list length', () => {
        test('it does not insert any thing', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertAtIndex(3, 30)
            expect(ll.length).toBe(2)
        })
    })

    describe('with index 0', () => {
        test('it inserts at the head', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertAtIndex(0, 30)
            expect(ll.length).toBe(3)
            expect(ll.head.value).toBe(30)
            expect(ll.head.next.value).toBe(10)
        })
    })

    describe('with index in the list', () => {
        test('it inserts at precise index', () => {
            const ll = LinkedList.fromValues(10, 20, 40, 50)
            ll.insertAtIndex(2, 30)
            const node = ll.getByIndex(2)
            expect(ll.length).toBe(5)
            expect(node.value).toBe(30)
            expect(node.next.value).toBe(40)
        })
    })
})

describe('#removeAtHead', () => {
    test('it removes the element from the beginning of the list', () => {
        const ll = LinkedList.fromValues(10, 20, 30)
        ll.removeAtHead()
        expect(ll.head.value).toBe(20)
        expect(ll.head.next.value).toBe(30)
        expect(ll.length).toBe(2)
    })
})

describe('#removeAtIndex', () => {
    describe('with index less than 0', () => {
        test('it does not remove anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.removeAtIndex(-1)
            expect(ll.length).toBe(2)
        })
    })

    describe('with index greater than list length', () => {
        test('it does not remove anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.removeAtIndex(3)
            expect(ll.length).toBe(2)
        })
    })

    describe('with index 0', () => {
        test('it removes a node at the head', () => {
            const ll = LinkedList.fromValues(10, 20, 30)
            ll.removeAtIndex(0)
            expect(ll.length).toBe(2)
            expect(ll.head.value).toBe(20)
            expect(ll.head.next.value).toBe(30)
        })
    })

    describe('with index in the list', () => {
        test('it removes a node at precise index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40, 50)
            ll.removeAtIndex(2)
            const node = ll.getByIndex(2)
            expect(ll.length).toBe(4)
            expect(node.value).toBe(40)
            expect(node.next.value).toBe(50)
        })
    })
})
