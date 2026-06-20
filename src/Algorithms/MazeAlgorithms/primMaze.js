function getNeighbours(grid,node){

    const neighbours=[];

    const row=node.row;
    const col=node.col;

    if(row>1)
        neighbours.push([grid[row-1][col],grid[row-2][col]]);

    if(row<grid.length-2)
        neighbours.push([grid[row+1][col],grid[row+2][col]]);

    if(col>1)
        neighbours.push([grid[row][col-1],grid[row][col-2]]);

    if(col<grid[0].length-2)
        neighbours.push([grid[row][col+1],grid[row][col+2]]);

    return neighbours;
}

export function primMaze(grid){

    const nodes=[];

    for(const row of grid)
        for(const node of row)
            node.isWall=true;

    const current=
grid[
    2*Math.floor(Math.random()*(grid.length/2))+1
][
    2*Math.floor(Math.random()*(grid[0].length/2))+1
];

    current.isWall=false;

    nodes.push(current);

    let frontier=getNeighbours(grid,current);

    while(frontier.length){

        const randomIndex=
            Math.floor(Math.random()*frontier.length);

        const [between,next]=
            frontier[randomIndex];

        frontier.splice(randomIndex,1);

        if(next.isWall){

            next.isWall=false;
            between.isWall=false;

            nodes.push(between);
            nodes.push(next);

            const newNeighbours=
                getNeighbours(grid,next);

            for(const neighbour of newNeighbours)
                frontier.push(neighbour);

        }

    }

    return nodes;
}