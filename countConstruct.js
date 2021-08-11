const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return 1

    let totalCount = 0
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            totalCount += countConstruct(target.slice(word.length), wordBank, memo)
        }
    }

    memo[target] = totalCount
    return memo[target]
}

const countConstructTab = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0)
    table[0] = 1
    for (let i = 0; i <= target.length; i++) {
        if (table[i] !== 0) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    if (i + word.length <= target.length) table[i + word.length] += table[i]
                }
            }
        }
    }
    return table[target.length]
}

console.log(countConstructTab('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(countConstructTab('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee', 'eeeeeeeef']))