export function CreateNode(row,col){
    const node= {
        row,
        col,
        isStart: row==10&&col==5,
        isEnd: row==10&&col==30,
        isVisited: false,
        isWall: false,
        PreviousNode: null,
        isPath: false,
        distance: Infinity
        }
        return node;
}

export function CreateGrid(row,col){

    const grid=[]
    for( let i=0;i<row;i++){
        const currRow=[]
        for(let j=0;j<col;j++){
            currRow.push(CreateNode(i,j));
        }
        grid.push(currRow);
    }
    return grid

}
