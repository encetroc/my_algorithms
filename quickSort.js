function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    const pivot = array[array.length - 1]
    const leftArray = []
    const rightArray = []

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            leftArray.push(array[i])
        } else {
            rightArray.push(array[i])
        }
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))