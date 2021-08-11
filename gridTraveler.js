const gridTraveler = (m, n, memo = {}) => {
    const key = `${m},${n}`
    const keyReversed = `${n},${m}`
    if (key in memo) return memo[key]
    if (keyReversed in memo) return memo[keyReversed]
    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
    return memo[key]
}

const gridTravelerTab = (m, n) => {
    const table = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0))
    table[1][1] = 1
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (j + 1 <= n) table[i][j + 1] += table[i][j]
            if (i + 1 <= n) table[i + 1][j] += table[i][j]
        }
    }
    return table[m][n]
}

console.log(gridTravelerTab(20, 20))