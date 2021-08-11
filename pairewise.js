function pairwise(arr, arg) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] !== null && arr[j] !== null) {
                if (arr[i] + arr[j] === arg) {
                    sum = sum + i + j
                    arr[i] = null
                    arr[j] = null
                }
            }
        }
    }
    return sum;
}

pairwise([1, 4, 2, 3, 0, 5], 7);