export function animatePath(path,grid,setGrid,setIsAnimating){
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