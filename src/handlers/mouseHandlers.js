function handleMouseDown(row,col,grid,setIsDragStart,setIsDragEnd,setMousePressed,setIsRemovingWall,toggleWall){
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
    function handleMouseUp(setIsDragEnd,setIsDragStart,setMousePressed,setIsRemovingWall){
        setIsDragEnd(false);
        setIsDragStart(false);
        setMousePressed(false);
        setIsRemovingWall(false);
    }
    function handleMouseEnter(row,col,isDragStart,isDragEnd,moveStartNode,moveEndNode,mousePressed,isRemovingWall,removeWall,addWall){
        
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

export{handleMouseDown,handleMouseEnter,handleMouseUp}