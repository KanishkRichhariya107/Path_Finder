import React, { useState } from 'react'
import { CreateGrid } from '../../utils/CreateGrid'
import Node from '../Node/Node'

const Grid = () => {
    const [grid,setGrid]=useState(CreateGrid(30,40))
    console.log(grid)
  return (
    <div>
      {
        grid.map((row,rowIndex)=>(
            
        <div key={rowIndex} style={{display:'flex'}}>
            {
                
                row.map((node)=>(
                    <Node
                    key={`${node.row}-${node.col}`}
                    node={node}
                    />
                ))
            }

        </div>
        ))
      }
    </div>
  )
}

export default Grid
