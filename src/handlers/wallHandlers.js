export function toggleWall(row,col,grid,setGrid){
        const newGrid=[...grid]
            if(newGrid[row][col].isStart || newGrid[row][col].isEnd) {
        return;
    }
        newGrid[row][col].isWall=!newGrid[row][col].isWall;
        setGrid(newGrid)
    }
export function addWall(row,col,grid,setGrid){
    const newGrid=[...grid];
    const node=newGrid[row][col];
    if(node.isStart || node.isEnd)
        return;
    node.isWall=true;
    setGrid([...newGrid]);
}
export function removeWall(row,col,grid,setGrid){

    const newGrid=[...grid];

    const node=newGrid[row][col];

    node.isWall=false;

    setGrid([...newGrid]);
}