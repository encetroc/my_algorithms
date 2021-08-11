const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return [[]]

    let result = []
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank, memo)
            const targetWays = suffixWays.map(way => [word, ...way])
            result.push(...targetWays)
        }
    }

    memo[target] = result
    return result
}

const allConstructTab = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(() => [])
    table[0] = [[]]
    for (let i = 0; i <= target.length; i++) {
        if (table[i].length !== 0) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    const currentCombinations = table[i].map(el => [...el, word])
                    table[i + word.length].push(...currentCombinations)
                }
            }
        }
    }
    return table[target.length]
}

console.log(allConstructTab('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
//console.log(allConstructTab('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee', 'eeeeeeee']))