import { CreateGrid } from "../utils/CreateGrid";
export function animateMaze(nodes,setGrid,setIsAnimating,startPosition,endPosition){
    setIsAnimating(true);
    const mazeGrid = CreateGrid(22,52);
for(const row of mazeGrid){
    for(const node of row){
        node.isStart = false;
        node.isEnd = false;
        node.isWall = true;
    }
}
mazeGrid[startPosition.row][startPosition.col].isWall = false;
mazeGrid[startPosition.row][startPosition.col].isStart = true;
mazeGrid[endPosition.row][endPosition.col].isWall = false;
mazeGrid[endPosition.row][endPosition.col].isEnd = true;
    setGrid(mazeGrid);
    setTimeout(()=>{
        for(let i=0;i<nodes.length;i++){
            setTimeout(()=>{
                setGrid(prev=>{
                    const copy=[...prev];
                    const node=nodes[i];
                    copy[node.row][node.col].isWall=false;
                    return [...copy];
                });
                if(i===nodes.length-1)
                    setIsAnimating(false);

            },10*i);
        }
    },50);
}