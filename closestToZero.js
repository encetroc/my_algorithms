const closestToZero = (array) => {
    const arr = [...array]
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (!result) {
            result = arr[i]
        } else {
            if (Math.abs(result) === Math.abs(arr[i])) {
                if (result < arr[i]) result = arr[i]
            } else if (Math.abs(result) > Math.abs(arr[i])) {
                result = arr[i]
            }
        }
    }
    console.log(result)
    return result
}

closestToZero([10, 11, 12, 15, -13, -5, -10, 19, 5, -12])