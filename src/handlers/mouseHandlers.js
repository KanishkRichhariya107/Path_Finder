import { toggleWall,removeWall,addWall } from "./wallHandlers";
function handleMouseDown(row,col,grid,setGrid,setIsDragStart,setIsDragEnd,setMousePressed,setIsRemovingWall){
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
        toggleWall(row,col,grid,setGrid)
    }
    function handleMouseUp(setMousePressed,setIsDragStart,setIsDragEnd,setIsRemovingWall){
        setIsDragEnd(false);
        setIsDragStart(false);
        setMousePressed(false);
        setIsRemovingWall(false);
    }
    function handleMouseEnter(row,col,grid,setGrid,isDragStart,isDragEnd,moveStartNode,moveEndNode,mousePressed,isRemovingWall){
        
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
            removeWall(row,col,grid,setGrid);
        else
            addWall(row,col,grid,setGrid);
        
        
    }

export{handleMouseDown,handleMouseEnter,handleMouseUp}