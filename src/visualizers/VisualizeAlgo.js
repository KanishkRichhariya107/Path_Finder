import {bfs} from "../Algorithms/bfs"
import {dfs} from "../Algorithms/dfs"
import {dijkstra} from "../Algorithms/dijkstra"
import {astar} from "../Algorithms/astar"
import {bidirectionalBfs} from "../Algorithms/bidirectionalBfs"
import {animateVisitedNodes} from "../animations/animateVisitedNodes"
import { clearpath } from "../utils/clearpath"


export function Visualize(Algorithm,grid,setGrid,setIsAnimating,startPosition,endPosition) {
    const newgrid= clearpath(grid)
       setGrid([...newgrid])
        setIsAnimating(true);
    const startnode=newgrid[startPosition.row][startPosition.col]
    const EndNode=newgrid[endPosition.row][endPosition.col]
    let result=[]
    if(Algorithm=="BFS")
     result=bfs(newgrid,startnode,EndNode)
    else if(Algorithm==="DFS")
         result=dfs(newgrid,startnode,EndNode)
    else if(Algorithm==="Dijkstra")
         result=dijkstra(newgrid,startnode,EndNode)
    else if(Algorithm==="A*")
         result=astar(newgrid,startnode,EndNode)
    else if(Algorithm==="Bi-directional BFS")
         result=bidirectionalBfs(newgrid,startnode,EndNode)
    
    for(const node of result.visitedNodes){
    node.isVisited = false;

    }
   animateVisitedNodes(result.path,result.visitedNodes,newgrid,setGrid,setIsAnimating)
}


