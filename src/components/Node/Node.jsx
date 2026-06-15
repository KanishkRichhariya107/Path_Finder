import React from 'react'
import './Node.css'
function Node({ node,onMouseDown,
    onMouseEnter,
    onMouseUp }){
    let extraclass="";
    if(node.isEnd)
        extraclass="finish"
    else if(node.isStart)
        extraclass="start"
    else if(node.isWall)
        extraclass="wall"
  return (  
    <div className={`node ${extraclass}`}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    onMouseEnter={onMouseEnter}
    >
      
    </div>
  )
}

export default Node
