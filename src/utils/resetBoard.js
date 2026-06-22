import { CreateGrid } from "./CreateGrid";
export function resetBoard(setGrid,setStartPosition,setEndPosition,setMousePressed,setIsDragStart,setIsDragEnd){
    setGrid(CreateGrid(22,52));
    setStartPosition({row:10,col:10});
    setEndPosition({row:10,col:45});
    setMousePressed(false);
    setIsDragStart(false);
    setIsDragEnd(false);
}