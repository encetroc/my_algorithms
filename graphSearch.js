// data
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

// graph
const adjacencyList = new Map()

const addNode = (airport) => {
    adjacencyList.set(airport, [])
}

const addEdge = (origin, destination) => {
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}

airports.forEach(airport => addNode(airport))
routes.forEach(route => addEdge(...route))

console.log(adjacencyList)

// BFS

const bfs = (start, end) => {
    const visited = new Set()
    const queue = [start]
    while (queue.length > 0) {
        const airport = queue.shift()
        const destinations = adjacencyList.get(airport)
        for (let destination of destinations) {
            if (!visited.has(destination)) {
                queue.push(destination)
                visited.add(destination)
            }
            if (destination === end) {
                return true
            }
        }
    }
    return false
}

// DFS

const dfs = (start, end, visited = new Set()) => {
    visited.add(start)
    const destinations = adjacencyList.get(start)
    for (let destination of destinations) {
        if (destination === end) {
            return true
        }
        if (!visited.has(destination)) {
            return dfs(destination, end, visited)
        }
    }
    return false
}

console.log(dfs('PHX', 'LAP'))