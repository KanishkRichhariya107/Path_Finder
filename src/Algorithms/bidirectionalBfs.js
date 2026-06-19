function getNeighbours(grid,node){

    const neighbours=[];

    const {row,col}=node;

    if(row>0)
        neighbours.push(grid[row-1][col]);

    if(row<grid.length-1)
        neighbours.push(grid[row+1][col]);

    if(col>0)
        neighbours.push(grid[row][col-1]);

    if(col<grid[0].length-1)
        neighbours.push(grid[row][col+1]);

    return neighbours;
}

function buildPath(meetNode){

    const path=[];

    let curr=meetNode;

    while(curr!==null){

        path.unshift(curr);

        curr=curr.PreviousNode;
    }

    curr=meetNode.EndPreviousNode;

    while(curr!==null){

        path.push(curr);

        curr=curr.EndPreviousNode;
    }

    return path;
}

export function bidirectionalBfs(grid,startNode,endNode){
    const startQueue=[];
    const endQueue=[];
    const visitedNodes=[];
    const startVisited=new Set();
    const endVisited=new Set();
    startQueue.push(startNode);
    endQueue.push(endNode);
    startVisited.add(startNode);
    endVisited.add(endNode);
    while(startQueue.length>0 &&endQueue.length>0){
        const currentStart=startQueue.shift();
        visitedNodes.push(currentStart);
        const startNeighbours=getNeighbours(grid,currentStart);

        for(const neighbour of startNeighbours){
            if(neighbour.isWall)
                continue;
            if(startVisited.has(neighbour))
                continue;
            neighbour.PreviousNode=currentStart;
            startVisited.add(neighbour);
            startQueue.push(neighbour);
            if(endVisited.has(neighbour)){
                visitedNodes.push(neighbour);
                return{
                    visitedNodes,
                    path:
                    buildPath(neighbour)
                };
            }
        }
        const currentEnd=endQueue.shift();
        visitedNodes.push(currentEnd);
        const endNeighbours=getNeighbours(grid,currentEnd);
        for(const neighbour of endNeighbours){
            if(neighbour.isWall)
                continue;
            if(endVisited.has(neighbour))
                continue;
            neighbour.EndPreviousNode=currentEnd;
            endVisited.add(neighbour);
            endQueue.push(neighbour);
            if(startVisited.has(neighbour)){
                visitedNodes.push(neighbour);
                return{
                    visitedNodes,
                    path:
                    buildPath(neighbour)
                };
            }
        }
    }

    return{
        visitedNodes,
        path:[]
    };
}