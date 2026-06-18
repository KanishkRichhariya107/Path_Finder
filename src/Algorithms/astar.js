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

function getShortestPath(endNode){
    const path=[];
    let curr=endNode;
    while(curr!==null){
        path.unshift(curr);
        curr=curr.PreviousNode;
    }
    return path;
}

function heuristic(node,endNode){
    return (
        Math.abs(node.row-endNode.row)+Math.abs(node.col-endNode.col)
    );
}

export function astar(grid,startNode,endNode)
{
    const openSet=[];
    const visitedNodes=[];
    startNode.gScore=0;
    startNode.fScore=
        heuristic(startNode,endNode);
    openSet.push(startNode);
    while(openSet.length>0){
        openSet.sort((a,b)=>a.fScore-b.fScore);
        const current=openSet.shift();
        if(current.isWall)
            continue;
        if(current.isVisited)
            continue;
        current.isVisited=true;
        visitedNodes.push(current);
        if(current===endNode){
            return{
                visitedNodes,
                path:
                    getShortestPath(
                        endNode
                    )
            };
        }

        const neighbours=
            getNeighbours(
                grid,
                current
            );

        for(
            const neighbour
            of neighbours
        ){

            if(
                neighbour.isWall
            )
                continue;

            const tentativeGScore=
                current.gScore+1;

            if(
                tentativeGScore
                <
                neighbour.gScore
            ){

                neighbour.PreviousNode=
                    current;

                neighbour.gScore=
                    tentativeGScore;

                neighbour.fScore=
                    tentativeGScore
                    +
                    heuristic(
                        neighbour,
                        endNode
                    );

                openSet.push(
                    neighbour
                );
            }
        }
    }

    return{
        visitedNodes,
        path:[]
    };
}