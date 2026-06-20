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

    return neighbours.filter(
        ([between,next])=>next.isWall
    );
}

export function recursiveMaze(grid){

    const nodes=[];

    for(const row of grid)
        for(const node of row)
            node.isWall=true;

    const stack=[];

    let start=
grid[
    2*Math.floor(Math.random()*(grid.length/2))+1
][
    2*Math.floor(Math.random()*(grid[0].length/2))+1
];

    start.isWall=false;

    let neighbours=getNeighbours(grid,start);

    stack.push(
        neighbours[
            Math.floor(Math.random()*neighbours.length)
        ]
    );

    while(stack.length){

        const [between,next]=stack[stack.length-1];

        between.isWall=false;
        next.isWall=false;

        nodes.push(between);
        nodes.push(next);

        const nextNeighbours=
            getNeighbours(grid,next);

        if(nextNeighbours.length){

            stack.push(
                nextNeighbours[
                    Math.floor(
                        Math.random()*nextNeighbours.length
                    )
                ]
            );

        }

        else{

            stack.pop();

        }

    }

    return nodes;
}