export function moveStartNode(row, col,grid,setGrid,startPosition,setStartPosition) {
    const newGrid = [...grid];
        const newStart =newGrid[row][col];
        if(newStart.isWall)
            return;
    const oldStart =newGrid[startPosition.row][startPosition.col];
    oldStart.isStart = false;
    newStart.isStart = true;

    setStartPosition({
        row,
        col
    });

    setGrid(newGrid);
}

export function moveEndNode(row, col,grid,setGrid,endPosition,setEndPosition) {
    const newGrid = [...grid];
    const newEnd =newGrid[row][col];
        if(newEnd.isWall)
            return;
    
    const oldEnd =
        newGrid[endPosition.row][endPosition.col];
    oldEnd.isEnd = false;



    newEnd.isEnd = true;

    setEndPosition({
        row,
        col
    });

    setGrid(newGrid);
}