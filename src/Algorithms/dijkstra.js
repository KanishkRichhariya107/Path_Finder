function getNeighbours(grid, node) {
    const neighbours = [];
    const { row, col } = node;

    if (row > 0)
        neighbours.push(grid[row - 1][col]);

    if (row < grid.length - 1)
        neighbours.push(grid[row + 1][col]);

    if (col > 0)
        neighbours.push(grid[row][col - 1]);

    if (col < grid[0].length - 1)
        neighbours.push(grid[row][col + 1]);

    return neighbours;
}

function getShortestPath(endNode) {
    const path = [];

    let curr = endNode;

    while (curr !== null) {
        path.unshift(curr);
        curr = curr.PreviousNode;
    }

    return path;
}

function getAllNodes(grid) {
    const nodes = [];

    for (const row of grid) {
        for (const node of row) {
            nodes.push(node);
        }
    }

    return nodes;
}

export function dijkstra(grid, startNode, endNode) {

    const visitedNodes = [];

    startNode.distance = 0;

    const unvisitedNodes = getAllNodes(grid);

    while (unvisitedNodes.length > 0) {

        unvisitedNodes.sort(
            (a, b) => a.distance - b.distance
        );

        const closestNode =
            unvisitedNodes.shift();

        if (closestNode.isWall)
            continue;

        if (closestNode.distance === Infinity)
            break;

        closestNode.isVisited = true;

        visitedNodes.push(closestNode);

        if (closestNode === endNode) {
            return {
                visitedNodes,
                path: getShortestPath(endNode)
            };
        }

        const neighbours =
            getNeighbours(grid, closestNode);

        for (const neighbour of neighbours) {

            if (neighbour.isVisited)
                continue;

            const newDistance =
                closestNode.distance + 1;

            if (newDistance < neighbour.distance) {

                neighbour.distance =
                    newDistance;

                neighbour.PreviousNode =
                    closestNode;
            }
        }
    }

    return {
        visitedNodes,
        path: []
    };
}