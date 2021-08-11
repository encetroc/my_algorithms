function reverseLinkedList(head) {
    let prev = null
    let next = null

    while (head !== null) {
        next = head.next
        head.next = prev
        prev = head
        head = next
    }

    return prev
}