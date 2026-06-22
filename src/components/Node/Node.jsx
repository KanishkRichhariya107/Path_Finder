import React from 'react'
import './Node.css'

import startIcon from "../../assets/rat-svgrepo-com.svg";
import finishIcon from "../../assets/cheese-1-svgrepo-com.svg";

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
            src={startIcon}
            className="node-icon"
             
        />
    }

    {
        node.isEnd &&
        <img
            src={finishIcon}
            className="node-icon"
        />
    }
      
    </div>
  )
}

export default Node
