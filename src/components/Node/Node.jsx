import React from 'react'
import './Node.css'
const Node = ({node}) => {
  return (
    <div className={`node
    ${node.isStart ?"start":""}
    ${node.isEnd?"finish":""}
    ${node.isWall?"wall":""}
    `}>
      
    </div>
  )
}

export default Node
