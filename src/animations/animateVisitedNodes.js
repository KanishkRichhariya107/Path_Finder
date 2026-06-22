import {animatePath} from "./animatePath"
export function animateVisitedNodes(path,visitedNodes,grid,
    setGrid,setIsAnimating){
        for(let i=0;i<visitedNodes.length;i++){
            setTimeout(() => {
                const node=visitedNodes[i];
                const newGrid=[...grid]
                newGrid[node.row][node.col].isVisited=true;
                setGrid([...newGrid]);
            if(i === visitedNodes.length - 1) {
                animatePath(path,grid,setGrid,setIsAnimating);
            }
            }, 2*i);
        }
    }