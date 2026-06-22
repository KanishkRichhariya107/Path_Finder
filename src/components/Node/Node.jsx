import React from 'react'
import './Node.css'
import startIcon from "../../assets/r7lg_f6vb_210528.jpg";
import startIcon1 from "../../assets/final.png";
import startIcon2 from "../../assets/rat-svgrepo-com.svg";
import finishIcon from "../../assets/banana-blackbarry-blackberries-svgrepo-com.svg";
import finishIcon1 from "../../assets/cheese-1-svgrepo-com.svg";

function Node({ node,onMouseDown,
    onMouseEnter,
    onMouseUp }){
    let extraclass="";
     if(node.isPath)
        extraclass="path"
    else if(node.isEnd)
        extraclass="finish"
    else if(node.isStart)
        extraclass="start"
    else if(node.isVisited)
        extraclass="visited"
    else if(node.isWall)
        extraclass="wall"

  return (  
    <div className={`node ${extraclass}`}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    onMouseEnter={onMouseEnter}
    >
    {
        node.isStart &&
        <img
            src={startIcon2}
            className="node-icon"
             
        />
    }

    {
        node.isEnd &&
        <img
            src={finishIcon1}
            className="node-icon"
        />
    }
      
    </div>
  )
}

export default Node
