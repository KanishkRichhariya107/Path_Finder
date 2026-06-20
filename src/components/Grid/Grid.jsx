import React, { useState } from 'react'
import { CreateGrid } from '../../utils/CreateGrid'
import Node from '../Node/Node'
import { bfs } from '../../Algorithms/bfs'
import { dfs } from '../../Algorithms/dfs'
import { astar } from '../../Algorithms/astar'
import { dijkstra } from '../../Algorithms/dijkstra'
import { bidirectionalBfs } from '../../Algorithms/bidirectionalBfs'
import { useEffect } from 'react'
import { recursiveMaze } from '../../Algorithms/MazeAlgorithms/recursiveMaze'
import { primMaze } from '../../Algorithms/MazeAlgorithms/primMaze'

import "./Grid.css"
const Grid = ({visualize,setVisualize,Algorithm,reset,setReset,clearPath,setClearPath,isAnimating,setIsAnimating,mazeAlgorithm}) => {
    const [grid,setGrid]=useState(CreateGrid(22,52))
    const [mousePressed, setMousePressed] = useState(false);
    const [isDragStart, setIsDragStart] = useState(false);
    const [isDragEnd, setIsDragEnd] = useState(false);
    const [isRemovingWall, setIsRemovingWall] = useState(false);
    const [startPosition, setStartPosition] = useState({
    row: 10,
    col: 10
});

const [endPosition, setEndPosition] = useState({
    row: 10,
    col: 45
});
useEffect(()=>{
    if(!reset)
        return;
    resetBoard();
    setReset(false);
},[reset])
useEffect(()=>{

    if(mazeAlgorithm==="Recursive Maze")
        generateRecursiveMaze();
    else if(mazeAlgorithm==="Prim Maze")
        generatePrimMaze();
    else return;

},[mazeAlgorithm]);
function resetBoard(){

    setGrid(CreateGrid(22,52));

    setStartPosition({
        row:10,
        col:10
    });

    setEndPosition({
        row:10,
        col:45
    });

    setMousePressed(false);
    setIsDragStart(false);
    setIsDragEnd(false);
}
useEffect(() => {

    if(!clearPath)
        return;

    clearpath();

    setClearPath(false);

}, [clearPath]);    
useEffect(() => {
        if(!visualize) return;
        if(Algorithm=="BFS")
            visualizeBFS();
        else if(Algorithm=="DFS")
            visualizeDFS();
        else if(Algorithm=="Dijkstra")
            visualizeDijkstra();
        else if(Algorithm=="A*")
            visualizeAstar();
        else if(Algorithm=="Bi-directional BFS")
            visualizeBidirectionalBFS();
        else return;
        setVisualize(false);

    }, [visualize]);

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
    const oldStart =newGrid[startPosition.row][startPosition.col];
    oldStart.isStart = false;
    newStart.isStart = true;

    setStartPosition({
        row,
        col
    });

    setGrid(newGrid);
}
function addWall(row,col){

    const newGrid=[...grid];

    const node=newGrid[row][col];

    if(node.isStart || node.isEnd)
        return;

    node.isWall=true;

    setGrid([...newGrid]);
}
function removeWall(row,col){

    const newGrid=[...grid];

    const node=newGrid[row][col];

    node.isWall=false;

    setGrid([...newGrid]);
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
        setMousePressed(true);
        if(grid[row][col].isWall){
            setIsRemovingWall(true);
        }
        else{
            setIsRemovingWall(false);
        }        
        toggleWall(row,col)
        

    }
    function handleMouseUp(row,col){
        setIsDragEnd(false);
        setIsDragStart(false);
        setMousePressed(false);
        setIsRemovingWall(false);
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
        if(isRemovingWall)
            removeWall(row,col);
        else
            addWall(row,col);
        
        
    }
    function animateVisitedNodes(path,visitedNodes){
        for(let i=0;i<visitedNodes.length;i++){

            setTimeout(() => {

                const node=visitedNodes[i];
                const newGrid=[...grid]
                newGrid[node.row][node.col].isVisited=true;
                setGrid([...newGrid]);
            if(i === visitedNodes.length - 1) {
                animatePath(path);
            }
            }, 2*i);
        }
    }
    function animatePath(path){
        for(let i=0;i<path.length;i++){

            setTimeout(() => {
                const node=path[i];
                const newGrid=[...grid]
                newGrid[node.row][node.col].isPath=true;
                setGrid([...newGrid])
                if(i===path.length-1){
                setIsAnimating(false);
            }
            }, 20*i);
        }
    }
function clearpath(){
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
    setGrid([...newgrid])
}

function visualizeBFS(){
        clearpath()
        setIsAnimating(true);
    const startnode=grid[startPosition.row][startPosition.col]
    const EndNode=grid[endPosition.row][endPosition.col]
    const result=bfs(grid,startnode,EndNode)
    for(const node of result.visitedNodes){
    node.isVisited = false;
}
    animateVisitedNodes(result.path,result.visitedNodes)

    }
function visualizeBidirectionalBFS(){
        clearpath()
        setIsAnimating(true);
    const startnode=grid[startPosition.row][startPosition.col]
    const EndNode=grid[endPosition.row][endPosition.col]
    const result=bidirectionalBfs(grid,startnode,EndNode)
    for(const node of result.visitedNodes){
    node.isVisited = false;
}
    animateVisitedNodes(result.path,result.visitedNodes)

    }
function visualizeAstar(){
        clearpath()
        setIsAnimating(true);
    const startnode=grid[startPosition.row][startPosition.col]
    const EndNode=grid[endPosition.row][endPosition.col]
    const result=astar(grid,startnode,EndNode)
    for(const node of result.visitedNodes){
    node.isVisited = false;
}
    animateVisitedNodes(result.path,result.visitedNodes)

    }
function visualizeDFS(){
        clearpath()
        setIsAnimating(true);
    const startnode=grid[startPosition.row][startPosition.col]
    const EndNode=grid[endPosition.row][endPosition.col]
    const result=dfs(grid,startnode,EndNode)
    for(const node of result.visitedNodes){
    node.isVisited = false;
}
    console.log(result.visitedNodes.length)
    console.log(result.path.length)
    animateVisitedNodes(result.path,result.visitedNodes)
    }
function visualizeDijkstra(){
        clearpath()
        setIsAnimating(true);
    const startnode=grid[startPosition.row][startPosition.col]
    const EndNode=grid[endPosition.row][endPosition.col]
    const result=dijkstra(grid,startnode,EndNode)
    for(const node of result.visitedNodes){
    node.isVisited = false;
}
    console.log(result.visitedNodes.length)
console.log(result.path.length)
    animateVisitedNodes(result.path,result.visitedNodes)
    }
function animateMaze(nodes){

    setIsAnimating(true);

    const mazeGrid = CreateGrid(22,52);

    for(const row of mazeGrid){
        for(const node of row){

            node.isWall=true;

        }
    }

    mazeGrid[startPosition.row][startPosition.col].isWall=false;
    mazeGrid[startPosition.row][startPosition.col].isStart=true;

    mazeGrid[endPosition.row][endPosition.col].isWall=false;
    mazeGrid[endPosition.row][endPosition.col].isEnd=true;

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
function generateRecursiveMaze(){
clearpath();
    const newGrid=CreateGrid(22,52);

    const nodes=
        recursiveMaze(newGrid);

    animateMaze(nodes);

}
function generatePrimMaze(){
clearpath();
    const newGrid=CreateGrid(22,52);

    const nodes=
        primMaze(newGrid);

    animateMaze(nodes);

}
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
