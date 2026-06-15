import React, { useState } from 'react'
import { CreateGrid } from '../../utils/CreateGrid'
import Node from '../Node/Node'
import { bfs } from '../../Algorithms/bfs'

const Grid = () => {
    const [grid,setGrid]=useState(CreateGrid(30,40))
    const [mousePressed, setMousePressed] = useState(false);
    const [isDragStart, setIsDragStart] = useState(false);
    const [isDragEnd, setIsDragEnd] = useState(false);
    const [startPosition, setStartPosition] = useState({
    row: 10,
    col: 5
});

const [endPosition, setEndPosition] = useState({
    row: 10,
    col: 30
});

    console.log(grid)
    
    function toggleWall(row,col){
        const newGrid=[...grid]
            if(newGrid[row][col].isStart || newGrid[row][col].isEnd) {
        return;
    }
        newGrid[row][col].isWall=!newGrid[row][col].isWall;
        setGrid(newGrid)
    }
    function moveStartNode(row, col) {
    const newGrid = [...grid];
        const newStart =newGrid[row][col];
        if(newStart.isWall)
            return;

    const oldStart =
        newGrid[startPosition.row][startPosition.col];

    oldStart.isStart = false;



    newStart.isStart = true;

    setStartPosition({
        row,
        col
    });

    setGrid(newGrid);
}
function moveEndNode(row, col) {
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
    function handleMouseDown(row,col){
        const node=grid[row][col]
        if(node.isStart){
            setIsDragStart(true)
            return;
        }
        if(node.isEnd){
            setIsDragEnd(true)
            return;
        }
        toggleWall(row,col)
        setMousePressed(true);

    }
    function handleMouseUp(row,col){
        setIsDragEnd(false);
        setIsDragStart(false);
        setMousePressed(false);
    }
    function handleMouseEnter(row,col){
        
        if(isDragStart){
                     moveStartNode(row,col)
                     return;
        }
        if(isDragEnd){
                     moveEndNode(row,col)
                     return;
        }
        if(!mousePressed) return;
        toggleWall(row,col);
    }
const startnode=grid[startPosition.row][startPosition.col]
const EndNode=grid[endPosition.row][endPosition.col]
const result=bfs(grid,startnode,EndNode)
console.log("visited nodes are")
console.log(result.visitedNodes)
console.log("resuleted path is")
console.log(result.path)

  return (
    <div>
      {
        grid.map((row,rowIndex)=>(
            
        <div key={rowIndex} style={{display:'flex'}}>
            {
                
                row.map((node)=>(
                    <Node
                    key={`${node.row}-${node.col}`}
                    node={node}
                    onMouseDown={()=>handleMouseDown(node.row,node.col)}
                    onMouseUp={()=>handleMouseUp(node.row,node.col)}
                    onMouseEnter={()=>handleMouseEnter(node.row,node.col)}
                    />
                ))
            }

        </div>
        ))
      }
    </div>
  )
}

export default Grid
