const LinkedList = require('./tdd-linked-list')

const ll = new LinkedList()
ll.insertAtHead(20)
ll.insertAtHead(10)
ll.insertAtHead(30)
ll.insertAtHead(40)
ll.print()
console.log(ll.getByIndex(0).value)