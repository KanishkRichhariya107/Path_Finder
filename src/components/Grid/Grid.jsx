import React, { useState } from 'react'
import { CreateGrid } from '../../utils/CreateGrid'
import Node from '../Node/Node'
import { useEffect } from 'react'
import {handleMouseDown,handleMouseEnter,handleMouseUp} from "../../handlers/mouseHandlers"
import { Visualize } from '../../visualizers/VisualizeAlgo'
import { moveStartNode,moveEndNode } from '../../handlers/nodeMovement'
import { resetBoard } from '../../utils/resetBoard'
import { clearpath } from '../../utils/clearpath'
import { generatePrimMaze,generateRecursiveMaze } from '../../visualizers/VisualizeMaze'
import "./Grid.css"
const Grid = ({visualize,setVisualize,Algorithm,reset,setReset,clearPath,setClearPath,isAnimating,setIsAnimating,mazeAlgorithm}) => {
    const [grid,setGrid]=useState(CreateGrid(22,52))
    const [mousePressed, setMousePressed] = useState(false);
    const [isDragStart, setIsDragStart] = useState(false);
    const [isDragEnd, setIsDragEnd] = useState(false);
    const [isRemovingWall, setIsRemovingWall] = useState(false);
    const [startPosition, setStartPosition] = useState({row: 10,col: 10});
    const [endPosition, setEndPosition] = useState({row: 10,col: 45});

useEffect(()=>{
    if(!reset)
        return;
    resetBoard(setGrid,setStartPosition,setEndPosition,setMousePressed,setIsDragStart,setIsDragEnd)
    setReset(false);
},[reset])

useEffect(()=>{
        console.log(mazeAlgorithm);
    if(mazeAlgorithm==="Recursive Maze")
        generateRecursiveMaze(grid,setGrid,setIsAnimating,startPosition,endPosition);
    else if(mazeAlgorithm==="Prim Maze")
        generatePrimMaze(grid,setGrid,setIsAnimating,startPosition,endPosition);
    else return;

},[mazeAlgorithm]);


useEffect(() => {
    if(!clearPath)
        return;
    clearpath(grid);
    setClearPath(false);
}, [clearPath]);   

useEffect(() => {
        if(!visualize) return;
        else Visualize(Algorithm,grid,setGrid,setIsAnimating,startPosition,endPosition)
        setVisualize(false);
    }, [visualize]);



  return (
    <div className="grid-container">
      {
        grid.map((row,rowIndex)=>(
            
        <div key={rowIndex} className="grid-row">
            {
                
                row.map((node)=>(
                    <Node
                    key={`${node.row}-${node.col}`}
                    node={node}
                    onMouseDown={()=>handleMouseDown(node.row,node.col,grid,setGrid,setIsDragStart,setIsDragEnd,setMousePressed,setIsRemovingWall)}
                    onMouseUp={()=>handleMouseUp(    setMousePressed,setIsDragStart,setIsDragEnd,setIsRemovingWall)}
                    onMouseEnter={()=>handleMouseEnter(node.row,node.col,grid,setGrid,isDragStart,isDragEnd,moveStartNode,moveEndNode,mousePressed,isRemovingWall,startPosition,endPosition,setStartPosition,setEndPosition)}
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
