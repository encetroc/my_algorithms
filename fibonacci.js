const fibonacci = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 2) return 1
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    return memo[n]
}

const fibonacciTab = (n) => {
    const table = Array(n + 1).fill(0)
    table[1] = 1
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i]
        table[i + 2] += table[i]
    }
    return table[n]
}

console.log(fibonacciTab(50))