export function clearpath(grid){
    const newgrid=[...grid]
    for(let r=0;r<grid.length;r++){
        for(let c=0;c< grid[r].length;c++)
        {
            newgrid[r][c].isVisited=false;
            newgrid[r][c].isPath=false;
            newgrid[r][c].PreviousNode=null;
            newgrid[r][c].distance = Infinity;
            newgrid[r][c].gScore = Infinity;
            newgrid[r][c].fScore = Infinity;
            newgrid[r][c].EndPreviousNode=null;
        }
    }
    return newgrid
}