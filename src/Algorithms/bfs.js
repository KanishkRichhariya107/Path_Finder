function getNeighbours(grid,node){
    const neighbours=[]
    const {row,col}=node
    if(row>0)
        neighbours.push(grid[row-1][col])
    if(row<grid.length-1)
        neighbours.push(grid[row+1][col])
    if(col>0)
        neighbours.push(grid[row][col-1])
    if(col<grid[0].length-1)
        neighbours.push(grid[row][col+1])

    return neighbours;
}
function getshortestpath(endNode){
    const path=[]
    let curr=endNode
    while(curr!==null){
        path.unshift(curr)
        curr=curr.PreviousNode
    }
    return path;
}
export function bfs(grid,startNode,EndNode){
    const queue=[]
    const visitedNodes=[]
    queue.push(startNode)
    while(queue.length>0){
        const currNode=queue.shift();
        if(currNode.isWall)
            continue;
        if(currNode.isVisited)
            continue;
        currNode.isVisited=true;
        visitedNodes.push(currNode)
        if(currNode==EndNode){
            return{
                visitedNodes,
                path:getshortestpath(EndNode)
            }
        }
        const neighbours=getNeighbours(grid,currNode)
        for(const neighbour of neighbours){
            if(neighbour.isVisited){
                continue;
            }
            if(neighbour.isWall)
                continue;
            if(neighbour.PreviousNode===null)
                neighbour.PreviousNode=currNode
            queue.push(neighbour)
        }
    }
    return {
        visitedNodes,
        path:[]
    }

}