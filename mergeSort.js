function merge(leftArr, rightArr) {
    const output = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            output.push(leftArr[leftIndex])
            leftIndex++
        } else {
            output.push(rightArr[rightIndex])
            rightIndex++
        }
    }
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array
    }

    const middleIndex = Math.floor(array.length / 2)
    const leftArr = array.slice(0, middleIndex)
    const rightArr = array.slice(middleIndex)

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}