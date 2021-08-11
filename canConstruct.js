const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return true

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            memo[target] = canConstruct(suffix, wordBank, memo)
            if (memo[target]) return true
        }
    }

    memo[target] = false
    return false
}

const canConstructTab = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false)
    table[0] = true
    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    if (i + word.length <= target.length) table[i + word.length] = true
                }
            }
        }
    }
    return table[target.length]
}

console.log(canConstructTab('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(canConstructTab('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee', 'eeeeeeee']))