const binarySearchIterative = (arr, value) => {
    let high = arr.length - 1
    let low = 0
    let mid = 0

    while (low <= high) {
        mid = Math.floor((high + low) / 2)
        if (arr[mid] === value) {
            return arr[mid]
        } else if (arr[mid] > value) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}

const binarySearchRecursive = (arr, value) => {
    if (arr.length <= 1) {
        if (arr[0] === value) {
            return arr[0]
        } else {
            return -1
        }
    }

    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid + 1)

    if (arr[mid] == value) {
        return arr[mid]
    } else if (arr[mid] > value) {
        return binarySearchRecursive(leftArr, value)
    } else {
        return binarySearchRecursive(rightArr, value)
    }
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 13))