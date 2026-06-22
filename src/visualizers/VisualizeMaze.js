import { CreateGrid } from "../utils/CreateGrid";
import { clearpath } from "../utils/clearpath";
import { recursiveMaze } from "../Algorithms/MazeAlgorithms/recursiveMaze";
import { primMaze } from "../Algorithms/MazeAlgorithms/primMaze";
import { animateMaze } from "../animations/animateMaze";
export function generateRecursiveMaze(grid,setGrid,setIsAnimating,startPosition,endPosition){
    const newgrid= clearpath(grid)
       setGrid([...newgrid]);
    const newGrid=CreateGrid(22,52);
    const nodes=recursiveMaze(newGrid);
    animateMaze(nodes,setGrid,setIsAnimating,startPosition,endPosition);
}
export function generatePrimMaze(grid,setGrid,setIsAnimating,startPosition,endPosition){
const newgrid= clearpath(grid)
       setGrid([...newgrid])
    const newGrid=CreateGrid(22,52);
    const nodes=primMaze(newGrid);
    animateMaze(nodes,setGrid,setIsAnimating,startPosition,endPosition);
}