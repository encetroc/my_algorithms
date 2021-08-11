const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    for (let num of numbers) {
        const remainder = targetSum - num
        const remainderResult = howSum(remainder, numbers, memo)
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num]
            return memo[targetSum]
        }
    }

    memo[targetSum] = null
    return null
}

const howSumTab = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null)
    table[0] = []
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                if (i + m <= targetSum) {
                    table[i + num] = [...table[i], num]
                }
            }
        }
    }
    return table[targetSum]
}

console.log(howSum(300, [9, 14]))