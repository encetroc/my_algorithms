const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return true
    if (targetSum < 0) return false

    for (let num of numbers) {
        const remainder = targetSum - num
        if (canSum(remainder, numbers, memo)) {
            memo[targetSum] = true
            return true
        }
    }

    memo[targetSum] = false
    return false
}

const canSumTab = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false)
    table[0] = true
    for (let i = 0; i <= table.length; i++) {
        if (table[i]) {
            for (let num of numbers) {
                if (i + num <= table.length) table[i + num] = true
            }
        }
    }
    return table[targetSum]
}

console.log(canSumTab(100, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]))