const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    let shortestCombination = null
    for (let num of numbers) {
        const remainder = targetSum - num
        let combination = betSum(remainder, numbers, memo)
        if (combination !== null) {
            combination = [...combination, num]
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = [...combination]
            }
            memo[targetSum] = shortestCombination
        }
    }

    memo[targetSum] = shortestCombination
    return shortestCombination
}

const bestSumTab = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null)
    table[0] = []
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                if (i + num <= targetSum) {
                    const combination = [...table[i], num]
                    if (!table[i + num] || combination.length < table[i + num].length) table[i + num] = combination
                }
            }
        }
    }
    return table[targetSum]
}

console.log(bestSumTab(100, [1, 2, 5, 25]))